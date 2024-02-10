const JobCard = ({company, content, role, mail }) => 
   (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

<p className="font-poppins font-medium text-[18px] leading-[32px] text-white my-5 ">
     <span className="text-[20px]">Company{" "}: </span>{company}
     </p>
     
     <p className="font-poppins font-medium text-[18px] leading-[32px] text-white my-5 ">
     <span className="text-[20px]">Position{" "}: </span>{role}
     </p>
   
     <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-5 ">
      <span className="text-[20px]">Responsibilities{" "}:</span> {content}
     </p>

     <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-5 ">
      <span className="text-[20px]">Requirement {" "}:</span> {content}
     </p>
    
     
     <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-5">
     <span className="text-[20px]">Drop us your CV {" "}:</span> {mail}
     </p>
    

     
     </div>
   
  )

  export default JobCard;