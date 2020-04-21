import React, { useState } from "react";
import { Modal, Button, TextInput } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./features/nameSlice";

export default () => {
  const [name, changeName] = useState('');
  const userName = useSelector((state) => state.name.name);
  const dispatch = useDispatch()

  const nameHandler = () => {
    dispatch(setName(name))
    changeName('')
  }

  return (
    <Modal
    header="Hi and welcome!"
    open={ userName.length === 0 ? true : false}
    actions={[
      <Button flat modal="close" node="button" waves="green" onClick={() => nameHandler()}>
        Set name
      </Button>,
    ]}
  >
    Before you start using app, add your name here:
    <TextInput id="TextInput-4" label="Your name" type="text" value={name} onChange={(e) => changeName(e.target.value)} />
  </Modal>
  )
}


