import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const PostCVPage = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [selectedArea, setSelectedArea] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const generatePDF = (formData) => {
        const doc = new jsPDF();
        let y = 10;

        doc.setFontSize(18);
        doc.text("Candidate Application", 10, y);
        y += 10;

        doc.setFontSize(12);
        formData.forEach((value, key) => {
            if (key !== 'resume' && value) {
                const splitText = doc.splitTextToSize(`${key}: ${value}`, 180);
                doc.text(splitText, 10, y);
                y += (7 * splitText.length);
            }
            if (key === 'resume' && value.name) {
                doc.text(`Resume File: ${value.name}`, 10, y);
                y += 7;
            }
        });

        return doc.output('blob');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(form.current);

        // EmailJS credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPLICATION;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                const pdfBlob = generatePDF(formData);
                const pdfUrl = URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = `Application_${formData.get('first_name')}_${formData.get('last_name')}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                e.target.reset();
                setSelectedArea('');
                setShowSuccess(true);
                window.scrollTo(0, 0);
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send application. Please try again or contact support.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const ExperienceRow = ({ title, prefix }) => (
        <div className="flex flex-col gap-4 mb-6 border-b border-dimWhite pb-6">
            <h4 className="text-white font-poppins font-medium">{title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Mechanical', 'Electrical', 'I&C', 'DCS - SPPA - T3000'].map((disc) => (
                    <label key={disc} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name={`${prefix}_${disc.replace(/\s+/g, '')}`} className="form-checkbox text-secondary rounded bg-dimBlue border-dimWhite" />
                        <span className="text-dimWhite font-poppins text-[14px]">{disc}</span>
                    </label>
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    name={`${prefix}_Company`}
                    placeholder="Company Name"
                    className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary flex-1 placeholder:text-gray-500"
                />
                <input
                    type="number"
                    name={`${prefix}_Years`}
                    placeholder="Exp in Years"
                    className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary w-full md:w-[150px] placeholder:text-gray-500"
                />
            </div>
        </div>
    );

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">

            {/* Success Popup */}
            {showSuccess && (
                <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-black-gradient-2 p-8 rounded-[20px] box-shadow border border-secondary flex flex-col items-center text-center max-w-[400px] animate-scale-up">
                        <div className="w-[80px] h-[80px] rounded-full bg-green-500 flex justify-center items-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                            <span className="text-white text-[40px]">✓</span>
                        </div>
                        <h2 className="text-white font-poppins font-bold text-[32px] mb-6">Success!</h2>
                        <button
                            onClick={() => navigate('/')}
                            className="py-3 px-8 bg-red-600 font-poppins font-bold text-[18px] text-white outline-none rounded-[10px] hover:bg-red-700 transition-colors shadow-lg"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            )}

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} flex-col`}>
                <div className={`${styles.boxWidth} ${styles.paddingX} w-full py-16 text-center`}>
                    <h1 className={`${styles.heading2} mb-6`}>
                        Send us your CV
                    </h1>
                    <p className={`${styles.paragraph} max-w-[800px] mx-auto mb-10`}>
                        Join our team of experts. Please fill out the form below to submit your application.
                    </p>

                    <div className="bg-black-gradient-2 p-8 rounded-[20px] box-shadow border border-[#3F3E45] max-w-[1000px] mx-auto text-left">
                        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-white font-poppins mb-2">Name</label>
                                    <input type="text" name="first_name" required className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary placeholder:text-gray-500" placeholder="First Name" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-white font-poppins mb-2">Last Name</label>
                                    <input type="text" name="last_name" required className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary placeholder:text-gray-500" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-white font-poppins mb-2">Email</label>
                                    <input type="email" name="email" required className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary placeholder:text-gray-500" placeholder="john@example.com" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-white font-poppins mb-2">Phone</label>
                                    <input type="tel" name="phone" required className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary placeholder:text-gray-500" placeholder="+1234567890" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-white font-poppins mb-2">Resume / CV</label>
                                <input type="file" name="resume" required className="p-2 text-black font-poppins border border-dimWhite rounded bg-white" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-white font-poppins mb-2">How many years of experience in power sector?</label>
                                <input type="number" name="total_years_exp" required className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary placeholder:text-gray-500" placeholder="e.g. 5" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-white font-poppins mb-2">
                                    In which area you have more experience in power sector?
                                </label>
                                <select
                                    name="experience_area"
                                    className="p-3 rounded bg-white text-black outline-none border border-dimWhite focus:border-secondary"
                                    value={selectedArea}
                                    onChange={(e) => setSelectedArea(e.target.value)}
                                    required
                                >
                                    <option value="">Select an area</option>
                                    <option value="Installation_Commissioning">Installation | Commissioning</option>
                                    <option value="Power_FieldService">Power - Field Service</option>
                                    <option value="OilGas_FieldService">Oil and Gas - Field Service</option>
                                </select>
                            </div>

                            {selectedArea && (
                                <div className="bg-dimBlue/10 p-6 rounded-[10px] border border-dimWhite/20 mt-4 animate-slide-bottom">
                                    <h3 className="text-secondary font-poppins font-semibold text-[20px] mb-6">
                                        {selectedArea.replace(/_/g, ' ')} Details
                                    </h3>

                                    <ExperienceRow
                                        title="GT / 2000E / 4000F / 5000F / 8000H / V94"
                                        prefix={`${selectedArea}_GT`}
                                    />

                                    <ExperienceRow
                                        title="SSST 700 / 900"
                                        prefix={`${selectedArea}_SSST`}
                                    />
                                </div>
                            )}

                            <div className="flex justify-center mt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`py-4 px-10 bg-red-gradient font-poppins font-bold text-[18px] text-white outline-none rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-50`}
                                >
                                    {loading ? 'Submitting...' : 'Send'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className={`${styles.boxWidth} ${styles.paddingX} w-full`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PostCVPage;
