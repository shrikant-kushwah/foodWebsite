import { useState } from "react";

const User = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Count increase(cf)</button>
      <h2>Nmae: {props.name}</h2>
      <h3>Location:Agra UttarPradesh</h3>
      <h4>Contact:shri1234@gmail.com</h4>
    </div>
    )

}

export default User;