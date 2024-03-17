import "./Styles.css";


const Graduates = () => {

  

  return (
    <div>
      <div className="p-5 bg-gradient-to-br from-primaryblue to-primaryceleste">
      

          <div className="text-center font-semibold font-poppins">
          <p className="font-extrabold text-white lg:text-7xl text-5xl mt-8 mb-16 ">
            Nuestros Diplomados
          </p>
        </div>
        <div className="team-area">
            <figure className="boxG">
                <figcaption>
                <div className="lg:text-4xl text-3xl  font-bebas-neue mt-4">INGENIERÍA CIVIL</div>
                    <p></p>
                    <p className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-pinterest"></i>
                        <i className="fa fa-linkedin"></i>
                    </p>
                </figcaption>
                <img className="" alt="" src="/graduate/tecnico.png" /> 
            </figure>

            <figure className="boxG">
                <figcaption>
                    <div className="lg:text-4xl text-3xl  font-bebas-neue mt-4">INGENIERÍA AMBIENTAL</div>
                    <p></p>
                    <p className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-pinterest"></i>
                        <i className="fa fa-linkedin"></i>
                    </p>
                </figcaption>
                <img className="" alt="" src="/graduate/ambiental.png" /> 
            </figure>

            <figure className="boxG">
                <figcaption>
                    <div className="lg:text-4xl text-3xl  font-bebas-neue mt-4">INGENIERÍA AGRÓNOMA</div>
                    <p></p>
                    <p className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-pinterest"></i>
                        <i className="fa fa-linkedin"></i>
                    </p>
                </figcaption>
                <img className="" alt="" src="/graduate/agronomo.png" /> 
            </figure>
        </div>
       
      
        <div className="team-area">
            <figure className="boxG">
                <figcaption>
                    <div className="lg:text-4xl text-3xl  font-bebas-neue mt-4">INGENIERÍA AlIMENTARIA</div>
                    <p></p>
                    <p className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-pinterest"></i>
                        <i className="fa fa-linkedin"></i>
                    </p>
                </figcaption>
                <img className="" alt="" src="/graduate/alimentaria.png" /> 
            </figure>
            

            <figure className="boxG">
                <figcaption>
                    <div className="lg:text-4xl text-3xl  font-bebas-neue mt-4">PROFESIONES EN GENERAL</div>
                    <p></p>
                    <p className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-pinterest"></i>
                        <i className="fa fa-linkedin"></i>
                    </p>
                </figcaption>
                <img className="" alt="" src="/graduate/profesionales.png" /> 
            </figure>

        </div>

      </div>
    </div>
  );
};
export default Graduates;


