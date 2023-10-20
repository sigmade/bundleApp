function privateFunc() {
    console.log('call private');
 }
  
 function publicFunc(name) {
    privateFunc();
    console.log('Вызов публичной функции из модуля');
    console.log(`Привет, ${name}!`);
 }
  
 export default publicFunc;