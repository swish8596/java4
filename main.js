
var time = parseInt(prompt("Введите время в часах (от 0 до 23):"));

switch (true) {
    case time >= 0 && time <= 6:
        alert(`${time} ${time === 1 ? "час" : (time >= 2 && time <= 4 ? "часа" : "часов")} ночи`);
        break;
    case time >= 7 && time <= 10:
        alert(`${time} ${time === 1 ? "час" : (time >= 2 && time <= 4 ? "часа" : "часов")} утра`);
        break;
    case time >= 11 && time <= 17:
        alert(`${time - 12} ${time - 12 === 1 ? "час" : (time - 12 >= 2 && time - 12 <= 4 ? "часа" : "часов")} дня`);
        break;
    case time >= 18 && time <= 23:
        alert(`${time - 12} ${time - 12 === 1 ? "час" : (time - 12 >= 2 && time - 12 <= 4 ? "часа" : "часов")} вечера`);
        break;
    default:
        alert("Введено некорректное значение. Введите число от 0 до 23.");
}
