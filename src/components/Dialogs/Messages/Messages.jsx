/* eslint-disable no-debugger */
/* eslint-disable react/jsx-key */
import React from "react";

import Message from "./Message/Message";
import Messageheader from "./Messageheader/Messageheader";
import "./Messages.scss";
/* eslint-disable react/prop-types */
const Messages = (props) => {
  debugger;
  let massagearray = props.masaray;
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.onaddMessage();
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updatemessage(text);
  };
  const listmessages = massagearray.map((massageitem) => (
    <Message
      name={props.friend.name}
      img={props.friend.img}
      message={massageitem.message}
    />
  ));

  return (
    <div className="Messages">
      <Messageheader name={props.friend.name} img={props.friend.img} />
      <div className="Messages__message">{listmessages}</div>
      <div className="Messages__send">
        <textarea
          className="Messages__send__text"
          data-placeholder="Вставьте текст"
          suppressContentEditableWarning="true"
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.updatemessagetext}
        ></textarea>
        <button onClick={addMessage} className="Messages__send__btn btn-reset">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Messages;
