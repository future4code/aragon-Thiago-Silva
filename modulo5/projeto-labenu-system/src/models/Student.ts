export type TStudent = {
    id: string,
    name: string,
    email: string,
    birthdate: string,
    classsroomId: null | string
    hobbiesId: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: string,
        private classroomId: null | string,
        private hobbiesId: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.classroomId = classroomId
        this.hobbiesId = hobbiesId
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }
    
    public getBirthdate() {
        return this.birthdate
    }

    public getClassroomId() {
        return this.classroomId
    }

    public getHobbiesId() {
        return this.hobbiesId
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setBirthdate(newBirthdate: string) {
        this.birthdate = newBirthdate
    }

    public setClassroomId(newClassroomId: string) {
        this.classroomId = newClassroomId
    }

    public setHobbiesId(newHobbiesId: string) {
        this.hobbiesId = newHobbiesId
    }
}