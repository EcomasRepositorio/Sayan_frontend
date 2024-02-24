import React, { useEffect } from "react";
import "./StyleBan.css";

const Banners = () => {
  useEffect(() => {
    // Tu código JavaScript existente aquí
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
        showSlider('next');
    }

    prevDom.onclick = function () {
        showSlider('prev');
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext)
    }
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez después de que el componente se monta

  return (
    <div>
    <header>
        <nav>
            <a href="">Home</a>
            <a href="">Contacts</a>
            <a href="">Info</a>
        </nav>
    </header>

    <div className="carousel">
     
        <div className="list">
            <div className="item">
                <img src="image/banner.jpg"/>
                <div className="content">
                    <div className="author">Jhosy</div>
                    <div className="title">DESIGN AVICII</div>
                    <div className="topic">SAYAN</div>
                    <div className="des">
                      
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/banner2.jpg"/>
                <div className="content">
                <div className="author">Jhosy</div>
                    <div className="title">DESIGN AVICII</div>
                    <div className="topic">SAYAN</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/banner.jpg"/>
                <div className="content">
                <div className="author">Jhosy</div>
                    <div className="title">DESIGN AVICII</div>
                    <div className="topic">SAYAN</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/banner.jpg"/>
                <div className="content">
                <div className="author">Jhosy</div>
                    <div className="title">DESIGN AVICII</div>
                    <div className="topic">SAYAN</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="thumbnail">
            <div className="item">
                <img src="image/test.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Sliderrrrrrr
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/test.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Sliderrrrrrr
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/banner.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Sliderrrrr
                    </div>
                    <div className="description">
                        Descriptionrrrr
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="image/banner.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Sliderrrrrr
                    </div>
                    <div className="description">
                        Descriptionrrrrr
                    </div>
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
}

export default Banners;
