import { PermisosRecurso, Recursos, Roles, ROL_PERMISOS } from "./roles.config";

export const getPermisosRecurso = (nombrerol: string, recurso: Recursos): PermisosRecurso => {
    const rol = getRol(nombrerol);
    if (!rol) return new PermisosRecurso();
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
                        permisos.own.canCreate = row[2].reduce((acc: boolean, val) => acc = (val === 'create') ? true : acc, false);
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


export const getRol = (rolname: string) => {
    const name = rolname.toUpperCase();
    if (name == Roles.ADMIN) return Roles.ADMIN;
    if (name == Roles.EMPLEADO) return Roles.EMPLEADO;
    if (name == Roles.RRHH) return Roles.RRHH;
    if (name == Roles.SUPERVISOR) return Roles.SUPERVISOR;
}