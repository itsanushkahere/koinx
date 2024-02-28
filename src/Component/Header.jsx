import React from 'react'

function Header() {
  return (
    <div style={{ padding:"0 10px 0 10px",height:"50px", width:"100vw", border:"1px solid grey", display:"flex" ,justifyContent:"space-between",alignItems:"center"}}>
        <div className='icon' ><img src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg" style={{height:"20px"}}/></div>
        <div style={{display:"flex", gap:"20px"}}>
            <div >Crypto Taxes</div>
            <div>Free Tools</div>
            <div>Resource Center</div>
            <div style={{background:"blue", borderRadius:"5px", color:"white", padding:"5px"}}>Get Started</div>
        </div>
    </div>
  )
}

export default Header
