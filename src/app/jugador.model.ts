export class Jugador {
  nombre: string = '';
  apellido: string = '';
  posicion: string = '';
  dorsal: number = 0;

  constructor(
    nombre: string,
    apellido: string,
    posicion: string,
    dorsal: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.posicion = posicion;
    this.dorsal = dorsal;
  }
}
