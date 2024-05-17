import '../css/Footer.css'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CgArrowTopRight } from "react-icons/cg";

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-12 col-lg-3 col-md-3 mt-4'>
                            <h2>furnilux</h2>
                            <p>lorem ipsum sit dolar amit bachan sahab jiye bhutto</p>
                            <div className='icons'>

                                <IoCall /> <span>+92 381767677</span><br />
                                <MdEmail /><span> furnilux@gmail.com</span><br />

                                <IoLocationSharp /><span style={{ fontSize: "15px" }}>  123 site #45 street region, Pakistan</span>


                            </div>

                        </div>

                        <div className='col-sm-12 col-12 col-lg-3 col-md-3 mt-4'>
                            <h2>About Us</h2>
                            <p className='hoverP'><span><CgArrowTopRight />About US</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Contact Us</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Blogs</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Popular Questions</span></p>

                        </div>

                        <div className='col-sm-12 col-12 col-lg-3 col-md-3 mt-4'>
                        <h2>Whats Popular</h2>
                            <p className='hoverP'><span><CgArrowTopRight />Decorative Lab</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Luxury Bed</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Soft Sofa</span><br /></p>
                            <p className='hoverP'><span><CgArrowTopRight />Wodden Shelf</span></p>

                        </div>

                        <div className='col-sm-12 col-12 col-lg-3 col-md-3 mt-4'>
                        <h2>Get 50% Off Your First Order</h2>
                        <p>lorem ipsum ono dos tress wash mallay wimal la wa mash baya</p>
                        
                       <p className='input-tag'><span>Emal address</span><button style={{borderRadius:"20px", background:"lightgrey", padding:"5px"}}>Subscribe</button></p>
                           
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Footer;