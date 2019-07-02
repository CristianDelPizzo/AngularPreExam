using AutoMapper;
using GetRequestAngular.DTO;
using GetRequestAngular.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetRequestAngular
{
    public class GetRequestProfile : Profile
    {
        public GetRequestProfile()
        {
            this.CreateMap<Department, DepartmentDTO>().ReverseMap();
        }
    }
}
