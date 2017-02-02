using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public async Task<UserStatusData> Get(Guid? _id)
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


    }
}
