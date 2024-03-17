import React, { useEffect } from "react";
import "./StyleBan.css";

const Banners = () => {
  useEffect(() => {
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let timeDom = document.querySelector(".carousel .time");

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    // Función para mostrar el slider
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      // Iniciamos el cambio automático después de que ha transcurrido el tiempo especificado
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }

    // Mostrar el slider después de que la página se carga completamente
    setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    // Agregamos el listener de click a los elementos de React
    if (nextDom && prevDom) {
      nextDom.addEventListener("click", () => showSlider("next"));
      prevDom.addEventListener("click", () => showSlider("prev"));
    }

    // Limpieza del efecto
    return () => {
      if (nextDom && prevDom) {
        nextDom.removeEventListener("click", () => showSlider("next"));
        prevDom.removeEventListener("click", () => showSlider("prev"));
      }
    };
  }, []);


  
  return (
    <div className="">
      <div className="carousel">    
        <div className="list">
        <div className="item ">
            <img src="image/bannerFour.png" />
            <div className="content">
              <div className="author">Corporación Sayan</div>
              <div className="title">❝Desata tu Potencial: Explora Nuestros Cursos Innovadores❝
                <div className="topic"> </div>
              </div>
              <div className="topic"></div>
              <div className="des"></div>
            </div>
          </div>
          <div className="item ">
            <img src="image/bannerTwo.png" />
            <div className="content">
              <div className="author">Corporación Sayan</div>
              <div className="title">❝Desata tu Potencial: Explora Nuestros Cursos Innovadores❝
                <div className="topic"> </div>
              </div>
              <div className="topic"></div>
              <div className="des"></div>
            </div>
          </div>
          
          <div className="item">
            <img src="image/bannerThree.png" />
            <div className="content">
              <div className="author">Corporación Sayan</div>
              <div className="title">❝Descubre el Conocimiento del Futuro❝</div>
              <div className="topic"></div>
              <div className="des"></div>
            </div>
          </div>
          
        </div>
        
        <div className="arrows">
          <button id="prev">{"<"}</button>
          <button id="next">{">"}</button>
        </div>

        <div className="time"></div>
      </div>
    </div>
  );
};

export default Banners;