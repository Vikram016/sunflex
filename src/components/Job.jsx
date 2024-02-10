import { JobOpen } from '../constants';
import styles from '../style';
import JobCard from './JobCard';

const Job = () => 
 (
    <section id="job" className={`${styles.paddingY} 
  ${styles.flexCenter} flex-col relative`}>
   
   <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

   <div className="w-full flex justify-between items-center md:flex-row 
   flex-col sm:md-16 mb-6 relative z-[1]" >
      <h1 className={styles.heading2}> Lastest Power  <br className="sm:block hidden"/> jobs
      </h1>
      <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
          Explore how Sunﬂex Global Energy
          prioritizes the leveraging technology, we create a seamless and engaging journey for potential hires.



          </p>
      </div>
  </div>

      
  <div className="flex lg:flex-nowrap flex-wrap sm:justify-start 
  justify-center w-full feedback-container relative z-[1]">
     {JobOpen.map((open) => <JobCard key={open.id} {...open} />)}
    </div>
  </section>
  )


export default Job;