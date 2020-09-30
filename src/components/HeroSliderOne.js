import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderOne extends Component{
    
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'Сант сургууль', sliderSubtitle: 'We are very proud that Sant School has been nationally ranked #1 by our pupils’ average performance on University Entry Exam “ЕЭШ” for the past five years. At Sant, everyone works hard to enable each student to reach their full potential personally and academically. As a result, most Sant pupils are able to enter their desired international and national universities.', btnLink: 'contact-us'},
            {bgImg: 'slider2.jpg', sliderTitle: 'Сайн сургууль', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
            {bgImg: 'slider1.jpg', sliderTitle: 'Гоё сургууль', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content">
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                    <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> GET START</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default HeroSliderOne;