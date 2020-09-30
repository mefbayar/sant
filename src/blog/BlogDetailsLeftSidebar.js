import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import BlogPostContent from './components/BlogPostContent';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class BlogDetailsLeftSidebar extends Component{
    render(){

        return(
            <div>
                <NavBar/>

                
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Blog Details</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog</a></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper section-space--inner--120">
                <div className="blog-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <BlogPostContent />
                        </div>
                        <div className="col-lg-4 col-12 order-2 order-lg-1">
                            <Sidebar />
                        </div>
                    </div>
                    </div>
                </div>
                </div>


                <BrandLogoSlider background = "grey-bg" />

                <Footer/>

                <MobileMenu/>

            </div>
        )
    }
}


export default BlogDetailsLeftSidebar;