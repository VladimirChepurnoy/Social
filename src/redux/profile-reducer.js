/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import imguser from "../img/girl.jpg";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initstate = {
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
};

const profileReducer = (state = initstate, action) => {
  let stateCopy = { ...state };
  stateCopy.posts = [...state.posts];

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: state.NewPostText, likesCount: 0, img: imguser },
        ],
        NewPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, NewPostText: action.NewText };
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  NewText: text,
});
export default profileReducer;
