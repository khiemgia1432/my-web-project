//load more button 
let loadMoreBtn = document.querySelector('#show-more');
let carCountText = document.querySelector('#car-number');
let boxes = [...document.querySelectorAll('.container .box .box-container')];

let currentItem = 12;

    
for (let i = currentItem; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
}

loadMoreBtn.onclick = () => {
    let itemsToShow = Math.min(4, boxes.length - currentItem); 

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
//avatar-options

  

