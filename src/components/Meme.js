import React from 'react'


function Meme() {
  const [formData,setFormData]=React.useState({
    upperText:"",
    lowerText:""
  })


  const [allMemeImages,setAllImages]=React.useState([])


  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllImages(data.data.memes))
  },[])
  
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/2d3al6.jpg"
  })
  function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  function setRandom(){
    const arr=allMemeImages
    const item = get_random(arr)
    const url=item.url
    setMeme(prev=>{
      return ({
        ...prev,
        randomImage:url
      })
    })
  
  }
  function handleChange(event){
  const {name,value}=event.target
  setFormData(prev=>{
    return{
      ...prev,
      [name]:value
    }
  })
  }
  
  return (
    <div className='Meme'>
        <div className='form'>
            <input 
            type="text" 
            className='upper-text' 
            placeholder='Upper Text'
            value={formData.upperText}
            onChange={handleChange}
            name="upperText"
            />
            <input type="text"
              className='lower-text'
              placeholder='Lower Text'
              value={formData.lowerText}
              onChange={handleChange}
              name="lowerText"
              />
        </div>
        <button onClick={setRandom} className='btn'>Get a new meme image</button>
        <div className='img-container'>
        <img className='meme-img' src={meme.randomImage} alt="meme img"/>
        <h1 className='firstText'>{formData.upperText}</h1>
        <h1 className='secondText'>{formData.lowerText}</h1>
        </div>
    </div>
  )
}

export default Meme