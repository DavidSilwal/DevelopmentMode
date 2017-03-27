using   WebApplication.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Controllers
{
    [Route("api/feed")]
       public class StatusController : Controller
    {
        private readonly UserStore<IdentityUser,IdentityRole> _userStore;
        private readonly IUserStatusDataRepository _userstatusRepository;
        private readonly UserManager<IdentityUser> _userManager;


        private readonly ILogger<StatusController> _logger;

        public StatusController(
            UserStore<IdentityUser,IdentityRole> userStore,
            UserManager<IdentityUser> userManager,
            IUserStatusDataRepository userstatusRepository
            )
        {
            _userStore = userStore;
            _userManager = userManager;
            _userstatusRepository = userstatusRepository;
        }


        [HttpGet]
        public async Task<List<UserStatusData>> GetAll()
        {
            return await _userstatusRepository.FindAll();
        }

        
        [HttpGet("{id}", Name = "GetSingleStatus")]
        public IActionResult GetStatus(string id)
        {
            try
            {
                var status = _userstatusRepository.Get(id);
                                  
                if (status == null)
                {
                    return NotFound();
                }

                return Ok(status.Result);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
        

        [HttpPatch("{id}")]
        public IActionResult Patch(string id, [FromBody] JsonPatchDocument<UserStatusData> statusPatchDocument)
        {
            try
            {
                if (statusPatchDocument == null)
                {
                    return BadRequest();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var status = _userstatusRepository.Get(id);

                if (status == null)
                {
                    return NotFound();
                }

                var existingStatus = _userstatusRepository.Get(id);

                statusPatchDocument.ApplyTo(existingStatus.Result, ModelState);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                _userstatusRepository.Update(existingStatus.Result);

                return Ok(existingStatus.Result);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }


        [HttpPost]
        public IActionResult Create([FromBody] UserStatusData userStatus)
        {
            try
            {
                if (userStatus == null)
                {
                    return BadRequest();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

               
                _userstatusRepository.Save(userStatus);

                return CreatedAtRoute("GetStatus", new { id = userStatus._id }, userStatus);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] UserStatusData userStatus)
        {
            try
            {
                if (userStatus == null)
                {
                    return BadRequest();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var status = _userstatusRepository.Get(id);

                if (status == null)
                {
                    return NotFound();
                }


                var result =  _userstatusRepository.Update(userStatus);

                return Ok(result);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                var userStatusToDelete = _userstatusRepository.Get(id);

                if (userStatusToDelete == null)
                {
                    return NotFound();
                }

                _userstatusRepository.Delete(userStatusToDelete.Result);

                return NoContent();
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet("likes/{id}")]
        public async Task<IActionResult> Likes(string id)
        {
            string userID = GetCurrentUserId();
            await _userstatusRepository.AddLikes(userID,id);  // id= status id
               
            return Ok();
        }   

        [HttpGet("unlikes/{id}")]
        public async Task<IActionResult> UnLikes(string id)
        {
            var user = GetCurrentUserId();
            var status = await _userstatusRepository.Get(id);

            status.LikesUserIDs.Remove(user);
            
            return Ok();    
        }   


        [HttpPost("{id}/addcomments")]
        public IActionResult AddComments(string id, string text)
        {
             var status = _userstatusRepository.AddComments(id,
                new Comments
                {
                    Id = id,
                    UserID = GetCurrentUserId(),
                    Text = text,
                    CommentTime = DateTime.UtcNow

                });

            return Ok();
        }


        [HttpGet("{statusId}/comments")]
            public IActionResult GetComments(string statusId)
        {
            var comments = _userstatusRepository.GetCommentsByStatusID(statusId);

            return Ok(comments);
        }   

        //edit comment

        [HttpGet("{id}/removecomments")]
        public IActionResult RemoveComments(string commentId)
        {
            //_userstatusRepository.RemoveComment(commentId);
            return Ok();
        }
        
        protected async Task<IdentityUser> GetCurrentUserAsync()
        {
            return await _userManager.GetUserAsync(HttpContext.User);
        }


        protected string GetCurrentUserId()
        {
            var task = GetCurrentUserAsync();

            
            var user = task.Result;

            if (user == null)
            {
                throw new Exception("Unable to get id of current user.");
            }

            return user.Id;
        }


    }
}
