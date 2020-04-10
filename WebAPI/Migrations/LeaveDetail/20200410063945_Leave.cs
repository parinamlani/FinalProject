using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations.LeaveDetail
{
    public partial class Leave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LeaveDetails",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    leavename = table.Column<string>(type: "varchar(25)", nullable: false),
                    numberOfDays = table.Column<int>(type: "int(2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeaveDetails", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LeaveDetails");
        }
    }
}
