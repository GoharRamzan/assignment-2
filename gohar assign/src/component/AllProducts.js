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

const products = [
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
        <h1>Elevate Your Living Room</h1>
        <div className="container">
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-4">
                        <div className="card card2">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <p>{product.title}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p>{product.price}</p>
                                    <FaCartShopping />
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
