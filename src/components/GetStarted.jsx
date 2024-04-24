import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => (
  
  <div className={`${styles.flexCenter} w-[140px] h-[140px]
  rounded-full bg-red-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary
    w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart}
      flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className="text-gradient"><a href="https://sunflex.website">Get</a></span>
        </p>
        <a href="https://sunflex.website"> <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/></a>
      </div>

     
         <p className='font-poppins font-medium text-[18px] leading-[23px]'>
         <a href="https://sunflex.website"> <span className="text-gradient">Started</span> </a>  
        </p>
        


    </div>

  </div>
  
)

export default GetStarted;