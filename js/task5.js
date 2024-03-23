// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];

function updateObj(fruits) {
  const newFruits=fruits.map(item=>({
    ...item, 
    price:item.price*0.8, 
    id:Math.round(Math.random()*1000)
}));
    return newFruits
};

console.log(updateObj(fruits));