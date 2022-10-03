import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='bg-light sticky-top'>
                <div className=' sticky-top bg-light'>
                    <div className='navbar container'>
                        <img src='https://wishlistmember.com/wp-content/uploads/2021/08/fluentCRM.png' style={{ width: "50px", borderRadius: "5px" }}></img>
                        <div>
                            <ul className='navbar nav-list'>
                                <li className='me-5'><Link className='li-link-auth' to={'/Login'}>Login</Link></li>
                                <li className='me-5'><Link className='li-link-auth ' to={'/SignIn'}>SignUp</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='content-div'>
                <div className=' content text container'>
                    <div className='col-12'>
                        <h1 className='pt-3 text' style={{ fontSize: "30px" }}>The real customer centric CRM</h1>
                        <h4 className='pt-2 text' style={{ fontSize: "30px" }}>Track leads, close opportunities
                            and get accurate forecasts.</h4>
                            <h4 className='pt-3'>The complete package to set teams up for success</h4>
                            <h4 className='pt-3'>Xendit sees agent productivity  increase 112% with fluentCRM</h4>
                        <div>
                            <Link to={'/SignIn'} className='mt-3 content-btn text-light li-link-auth'>Start Now - It's Free</Link>
                            <p style={{ fontSize: "20px" }} className='mt-3 text'>Free,forever,with unlimited users.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='home-div-2 text-center'>
                <div className=' clearfix'>
                <img src='admin2.png' className='home-img col-md-6 float-md-end mb-3 ms-md-3 '></img>
            </div>
            <div style={{ height: "15rem" }}>

            </div>
            <div className=' clearfix'>

                <img src='user.png' className='home-img col-md-6 float-md-start mb-3 ms-md-3 me-5'></img>

            </div>
            <div style={{ height: "15rem" }}>

            </div>
            <div className=' clearfix'>

                <img src='admin.png' className='home-img col-md-6 float-md-end mb-3 ms-md-3'></img>
            </div>
 

            </div>
            <div className='footer  text-center p-5'>
                <div className=''>
                    <h5 className='text'>Customer service success starts here <Link to={'/SignIn'} className='edit_btn'>SignIn</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default Home