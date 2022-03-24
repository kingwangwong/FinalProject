import { ItemsController } from "./itemsController";
const itemsController = new ItemsController(0);

function addItemCard(item) {
    const itemHTML = '<div class="col-lg-4 col-sm-12 col-md-6"> \n' +
        '<div class="card" style="width: 18rem;">\n' +
        '<img src="' + item.img + '" class="card-img-top" alt="post" >\n' +
        '<div class="card-body">\n' +
        '<h5 class="card-title">' + item.name + '</h5>\n' +
        '<p class="card-text">' + item.text + '</p>\n' +
        '<a href="#" class="btn btn-primary">Edit</a>\n' +
        '<a href="#" class="btn btn-danger">Delete</a>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n';
    const itemsContainer = document.getElementsById('postsList');
    itemsContainer.innerHTML += itemHTML;

}
function loadStorageSampleData() {
    if (!localStorage.getItem("items")) {
        const sampleItems = [{
            'name': 'octopus',
            'text': 'a blue octopus',
            'img': 'resources/DSC_1446pic.jpg',
            'author': 'K. Wong',
            'createdAt': Date},
            {'name': 'keyboard',
            'text': 'a gray and purple keyboard',
            'img': 'resources/kbd75-1.jpg',
            'author': 'K. Wong',
            'createdAt': Date}
        ];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController() {
    for(let i = 0, size = ItemsController.items.length; i < size; i++) {
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

 function loadItemsFromDatabase() {
 fetch('http://localhost:8080/item/all')
 .then(response => response.json())
 .then(data => {
     for(let i = 0; i < data.length; i++) {
         itemsController.items.push(data[i]);
     }
 })
 .then(() => {
     loadCardsListFromItemsController();
 })
 .catch((error) => {
     console.log('Error: ', error);
 })


  function addItemCard(item){
    const itemHTML = '<div id="'+item.id +'" class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.imageUrl +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '        <a href="./item_update_form" class="btn btn-primary">Update</a>\n' +
        '        <a href="#" class="btn btn-danger btn-delete">Delete</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;

    let deleteButton = document.getElementsByClassName("btn-delete");
    for(let i = 0; i < deleteButton.length; i++) {
        let deleteBtn = deleteButton[i];
        deleteBtn.addEventListener("click", () => {
            let item = deleteBtn.parentElement.parentElement;
            itemsController.delete(item.id);
            location.reload();
        })
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
loadItemsFromDatabase();