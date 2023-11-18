const date = new Date();

const renderCalendar = () =>
{
    date.setDate(1);

    let curMonth = date.getMonth();
    let curFullYear = date.getFullYear();
    
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(curFullYear, curMonth + 1, 0).getDate();
    const prevLastDay = new Date(curFullYear, curMonth, 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(curFullYear, curMonth + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months =
    [
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

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for( let x = firstDayIndex; x > 0; x-- )
    {
	days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for( let index = 1; index <= lastDay; index++ )
    {
	if(index === new Date().getDate() &&
	   date.getMonth() === new Date().getMonth())
	{
	    days += `<div class="today">${index}</div>`;
	}
	else
	{
	    days += `<div>${index}</div>`;
	}
    }

    for( let index = 1; index <= nextDays; index++ )
    {
	days += `<div class="next-date">${index}</div>`;
    }

    monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();