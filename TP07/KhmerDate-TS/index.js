const { KhmerDate } = require('./lib')

const kd = new KhmerDate(new Date('2022-03-02'))

console.log(kd.printDate());

// console.log(kd.getDate())