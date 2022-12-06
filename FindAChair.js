function meeting(roomList, numberOfChairs) {
  let arrAnswer = [];
  if (numberOfChairs < 1) {
    return 'Game on!';
  }

  roomList.forEach(function (room, index) {
    if (numberOfChairs > 0) {
      if (room[1] - room[0].length > 0) {
        arrAnswer.push(room[1] - room[0].length);
        numberOfChairs -= room[1] - room[0].length;
      } else {
        arrAnswer.push(0);
      }
    }
  });
  if (numberOfChairs <= 0) {
    return arrAnswer;
  } else {
    return 'Not enough!';
  }
}

let example1 = [
  ['XXX', 3],
  ['XXXXX', 6],
  ['XXXXXX', 9],
];

let example2 = [
  ['XXX', 1],
  ['XXXXXX', 6],
  ['X', 2],
  ['XXXXXX', 8],
  ['X', 3],
  ['XXX', 1],
];

let example3 = [
  ['XX', 2],
  ['XXXX', 6],
  ['XXXXX', 4],
];

let example4 = [
  ['XX', 2],
  ['XXXX', 6],
  ['XXXXX', 4],
];

console.log(meeting(example1, 4));
console.log(meeting(example2, 5));
console.log(meeting(example3, 0));
console.log(meeting(example4, 4));
