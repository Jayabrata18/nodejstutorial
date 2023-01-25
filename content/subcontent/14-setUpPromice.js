const { readFile, writeFile } = require("fs"); // you can use .promice so next promice i have not to use;
const util = require("util");
const readFilrPromice = util.promisify(readFile);
const writeFilePromice = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilrPromice("./content/second/first.txt", "utf8");
    const second = await readFilrPromice("./content/second/second.txt", "utf8");
    await writeFilePromice(
      "./content/result-mind-grenade.txt",
      `this is awosome  : ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {

// readFile(path, 'utf8', (err, data) =>{
//     if (err) {
//         return
//     } else {
//         resolve(data);
//     }
// })
// })

// }

// getText('./content/second/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));
