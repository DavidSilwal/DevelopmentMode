using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Controllers
{
    [Route("api/expert")]
    public class DomainExpertController : Controller
    {
    
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IUserStatusDataRepository _userStatusRepository;
        private readonly UserStore<IdentityUser, IdentityRole> _userStore;

        public DomainExpertController(
            IUserStatusDataRepository userStatusRepository,
            UserStore<IdentityUser, IdentityRole> userStore,
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager
          )
        {
            _userStatusRepository = userStatusRepository;
            _userStore = userStore;
            _userManager = userManager;
            _roleManager = roleManager;
           }


        public async Task<IActionResult> Index()
        {
            var user = GetCurrentUserAsync();

            var domainExpertType = await _userManager.GetRolesAsync(user.Result);

            var statusByType =await _userStatusRepository.FindAllByType(domainExpertType.ToString());

            var recentStatus = statusByType
                .OrderByDescending(x => x.UpdateTime)
                .Take(10)
                .ToList();

                       
            return Ok(recentStatus);
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
