using KittyCity.DTOs;
using KittyCity.Services;
using Microsoft.AspNetCore.Mvc;

namespace KittyCity.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {


        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<PersonDTO>> GetPersons()
        {
            var persons = _personService.GetAllPersons();
            return Ok(persons);
        }

        [HttpGet("{PersonId}")]
        public ActionResult<PersonDTO> GetPersonById(int PersonId)
        {
            var person = _personService.GetPersonById(PersonId);
            return person;
        }

        [HttpPost]
        public ActionResult<PersonDTO> PostPerson(PersonDTO personDto)
        {
            var person = _personService.CreatePerson(personDto);
            return CreatedAtAction(nameof(GetPersonById), new { PersonId = person.PersonId }, personDto);
        }

        [HttpPut("{PersonId}")]
        public ActionResult<PersonDTO> UpdatePerson(int PersonId, PersonDTO UpdatedPerson)
        {
            _personService.UpdatePerson(PersonId, UpdatedPerson);
            return Ok(UpdatedPerson);
        }

        [HttpDelete("{PersonId}")]
        public IActionResult DeletePerson(int PersonId)
        {
            _personService.DeletePerson(PersonId);
            return Ok();
        }
    }
}
