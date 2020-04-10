using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations.EmployeeMapDetail
{
    public partial class EmpMap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "employeeMapDetails",
                columns: table => new
                {
                    eid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    empid = table.Column<string>(type: "varchar(2)", nullable: false),
                    Levid = table.Column<string>(type: "varchar(2)", nullable: false),
                    LevStartdt = table.Column<string>(type: "varchar(10)", nullable: false),
                    LevEnddt = table.Column<string>(type: "varchar(10)", nullable: false),
                    status = table.Column<string>(type: "varchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employeeMapDetails", x => x.eid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employeeMapDetails");
        }
    }
}
