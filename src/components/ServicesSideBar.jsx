import React from 'react'

function ServicesSideBar() {
  return (
    <div className="col-xl-4">
        <div className="blog__sidebar-main-sidebar">
            <div className="sidebar-item">
            <div className="sidebar-item-single sidebar-category">
                <h3>Services</h3>
                <div className="categories">
                <a href="#" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>IPR Services</h4>
                    </div>
                </a>
                <a href="product-prototype.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Product Prototype</h4>
                    </div>
                </a>
                <a href="3d-printing-designing.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>3D Printing &amp; Designing</h4>
                    </div>
                </a>
                <a href="hardware-development.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Hardware Development</h4>
                    </div>
                </a>
                <a href="software-development.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Software Development</h4>
                    </div>
                </a>
                <a href="components-sales.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Components Sales</h4>
                    </div>
                </a>
                <a href="engineering-projects.php" className="single-category">
                    <div className="single-category-name">
                    <i className="fas fa-angle-double-right" />
                    <h4>Engineering Projects</h4>
                    </div>
                </a>
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
                    <a href="blog-details.html">
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
                    <a href="blog-details.html">
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
                    <a href="blog-details.html">
                        A picture is an stand and stand us return
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="sidebar-item-single tags">
                <h3>Tags</h3>
                <a href="#">IT Consulting</a>
                <a href="#">Support Pro</a>
                <a href="#">Solutions</a>
                <a href="#">WebTech</a>
                <a href="#">Data</a>
            </div>
            </div>
        </div>
    </div>

  )
}

export default ServicesSideBar