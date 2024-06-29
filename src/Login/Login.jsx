import React,{useState,Suspense,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { songProvide } from '../App';
const Login = () => {
  const{loginDetails,setLoginDetails}=useContext(songProvide);
    const[pass,togglePass]=useState(true);
    let navigate=useNavigate();
    function verifyLogin(){
      console.log("Invoked");
        axios({method:"POST",url:"http://localhost:8080/login",data:{name:document.getElementById("name").value,"password":document.getElementById("password").value}}).then(res=>{if(res.status==200)setLoginDetails(res.data);toastify(res.status)}).catch(err=>toastify(500));
    }
    function toastify(status){
      if(status==200){
        toast.success("Login SuccessFully",{
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
      else {
        toast.error("Can't Login!! try Again",{
          position: "top-right",
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
  return (
    <Suspense fallback={<img src="/PreLoader.gif"/>}>
    <div className="loginPage">
        <div className="loginContent" >
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <img src="/logo.png" className="logo"/>
              <h1 style={{color:'white'}}>Login</h1>
            </div>
            <br/>
            <form className="loginContent" onSubmit={(e)=>{e.preventDefault();verifyLogin()}}>
                <h3 style={{color:'white'}}>Enter Name</h3>
                  <input type="text" placeholder="Enter Name" id="name" required/>
                <h3 style={{color:'white'}}>Enter Password</h3>
                  <input type={(pass)?"password":"text"} id="password" required/>
                  <br/>
                <span className="showPassword" onClick={()=>togglePass(!pass)}>Show password</span>
                  <br/>
                <div style={{display:'flex',justifyContent:"space-around"}}>
                  <button type="submit" className="button">Login</button>
                  <button type="button" className="button" onClick={()=>navigate('/signup')}>SignUp</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    </div>
    </Suspense>
  )
}

export default Login
