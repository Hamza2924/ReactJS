import '../Vegetables/Vege.css'
import { useState } from "react";
import React from 'react'

export const fruiltlist =[
    { category: "Fruits", id: 1, price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", id: 2, price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", id: 3, price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", id: 4, price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", id: 5, price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", id: 6, price: "$1", stocked: true, name: "Peas" }
  ] 

const Vegetable = () => {
  console.log(fruiltlist);

  const [value, setvalue] = useState("");
      const onChange=(event)=>{
        setvalue(event.target.value);

      }
  let   Searchable=(value)=>{
          console.log(value);
     }

        <h1>Fruits</h1>
          let fruits =fruiltlist.filter((item)=>  item.category=="Fruits");
          let vegetables = fruiltlist.filter((item)=> item.category=="Vegetables");
          // let fruits = fruiltlist.filter(item=>{
          //         if(item.category=="Fruits")
          //         {
          //           return(fruits.item);
          //         }
          //         else
          //         {
          //           console.log("eroor");
          //         }
          // })
           console.log(fruits);
    
       
  return (
    <>
        <div>
          <div className="textfiels">
            <input type="text" placeholder='Search...' value={value} onChange={(e)=>{setvalue(e.target.value)}} />
             <button onClick={()=>Searchable(value)}>Search</button>
          </div>
          <div className="display">
            
          </div>
          <h1>Fruits</h1>
           <div className='Container1'> <table>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            <tr>
            <td>{
            // fruits.filter(item=>{
            // //   return      <p>{item.name}</p>
            //     if(item.name==value)
            //     {
            //        <h1>{item.name}</h1>
            //     }
            // })


            
             fruits.map(item=>{
                return <p>{item.name}</p>
          
            })
           }
           </td>
           <td>{
            
             fruits.map(item=>{
                return <p>{item.price}</p>
          
            })
           }
           </td>
           </tr>
           </table>
          </div>
          <h2>Vegetables</h2>
           <div className="vegetables">
           
               <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>
               {
                vegetables.map(item=>{
                  return <p>{item.name}</p>
                })
               }
               </td>
               <td>
               {
                vegetables.map(item=>{
                  return <p>{item.price}</p>
                })
               }
               </td>
               </tr>
               </table>
           </div>
              
         </div>
    </>
  )
}

export default Vegetable







    //     const [value, setvalue] = useState("");
    //     // const onChange=(event)=>{
    //     //   setvalue(event.target.value);

    //     // }
    // let   Searchable=(value)=>{
    //         console.log(value);
    //    }
         







//  <div className="container">
//       <input type="text" placeholder='Search...' value={value} onChange={(e)=>{setvalue(e.target.value)}} />
//       <button onClick={()=>Searchable(value)}>Search</button>
//     </div>