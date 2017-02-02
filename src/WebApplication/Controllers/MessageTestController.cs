using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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

        public MessageTestController(
            IMessageRepository messageRepository,
            IEmailSender emailSender)
        {
            _messageRepository = messageRepository;
            _emailSender = emailSender;
        }
        public async Task<IActionResult> Index()
        {
            var message = await _messageRepository.FindByMessageTemplateTypeByID("  ");

            await _emailSender.SendEmailAsync("de.davidsilwal@gmail.com", message.Subject, message.Body);
            
            return View();
        }
        
    }
}
