import React,{useState,Suspense} from 'react';
import './Main.css';
import {useNavigate} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const Main = () => {
    const[showMenu,setShowMenu]=useState(false)
  return (
    <Suspense fallback={<img src="/PreLoader.gif" style={{width:'40vw',height:'40vh'}}/>}>
    <div class="Main">
      <Navigation toggleMenu={()=>setShowMenu(!showMenu)}/>
      <MainContent/>
      {(showMenu)?<Menu/>:""}
    </div>
    </Suspense>
  )
}
function Navigation({toggleMenu}){
    const navigate=useNavigate();
    return (
        <nav className="Nav">
            <div className='Nav'>
                <i class="fa-solid fa-bars menu" onClick={toggleMenu}></i>
                <img className="logo" src={"/logo.png"} alt="Logo"/>
                <i className="fa-solid fa-magnifying-glass search" onClick={()=>navigate('/searchSongs')}></i>
            </div>
            <div>
                <h4 class="text" ><a href="https://sanjayweb.vercel.app/" style={{color:'white',textDecoration:'none'}}>About Me</a></h4>
                <h4 onClick={()=>navigate('/login')}>Sign In/Up</h4>
            </div>
        </nav>
    )
}
function MainContent(){
    return (
        <div >         
           <div style={{display:'flexbox',fontSize:'50px',justifyContent:'center',color:'#FB314F',fontWeight:'30vh',textAlign:'center'}}> 
            <b><Typewriter
                options={{
                    strings: ['Explore ','Enjoy','Just Listen ;)'],
                    autoStart: true,
                    loop: true,
                }}
                style={{fontSize:'80px',fontWeight:'10px'}}
            /></b>
            <h1 style={{fontSize:'50px',color:'white'}}>Songs</h1>
            </div>
        </div>
    )
}
function Menu(){
    const navigate=useNavigate();
    return(
        <div className="Menu">
            <h3 onClick={()=>navigate("/favourite")}><i className="fa-solid fa-heart">&nbsp;</i>Favourite Song</h3>
            <h3><i className="fa-solid fa-user">&nbsp;</i>About Me</h3>
            <h3 onClick={()=>navigate("/playlist")}><i className="fa-solid fa-folder">&nbsp;</i>Playlist</h3>
        </div>
    )
}
export default Main;
