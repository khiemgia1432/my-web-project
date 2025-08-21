
document.addEventListener("DOMContentLoaded", () => {
  const topRadio = document.querySelector(".tieudeTrai input");
  const topTitle = document.querySelector(".tieudeTrai span");
  const topImg   = document.querySelector(".tieudePhai img");

  const logos = {
    "Credit Card": "assets/icons/Visa.png",
    "PayPal": "assets/icons/PayPal.png",
    "Bitcoin": "assets/icons/Bitcoin.png"
  };

  const radios = document.querySelectorAll('.payWith input[name="payment"]'); // chỉ lấy PayPal + Bitcoin

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (!radio.checked) return;

      // lấy data trên top hiện tại
      const oldValue = topRadio.value;
      const oldLabel = topTitle.textContent.trim();

      // data của cái chọn
      const newValue = radio.value;
      const payDiv   = radio.closest(".pay");
      const imgNode  = payDiv.querySelector("img");

      // --- SWAP ---
      // Đưa cái chọn lên top
      topRadio.value = newValue;
      topTitle.textContent = newValue;
      topImg.src = logos[newValue];
      topImg.alt = newValue;
      topRadio.checked = true;

      // Đưa cái cũ xuống dưới
      radio.value = oldValue;
      // sửa text node ngay sau input
      radio.nextSibling.nodeValue = " " + oldValue;
      imgNode.src = logos[oldValue];
      imgNode.alt = oldValue;
      radio.checked = false;
    });
  });
});

