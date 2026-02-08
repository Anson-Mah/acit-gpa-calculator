function calculate() {
	let total_classes = 0
	let unweighted_gpa = 0;
	let weighted_gpa = 0;
	let course_array = [];
	
	// Collects all Data
	for (let i = 0; i < 40; i++) {
		let grade = document.getElementById(`grade_${i}`).value;
		let weight = document.getElementById(`weight_${i}`).value;

		if (grade == "-" || weight == "-") {
			continue;
		}

		total_classes++;
		course_array.push(i);
	}

	// Takes Unweighted GPA
	for (let i = 0; i < total_classes; i++) {
		let grade = document.getElementById(`grade_${course_array[i]}`).value;
		unweighted_gpa += (grade * 1);
	}
	unweighted_gpa = unweighted_gpa / total_classes;

	// Takes Weighted GPA
	for (let i = 0; i < total_classes; i++) {
		let grade = document.getElementById(`grade_${course_array[i]}`).value;
		let weight = document.getElementById(`weight_${course_array[i]}`).value;
		weighted_gpa += (grade * weight);
	}
	weighted_gpa = weighted_gpa / total_classes;

	unweighted_gpa = unweighted_gpa.toFixed(3);
	weighted_gpa = weighted_gpa.toFixed(3);

	document.getElementById("gpa_output_unweighted").innerText = `Unweighted GPA: ${unweighted_gpa}`;
	document.getElementById("gpa_output_weighted").innerText = `Weighted GPA: ${weighted_gpa}`;
}

function save_classes() {
	course_names = [];
	grades = [];
	weights = [];

	// Collects all Data
	for (let i = 0; i < 40; i++) {
		let course_name = document.getElementById(`course_${i}`).value;
		let grade = document.getElementById(`grade_${i}`).value;
		let weight = document.getElementById(`weight_${i}`).value;

		course_names.push(course_name);
		grades.push(grade);
		weights.push(weight);
	}

	console.log(course_names);
	console.log(grades);
	console.log(weights);
}

function load_classes() {

}

// Directly ripped from W3-Schools
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML()