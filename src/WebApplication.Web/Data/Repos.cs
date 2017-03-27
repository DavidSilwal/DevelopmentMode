//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace WebApplication.Data
//{
//    public class Repos
//    {
//        public T GetById(ObjectId id)
//        {
//            var collection = _database.GetCollection<BsonDocument>(typeof(T).Name.ToLower());
//            var filter = Builders<BsonDocument>.Filter.Eq("_id", id);
//            var doc = collection.Find(filter).FirstOrDefaultAsync().Result;
//            if (doc != null)
//            {
//                return BsonSerializer.Deserialize<T>(doc);
//            }
//            return null;
//        }


//        public void Add<T>(T item) where T : class, new()
//        {
//            var objectSave = _database.GetCollection<T>(typeof(T).Name.ToLower());
//            objectSave.InsertOneAsync(item).Wait();
//        }

//        public List<T> All<T>() where T : class, new()
//        {
//            var collection = _database.GetCollection<T>(typeof(T).Name.ToLower());
//            return collection.Find(Builders<T>.Filter.Empty).ToListAsync().Result;
//        }

//        public void Dispose()
//        {

//        }
//    }
//}
