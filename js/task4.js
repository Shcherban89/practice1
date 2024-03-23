/**
 *? Напишіть функцію updateObject, яка приймає об'єкт робить копію та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 */
 const obj = { a: 1, b: 2, c: 3 };

 function updateObject(obj, elem){
 const newObj={...obj};
 delete newObj[elem]
return newObj
 }
 console.log(updateObject(obj, "c"));