import React from 'react'

import PropTypes from 'prop-types'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className={`footer-gray-footer ${props.rootClassName} `}>
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">Compile Digital</span>
            <span className="footer-gray-text01">Social</span>
            <div className="footer-gray-container3">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-gray-icon"
              >
                <path
                  d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                  className=""
                ></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="footer-gray-icon2"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="footer-gray-icon4">
                <path
                  d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="footer-gray-icon6">
                <path
                  d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="footer-gray-container4">
            <div className="footer-gray-container5">
              <span className="footer-gray-text02">
                <span className="large">Pages</span>
                <br className=""></br>
              </span>
              <span className="footer-gray-text05 large">Home</span>
              <span className="footer-gray-text06 large">Testimonials</span>
              <span className="footer-gray-text07">
                <span className="large">FAQ&apos;s</span>
                <br className=""></br>
              </span>
            </div>
            <div className="footer-gray-container6">
              <span className="footer-gray-text10 large">
                Help &amp; Support
              </span>
              <span className="footer-gray-text11 large">Contact Us</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text12">
          UK Based Company Operating Remotley
        </span>
      </div>
    </footer>
  )
}

FooterGray.defaultProps = {
  rootClassName: '',
}

FooterGray.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterGray
