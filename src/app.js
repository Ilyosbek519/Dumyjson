const input = document.getElementById('searchInput');
const list = document.getElementById('productList');

input.addEventListener('input', async () => {
  const query = input.value.trim();
  if (query.length < 1) {
    list.innerHTML = '';
    return;
  }

  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  const products = data.products.slice(0, 10);

  list.innerHTML = '';
  products.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    `;
    list.appendChild(el);
  });
});
