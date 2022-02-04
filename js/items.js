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

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();