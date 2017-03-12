using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Repositories
{
    public interface IRoleStatusTypeMappingRepository
    {
        Task Delete(RoleStatusTypeMapping roleStatusType);
        Task<List<RoleStatusTypeMapping>> FindAll();
        Task<RoleStatusTypeMapping> GetByRoleName(string _id);
        Task Save(RoleStatusTypeMapping roleStatusType);
        Task Update(RoleStatusTypeMapping roleStatusType);
    }
}