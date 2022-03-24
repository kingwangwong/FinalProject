export class ItemsController {
//    constructor(currentId = 0){
//        itemsArray = [];
//        this.currentId = currentId;
//
//    }
    constructor() {
        this.items = [];
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

    save({name, description, imageUrl}){
                const data = { name,  description, imageUrl };

                fetch('http://localhost:8080/item', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
            }

            delete(itemId){
                    fetch(`http://localhost:8080/item/${itemId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    })
                    .then(response => console.log("Success:", response))
                    .catch((error) => {
                        console.error("Error:", error);
                    })

                }
}

