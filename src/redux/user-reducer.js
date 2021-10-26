import imguser from "../img/girl.jpg";
import imguserbg from "../img/priroda.jpg";
import imgf1 from "../img/img1.jpg";
import imgf2 from "../img/img2.jpg";
import imgf3 from "../img/img3.jpg";
import imgf4 from "../img/img4.jpg";
import imgf5 from "../img/img5.jpg";
import imgf6 from "../img/img6.jpg";
import imgf7 from "../img/img7.jpg";
import imgf8 from "../img/img8.jpg";
import imggift from "../img/gift.png";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initstate = {
  user: [
    {
      id: 1,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 2,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
      gift: [
        {
          id: 7,
          img: imggift,
        },
        {
          id: 8,
          img: imggift,
        },
        {
          id: 9,
          img: imggift,
        },
        {
          id: 10,
          img: imggift,
        },
        {
          id: 11,
          img: imggift,
        },
        {
          id: 12,
          img: imggift,
        },
      ],
      foto: [
        { id: 7, img: imgf1 },
        { id: 8, img: imgf2 },
        { id: 9, img: imgf3 },
        { id: 10, img: imgf4 },
        { id: 11, img: imgf5 },
        { id: 12, img: imgf6 },
        { id: 13, img: imgf7 },
        { id: 14, img: imgf8 },
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
    {
      id: 3,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 4,
      followed: true,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 5,
      followed: true,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 6,
      followed: true,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 7,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 8,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
    {
      id: 9,
      followed: false,
      surname: "Чепурной",
      name: "Владимир",
      lastname: "Владимирович",
      img: imguser,
      BgImg: imguserbg,
      location: { city: "Moskow", Country: "Russia" },
      Status: "life",
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
        { id: 2, img: imgf2 },
        { id: 3, img: imgf3 },
        { id: 4, img: imgf4 },
        { id: 5, img: imgf5 },
        { id: 6, img: imgf6 },
        { id: 7, img: imgf7 },
        { id: 8, img: imgf8 },
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
};

const userReducer = (state = initstate, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.user.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW:
      return {
        ...state,
        users: state.user.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, user: [...state.user, ...action.users] };
    }
    default:
      return state;
  }
};
export const followAC = (userid) => ({ type: FOLLOW, userid });
export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });
export const setUserAC = (users) => ({ type: SET_USERS, users });

export default userReducer;
