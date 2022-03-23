export class ItemsController {
    constructor(currentId = 0){
        itemsArray = [];
        this.currentId = currentId;
        
    }
    addItem(name, text, img, author, createdAt) {
        const item = {
            id: this.currentId++,
            name: name,
            text: text,
            img: img,
            author: author,
            createdAt: createdAt
        };
        this.itemsArray.push(item);
        localStorage.setItem("items", JSON.stringify(this.items));


    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if(storageItems) {
            const items = JSON.parse(storageItems);
            for(let i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}

