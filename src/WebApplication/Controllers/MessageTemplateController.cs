using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Org.BouncyCastle.Asn1.Crmf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Authorize(Roles = "Admin")]
    public class MessageTemplateController : Controller
    {
        public MessageTemplateController(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }

        protected readonly IMessageRepository _messageRepository;

        public async Task<IActionResult> Index()
        {
            var item = await _messageRepository.FindAll();

            return View(item);
        }
        
        [HttpGet]
        public IActionResult Create()
        {
            return View(); 
        }

        [HttpPost]
        public IActionResult Create(MessageTemplate model)
            {
            if (ModelState.IsValid)
            {
                MessageTemplate item = new MessageTemplate
                {
                    MessageTemplateTypeID = model.MessageTemplateTypeID,
                    _id = model._id,
                    Subject = model.Subject,
                    Body = Request.Form["editor1"].ToString(),
                    MailFrom = model.MailFrom
                };
                
                _messageRepository.Save(item);  
            }
            else
            {
                return View(model);
            };

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Details(Guid? id)
        {

            if (id == null)
            {
                return NotFound();
            }

            var queryresult = await _messageRepository.Get(id);

            if (queryresult == null)
            {
                return NotFound();
            }

            return View(queryresult);
        }

        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var queryresult = await _messageRepository.Get(id);

            if (queryresult == null)
            {
                return NotFound();
            }

            return View(queryresult);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(MessageTemplate model)
        {
         
            if (ModelState.IsValid)
            {
                MessageTemplate item = new MessageTemplate
                {   MessageTemplateTypeID = model.MessageTemplateTypeID,
                    _id = model._id,
                    Subject = model.Subject,
                    Body = Request.Form["editor1"].ToString(),
                    MailFrom = model.MailFrom
                 };         


                await _messageRepository.UpdateMsg(item);

                return RedirectToAction("Index");
            }
            return View();
        }

 
        public async Task<IActionResult> Delete(Guid? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var queryresult = await _messageRepository.Get(id);

            if(queryresult == null)
            {
                return NotFound();
            }

           return View(queryresult);
        }
     

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid? id)
        {
            var item = await _messageRepository.Get(id);
            await _messageRepository.Delete(item);

            return RedirectToAction("Index");
        }
        
    }
}
