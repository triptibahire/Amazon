import React, { useState } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function Navbar() {

    const [showNHide, setshowNHide] = useState('none')

    // console.log("showNHide =>", showNHide);

    const handleOpenSidebar = () => {
        //    setshowNHide("show")
        setshowNHide("block")
    }

    const handleCloseSidebar = () => {
        //setshowNHide("")
        setshowNHide("none")
    }
    return (

        <>
            {/* sidebar */}
            <div className="sidebar" id="sidebar" style={{ display: `${showNHide}` }}>
                <div className="sidebar_top">
                    <AccountCircleOutlinedIcon />
                    Hello,sign in
                    <p onClick={handleCloseSidebar}>
                        <CloseIcon style={{ paddingRight: "20px" }} />
                    </p>
                </div>

                <div id="main-container">
                    <div className="sidenavContentHeader">Trending

                    </div>
                    <a href="a">
                        <div className="sidenavContent">Best Sellers</div>
                    </a>
                    <a href="a">
                        <div className="sidenavContent">New Releases</div>
                    </a>
                    <a href="a">
                        <div className="sidenavContent">Movers and Shakers</div>
                    </a>
                    <hr />
                    <div className="sidenavContentHeader">Digital Content And Devices</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon miniTV-FREE entertainment</div>
                            {/* <!-- <i className="fa fa-angle-right" aria-hidden="true"></i> --> */}
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Echo & Alexa</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Fire TV</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Kindle E-Readers & eBooks</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Audible Audiobooks</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon Prime Video</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon Prime Music</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <hr />
                    <div className="sidenavContentHeader">Shop By Category</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Mobiles, Computers</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>TV, Appliances, Electronics</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Men's Fashion</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Women's Fashion</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <hr />

                    <a href="a">
                        <div className="sideRow">
                            <div>Gift Cards & Mobile Recharges</div>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sidenavContentHeader">Programs & Features</div>
                        <div className="sideRow">
                            <div>Amazon Launchpad</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Flight Tickets</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Clearance store</div>
                        </div>
                    </a>
                    {/* <hr> */}
                    <div className="sidenavContentHeader">Help & Settings</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Your Account</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Customer Service</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            Sign in
                        </div>
                    </a>
                </div>
            </div>
            <nav>
                <div onClick={handleOpenSidebar} className="navAll"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <MenuIcon
                        style={{ color: "white" }} />

                    <p style={{ color: 'white', fontsize: '16px', fontWeight: '500 ' }}> All </p>

                </div>
                <p>Mobile</p>
                <p>Amazone Pay</p>
                <p>Beauty & Personal Care</p>
                <p>Amazon miniTv</p>
                <p>Sell</p>
            </nav>
        </>
    )
}

export default Navbar