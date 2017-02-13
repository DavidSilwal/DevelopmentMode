using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Data
{
    public class UserStatusDataRepository :IUserStatusDataRepository
    {
        private readonly ApplicationDbContext _context; 

        public UserStatusDataRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UserStatusData> Get(string _id)
        {
            return await _context.UserStatusDataCollection.FindSync(x => x._id == _id).SingleAsync();
        }

        public async Task Save(UserStatusData MessageTemplate)
        {
            await _context.UserStatusDataCollection.InsertOneAsync(MessageTemplate);
        }

        public async Task Delete(UserStatusData item)
        {
            await _context.UserStatusDataCollection.DeleteOneAsync(x => x._id == item._id);
        }

        public async Task DeleteByID(string id)
        {
            await _context.UserStatusDataCollection.DeleteOneAsync(x => x._id == id);
        }

        public async Task Update(UserStatusData item)
        {

            await _context.UserStatusDataCollection.ReplaceOneAsync(x => x._id == item._id, item);

        }

        public async Task<List<UserStatusData>> FindAll()
        {
            var item = await _context.UserStatusDataCollection.Find("{}").ToListAsync();
            return item;
        }
        
        public async Task UpdateMsg(UserStatusData item)
        {
            await _context.UserStatusDataCollection.ReplaceOneAsync(x => x._id == item._id, item); 
        }

        public async Task<List<UserStatusData>> GetStatusByID(string userID)
        {
            var item = await _context.UserStatusDataCollection.FindSync(x=>x.UserID == userID).ToListAsync();
            return item;
        }

        public async Task AddLikes(string userID,string statusID)
        {
           
            var stat = Get(statusID);
            bool IsExist = stat.Result.LikesUserIDs.Contains(userID);

            //if (IsExist == true)
            //{
            //      await Task.FromResult("Already Likes");
            //}

            var filter = Builders<UserStatusData>.Filter.Eq(x => x._id,statusID);
            var update = Builders<UserStatusData>.Update.Push(x => x.LikesUserIDs, userID);

            await _context.UserStatusDataCollection.UpdateOneAsync(filter, update);
        }


        public async Task AddComments(string statusID, Comments Comment)
        {
            
            var filter = Builders<UserStatusData>.Filter.Eq(x => x._id, statusID);
            var update = Builders<UserStatusData>.Update.Push(x => x.Comments, Comment);

            await _context.UserStatusDataCollection.UpdateOneAsync(filter, update);
        }



    }
}
