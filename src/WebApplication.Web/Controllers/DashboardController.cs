using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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


        public IActionResult Index()
        {

            ViewBag.Title = "Dashboard";
            
            return View(_viewModelService.GetUserDashboardViewModel());
        }


    }
}
