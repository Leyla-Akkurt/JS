function Smartphone(brand,name,price){
    this.brand=brand;
    this.name=name;
    this.price=price;
}

let user1=new Smartphone("apple","iphone",200);
let user2=new Smartphone("samsung","note5",100);

console.log(user1);
console.log(user2);