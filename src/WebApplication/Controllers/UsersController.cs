using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Models;
using WebApplication.Models.Extensions;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace WebApplication.Controllers
{
    public class UsersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly RoleManager<IdentityRole> _roleManager;
       
        public UsersController(
            UserManager<IdentityUser> userManager,
            ILoggerFactory loggerFactory,
            RoleManager<IdentityRole> roleManager,
            ApplicationDbContext context,
            UserStore<IdentityUser,IdentityRole> users) : base(userManager,context, users)
        {
            _roleManager = roleManager;
            _logger = loggerFactory.CreateLogger<AccountController>();
        }

       
        public async Task<IActionResult> Index()
        {
            ////PaginationSet<UserViewModel> pagedSet = new PaginationSet<UserViewModel>();
            //List<UserViewModel> model;

            //try
            //{
            //    int currentPage = page.Value;
            //    int currentPageSize = pageSize.Value;

            //    List<IdentityUser> _users = null;
            //    int _totalUsers = new int();


                //_users =  _userManager.Users
                //    .OrderBy(a => a.UserName)
                //    .Skip(currentPage * currentPageSize)
                //    .Take(currentPageSize)
                //    .ToList();


            //    _totalUsers = _userManager.Users.Count();

            //    IEnumerable<UserViewModel> _usersVM = Mapper.Map<IEnumerable<IdentityUser>, d<UserViewModel>>(_users).ToList();

            //     model = _usersVM.ToList();
            //    //pagedSet = new PaginationSet<UserViewModel>()
            //    //{
            //    //    Page = currentPage,
            //    //    TotalCount = _totalUsers,
            //    //    TotalPages = (int)Math.Ceiling((decimal)_totalUsers / currentPageSize),
            //    //    Items = _usersVM
            //    //};

            //}
            //catch (Exception ex)
            //{
            //    _logger.LogInformation(" Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now ");
               
            //}
            

            return  View(_userManager.Users.ToList());
        }



        public async Task<IActionResult> Details(string id)
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



        public async Task<IActionResult> Search(string user,string searchString)
        {

            IQueryable<string> userQuery = from u in _users.Users
                                           orderby u.UserName
                                           select u.UserName;

            var users = from u in _users.Users
                        select u;


            if (!String.IsNullOrEmpty(searchString))
            {
                users = users.Where(s => s.UserName.Contains(searchString));
            }

            if (!String.IsNullOrEmpty(user))
            {
                users = users.Where(x => x.UserName == user);
            }

            var userVM = new UserSearchViewModel();
            userVM.selectList = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(await userQuery.Distinct().ToListAsync());
            userVM.Users = await users.ToListAsync();

            return View(userVM);
        }




        public async Task<IActionResult> Edit(string id)
        {
           
            if (id == null)
            {
                return NotFound();
            }
            var user = await _userManager.FindByIdAsync(id);

            //var user = await _userManager.Users.FindAll().ToList().Include(u => u.Roles).FirstOrDefaultAsync(u => u.Id == id);

            if (user == null)
            {
                return NotFound();
            }


            //ViewBag.Roles = _roleManager.Roles.ToList().ToListViewModel();

            return View(user.ToViewModel());
        }







        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(UserViewModel model)
        {

            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);

                //var user = await _userManager.Users.Include(u => u.Roles).FirstOrDefaultAsync(u => u.Id == model.Id);

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

        //public async Task<IActionResult> ChangePassword(string id)
        //{

        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var user = await _userManager.Users.AsQueryable().FirstOrDefaultSync(u => u.Id == id);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return View();
        //}

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> ChangePassword(UserChangePasswordViewModel model)
        //{

        //    if (ModelState.IsValid)
        //    {
        //        var user = await _userManager.Users.AsQueryable().FirstOrDefaultAsync(u => u.Id == model.Id);

        //        if (user == null)
        //        {
        //            return NotFound();
        //        }

        //        await _userManager.RemovePasswordAsync(user);
        //        await _userManager.AddPasswordAsync(user, model.Password);

        //        var result = await _userManager.UpdateAsync(user);

        //        if (result.Succeeded)
        //        {
        //            return RedirectToAction("Index");
        //        }
        //        else
        //        {
        //            AddErrors(result);
        //        }
        //    }

        //    return View(model);
        //}

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
