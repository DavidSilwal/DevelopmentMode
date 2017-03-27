using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public interface IUserStatusDataRepository
    {
        Task Delete(UserStatusData item);
        Task<List<UserStatusData>> FindAll();
        Task<UserStatusData> Get(string _id);
        Task Save(UserStatusData MessageTemplate);
        Task Update(UserStatusData item);

        Task DeleteByID(string id);
        Task UpdateMsg(UserStatusData item);

        Task<List<UserStatusData>> GetStatusByID(string userID);

        List<Comments> GetCommentsByStatusID(string statusID);

        Task AddLikes(string userID, string statusID);

        Task AddComments(string statusID, Comments Comment);

        Task<List<UserStatusData>> FindAllByType(string Type);



    }
}