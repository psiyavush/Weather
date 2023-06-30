export const convertWindDirection = (degrees) => {
    let direction = '';
    if (degrees >= 349 || degrees < 11) {
      direction = 'С';
    } else if (degrees >= 11 && degrees < 34) {
      direction = 'СВ';
    } else if (degrees >= 34 && degrees < 56) {
      direction = 'В';
    } else if (degrees >= 56 && degrees < 79) {
      direction = 'ЮВ';
    } else if (degrees >= 79 && degrees < 101) {
      direction = 'Ю';
    } else if (degrees >= 101 && degrees < 124) {
      direction = 'ЮВ';
    } else if (degrees >= 124 && degrees < 146) {
      direction = 'ЮВ';
    } else if (degrees >= 146 && degrees < 169) {
      direction = 'ЮЗ';
    } else if (degrees >= 169 && degrees < 191) {
      direction = 'Ю';
    } else if (degrees >= 191 && degrees < 214) {
      direction = 'ЮЗ';
    } else if (degrees >= 214 && degrees < 236) {
      direction = 'ЮЗ';
    } else if (degrees >= 236 && degrees < 259) {
      direction = 'З';
    } else if (degrees >= 259 && degrees < 281) {
      direction = 'СЗ';
    } else if (degrees >= 281 && degrees < 304) {
      direction = 'СЗ';
    } else if (degrees >= 304 && degrees < 326) {
      direction = 'СЗ';
    } else if (degrees >= 326 && degrees < 349) {
      direction = 'СЗ';
    }
  
    let arrow = '';
  
    switch (direction) {
      case 'С':
        arrow = '\u2191'; // Север
        break;
      case 'СВ':
        arrow = '\u2197'; // Северо-восток
        break;
      case 'В':
        arrow = '\u2192'; // Восток
        break;
      case 'ЮВ':
        arrow = '\u2198'; // Юго-восток
        break;
      case 'Ю':
        arrow = '\u2193'; // Юг
        break;
      case 'ЮЗ':
        arrow = '\u2199'; // Юго-запад
        break;
      case 'З':
        arrow = '\u2190'; // Запад
        break;
      case 'СЗ':
        arrow = '\u2196'; // Северо-запад
        break;
      default:
        arrow = '';
    }
  
    return arrow + ' ' + direction;
}


export const dateTime = (date) => {
  const hour = date.split(' ')[1].substring(0, 2);

  let outputString = "";

  if (hour === "06") {
    outputString = "Утро";
  } else if (hour === "12") {
    outputString = "День";
  } else if (hour === "18") {
    outputString = "Вечер";
  }

  return outputString;
}

export const dateTime2 = (date) => {
  const datePart = date.split(' ')[0]
    // Разбиваем дату по дефисам
  const [year, month, day] = datePart.split('-');
  // Формируем новую строку в нужном формате
  const outputString = `${day}-${month}-${year}`;

  return outputString;
}

export const imgUrl =(item)=>{
  const IconUrl = "https://openweathermap.org/img/w/" + item + ".png"

  return IconUrl
}