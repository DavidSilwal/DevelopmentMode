using AutoMapper;
using Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Models;
using WebApplication.Models.ProfileViewModels;

namespace WebApplication.Controllers
{
    public class ProfileController :Controller
    {
        private readonly IHostingEnvironment _environment;
        protected readonly UserStore<IdentityUser, IdentityRole> _users;
        protected readonly UserManager<IdentityUser> _userManager;
        public ProfileController(IHostingEnvironment environment,
            UserStore<IdentityUser, IdentityRole> users,
            UserManager<IdentityUser> userManager)
        {
            _environment = environment;
            _users = users;
            _userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {
            var user = await GetCurrentUserAsync();


            //Mapper.Initialize(o => {
            //    o.CreateMap<IdentityUser, ProfileViewModel>();
            // });

            var model = new ProfileViewModel
            {
                Id = await _users.GetUserIdAsync(user),
                UserName =  _users.GetUserNameAsync(user),
                Email =  _users.GetEmailAsync(user),
                PhoneNumber =  _users.GetPhoneNumberAsync(user),
                FirstName =  _users.GetFirstName(user),
                LastName = _users.GetLastName(user),
                DateOfBirth = _users.GetDateOfBirth(user),
                BirthCountry = _users.GetBirthCountry(user),
                CurrentCountry = _users.GetCurrentCountry(user),
                Image = _users.GetImage(user),
                Roles =  _users.GetRolesAsync(user),
            };

            return View(model);

        }

        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([FromBody] EditProfileViewModel editUser, params string[] selectedRole)
        {
            if (ModelState.IsValid)
            {
                var user = await _users.FindByIdAsync(editUser.Id);
                if (user == null)
                {
                    return NotFound();
                }

                var userRoles = await _users.GetRolesAsync(user);

                var result = await _users.UpdateAsync(user);

                await _users.SetFirstNameAsync(user, editUser.FirstName);
                if (!result.Succeeded)
                {
                    ModelState.AddModelError("", "result.Errors.First()");
                    return View();
                }
                return RedirectToAction("Index");
            }
            ModelState.AddModelError("", "Something failed.");
            return View();
        }





        protected async Task<IdentityUser> GetCurrentUserAsync()
        {
            return await _userManager.GetUserAsync(HttpContext.User);
        }

        public IActionResult Upload()
        {
            return View();
        }





        //[HttpPost]
        //public IActionResult Upload(IFormFile file)
        //{
        //    //long size = 0;

        //    //var filename = ContentDispositionHeaderValue
        //    //                    .Parse(file.ContentDisposition)
        //    //                    .FileName
        //    //                    .Trim('"');

        //    //    filename = _environment.WebRootPath + $@"\Upload\{filename}";
        //    //    size += file.Length;
        //    //    using (FileStream fs = System.IO.File.Create(filename))
        //    //    {
        //    //        file.CopyTo(fs);
        //    //        fs.Flush();
        //    //    }


        //    var uploads = Path.Combine(_environment.WebRootPath, "uploads");

        //    if (file.Length > 0)
        //    {
        //        using (var fileStream = new FileStream(Path.Combine(uploads, file.FileName), FileMode.Create))
        //        {
        //            file.CopyToAsync(fileStream);
        //        }
        //    }

        //    ViewBag.Message = $"{file.FileName} file(s) / bytes uploaded successfully!";

        //    return View();
        //}


            


        [HttpPost]
        public IActionResult Upload(IFormFile image)
        {
            if (image != null && image.Length > 0)
            {
                var parsedContentDisposition = ContentDispositionHeaderValue.Parse(image.ContentDisposition);
                string FilePath = parsedContentDisposition.FileName.Trim('"');
                string FileExtension = Path.GetExtension(FilePath);
                            
                var uploadDir = _environment.WebRootPath + $@"\\Images";
                if (!Directory.Exists(uploadDir))
                {
                    Directory.CreateDirectory(uploadDir);
                }
                var imageUrl = uploadDir + image.FileName; //+ FileExtension;
                FileStream fs = System.IO.File.Create(imageUrl);
                image.CopyTo(fs);
            }

            ViewBag.Message = $" Image uploaded successfully!";


            return View("Index");
        }

    }
}
