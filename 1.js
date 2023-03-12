const temper = Number.parseFloat(prompt('Введите градусы C°'));
const fahrenheit = Math.round(((9 / 5) * temper + 32) * 10) / 10;
alert(`Температура по Фаренгейту ${fahrenheit} ℉`);
