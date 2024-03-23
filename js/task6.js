/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
 const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2024-11-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2024-11-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2024-11-10"),
  };

  function updateConcerts (concerts) {
   const cities=Object.keys(concerts);
   const newDates = cities.filter(item=>concerts[item]>new Date());
   const sortedCities = newDates.toSorted((a,b)=>concerts[a]-concerts[b])
   return sortedCities
  }

  console.log(updateConcerts (concerts));

  const obj={};
 console.log(Object.keys(obj).length ? true: false);