export type PosesionType = 'any' | 'own';
export type AccionType = 'read'|'create' | 'delete' | 'update';
export class PermisosRecurso {
    any: {
        canRead: boolean,
        canCreate: boolean,
        canDelete: boolean,
        canEdit: boolean,
    };
    own: {
        canRead: boolean,
        canCreate: boolean,
        canDelete: boolean,
        canEdit: boolean
    }
    constructor () {
        this.any = {
            canRead: false,
            canCreate: false,
            canDelete: false,
            canEdit: false
        };
        this.own = {
            canRead: false,
            canCreate: false,
            canDelete: false,
            canEdit: false
        };
    }
}

export const enum Roles {
    ADMIN = 'ADMIN',
    EMPLEADO = 'EMPLEADO',
    SUPERVISOR = 'SUPERVISOR',
    RRHH = 'RRHH'
}

export type PermisoType = [Recursos, PosesionType, AccionType[]];

export const enum Recursos {
    EMPLEADO = 'EMPLEADO',
    LOG_EMPLEADO = 'LOG EMPLEADO',
    PANEL_PERSONAL = 'PANEL PERSONAL', //EL DE LA BARRA LATERAL, LO VEN TODOS
    NOTIFICACION_PERSONAL = 'NOTIFICACION PERSONAL', // CRUD DE NOTIFICAICONES RRHH
    NOTIFICACION_SALA = 'NOTIFICACION_SALA', // EL DE CADA SALA
    ASIGNACION_SALA = 'ASIGNACION_SALA',
    ROL = 'ROL', // SOLO SE PODRA LEER 
    SALA = 'SALA', // CRUD
    USUARIO = 'USUARIO',
    INSTANCIA_SALA = 'INSTANCIA SALA', // TODOS A LA SALA QUE PERTENZCAN Y SUP A TODAS
}

interface RolPermisos {
    [Roles.ADMIN]: PermisoType[],
    [Roles.EMPLEADO]: PermisoType[],
    [Roles.SUPERVISOR]: PermisoType[],
    [Roles.RRHH]: PermisoType[],
}

export const ROL_PERMISOS: RolPermisos = {
    [Roles.ADMIN]: [
        [Recursos.EMPLEADO, 'any', ['read', 'delete', 'update','create']],
        [Recursos.LOG_EMPLEADO, 'any', ['read', 'delete', 'update','create']],
        [Recursos.PANEL_PERSONAL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.NOTIFICACION_SALA , 'any', ['read', 'delete', 'update','create']],
        [Recursos.ROL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update','create']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update', 'create']],
        [Recursos.ASIGNACION_SALA, 'any', ['read', 'delete', 'update','create']]
    ],
    [Roles.EMPLEADO]: [
        [Recursos.EMPLEADO, 'any', ['read']],
        [Recursos.LOG_EMPLEADO, 'any', ['read']],
        [Recursos.PANEL_PERSONAL, 'any', ['read']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', []],
        [Recursos.NOTIFICACION_SALA , 'any', ['read', 'delete', 'update','create']],
        [Recursos.ROL, 'any', ['read']],
        [Recursos.SALA, 'any', ['read']],
        [Recursos.USUARIO, 'any', ['read']],
        [Recursos.ASIGNACION_SALA, 'any', ['read']]
    ],
    [Roles.SUPERVISOR]: [
        [Recursos.EMPLEADO, 'any', ['read']],
        [Recursos.LOG_EMPLEADO, 'any', ['read']],
        [Recursos.PANEL_PERSONAL, 'any', ['read']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.NOTIFICACION_SALA , 'any', ['read', 'delete', 'update','create']],
        [Recursos.ROL, 'any', ['read']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update','create']],
        [Recursos.USUARIO, 'any', ['read']],
        [Recursos.ASIGNACION_SALA, 'any', ['read', 'delete', 'update','create']]
    ],
    [Roles.RRHH]: [
        [Recursos.EMPLEADO, 'any', ['read', 'delete', 'update','create']],
        [Recursos.LOG_EMPLEADO, 'any', ['read','update','create']],
        [Recursos.PANEL_PERSONAL, 'any', ['read']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.NOTIFICACION_SALA , 'any', ['read', 'delete', 'update']],
        [Recursos.ROL, 'any', ['read']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update','create']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update','create']],
        [Recursos.ASIGNACION_SALA, 'any', ['read', 'delete', 'update','create']]
    ],
}
