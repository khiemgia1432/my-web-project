// Price + Filter
document.addEventListener("DOMContentLoaded", function () {
  const priceRange = document.getElementById("priceRange"); // giá max của thanh trược
  const priceValue = document.getElementById("priceValue"); // sô trên đầu thanh trược
  // Cập nhật giá trị hiển thị khi kéo thanh trượt
  priceRange.addEventListener("input", function () {
    priceValue.textContent = this.value;
  });
});
