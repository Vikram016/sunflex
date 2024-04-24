import styles from "../style";



const Button = ({ children, styles }) =>  {
  
  
  return ( 
    <div>
    <button type="button" className={`py-4 px-6 bg-red-gradient 
    font-poppins font-medium text-[18px] text-[#fff]
    outline-none ${styles} rounded-[10px]`}>
    {children}
    </button>
    </div>
  )
}

export default Button;