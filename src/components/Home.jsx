import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import banner from './banner.png';
import TypewriterEffect from "./TypewriterEffect.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faPhoneAlt, faUserMd, faUserNurse , faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row home-container">
       <div className="col-lg-6 col-md-12 image-section">
          <img src={banner} alt="Hospital Recommendation System" />
        </div>

        <div className="col-lg-6 col-md-12 text-section">
          <TypewriterEffect/>
          <p className="mt-5"  style={{ textAlign: 'justify' }}>
            Our Hospital Recommendation System is designed to help users find
            the best hospitals based on their medical conditions, financial status, 
            valid user reviews, and hospital background checks.
            The system allows users to compare hospital facilities, ensuring they 
            receive the best possible healthcare that meets their needs.
            <br /><br /> With an intelligent recommendation algorithm, it provides 
            personalized suggestions, making it easier to choose the right hospital. 
            Additionally, users can book doctor or gynecologist appointments directly 
            through the platform, ensuring a seamless and hassle-free healthcare experience.
          </p>
        </div>
        
      </div>

      
      <div className="row cards">
         <div className="card-item col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center border ">
           <FontAwesomeIcon icon={faStethoscope} style={{color:'#c32148', marginTop:'10px', padding:'20px', borderRadius:'50%', fontSize:'50px', backgroundColor:'white'}} />
           <h3 className="text-white">Best Treatment</h3>
           <p className="text-white">Get access to world-class treatment tailored to your medical needs.</p>
         </div>

         <div className="card-item col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center border ">
           <FontAwesomeIcon icon={faPhoneAlt} style={{color:'#c32148', padding:'20px',marginTop:'10px', borderRadius:'50%', fontSize:'50px', backgroundColor:'white'}}  />
           <h3 className="text-white"> Emergency Help</h3>
           <p className="text-white">24/7 emergency assistance available for critical situations.</p>
         </div>

         <div className="card-item col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center border ">
           <FontAwesomeIcon icon={faUserMd} style={{color:'#c32148', padding:'20px', marginTop:'10px', borderRadius:'50%', fontSize:'50px', backgroundColor:'white'}}  />
           <h3 className="text-white">Experienced Doctors </h3>
           <p className="text-white">"Consult with highly skilled and certified doctors.</p>
         </div>

         <div className="card-item col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center border ">
           <FontAwesomeIcon icon={faUserNurse} style={{color:'#c32148',  padding:'20px', borderRadius:'50%', fontSize:'50px', backgroundColor:'white'}} />
           <h3 className="text-white"> Best Medical Staff</h3>
           <p className="text-white">Compassionate and well-trained medical staff to assist you at every step</p>
         </div>
      </div> 
    

     <div className="container-fluid mt-5">
       <img className="w-100 h-50" src={banner} />
     </div>
      
      <div className="row d-flex justifyContent-center flex-inline">
        <div className="col-lg-3 col-md-6 col-sm-12 border p-2 d-flex flex-column align-items-center text-center">
          <FontAwesomeIcon icon={faCircleCheck} style={{color:'#c32148', fontSize:'30px', margin:'5px', }}/>
          <h4 className="mt-3">Expert Consultations</h4>
          <p>Get expert medical consultation from verified healthcare professionals.</p>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 border p-2 d-flex flex-column align-items-center text-center">
          <FontAwesomeIcon icon={faCircleCheck} style={{color:'#c32148', fontSize:'30px', margin:'5px'}}/>
          <h4 className="mt-3">Verified Hospitals</h4>
          <p>All hospitals in our network are thoroughly verified and accredited.</p>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 border p-2 d-flex flex-column align-items-center text-center">
          <FontAwesomeIcon icon={faCircleCheck} style={{color:'#c32148', fontSize:'30px', margin:'5px'}}/>
          <h4 className="mt-3">24/7 Support</h4>
          <p>Round-the-clock customer support for all your healthcare needs.</p>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 border p-2 d-flex flex-column align-items-center text-center">
          <FontAwesomeIcon icon={faCircleCheck} style={{color:'#c32148', fontSize:'30px', margin:'5px'}}/>
          <h4 className="mt-3">Patient Community</h4>
          <p>Join our growing community of patients sharing experiences and support.</p>
        </div>
      </div>

    </div>
    
  );
};

export default Home;
