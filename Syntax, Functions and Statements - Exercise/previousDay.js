function data(year, month, day) {

    const nextDay = (new Date(year, month - 1, day - 1));
    const newYear = nextDay.getFullYear();
    const newMonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}
data(2016, 9, 30);
data(2015, 5, 10);
data(2016, 10, 1)
