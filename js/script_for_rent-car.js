// Price + Filter
document.addEventListener("DOMContentLoaded", function () {
  const typeCheckboxes = document.querySelectorAll('input[name="type"]'); // dùng phân loại xe
  const capacityCheckboxes = document.querySelectorAll('input[name="capacity"]'); //phân loại chỗ ngồi
  const priceRange = document.getElementById("priceRange");// giá max của thanh trược
  const priceValue = document.getElementById("priceValue");// sô trên đầu thanh trược
  const cars = [...document.querySelectorAll(".car-item")];

  // Heart Like Toggle

document.querySelectorAll('.love-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('.love-icon');
        img.src = img.src.includes('Like.png')
            ? 'assets/icons/heart1.png'
            : 'assets/icons/Like.png';
    });
});

  // Cập nhật giá trị hiển thị khi kéo thanh trượt
  priceRange.addEventListener("input", function () {
    priceValue.textContent = this.value;
    filterCars();
  });

  // Khi tick/untick checkbox
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

    cars.forEach(car => {
      const carType = car.getAttribute("data-type");
      const carCapacity = car.getAttribute("data-capacity");
      const carPrice = parseFloat(car.getAttribute("data-price"));

      const matchType = activeTypes.length === 0 || activeTypes.includes(carType);
      const matchCapacity = activeCapacities.length === 0 || activeCapacities.includes(carCapacity);
      const matchPrice = carPrice <= maxPrice;

      if (matchType && matchCapacity && matchPrice) {
        car.style.display = "inline-block";
      } else {
        car.style.display = "none";
      }
    });
  }

  // chạy filter ngay lần đầu
  filterCars();
});
