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

        public async Task<ActionResult> Index()
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
                _messageRepository.Save(model);
            }
            else
            {
                return View();
            };

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Details(string id)
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

        public async Task<IActionResult> Edit(string id)
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
        public async Task<IActionResult> Edit(MessageTemplate model)
        {
            if (model._id == null)
            {
                return NotFound();
            }
            await _messageRepository.Update(model);
              
            return View();
        }



        public async Task<IActionResult> Delete(string id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var queryresult = await _messageRepository.Get(id);

           return View(queryresult);
        }
     

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(MessageTemplate model)
        {

            await _messageRepository.Delete(model);
            return RedirectToAction("Index");
        }
        
    }
}
