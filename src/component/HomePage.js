import React, { useState, useEffect } from 'react'
import "./HomePage.css"

import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    let temp1 = [];

    const [data, setdata] = useState([])
    const [count, setcount] = useState(0)
    const [cart, setCart] = useState([])
    const [count2, setcount2] = useState(0)
    const [quantity, setquantity] = useState(Array(20).fill(1)
);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                // console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    useEffect(() => {

    }, [count2])

    const increment = (index) => {
        
        let temp=quantity;
        temp[index]=temp[index]+1;
        setquantity(temp)
        setcount((prev) => prev + 1)
        localStorage.setItem("quantity",JSON.stringify(temp));
            
        // console.log(quantity);
    }

    const decrement = (index) => {
       
        let temp=quantity;
        temp[index]=temp[index]-1;
        setquantity(temp)
        setcount((prev) => prev - 1)
        localStorage.setItem("quantity",JSON.stringify(temp));


    }

    const addToCart = (id) => {
        setcount2((prev) => prev + 1)
        const result = data.filter((data) => data.id == id)
         console.log(result[0]);

        let mapped=cart.map((cart)=>cart.id)
        console.log(mapped);

        let found=mapped.includes(id)
        // console.log("found",found);

        if(!found)
        {
        let temp;
        temp = result[0]
        setCart([...cart, temp])
        alert("item added to cart")
        }
        else
        {
            alert("item already in the cart");
        }    
    }


    // const addToCart=(index)=>{
    //     setcount2((prev)=>prev+1)        
    //     const result=data.filter((data)=> data.id==index+1)
    //     // console.log(result[0]);

    //     let temp ;
    //     temp=result[0]
    //      setCart([...cart,temp])
    //     alert("item added to cart")
    //     }
    // console.log("array",cart);
    localStorage.setItem("product", JSON.stringify(cart))

    return (
        <div>
            <div className='cartbtn'>
                <Link to='/homepage/cart'>
                    <button >Go to Cart ({count2})</button>
                </Link>
            </div>



            <div className="cls1">
                {
                    data !== null && data.map((data1, index) =>
                        <div className="card" key={index} style={{ width: "18rem", height: "15rem", margin: "10px" }}>
                            {/* <h5 className="card-id">{data!=null && data[index].id}</h5> */}
                            <div>
                                <img src={data[index].image} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                             <h5 className="card-title">{data[index].title}</h5>
                            <p className="card-text">Price - ₹{data[index].price}</p>
                            </div>
                            {/* <button type="button" class="btn btn-primary btn-sm">Small button</button> */}
                            <button className='buybtn' onClick={() => addToCart(data[index].id)} > Add to Cart</button>
                            <button className='plusbtn' onClick={() => increment(index)} >+</button>
                            <label className="qtylbl">{quantity[index]}</label>
                            <button className='minusbtn' onClick={() => decrement(index)}>-</button>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default HomePage