import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../Store/Slices/basketSlice'

function OneProduct(props) { //props receiving

    //props destructuring
    const { category, image, price, rating, title, description, productID } = props


    const dispatch = useDispatch()
    const handleAddToCart = () => {
        const productData = { category, image, price, rating, title, description, productID }
        dispatch(addToBasket(productData))

    }

    return (
        <div>
            <div className='oneProduct'>
                <p> {category}</p>
                <img src={image} alt={image} />
                <div className='ratingAndPrice'>
                    <h1>&#x20B9; {price}</h1>
                    <h3>Rating : {Math.round(rating)}</h3>
                </div>
                <h2>
                    {title}
                </h2>
                <h4>
                    {description}
                </h4>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default OneProduct