
     // identify each cell from grid
     const A1 = document.getElementById('A1');
     const A2 = document.getElementById('A2');
     const A3 = document.getElementById('A3');
     const A4 = document.getElementById('A4');
     const A5 = document.getElementById('A5');
     const B1 = document.getElementById('B1');
     const B2 = document.getElementById('B2');
     const B3 = document.getElementById('B3');
     const B4 = document.getElementById('B4');
     const B5 = document.getElementById('B5');
     const C1 = document.getElementById('C1');
     const C2 = document.getElementById('C2');
     const C3 = document.getElementById('C3');
     const C4 = document.getElementById('C4');
     const C5 = document.getElementById('C5');
     const D1 = document.getElementById('D1');
     const D2 = document.getElementById('D2');
     const D3 = document.getElementById('D3');
     const D4 = document.getElementById('D4');
     const D5 = document.getElementById('D5');
     const E1 = document.getElementById('E1');
     const E2 = document.getElementById('E2');
     const E3 = document.getElementById('E3');
     const E4 = document.getElementById('E4');
     const E5 = document.getElementById('E5');

   document.addEventListener('DOMContentLoaded', function() {
   A1.addEventListener('click', function onclick() { 
      changeColor('A1'); changeColor('A2'); changeColor('B1'); count++; updateCount(); checkWin(); })
   A2.addEventListener('click', function onclick() { 
      changeColor('A1'); changeColor('A2'); changeColor('A3'); changeColor('B2'); count++; updateCount(); checkWin(); })
   A3.addEventListener('click', function onclick() { 
      changeColor('A2'); changeColor('A3'); changeColor('A4'); changeColor('B3'); count++; updateCount(); checkWin(); })
   A4.addEventListener('click', function onclick() { 
      changeColor('A3'); changeColor('A4'); changeColor('A5'); changeColor('B4'); count++; updateCount(); checkWin(); })
   A5.addEventListener('click', function onclick() { 
      changeColor('A4'); changeColor('A5'); changeColor('B5'); count++; updateCount(); checkWin(); })
   B1.addEventListener('click', function onclick() { 
      changeColor('A1'); changeColor('B1'); changeColor('B2'); changeColor('C1'); count++; updateCount(); checkWin(); })
   B2.addEventListener('click', function onclick() { 
      changeColor('A2'); changeColor('B1'); changeColor('B2'); changeColor('B3'); changeColor('C2'); count++; updateCount(); checkWin(); })
   B3.addEventListener('click', function onclick() { 
      changeColor('A3'); changeColor('B2'); changeColor('B3'); changeColor('B4'); changeColor('C3'); count++; updateCount(); checkWin(); })
   B4.addEventListener('click', function onclick() { 
      changeColor('A4'); changeColor('B3'); changeColor('B4'); changeColor('B5'); changeColor('C4'); count++; updateCount(); checkWin(); })
   B5.addEventListener('click', function onclick() { 
      changeColor('A5'); changeColor('B4'); changeColor('B5'); changeColor('C5'); count++; updateCount(); checkWin(); })
   C1.addEventListener('click', function onclick() { 
      changeColor('B1'); changeColor('C1'); changeColor('C2'); changeColor('D1'); count++; updateCount(); checkWin(); })
   C2.addEventListener('click', function onclick() { 
      changeColor('B2'); changeColor('C1'); changeColor('C2'); changeColor('C3'); changeColor('D2'); count++; updateCount(); checkWin(); })
   C3.addEventListener('click', function onclick() { 
      changeColor('B3'); changeColor('C2'); changeColor('C3'); changeColor('C4'); changeColor('D3'); count++; updateCount(); checkWin(); })
   C4.addEventListener('click', function onclick() { 
      changeColor('B4'); changeColor('C3'); changeColor('C4'); changeColor('C5'); changeColor('D4'); count++; updateCount(); checkWin(); })
   C5.addEventListener('click', function onclick() { 
      changeColor('B5'); changeColor('C4'); changeColor('C5'); changeColor('D5'); count++; updateCount(); checkWin(); })
   D1.addEventListener('click', function onclick() { 
      changeColor('C1'); changeColor('D1'); changeColor('D2'); changeColor('E1'); count++; updateCount(); checkWin(); })
   D2.addEventListener('click', function onclick() { 
      changeColor('C2'); changeColor('D1'); changeColor('D2'); changeColor('D3'); changeColor('E2'); count++; updateCount(); checkWin(); })
   D3.addEventListener('click', function onclick() { 
      changeColor('C3'); changeColor('D2'); changeColor('D3'); changeColor('D4'); changeColor('E3'); count++; updateCount(); checkWin(); })
   D4.addEventListener('click', function onclick() { 
      changeColor('C4'); changeColor('D3'); changeColor('D4'); changeColor('D5'); changeColor('E4'); count++; updateCount(); checkWin(); })
   D5.addEventListener('click', function onclick() { 
      changeColor('C5'); changeColor('D4'); changeColor('D5'); changeColor('E5'); count++; updateCount(); checkWin(); })
   E1.addEventListener('click', function onclick() { 
      changeColor('D1'); changeColor('E1'); changeColor('E2'); checkWin(); updateCount(); })
   E2.addEventListener('click', function onclick() { 
      changeColor('D2'); changeColor('E1'); changeColor('E2'); changeColor('E3'); count++; updateCount(); checkWin(); })
   E3.addEventListener('click', function onclick() { 
      changeColor('D3'); changeColor('E2'); changeColor('E3'); changeColor('E4'); count++; updateCount(); checkWin(); })
   E4.addEventListener('click', function onclick() { 
      changeColor('D4'); changeColor('E3'); changeColor('E4'); changeColor('E5'); count++; updateCount(); checkWin(); })
   E5.addEventListener('click', function onclick() { 
      changeColor('D5'); changeColor('E4'); changeColor('E5'); count++; updateCount(); checkWin(); })
   });
     // identify the cell class
    let cell = document.querySelectorAll('.cell');

     // initialize click counter
     var count = 0;
     var isOff = 0;
     var setup;
     let elementArray = Array("A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5");

     function newGame() 
        {
         cell.forEach(element => { element.style.backgroundColor = "darkgray"; });

         isOff = 25;

         for (let index = 0; index < elementArray.length; index++) 
            {
             setup = Math.floor(Math.random() * 2);
             if (setup == 1) 
               {
                document.addEventListener("DOMContentLoaded", function() {
                  document.getElementById(elementArray[index]).click();
                });
                
               }
            }
         count = 0;
         updateCount();
        }
    
     function changeColor(button) 
        {
         if (document.getElementById(button).style.backgroundColor == "lightyellow") 
            {
             document.getElementById(button).style.backgroundColor = "darkgray";
             isOff++;
            } 
         else 
            {
             document.getElementById(button).style.backgroundColor = "lightyellow";
             isOff--;
            }
        }

     function checkWin()
        {
         if (isOff == 25) 
            {
             window.alert("Congratulations! You Win!");
            }
        }

     function updateCount () 
        {
         // identify counter display
         document.addEventListener("DOMContentLoaded", function() {
         let countDis = document.getElementById('count');
         countDis.innerHTML = count;
         });
         
        }

 test("Ensures game initialization is not completion", () =>
   {
    expect(isOff).not.toBe(25);
   })

 
 test("Ensures game completion when all divs are 'turned off'", () =>
   {
    document.addEventListener("DOMContentLoaded", function() {
    for (let index = 0; index < elementArray.length; index++)
      {
       
       
       let countDis = document.getElementById('count');
       countDis.innerHTML = count;
       document.getElementById(elementArray[index]).style.backgroundColor = "darkgray";
      }

    document.getElementById('C3').click();

    expect(isOff).toBe(25);
    });
 });