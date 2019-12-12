let name = ['Василий', 'Сергей', 'Антон', 'Ростислав', 'Александр', 'Виктор', 'Альберт', 'Олег', 'Юрий', 'Леонид' ];

console.log('Через for');

for (let i = 0; i < name.length; i++) {
  console.log('[' + i + ']' + name[i]);
}

console.log('Через while');

let i = 0;

while ( i < name.length) {

  console.log('[' + i + ']' + name[i]);
  i++;
}


console.log('Через console.log')

console.log('[' + 0 + ']' + name[0]);
console.log('[' + 1 + ']' + name[1]);
console.log('[' + 2 + ']' + name[2]);
console.log('[' + 3 + ']' + name[3]);
console.log('[' + 4 + ']' + name[4]);
console.log('[' + 5 + ']' + name[5]);
console.log('[' + 6 + ']' + name[6]);
console.log('[' + 7 + ']' + name[7]);
console.log('[' + 8 + ']' + name[8]);
console.log('[' + 9 + ']' + name[9]);

