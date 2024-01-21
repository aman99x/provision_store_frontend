import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const {user} = useAuth();
    return(
    <>
      <main>
        <section className="section-hero">
              <h1>Provision Store E-shop Website</h1><br></br>
                
                <h2>Development Challenges:</h2><br></br>
                   <p>During the development of the application,<br></br> 
                    i faced challenges in implementing robust email and password validations.<br></br> 
                    Ensuring a balance between security and user-friendliness posed some difficulties,<br></br> 
                    but we successfully incorporated these features for a secure login experience.</p><br></br>
                
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
        </section>
      </main>
    </>
  );
};