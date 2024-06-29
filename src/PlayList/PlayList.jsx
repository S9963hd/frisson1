import React,{Suspense,useContext,useEffect} from 'react'
import { songProvide } from '../App';
import axios  from 'axios';
import '../FavouriteSong/Favourite.css';
import { Card } from '../SearchSong/SearchSongs';
const PlayList = () => {
  const {loginDetails}=useContext(songProvide);
  // useEffect(()=>{
  //     axios.get('')
  // },[])
  return (
      <div>
        <nav>
          <h1 className="title">PlayList Collections</h1>
        </nav>
        <div className="favbody">
            {(loginDetails!=null)?<Card />:<h1>No Songs are Found</h1>}
        </div>
      </div>
  )
}
export default PlayList;
