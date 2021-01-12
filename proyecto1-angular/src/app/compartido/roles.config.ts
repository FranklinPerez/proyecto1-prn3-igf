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
    PANEL_NOTIFICACION = 'PANEL NOTIFICACION', //EL DE LA BARRA LATERAL, LO VEN TODOS
    NOTIFICACION_PERSONAL = 'NOTIFICACION PERSONAL', // CRUD DE NOTIFICAICONES RRHH
    PANEL = 'PANEL', // EL DE CADA SALA
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
        [Recursos.PANEL_NOTIFICACION, 'any', ['read', 'delete', 'update','create']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.PANEL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.ROL, 'any', ['read', 'delete', 'update','create']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update','create']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update','create']]
    ],
    [Roles.EMPLEADO]: [
        [Recursos.EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.LOG_EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL_NOTIFICACION, 'any', ['read', 'delete', 'update']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL, 'any', ['read', 'delete', 'update']],
        [Recursos.ROL, 'any', ['read', 'delete', 'update']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update']]
    ],
    [Roles.SUPERVISOR]: [
        [Recursos.EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.LOG_EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL_NOTIFICACION, 'any', ['read', 'delete', 'update']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL, 'any', ['read', 'delete', 'update']],
        [Recursos.ROL, 'any', ['read', 'delete', 'update']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update']]
    ],
    [Roles.RRHH]: [
        [Recursos.EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.LOG_EMPLEADO, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL_NOTIFICACION, 'any', ['read', 'delete', 'update']],
        [Recursos.NOTIFICACION_PERSONAL, 'any', ['read', 'delete', 'update']],
        [Recursos.PANEL, 'any', ['read', 'delete', 'update']],
        [Recursos.ROL, 'any', ['read', 'delete', 'update']],
        [Recursos.SALA, 'any', ['read', 'delete', 'update']],
        [Recursos.USUARIO, 'any', ['read', 'delete', 'update']]
    ],
}

export const getPermisosRecurso = (rol: Roles, recurso: Recursos): PermisosRecurso => {
    const recursoPermisos = ROL_PERMISOS[rol].filter((row) => row[0] === recurso);
    if (recursoPermisos) {
        if (recursoPermisos.length === 2) {
            const permisos = new PermisosRecurso();
            recursoPermisos.forEach((row) => {
                switch (row[1]) {
                    case 'any':
                        permisos.any.canRead = row[2].reduce((acc: boolean, val) => acc = (val === 'read') ? true : acc, false);
                        permisos.any.canCreate = row[2].reduce((acc: boolean, val) => acc = (val === 'create') ? true : acc, false);
                        permisos.any.canDelete = row[2].reduce((acc: boolean, val) => acc = val === 'delete' ? true : acc, false);
                        permisos.any.canEdit = row[2].reduce((acc: boolean, val) => acc = val === 'update' ? true : acc, false);
                        break;
                    case 'own':
                        permisos.own.canRead = row[2].reduce((acc: boolean, val) => acc = (val === 'read') ? true : acc, false);
                        permisos.own.canCreate= row[2].reduce((acc: boolean, val) => acc = (val === 'create') ? true : acc, false);
                        permisos.own.canDelete = row[2].reduce((acc: boolean, val) => acc = val === 'delete' ? true : acc, false);
                        permisos.own.canEdit = row[2].reduce((acc: boolean, val) => acc = val === 'update' ? true : acc, false);
                        break;
                    default:
                        break;
                }
            });
            return permisos;
        } else {
            const permisos = new PermisosRecurso();
            const row = recursoPermisos[0];
            switch (row[1]) {
                case 'any':
                    permisos.any.canRead = row[2].reduce((acc: boolean, val) => acc = (val === 'read') ? true : acc, false);
                    permisos.any.canCreate = row[2].reduce((acc: boolean, val) => acc = (val === 'create') ? true : acc, false);
                    permisos.any.canDelete = row[2].reduce((acc: boolean, val) => acc = val === 'delete' ? true : acc, false);
                    permisos.any.canEdit = row[2].reduce((acc: boolean, val) => acc = val === 'update' ? true : acc, false);
                    break;
                case 'own':
                    permisos.own.canRead = row[2].reduce((acc: boolean, val) => acc = (val === 'read') ? true : acc, false);
                    permisos.own.canCreate = row[2].reduce((acc: boolean, val) => acc = (val === 'create') ? true : acc, false);
                    permisos.own.canDelete = row[2].reduce((acc: boolean, val) => acc = val === 'delete' ? true : acc, false);
                    permisos.own.canEdit = row[2].reduce((acc: boolean, val) => acc = val === 'update' ? true : acc, false);
                    break;
                default:
                    break;
            }
            return permisos;
        }

    }
    return new PermisosRecurso();
}
