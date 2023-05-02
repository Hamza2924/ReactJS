import React from 'react'
import '../NavBAr/Nav.css'

const Nav = () => {
  return (
    // <div className='container'>
    //   <div className="container1">
    //     <div className="divlogoimg">
    //         <img className='imglogo1' src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" alt="daraz" />
    //     </div>
    //     <div className="dropdownsolution">
    //       <select name="Solution" id="1">
    //         <option value="Solution">Solutiuon</option>
    //       </select>
    //     </div>
    //     <div className="Pricing">
    //       <p>Pricing</p>
    //     </div>
    //     <div className="dropdownResources">
    //       <select name="Resources" id="1">
    //       <option value="Resources">Resources</option>
    //       </select>
    //     </div>

    //  </div>
    //   <div className="container2">
    //       <div className="login">
    //         <p>Log in</p>
    //       </div>
    //       <div className="btnfree">
    //         <button>
    //           Start free Trial
    //         </button>
    //       </div>
          
    //     </div> 
         
    // </div>
    <div className="container">
      <div className="container1">
           <ul>
            <li>
              <img className='imglogo1' src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" alt="daraz" />
            </li>
            <li>
              <select name="Solution" id="1">
                <option value="Solution">Solutiuon</option>
              </select>
             </li>
             <li>
              Pricing
             </li>
             <li>
             <select name="Resources" id="1">
             <option value="Resources">Resources</option>
             </select>
             </li>
          </ul>
      </div>
      <div className="container2">
        <ul>
          <li>
            Log in
          </li>
          <li>
          <button>
                 Start free Trial
               </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
