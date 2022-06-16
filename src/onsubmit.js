import React, {useState} from 'react';

const SubmitEvent = ()=>{
    const [data, setData] = useState({email:'', password:''});

    let ChangeHandler =e=> {
        setData({...data, [e.target.name]: e.target.value})
    }
    let SubmitHandler = e=> {
        e.preventDefault();
        if(data.password.length<5) {
            alert('provide password length >5')
        }
            else{
                console.log(data);
            }
      
    } 
    return(
        <div class="Container">
            <form onSubmit={SubmitHandler}>
            <label style={{'color': 'red'}}> Email </label> <br/>
            <input type="text" name="email" onChange={ChangeHandler}></input><br/>
            <label> Password </label><br/>
            <input type="password" name="password" onChange={ChangeHandler}></input><br/>
            <input type="submit" value="Login" className='btn btn-secondary'></input><br/>
            </form>
        </div>
    )
}
export default SubmitEvent;