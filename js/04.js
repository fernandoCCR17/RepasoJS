//Objetos
//Un objeto es una colección de propiedades y una propiedad es una asociación entre un nombre (clave) y valor

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

// console.log(producto);
// console.log(typeof producto);
// console.table(producto);

// console.log(producto.nombre)
// console.log(producto.precio)

//Destructuring
//Sirve para obtener las propiedades de un objeto y al mismo tiempo crear sus variables
// const {nombre} = producto;
// console.log(nombre)

//Object Literal Enhacement
const autenticado = true;
const usuario = "Juan";

//Sin object Literal
// const nuevoObjeto = {
//     autentica: autenticado,
//     user: usuario
// }
//Con object literal
const nuevoObjeto = {
    autenticado,
    usuario
}
//Si la propiedad como el valor se llaman exactamente igual, puedes pasar solamente 1

console.log(nuevoObjeto)