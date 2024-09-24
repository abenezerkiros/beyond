import React from 'react';
import thumb from '../../assets/images/whyUs.png';

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <span>Beyond</span>
                            <h3 className="title">Why Choose Us?</h3>
                            <p>
                            our platform connects you with experienced designers who bring your vision to life.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Handpicked Designers</h5>
                                    <p>We partner with only the best interior designers, ensuring that each professional in our network meets high standards of quality, creativity, and expertise.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Personalized Matches</h5>
                                    <p>Tell us about your style, space, and budget, and we’ll match you with the right designer who understands your needs and preferences.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">End-to-End Support</h5>
                                    <p>From initial consultations to the final touches, our designers work closely with you every step of the way to ensure a seamless, stress-free experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Transparent Pricing</h5>
                                    <p>No hidden fees or surprises. We provide clear pricing upfront so you can confidently plan your project without any guesswork.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
