import React from 'react'

const daraz = () => {
    const user = {
        name: 'Hamza',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnS3krIWmsGps7s7v_3y8YpBpbzmOrMUB-6FQEkTN&s',
        imageSize: 130,
        detail:'Orignol m-10 ,m-20',
        price:1150

      };
      

      

  return (
    <div style={{width:"100%",height:"40%",padding:"20px"
    }}>
      <hr style={{color:"black"}} />
      <div className='cards' style={{backgroundColor:'orange' ,'borderRadius':'25px',margin:"10" }}>
            <h1>Cards</h1>
            <img src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }} />
            <h4>{user.detail}</h4>
            <h3>{user.price}</h3>
      </div>
      <hr style={{color:"black"}} />

 
    </div>
  )
}
export default daraz
