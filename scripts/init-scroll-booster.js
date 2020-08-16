//ScrollBooster
//querySelector
const nav = document.querySelector('nav');
const ul = nav.querySelector('ul');

//createElement
const container = document.createElement('div');
const li = document.createElement('li');
const liText = document.createTextNode('sbli');

//modify elements
container.classList.add('scroll-booster');

//appendChild
li.appendChild(liText);
ul.appendChild(li);
container.appendChild(ul);
nav.appendChild(container);

//initialize the ScrollBooster object
new ScrollBooster({
  viewport: document.querySelector('nav .scroll-booster'),
  content: document.querySelector('nav ul'),
  direction: 'horizontal',
  scrollMode: 'transform',
  bounce: false,
});
