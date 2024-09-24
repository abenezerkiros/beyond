import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/Hworks1.png';
import thumb1 from '../../assets/images/Hworks2.png';
import thumb2 from '../../assets/images/Hworks3.png';
import thumb3 from '../../assets/images/Hworks4.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeOne({ className }) {
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`appie-features-area pt-100 ${className}`} id="features">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="appie-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-comment-dots" /> Submit Your Project
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-handshake" />Matched with Designers
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'notice')}
                                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-pencil-ruler" /> Collaborate and Design
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'app')}
                                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                                    id="v-pills-settings-tab"
                                    data-toggle="pill"
                                    href="#v-pills-settings"
                                    role="tab"
                                    aria-controls="v-pills-settings"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-hard-hat" /> Transform Your Space
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>How it works</span>
                                            <h3 className="title">
                                            Submit Your Project
                                            </h3>
                                            <p>
                                            Share the details of your project with us—whether it’s a full home redesign, a kitchen remodel, or an office makeover.
                                            </p>
                                            <Link className="main-btn" to="/signup">
                                                Signup
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>How it works</span>
                                            <h3 className="title">
                                            Get Matched with Top Designers
                                            </h3>
                                            <p>
                                            Based on your preferences and budget, we’ll connect you with a curated selection of interior designers. Browse their portfolios and choose the one that fits your vision.
                                            </p>
                                            <Link className="main-btn" to="/signup">
                                                Signup
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'notice' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>How it works</span>
                                            <h3 className="title">
                                            Collaborate and Design
                                            </h3>
                                            <p>
                                            Work closely with your chosen designer to develop a custom design plan. Review sketches, mood boards, and 3D renderings to see your space come to life.
                                            </p>
                                            <Link className="main-btn" to="/signup">
                                                Signup
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb3} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>How it works</span>
                                            <h3 className="title">
                                            Transform Your Space
                                            </h3>
                                            <p>
                                            Sit back and relax as your designer oversees the entire project, from concept to completion, ensuring everything goes smoothly and according to plan.
                                            </p>
                                            <Link className="main-btn" to="/signup">
                                                Sign up
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeOne;
