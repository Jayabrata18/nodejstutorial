const {writeFileSync}=require('fs')

for (let i=0; i<1000000; i++){
    writeFileSync('./content/big.txt', `Hello world! ${i}\n`, {flag: 'a'});
}