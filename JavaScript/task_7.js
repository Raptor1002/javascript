// Task 1 — Basic API Methods

fetch('https://fakestoreapi.com/products')

  .then(response => response.json())
  .then(products => {
    console.log("--- All Products ---");
    products.forEach(p => console.log(`${p.title} | $${p.price} | ${p.category}`));

    const titlesAndPrices = products.map(p => ({ title: p.title, price: p.price }));
    console.log("\n--- Titles & Prices ---", titlesAndPrices);

    const expensiveProducts = products.filter(p => p.price > 100);
    console.log("\n--- Price > $100 ---", expensiveProducts);

    const firstElectronics = products.find(p => p.category === 'electronics');
    console.log("\n--- First Electronics Product ---", firstElectronics);

    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    console.log(`\n--- Total Price --- $${totalPrice.toFixed(2)}`);

    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    console.log("\n--- Sorted Highest to Lowest ---", sortedProducts);
  })
  .catch(error => console.error("Error fetching data:", error))
  .finally(() => console.log("\nData fetching process complete."));

//   Task 2 — Product Category Dashboard

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const totalProducts = products.length;
    
   
    const categories = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});


    const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
    const lowestPrice = sortedByPrice[0].price;
    const highestPrice = sortedByPrice[sortedByPrice.length - 1].price;
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = (totalPrice / totalProducts).toFixed(2);

    const dashboard = `
===== PRODUCT DASHBOARD =====

Total Products: ${totalProducts}

Electronics: ${categories['electronics'] || 0}
Jewelery: ${categories['jewelery'] || 0}
Men's Clothing: ${categories["men's clothing"] || 0}
Women's Clothing: ${categories["women's clothing"] || 0}

Highest Price: $${highestPrice}
Lowest Price: $${lowestPrice}
Average Price: $${averagePrice}
    `;
    console.log(dashboard);
  })
  .catch(error => console.error("Error:", error));


// Task 3 — User & Post API


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    console.log("--- All User Names ---");
    users.forEach(u => console.log(u.name));

    console.log("\n--- Name + Email ---");
    users.forEach(u => console.log(`${u.name} (${u.email})`));

    const user5 = users.find(u => u.id === 5);
    console.log("\n--- User ID 5 ---", user5);

   
    const specificCityUsers = users.filter(u => u.address.city === 'Gwenborough');
    console.log("\n--- Users from Gwenborough ---", specificCityUsers);
  });

// Fetch Posts

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const user1Posts = posts.filter(p => p.userId === 1);
    console.log("\n--- Posts by User ID 1 ---", user1Posts);

    console.log(`\n--- User ID 1 Post Count --- ${user1Posts.length}`);

    const longTitlePost = posts.find(p => p.title.length > 50);
    console.log("\n--- First post with title > 50 characters ---", longTitlePost);
  });

// Task 4 — API + Search

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const searchCategory = prompt("Enter product category (e.g., electronics):").toLowerCase();
    const searchMaxPrice = parseFloat(prompt("Enter maximum price (e.g., 500):"));

    const filteredProducts = products.filter(p => 
      p.category === searchCategory && p.price <= searchMaxPrice
    );

    console.log(`\nResults for ${searchCategory} under $${searchMaxPrice}:`);
    if(filteredProducts.length === 0) {
      console.log("No products found matching your criteria.");
    } else {
      filteredProducts.forEach(p => console.log(`- ${p.title} ($${p.price})`));
    }
  });


// Task 5 — API Shopping Cart

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    
    const selectedIds = [1, 2];
    const cart = products.filter(p => selectedIds.includes(p.id));

    let cartOutput = `===== CART =====\n\n`;
    
    cart.forEach((item, index) => {
      cartOutput += `Product ${index + 1}: ${item.title}\nPrice: $${item.price}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    let discountPercent = 0;

    if (total > 200) {
      discountPercent = 20;
    } else if (total > 100) {
      discountPercent = 10;
    }

    const discountAmount = total * (discountPercent / 100);
    const finalAmount = total - discountAmount;

    cartOutput += `Total: $${total.toFixed(2)}\n`;
    cartOutput += `Discount: ${discountPercent}%\n`;
    cartOutput += `Final Amount: $${finalAmount.toFixed(2)}\n`;

    console.log(cartOutput);
  });


// Task 6 — FakeStore Product Report

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {

    const productNames = products.map(p => p.title);

   
    const expensive = products.filter(p => p.price > 100);

   
    const firstElectronic = products.find(p => p.category === 'electronics');

  
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);

    
    const hasAbove500 = products.some(p => p.price > 500);
    const allAbove1 = products.every(p => p.price > 1);

    const sortedProducts = [...products].sort((a, b) => b.price - a.price);

    const report = `========== PRODUCT REPORT ==========

Total Products: ${products.length}

Product Names:
${productNames.slice(0, 3).map(name => `- ${name}`).join('\n')}
...

Products Above $100:
${expensive.length} items found

Electronics Product:
${firstElectronic ? firstElectronic.title : "None found"}

Total Product Value:
$${totalValue.toFixed(2)}

Any Product Above $500:
${hasAbove500}

All Products Above $1:
${allAbove1}

Highest → Lowest (Top 3):
${sortedProducts.slice(0, 3).map(p => `- ${p.title} ($${p.price})`).join('\n')}
...`;

    console.log(report);
  })
  .catch(error => {
 
    console.error("Failed to generate report:", error);
  })
  .finally(() => {
    console.log("\nReport generation finished.");
  });