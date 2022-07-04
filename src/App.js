import "./styles.css";
import Form from "./component/Form";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState({ first: " ", sc: " ", email: " " });
  const [save, setSave] = useState([{}]);

  return (
    <div className="App">
      <h1>Hello {` ${name.first} ${name.sc}`}</h1>
      <p>{name.email}</p>
      <Form name={name} setName={setName} save={save} setSave={setSave} />
    </div>
  );
}
