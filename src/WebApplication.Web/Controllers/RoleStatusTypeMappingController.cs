using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Identity;
using WebApplication.Models;
using WebApplication.Models.Extensions;
using WebApplication.Repositories;

namespace WebApplication.Controllers
{
    public class RoleStatusTypeMappingController : Controller
    {
        private readonly IRoleStatusTypeMappingRepository _roleStatusTypeMappingRepository;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IStatusTypeRepository _statusType;

        public RoleStatusTypeMappingController(
            IRoleStatusTypeMappingRepository roleStatusTypeMappingRepository,
            IStatusTypeRepository statusType,
            RoleManager<IdentityRole> roleManager)
        {
            _roleStatusTypeMappingRepository = roleStatusTypeMappingRepository;
            _statusType = statusType;
            _roleManager = roleManager;

        }

        public async Task<IActionResult> Index()
        {
            var model = await _roleStatusTypeMappingRepository.FindAll();
            return View(model);
        }


        public async Task<IActionResult> Create()
        {
            ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            ViewBag.StatusType = _statusType.FindAll().Result.ToList();
            
            var statustype = await _roleStatusTypeMappingRepository.FindAll();

            return View();

        }


        [HttpPost]
        public async Task<IActionResult> Create(RoleStatusTypeMapping model)
        {
            if (ModelState.IsValid)
            {
                await _roleStatusTypeMappingRepository.Save(model);

                RedirectToAction("Index");
            }

            return View(model);

        }

    }
}
