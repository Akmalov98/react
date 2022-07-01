import React from 'react'
import S from './Navbar.module.css'

function Navbar() {
  return (
    <div className={S.container}>
      <div className={S.allcats}>
        <div className={S.wrapper}>
          <button className={S.button}>все котики</button>
         
        </div>
      </div>
        <div className={S.clevercats}>
        <div className={S.left}>
        <button className={S.button1}>Любимые котики</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar