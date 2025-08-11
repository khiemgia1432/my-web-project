//load more button 
let loadMoreBtn = document.querySelector('#show-more');
let carCountText = document.querySelector('#car-number');
let boxes = [...document.querySelectorAll('.container .box-1 .box-container')];

let currentItem = 12;

    
for (let i = currentItem; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
}

loadMoreBtn.onclick = () => {
    let itemsToShow = Math.min(3, boxes.length - currentItem); 

    for (let i = currentItem; i < currentItem + itemsToShow; i++) {
    boxes[i].style.display = 'inline-block';
    }

    currentItem += itemsToShow;

     
    let currentCount = parseInt(carCountText.textContent);
    let newCount = Math.max(0, currentCount - itemsToShow);
    carCountText.textContent = `${newCount} Car`;

     
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
};
//heart liked
  document.querySelectorAll('.love-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('.love-icon');
    img.src = img.src.includes('Like.png') 
      ? 'assets/icons/heart1.png' 
      : 'assets/icons/Like.png';
    });
  });


  

