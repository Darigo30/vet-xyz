//Se invocan los ID
const nombrePropietario = document.getElementById("nombrePropietario");
const tlfPropietario = document.getElementById("tlfPropietario");
const direccionPropietario = document.getElementById("direccionPropietario");
const nombreMascota = document.getElementById("nombreMascota");
const tipoMascota = document.getElementById("tipoMascota");
const motivoConsulta = document.getElementById("motivoConsulta");


const botonAgregar = document.getElementById("botonAgregar");

//Se genera clase padre Propietario
class Propietario {
    constructor(nombre, direccion, telefono) {
      this._nombre = nombre;
      this._direccion = direccion;
      this._telefono = telefono;
    }
    datosPropietario() {
    return tabla.innerHTML += `
    <tr>
      <td>${this._nombre}</td>
      <td>${this._telefono}</td>
      <td>${this._direccion}</td>
      <td>${this._nombreAnimal}</td>
      <td>${this._tipo}</td>
      <td>${this._enfermedad}</td>
    </tr>
    `;

    }
  }
//Clase Animal que viene de propietario
  class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
      super(nombre, direccion, telefono);
      this._tipo = tipo;
    }
    get tipo() {
      return `“El tipo de animal es un: ${this._tipo}`;
    }
  }
//Clse mascota que viene de Animal
  class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
      super(nombre, direccion, telefono, tipo);
      this._nombreAnimal = nombreAnimal;
      this._enfermedad = enfermedad;
    }
    get nombreAnimal() {
      return `“El tipo de animal es un: ${this._nombreAnimal}`;
    }
    set setNombreAnimal(v) {
      this._nombreAnimal = v;
    }
    get enfermedad() {
      return `“El tipo de animal es un: ${this._enfermedad}`;

    }
    set setEnfermedad(v) {
      this._enfermedad = v;
    }
  }
//Botón escucha para imprimir los datos
botonAgregar.addEventListener("click", () => {

//Normalizamos los campos
const nombreNormalizado = nombrePropietario.value;
const direccProNormalizado = direccionPropietario.value;
const tlefNomr = Number(tlfPropietario.value);
const nombMacoPer = nombreMascota.value;
const motiNorma = motivoConsulta.value;
if(!nombreNormalizado||!direccProNormalizado||!tlefNomr||!nombMacoPer||!motiNorma){
    alert("Por favor llene todos los campos");
    return;
}
  const tipoAnimal = tipoMascota.value;
  if (tipoAnimal === "perro") {
    const perrito = new Mascota(
        nombrePropietario.value,
        direccionPropietario.value,
        tlfPropietario.value,
        tipoAnimal,
        nombreMascota.value,
        motivoConsulta.value
    );
    tabla.innerHTML = perrito.datosPropietario();
  } else if (tipoAnimal === "gato") {
    const gatito = new Mascota(
        nombrePropietario.value,
        direccionPropietario.value,
        tlfPropietario.value,
        tipoAnimal,
        nombreMascota.value,
        motivoConsulta.value
    );
    tabla.innerHTML = gatito.datosPropietario();
  } else if (tipoAnimal === "conejo") {
    const conejito = new Mascota(
        nombrePropietario.value,
        direccionPropietario.value,
        tlfPropietario.value,
        tipoAnimal,
        nombreMascota.value,
        motivoConsulta.value
    );
    tabla.innerHTML = conejito.datosPropietario();
  }
});

