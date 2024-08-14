              
................................... 
function printOwnProperties(obj) {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// Test the function
let obj = { a: 1, b: 2, c: 3 };
printOwnProperties(obj);

....................................

function hasProperty(propertyName, obj) {
  return Object.prototype.hasOwnProperty.call(obj, propertyName);
}

// Test the function
let obj = { a: 1, b: 2, c: 3 };
console.log(hasProperty('a', obj)); // true
console.log(hasProperty('d', obj)); // false

.....................................

function createEmptyObject() {
  return Object.create(null);
}

// Test the function
let obj = createEmptyObject();
console.log(obj); // {}

..........................................

// Родительская функция
function ElectricalAppliance(power) {
  this.power = power;
  this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
  this.isPlugged = true;
  console.log(`Прибор включен в розетку`);
};

ElectricalAppliance.prototype.unplug = function() {
  this.isPlugged = false;
  console.log(`Прибор выключен из розетки`);
};

// Делегирующая связь [[Prototype]] для колонок
function Speakers(power, volume) {
  ElectricalAppliance.call(this, power);
  this.volume = volume;
}

Speakers.prototype = Object.create(ElectricalAppliance.prototype);
Speakers.prototype.constructor = Speakers;

Speakers.prototype.changeVolume = function(newVolume) {
  this.volume = newVolume;
  console.log(`Громкость колонок изменена на ${newVolume}`);
};

// Делегирующая связь [[Prototype]] для принтера
function Printer(power, printQuality) {
  ElectricalAppliance.call(this, power);
  this.printQuality = printQuality;
}

Printer.prototype = Object.create(ElectricalAppliance.prototype);
Printer.prototype.constructor = Printer;

Printer.prototype.changePrintQuality = function(newPrintQuality) {
  this.printQuality = newPrintQuality;
  console.log(`Качество печати изменено на ${newPrintQuality}`);
};

// Создание экземпляров приборов
const speakers = new Speakers(20, 50);
const printer = new Printer(65, 'high');

// Включение приборов в розетку
speakers.plugIn();
printer.plugIn();

// Изменение свойств приборов
speakers.changeVolume(75);
printer.changePrintQuality('low');

// Выключение приборов из розетки
speakers.unplug();
printer.unplug();

// Подсчет потребляемой мощности
const totalPower = speakers.power + printer.power;
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);

.................................................................

class ElectricalAppliance {
  constructor(power) {
    this.power = power;
    this.isPlugged = false;
  }

  plugIn() {
    this.isPlugged = true;
    console.log(`Прибор включен в розетку`);
  }

  unplug() {
    this.isPlugged = false;
    console.log(`Прибор выключен из розетки`);
  }
}

class Speakers extends ElectricalAppliance {
  constructor(power, volume) {
    super(power);
    this.volume = volume;
  }

  changeVolume(newVolume) {
    this.volume = newVolume;
    console.log(`Громкость колонок изменена на ${newVolume}`);
  }
}

class Printer extends ElectricalAppliance {
  constructor(power, printQuality) {
    super(power);
    this.printQuality = printQuality;
  }

  changePrintQuality(newPrintQuality) {
    this.printQuality = newPrintQuality;
    console.log(`Качество печати изменено на ${newPrintQuality}`);
  }
}

const speakers = new Speakers(20, 50);
const printer = new Printer(65, 'high');

speakers.plugIn();
printer.plugIn();

speakers.changeVolume(75);
printer.changePrintQuality('low');

speakers.unplug();
printer.unplug();

const totalPower = speakers.power + printer.power;
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);
		
