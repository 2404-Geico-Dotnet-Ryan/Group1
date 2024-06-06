using Microsoft.EntityFrameworkCore; 
using KittyCity.Models;

namespace KittyCity.Data
{
    class AppDbContext : DbContext
    {
        // We provide the models through the DbSet<'modle name'> fields
        public DbSet<Login> Logins { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Visit> Visits { get; set; }

        // We have to override the default behavior to ensure the foreign key constraint is established.
        // If we do not do this then the columns will still be create but the constraints will not be enforced
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* Settings for Person table */
            /* As a one to one "1 Person to 1 Login" relationship with Login table */
            modelBuilder.Entity<Person>()
            .HasOne(lg => lg.Login)
            .WithOne(pr => pr.Person)
            .HasForeignKey<Login>(lg => lg.PersonId);

            /* Settings for Person table */
            /* As a one to many "1 Person to Many Pets" relationship with Pets table */
            modelBuilder.Entity<Person>()
            .HasMany(pr => pr.Pets)
            .WithOne(pt => pt.Person)
            .HasForeignKey(pt => pt.PersonId);

            /* Settings for Pet table */
            /* As a one to many "1 Pet to Many Visits" relationship with Visits table */
            modelBuilder.Entity<Pet>()
            .HasMany(pt => pt.Visits)
            .WithOne(vt => vt.Pet)
            .HasForeignKey(vt => vt.PetId);
        }
    }
}