//create function to fetch and display element properties
function showElementProperties(atomicNumber) {
//API
const apiUrl = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON';

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
    const elementProperty = document.getElementById('Properties');
    if (data.Table && data.Table.Row && Array.isArray(data.Table.Row) && data.Table.Row.length > 0) {
      const elementData = data.Table.Row.find(row => parseInt(row.Cell[0]) === atomicNumber);
      if (elementData) {

        //const cell = data.Table.Row[0].Cell;
        const cell = elementData.Cell;
        const content = `
        <h2>${cell[2]}</h2>
      <p>Standard State: ${cell[11]}</p>
      <p>Electron Configuration: ${cell[5]}</p>
      <p>Electronegativity: ${cell[6]}</p>
      <p>Ionisation Energy: ${cell[8]}</p>
      <p>Electron Affinity: ${cell[9]}</p>
      <p>Oxidation States: ${cell[10]}</p>
      <p>Melting Point: ${cell[12]} K</p>
      <p>Boiling Point: ${cell[13]} K</p>
      <p>Density: ${cell[14]}</p>
      <p>Atomic Radius: ${cell[7]}</p>
      <p>Year Discovered: ${cell[16]}</p>
      `;
      elementProperty.innerHTML = content;
    } else {
      elementProperty.innerHTML = '<p> No Data</p>';
    }
    } else {
      elementProperty.innerHTML = '<p>No details available for this element.</p>';

    }     
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
    
}
const  urlSearchProperty = new URLSearchParams(window.location.search);
const atomicNumberProperty = urlSearchProperty.get('atomicNumber');

if(atomicNumberProperty){
  const atomicNumber = parseInt(atomicNumberProperty);
  showElementProperties(atomicNumber);
} else {
  console.error('Atomic number not specified in the URL.');
}


