export enum MODULE {
    MODULE0 = "module 0",
    MODULE1 = "module 1",
    MODULE2 = "module 2",
    MODULE3 = "module 3",
    MODULE4 = "module 4",
    MODULE5 = "module 5",
    MODULE6 = "module 6"
}

export type TClassroom = {
    id: string,
    name: string,
    studentId: string[],
    module: MODULE
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private studentsId: string[],
        private module: string
    ) {
        this.id = id
        this.name = name
        this.studentsId = studentsId
        this.module = module
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getStudentsId() {
        return this.studentsId
    }

    public getModule() {
        return this.module
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setStudentsId(newStudentsId: string[]) {
        this.studentsId = newStudentsId
    }

    public setModule(newModule: string) {
        this.module = newModule
    }
}