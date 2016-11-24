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

        public async Task<IActionResult> Details(string id)
        {

            if (id == null)
            {
                return NotFound();
            }

            var filter = Builders<MessageTemplate>.Filter.Eq(x => x._id.ToString(),id);

            var queryresult = _context.MessageTemplateCollection.Find(filter);
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

            var filter = Builders<MessageTemplate>.Filter.Eq(x => x._id.ToString(), id);

            var queryresult = _context.MessageTemplateCollection.Find(filter);
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

            var filter = Builders<MessageTemplate>.Filter.Eq(x => x._id, model._id);
           
            var queryresult = _context.MessageTemplateCollection.ReplaceOne(filter,model);
            if (queryresult == null)
            {
                return NotFound();
            }

            return View(queryresult);
        }



        public async Task<IActionResult> Delete(string id)
        {

            if (id == null)
            {
                return NotFound();
            }

            var filter = Builders<MessageTemplate>.Filter.Eq(x => x._id.ToString(), id);
           return View(filter);
        }
     

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {

            var filter = Builders<MessageTemplate>.Filter.Eq(x => x._id.ToString(), id);
            var queryresult = _context.MessageTemplateCollection.DeleteOne(filter);

            return RedirectToAction("Index");
        }




        public async Task<ActionResult> SendEmail()
        {
            
            return View();
        }





    }
}
