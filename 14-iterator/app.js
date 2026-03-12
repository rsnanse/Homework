"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollectionItem {
    id;
    date;
    title;
    constructor(id, date, title) {
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class CollectionList {
    collection = [];
    addItem(item) {
        this.collection.push(item);
    }
    clearItem() {
        this.collection = [];
    }
    getItem() {
        return this.collection;
    }
    getIterator(method) {
        return new IteratorByDateAndId(this.collection, method);
    }
}
class IteratorByDateAndId {
    position = 0;
    itemList;
    constructor(itemList, sortBy) {
        this.itemList = [...itemList].sort((a, b) => {
            if (sortBy === 'id') {
                return a.id - b.id;
            }
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    }
    current() {
        return this.itemList[this.position];
    }
    next() {
        if (this.position < this.itemList.length - 1) {
            this.position++;
            return this.itemList[this.position];
        }
        return undefined;
    }
    prev() {
        if (this.position > 0) {
            this.position--;
            return this.itemList[this.position];
        }
        return undefined;
    }
    index() {
        return this.position;
    }
}
const list = new CollectionList();
list.addItem(new CollectionItem(2, '01-02-2021', 'Тест-66'));
list.addItem(new CollectionItem(11, '04-04-2023', 'Тест-44'));
list.addItem(new CollectionItem(4, '02-03-2022', 'Тест-55'));
list.addItem(new CollectionItem(13, '05-05-2024', 'Тест-33'));
list.addItem(new CollectionItem(1, '06-06-2025', 'Тест-22'));
list.addItem(new CollectionItem(6, '07-07-2026', 'Тест-12'));
const iterator = new IteratorByDateAndId(list.getItem(), 'id');
console.log(iterator);
const iterator2 = new IteratorByDateAndId(list.getItem(), 'date');
console.log(iterator2);
console.log(list.getItem());
//# sourceMappingURL=app.js.map