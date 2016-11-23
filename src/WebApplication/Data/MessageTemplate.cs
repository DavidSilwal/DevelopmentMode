using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    [BsonIgnoreExtraElements]
    public class MessageTemplate
    {
        public ObjectId _id { get; set; }
        public string Subject { get; set; }

        [DataType(DataType.MultilineText)]
        public string Body { get; set; }

        [EmailAddress]
        public string MailFrom { get; set; }
        public bool IsActive { get; set; } 

        public DateTimeOffset AddedOn { get; set; } 


    }
}
