"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstname = "pham";
let lastname = "tan";
if (firstname[0] !== firstname[0].toUpperCase()) {
    firstname = firstname[0].toUpperCase() + firstname.slice(1);
}
if (lastname[0] !== lastname[0].toUpperCase()) {
    lastname = lastname[0].toUpperCase() + lastname.slice(1);
}
let fullname = firstname + lastname;
console.log(fullname);
