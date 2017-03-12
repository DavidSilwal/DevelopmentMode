using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Repositories;

namespace WebApplication.Repositories
{
    public class RoleStatusTypeMappingRepository : IRoleStatusTypeMappingRepository
    {
        private readonly ApplicationDbContext _context;

        public RoleStatusTypeMappingRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<RoleStatusTypeMapping> GetByRoleName(string _roleName)
        {

            return await _context.RoleStatusTypeMappingCollection.FindSync<RoleStatusTypeMapping>(x => x.RoleName == _roleName).SingleAsync();
        }

        public async Task Save(RoleStatusTypeMapping roleStatusType)
        {
            await _context.RoleStatusTypeMappingCollection.InsertOneAsync(roleStatusType);
        }

        public async Task Delete(RoleStatusTypeMapping roleStatusType)
        {
            await _context.RoleStatusTypeMappingCollection.DeleteOneAsync(x => x.RoleName == roleStatusType.RoleName);
        }

        public async Task Update(RoleStatusTypeMapping roleStatusType)
        {

            await _context.RoleStatusTypeMappingCollection.ReplaceOneAsync(x => x.RoleName == roleStatusType.RoleName, roleStatusType);

        }

        public async Task<List<RoleStatusTypeMapping>> FindAll()
        {

            var item = await _context.RoleStatusTypeMappingCollection.Find("{}").ToListAsync();
            return item;
        }
    }

}
