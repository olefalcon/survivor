    var items = [];
function Item(name) {
    
    this.name = name;
    this.count = 0;
    
    this.add = function(count) {
        this.count += count;
    };
    this.remove = function(count) {
        this.count -= count;
    };
    
}

items.push(new Item("Stick"));  //0
items.push(new Item("Rock"));  //1
items.push(new Item("Berry")); // 2
items.push(new Item("Berry Juice"));    //3
items.push(new Item("Flint"));  //4
items.push(new Item("Wood"));   //5
items.push(new Item("Charcoal"));   //6
items.push(new Item("Fiber"));  //7
items.push(new Item("Stone")); //8
items.push(new Item("Trap")); //9
items.push(new Item("Meat")); //10
items.push(new Item("Fur")); //11
items.push(new Item("Scales")); //12
items.push(new Item("Cooked Meat")); //13
items.push(new Item("Filled Waterskin")); //14
items.push(new Item("Empty Waterskin")); //15