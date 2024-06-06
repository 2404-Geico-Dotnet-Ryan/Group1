namespace KittyCity.Models
{
    public class Login
    {
        public int LoginId { get; set; }
        public int PersonId { get; set; }
        public string? UserName { get; set; }
        public string? UserPassword { get; set; }
        public int AccessLevel { get; set; }  /* 1 - Update  2 - ReadOnly */

        // This establishes the "one to one" relationship 
        // One Login to One Person  
        public Person Person { get; set; }

        /* NO Argurments Constructor*/
        public Login()
        {

        }

        /* FULL Argurments Constructor */
        public Login(int loginId, int personId, string userName, string userPassword, int accessLevel)
        {
            LoginId = loginId;
            PersonId = personId;
            UserName = userName;
            UserPassword = userPassword;
            AccessLevel = accessLevel;
        }

        /* Login ToString */
        public override string ToString()
        {
            string newString = "";
            newString += "{LoginId " + LoginId;
            newString += ", PersonId " + PersonId;
            newString += ", User Name " + UserName;
            newString += ", User Password " + UserPassword;
            newString += ", Access Level " + AccessLevel;
            newString += "}";
            return newString;
        }
    }
}