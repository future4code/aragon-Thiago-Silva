export interface IStudentDB {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classroom_id: string | null
}
export interface IHobbiesDB {
    id: string,
    title: string
}
export interface IStudentsHobbiesDB {
    student_id: string,
    hobby_id: string
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date,
        private classroomId: string | null
    ) {}

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

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setBirthdate(newBirthdate: Date) {
        this.birthdate = newBirthdate
    }

    public setClassroomId(newClassroomId: string | null) {
        this.classroomId = newClassroomId
    }
}