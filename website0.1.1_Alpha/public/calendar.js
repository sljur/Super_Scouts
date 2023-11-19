const date = new Date();

const renderCalendar = () => 
{
    
date.setDate(1);

const monthDays = document.querySelector('.days'); 
const lastDay = 
new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

const prevLastDay = 
new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = 
new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector('.date h1').innerHTML = 
months[date.getMonth()];

document.querySelector('.date p').innerHTML =  
new Date().toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--)
{
   days += `<div class="prev-date">${prevLastDay - x + 1}</div>`; 
    
}

for( let index = 1; index <= lastDay; index++ )
{
  if(index === new Date().getDate() && date.getMonth() === 
     new Date().getMonth())
  {
    days += `<div class="today">${index}</div>`;
    
  }
  else if(index === new Date().getDate() && date.getMonth() ===
  new Date().getMonth())
  {
    println( candidate ); 
  }
  else
  {
    days += `<div>${index}</div>`;
  }
}

for( let jindex= 1; jindex <= nextDays; jindex++ )
{
  days += `<div class="next-date">${jindex}</div>`;
} 

monthDays.innerHTML = days; 
  
}

document.querySelector('.prev').addEventListener('click',() =>
{
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click',() =>
{
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar(); 

//////MODAL STUFF HERE/////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var openModal = document.getElementById("openMyModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
openModal.onclick = function(event) 
{
  modal.style.display = "block";
 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//For adding and removing items from a list
function addEvent() 
{
    var eventToAdd = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    eventToAdd.appendChild(li);
}

// Creating a function to remove item from list
function removeEvent() 
{
 
    // Declaring a variable to get select element
    var eventToRemove = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    eventToRemove.removeChild(item);
}
