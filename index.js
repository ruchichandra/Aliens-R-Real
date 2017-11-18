// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var $submitBtn = document.querySelector("#submit");

// ##################################################

// Set UFO sightings to dataset
var UFOdata = dataSet;

// ##################################################

// renderTable renders the UFO Sightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < UFOdata.length; i++) {
    // Get get the sightings object and its fields
    var CurrentSighting = UFOdata[i];
    var fields = Object.keys(CurrentSighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the CurrentSighting object, create a new cell at set its inner text to be the current value at the current sightings field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = CurrentSighting[field];
    }
  }
}

// ##################################################

// Add an event listener to the Submit Button
$submitBtn.addEventListener("click", filterInput);

function filterDate(filteredSighting) {
  return filteredSighting.date == $dateInput.value.trim().toLowerCase();
};

function filterCity(filteredSighting) {
  return filteredSighting.city == $cityInput.value.trim().toLowerCase();
};

function filterState(filteredSighting) {
  return filteredSighting.state == $stateInput.value.trim().toLowerCase();
};

function filterCountry(filteredSighting) {
  return filteredSighting.country == $countryInput.value.trim().toLowerCase();
};

function filterShape(filteredSighting) {
  return filteredSighting.shape == $shapeInput.value.trim().toLowerCase();
};

function filterInput() {

  // Reseting data set 
  UFOdata = dataSet;

  // filters
  if ($dateInput.value) {
    UFOdata = UFOdata.filter(filterDate);
  };

  if ($cityInput.value) {
    UFOdata = UFOdata.filter(filterCity);
  };

  if ($stateInput.value) {
    UFOdata = UFOdata.filter(filterState);
  };

  if ($countryInput.value) {
    UFOdata = UFOdata.filter(filterCountry);
  };

  if ($shapeInput.value) {
    UFOdata = UFOdata.filter(filterShape);
  };
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

  renderTable();
};

// Render the table for the first time on page load
renderTable();




// function handleSubmitButtonClick() {
//   alert("Submit your Input");
//   var filterDate = $dateInput.value.trim();
//   alert(filterDate);
//   console.log(filterDate)
//   var validDate = true
//   if (filterDate){
//     if (!moment(filterDate, 'M/D/YYYY',true).isValid()){
//         validDate = false
//     }
//   }  
//   alert("test1")
//   var filterCity = $cityInput.value.trim().toLowerCase();
//   var filterState = $stateInput.value.trim().toLowerCase();
//   var filterCountry = $countryInput.value.trim().toLowerCase();
//   var filterShape = $shapeInput.value.trim().toLowerCase();
//   alert("test2")


//   // Set UFOSightings to an array of all dates whose "date" matches the filter
//   UFOSightings = dataSet.filter(function(CurrentSighting) {
//     var CurrentSightingDate = CurrentSighting.date;
//     var CurrentSightingCity = CurrentSighting.city.toLowerCase();
//     var CurrentSightingState = CurrentSighting.state.toLowerCase();
//     var CurrentSightingCountry = CurrentSighting.country.toLowerCase();
//     var CurrentSightingShape = CurrentSighting.shape.toLowerCase();
//     alert("test3");

//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//     if (CurrentSightingDate === filterDate && CurrentSightingCity === filterCity && CurrentSightingState === filterState && CurrentSightingCountry === filterCountry && CurrentSightingShape === filterShape){
      
//       return true;
//       alert("test4")
//     }
//   });
//   renderTable();
//   alert("teat5")
// }




