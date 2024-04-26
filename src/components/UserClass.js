import React from 'react';
//import img from './images/shru.jpg'

class UserClass extends React.Component {
     constructor (props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'shruuu',
                location: 'bang',
                
            },
        };
        
     }

     async componentDidMount () {

       const data = await fetch("https://api.github.com/users/shruthidd");
       const json = await data.json();
         
       this.setState({
        userInfo: json,
       
       });

       console.log(json);
       
     }

     componentDidUpdate () {
     // console.log("am upddated")
     }
     componentWillUnmount () {
      //console.log("am unmounted")
     }

    render () {
        const {name, location, avatar_url} = this.state.userInfo;
        
      //  const {count, count2} = this.state;
        return(
        <div className=""> <h1 className='font-bold'> Partners Name: {name} & Coby</h1>
        
        <div className='flex flex-wrap  space-x-2'>
        <img src = {avatar_url} className='w-60'/> 
        <img src={'./images/coby.jpg'} className='w-48 h-45 '></img>
          </div>
        <h2> Location: {location}& Bdvt</h2>
        <h3>ph no: 9740273810</h3></div>
        );
        
    }
}

export default UserClass;