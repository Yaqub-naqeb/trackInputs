const Form = ({ name, setName, save, setSave }) => {
  // const changeHandler = (e) => {
  //   setName({first:e.target.value,sc:' '});
  // };
  // const changeandler = (e) => {
  //  setName({first:name.first,sc:e.target.value,email:' '});

  // };
  // const changandler = (e) => {
  //   setName({first:name.first,sc:name.sc,email:e.target.value});
  //   console.log(e.target.name)
  //  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setName((prev) => {
      if (name === "first") {
        return { first: value, sc: prev.sc, email: prev.email };
      } else if (name === "second") {
        return { sc: value, first: prev.first, email: prev.email };
      } else {
        return { first: prev.first, sc: prev.sc, email: value };
      }
    });
  };

  return (
    <div className="form">
      <input
        type="text"
        name="first"
        onChange={changeHandler}
        placeholder="firstName"
      />
      <input
        type="text"
        name="second"
        onChange={changeHandler}
        placeholder="lastName"
      />
      <input
        type="email"
        name="email"
        onChange={changeHandler}
        placeholder="emal"
      />
    </div>
  );
};
export default Form;
