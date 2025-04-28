
import $ from 'jquery';
import 'slick-carousel';
import { useEffect } from 'react';
import 'slick-carousel';  // Ensure slick-carousel is installed

const StickyHeader = () => {
  useEffect(() => {
    if (typeof $ !== 'undefined') {
      $(".topbar-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    }



 
  var dataInt = window.location.href;
  var arrInt = dataInt.split('/');
  if (arrInt[3].toLowerCase() == "international") {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);

  } else {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://lpuwidgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }
 
  }, []);

  return (
    <div className="mobile-sticky-header">
      <section className="announcement-bar">
        <div className="container">
          <ul className="topbar-slider">
            <li><a href="https://www.lpu.in/events/cuet/" target="_blank">Unlock your Potential at LPU: Scholarship for CUET Aspirants. Click Here</a></li>
          </ul>
        </div>
      </section>
      <div className="sticky-bar">
      <ul>
        <li class="apply-now-outer">
            <a target="_blank" href="https://admission.lpu.in/" data-gtm-section="sticky">
                <span class="apply-now">Apply Now</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="https://iviewd.com/lpu2/" data-gtm-section="sticky">
                <img width="auto" height="auto" src="https://www.lpu.in/lpu-assets/images/icons/360-view-w.svg"
                    alt="new-call-icon"/>
                <span class="st-label">Virtual Tour</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="" class="ppwnd" data-gtm-section="sticky">
                <img width="auto" height="auto" src="https://www.lpu.in/lpu-assets/images/icons/phone-full.svg"
                    alt="new-call-icon" />
                <span class="st-label">Schedule a Call</span>
            </a>
        </li>
        <li>
            <a target="_blank"
                href="https://api.whatsapp.com/send?phone=+919852569000&amp;text=Hi%2C%20I%20need%20assistance%20for%20Admissions%202024."
                data-gtm-section="sticky">
                <img width="auto" height="auto" src="https://www.lpu.in/lpu-assets/images/icons/whatsapp-white.svg"
                    alt="new-whatsapp-icon"/>
                <span class="st-label">Whatsapp only <br/>+919852569000</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="#" data-bs-toggle="modal" data-bs-target="#live-video-counselling">
                <img width="auto" height="auto" src="https://www.lpu.in/lpu-assets/images/icons/live-video.svg"
                    alt="new-video-chat"/>
                <span class="st-label">Live Video <br/>Counselling</span>
            </a>
        </li>
        <li><a href="https://www.lpu.in/admission/lpu-in-your-town.php#lpu-town" data-gtm-section="sticky">
                <img width="auto" height="auto" src="https://www.lpu.in/lpu-assets/images/icons/town.svg"
                    alt="new-location-icon"/>
                <span class="st-label">LPU in Your Town</span></a>
        </li>
    </ul>
      </div>
    </div>
  );
};

export default StickyHeader;
