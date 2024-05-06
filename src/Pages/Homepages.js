import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
// import OneCartProduct from '../Components/OneCartProduct'
import OneProduct from '../Components/OneProduct'
// import sidebar from '../'
function Homepages() {

    const [allPrducts, setallProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                // FOLLOWING WAY ADDS ENTIRE ARRAY TO 
                setallProducts(data.products)
                console.log(data.products)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // console.log(allPrducts);

    return (
        <div>

            {/* <!-- header --> */}
            <Header />

            {/* <!-- navbar --> */}
            <Navbar />




            {/* <!-- image --> */}
            <div className="AmazonImage">
                <img src="./Amaz.jpg" alt='' />
            </div>


            {/* <!-- products --> */}

            <div className="products" id="products">
                {
                    allPrducts.map((product, index) => (
                        <OneProduct
                            key={index}
                            category={product.category}
                            image={product.images[0]}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                            description={product.description}
                            productID={product.id}
                        />

                    ))
                }

            </div>



        </div>

    );
}

export default Homepages