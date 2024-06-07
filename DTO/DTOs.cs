namespace KittyCity.DTOs
{
    public class PersonDTO
    {
        public int PersonId {get;set;}
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNum { get; set; }

    }

    public class LoginDTO
    {
        public string? UserName { get; set; }
        public string? UserPassword { get; set; }
        public int PersonId {get;set;}
        // public int AccessLevel { get; set; }
    }

    public class PetDTO
    {
        public string? PetName { get; set; }
        public string? Color { get; set; }
        public string? FurType { get; set; }
        public string? Gender { get; set; }
        public int Weight { get; set; }
        public int Age { get; set; }
        public bool InSidePet { get; set; }
        public int PersonId {get;set;}
    }

    public class VisitDTO
    {
        public int VisitId { get; set; }
        public int Weight{ get; set; }
        public int Age{ get; set; }
        public bool InSidePet{ get; set; }
        public string? SeenBy { get; set; }
        public int PetId { get; set; } 

    }
}