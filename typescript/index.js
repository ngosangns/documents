"use strict";
class Employee {
    constructor(name, dept, salary) {
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.subordinates = new Array();
    }
    add(e) {
        this.subordinates.push(e);
    }
    remove(e) {
        this.subordinates.splice(this.subordinates.indexOf(e), 1);
    }
    getChildren() {
        return this.subordinates;
    }
    toString() {
        return (`Employee :[ Name : ${this.name}, dept : ${this.dept}, salary : ${this.salary} ]`);
    }
}
let CEO = new Employee("John", "CEO", 30000);
let headSales = new Employee("Robert", "Head Sales", 20000);
let headMarketing = new Employee("Michel", "Head Marketing", 20000);
let clerk1 = new Employee("Laura", "Marketing", 10000);
let clerk2 = new Employee("Bob", "Marketing", 10000);
let salesExecutive1 = new Employee("Richard", "Sales", 10000);
let salesExecutive2 = new Employee("Rob", "Sales", 10000);
CEO.add(headSales);
CEO.add(headMarketing);
headSales.add(salesExecutive1);
headSales.add(salesExecutive2);
headMarketing.add(clerk1);
headMarketing.add(clerk2);
//print all employees of the organization
console.log(CEO);
for (let headEmployee of CEO.getChildren()) {
    console.log(headEmployee);
    for (let employee of headEmployee.getChildren())
        console.log(employee);
}
