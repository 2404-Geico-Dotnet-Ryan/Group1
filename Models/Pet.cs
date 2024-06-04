namespace KittyCity.Models
{
    public class Pet
    {
        //Class Fields
        public int PetId { get; set; }
        public int PersonId { get; set; } /* This will the Pet Parents Person ID */
        public string? PetName { get; set; }
        public string? Color { get; set; }
        public string? FurType { get; set; }
        public string? Gender { get; set; }
        public int Weight { get; set; }
        public int Age { get; set; }
        public bool InSidePet { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? SeenBy { get; set; } /* This will be the Vet Employee making new record/updates Title + Name */
        public string? RainbowBridgeDate { get; set; }

        // This establishes the "one a one" relationship 
        // One Pet to one Person(Owner) 
        public Person Person { get; set; }

        // This establishes the "one to many" relationship 
        // One Pet to Many Visits 
        public ICollection<Visit> Visits { get; set; }

        /* NO Argurments Constructor*/
        public Pet()
        {

        }

        /* FULL Argurments Constructor */
        public Pet(int petId, int personId, string petName, string color, string furType, string gender, int weight, int age, bool inSidePet, DateTime appointmentDate, string seenBy, string rainbowBridgeDate)
        {
            PetId = petId;
            PersonId = personId;
            PetName = petName;
            Color = color;
            FurType = furType;
            Gender = gender;
            Weight = weight;
            Age = age;
            InSidePet = inSidePet;
            AppointmentDate = appointmentDate;
            SeenBy = seenBy;
            RainbowBridgeDate = rainbowBridgeDate;
        }

        // Class Methods
        public void HappyPet()
        {
            Console.WriteLine("Your Fur Baby was well behaved & happy to see us :)");
        }

        public void MadPet()
        {
            Console.WriteLine("Your Fur Baby was not very happy to be here, but no one was bite!");
        }

        public int WeightGain(int weight)
        {
            Weight += weight;
            return Weight;
        }

        public int WeightLoss(int weight)
        {
            Weight -= weight;
            return Weight;
        }

        public int Birthday(int age)
        {
            Age = age + 1;
            return Age;

        }

        public DateTime UpdateLastDrVist(DateTime appointmentDate)
        {
            AppointmentDate = appointmentDate;
            return appointmentDate;
        }

        /* Pet ToString */
        public override string ToString()
        {
            string newString = "";
            newString += "{Pet Id " + PetId;
            newString += ", Pet Parent Id " + PersonId;
            newString += ", Pet Name " + PetName;
            newString += ", Color " + Color;
            newString += ", FurType " + FurType;
            newString += ", Gender " + Gender;
            newString += ", Weight " + Weight;
            newString += ", Age " + Age;
            newString += ", Lives Inside Only " + InSidePet;
            newString += ", Appointment Date " + AppointmentDate;
            newString += ", Seen By " + SeenBy;
            newString += ", RainbowBridge Date " + RainbowBridgeDate;
            newString += "}";
            return newString;
        }
    }
}