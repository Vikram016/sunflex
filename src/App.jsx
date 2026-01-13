import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, Stats, Business, CardDeal, Testimonials, Clients, Job, CTA, PostJob, Footer, PostJobForm, JobSearchPage, PostCVPage, AboutUs } from './components';

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Stats />
        <Job />
        <CTA />
        <PostJob />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/post-job-form" element={<PostJobForm />} />
        <Route path="/jobs" element={<JobSearchPage />} />
        <Route path="/post-cv" element={<PostCVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;