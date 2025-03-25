import React from 'react'
import Menu from '../components/Menu'

const Home = () => {
    return (

        <>
            <div style={{minHeight:'100vh'}} className='home-img container-fluid p-0   d-flex justify-content-center align-items-center gap-5'>
               <div> <img className='rotate-image img-fluid w-100' src="./images/food-img.png" alt="" /></div>
                
                    <div>
                        <h1 className='text-center'>WELCOME TO HUNGRYHUB</h1>
                        <p className='text-center'>"Indulge in the flavors you love with our food menu app! Explore our curated selection of mouth-watering dishes, from savory burgers to sweet treats"</p>
                    </div>            
            </div>
            <div>
            <img className='img-fluid w-100' src="./images/rectangle-img.png" alt="" />
            </div>

            <div className='d-flex justify-content-evenly align-items-center'>
                <img src="./images/img1.png" alt="" />
                <h4>Explore our website for more food menus</h4>
                <img src="./images/img2.png" alt="" />
            </div>

            <section id='menu'>
                <Menu />
            </section>

            <div>
            <img className='img-fluid w-100 mt-5' src="./images/rectangle-img.png" alt="" />
            </div>

            <section id='contact'>
                <div className='d-flex flex-wrap justify-content-evenly align-items-center mt-5'>
                    <div style={{ width: "250px", height: "130px" }} className='text-center border rounded p-3'>
                        <h6 className='text-primary'>CONTACT US</h6>
                        <p><i class="fa-solid fa-phone"></i> 9889568947</p>
                        <p><i class="fa-regular fa-envelope"></i> info@deepnest.com</p>
                    </div>
                    <div style={{ width: "250px", height: "130px" }} className='text-center border rounded p-3'>
                        <h4 className='text-primary'>HUNGRY HUB</h4>
                        <div className='d-flex justify-content-evenly align-items-center'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div style={{ width: "250px", height: "130px" }} className='text-center border rounded p-3'>
                        <h6 className='text-primary'>FIND US</h6>
                        <p><i class="fa-solid fa-location-dot"></i> First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
                    </div>
                </div>

            </section>
            <div style={{ height: '50px' }} className="copyright text-center mt-5 pt-3">
                <p className='text-white'> &#169; 2024 HungryHub, All rights reserved </p>
            </div>
        </>

    )
}

export default Home