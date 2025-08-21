//heart liked
document.querySelectorAll(".love-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector(".love-icon");
    img.src = img.src.includes("Like.png")
      ? "assets/icons/heart1.png"
      : "assets/icons/Like.png";
  });
});
// Price + Filter
document.addEventListener("DOMContentLoaded", function () {
  const priceRange = document.getElementById("priceRange"); // giá max của thanh trược
  const priceValue = document.getElementById("priceValue"); // sô trên đầu thanh trược
  // Cập nhật giá trị hiển thị khi kéo thanh trượt
  priceRange.addEventListener("input", function () {
    priceValue.textContent = this.value;
  });
});
// chuyển ảnh phụ thành ảnh chính
const mainImg = document.getElementById("main-img"); //ảnh chính
const subImgs = document.querySelectorAll(".anh-phu img"); // ảnh phụ

subImgs.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src; // đổi ảnh chính bằng ảnh phụ được click
  });
});

// nut show all
const reviews = document.querySelectorAll(".DanhGia");
const nutShowAll = document.querySelector(".nutShowAll");
let tuyChon = false; // lúc bthuong

// chỉ hiện 2 cái mặc định
reviews.forEach((review, index) => {
  if (index > 1) review.style.display = "none";
});

nutShowAll.addEventListener("click", () => {
  if (!tuyChon) {
    // Hiện hết
    reviews.forEach((review) => (review.style.display = "flex"));
    nutShowAll.querySelector("p").textContent = "Show Less";
    tuyChon = true;
  } else {
    // Ẩn bớt, chỉ giữ 2 cái đầu
    reviews.forEach((review, index) => {
      review.style.display = index > 1 ? "none" : "flex";
    });
    nutShowAll.querySelector("p").textContent = "Show All";
    tuyChon = false;
  }
});
//Thanh filter
const burgerBtn = document.getElementById("burger-btn");
const filterBar = document.querySelector(".filter-bar");

burgerBtn.addEventListener("click", () => {
  filterBar.classList.toggle("active");
});
