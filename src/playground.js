const { ref } = require("vue");

let a = ref(1);
let b = ref(2);

let c = ref(a.value + b.value);
console.log(c.value);

a.value = 10;
console.log(c.value);
