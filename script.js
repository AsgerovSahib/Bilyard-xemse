// Yeməklər array (təxmini 60 yemək üçün nümunə)
const meals = [
    ["https://cafecity.az/media/product_image/%D0%A8%D0%90%D0%A8%D0%9B%D0%AB%D0%9A-%D0%98%D0%97-%D0%9A%D0%A3%D0%A0%D0%98%D0%9D%D0%9E%D0%93%D0%9E-%D0%A4%D0%98%D0%9B%D0%95.png.600x600_q85_box-0%2C0%2C600%2C600_crop_detail.jpg", "Yunan Salatı", "6 AZN", "Salatlar"],
    ["img/soup.jpg", "Toyuq Şorbası", "5 AZN", "Şorbalar"],
    ["img/kebab.jpg", "Toyuq Kebabı", "12 AZN", "Kabablar"],
    ["img/steak.jpg", "Steyk", "20 AZN", "Əsas Yeməklər"],
    ["img/pizza.jpg", "Marqarita Pizza", "14 AZN", "Pizza"],
    ["img/sushi.jpg", "Sushi Set", "18 AZN", "Sushi"],
    ["img/dessert.jpg", "Tiramisu", "7 AZN", "Desertlər"],
    ["img/tea.jpg", "Çay", "2 AZN", "İsti İçkilər"],
    ["img/coffee.jpg", "Kofe", "3 AZN", "İsti İçkilər"],
    ["img/cocktail.jpg", "Mojito", "8 AZN", "Kokteyllər"],
    // ... burda təxminən 60 yemək ola bilər
  ];
  
  // Unikal kateqoriyalar götürək
  const categories = [...new Set(meals.map(m => m[3]))];
  
  // Kateqoriyalar HTML-ə əlavə et
  const categoriesContainer = document.getElementById("categories");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category";
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.getElementById(cat).scrollIntoView({ behavior: "smooth" });
    });
    categoriesContainer.appendChild(btn);
  });
  
  // Menyu bölmələrini əlavə et
  const menuContainer = document.getElementById("menu-container");
  
  categories.forEach(cat => {
    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = cat;
  
    const title = document.createElement("h3");
    title.textContent = cat;
    section.appendChild(title);
  
    const grid = document.createElement("div");
    grid.className = "menu-grid";
  
    meals.filter(m => m[3] === cat).forEach(([img, name, price]) => {
      const item = document.createElement("div");
      item.className = "menu-item";
      item.innerHTML = `
        <img src="${img}" alt="${name}">
        <h4>${name}</h4>
        <p>${price}</p>
      `;
      grid.appendChild(item);
    });
  
    section.appendChild(grid);
    menuContainer.appendChild(section);
  });
  