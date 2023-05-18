import React from 'react'
import './searchItem.scss'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="../../../public/1200px-Baku_Aquatic_Palace,_Olympic_Pool.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1>Beogradska Arena</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className="siSubtitle">Swimming pool with Air coditioning</span>
            <span className="siFatures">1 Swimming pool •  10 bathroom</span>
            <span className="siPrijava">Free prijava</span>
            <span className='siCancel'>Mozete odustati u bilo koje vreme</span>
        </div>
        <div className="siDetails">
            <button>Prijavi se</button>
        </div>
    </div>
  )
}

export default SearchItem