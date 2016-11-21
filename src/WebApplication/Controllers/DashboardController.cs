using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Identity;

namespace WebApplication.Controllers
{
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
