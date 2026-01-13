import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { JobOpen } from '../constants';
import { logo } from '../assets'; // Assuming logo can be used as a placeholder or company icon

const JobSearchPage = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleApply = (job) => {
        setSelectedJob(job);
        setTimeout(() => {
            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert(`Application for ${selectedJob.role} submitted successfully!`);
                setSelectedJob(null);
                window.scrollTo(0, 0);
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send application. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* Hero / Welcome Section */}
            <div className={`bg-primary ${styles.flexStart} mt-10`}>
                <div className={`${styles.boxWidth} ${styles.paddingX} flex flex-col items-center`}>
                    <div className="text-center mb-12">
                        <h1 className={`${styles.heading2} text-center`}>
                            Find Your <span className="text-gradient">Dream Job</span> Today
                        </h1>
                        <p className={`${styles.paragraph} text-center max-w-[700px] mt-4 mx-auto`}>
                            Explore the best opportunities in the energy sector. We connect talented professionals with top-tier companies worldwide.
                        </p>

                        {/* Employer CTA */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/post-job-form">
                                <button className={`py-3 px-6 bg-dimBlue font-poppins font-medium text-[16px] text-white outline-none rounded-[10px] border border-dimWhite hover:bg-white hover:text-primary transition-colors`}>
                                    Are you an Employer? Post a Job
                                </button>
                            </Link>
                        </div>
                    </div>


                    {/* Job Listings */}
                    <div className="w-full">
                        <h2 className="font-poppins font-semibold text-[32px] text-white mb-6 border-b border-dimWhite pb-2">
                            Latest Opportunities
                        </h2>

                        {JobOpen.length === 0 ? (
                            <p className={`${styles.paragraph} text-center py-20`}>
                                No current openings. Please check back later or send us your CV directly.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                                {JobOpen.map((job) => (
                                    <div key={job.id} className="flex flex-col p-6 rounded-[20px] bg-black-gradient-2 box-shadow hover:scale-105 transition-transform duration-300 border border-[#3F3E45]">
                                        <div className="flex flex-row items-center mb-4">
                                            <div className="w-[50px] h-[50px] rounded-full bg-dimBlue flex justify-center items-center object-contain overflow-hidden">
                                                {/* Placeholder icon or use company logo if available in data */}
                                                <span className="text-2xl">💼</span>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-poppins font-semibold text-[18px] text-white">
                                                    {job.role}
                                                </h3>
                                                <p className="font-poppins font-normal text-[14px] text-dimWhite">
                                                    {job.company}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="font-poppins font-normal text-[14px] text-dimWhite mb-4 flex items-center bg-primary rounded px-2 py-1 w-fit">
                                            <span className="mr-2">📍</span>{job.location} | Full Time
                                        </p>

                                        <div className="flex-1 mb-6">
                                            <p className="font-poppins text-[14px] text-gray-300 line-clamp-4 leading-[24px]">
                                                {job.Responsibilities}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => handleApply(job)}
                                            className={`py-3 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] w-full mt-auto`}
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Application Form Overlay */}
                    {selectedJob && (
                        <div id="application-form" className="w-full mb-20 animate-slide-top border border-[#3F3E45] rounded-[20px]">
                            <div className="bg-black-gradient p-8 rounded-[20px] box-shadow max-w-[800px] mx-auto">
                                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                                    <div>
                                        <h2 className={`${styles.heading2} text-[28px]`}>
                                            Apply for <span className="text-gradient">{selectedJob.role}</span>
                                        </h2>
                                        <p className="text-dimWhite mt-1">at {selectedJob.company}</p>
                                    </div>
                                    <button onClick={() => setSelectedJob(null)} className="text-white bg-dimBlue w-10 h-10 rounded-full hover:bg-red-500 transition-colors">✕</button>
                                </div>

                                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <input type="hidden" name="job_role" value={selectedJob.role} />
                                    <input type="hidden" name="company_name" value={selectedJob.company} />

                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1 flex flex-col">
                                            <label className="text-white font-poppins mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                required
                                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <label className="text-white font-poppins mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                required
                                                className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-white font-poppins mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            required
                                            className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-white font-poppins mb-2">Cover Letter / Message</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            className="p-3 rounded bg-dimBlue text-white outline-none border border-dimWhite focus:border-secondary"
                                            placeholder="Tell us why you're a great fit..."
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-white font-poppins mb-2">Resume/CV (File)</label>
                                        <div className="border border-dashed border-dimWhite p-6 rounded text-center cursor-pointer hover:bg-dimBlue transition-colors">
                                            <input
                                                type="file"
                                                name="my_file"
                                                required
                                                className="text-white font-poppins w-full"
                                            />
                                            <p className="text-dimWhite text-[12px] mt-2">Preferred format: PDF or DOCX</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] w-full hover:opacity-90 transition-opacity disabled:opacity-50`}
                                        >
                                            {loading ? 'Submitting Application...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default JobSearchPage;
