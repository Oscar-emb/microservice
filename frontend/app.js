// api url
const api_url = "http://localhost:8000/talentplus/talentplus/"
// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	console.log(data.name)
	console.log(data.office)
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let r = data;

	let value = `<p>${r.name}</p>`
	document.getElementById("test").innerHTML = value ;
}
