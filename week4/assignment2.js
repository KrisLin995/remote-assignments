function ajax(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response error');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Network request failed');
    });
}

function render(data) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header row
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  headerRow.appendChild(nameHeader);

  const priceHeader = document.createElement('th');
  priceHeader.textContent = 'Price';
  headerRow.appendChild(priceHeader);

  const descriptionHeader = document.createElement('th');
  descriptionHeader.textContent = 'Description';
  headerRow.appendChild(descriptionHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body rows
  data.forEach(item => {
    const bodyRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    bodyRow.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item.price;
    bodyRow.appendChild(priceCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = item.description;
    bodyRow.appendChild(descriptionCell);

    tbody.appendChild(bodyRow);
  });

  table.appendChild(tbody);
  document.getElementById('container').appendChild(table);
}

const url = 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products';
ajax(url)
  .then(data => {
    render(data);
  })
  .catch(error => {
    console.error('Fetch operation:', error);
  });
