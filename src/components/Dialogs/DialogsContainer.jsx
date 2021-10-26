/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/jsx-key */
import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";

import "./dialogs.scss";

/* eslint-disable react/prop-types */
// const DialogsContainer = () => {
//   // eslint-disable-next-line no-debugger

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         let newMessage = state.newMessage;
//         let massagearray = state.messages;
//         let addMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };
//         let onMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         const dialog = state.dialogs;
//         <Dialogs
//           updatemessage={onMessageChange}
//           onaddMessage={addMessage}
//           messages={massagearray}
//           dialog={dialog}
//           updatemessagetext={newMessage}
//         />;
//       }}
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps = (state) => {
  return {
    dialog: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    updatemessagetext: state.dialogsPage.newMessage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onaddMessage: () => {
      dispatch(sendMessageCreator());
    },
    updatemessage: (body) => dispatch(updateNewMessageBodyCreator(body)),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
