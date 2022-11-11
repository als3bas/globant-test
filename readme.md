 // Don’t change this section

// Land managers
const landManagers = [
    { id: 1, internalNumber: '123456789', name: 'RAFAEL MORALES SOTO' },
    { id: 2, internalNumber: '123456788', name: 'FERNANDO PINTO VARELA' },
    { id: 3, internalNumber: '123456787', name: 'ANDRES ROJAS PEÑA' },
    { id: 4, internalNumber: '123456786', name: 'MANUEL SALAS ORTIZ' },
    { id: 5, internalNumber: '123456785', name: 'MARIO ZUÑIGA ROMERO' },
    { id: 6, internalNumber: '123456784', name: 'JOSE ALFARO MOLINA' }
];

// Land type, describe what product is going to be harvested
const landType = [
    { id: 1, name: 'APPLE' },
    { id: 2, name: 'ORANGE' },
    { id: 3, name: 'BANANA' },
    { id: 4, name: 'PEACH' },
]

// A land is a farm that will be harvested
const lands = [
    { landManagerId: 5, farmId: 2, landTypeId: 4, harvestYear: 2020, area: 200 },
    { landManagerId: 4, farmId: 1, landTypeId: 2, harvestYear: 2018, area: 1500 },
    { landManagerId: 6, farmId: 1, landTypeId: 3, harvestYear: 2021, area: 2000 },
    { landManagerId: 1, farmId: 2, landTypeId: 4, harvestYear: 2020, area: 4405 },
    { landManagerId: 2, farmId: 3, landTypeId: 2, harvestYear: 2022, area: 4875 },
    { landManagerId: 3, farmId: 3, landTypeId: 2, harvestYear: 2018, area: 1905 },
    { landManagerId: 2, farmId: 2, landTypeId: 1, harvestYear: 2017, area: 10735 },
    { landManagerId: 1, farmId: 1, landTypeId: 4, harvestYear: 2022, area: 2525 },
    { landManagerId: 6, farmId: 1, landTypeId: 3, harvestYear: 2019, area: 1555 },
    { landManagerId: 3, farmId: 2, landTypeId: 2, harvestYear: 2016, area: 400 },
    { landManagerId: 4, farmId: 1, landTypeId: 2, harvestYear: 2017, area: 3255 },
    { landManagerId: 6, farmId: 2, landTypeId: 1, harvestYear: 2022, area: 725 },
    { landManagerId: 5, farmId: 3, landTypeId: 2, harvestYear: 2020, area: 12565 },
    { landManagerId: 1, farmId: 1, landTypeId: 2, harvestYear: 2022, area: 5000 },
    { landManagerId: 2, farmId: 2, landTypeId: 4, harvestYear: 2021, area: 23215 },
    { landManagerId: 2, farmId: 2, landTypeId: 3, harvestYear: 2018, area: 7125 },
    { landManagerId: 3, farmId: 3, landTypeId: 3, harvestYear: 2021, area: 300 },
    { landManagerId: 1, farmId: 3, landTypeId: 2, harvestYear: 2018, area: 3235 },
    { landManagerId: 4, farmId: 1, landTypeId: 1, harvestYear: 2019, area: 13255 },
    { landManagerId: 4, farmId: 2, landTypeId: 2, harvestYear: 2021, area: 3120 },
    { landManagerId: 5, farmId: 2, landTypeId: 2, harvestYear: 2018, area: 5300 },
    { landManagerId: 3, farmId: 3, landTypeId: 3, harvestYear: 2019, area: 20340 },
    { landManagerId: 6, farmId: 3, landTypeId: 4, harvestYear: 2020, area: 24235 }
];

const farms = [
    { id: 1, name: 'Glo Land' },
    { id: 2, name: 'Chicken Land' },
    { id: 3, name: 'Wonderful Land' }
];

// You can change this section


// Return an array with the ids of the managers of each land
function listLandManagerIds() {
	// code here
};

// Return an array with the internal number of the managers or the lands, sorted by name
function listLandManagersByName() {
    // code here
};

// Return an Array with the names of each land type, sorted dec by the total sum of the harvested hectares of each of them
// Tip: one hectare is 10.000m2
function sortLandTypeByTotalArea() {
// code here
};

// Return an array with the names of the land managers, sorted dec by the total sum of the hectares that they manage
function sortLandManagerByAdminArea() {
    // code here
}

// Return an Object where the keys are the name of the farms and the values an Array of the internal number of their managers sorted alphabetically by name.
function farmManagerNames() {

   // code here
}

// Return an Array sorted dec by the total m2 of the lands that have more than 2 hectares of Apples
function biggestAppleFarms() {
 // code here
}

// Return an array with the names of the managers of Glo Land and Chicken Land sorted by name if they have more than 1000m2 of Oranges
function biggestOrangesManagers() {

   // code here
}

// Return an Object where the keys are the name of the manager and the value an Array of names of the lands that they manage, sorted alphabetically
function farmManagerLands() {
    // code here
}



// Return an Object where the keys are the land types concatenated with the harvested year (use “-” to concatenate) and the value another Object where the key is the ID of the manager and the value the name of the manager
function landsManagers() {
    // code here
}
