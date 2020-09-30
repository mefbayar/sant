import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ServiceTabExample extends Component{

    render(){
        
        /* service tab menu */
        let serviceTabMenuData = [
            {iconName: 'flaticon-002-welding', tabMenuName: 'Core Curriculum'},
            {iconName: 'flaticon-004-walkie-talkie', tabMenuName: 'Advanced Placement (AP) Classes'},
            {iconName: 'flaticon-015-cart', tabMenuName: 'Exam Preparation Classes'},
            {iconName: 'flaticon-010-tank-1', tabMenuName: 'Olympiad Preparation Classes'}
        ];

        let serviceTabMenuDatalist = serviceTabMenuData.map((val, i)=>{
            return(
                <Tab key={i}>  <span className="icon"><i className={val.iconName} /></span> <span className="text">{val.tabMenuName}</span></Tab>
            )
        });

        
        let serviceTabContentData = [
            {bgUrl: "core_curric.jpg", contentTitle: 'Core Curriculum', contentDesc: 'Sant School follows the Core Curriculum approved by the Ministry of Education, Culture, Science and Sports of Mongolia in our primary, secondary and upper secondary grades. Besides the Core Curriculum, we have been also offering Advanced Placement (AP) classes as optional classes for our upper secondary grade pupils. Moreover, we offer classes such as Olympiad and international exam preparation classes to our pupils. ', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "ap.jpg", contentTitle: 'Advanced Placement (AP) Classes', contentDesc: 'We keep the pace of world education standards and offer Advanced Placement (AP) program at Sant. Our pupils can take AP as optional classes.  Advanced Placement is a program run by College Board (the makers of the SAT) that allows pupils to take courses right in their high school that can earn them college credit and/or qualify pupils for more advanced classes when they begin college. If pupils get higher scores on AP, it will give them extra advantage to be admitted to the world top universities.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "exam.jpg", contentTitle: 'Exam Preparation Classes', contentDesc: 'We offer our pupils exam preparation classes such as SAT, TOEFL, Monbusho & EЭШ to support their university applications. Every summer pupils from IVY league universities come to Mongolia to organize a summer school at Sant School to help our pupils to prepare for SAT and university admissions.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "olympiad.jpg", contentTitle: 'Olympiad Preparation Classes', contentDesc: 'Everyone at Sant is always proud of our champions of intellectual Olympiads. Many of our pupils have extra classes of Olympiad preparation in  mathematics, physics, biology, chemistry, history, Mongolian language and script, English, drawing and art.', serviceLink: 'service-details-left-sidebar'}
        ];

        let serviceTabContentDatalist = serviceTabContentData.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">SEE MORE</a>
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div>

                <div className="service-tab-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Сургалт<span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ServiceTabExample;