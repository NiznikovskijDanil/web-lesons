function weightConverter() 
{
   let kg = +prompt('Введить ');
   console.log(typeof(kg));
   if((kg>0) && (!isNaN(kg)))
   {
     let pounds = kg * 2.2046226218488;
     let ounces = kg * 35.27396194958048;
     let centners = kg * 0.01;
     let tens = kg * 0.001;

     alert(`${kg} кг = ${pounds} фунтів = ${ounces} унцій = ${centners} центнерів = ${tens} тон`);
   }
   else
   {
       alert('Невірні дані');
   }
}

function narahovano() 
{
    let a = prompt('Введіть ');
    let grn = +a;
    console.log(typeof(grn));

    if((!isNaN(grn)) && (grn > 0))
    {
      if (a < 10000) 
      {
        let procent = a / 100 *15;
        alert(`${procent} грн`);
      } 
      else 
      {
        let procent = a / 100 * 17;
        alert(`${procent} грн`);
      }
    }
    else
    {
        alert('Невірні дані');
    }
}