// const box = document.getElementById('box');
// let isDragging = false;
// let initialX;
// let initialY;

// document.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   initialX = event.clientX;
//   initialY = event.clientY;
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// document.getElementById('box').addEventListener('mousemove', (event) => {
//   if (isDragging === true) {
//     const currentX = event.clientX;
//     const currentY = event.clientY;
//     const xOffset = currentX - initialX;
//     const yOffset = currentY - initialY;
//     document.getElementById('box').style.top = document.getElementById('box').offsetTop + yOffset + 'px';
//     document.getElementById('box').style.left = document.getElementById('box').offsetLeft + xOffset + 'px';
//     initialX = currentX;
//     initialY = currentY;
//   }
// });

const box = document.getElementById('box');
let isDragging = false;
let initialX;
let initialY;

document.getElementById('box').addEventListener('mousedown', (event) => {
  isDragging = true;
  initialX = event.clientX;
  initialY = event.clientY;
});

document.getElementById('box').addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging === true) {
    const currentX = event.clientX;
    const currentY = event.clientY;
    const xOffset = currentX - initialX;
    const yOffset = currentY - initialY;
    box.style.top = box.offsetTop + yOffset + 'px';
    box.style.left = box.offsetLeft + xOffset + 'px';
    initialX = currentX;
    initialY = currentY;
  }
});
