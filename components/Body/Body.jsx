import React from 'react'
import S from './Body.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


function Body() {
    const [cats, setCats] = useState(null)

  async function fetchCats() {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search',
      {params: {limit: 15, size: 'small'}})
       setCats(response.data)
       console.log(response.data)
  }

  

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div className={S.container}>
        <div className={S.imagecontainer1}>
            <img  src="https://cdn2.thecatapi.com/images/2k6.jpg" className={S.image1} placeholder='кошка' id='2k6'/>
            <img src="https://cdn2.thecatapi.com/images/9tu.jpg" className={S.image2} placehoolder="" id='9tu'/>
            <img src="https://cdn2.thecatapi.com/images/ad2.jpg" className={S.image3} placehoolder="" id='ad2'/>
            <img src="https://cdn2.thecatapi.com/images/au7.jpg" className={S.image4} placehoolder="" id='au7'/>
            <img src="https://cdn2.thecatapi.com/images/auf.png" className={S.image5} placehoolder="" id='auf'/>
        </div>
        <div className={S.imagecontainer2}>
          <img src='https://29.media.tumblr.com/qgIb8tERipve9wy8wqMIYY5Fo1_250.jpg' className={S.image6} id='1l8' placeholder=''/>
          <img src='https://25.media.tumblr.com/tumblr_m381k4nIs91qzjgeto1_250.jpg' className={S.image7} id='3l5' placeholder=''/>
          <img src='https://24.media.tumblr.com/tumblr_lwlgt2LesO1qe49wpo1_250.jpg' className={S.image8} id='6pk' placeholder=''/>
          <img src='https://24.media.tumblr.com/tumblr_m31qf9BFyL1rsyyyao1_250.jpg' className={S.image9} id='4nj' placeholder=''/>
          <img src='https://24.media.tumblr.com/tumblr_lxlpfhVrGP1r7ryzoo1_250.jpg' className={S.image10} id='ave' placeholder=''/>
        </div>
        <div className={S.imagecontainer3}>
        <img src='https://25.media.tumblr.com/tumblr_lhh1aeXfGM1qgnva2o1_250.jpg' className={S.image11} id='bc2' placeholder=''/>
        <img src='https://24.media.tumblr.com/tumblr_luodjzJ2ke1r6z4awo1_250.jpg' className={S.image12} id='c6n' placeholder=''/>
        <img src='https://cdn2.thecatapi.com/images/efn.gif' className={S.image13} id='efn' placeholder=''/>
        <img src='https://24.media.tumblr.com/tumblr_m3s3hwlTst1qjev1to1_250.jpg' className={S.image14} id='ei5' placeholder=''/>
        <img src='https://cdn2.thecatapi.com/images/zyW4wflo3.jpg' className={S.image15} id='zyW4wflo3' placeholder=''/>
        </div>
          <div className={S.button}><button onClick={fetchCats}>..загружаем еще котиков..</button></div>
    </div>
  )
}

export default Body