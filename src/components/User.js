
import { useState } from "react";
const User = (props) => {

    const [count] = useState(0)
    return (
           <>
           <div className="user-card"> <h1> Name: {props.name}</h1>
           <h1>count:{count}</h1>
           <h2> Location: Bhadravathi</h2>
           <h3>ph no: 9740273810</h3></div>
          
           
           </>

    )
}

export default User;