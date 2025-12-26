function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if(card.dataset.category === category){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
window.onload=()=>{
    filterProducts('.category-grid')
};