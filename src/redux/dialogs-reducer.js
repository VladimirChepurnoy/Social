/* eslint-disable no-case-declarations */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
import imgd1 from "../img/1.jpg";
import imgd2 from "../img/2.jpg";
import imgd3 from "../img/3.jpg";
import imgd4 from "../img/4.jpg";

let initstate = {
  dialogs: [
    { id: 1, name: "Лиса", img: imgd1 },
    { id: 2, name: "Волк", img: imgd2 },
    { id: 3, name: "Заяц", img: imgd3 },
    { id: 4, name: "Медведь", img: imgd4 },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessage: "",
};

const dialogsReducer = (state = initstate, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessage: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessage;
      return {
        ...state,
        newMessage: "",
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
