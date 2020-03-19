import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([])
    const [slDvadeset, setSlDvadeset] = useState(20)

  useEffect(()=>{
    getStoryIds().then(dunja => setStoryIds(dunja))
  },[])

  return (
    <div>
    <button onClick={()=>{setSlDvadeset(slDvadeset+20)}}>Next 20</button>
    <div className="kont">
      {storyIds.slice(0,slDvadeset).map(storyId => <Story  storyId ={storyId} key={storyId}/>)}
    </div>
    </div>
  );
}
