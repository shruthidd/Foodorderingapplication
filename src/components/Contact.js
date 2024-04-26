const Contact = () => {
    return(
        <div className=" w-500 h-200">
           
           <h1>contact Us</h1>
           <form>
            <input type = "text" className="border border-black p-2 m-2" placeholder="name"/>
            <input type = "text" className="border border-black p-2 m-2" placeholder="message" />
            <button type = "text" className="border border-black p-2 m-2 rounded-lg">Submit</button>
           </form>
    
        </div>
    )
};

export default Contact;