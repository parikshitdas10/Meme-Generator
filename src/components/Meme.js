import React from 'react'
import memesData from '../memesData'

function Meme() {
  let [url,setURL]=React.useState("")
  function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  function set(){
    const arr=memesData.data.memes
    const item = get_random(arr)
    setURL(`${item.url}`)
  }
  return (
    <div className='Meme'>
        <div className='form'>
            <input type="text" className='upper-text' placeholder='Upper Text'/>
            <input type="text" className='lower-text' placeholder='Lower Text'/>
        </div>
        <button onClick={set} className='btn'>Get a new meme image</button>
        <img className='meme-img' src={url}/>
    </div>
  )
}

export default Meme