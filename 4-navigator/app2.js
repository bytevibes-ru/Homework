const positionLat = 43.008619; // текущее положение
const positionLong = 47.449559; // текущее положение

const addressLat = 42.983607; // адрес назначения
const addressLong = 47.469386; // адрес назначения

const res = ((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2) ** 0.5;
console.log(res);













