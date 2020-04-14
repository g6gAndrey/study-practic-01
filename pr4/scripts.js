function today()
{
    data = new Date();
    year = data.getFullYear();
    month = data.getMonth();
    date = data.getDate();
    day = data.getDay();
    console.log(day);
}

today();