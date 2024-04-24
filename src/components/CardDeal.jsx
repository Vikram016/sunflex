import { card } from '../assets';
import styles, { layout } from '../style';


const CardDeal = () => (
  <section id="project" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Contract Solutions <br className="sm:block hidden"/> Permanent Solutions </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      When organizing the deployment of contractors worldwide, we offer comprehensive solutions for in-country payroll, 
      visas/work permits, taxation, and immigration. We provide flexible 
      employment options to ensure that contractors are either directly 
      employed in the country of work or set up as self-employed individuals. 
      Additionally, we take care to manage logistics such as transportation, 
      accommodation, and work permits for contractors.
      </p>
      
      
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>

    </div>
  </section>
)

export default CardDeal;