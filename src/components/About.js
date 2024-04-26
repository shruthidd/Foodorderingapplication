
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {


    constructor (props) {
        super(props);
    }

    componentDidMount () {
       // console.log("About page mounted");
    }


    render(){
        return(
            <>
            <div></div>
            {/* <User name={"nikhil"} /> */}
            <UserClass name={"aishwaryavk"} location ={"shimoga"}/>
            </>
        )
    }
}

export default About;