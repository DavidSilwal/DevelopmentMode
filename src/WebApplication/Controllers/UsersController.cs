using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Models;
using WebApplication.Models.Extensions;
using Microsoft.AspNetCore.Authorization;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication.Controllers
{
    [Authorize(Roles ="Admin")]
    [BsonIgnoreExtraElements]
    public class UsersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UsersController(
            UserManager<IdentityUser> userManager,
            ILoggerFactory loggerFactory,
            RoleManager<IdentityRole> roleManager,
            ApplicationDbContext context,
            UserStore<IdentityUser,IdentityRole> userStore
            ) : base(userManager,context, userStore)
        {
            _roleManager = roleManager;
            _logger = loggerFactory.CreateLogger<AccountController>();
   
        }

       
        public async Task<IActionResult> Index(int page =1)
        {

            var user =  _userStore.Users;

            var u = user.ToList();//.ToListViewModel();

            //var _users = u
            //    .OrderBy(a => a.UserName)
            //    // .Skip(page * itemsPerPage)
            //    // .Take(page)
            //    .ToList();



            return View(u);
        }


        public async Task<IActionResult> Details(string id)
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

            return View(user);          
        }

        public async Task<IActionResult> Search(string searchString)
        {
           var item =  _userStore.SearchByUserName(searchString);

            return View(item);
        }
        

        public async Task<IActionResult> Edit(string id)
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

            ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            return View(user.ToViewModel());
        }

        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(UserViewModel model)
        {

            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);

                if (user == null)
                {
                    return NotFound();
                }

                await _userManager.SetEmailAsync(user, model.Email);
                await _userManager.SetUserNameAsync(user, model.UserName);

                user = model.UpdateEntity(user);

                var result = await _userManager.UpdateAsync(user);

                if (result.Succeeded)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    AddErrors(result);
                }
            }

            ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            return View(model);
        }

        public async Task<IActionResult> ChangePassword(string id)
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
        public async Task<IActionResult> ChangePassword(UserChangePasswordViewModel model)
        {

            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);

                if (user == null)
                {
                    return NotFound();
                }

                await _userManager.RemovePasswordAsync(user);
                await _userManager.AddPasswordAsync(user, model.Password);

                var result = await _userManager.UpdateAsync(user);

                if (result.Succeeded)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    AddErrors(result);
                }
            }

            return View(model);
        }

        [ActionName("Delete")]
        public async Task<IActionResult> Delete(string id)
        {
          
            if (id == null)
            {
                return NotFound();
            }

            IdentityUser user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
         
            IdentityUser user = await _userManager.FindByIdAsync(id);
            await _userManager.DeleteAsync(user);

            return RedirectToAction("Index");
        }


        public IActionResult Create()
        {
           
            ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(UserViewModel model)
        {

           if (ModelState.IsValid)
           {
               var user = model.ToEntity();

               var result = await _userManager.CreateAsync(user, model.Password);
               //var roles = await _userManager.AddToRolesAsync(user,model.Roles);

               if (result.Succeeded)
               {
                   return RedirectToAction("Index");
               }
               else
               {
                   AddErrors(result);
               }
           }

           ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

           return View(model);
        }

    }
}
