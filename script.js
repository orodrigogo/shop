function toggleBagItems(){
    const bagItems = document.querySelector(".bag-items");

    if(bagItems.style.display === "none"){
        bagItems.style.display = "block";
    } else {
        bagItems.style.display = "none";
    }
}