import React, { Component } from "react";
import Swiper from "react-id-swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: "fade",
      navigation: {
        nextEl: ".ht-swiper-button-next",
        prevEl: ".ht-swiper-button-prev",
      },
      renderPrevButton: () => (
        <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-left" />
        </div>
      ),
      renderNextButton: () => (
        <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-forward" />
        </div>
      ),
      autoplay: {
        delay: 5000,
      },
    };

    let data = [
      {
        bgImg: "slider3.jpg",
        sliderTitle:
          "RANKED #1 BY OUR PUPILS’ PERFORMANCE ON UNIVERSITY ENTRY EXAM IN MONGOLIA",
        sliderSubtitle:
          "We are very proud that Sant School has been nationally ranked #1 by our pupils’ average performance on University Entry Exam “ЕЭШ” for the past five years. At Sant, everyone works hard to enable each student to reach their full potential personally and academically. As a result, most Sant pupils are able to enter their desired international and national universities.",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider2.jpg",
        sliderTitle: "SCHOOL OF CHAMPIONS OF INTELLECTUAL OLYMPIADS.",
        sliderSubtitle:
          "Everyone at Sant is always proud of our champions of intellectual Olympiads. Many of our pupils successfully have participated in international annual Olympiads representing Mongolia.  To mention only 2016 accomplishments, in total 11 pupils from Sant participated in international Olympiads in mathematics, physics, and biology, held in Thailand, Switzerland and Vietnam. They won two gold, one silver, five bronze medals and three special awards.",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider1.jpg",
        sliderTitle: "OUR GRADUATES ADMITTED TO WORLD TOP 100 UNIVERSITIES.",
        sliderSubtitle:
          "According the QS World University Rankings 2016, MIT was ranked #1. Six of our high-caliber pupils have been admitted to MIT including two girls in the last two years, Kh. Tserenchimeg in 2016, and L.Oyuntugs in 2017. Our pupils have also been admitted to Stanford University, University of California, Duke University, Boston University, University of Washington, University of Edinburgh, Michigan, Wisconsin Madison, Rochester Institute of Technology, Brown University, Dartmouth college, University of Massachusetts, University of Tokyo, Tokyo institute of Technology, Seoul National University, HKU, Australian National University, Purdue University, NUS, and many more.",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider1.jpg",
        sliderTitle: "AN ESTABLISHED SCHOOL",
        sliderSubtitle:
          "As a first private comprehensive school in Mongolia, Sant School has been a leading educational institution for over twenty years with its extensive experience, robust curriculum and effective teaching and learning methodologies. We believe that pupils’ success hugely depends on the teaching quality. Thus, we invite the best teachers in all disciplines to work with us at Sant in order to maintain the quality of our teaching. Many of our teachers are graduates of the world top universities such as Berkeley, Oxford, MIT, Stanford, Manchester University, University of Washington and many more. We run our teaching and learning activities in comfortable learning environment which meet the standards.",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider1.jpg",
        sliderTitle: "AN ADVANCED PLACEMENT (AP) PROGRAM PROVIDER IN MONGOLIA.",
        sliderSubtitle:
          "We offer Advanced Placement (AP) program at Sant School as optional classes.  Advanced Placement is a program run by College Board (the makers of the SAT) that allows pupils to take courses right in their high school that can earn them college credit and/or qualify pupils for more advanced classes when they begin college. If pupils get higher scores on AP, it will give them extra advantage to be admitted to the world top universities.",
        btnLink: "contact-us",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <a
                        className="hero-slider__btn hero-slider__btn--style2"
                        href={`${process.env.PUBLIC_URL}/${val.btnLink}`}
                      >
                        {" "}
                        laga
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="hero-alider-area">
          <Swiper {...params}>{DataList}</Swiper>
        </div>
      </div>
    );
  }
}

export default HeroSliderOne;
