﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;

namespace WebApplication.Controllers.Api
{
    
    [Route("api/[Controller]")]
    public class UserStatusController : Controller
    {
        private readonly IUserStatusDataRepository _UserStatusDataRepository;
        private readonly UserManager<IdentityUser> _UserManager;

        public UserStatusController(
            IUserStatusDataRepository UserStatusDataRepository,
            UserManager<IdentityUser> userManager)
        {       
            _UserStatusDataRepository = UserStatusDataRepository;
            _UserManager = userManager;

        }


        [HttpGet]
        public async Task<List<UserStatusData>> GetAll()
        {
            return await _UserStatusDataRepository.FindAll();
        }
        

        [HttpGet("{id}", Name = "get")]
        public IActionResult GetById(string id)
        {
            var item = _UserStatusDataRepository.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] UserStatusData item)
        {
            if (item == null)
            {

                return BadRequest();
            }

           await _UserStatusDataRepository.Save(
               new  UserStatusData
                {
                    UserID = await GetCurrentUserIdAsync(),
                    Status = item.Status,
                    UpdateTime = item.UpdateTime,

                });

              return CreatedAtRoute("GetById", new { id = item._id }, item);
              //return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] UserStatusData item)
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
            return Ok();   
        }

        [HttpDelete("{_id}")]
        public IActionResult Delete(string _id)
        {
            if (_id == null)
            {
                return new NoContentResult();
            }

            var item = _UserStatusDataRepository.DeleteByID(_id);
            
            return Ok();
        }

              

        protected async Task<IdentityUser> GetCurrentUserAsync()
        {
            return await _UserManager.GetUserAsync(HttpContext.User);
        }

        protected async Task<string> GetCurrentUserIdAsync()
        {
            var user = await GetCurrentUserAsync();

            if (user == null)
            {
                throw new Exception("Unable to get id of current user.");
            }

            return user.Id;
        }


    }
}
