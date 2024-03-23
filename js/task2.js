// У нас є об'єкт, у якому зберігаються зарплати
//    нашої команди
//    Напишіть код для підсумовування всіх зарплат і
//    збережіть його результат у змінній sum.
//    Якщо об'єкт salaries порожній, то результат має бути 0
const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };
  const objName = Object.keys(salaries);

  function countSalary(salaries){
    let sum=0;
    for (const obj of objName) {
        sum+=salaries[obj]
    }
    return sum;
  }

  console.log(countSalary(salaries));

  const newSalary=objName.reduce((acc, item)=>acc+salaries[item],0);
  console.log(newSalary);