import React from 'react'
import '../App.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
function Header() {
    const totalCartItems = useSelector(
        (state) => state.basket.items.length
    )
    return (
        <header>
            {/* <!-- logo --> */}
            <div className="headerData">
                <img src={require('../Images/Amazon.png.png')} alt="" />
            </div>

            {/* <!-- location --> */}
            <div className="headerData tohide">
                < LocationOnIcon
                    style={{ fontSize: '30px', color: 'white' }}

                // <i className="fa fa-map-marker"
                //     style={{ fontSize: '20px', color: 'white' }}>
                // </i>
                />
                <div className="headerText">
                    <p>Deliver to Tripti</p>
                    <h3>Nagpur</h3>
                </div>
            </div>

            {/* <!-- search bar --> */}
            <div className="searchBar">
                <input type="text" placeholder="Search.Amazon.in" />
                <SearchIcon
                    style={{ color: "black", fontsize: "30px", padding: "10px", backgroundColor: "chocolate" }}

                // <i className="fa fa-search"
                //     style={{ color: "black", fontsize: "20px", padding: "10px", backgroundColor: "chocolate" }}
                //     aria-hidden="true"></i>

                />
            </div>



            {/* <!-- account --> */}
            <div className="headerData tohide">
                <div className="headerText">
                    <p>Hello Tripti</p>
                    <h3>Accounts & Lists</h3>
                </div>
                {/* ArrowDropDown */}
                <ArrowDropDownIcon
                    style={{ color: "white", fontsize: "20px", marginleft: "5px" }}
                />

                <i className="fa fa-caret-down"
                    style={{ color: "white", fontsize: "20px", marginleft: "5px" }}

                    aria-hidden="true"></i>
            </div>



            {/* <!-- returns & orders --> */}
            <a href="./SignIn.html">
                <div className="headerData tohide">
                    <div className="headerText">
                        {/* <!-- <p>Returns</p> --> */}
                        <h3>Logout</h3>
                    </div>

                </div>
            </a>

            {/* <!-- cart --> */}
            <div className="headerData tohide">
                <ShoppingCartIcon
                    style={{ color: "white", fontsize: "45px", marginRight: "5px" }}

                // <i className="fa fa-shopping-cart"
                //     style={{ color: "white", fontsize: "45px" }}
                //     aria-hidden="true">
                // </i>
                />
                <h3>{totalCartItems}</h3>
            </div>

        </header>

    )
}

export default Header