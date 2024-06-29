import React,{useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const SignUp = () => {
    const[pass,togglePass]=useState(true);
    function toastify(status){
      if(status==202){
        toast.warn("User Already Found",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          });
      }
      else if(status==200){
        toast.success("SignUp SuccessFully",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
      else{
        toast.error("Something Wrong !! try Again",{
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }
    function newCustomer(){
      axios({method:"POST",url:"http://localhost:8080/signup",data:{"name":document.getElementById("name").value,"password":document.getElementById("password").value}}).then(res=>toastify(res.status)).catch(err=>toastify(500))
    }
  return (
    <div className="loginPage">
        <div className="loginContent">
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src="/logo.png" className="logo"/>
            <h1 style={{color:'white'}}>SignUp</h1>
            </div>
            <br/>
            <form className="loginContent" onSubmit={(e)=>{e.preventDefault();newCustomer()}}>
                <h3 style={{color:'white'}}>Enter Name</h3>
                <input type="email" placeholder="Enter Name" required id="name"/>
                <h3 style={{color:'white'}}>Enter Password</h3>
                <input type={(pass)?"password":"text"} id="password" required/>
                <br />
                <span className="showPassword" onClick={()=>togglePass(!pass)}>Show password</span>
                <br/>
                  <button type="submit" className="button">SignUp</button>
                  <ToastContainer />
            </form>
        </div>
    </div>
  )
}

export default SignUp;
