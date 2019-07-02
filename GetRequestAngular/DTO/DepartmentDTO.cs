using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetRequestAngular.DTO
{
    public class DepartmentDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime FoundationDate { get; set; }
        public string ChiefName { get; set; }
        public decimal Budget { get; set; }
        public bool Category { get; set; }
    }
}
