using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetRequestAngular.Model
{
    public class Employee
    {
        public Employee()
        {
        }

        public Employee(int id, string name, string surname, DateTime birthDate, string phone, string address, int departmentId)
        {
            Id = id;
            Name = name;
            Surname = surname;
            BirthDate = birthDate;
            Phone = phone;
            Address = address;
            DepartmentId = departmentId;
        }

        public int Id { get; set; }
        public string Name{ get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
