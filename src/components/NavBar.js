import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){


        return(
            <div>
               <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                   <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                           <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                          <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--default d-inline-block">Бүртгүүлэх</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                  <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>НҮҮР ХУУДАС</Link> </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>БИДНИЙ ТУХАЙ</Link></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/services`}>СУРГАЛТ</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/services`}>Сургалт</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Сургалт тай</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}>Сургалт тайлбар</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/projects`} >ТӨГСӨГЧИД</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/projects`} >Төгсөгчид</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/project-details`}>Төгсөгчид мэдээ</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>ХОЛБОО БАРИХ</Link> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;