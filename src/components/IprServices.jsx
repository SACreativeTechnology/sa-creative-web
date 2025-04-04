
import { Link } from 'react-router-dom'

function IprServices(){
    return (
        <>
        {/* Services Two Area Start */}
  <div className="services__two section-padding">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="services__two-title">
            <span className="subtitle-one">IPR Services</span>
            <h3>Empower Your Business with Strong Intellectual Property Rights!</h3>
            {/* <h2>Unleash the power of technology</h2> */}
          </div>
        </div>
      </div>
      <div className="row gy-4 justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-mobile-phone-1" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Patent</h4>
              <Link to="/patent" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-phone-call-1" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Trademark</h4>
              <Link to="/treademark" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-email" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Copyright</h4>
              <Link to="/copyright" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-web-research" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Design Rights</h4>
              <Link to="/design-rights" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-computer-mouse" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Database Rights</h4>
              <Link to="/database-rights" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-satellite-signal" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Utility Model Design</h4>
              <Link to="/utility-model-design" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-satellite-signal" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Geographical Indication</h4>
              <Link to="/geographical-indecation" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-satellite-signal" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Trade Secrets</h4>
              <Link to="/trade-secretes" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services Two Area End */}
        </>
    )
}
export default IprServices;