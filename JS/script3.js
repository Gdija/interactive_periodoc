// retrieve data
fetch("https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON")
.then(response => {
    console.log(response);
    let myData = response.json();
    console.log(myData);
    return myData;
})
.then(data => {
    data.forEach(elements => {
        const markup = `<li>${elements.symbol}</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    });

})
.catch(error => console.error(error));
