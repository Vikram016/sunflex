
import styles from '../style';
import Button from './Button';


const CTA = () => {
  return (
    <section id="services" className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
        Join Our Growing Team
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explore how Sunﬂex Global Energy prioritizes the leveraging technology, we create a seamless and engaging journey for potential hires.
        </p>
      </div>

     <div className={`${styles.flexCenter} sm:ml-10 ml-0
        sm:mt-0 mt-10`}>

      
        <a href="https://forms.zohopublic.in/sunflexglobal/form/SunflexGlobalEnergyCandidateEvaluation/formperma/CQAB8UX467jFZ0QGhGQynbo2K3SyvbiMSmbDy510aBA"><Button>Send Your CV</Button></a> 
    
     </div>

    </section>
  )
}

export default CTA;





