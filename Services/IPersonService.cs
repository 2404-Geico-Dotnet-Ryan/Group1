using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{
    public interface IPersonService
    {
        IEnumerable<PersonDTO> GetAllPersons();

        PersonDTO GetPersonById(int PersonId);

        Person CreatePerson(PersonDTO PersonDto);

        void UpdatePerson(int PersonId, PersonDTO UpdatedPerson);

        void DeletePerson(int PersonId);
    }
}