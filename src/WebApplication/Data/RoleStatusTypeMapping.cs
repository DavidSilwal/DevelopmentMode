using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class RoleStatusTypeMapping
    {
        [BsonId]
        public string RoleName { get; set; }

        public List<string> StatusType { get; set; }

    }
}
