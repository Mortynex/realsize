const ppiInput = document.querySelector('#ppiInput');
const widthInput = document.querySelector('#widthInput');
const heightInput = document.querySelector('#heightInput');

const block = document.querySelector('#object');

let ppi = localStorage.getItem('ppi') ?? 96
ppiInput.value = ppi;

sizeChange()

widthInput.addEventListener("input", sizeChange)
heightInput.addEventListener("input", sizeChange)

function sizeChange(e){
    setSize(
        getSize(widthInput),
        getSize(heightInput),
    )
}

function setSize(width, height){
    console.log({width, height})
    block.style.width = width + 'px';
    block.style.height = height + 'px';
}

function getSize({value}){
    const numberValue = parseFloat(value);
    return(numberValue / 2.54 ) * ppi;
}

ppiInput.addEventListener("input", () => {
    ppi = Number(ppiInput.value);

    localStorage.setItem('ppi', ppi)

    sizeChange();
})

import interact from 
'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
    modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
        })
      ],
    autoScroll: true,
    inertia: true,
    listeners: {
    move ({dx, dy, target}) {
        position.x += dx
        position.y += dy

      target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
  }}
})