const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("responce", (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
});
customEmitter.on("responce", () => {
  console.log(`some other logic here`);
});
customEmitter.emit("responce", "john", 34);

customEmitter.emit("responce");
