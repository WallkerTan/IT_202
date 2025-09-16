export {};

let firstname: string = "pham";
let lastname: string = "tan";

if (firstname[0] !== firstname[0].toUpperCase()) {
    firstname = firstname[0].toUpperCase()+ firstname.slice(1);
}
if (lastname[0] !== lastname[0].toUpperCase()) {
    lastname = lastname[0].toUpperCase()+ lastname.slice(1);
}
let fullname = firstname+lastname;
console.log(fullname);
