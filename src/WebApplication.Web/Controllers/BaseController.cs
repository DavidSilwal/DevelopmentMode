using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;

namespace WebApplication.Controllers
{
    public class BaseController : Controller
    {
        public BaseController(UserManager<IdentityUser> userManager
           ,ApplicationDbContext context, 
            UserStore<IdentityUser, IdentityRole> userStore)
        {
            _userManager = userManager;
            _context = context;
            _userStore = userStore;
        }
        protected readonly UserManager<IdentityUser> _userManager;
        protected ApplicationDbContext _context;

        protected readonly UserStore<IdentityUser, IdentityRole> _userStore;

        protected void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
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

        protected IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "Home");
            }
        }

    }
}
