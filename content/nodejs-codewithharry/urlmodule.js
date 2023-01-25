// import url from 'url';
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', ()=> {
    console.log('please turn off motor');
    setTimeout(()=>{
        console.log('please turn off mototr! Its a gentle reminder')
    }, 3000 );
});
myEmitter.emit('WaterFull');

console.log("please turn");
