using Microsoft.AspNetCore.Identity;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Identity
{
   

    public static class UserLoginInfoExtensions
    {

        public static bool AreEqual(this UserLoginInfo thisObj, UserLoginInfo obj)
        {
            if (thisObj == null && obj == null) return true; // both objects are null
            if (thisObj == null || obj == null) return false; // only one of the objects are null

            return thisObj.LoginProvider.Equals(obj.LoginProvider, StringComparison.OrdinalIgnoreCase) &&
                   thisObj.ProviderKey.Equals(obj.ProviderKey, StringComparison.OrdinalIgnoreCase);
        }
    }
}
