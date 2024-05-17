import React from 'react';
import comfortable from '../assets/comfortable.webp';
import lamp from '../assets/lamp.webp';
import chair from '../assets/sofa chair.jpeg';
import bed from '../assets/bed image.webp';
import lampImage from '../assets/lamp image.webp';
import dressor from '../assets/dressor image.webp';
import shelf from '../assets/shelf image.jpg';
import sofaChair from '../assets/sofa chair.jpeg';
import sofa from '../assets/sofa image.webp';
import '../css/AllProducts.css';
import { FaCartShopping } from "react-icons/fa6";

const cards = [
    { image: comfortable, title: 'Comfortable Sofa', price: '$14.99' },
    { image: lamp, title: 'Good Looking Lamp', price: '$16.88' },
    { image: chair, title: 'Beautiful Sofa Chair', price: '$99.99' },
    { image: bed, title: 'Comfortable bed', price: '$299' },
    { image: lampImage, title: 'Good Looking Lamp', price: '$16.88' },
    { image: dressor, title: 'Beautiful Sofa Chair', price: '$99.99' },
    { image: shelf, title: 'Comfortable Sofa', price: '$14.99' },
    { image: sofaChair, title: 'Good Looking Lamp', price: '$16.88' },
    { image: sofa, title: 'Beautiful Sofa Chair', price: '$99.99' },
];

const AllProducts = () => (
    <section className="main2">
        <h1>All Products</h1>
        <div className="container">
            <div className="row h-50">
            {cards.map((x) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="card  card2" >
                                    <img src={x.image} className="card-img-top2  h-75 " alt="..."></img>
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
    </section>
);

export default AllProducts;
