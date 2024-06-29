import React,{useContext,useState} from 'react';
import './SearchSongs.css';
import { songProvide } from '../App';
import axios from 'axios';
const SearchSongs = () => {
    const {songs,setSongs,index,setIndex,loginDetails}=useContext(songProvide);
    const [query,setQuery]=useState('');
    const [loading,setLoading]=useState(false);
    // fetching Songs
    async function fetchSongs(){
        setLoading(true);
        let i=0;
        await axios({url:"https://frissonserver1.onrender.com/search",method:"GET",params:{query:query}}).then((res)=>{if(res.data.length>1){setSongs(res.data.map(e=>({imageUrl:e.imageUrl,song:e.song,name:e.name,author:e.author,id:i++})))}else{alert("No Song Found");}}).catch(err=>{alert("Server Error");console.log(err)})
        setLoading(false);
    }
  return (
    <div style={{marginBottom:'100px'}}>
        <div className="searchgroup">
                <form action="" onSubmit={(e)=>{e.preventDefault();fetchSongs()}} style={{display:'flex'}} className="searchform">
                {(loading)?<i className="fa-solid fa-headphones fa-beat-fade" style={{color:'red',margin:'10px'}}></i>:""}
                <input type="search" alt="Search Songs" placeholder="Search Songs" onChange={(e)=>setQuery(e.target.value)}/>
                <div ><button type="submit" className="fa-solid fa-magnifying-glass" style={{color:'white',cursor:"pointer"}} onClick={()=>fetchSongs()}></button></div>
                </form>
        </div>
        {(songs.length>1)?songs.map(e=><Card key={e.id} song={{imageUrl:e.imageUrl,name:e.name,author:e.author}} setIndex={()=>setIndex(e.id)}/>):(loading)?<h1 class="fa-solid fa-headphones fa-beat-fade" style={{zIndex:1,color:'red',textAlign:'center',justifyContent:'center'}}></h1>:<h1 style={{color:'white',textAlign:'center',justifyContent:'center'}}>Search Something</h1>}
    </div>
  )
}
export function Card({song ,setIndex}){
    const [likesong,setLikeSong]=useState(false);
    function addFavourite(email,song,name,author,imageUrl){
        axios({method:"GET",url:"http://localhost:8090/addfavourite",data:{email:email,song:song,name:name}})
    }
    return (
        <div className="card">
            <img src={song.imageUrl || '/PreLoader.svg'} />
            <div>
                <h3>{song.name || "placeholder Name"}</h3>
                <h3>{song.author || "placeholder Author"}</h3>
                <button className="fa-solid fa-play" onClick={()=>setIndex(song.id)} title="play"></button>
                <i className="fa-solid fa-heart likeSongs" style={{color:(likesong)?'red':'white'}} onClick={()=>setLikeSong(!likesong)} title="like this"></i>
            </div>
        </div>
    )
}
export default SearchSongs;