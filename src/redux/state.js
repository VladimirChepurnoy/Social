import imguser from "../img/girl.jpg";
import imguserbg from "../img/priroda.jpg";
import imgd1 from "../img/1.jpg";
import imgd2 from "../img/2.jpg";
import imgd3 from "../img/3.jpg";
import imgd4 from "../img/4.jpg";
import imgf1 from "../img/img1.jpg";
import imgf2 from "../img/img2.jpg";
import imgf3 from "../img/img3.jpg";
import imgf4 from "../img/img4.jpg";
import imgf5 from "../img/img5.jpg";
import imgf6 from "../img/img6.jpg";
import imgf7 from "../img/img7.jpg";
import imgf8 from "../img/img8.jpg";
import imggift from "../img/gift.png";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      NewPostText: "",
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          likesCount: 12,
          img: imguser,
        },

        { id: 2, message: "blabla", likesCount: 12, img: imguser },
        { id: 3, message: "Dada", likesCount: 12, img: imguser },
        {
          id: 4,
          message: "My first post",
          likesCount: 12,
          img: imguser,
        },
      ],
    },
    dialogsPage: {
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
      NewMessage: "",
    },
    userPage: {
      user: [
        {
          id: 1,
          surname: "Чепурной",
          name: "Владимир",
          lastname: "Владимирович",
          img: imguser,
          BgImg: imguserbg,
          gift: [
            {
              id: 1,
              img: imggift,
            },
            {
              id: 2,
              img: imggift,
            },
            {
              id: 3,
              img: imggift,
            },
            {
              id: 4,
              img: imggift,
            },
            {
              id: 5,
              img: imggift,
            },
            {
              id: 6,
              img: imggift,
            },
          ],
          foto: [
            { id: 1, img: imgf1 },
            { id: 1, img: imgf2 },
            { id: 1, img: imgf3 },
            { id: 1, img: imgf4 },
            { id: 1, img: imgf5 },
            { id: 1, img: imgf6 },
            { id: 1, img: imgf7 },
            { id: 1, img: imgf8 },
          ],
          friend: [
            { id: 1, img: imguser },
            { id: 2, img: imguser },
            { id: 3, img: imguser },
            { id: 4, img: imguser },
            { id: 5, img: imguser },
            { id: 6, img: imguser },
          ],
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  rerenderEntireTree() {
    console.log("state change");
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this.rerenderEntireTree();
  },
};

export default store;
