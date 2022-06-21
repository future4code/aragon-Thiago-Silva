const converteTemperaturaCelsius = (temperatura, escala) => {
  const temperaturaFahrenheit = (temperatura * 9) / 5 + 32;
  if (escala === "F") {
    return `${temperatura} ºC é equivalente a ${temperaturaFahrenheit} ºF (Fahrenheit)`;
  } else if (escala === "K") {
    const temperaturaKelvin = temperatura + 273.15;
    return `${temperatura} ºC é equivalente a ${temperaturaKelvin} ºK (Kelvin)`;
  } else {
    return `Erro. Parâmetro inválido (${escala})`
  }
};

console.log(converteTemperaturaCelsius(30, "F"))
console.log(converteTemperaturaCelsius(30, "K"))
console.log(converteTemperaturaCelsius("trinta", "E"))

