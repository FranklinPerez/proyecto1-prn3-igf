export class Sala {
    id: number;
    numeroSala: number;//Agregado porque en el sala.component.html no se guardaba en ningún lugar.

    asunto: string;//Agregado para la última asignación.
    tiempo_captura: number;//Agregado para la última asignación.
    tiempoTrabajo: number;//Agregado para la última asignación.
    supervisor_id: number;

    constructor () { }
}
