namespace KittyCity.Models
{
public class Visit
{
    //Class Fields
    public int VisitId { get; set; }
    public int PetId { get; set; }    
    public int PersonId { get; set; } /* This will the Pet Parents Person ID */
    public int Weight{ get; set; }
    public int Age{ get; set; }
    public bool InSidePet{ get; set; }
    public DateTime AppointmentDate{ get; set; }
    public string? SeenBy { get; set; } /* This will be the Vet Employee making new record/updates Title + Name */
   
    // This establishes a "one a one" relationship 
    // One Pet PER one Visit 
    public Pet Pet { get; set; }

    /* NO Argurments Constructor*/
    public Visit()
    {

    }

    /* FULL Argurments Constructor */
    public Visit(int visitId, int petId, int personId, int weight, int age, bool inSidePet, DateTime appointmentDate, string seenBy)
    {
        VisitId = visitId;
        PetId = petId;
        PersonId= personId;
        Weight = weight;
        Age = age; 
        InSidePet = inSidePet;
        AppointmentDate = appointmentDate;
        SeenBy = seenBy; 
    }

    /* Visit ToString */
    public override string ToString() 
    {
        string newString = "";
        newString += "{Visit Id " +VisitId;
        newString += ", Pet Id " + PetId;
        newString += ", Pet Parent Id " +  PersonId;
        newString += ", Weight " + Weight;
        newString += ", Age " + Age;
        newString += ", Lives Inside Only " + InSidePet;
        newString += ", Appointment Date " + AppointmentDate;
        newString += ", Seen By " + SeenBy;
        newString += "}";
        return newString;
    }
}
}