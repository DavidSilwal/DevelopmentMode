using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Identity;
using Microsoft.AspNetCore.Authorization;

namespace WebApplication.Controllers
{
    [Authorize(Roles = "Admin")]
    public class DashboardController : Controller
    {
       
        public DashboardController()
        {

        }

        public IActionResult Index()
        {

            
            return View();
        }


    }
}
