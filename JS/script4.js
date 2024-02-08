// api

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
      // Loop through the elements and append them to the <ul>
      data.Table.Row.forEach(row => {
        const cell = row.Cell;
        //create table row for each element
        const tr = document.createElement('tr');

        //create table cells for each data
        const symbol = document.createElement('td');
        const atomicNumber = document.createElement('td');
        const name = document.createElement('td'); 
        symbol.textContent = cell[0];
        atomicNumber.textContent= cell[2];
        name.textContent= cell[15]; // the indices based on the structure of the API 
        
        tr.append(symbol);
        tr.append(atomicNumber);
        tr.append(name);
        
        elementsList.append(tr);
      });
    } else {
      alert('Invalid data structure from the API.')
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

