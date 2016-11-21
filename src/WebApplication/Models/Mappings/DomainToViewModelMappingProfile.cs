using AutoMapper;
using Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models.Mappings
{
    public class DomainToViewModelMappingProfile : Profile
    {
        protected override void Configure()
        {
         
            //Mapper.CreateMap<IdentityUser, UserViewModel>()
            //    .ForMember(vm => vm.TotalPhotos, map => map.MapFrom(a => a.Photos.Count));
        }
    }
}
