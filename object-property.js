const students = [
    { id: 14, name: "jorina"},
    { id: 24, name: "morjina"},
    { id: 34, name: "sokhina"},
    { id: 75, name: "moinar ma"}
];

const names = students.map(n => n.name);
const ids = students.map(i => i.id);
const bigger = students.filter(f => f.id > 30)
const firstBigger = students.find(b => b.id > 30)
console.log(firstBigger);