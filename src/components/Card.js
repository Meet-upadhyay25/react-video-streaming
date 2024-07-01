
import React from 'react'
import { timeAgo } from '../utils/helper'

const Card = ({video}) => {
    const {title, thumbnails, channelTitle, channelId,publishTime} = video?.snippet
  return (
    <div className='w-72 p-2'>
        <img className='w-full rounded-xl' src={thumbnails.medium.url} alt={title || "video-thumbnail"}/>
        <div className='mt-2'>
            <h1 className='font-bold'>{title}</h1>
            <p className='text-slate-400'>{channelTitle}</p>
            <p>{timeAgo(publishTime)}</p>
        </div>
    </div>
  )
}

export default Card