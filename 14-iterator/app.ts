class CollectionItem {
  id: number;
  date: string;
  title: string;
  constructor(id: number, date: string, title: string) {
    this.id = id;
    this.date = date;
    this.title = title;
  }
}

class CollectionList {
  private collection: CollectionItem[] = [];

  addItem(item: CollectionItem) {
    this.collection.push(item);
  }

  clearItem() {
    this.collection = [];
  }

  getItem() {
    return this.collection;
  }
  getIterator(method: 'id' | 'date') {
    return new IteratorByDateAndId(this.collection, method);
  }
}

interface IntIteraror<T> {
  current(): T | undefined;
  next(): T | undefined;
  prev(): T | undefined;
  index(): number;
}

class IteratorByDateAndId implements IntIteraror<CollectionItem> {
  private position: number = 0;
  private itemList: CollectionItem[];

  constructor(itemList: CollectionItem[], sortBy: 'id' | 'date') {
    this.itemList = [...itemList].sort((a, b) => {
      if (sortBy === 'id') {
        return a.id - b.id;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  current(): CollectionItem | undefined {
    return this.itemList[this.position];
  }

  next(): CollectionItem | undefined {
    if (this.position < this.itemList.length - 1) {
      this.position++;
      return this.itemList[this.position];
    }
    return undefined;
  }

  prev(): CollectionItem | undefined {
    if (this.position > 0) {
      this.position--;
      return this.itemList[this.position];
    }
    return undefined;
  }
  index(): number {
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
