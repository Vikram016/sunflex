import styles from './style';
import { Navbar, Hero, Stats,Business,CardDeal,
         Testimonials,Clients,Job,CTA,PostJob,Footer, 
         } from './components';
              


const App = () => {
  return (
    <div>
     
    
       
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
             
             <Navbar/>
            
            </div>
        </div>
    </div>
   

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Hero/>
      </div>
     </div>
     
     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
         <Stats/>
        <Business/>
        {/* <Billing/> */}
        <Job/> 
        <CTA/>
        <PostJob/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <Footer/>       
       
      
      </div>
      </div>

     

     </div>



    
  ); 
  
}

export default App;