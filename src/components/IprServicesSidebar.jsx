import React from 'react'
import { Link } from 'react-router-dom'

function IprServicesSidebar(){
    return(
        <>
        <div className="col-xl-4">
        <div className="blog__sidebar-main-sidebar">
            <div className="sidebar-item">
            <div className="sidebar-item-single sidebar-category">
                <h3>IPR Services</h3>
                <div className="categories">
                <Link to="/patent" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Patent</h4>
                    </div>
                </Link>
                <Link to="/treademark" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Trademark</h4>
                    </div>
                </Link>
                <Link to="/copyright" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Copyright</h4>
                    </div>
                </Link>
                <Link to="/design-rights" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Design Rights</h4>
                    </div>
                </Link>
                <Link to="/database-rights" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Database Rights</h4>
                    </div>
                </Link>
                <Link to="/utility-model-design" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Utility Model Design</h4>
                    </div>
                </Link>
                <Link to="/geographical-indecation" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Geographical Indication</h4>
                    </div>
                </Link>
                <Link to="/trade-secretes" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Trade Secrets</h4>
                    </div>
                </Link>
                </div>
            </div>
            <div className="sidebar-item-single recent-blog-post">
                <h3>Recent Post</h3>
                <div className="blog-post">
                <div className="blog-post-single">
                    <div className="blog-post-single-img">
                    <img src="assets/img/blog/blog-sidebar.png" alt="image" />
                    </div>
                    <div className="blog-post-single-content">
                    <div className="blog-post-single-content-top">
                        <span>
                        <i className="far fa-folder-open" />
                        category
                        </span>
                    </div>
                    <a to="blog-details.html">
                        A picture is an stand and stand us return
                    </a>
                    </div>
                </div>
                <div className="blog-post-single">
                    <div className="blog-post-single-img">
                    <img src="assets/img/blog/blog-sidebar.png" alt="image" />
                    </div>
                    <div className="blog-post-single-content">
                    <div className="blog-post-single-content-top">
                        <span>
                        <i className="far fa-folder-open" />
                        category
                        </span>
                    </div>
                    <a to="blog-details.html">
                        A picture is an stand and stand us return
                    </a>
                    </div>
                </div>
                <div className="blog-post-single">
                    <div className="blog-post-single-img">
                    <img src="assets/img/blog/blog-sidebar.png" alt="image" />
                    </div>
                    <div className="blog-post-single-content">
                    <div className="blog-post-single-content-top">
                        <span>
                        <i className="far fa-folder-open" />
                        category
                        </span>
                    </div>
                    <a to="blog-details.html">
                        A picture is an stand and stand us return
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="sidebar-item-single tags">
                <h3>Tags</h3>
                <a to="#">IT Consulting</a>
                <a to="#">Support Pro</a>
                <a to="#">Solutions</a>
                <a to="#">WebTech</a>
                <a to="#">Data</a>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default IprServicesSidebar