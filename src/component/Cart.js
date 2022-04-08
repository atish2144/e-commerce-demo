import React,{useState,useEffect} from 'react'
import "./Cart.css"
function Cart() {

     let quantity=(JSON.parse(localStorage.getItem("quantity"))||[])
    
      console.log(typeof quantity[0]);

    const[data,setdata]=useState((JSON.parse(localStorage.getItem("product"))||[]))
    // console.log("s",data);
    const[count,setcount]=useState(0);
   
    useEffect(()=>{

    },[count])

 
    const removeItem=(id,index)=>{
        const result=data.filter((data,index)=>data.id!==id)

        setdata(result)
        console.log(result);
        setcount((prev)=>prev+1)
        localStorage.setItem("product",JSON.stringify(result))

    }


  return (
    <div>
        <label className='lbl1'>Products Added in cart ({data.length})</label>
        <div>
        <table className='table'>
            <thead>
                 <tr>
                    <th>Sr No</th>    
                    <th>Item</th> 
                    <th>Price</th>  
                    <th>quantity</th> 
                    <th>Total</th>  
                    <th></th>
                 </tr>   
            </thead>
            <tbody>
                    {data!=""?
                        data.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>     
                                    <td>{data.title}</td>
                                    <td>{data.price}</td>
                                    <td>{quantity[index]}</td>
                                    <td>{data.price*quantity[index]}</td>
                                    <td><button className="removebtn" onClick={()=>removeItem(data.id)}>Remove from cart</button></td>

                                </tr>
                            );
                        })
                        :"No items in the cart"

                    }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Cart