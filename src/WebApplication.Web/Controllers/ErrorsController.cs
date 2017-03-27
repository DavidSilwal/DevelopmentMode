using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Controllers
{   
    public class ErrorsController : Controller
    {
        [Route("errors/{id:int}")]
        public IActionResult Index(int id)
        {
            return new ObjectResult("Error page, status code: " + id) { StatusCode = id };
        }

        
    }
}
