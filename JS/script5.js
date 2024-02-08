let specifiedAtomicNumbers = [1, 3, 11, 19, 37, 55, 87];

const apiUrl = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const elementsList = document.getElementById('myTable');

    // Check if data.Table.Row is defined and it is an array
    if (data.Table && data.Table.Row && Array.isArray(data.Table.Row)) {

      const filteredElements = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers.includes(atomicNumber);
      });

      filteredElements.forEach(row => {
        const cell = row.Cell;
        const roundedMass = parseFloat(cell[3]).toFixed(3);

        const table = document.createElement('table');
        const trAtomicNumber = document.createElement('tr');
        const trSymbol = document.createElement('tr');
        const trName = document.createElement('tr');
        const trMass = document.createElement('tr');

        const tdAtomicNumber = document.createElement('td');

        tdAtomicNumber.innerHTML = cell[0];
        tdAtomicNumber.style.textAlign = "start"; 

        const tdSymbol = document.createElement('td');
        const tdName = document.createElement('td');
        const tdMass = document.createElement('td');

        tdSymbol.innerHTML = cell[1];
        tdName.innerHTML = cell[2];
        tdMass.innerHTML = roundedMass;

        trAtomicNumber.appendChild(tdAtomicNumber);
        trSymbol.appendChild(tdSymbol);
        trName.appendChild(tdName);
        trMass.appendChild(tdMass);

        table.appendChild(trAtomicNumber);
        table.appendChild(trSymbol);
        table.appendChild(trName);
        table.appendChild(trMass);

        elementsList.appendChild(table);
      });

    } else {
      alert('Invalid data structure from the API.');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
