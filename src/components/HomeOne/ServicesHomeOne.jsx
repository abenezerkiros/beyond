import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                            Our Services
.
                            </h3>
                            <p>Start your interior design journey with Beyond today. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <i className='	fas fa-bed'/>
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Residential Interior Design</h4>
                            <p>Transform your home into a stylish, functional space that reflects your personality and lifestyle.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <i className='fas fa-briefcase'/>
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Outdoor and Landscape Design</h4>
                            <p>Planning stylish outdoor living areas. eveloping landscape and outdoor lighting plans to enhance outdoor areas.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <i className='fas fa-lightbulb'/>
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Renovations and Remodeling</h4>
                            <p>Refresh your space with expertly planned renovations and remodeling that elevate both form and function.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                               <i className="fas fa-desktop"/>
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Virtual Consultations</h4>
                            <p>Can’t meet in person? No problem! Our designers offer virtual consultations, making it easy to collaborate from anywhere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
