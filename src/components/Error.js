import { useRouteError } from "react-router-dom";

const Error = () => {
    const Err = useRouteError();
   // console.log(Err)
    return (
        <div>
            <h1>OOpsss !!!1 <br/>something wrong</h1>
            <h2>{Err.status} {Err.statusText}</h2>
        </div>
    )
}
export default Error;