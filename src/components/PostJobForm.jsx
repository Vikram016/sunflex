import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';

const PostJobForm = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // EmailJS credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_POSTJOB;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Job posted successfully! We will review it shortly.');
                navigate('/');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send. Please try again or contact support.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="bg-primary w-full overflow-hidden">

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} mt-10`}>
                <div className={`${styles.boxWidth} ${styles.paddingX}`}>

                    <div className="flex justify-between items-center mb-10">
                        <h1 className={`${styles.heading2} text-center`}>Post a New Job</h1>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[800px] mx-auto bg-black-gradient-2 p-8 rounded-[20px] box-shadow mb-20">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col">
                                <label className="text-white font-poppins mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label className="text-white font-poppins mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col">
                                <label className="text-white font-poppins mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                    placeholder="+1234567890"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white font-poppins mb-2">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                required
                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                placeholder="Your Company Co."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white font-poppins mb-2">Job Title</label>
                            <input
                                type="text"
                                name="job_title"
                                required
                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                placeholder="Senior Engineer"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white font-poppins mb-2">Job Description</label>
                            <textarea
                                name="job_description"
                                required
                                rows="4"
                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                placeholder="Describe the role..."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white font-poppins mb-2">Requirements</label>
                            <textarea
                                name="requirements"
                                rows="3"
                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                placeholder="Skills, experience, etc..."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white font-poppins mb-2">Attachment (Optional)</label>
                            <input
                                type="file"
                                name="my_file"
                                className="p-2 text-white font-poppins"
                            />
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-50`}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PostJobForm;
