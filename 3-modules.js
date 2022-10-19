// CommonJs , every file is module by default
// Modules - encapsulated code (only share minimum)
const joy = 'joy';
const aa = 'aa';
const sayHi = (name) => {
    console.log(`hello there ${name}`);
}
sayHi('bb');
sayHi(aa);
sayHi(joy);