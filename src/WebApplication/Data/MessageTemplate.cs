using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class MessageTemplate
    {
        public ObjectId _id { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }

    }
}
