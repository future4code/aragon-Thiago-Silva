import { IClassroomDB } from "../../models/Classroom";
import { IHobbiesDB, IStudentDB, IStudentsHobbiesDB } from "../../models/Student";

export const classroom: IClassroomDB[] = [
  {
    id: "101",
    name: "lovelace",
    module: "0"
  },
  {
    id: "102",
    name: "gilloni",
    module: "1",
  },
  {
    id: "103",
    name: "gates",
    module: "3",
  },
  {
    id: "104",
    name: "aragon",
    module: "6",
  },
];

export const students: IStudentDB[] = [
  {
    id: "201",
    name: "Thiago",
    email: "thiago@gmail.com",
    birthdate: new Date("1984/07/01"),
    classroom_id: "101"
  },
  {
    id: "202",
    name: "Lorenzo",
    email: "lorenzo@gmail.com",
    birthdate: new Date("2000/12/19"),
    classroom_id: "101",
  },
  {
    id: "203",
    name: "Camila",
    email: "camila@gmail.com",
    birthdate: new Date("1989/12/29"),
    classroom_id: "101",
  },
  {
    id: "204",
    name: "Pietro",
    email: "pietro@gmail.com",
    birthdate: new Date( "2001/11/01"),
    classroom_id: "102"
  },
  {
    id: "205",
    name: "Willian",
    email: "willian@gmail.com",
    birthdate: new Date("2000/12/01"),
    classroom_id: "102"
  },
  {
    id: "206",
    name: "Carlos",
    email: "carlos@gmail.com",
    birthdate: new Date("1986/10/06"),
    classroom_id: "102"
  },
  {
    id: "207",
    name: "Rose",
    email: "rose@gmail.com",
    birthdate: new Date("1983/07/03"),
    classroom_id: "103"
  },
  {
    id: "208",
    name: "Felipe",
    email: "felipe@gmail.com",
    birthdate: new Date("2000/04/12"),
    classroom_id: "103"
  },
  {
    id: "209",
    name: "Marcos",
    email: "marcos@gmail.com",
    birthdate: new Date("1989/03/15"),
    classroom_id: "103"
  },
  {
    id: "210",
    name: "Luca",
    email: "luca@gmail.com",
    birthdate: new Date("1989/12/29"),
    classroom_id: null
  },
];

export const hobbies: IHobbiesDB[] = [
  {
    id: "301",
    title: "livros",
  },
  {
    id: "302",
    title: "games",
  },
  {
    id: "303",
    title: "filmes e séries",
  },
  {
    id: "304",
    title: "dançar",
  },
  {
    id: "305",
    title: "viajar",
  }
];

export const studentsHobbies: IStudentsHobbiesDB[] = [
  {
      student_id: "201",
      hobby_id: "301"
  },
  {
      student_id: "202",
      hobby_id: "302"
  },
  {
      student_id: "203",
      hobby_id: "303"
  },
  {
      student_id: "204",
      hobby_id: "304"
  },
  {
      student_id: "205",
      hobby_id: "305"
  },
  {
      student_id: "206",
      hobby_id: "301"
  },
  {
      student_id: "207",
      hobby_id: "302"
  },
  {
      student_id: "208",
      hobby_id: "303"
  },
  {
      student_id: "209",
      hobby_id: "304"
  },
  {
      student_id: "210",
      hobby_id: "305"
  }
]
