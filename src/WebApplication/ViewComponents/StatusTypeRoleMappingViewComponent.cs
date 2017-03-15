using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Repositories;

namespace WebApplication.ViewComponents
{
    public class StatusTypeRoleMappingViewComponent : ViewComponent
    {
        private readonly IRoleStatusTypeMappingRepository _roleStatusTypeMappingRepository;

        public StatusTypeRoleMappingViewComponent(IRoleStatusTypeMappingRepository roleStatusTypeMappingRepository)
        {
            _roleStatusTypeMappingRepository = roleStatusTypeMappingRepository;
        }


        public async Task<IViewComponentResult> Invoke()
        {
            await _roleStatusTypeMappingRepository.FindAll();
            return View();
        }


    }
}
