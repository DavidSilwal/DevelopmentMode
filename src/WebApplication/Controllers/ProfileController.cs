using Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;
using WebApplication.Models.ProfileViewModels;

namespace WebApplication.Controllers
{
    [Authorize()]
    public class ProfileController : Controller
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

            var model = new ProfileViewModel
            {
                Id = await _users.GetUserIdAsync(user),
                UserName = _users.GetUserNameAsync(user),
                Email = _users.GetEmailAsync(user),
                PhoneNumber = _users.GetPhoneNumberAsync(user),
                FirstName = _users.GetFirstName(user),
                LastName = _users.GetLastName(user),
                DateOfBirth = _users.GetDateOfBirth(user),
                BirthCountry = _users.GetBirthCountry(user),
                CurrentCountry = _users.GetCurrentCountry(user),
                Image = _users.GetImage(user),
                Roles = _users.GetRolesAsync(user),
            };

            return View(model);

        }

        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await GetCurrentUserAsync();

            if (user == null)
            {
                return NotFound();
            }

            var model = new EditProfileViewModel
            {
                Id = await _users.GetUserIdAsync(user),
                UserName = await _users.GetUserNameAsync(user),
                Email = await _users.GetEmailAsync(user),
                PhoneNumber = await _users.GetPhoneNumberAsync(user),
                FirstName = _users.GetFirstName(user),
                LastName = _users.GetLastName(user),
                DateOfBirth = _users.GetDateOfBirth(user),
                BirthCountry = _users.GetBirthCountry(user),
                CurrentCountry = _users.GetCurrentCountry(user),
                Image = _users.GetImage(user),
               // Roles = _users.GetRolesAsync(user),
            };

            return View(model);

           }

        [HttpPost]
        [ValidateAntiForgeryToken]
      
        public async Task<ActionResult> Edit(ProfileViewModel editUser)
        {
            if (ModelState.IsValid)
            {
                var user = await _users.FindByIdAsync(editUser.Id);
                if (user == null)
                {
                    return NotFound();
                }

                var userRoles = await _users.GetRolesAsync(user);


                await _users.SetFirstNameAsync(user, editUser.FirstName);
                await _users.SetLastNameAsync(user, editUser.LastName);
                // await _users.SetUserNameAsync(user, editUser.UserName);
                // await _users.SetEmailAsync(user, editUser.Email);
                await _users.SetBirthCountryAsync(user, editUser.BirthCountry);
                await _users.SetCurrentCountryAsync(user, editUser.CurrentCountry);
                // await _users.SetUserPhoneNumberAsync(user, editUser.PhoneNumber);
                //await _users.SetDateOfBirthAsync(user, editUser.DateOfBirth);

                var result = await _users.UpdateAsync(user);


                if (!result.Succeeded)
                {
                    ModelState.AddModelError("","result.Errors.First()");
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



        [HttpPost]
        public async Task<ActionResult> Upload(IFormFile image)
        {
            if (image != null && image.Length > 0)
            {
                var parsedContentDisposition = ContentDispositionHeaderValue.Parse(image.ContentDisposition);
                string FilePath = parsedContentDisposition.FileName.Trim('"');
                string FileExtension = Path.GetExtension(FilePath);

                //if(!(new[] { ".jpg", ".png", ".jpeg" }.Any(s=>s.FileExtension==s)))
                //{
                //    return BadRequest("File msut be .jpg or .png");

                //}

                var uploadDir = _environment.WebRootPath + $@"\UploadImages\";
                if (!Directory.Exists(uploadDir))
                {
                    Directory.CreateDirectory(uploadDir);
                }
                var imageUrl = uploadDir + image.FileName; //+ FileExtension;
                FileStream fs = System.IO.File.Create(imageUrl);
                image.CopyTo(fs);

                var user = await GetCurrentUserAsync();
                await _users.SetImageAsync(user, image.FileName);
            }

            ViewBag.Message = $" Image uploaded successfully!";


            return RedirectToAction("Index");
        }
        public ActionResult UserActivity()
        {
            var item = _users.Users.ToList();
            return View(item);
        }


        //private Stream ResizeImage(Stream stream, Size size)
        //{
        //    MemoryStream outStream = new MemoryStream();

        //    using (ImageFactory imageFactory = new ImageFactory())
        //    {
        //        // Load, resize, set the format, and quality and save an image.
        //        imageFactory.Load(stream)
        //                    .Resize(new ResizeLayer(size))
        //                    .Format(new JpegFormat())
        //                    .Quality(70)
        //                    .BackgroundColor(Color.White)
        //                    .Save(outStream);
        //    }

        //    return outStream;
        //}






    }
}
