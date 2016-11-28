using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;


namespace WebApplication.Controllers.Api
{
    
    [Route("api/[Controller]")]
    public class UserStatusController : Controller
    {
        private readonly IUserStatusDataRepository _UserStatusDataRepository;
    

        public UserStatusController(IUserStatusDataRepository UserStatusDataRepository)
        {       
            _UserStatusDataRepository = UserStatusDataRepository;
            
            _UserStatusDataRepository.Save(new UserStatusData {
             Type = "activity",
             Status = "hello",
             IsHidden=false
             
             });
        }


        [HttpGet]
        public async Task<List<UserStatusData>> GetAll()
        {
            return await _UserStatusDataRepository.FindAll();
        }

        [HttpGet("{id}", Name = "GetUserStatus")]
        public IActionResult GetById(Guid? id)
        {
            var item = _UserStatusDataRepository.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] UserStatusData item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _UserStatusDataRepository.Save(item);
            return CreatedAtRoute("Getitem", new { id = item._id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid? id, [FromBody] UserStatusData item)
        {
            
            if (id == null)
            {
                return base.BadRequest();
            }

            var model = _UserStatusDataRepository.Get(id);
            if (model == null)
            {
                return NotFound();
            }

            _UserStatusDataRepository.Update(item);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid? id)
        {
            var item = _UserStatusDataRepository.Get(id);
            if (item == null)
            {
                return NotFound();
            }

            //_UserStatusDataRepository.Delete(item);
            return new NoContentResult();
        }

    }
}
