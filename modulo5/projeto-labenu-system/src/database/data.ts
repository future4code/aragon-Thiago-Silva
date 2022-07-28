import { MODULE, TClassroom } from "../models/Classroom";
import { THobbies } from "../models/Hobbies";
import { TStudent } from "../models/Student";

export const hobbies: THobbies[] = [
  {
    id: "1",
    title: "estudar",
  },
  {
    id: "2",
    title: "jogar games",
  },
  {
    id: "3",
    title: "ver Netflix",
  },
];

export const students: TStudent[] = [
  {
    id: "101",
    name: "Thiago",
    email: "thiago@gmail.com",
    birthdate: "1984/07/01",
    classsroomId: "201",
    hobbiesId: "1",
  },
  {
    id: "102",
    name: "Lorenzo",
    email: "lorenzo@gmail.com",
    birthdate: "2000/12/19",
    classsroomId: "201",
    hobbiesId: "2",
  },
  {
    id: "103",
    name: "Camila",
    email: "camila@gmail.com",
    birthdate: "1989/12/29",
    classsroomId: "201",
    hobbiesId: "3",
  },
  {
    id: "104",
    name: "Pietro",
    email: "pietro@gmail.com",
    birthdate: "2001/11/01",
    classsroomId: "202",
    hobbiesId: "1",
  },
  {
    id: "105",
    name: "Willian",
    email: "lorenzo@gmail.com",
    birthdate: "2000/12/01",
    classsroomId: "202",
    hobbiesId: "2",
  },
  {
    id: "106",
    name: "Carlos",
    email: "carlos@gmail.com",
    birthdate: "1986/16/06",
    classsroomId: "202",
    hobbiesId: "3",
  },
  {
    id: "107",
    name: "Rose",
    email: "rose@gmail.com",
    birthdate: "1983/07/03",
    classsroomId: "203",
    hobbiesId: "1",
  },
  {
    id: "108",
    name: "Felipe",
    email: "felipe@gmail.com",
    birthdate: "2000/10/12",
    classsroomId: "203",
    hobbiesId: "2",
  },
  {
    id: "109",
    name: "Marcos",
    email: "marcos@gmail.com",
    birthdate: "1989/10/15",
    classsroomId: "203",
    hobbiesId: "3",
  },
  {
    id: "110",
    name: "Camila",
    email: "camila@gmail.com",
    birthdate: "1989/12/29",
    classsroomId: null,
    hobbiesId: "1",
  },
];

export const classroom: TClassroom[] = [
  {
    id: "200",
    name: "lovelace",
    studentId: [],
    module: MODULE.MODULE0,
  },
  {
    id: "201",
    name: "gilloni",
    studentId: ["101", "102", "103"],
    module: MODULE.MODULE1,
  },
  {
    id: "202",
    name: "gates",
    studentId: ["104", "105", "106"],
    module: MODULE.MODULE3,
  },
  {
    id: "203",
    name: "aragon",
    studentId: ["107", "108", "109"],
    module: MODULE.MODULE5,
  },
];
