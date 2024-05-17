import '../css/Navbar.css'
import { FaArrowRight } from "react-icons/fa6";
import sofaImage from '../assets/sofa image.webp'
import bedImage from '../assets/bed image.webp';
import dressor from '../assets/dressor image.webp';
import lamp from '../assets/lamp image.webp';
import shelf from '../assets/shelf image.jpg';
import decor from '../assets/decor image.jpg'


function Navbar() {

    let boxes = [
        {
            image: sofaImage,
            title: 'Sofa'
        },
        {
            image: bedImage,
            title: 'Bed'
        },
        {
            image: dressor,
            title: 'Dressor'
        },
        {
            image: lamp,
            title: 'Lamp'
        },
        {
            image: shelf,
            title: 'Shelf'
        },
        {
            image: decor,
            title: 'Decor'
        },
    ]



    return (
        <>
            <section className="mainSection" >
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                        <a className="navbar-brand me-5 ms-3 text-info fs-2" href="#">furniLux</a>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item me-5 ms-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item me-5 ms-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Categories</a>
                                </li>
                                <li className="nav-item me-5 ms-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">About US</a>
                                </li>
                                <li className="nav-item me-5 ms-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Blogs</a>
                                </li>
                                <li className="nav-item  ms-4 me-5">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Contact US</a>
                                </li>

                                <button type="button" className="btn btn-outline-info ms-4 me-5">Login</button>
                                <button type="button" className="btn btn-outline-info ms-4 me-5">Sign Up</button>

                            </ul>

                        </div>

                    </div>
                </nav>

                <div className='main-section text-white'>
                    <div className='conatiner'>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-lg-6 col-md-6'>
                                <div className='ms-5 text-center'>
                                    <h1 className='heading mt-5'>FurniLus - Your Brand for <br /> Stylish Living</h1>
                                    <p className='text-center fs-6 mt-4'>lorem ipsum sit dolar sir umer sharif comedian sir chahat fateh ali khan legendary spinner mushtaq ahmed and the gratest developer Sir Abdul Basit</p>
                                    <button type="button" className="btn main-section-btn text-white btn-sm">Shop Now <FaArrowRight /></button>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <div className='boxes'> 
                <div className='boxes-inner'>

                    {boxes.map((x) => (
                       
                        <div className='col-12 col-sm-12 col-lg-2 col-md-2  box'>
                            
                            <img src={x.image} className='h-75 w-50'></img>
                            <span className=' ms-2'>{x.title}</span>
                        </div>
                        
                    ))

                    }

                </div>



            </div>
        </>
    )
}
export default Navbar;