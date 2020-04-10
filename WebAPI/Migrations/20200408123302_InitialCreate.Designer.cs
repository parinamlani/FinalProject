﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations
{
    [DbContext(typeof(EmployeeDetailContext))]
    [Migration("20200408123302_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.EmployeeDetail", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("dob")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("doj")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("varchar(40)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("varchar(15)");

                    b.HasKey("id");

                    b.ToTable("EmployeeDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
