using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Identity;
using Microsoft.AspNetCore.Authorization;
using WebApplication.Services;

namespace WebApplication.Controllers
{
    [Authorize(Roles = "Admin")]
    public class DashboardController : Controller
    {
        private readonly IViewModelService _viewModelService;

        public DashboardController(IViewModelService viewModelService)
        {
            _viewModelService = viewModelService;
        }

       
        //public DashboardController(UserStore<IdentityUser, IdentityRole> userStore)
        //{
        //    _userStore = userStore;
        //}

        //protected readonly UserStore<IdentityUser, IdentityRole> _userStore;
        public async Task<ActionResult> Index()
        {
            //ViewBag.TotalUser = _userStore.Users.Count();
            //var adminRole =  await _userStore.GetUsersInRoleAsync("Admin");

            //ViewBag.admin = adminRole.Count();

            //var userRole = await _userStore.GetUsersInRoleAsync("Registered User");
            //ViewBag.user = userRole.Count();

            ViewBag.Title = "Dashboard";


            return View(_viewModelService.GetUserDashboardViewModel());
        }


    }
}
