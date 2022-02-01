function Departments() {


    fetch("emp.json").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px;padding:10px'>Department</th><th style='border: solid black; border-width: 1px 1px';padding:10px>Strength</th><th style='border: solid black; border-width: 1px 1px';padding:10px>Percentage</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.department + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.strength + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.percentage + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("text").innerHTML = table;
                document.getElementById("tablebody").style.display="none";
    document.getElementById("leavebody").style.display="none";
    document.getElementById("EMbody").style.display="none";
    document.getElementById("newjoinbody").style.display="none";
    document.getElementById("Leavingbody").style.display="none";
    document.getElementById("text").style.display="block";
  
              });
            }
          }
        )
  
      }
    )
  }

  function Employees() {


    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px'>Id</th><th style='border: solid black; border-width: 1px 1px'>Image Url</th><th style='border: solid black; border-width: 1px 1px'>First Name</th><th style='border: solid black; border-width: 1px 1px'>Last Name</th><th style='border: solid black; border-width: 1px 1px'>Email</th><th style='border: solid black; border-width: 1px 1px'>Contact Number</th><th style='border: solid black; border-width: 1px 1px'>Age</th><th style='border: solid black; border-width: 1px 1px'>DOB</th><th style='border: solid black; border-width: 1px 1px'>Salary</th><th style='border: solid black; border-width: 1px 1px'>Address</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.id + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.imageUrl + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.firstName + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.lastName + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.email + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.contactNumber + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.age + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.dob + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.salary + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.address + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("tablebody").innerHTML = table;
               
                document.getElementById("text").style.display="none";
    document.getElementById("leavebody").style.display="none";
    document.getElementById("EMbody").style.display="none";
    document.getElementById("newjoinbody").style.display="none";
    document.getElementById("Leavingbody").style.display="none";
    document.getElementById("tablebody").style.display="block";
              });
            }
          }
        )
  
      }
    )
  }

  function Leaves() {


    fetch("leave.json").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px'>Employee Id</th><th style='border: solid black; border-width: 1px 1px'>Leaves Token</th><th style='border: solid black; border-width: 1px 1px'>Leaves Remaining</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.EmployeeId + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.LeavesToken + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.LeavesRemaining + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("leavebody").innerHTML = table;
                document.getElementById("text").style.display="none";
                document.getElementById("tablebody").style.display="none";
                document.getElementById("EMbody").style.display="none";
                document.getElementById("newjoinbody").style.display="none";
                document.getElementById("Leavingbody").style.display="none";
                document.getElementById("leavebody").style.display="block";
  
              });
            }
          }
        )
  
      }
    )
  }

  function ExitMan() {


    fetch("Exitman.json").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px'>Stage</th><th style='border: solid black; border-width: 1px 1px'>Current Status</th><th style='border: solid black; border-width: 1px 1px'>Remarks</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Stage + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.CurrentStatus + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Remarks + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("EMbody").innerHTML = table;
                document.getElementById("text").style.display="none";
                document.getElementById("leavebody").style.display="none";
                document.getElementById("tablebody").style.display="none";
                document.getElementById("newjoinbody").style.display="none";
                document.getElementById("Leavingbody").style.display="none";
                document.getElementById("EMbody").style.display="block";
  
              });
            }
          }
        )
  
      }
    )
  }

  function NewJoin() {


    fetch("newjoin.json").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px'>Id</th><th style='border: solid black; border-width: 1px 1px'>Name</th><th style='border: solid black; border-width: 1px 1px'>Skills</th><th style='border: solid black; border-width: 1px 1px'>Date of joining</th><th style='border: solid black; border-width: 1px 1px'>Designation</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Id + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Name + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Skills + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.DateOfJoining + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Designation + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("newjoinbody").innerHTML = table;
                document.getElementById("text").style.display="none";
                document.getElementById("leavebody").style.display="none";
                document.getElementById("EMbody").style.display="none";
                document.getElementById("tablebody").style.display="none";
                document.getElementById("Leavingbody").style.display="none";
                document.getElementById("newjoinbody").style.display="block";
  
              });
            }
          }
        )
  
      }
    )
  }

  function LeavingNextMonth() {
    fetch("LeaveNextMon.json").then(
      res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.length > 0) {
            var table="<table style='text-align:center;border: solid black; border-width: 1px 1px;margin-left: auto; margin-right: auto;'><thead ><tr><th style='border: solid black; border-width: 1px 1px'>Id</th><th style='border: solid black; border-width: 1px 1px'>Name</th><th style='border: solid black; border-width: 1px 1px'>Skills</th><th style='border: solid black; border-width: 1px 1px'>Date of Leaving</th><th style='border: solid black; border-width: 1px 1px'>Designation</th></tr></thead><tbody>";
           
            data.forEach((u) => {

                table += "<tr style='border: solid black; border-width: 1px 1px; padding:10px'>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Id + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Name + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Skills + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.DateOfLeaving + "</td>";
                table += "<td style='border: solid black; border-width: 1px 1px; padding:10px'>" + u.Designation + "</td></tr><br>";
                "</tbody></table>";
                document.getElementById("Leavingbody").innerHTML = table;
                document.getElementById("text").style.display="none";
                document.getElementById("leavebody").style.display="none";
                document.getElementById("EMbody").style.display="none";
                document.getElementById("newjoinbody").style.display="none";
                document.getElementById("tablebody").style.display="none";
                document.getElementById("Leavingbody").style.display="block";
  
              });
            }
          }
        )
  
      }
    )
  }