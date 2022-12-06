let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let button = document.getElementById('btn');
let actual = 0;

button.addEventListener('click', function () {
  console.log('Click');
  if (actual === 0) {
    first.style.backgroundColor = 'red';
    second.style.backgroundColor = 'gray';
    third.style.backgroundColor = 'gray';
    actual++;
  } else if (actual === 1) {
    first.style.backgroundColor = 'gray';
    second.style.backgroundColor = 'yellow';
    third.style.backgroundColor = 'gray';
    actual++;
  } else {
    first.style.backgroundColor = 'gray';
    second.style.backgroundColor = 'gray';
    third.style.backgroundColor = 'green';
    actual = 0;
  }
});
