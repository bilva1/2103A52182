// Sample data simulating API response
const products = [
    { id: 1, name: "Product 1", company: "Company A", category: "Electronics", price: 199.99, rating: 4.5, discount: 10, available: true },
    { id: 2, name: "Product 2", company: "Company B", category: "Books", price: 29.99, rating: 4.7, discount: 15, available: false },
    { id: 3, name: "Product 3", company: "Company C", category: "Fashion", price: 49.99, rating: 4.0, discount: 5, available: true },
    // Add more products as needed
  ];
  
  // DOM Elements
  const productList = document.getElementById('product-list');
  const productDetailSection = document.getElementById('product-detail');
  const productDetailContent = document.getElementById('product-detail-content');
  const backButton = document.getElementById('back-button');
  
  // Function to display all products
  function displayAllProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Company: ${product.company}</p>
        <p>Price: $${product.price}</p>
        <button onclick="viewProductDetail(${product.id})">View Details</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to view product detail
  function viewProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (product) {
      productDetailContent.innerHTML = `
        <h2>${product.name}</h2>
        <p>Company: ${product.company}</p>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}</p>
        <p>Discount: ${product.discount}%</p>
        <p>Availability: ${product.available ? 'In Stock' : 'Out of Stock'}</p>
      `;
      productList.parentElement.classList.add('hidden');
      productDetailSection.classList.remove('hidden');
    }
  }
  
  // Function to go back to all products
  backButton.addEventListener('click', () => {
    productDetailSection.classList.add('hidden');
    productList.parentElement.classList.remove('hidden');
  });
  
  // Initialize the app
  displayAllProducts();
  