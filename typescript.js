// let a : string;
// let b : number;
// let c : boolean;
// let d : any;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// a = "Hello World";
// b = 22;
// c = true;
// d = 25;
// d = "ahmet";
// console.log(a, b, c, d);
//  ARRAYLER
var langs;
var numbers;
var digerArrayYazmaSekli;
var boolens = [true, false, true];
langs = ["PHP", "Java", "C++"];
numbers = [1, 2, 3, 4];
digerArrayYazmaSekli = [4, 5, 6];
console.log(langs);
console.log(numbers);
console.log(digerArrayYazmaSekli);
console.log(boolens);
// fonksiyon tanimlama
// function addNumbers(num1:number, num2:number = 100) : number{
//     if(typeof num2 === "undefined"){
//         return num1;
//     }
//     return num1 + num2 ;
// }
// console.log(addNumbers(1));
// ;
// function addNumbers(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// addNumbers(10, 20);
// class Person {
//   name: string;
//   age: number;
//   phone: string;
//   constructor(name: string, age: number, phone: string) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     console.log("Kisi olusturuldu...");
//   }
//   showInfos() {
//     console.log(`Isim: ${this.name} Yas: ${this.age} Phone: ${this.phone}`);
//   }
// }
// class Employee extends Person {
//   salary: number;
//   constructor(name: string, age: number, phone: string, salary: number) {
//     super(name, age, phone);
//     this.salary = salary;
//   }
//   showInfos() {
//       super.showInfos();
//       console.log("Maas: " + this.salary);
//   }
//   changeDepartment() {
//     console.log("Departman degistiriliyor...");
//   }
// }
// let employee1 = new Employee("Ahmet Yanik", 34, "123456", 5000);
// employee1.showInfos();
// employee1.changeDepartment();
// interface IDatabase {
//   add();
//   get();
//   delete();
//   update();
// }
// class MySql implements IDatabase {
//   add() {
//     console.log("MySql Add");
//   }
//   get() {
//     console.log("MySql Get");
//   }
//   delete() {
//     console.log("MySql Delete");
//   }
//   update() {
//     console.log("MySql Update");
//   }
// }
// let mySql = new MySql();
// mySql.add();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Get");
    };
    Database.prototype.add = function () {
        console.log("Database Add");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("MySql Delete");
    };
    MySql.prototype.update = function () {
        console.log("MySql Update");
    };
    return MySql;
}(Database));
var mySql = new MySql();
mySql.add();
