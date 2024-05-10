import React, { useEffect, useState } from 'react'
// import Header from '../Components/Header'
// import StarIcon from '@mui/icons-material/Star';
import OneCartProduct from '../Components/OneCartProduct';
import { useSelector } from 'react-redux';

function Checkout() {

    // var productsInCart = [1, 2, 3, 4, 5]
    const totalItemsInCart = useSelector(
        (state) => state.basket.items
    )
    console.log(totalItemsInCart);

    // const totalPrice = useSelector((state) => state.basket.items)
    const [totalPrice, settotalPrice] = useState(0)
    useEffect(() => {
        if (totalItemsInCart.length > 0) {
            settotalPrice(totalItemsInCart.reduce(
                (total, element) => total + element.price, 0
            ))
        } else {
            settotalPrice(0)
        }
    }, [totalItemsInCart])

    return (
        <div className='Checkout'>
            {/* <Header /> */}
            <div className='checkoutContainer'>
                <div className='cartProducts'>
                    {
                        totalItemsInCart.length === 0 ? (
                            <h1>Your cart is empty</h1>
                        ) : (
                            <>
                                <h1>Number of items present in your cart :  <span style={{ color: "black" }}>{totalItemsInCart.length}</span></h1>
                                <div className='cartProductsList'>
                                    {
                                        totalItemsInCart.map((item, id) => (
                                            <OneCartProduct
                                                key={id}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                                name={item.title}
                                                description={item.description}
                                                productID={item.productID}
                                            />
                                        ))
                                    }


                                    {/* <div className='oneCartProduct'>
                                        <img src='https://images.unsplash.com/photo-1696312869321-34789a3325f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt=''

                                        /> */}


                                    {/* <div className='cartProductActions'>
                                        <button>Remove</button>
                                        <button>Buy</button>
                                    </div> */}

                                </div>

                            </>
                        )
                    }


                </div>
                <div className='cartTotal'>
                    <h1>
                        Cart Amount <br />
                        <span style={{ color: 'orange', fontsize: "40px" }}>
                            ${totalPrice}
                        </span>

                    </h1>
                    <button>Checkout</button>
                </div>
            </div>
        </div >
    )
}


export default Checkout