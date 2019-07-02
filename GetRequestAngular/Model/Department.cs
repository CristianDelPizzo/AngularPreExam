using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetRequestAngular.Model
{
    public class Department
    {
        public Department()
        {
        }

        public Department(int id, string name, DateTime foundationDate, string chiefName, decimal budget, bool category)
        {
            Id = id;
            Name = name;
            FoundationDate = foundationDate;
            ChiefName = chiefName;
            Budget = budget;
            Category = category;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime FoundationDate { get; set; }
        public string ChiefName { get; set; }
        public decimal Budget { get; set; }
        public bool Category { get; set; }
        public List<Employee> Employees { get; set; }
    }

    
}
