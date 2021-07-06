const entities = [ //информация о проектах
    {
        city: 'Rostov-on-Don\n LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
        img: 'images/Rostov-on-Don-Admiral.jpg'
    },
    {
        city: 'Sochi\n Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request',
        img: 'images/Sochi-Thieves.jpg'
    },
    {
        city: 'Rostov-on-Don\n Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request',
        img: 'images/Rostov-on-Don-Patriotic.jpg'
    }
]

const city = document.querySelector('.text-city');
const apartmentArea = document.querySelector('.text-apartment-area');
const repairTime = document.querySelector('.text-repair-time');
const repairCost = document.querySelector('.text-repair-cost');

const img = document.querySelector('.img-2');

let point;
let projectsNavigationItem;

const setEntity = (index, previousIndex) => { //функция для изменения содержимого
    city.innerText = entities[index].city;
    apartmentArea.innerText = entities[index].apartmentArea;
    repairTime.innerText = entities[index].repairTime;
    repairCost.innerText = entities[index].repairCost;

    img.src = entities[index].img;

    point = document.querySelector(`.point${previousIndex+1}`);
    point.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

    point = document.querySelector(`.point${index+1}`);
    point.style.backgroundColor = "white";

    projectsNavigationItem = document.querySelector(`.projects-navigation__item${previousIndex+1}`);
    projectsNavigationItem.style.color = "rgba(255, 255, 255, .3)";
    projectsNavigationItem.style.borderBottom = "1px solid #131313";

    projectsNavigationItem = document.querySelector(`.projects-navigation__item${index+1}`);
    projectsNavigationItem.style.color = "#E3B873";
    projectsNavigationItem.style.borderBottom = "1px solid #E3B873";
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

const point1 = document.querySelector(`.point1`);
const point2 = document.querySelector(`.point2`);
const point3 = document.querySelector(`.point3`);

const projectsNavigationItem1 = document.querySelector(`.projects-navigation__item1`);
const projectsNavigationItem2 = document.querySelector(`.projects-navigation__item2`);
const projectsNavigationItem3 = document.querySelector(`.projects-navigation__item3`);
// управляющие элементы
prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        setEntity(2, currentIndex);
        currentIndex = 2;
    } else {
        setEntity(currentIndex - 1, currentIndex);
        currentIndex -= 1;
    }
});

next.addEventListener('click', () => {
    if (currentIndex == 2) {
        setEntity(0, currentIndex);
        currentIndex = 0;
    } else {
        setEntity(currentIndex + 1, currentIndex);
        currentIndex += 1;
    }
});

point1.addEventListener('click', () => {
    setEntity(0, currentIndex);
    currentIndex = 0;
});

point2.addEventListener('click', () => {
    setEntity(1, currentIndex);
    currentIndex = 1;
});

point3.addEventListener('click', () => {
    setEntity(2, currentIndex);
    currentIndex = 2;
});

projectsNavigationItem1.addEventListener('click', () => {
    setEntity(0, currentIndex);
    currentIndex = 0;
});

projectsNavigationItem2.addEventListener('click', () => {
    setEntity(1, currentIndex);
    currentIndex = 1;
});

projectsNavigationItem3.addEventListener('click', () => {
    setEntity(2, currentIndex);
    currentIndex = 2;
});