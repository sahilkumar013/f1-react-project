import React,{useState} from "react";
import image from './images/3.png'
import google from './images/google_logo.png'
import facebook from './images/facebook_logo.avif'

const Form=()=>{
    let [user,setUser] = useState({'name':"",'email':"",'password':"",'cpassword':""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
    // console.log(user)


    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 1){
            setSuccess("")
           return  setError("Name is Mandatory")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.cpassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("Successfully Created!")
        setError("")

    }

    return(


        <div className="container">
            <div className="left">
                <img src={image} alt="backgground" className="tilt"/>

            </div>

            <div className="right">
                <center><div className="signup">
                <h3 className="ca">Create Account</h3>
                    <div className="social">
                        
                        <div className="google"><span><img src={google} alt="google"/></span><span className="signin">Sign in with Google</span></div>
                        <div className="google"><span><img src={facebook} alt="facebook" /></span><span className="signin">Sign in with Facebook</span></div>
                    </div>
                    <br />
                    <div>-OR-</div>
                    <form className="form" onSubmit={validateForm}>
                        <input type="text" className="input" placeholder="Full Name" onChange={(event)=>setUser({...user,name:event.target.value})}/>
                        <input type="text" className="input" placeholder="Email Address" onChange={(event)=>setUser({...user,email:event.target.value})}/>
                        <input type="text" className="input" placeholder="Password" onChange={(event)=>setUser({...user,password:event.target.value})}/>
                        <input type="text" className="input" placeholder="Confirm Password" onChange={(event)=>setUser({...user,cpassword:event.target.value})}/>
                        <button className="btn"><h3>Create Account</h3></button>
                    </form>

                </div></center>
                {
                error && <p className="error">Error:{error}</p>
            }
            {
                success && <p className="success">Success:{success}</p>
            }

            </div>
            
        </div>
    )
}
export default Form;