using KittyCity.DTOs;
using KittyCity.Services;
using Microsoft.AspNetCore.Mvc;

namespace KittyCity.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PetsController : ControllerBase
    {


        // Private readonly field for the pet service
        private readonly IPetService _petService;

        // Constructor to inject the pet service
        public PetsController(IPetService petService)
        {
            _petService = petService;
        }

        // GET: /Pets
        // Action method to handle GET requests to retrieve all pets
        [HttpGet]
        public ActionResult<IEnumerable<PetDTO>> GetPets()
        {
            var pets = _petService.GetAllPets();
            return Ok(pets);
        }

        // GET: /Pets/{PetId}
        // Action method to handle GET requests to retrieve a pet by their ID
        [HttpGet("{PetId}")]
        public ActionResult<PetDTO> GetPetById(int PetId)
        {
            var pet = _petService.GetPetById(PetId);
            return pet;
        }

        // POST: /Pets
        // Action method to handle POST requests to create a new pet
        [HttpPost]
        public ActionResult<PetDTO> PostPet(PetDTO petDto)
        {
            var pet = _petService.CreatePet(petDto);
            return CreatedAtAction(nameof(GetPetById), new { PetId = pet.PetId }, petDto);
        }

        // PUT: /Pets/{PetId}
        // Action method to handle PUT requests to update an existing pet
        [HttpPut("{PetId}")]
        public ActionResult<PetDTO> UpdatePet(int PetId, PetDTO UpdatedPet)
        {
            _petService.UpdatePet(PetId, UpdatedPet);
            return Ok(UpdatedPet);
        }

        // DELETE: /Pet/{PetId}
        // Action method to handle DELETE requests to delete a pet by their ID
        [HttpDelete("{PetId}")]
        public IActionResult DeletePet(int PetId)
        {
            _petService.DeletePet(PetId);
            return Ok();
        }
    }
}
