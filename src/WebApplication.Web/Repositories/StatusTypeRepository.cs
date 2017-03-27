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
    public class StatusTypeRepository : IStatusTypeRepository
    {
        private readonly ApplicationDbContext _context;

        public StatusTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<StatusType> Get(string _id)
        {

            return await _context.StatusTypeDataCollection.FindSync<StatusType>(x => x.Name == _id).SingleAsync();
        }

        public async Task Save(StatusType statusType)
        {
            await _context.StatusTypeDataCollection.InsertOneAsync(statusType);
        }

        public async Task Delete(StatusType statusType)
        {
            await _context.StatusTypeDataCollection.DeleteOneAsync(x => x.Name == statusType.Name);
        }

        public async Task Update(StatusType statusType)
        {

            await _context.StatusTypeDataCollection.ReplaceOneAsync(x => x.Name == statusType.Name, statusType);

        }

        public async Task<List<StatusType>> FindAll()
        {

            var item = await _context.StatusTypeDataCollection.Find("{}").ToListAsync();
            return item;
        }


    }
}
