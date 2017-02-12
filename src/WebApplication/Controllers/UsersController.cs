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
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;

namespace WebApplication.Controllers
{
    [Authorize(Roles ="Admin")]
    [BsonIgnoreExtraElements]
    public class UsersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly RoleManager<IdentityRole> _roleManager;
        protected readonly RoleStore<IdentityUser, IdentityRole> _roleStore;
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
        public IActionResult Index( int page=1)
        {
            int pageSize = 3;

            PaginationSet<IdentityUser> pagedSet = null;

            int currentPage = page;
            int currentPageSize = pageSize;

            List<IdentityUser> _users = null;
            int _totalusers = new int();

            var u = _userManager.Users.ToList();

            _users = u
                .OrderBy(p => p.UserName)
                .Skip(((currentPage) * currentPageSize)- currentPage)
                .Take(currentPageSize)
                .ToList();
            var item = _users;
            _totalusers = _userManager.Users.Count();

            pagedSet = new PaginationSet<IdentityUser>()
            {
                Page = currentPage,
                TotalCount = _totalusers,
                TotalPages = (int)Math.Ceiling(_totalusers / (double)currentPageSize),
                Items = item
            };

            ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            return View(pagedSet);
        }


        public IActionResult Index1()
        {
            return View(_userStore.Users.ToList());
        }
        public async Task<IActionResult> Search(string searchString)
        {
            var user =  _userManager.Users;

            List<IdentityUser> u =  user.ToList();//.ToListViewModel();

            IEnumerable<string> IQueryItem = from m in u
                       orderby m.UserName
                       select m.UserName;

            var item = from m in u
                       select m;
            
            if (!string.IsNullOrEmpty(searchString))
            {
                item = item.Where(s => s.UserName.Contains(searchString));
            }

            var userVM = new UserSearchViewModel();
            userVM.selectList = new SelectList(IQueryItem.Distinct().ToList());
            userVM.Users = item.ToList();
            return View(userVM);
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

    
  
