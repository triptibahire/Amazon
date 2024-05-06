// import React, { useEffect, useState } from 'react';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../Store/Slices/basketSlice';

function OneCartProduct(props) {

    const {
        image, name, price, description, rating, productID

        // category,
        // image,
        // price,
        // rating,
        // title,
        // description,
        // productID
    } = props

    console.log(props);

    // const [roundRating, setroundRating] = useState()

    // useEffect(() => {
    //     setroundRating(Math.round(rating))
    // }, [rating])

    const dispatch = useDispatch()

    const handleRemoveProduct = () => {
        const oneCartProduct = { image, name, price, description, rating, productID }
        dispatch(removeFromBasket(oneCartProduct))
    }
    return (
        <div>
            <div className='oneCartProduct'>
                <img
                    src={image}
                    alt=''
                />
                <div className='carProductData'>
                    <h1>{name}</h1>
                    <h1>{price}</h1>

                    <p>{description}</p>
                    <div className='cardProductRating'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                </div>
                <div className='cartProductActions'>
                    <button onClick={handleRemoveProduct}>Remove</button>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default OneCartProduct 