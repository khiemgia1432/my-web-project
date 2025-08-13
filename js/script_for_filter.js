// Load More Button
let loadMoreBtn = document.querySelector('#show-more-1');
let carCountText = document.querySelector('#car-number');
let boxes = [...document.querySelectorAll('.container .box-1 .box-container')];

let currentItem = 12;


for (let i = currentItem; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
}


loadMoreBtn.onclick = () => {
    let itemsToShow = Math.min(3, boxes.length - currentItem);

    for (let i = currentItem; i < currentItem + itemsToShow; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += itemsToShow;

    
    let remaining = Math.max(0, boxes.length - currentItem);
    carCountText.textContent = `${remaining} Car`;

    
    if (remaining === 0) {
        loadMoreBtn.style.display = "none !important";
    }
};


// Heart Like Toggle

document.querySelectorAll('.love-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('.love-icon');
        img.src = img.src.includes('Like.png')
            ? 'assets/icons/heart1.png'
            : 'assets/icons/Like.png';
    });
});


// Price Slider
document.addEventListener("DOMContentLoaded", function () {
    const range = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    range.addEventListener('input', function () {
        priceValue.textContent = this.value;
        filterCars(); // update filter when price changes
    });
});


// Car Filter
document.addEventListener("DOMContentLoaded", function () {
  const typeCheckboxes = document.querySelectorAll('input[name="type"]');
  const capacityCheckboxes = document.querySelectorAll('input[name="capacity"]');
  const priceRange = document.getElementById("priceRange");
  const cars = [...document.querySelectorAll(".car-item")];

  
  [...typeCheckboxes, ...capacityCheckboxes].forEach(cb => {
    cb.addEventListener("change", filterCars);
  });

  function filterCars() {
  const activeTypes = Array.from(typeCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const activeCapacities = Array.from(capacityCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const maxPrice = parseFloat(priceRange.value);

  let visibleCars = [];

  
  cars.forEach(car => {
    const carType = car.getAttribute("data-type");
    const carCapacity = car.getAttribute("data-capacity");
    const carPrice = parseFloat(car.getAttribute("data-price"));

    const matchType = activeTypes.length === 0 || activeTypes.includes(carType);
    const matchCapacity = activeCapacities.length === 0 || activeCapacities.includes(carCapacity);
    const matchPrice = carPrice <= maxPrice;

    if (matchType && matchCapacity && matchPrice) {
        visibleCars.push(car);
      }
    });

    
    cars.forEach(car => car.style.display = "none");

    
    currentItem = 9;
    visibleCars.slice(0, currentItem).forEach(car => {
        car.style.display = "";
    });

    
    let remainingCars = visibleCars.length - currentItem;
    if (remainingCars < 0) remainingCars = 0;
    carCountText.textContent = `${remainingCars} Car`;

    // Hiện / Ẩn nút load more
    if (visibleCars.length === 0 || visibleCars.length <= currentItem) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "flex"; 
    }

    
    boxes = visibleCars;
  }

    
  filterCars();
});
//nut filter
const burgerBtn = document.getElementById("burger-btn");
const filterBar = document.querySelector(".filter-bar");

burgerBtn.addEventListener("click", () => {
  filterBar.classList.toggle("active");
});