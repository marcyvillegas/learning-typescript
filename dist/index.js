"use strict";
let sales = 123324;
let course = "Typescript";
let isPublished = true;
function render(document) {
    console.log(document);
}
let number = [1, 2, 4];
let letters = [];
letters[0] = "This is a string";
let user = [17, "Marcy"];
let mySize = 3;
function calculateTax(income = 5000, job) {
    if (income > 1000 && job === "decent job")
        return "nice";
    return "oh noh";
}
calculateTax(10000, "decent job");
let employee = {
    id: 17,
    name: "Marcy",
    retire: (date) => console.log(date)
};
let typeAliasEmployee = {
    id: 17,
    name: "Marcy",
    retire: (date) => console.log(date)
};
function getWeight(kg) {
    if (typeof kg === 'number')
        return kg * 1;
    return parseInt(kg);
}
//# sourceMappingURL=index.js.map