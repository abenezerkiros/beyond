import React from 'react';
import { Link } from 'react-router-dom';
import heroThumbOne from '../../assets/images/hero1.png';
import heroThumbTwo from '../../assets/images/hero2.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeFour from '../../assets/images/shape/shape-4.png';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Beyond</span>
                                <h1 className="appie-title">
                                Your One-Stop Interior Design Solution
                                </h1>
                                <p>
                                we make it easy to find the perfect interior design professional for your space. Whether you’re renovating a single room, designing your dream home, or refreshing your office, our platform connects you with experienced designers who bring your vision to life.
                                </p>
                                <ul>
                                    <li>
                                        <Link to="/signup">
                                        <i class="	fas fa-arrow-right"/>Customer Signup
                                         </Link>
                                    </li>
                                    <li>
                                        <Link className="item-2" to="/signup">
                                        <i class="	fas fa-arrow-right"/> vendor Signup
                                            
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroThumbOne} alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumbTwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
