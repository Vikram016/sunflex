// import { feedback } from "../constants";
import styles from '../style';
// import FeedbackCard from "./FeedbackCard";
import file1 from "../Image/steam1.jpg";
import file2 from "../Image/steam2.jpg";
import file3 from "../Image/steam3.jpg";
import file4 from "../Image/steam4.jpg";
import file5 from "../Image/steam5.jpg";
import file6 from "../Image/steam6.jpg";








const Testimonials = () => (
  <section id="client" className={`${styles.paddingY} 
  ${styles.flexCenter} flex-col relative`}>
   
   <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

   <div className="w-full flex justify-between items-center md:flex-row 
   flex-col sm:md-16 mb-6 relative z-[1]" >
      <h1 className={styles.heading2}> Why Choose <br className="sm:block hidden"/> Sunflex?
      </h1>
      <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          We encourage you to reach out to us with your inquiries. Connect with Sunflex through 
          our various channels to learn more about our services and how we can assist you in your energy 
          and recruitment needs.
          </p>
      </div>
  </div>

  {/* <div className="flex  xl:flex-nowrap flex-wrap  sm:justify-start 
  justify-center items-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}


   


    <div className="flex  xl:flex-nowrap flex-wrap  sm:justify-start 
  justify-center items-center w-full feedback-container relative z-[1]">
    <div className='p-1'>
     <img src = {file1} alt="sunflex" />
    </div>
    <div className='p-1'>
     <img src = {file2} alt="sunflex" />
    </div>
    <div className='p-1'>
     <img src = {file3} alt="sunflex" />
    </div>
    </div>

    <div className="flex  xl:flex-nowrap flex-wrap  sm:justify-start 
  justify-center items-center w-full feedback-container relative z-[1]">
    <div className='p-1'>
     <img src = {file4} alt="sunflex" />
    </div>
    <div className='p-1'>
     <img src = {file5} alt="sunflex" />
    </div>
    <div className='p-1'>
     <img src = {file6} alt="sunflex" />
    </div>
    </div>

    
    
  </section>
)

export default Testimonials;