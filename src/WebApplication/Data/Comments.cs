using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    [BsonIgnoreExtraElements]
    public class Comments
    {
        public Comments(): base()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public string UserID { get; set; }
        public DateTime CommentTime { get; set; }
        
        public string Text { get; set; }

    }
}
