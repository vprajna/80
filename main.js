var nameofstudents = [];

function submit() {
  var arr = [];
  for (var j = 1; j <= 5; j = j + 1) {
    var name = document.getElementById("name_of_the_student_"+j).value;
  console.log(name); 
  nameofstudents.push(name); 
  }
  console.log(nameofstudents);
document.getElementById("display_name_with_commas").innerHTML="<h4>"+nameofstudents+"</h4>";
document.getElementById("display_name_without_commas").innerHTML="<h4>"+nameofstudents.join("  ")+"</h4>";
}
function sort() {}
