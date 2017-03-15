using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Repositories;

namespace WebApplication.Controllers.Api
{

    [Route("api/statusType")]
    public class StatusTypeController : Controller
    {

        private readonly IStatusTypeRepository _statusTypeRepository;

        public StatusTypeController(IStatusTypeRepository statusTypeRepository)
        {
            _statusTypeRepository = statusTypeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _statusTypeRepository.FindAll());
        }


    }
}
