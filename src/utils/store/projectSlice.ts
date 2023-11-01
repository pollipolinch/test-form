import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types/types";
export const initialState: State = {
  stage: 1,
  type: null,
  modal: false,
  roles: [],
  company: [],
  people: [],
  users: [
    {
      id: 1,
      name: "Иванов Иван Иванович",
      job: "Должность",
      company: "ООО Рога-и-копыта",
      reason: "Приказ №222 от 11.09.2023",
      dateStart: "2023-09-22",
      dateEnd: "2023-10-31",
    },
    {
      id: 2,
      name: "Лазарева Юстина Сергеевна",
      job: "Должность",
      company: "ООО Компания Север",
      reason: "Приказ №222 от 11.09.2023",
      dateStart: "2023-10-12",
      dateEnd: "2023-10-31",
    },
    {
      id: 3,
      name: "Хохлов Архип Тимурович",
      job: "Должность",
      company: "ООО ВостокХозСофтОпт",
      reason: "Приказ №256 от 13.09.2023",
      dateStart: "2023-09-25",
      dateEnd: "2023-10-01",
    },
  ],
  newUser: [],
};
const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addPeople: (state, action) => {
      state.people = action.payload;
    },
    addCompany: (state, action) => {
      state.company = action.payload;
    },
    addRoles: (state, action) => {
      state.roles = action.payload;
    },
    showModal: (state, action) => {
      state.modal = action.payload;
    },
    changeStage: (state, action) => {
      state.stage = action.payload;
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
    addNewUser: (state, action) => {
      state.newUser = {
        ...state.newUser,
        id: action.payload.id,
        job: "Должность",
        name: action.payload.name,
        company: action.payload.company,
      };
    },
    addNewUserTwo: (state, action) => {
      state.newUser = {
        ...state.newUser,
        reason: action.payload.reason,
        dateStart: action.payload.dateStart,
        dateEnd: action.payload.dateEnd,
      };
    },
    addNewUserThree: (state, action) => {
      state.newUser = {
        ...state.newUser,
        role: action.payload.role,
      };
      state.users = [...state.users, state.newUser];
    },
    resetData: (state, action) => {
      state.type = null;
      state.stage = 1;
      state.newUser = [];
    },
  },
});

const { actions, reducer } = ProjectSlice;

export default reducer;

export const {
  deleteUser,
  showModal,
  changeStage,
  selectType,
  addNewUser,
  addNewUserTwo,
  addNewUserThree,
  resetData,
  addPeople,
  addCompany,
  addRoles,
} = actions;
