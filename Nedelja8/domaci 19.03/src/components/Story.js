import React, { useState, useEffect } from 'react'
import { getStoryIds, getStory } from '../services/hackerNews'
import { mapTimeString } from '../utils/mapTimeString'


export const Story = ({storyId}) => {
    const [story, setStory] = useState({})

    useEffect(()=>{
        getStory(storyId).then(dunja => dunja && setStory(dunja))
    },[])

    return(
        <>
        <a href={story.url} target="_blank">
            <h3>{story.title}</h3>
        </a>
        <p>{story.by}</p>
        <p>{mapTimeString(story.time)}</p>
        </>
    )
}