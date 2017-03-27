using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Route("api/expert")]
    public class DomainExpertController : Controller
    {
    
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IUserStatusDataRepository _userStatusRepository;
        public DomainExpertController(
            IUserStatusDataRepository userStatusRepository,
            UserManager<IdentityUser> userManager
           )
        {
            _userStatusRepository = userStatusRepository;
            _userManager = userManager;

        }

        [HttpGet()]
        public async Task<IActionResult> Index()
        {
            var user = await GetCurrentUserAsync();

            var domainExpertType = await _userManager.GetRolesAsync(user);

            var statusByType = new List<UserStatusData>();

            foreach(string item in domainExpertType)
            {
               statusByType = await _userStatusRepository.FindAllByType(item);

            }   
            
            var  recentStatus = statusByType
                               .OrderByDescending(x => x.UpdateTime)
                               .Take(10)
                               .ToList();
                                   
            return Ok(recentStatus);
        }


        [HttpGet("{page:int?}")]
        public async Task<IActionResult> Default(int? page)
        {                        
            var user = await GetCurrentUserAsync();

            var domainExpertType = await _userManager.GetRolesAsync(user);

            var statusByType = new List<UserStatusData>();

            foreach (string item in domainExpertType)
            {
                statusByType = await _userStatusRepository.FindAllByType(item);

            }   

            int pageSize = 1;
            return Ok(await PaginatedList<UserStatusData>.CreateAsync(statusByType.ToList(), page ?? 1, pageSize));

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
