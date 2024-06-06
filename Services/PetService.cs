using KittyCity.Data;
using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{

    public class PetService : IPetService
    {
        private readonly AppDbContext _context;

        // Constructor to inject the database context
        public PetService(AppDbContext context)
        {
            _context = context;
        }

        // Method to create a new pet based on the provided PetDTO
        public Pet CreatePet(PetDTO PetDto)
        {
            if (ValidateNewPet(PetDto))
            {
                var pet = new Pet
                {
                    //PetId = PetDto.Id,
                PersonId = PetDto.PersonId,
                PetName = PetDto.PetName,
                Color = PetDto.Color,
                FurType = PetDto.FurType,
                Gender = PetDto.Gender,
                Weight = PetDto.Weight,
                Age = PetDto.Age,
                InSidePet = PetDto.InSidePet,
                AppointmentDate = PetDto.AppointmentDate,
                SeenBy = PetDto.SeenBy,
                RainbowBridgeDate = PetDto.RainbowBridgeDate,
                };

                _context.Pets.Add(pet);
                _context.SaveChanges();

                return pet;
            }
            else
            {
                throw new Exception("Invalid Pet");
            }
        }  

        // Method to get a list of all pets
        public IEnumerable<PetDTO> GetAllPets()
        {
            var pets = _context.Pets
                .Select(p => new PetDTO
                {
                    PetId = p.PetId,
                    PersonId = p.PersonId,
                    PetName = p.PetName,
                    Color = p.Color,
                    FurType = p.FurType,
                    Gender = p.Gender,
                    Weight = p.Weight,
                    Age = p.Age,
                    InSidePet = p.InSidePet,
                    AppointmentDate = p.AppointmentDate,
                    SeenBy = p.SeenBy,
                    RainbowBridgeDate = p.RainbowBridgeDate,
                }).ToList();

            return pets;
        }

        // Method to get a specific pet by their ID
        public PetDTO GetPetById(int PetId)
        {
            var pet = _context.Pets.Find(PetId);

            if (pet != null)
            {
                var petDto = new PetDTO
                {
                    PetId = pet.PetId,
                    PersonId = pet.PersonId,
                    PetName = pet.PetName,
                    Color = pet.Color,
                    FurType = pet.FurType,
                    Gender = pet.Gender,
                    Weight = pet.Weight,
                    Age = pet.Age,
                    InSidePet = pet.InSidePet,
                    AppointmentDate = pet.AppointmentDate,
                    SeenBy = pet.SeenBy,
                    RainbowBridgeDate = pet.RainbowBridgeDate
                };

                return PetDto;
            }
            else
            {
                throw new Exception("Pet not found");
            }
        }

        // Method to update an existing pet based on their ID and the provided updated PetDTO
        public void UpdatePet(int PetId, PetDTO UpdatedPet)
        {
            var pet = _context.Pets.FirstOrDefault(p => p.PetId == PetId);

            if (pet != null)
            {
                //pet.PetId = UpdatedPet.PetId;
                pet.PersonId = UpdatedPet.PersonId;
                pet.PetName = UpdatedPet.PetName;
                pet.Color = UpdatedPet.Color;
                pet.FurType = UpdatedPet.FurType;
                pet.Gender = UpdatedPet.Gender;
                pet.Weight = UpdatedPet.Weight;
                pet.Age = UpdatedPet.Age;
                pet.InSidePet = UpdatedPet.InSidePet;
                pet.AppointmentDate = UpdatedPet.AppointmentDate;
                pet.SeenBy = UpdatedPet.SeenBy;
                pet.RainbowBridgeDate = UpdatedPet.RainbowBridgeDate;

                _context.Pets.Update(pet);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Pet not found");
            }
        }

        // Method to delete a pet based on their ID
        public void DeletePet(int PetId)
        {
            var pet = _context.Pets.FirstOrDefault(p => p.PetId == PetId);

            if (pet != null)
            {
                _context.Pets.Remove(pet);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Pet not found");
            }
        }

        // Private Helper method to validate the new pet data
        private bool ValidateNewPet(PetDTO PetDto)
        {
            return !string.IsNullOrWhiteSpace(PetDto.PetName); //FIXME: is this the correct field to validate from?
        }

    }
}
