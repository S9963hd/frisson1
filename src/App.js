import React,{useState,createContext} from 'react';
import Main from './MainPage/Main';
import {Routes,Route} from 'react-router-dom';
import SearchSongs from './SearchSong/SearchSongs';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Favourite from './FavouriteSong/Favourite';
import PlayList from './PlayList/PlayList'
export const songProvide=createContext();
function App(){
  const [index,setIndex]=useState(0);
  const [songs,setSongs]=useState([{name:null,id:0,song:null,author:null,imageUrl:null}]);
  const [loginDetails,setLoginDetails]=useState(null);
  return (
    <div>
      <songProvide.Provider value={{songs,setSongs,index,setIndex,loginDetails,setLoginDetails}}>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/searchSongs" element={<SearchSongs/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="/playlist" element={<PlayList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </songProvide.Provider>
    <AudioPlayer
        autoPlay={false}
        src={songs[index].song}
        onPlay={e => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={true}
        showDownloadProgress={true}
        showFilledVolume={true}
        onClickNext={()=>setIndex((index+1)%songs.length)}
        style={{position:'fixed',bottom:'0px',backgroundColor:'#1f1f1f',color:'white',}}
        onClickPrevious={()=>setIndex(Math.abs(index-1)%songs.length)}
        onEnded={()=>setIndex(songs.length%(index+1))}
      />
      {console.log("App ::"+songs[index].song+"  "+songs[index].name)}
      {console.log(index)}
    </div>
  );
}
export default App;
