using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
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

        //[HttpGet]
        //public async Task<IActionResult> Get()
        //{
        //    var userID = GetCurrentUserId();
        //    var status = _userstatusRepository.GetStatusByID(userID).Result;//.AsQueryable();

        //    var s = status.Select(x => x.Status).ToList();

        //    var model = new
        //    {
        //        _id = status.Select(x=>x._id).ToList(),
        //        status = status.Select(x => x.Status).ToList(),
        //        // userName 
        //        updateTime = status.Select(x => x.UpdateTime).ToList(),
        //        type = status.Select(x => x.Type).ToList(),
        //        isHidden = status.Select(x => x.IsHidden).ToList(),
        //        Likes = status.Select(x => x.LikesUserIDs).ToList(),
        //        comments = status.Select(x => x.Comments).ToList()
        //    };

        //    return Ok(model);
        //}


        [HttpGet("{id:Guid?}", Name = "GetSingleStatus")]
        public IActionResult GetSingle(Guid? id)
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



        [HttpPatch("{id:Guid?}")]
        public IActionResult Patch(Guid? id, [FromBody] JsonPatchDocument<UserStatusData> statusPatchDocument)
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

                return CreatedAtRoute("GetSingleStatus", new { id = userStatus._id }, userStatus);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPut("{id:Guid?}")]
        public IActionResult Update(Guid? id, [FromBody] UserStatusData userStatus)
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


               var result =  _userstatusRepository.Update(status.Result);

                return Ok(result);
            }
            catch (Exception exception)
            {
                //logg exception or do anything with it
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpDelete("{id:Guid?}")]
        public IActionResult Delete(Guid? id)
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


        //
        public async Task<IActionResult> Likes()
        {
            var user = GetCurrentUserId();
            //check if it contains 

           // var status = _userstatusRepository.GetStatusByID(statusID);


            //getstatus by id
            //add 1 List<idsuser >if it is unique

            return Ok();
        }

        public async Task<IActionResult> UnLikes()
        {
            return Ok();
        }

        public async Task<IActionResult> AddComments()
        {

           
            // add to the list

            return Ok();
        }

        public async Task<IActionResult> RemoveComments()
        {
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
