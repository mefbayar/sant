import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Сант сургууль</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Нүүр Хуудас</a>
                    </li>
                    <li>Бидний тухай</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-wrapper section-space--inner--top--120">
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/principal.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="uXj46TM8d6Y"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Сант сургууль</h3>
                    <h1>Welcome from the Principal </h1>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum, beatae.
                    </h4>
                    <p>.......</p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Сургалт
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeatureIcon background="grey-bg" />

          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>
                      <span>20</span>Years of Experience
                    </h1>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sant School was established in 1996 in Ulaanbaatar,
                      Mongolia and is one of the first private comprehensive
                      schools in Mongolia, with around 1,300 pupils. We have
                      been leading in the secondary education sub-sector in
                      Mongolia for 20 years, with our mission of ‘Nurturing the
                      next generation innovators’. Our pupils join at the age of
                      6 and continue right through until they are 18.
                    </p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a forward-thinking school where everyone works hard
                      to enable each pupil reach their full potential. Practice,
                      focus and attitude remain important and shape some of our
                      guiding principles.
                    </p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you’re considering sending your child here please do
                      visit and learn more about opportunities for your child at
                      Sant.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                    We believe that our pupils’ success hugely depends on our teaching quality. Thus, we invite the best teachers in all subjects to work with us at Sant in order to maintain the quality of our teaching. We have over 100 teachers and many of whom got doctorate and master’s degrees from the international and national top universities such Berkeley, Oxford, MIT, Stanford, Hokkaido, Manchester, Washington, Mingchuaa University, NUM,  MUST, and University of Education.
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Funfact />

          <TeamMemberGrid />

          <TestimonialSlider />

          <BrandLogoSlider background="" />
        </div>

        <Footer />

        <MobileMenu />
      </div>
    );
  }
}

export default About;
