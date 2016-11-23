using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        public MessageTemplateController(ApplicationDbContext context)
        {
            _context = context;
        }

        protected readonly ApplicationDbContext _context;

        public IActionResult Index()
        {
           var item = AllMessageTemplate();

            return View(item);
        }

        public IList<MessageTemplate> AllMessageTemplate()
        {
            var msg = _context.Database.GetCollection<MessageTemplate>("MessageTemplates").Aggregate().ToList();
            return msg;
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
                model.AddedOn = new DateTimeOffset().UtcDateTime;
                model.IsActive = true;
                _context.MessageTemplateCollection.InsertOne(model);
            }
            else
            {
                return View();
            };

            return RedirectToAction("Index");
        }

        public async Task<ActionResult> SendEmail()
        {
            
            return View();
        }





    }
}
