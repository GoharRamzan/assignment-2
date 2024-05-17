import comfortable from '../assets/comfortable.webp';
import lamp from '../assets/lamp.webp';
import chair from '../assets/sofa chair.jpeg';
import '../css/Living.css'
import { FaCartShopping } from "react-icons/fa6";

function Living() {

    let cards = [
        {
            image: comfortable,
            title: 'Comfortable Sofa',
            price: '$14.99'
        },
        {
            image: lamp,
            title: 'Good Looking Lamp',
            price: '$16.88'
        },
        {
            image: chair,
            title: 'Beautiful Sofa Chair',
            price: '$99.99'
        },
    ]
    return (
        <section>
            <div className="main">
                <h1>Elevate Your Living Room</h1>
                <div className="container">
                    <div className="row">
                        {cards.map((x) => (
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="card h-75" >
                                    <img src={x.image} className="card-img-top  h-75 " alt="..."></img>
                                        <div className="card-body">
                                            <p>{x.title}</p>
                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                            <p>{x.price}</p> <span><FaCartShopping /></span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Living