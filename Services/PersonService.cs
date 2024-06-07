using KittyCity.Data;
using KittyCity.DTOs;
using KittyCity.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace KittyCity.Services
{

    public class PersonService : IPersonService
    {
        private readonly AppDbContext _context;

        public PersonService(AppDbContext context)
        {
            _context = context;
        }

        public Person CreatePerson(PersonDTO PersonDto)
        {
            if (ValidateNewPerson(PersonDto))
            {
                var person = new Person
                {
                PersonId = PersonDto.PersonId,
                // PersonType = PersonDto.PersonType,
                FirstName = PersonDto.FirstName,
                LastName = PersonDto.LastName,
                PhoneNum = PersonDto.PhoneNum,
                // JobTitle = PersonDto.JobTitle
                };

                _context.Persons.Add(person);
                _context.SaveChanges();

                return person;
            }
            else
            {
                throw new Exception("Invalid Person");
            }
        }  

        public IEnumerable<PersonDTO> GetAllPersons()
        {
            var persons = _context.Persons
                .Select(p => new PersonDTO
                {
                  PersonId = p.PersonId,
                //   PersonType = p.PersonType,
                  FirstName = p.FirstName,
                  LastName = p.LastName,
                  PhoneNum = p.PhoneNum,
                //   JobTitle = p.JobTitle,
                }).ToList();

            return persons;
        }

        public PersonDTO GetPersonById(int PersonId)
        {
            var person = _context.Persons.Find(PersonId);

            if (person != null)
            {
                var personDto = new PersonDTO
                {
                 PersonId = person.PersonId,
                //  PersonType = person.PersonType,
                 FirstName = person.FirstName,
                 LastName = person.LastName,
                 PhoneNum = person.PhoneNum,
                //  JobTitle = person.JobTitle,
                 };

                return personDto;
            }
            else
            {
                throw new Exception("Person not found");
            }
        }

        public void UpdatePerson(int PersonId, PersonDTO UpdatedPerson)
        {
            var person = _context.Persons.FirstOrDefault(p => p.PersonId == PersonId);

            if (person != null)
            {
               person.PersonId = UpdatedPerson.PersonId;
            //    person.PersonType = UpdatedPerson.PersonType;
               person.FirstName = UpdatedPerson.FirstName;
               person.LastName = UpdatedPerson.LastName;
               person.PhoneNum = UpdatedPerson.PhoneNum;
            //    person.JobTitle = UpdatedPerson.JobTitle;
               
                _context.Persons.Update(person);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Person not found");
            }
        }

        public void DeletePerson(int PersonId)
        {
            var person = _context.Persons.FirstOrDefault(p => p.PersonId == PersonId);

            if (person != null)
            {
                _context.Persons.Remove(person);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Person not found");
            }
        }

        private bool ValidateNewPerson(PersonDTO PersonDto)
        {
            return !string.IsNullOrWhiteSpace(PersonDto.FirstName); //FIXME: is this the correct field to validate from?
        }

    }
}
