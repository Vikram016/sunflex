import React, { useEffect } from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import { star, shield, send } from "../assets"; // Reusing existing icons if appropriate, or just using text/emojis if specific icons aren't available

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 z-[0] w-[40%] h-[40%] text-white white__gradient opacity-20" />
            <div className="absolute top-0 right-0 z-[0] w-[50%] h-[50%] blue__gradient opacity-20" />
            <div className="absolute bottom-0 left-0 z-[0] w-[50%] h-[50%] pink__gradient opacity-20" />

            {/* Hero Section */}
            <div className={`bg-primary ${styles.flexStart} flex-col relative z-[1]`}>
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full py-16 text-center`}>
                    <h1 className={`${styles.heading2} mb-6`}>
                        Energize Your Career with <br className="hidden sm:block" />
                        <span className="text-gradient">Sunflex Global Energy</span>
                    </h1>
                    <p className={`${styles.paragraph} text-center max-w-[800px] mx-auto`}>
                        Join Our Team of Power Generation Experts!
                    </p>
                </div>

                {/* About Us Intro */}
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full mb-20`}>
                    <div className="bg-black-gradient-2 rounded-[20px] p-8 md:p-12 box-shadow border border-[#3F3E45] relative overflow-hidden">
                        {/* Gradient for Card */}
                        <div className="absolute -top-[50%] -left-[50%] w-[100%] h-[100%] rounded-full white__gradient opacity-10" />

                        <div className="relative z-10">
                            <h2 className={`${styles.heading2} text-[30px] mb-6`}>About Us</h2>
                            <p className={`${styles.paragraph} mb-6`}>
                                Sunflex Global Energy stands at the forefront of power generation staffing, bridging exceptional talent with cutting-edge technologies from leading companies like Siemens, GE, and Mitsubishi.
                            </p>
                            <p className={`${styles.paragraph}`}>
                                We're not just a staffing firm; we're your gateway to a career in power generation excellence. Specializing in the Construction, Commissioning, Operation & Maintenance, and Outage Overhaul Field Service within the Energy Sector, we offer unparalleled opportunities for growth and development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Who We Serve & Why Sunflex */}
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full grid md:grid-cols-2 gap-10 mb-20`}>
                    <div className="flex flex-col bg-dimBlue/20 p-6 rounded-[20px] border border-dimBlue/10 hover:border-secondary/50 transition-colors">
                        <h3 className="text-white font-poppins font-semibold text-[24px] mb-4 border-l-4 border-secondary pl-4">
                            Who We Serve
                        </h3>
                        <p className={styles.paragraph}>
                            Our diverse clientele ranges from Owner/Operators to EPC Contractors, Sub-Contractors, and Owners Engineers. With a focus on both permanent and contract staffing solutions, we're committed to excellence across every project and placement.
                        </p>
                    </div>

                    <div className="flex flex-col bg-dimBlue/20 p-6 rounded-[20px] border border-dimBlue/10 hover:border-secondary/50 transition-colors">
                        <h3 className="text-white font-poppins font-semibold text-[24px] mb-4 border-l-4 border-secondary pl-4">
                            Why Sunflex Global Energy?
                        </h3>
                        <p className={styles.paragraph}>
                            Our commitment to excellence, combined with an extensive network and deep industry understanding, positions us uniquely to meet your evolving needs. Join us in our journey towards empowering the energy sector with top talent.
                        </p>
                    </div>
                </div>

                {/* Roles & Industries */}
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full mb-20`}>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Roles */}
                        <div className="flex-1 bg-black-gradient rounded-[20px] p-8 border border-gray-700 hover:border-secondary transition-colors duration-300 shadow-lg">
                            <h3 className="text-white font-poppins font-semibold text-[24px] mb-6 flex items-center">
                                <span className="text-2xl mr-3 bg-dimBlue rounded-full p-2">🛠️</span> Roles We Specialize In
                            </h3>
                            <ul className="list-none text-dimWhite font-poppins space-y-3">
                                {['Project Directors & Managers', 'Site/Construction Managers', 'Commissioning Engineers & Supervisors', 'Technical Field Advisors (TFA)', 'Overhaul Service Engineers & Supervisors', 'HSE/EHS/QHSE Managers/Advisors', 'QA/QC Managers/Engineers', 'Project Planners, Estimators, QS', 'Operations and Maintenance Staff'].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-secondary mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div className="flex-1 bg-black-gradient rounded-[20px] p-8 border border-gray-700 hover:border-secondary transition-colors duration-300 shadow-lg">
                            <h3 className="text-white font-poppins font-semibold text-[24px] mb-6 flex items-center">
                                <span className="text-2xl mr-3 bg-dimBlue rounded-full p-2">🏭</span> Industries We Cover
                            </h3>
                            <ul className="list-none text-dimWhite font-poppins space-y-3">
                                {['Gas and Steam Turbines, Generators, HRSG', 'Cogeneration, CCPP, CCGT', 'Power Transmission & Distribution', 'Substations, Overhead Lines, and Cables'].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-secondary mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full mb-20`}>
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[20px] p-10 relative overflow-hidden text-center border-t border-dimWhite/20">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-400 opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400 opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

                        <h2 className={`${styles.heading2} mb-4 relative z-10`}>Join Us Today</h2>
                        <p className={`${styles.paragraph} max-w-[700px] mx-auto mb-10 relative z-10`}>
                            Are you ready to power up your career with Sunflex Global Energy? We're looking for ambitious professionals eager to make a mark in the energy sector.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                            <div className="bg-primary/80 backdrop-blur-sm p-6 rounded-[10px] border border-dimWhite flex-1 max-w-[400px] hover:translate-y-[-5px] transition-transform">
                                <h4 className="text-white font-semibold text-[18px] mb-2">For Job Seekers</h4>
                                <p className="text-dimWhite text-[14px] mb-4">
                                    Submit your resume and unlock a world of career opportunities.
                                </p>
                                <a href="mailto:resume@sunflexglobal.com" className="text-secondary font-semibold hover:text-white transition-colors">
                                    resume@sunflexglobal.com
                                </a>
                            </div>

                            <div className="bg-primary/80 backdrop-blur-sm p-6 rounded-[10px] border border-dimWhite flex-1 max-w-[400px] hover:translate-y-[-5px] transition-transform">
                                <h4 className="text-white font-semibold text-[18px] mb-2">For Businesses</h4>
                                <p className="text-dimWhite text-[14px] mb-4">
                                    In need of customized staffing solutions? Let us help you.
                                </p>
                                <a href="mailto:admin@sunflexglobal.com" className="text-secondary font-semibold hover:text-white transition-colors">
                                    admin@sunflexglobal.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full mb-10 text-center`}>
                    <p className="text-dimWhite font-poppins">
                        <span className="text-white font-semibold">Contact:</span> Jeya, HR Manager | Sunflex Global Energy Pvt Ltd
                    </p>
                    <p className="text-gradient font-bold mt-2 text-[18px]">
                        Join Sunflex Global Energy and be a part of powering the future!
                    </p>
                </div>

                <div className={`${styles.boxWidth} ${styles.paddingX} w-full`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
