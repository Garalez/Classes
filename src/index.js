import './style.css';
import {PassangerCar, Truck, Pickup} from './modules/cars';
import {Station} from './modules/station';


const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
  pickup: [
    ['dodge', 'RAM', 400],
    ['Mitsubishi', 'Outlander', 300],
    ['Chevrolet', 'Colorado', 450],
    ['Chevrolet', 'Silverado', 650],
    ['Ford', 'Ranger', 700],
    ['GMC', 'Canyon', 700],
    ['GMC', 'Hummer', 540],
  ],
};

const getTestCar = () => {
  const carArray = Object.keys(testArray);
  const carIndex = Math.floor(Math.random() * carArray.length);

  const randomKey = carArray[carIndex];
  const randomValue = testArray[randomKey];
  const randomCar = Math.floor(Math.random() * randomValue.length);

  if (randomKey === 'passangerCar') {
    return new PassangerCar(...randomValue[randomCar]);
  } else if (randomKey === 'truck') {
    return new Truck(...randomValue[randomCar]);
  } else if (randomKey === 'pickup') {
    return new Pickup(...randomValue[randomCar]);
  }
};

const station = new Station([
  {
    type: 'petrol',
  },
  {
    type: 'diesel',
    speed: 100,
  },
  {
    type: 'gas',
    speed: 100,
  },
], '.app');


open.addEventListener('click', () => {
  station.render();
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});
