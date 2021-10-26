/* eslint-disable react/jsx-key */
import React from "react";

import "./dialogs.scss";
import DialogUser from "./Dialogsusers/Dialoguser";
import Messages from "./Messages/Messages";
/* eslint-disable react/prop-types */
const Dialogs = (props) => {
  // eslint-disable-next-line no-debugger

  let dialog = props.dialog;
  const listdialog = dialog.map((dialogitem) => (
    <DialogUser
      name={dialogitem.name}
      id={dialogitem.id}
      img={dialogitem.img}
    />
  ));

  return (
    <div className="dialog dialog-row">
      <div className="dialog-col">{listdialog}</div>
      <div className="dialog-col">
        <Messages
          updatemessage={props.updatemessage}
          masaray={props.messages}
          friend={props.dialog[0]}
          onaddMessage={props.onaddMessage}
          updatemessagetext={props.updatemessagetext}
        />
      </div>
    </div>
  );
};

export default Dialogs;
