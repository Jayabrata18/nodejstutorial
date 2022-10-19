// //sync
// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/second/first.txt', 'utf8');
// const second = readFileSync('./content/second/second.txt', 'utf8');
// console.log(first, second);

// writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`, {flag: 'a'} );


//async

const{ readFile, writeFile, writeFileSync } = require('fs')

readFile('./content/second/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile('./content/second/second.txt', 'utf8', (err, result) => {
         if (err) {
           console.log(err);
           return;
         }
         // console.log(result);
         const second = result;
         writeFile('./content/subcontent/test.txt',
         `Here is the result : ${first}, ${second}`,
         (err, result) => {
          if(err){
            console.log(err);
            return
          }
          console.log(result);
         });
    })
})
