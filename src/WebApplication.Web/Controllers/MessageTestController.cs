using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using RazorLight;
using RazorLight.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;
using WebApplication.Models;
using WebApplication.Services;

namespace WebApplication.Controllers
{
    [Authorize()]
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
   
       public async Task<IActionResult> Index()
        {
            var message = _messageRepository.FindAll();
            var messagetypeID = message.Result;

            IEnumerable<String> IQueryItem = from m in messagetypeID
                                             orderby m.MessageTemplateTypeID
                                             select m.MessageTemplateTypeID;

            var selectlist = new SelectList(IQueryItem.Distinct().ToList());

            ViewBag.MessageType = selectlist;

            return View();
        }
        
        [HttpPost]
        public async Task<IActionResult> Index(SendEmailViewModel model)
        {
            var engine = EngineFactory.CreatePhysical(@"D:\Email");

            var user = await GetCurrentUserAsync();

            string messageTypeID = model.MessageTypeID.ToString();

            var message = _messageRepository.FindByMessageTemplateTypeByID(messageTypeID).Result;

            var modelitem = new
            {
                UserName = _userStore.GetUserNameAsync(user).Result.ToString(),
                FirstName = _userStore.GetFirstName(user),
                LastName = _userStore.GetLastName(user),
                Email = _userStore.GetEmailAsync(user).Result,
            };

            string result = engine.ParseString(message.Body, modelitem);

            await _emailSender.SendEmailGridAsync(model.Email, message.Subject, result);
            
            return Ok();
        }
        public async Task<string> Index1()
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
