using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{
    public interface IPetService
    {
        // Method to get a list of all pets
        IEnumerable<PetDTO> GetAllPets();

        // Method to get a specific pet by their ID
        PetDTO GetPetById(int PetId);

        // Method to create a new pet based on the provided PetDTO
        Pet CreatePet(PetDTO PetDto);

        // Method to update an existing pet based on their ID and the provided updated PetDTO
        void UpdatePet(int PetId, PetDTO UpdatedPet);

        // Method to delete a pet based on their ID
        void DeletePet(int PetId);
    }
}