// Allows HTML snippets to be reused in multiple HTML files
// Code directly ripped from W3 Schools
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

// Calculates the GPA, both Weighted and Unweighted
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

	// Rounds GPAs to 3 decimal places
	unweighted_gpa = unweighted_gpa.toFixed(3);
	weighted_gpa = weighted_gpa.toFixed(3);

	// Displays GPAs
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

// Loads a preset of inputted classes using JSON
function load_classes() {
	preset = document.getElementById("presets").value;
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			displayJSONData(data);
		}
	};
	xhr.open("GET", `json/${preset}.json`, true);
	xhr.send();
}

function displayJSONData(data) {
	for (i = 0; i < data.freshman.length; i++) {
		let course_name = document.getElementById(`course_${i}`);
		let grade = document.getElementById(`grade_${i}`);
		let weight = document.getElementById(`weight_${i}`);

		course_name.value = data.freshman[i].course_name;
		grade.value = data.freshman[i].grade;
		weight.value = data.freshman[i].weight;
	}
	
	for (i = 0; i < data.sophomore.length; i++) {
		let course_name = document.getElementById(`course_${i+8}`);
		let grade = document.getElementById(`grade_${i+8}`);
		let weight = document.getElementById(`weight_${i+8}`);

		course_name.value = data.sophomore[i].course_name;
		grade.value = data.sophomore[i].grade;
		weight.value = data.sophomore[i].weight;
	}

	for (i = 0; i < data.junior.length; i++) {
		let course_name = document.getElementById(`course_${i+16}`);
		let grade = document.getElementById(`grade_${i+16}`);
		let weight = document.getElementById(`weight_${i+16}`);

		course_name.value = data.junior[i].course_name;
		grade.value = data.junior[i].grade;
		weight.value = data.junior[i].weight;
	}

	for (i = 0; i < data.senior.length; i++) {
		let course_name = document.getElementById(`course_${i+24}`);
		let grade = document.getElementById(`grade_${i+24}`);
		let weight = document.getElementById(`weight_${i+24}`);

		course_name.value = data.senior[i].course_name;
		grade.value = data.senior[i].grade;
		weight.value = data.senior[i].weight;
	}

	for (i = 0; i < data.summer.length; i++) {
		let course_name = document.getElementById(`course_${i+32}`);
		let grade = document.getElementById(`grade_${i+32}`);
		let weight = document.getElementById(`weight_${i+32}`);

		course_name.value = data.summer[i].course_name;
		grade.value = data.summer[i].grade;
		weight.value = data.summer[i].weight;
	}

	calculate()
}