import { useState, useRef } from "react";
// So, which should you use between controlled and uncontrolled inputs?

// Use controlled inputs when you need dynamic form updates, real-time validation, or when you want to sync input values with state. They provide better control but require more re-renders.

// Use uncontrolled inputs when you need simpler forms, want to access values only on submission, or when you're working with non-React code.


export default function Form() {
  const styles = { 
    width: "70vw", 
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px" 
  };

  // Controlled Inputs
    // const [name, setName] = useState("");
    // const handleChange = (e) => {
    //   setName(e.target.value);
    // };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log(name);
    // };
    // return (
    //   <div style={styles}>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="name">Your name</label> <br />
    //       <input value={name} id="name" onChange={handleChange} type="text" />
    //     </form>
    //     <div>{name}</div>
    //   </div>
    // );



  // Uncontrolled Inputs
  const nameRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div style={styles}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your</label>
      <input type="text" id="name" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
    <div>Checkout console after submit</div>
    </div>
  );
}
