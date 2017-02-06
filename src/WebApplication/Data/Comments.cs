using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class Comments
    {
        public Guid ID { get; set; }
        public string UserID { get; set; }
        public DateTime CommentTime { get; set; }
        public string Text { get; set; }

    }
}
