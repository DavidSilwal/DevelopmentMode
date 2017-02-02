using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RazorLight;
using RazorLight.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Services;

namespace WebApplication.Controllers
{
    public class MessageTestController : Controller
    {
        private readonly IEmailSender _emailSender;
        private readonly IMessageRepository _messageRepository;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly UserStore<IdentityUser,IdentityRole> _userStore;

        public MessageTestController(
            IMessageRepository messageRepository,
            IEmailSender emailSender,
            UserStore<IdentityUser, IdentityRole> userStore,
            UserManager<IdentityUser> userManager)
        {
            _messageRepository = messageRepository;
            _emailSender = emailSender;
            _userStore = userStore;
            _userManager = userManager;
        }
        //public async Task<IActionResult> Index()
        //{
        //    var message = await _messageRepository.FindByMessageTemplateTypeByID("  ");

        //    await _emailSender.SendEmailAsync("de.davidsilwal@gmail.com", message.Subject, message.Body);

        //    return View();
        //}

       public IActionResult SendEmail()
        {
            var message = _messageRepository.FindAll();
            var messagetypeID = message.Result;

            return View();
        }


        public async Task<string> Index()
        {

            var engine = EngineFactory.CreatePhysical(@"D:\Email");

            var message = _messageRepository.FindByMessageTemplateTypeByID("hlw").Result;

            var user = await GetCurrentUserAsync();

            var model = new
            {
                UserName = _userStore.GetUserNameAsync(user).Result.ToString(),
                FirstName = _userStore.GetFirstName(user),
                LastName = _userStore.GetLastName(user),
                Email = await _userStore.GetEmailAsync(user),
            };

            string result = engine.ParseString(message.Body, model);

            await _emailSender.SendEmailAsync("de.davidsilwal@gmail.com", message.Subject, result);

            return String.Format("Sucess");
        }

        protected async Task<IdentityUser> GetCurrentUserAsync()
        {
            return await _userManager.GetUserAsync(HttpContext.User);
        }


    }
}
