import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

class VideoCta extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    render(){
        return(
            <div className="video-cta">
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                            <h4 className="video-cta-content__small-title">ABOUT US</h4>
                            <h3 className="video-cta-content__title">Сант бол сайн сургууль юм</h3>
                            <p className="video-cta-content__text">Sant School was established in 1996 in Ulaanbaatar, Mongolia and is one of the first private comprehensive schools in Mongolia, with around 1,300 pupils.  We have been leading in the secondary education sub-sector in Mongolia for 20 years, with our mission of ‘Nurturing the next generation innovators’. Our pupils join at the age of 6 and continue right through until they are 18.  

We are a forward-thinking school where everyone works hard to enable each pupil reach their full potential.  Practice, focus and attitude remain important and shape some of our guiding principles. 

If you’re considering sending your child here please do visit and learn more about opportunities for your child at Sant.
</p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">CONTACT US</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <div className="video-popup">
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='uXj46TM8d6Y' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <div className="cta-video-image__image">
                                        <img src="assets/img/backgrounds/video-cta.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="cta-video-image__icon">
                                        <i className="ion-ios-play" />
                                    </div>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default VideoCta;