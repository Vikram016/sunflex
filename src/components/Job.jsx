import { Link } from 'react-router-dom';
import styles from '../style';
import Button from './Button';


const Job = () =>
(
  <section id="job" className={`${styles.flexCenter} ${styles.marginY}
  ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>
        Find your next job
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover the perfect job opportunity for you. we create a seamless and engaging journey for potential candidates.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0
      sm:mt-0 mt-10`}>


      <Link to="/jobs"><Button>Job search</Button></Link>

    </div>

  </section>
)


export default Job;