'use client';

import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './stickyHeader.module.css';

// Import static content
import { announcementContent, stickyBarContent } from './staticContent';

export default function MobileStickyHeader() {
    useEffect(() => {
        // Initialize slick slider once the component is mounted
        if (typeof window !== 'undefined') {
            require('./StickyHeader.js');
        }
    }, []);

    return (
        <div className="mobile-sticky-header">
            <section className={styles.announcementBar}>
                <div className="container">
                    <ul className="topbar-slider">
                        <li>
                            <a href={announcementContent.url} target="_blank" rel="noopener noreferrer">
                                {announcementContent.text}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <header id="header">
                <div className="container-fluid" id="header-wrap">
                    <div className="header-row">
                            {/* <!-- Logo ============================================= --> */}
                            <div id="logo">
                                <a href="https://www.lpu.in">
                                    <img src="https://www.lpu.in/lpu-assets/images/logo/logo.svg" alt="LPU LOGO"
                                        className="scroll-logo" />
                                    <img src="https://www.lpu.in/lpu-assets/images/logo/naac-logo.svg" alt="LPU LOGO"
                                        className="naac-logo" />
                                </a>
                                {/* <!-- <a href="https://www.lpu.in" className="retina-logo" data-dark-logo="https://www.lpu.in/lpu-assets/images/logo/logo-dark.svg">
                                    <img src="https://www.lpu.in/lpu-assets/images/logo/logo.svg" alt="LPU LOGO" className="mobile-social-logo">
                                        <img src="https://www.lpu.in/lpu-assets/images/logo/naac-logo.svg" alt="LPU LOGO" className="naac-logo">

                                        </a> --> */}
                                    </div>
                                    <div className="header-right">
                                        <div className="top-links">
                                            <ul className="top-links-container">
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://www.lpu.in/jobs/" className="jobs-color">Jobs</a></li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://happenings.lpu.in/" target="_blank" rel="nofollow">Happenings</a>
                                                </li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a href="//conferences.lpu.in/"
                                                    target="_blank" rel="nofollow">Conferences </a> </li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://www.lpu.in/international-opportunities.php" target="_blank">Study
                                                    Abroad</a></li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a className="active applylnk"
                                                    href="//nest.lpu.in/main.aspx" target="_blank">LPUNEST</a></li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://www.lpu.in/international/" target="_blank">International
                                                    Admissions </a>
                                                </li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://www.lpuonline.com/" target="_blank" rel="nofollow">Online
                                                    Education</a></li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a href="https://www.lpude.in/"
                                                    target="_blank" rel="nofollow">Distance Education</a></li>
                                                <li className="top-links-item d-lg-block d-sm-none d-none"><a
                                                    href="https://www.lpu.in/contact-us/contact-us.php">Contact</a></li>
                                                {/* <!-- <li className="top-links-item d-lg-block d-sm-none d-none"><a href="https://www.lpu.in/academics/">Academics</a></li> --> */}
                                                <li className="top-links-item d-lg-none d-sm-block"><a
                                                    href="https://www.lpu.in/admission/admissions.php" target="_blank"
                                                    style={{"borderColor":"#ef7d00"}}>Admissions</a></li>
                                                <li className="top-links-item d-lg-none d-sm-block"><a
                                                    href="https://www.lpu.in/placements.php">Placements</a></li>
                                                <li className="top-bar-apply top-links-item d-lg-none d-sm-block"><a
                                                    href="https://www.lpu.in/programmes/all/" target="_blank"
                                                    style={{"borderColor":"#ef7d00"}}>Explore Programmes</a></li>
                                            </ul>
                                            <div className="top-links-right">
                                                {/* <!-- <div className="d-lg-block d-sm-none d-none top-bar-right-links">
                                                    <a id="btn-increase" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Increase font size" className="increase"><b>A+</b></a>
                                                    <a id="btn-orig" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Reset font size" className="reset resetfont"><b>A</b></a>
                                                    <a id="btn-decrease" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Decrease font size" className="decrease"><b>A-</b></a>
                                                    <a data-bs-toggle="tooltip" data-bs-placement="bottom" onclick="enableSpeakVerification();" data-bs-original-title="Sound on" id="von"><i className="icon-volume-off"></i></a>
                                                    <a data-bs-toggle="tooltip" data-bs-placement="bottom" onclick="disableSpeakVerification();" className="dhide" id="voff" data-bs-original-title="Sound off"><i className="icon-volume-up"></i></a>
                                                    <img src="https://www.lpu.in/images/toggleCol-grey.png" className="invert-img" id="in-grey" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Invert Color" />
                                                    <img src="https://www.lpu.in/images/toggleCol.png" className="invert-img dhide" id="in-color" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Invert Color" />
                                                </div> --> */}
                                                <img src="https://www.lpu.in/lpu-assets/images/logo/social-logo-lpu-small.svg"
                                                    className="social-logo" />
                                            </div>
                                        </div>
                                        <div className="menu-wrapper">
                                            <div id="primary-menu-trigger">
                                                <svg className="svg-trigger" viewBox="0 0 100 100">
                                                    <path
                                                        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
                                                    </path>
                                                    <path d="m 30,50 h 40"></path>
                                                    <path
                                                        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="primary-menu-wrapper">
                                                <nav className="primary-menu">

                                                    <ul className="menu-container">
                                                        <li className="menu-item current"><a className="menu-link" href="#">
                                                            <div>About</div>
                                                        </a>
                                                            <ul className="sub-menu-container">

                                                                <li className="menu-item mega-menu-title">
                                                                    <a className="menu-link" href="https://www.lpu.in/about-lpu/index.php">
                                                                        <div>Overview</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/about-lpu/infrastructure.php">
                                                                    <div>Infrastructure</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/about-lpu/accreditation.php">
                                                                    <div>Accreditations & Approvals</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/about-lpu/ranking.php">
                                                                    <div>Rankings</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/placements.php">
                                                                    <div>Placements</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link" href="//alumni.lpu.in/"
                                                                    target="_blank" rel="nofollow">
                                                                    <div>Alumni</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/about-lpu/index.php#leadership">
                                                                    <div>Leadership</div>
                                                                </a></li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link"
                                                                        href="https://www.lpu.in/about-lpu/organization-structure.php">
                                                                        <div>Organization Structure</div>
                                                                    </a>
                                                                </li>
                                                                {/* <!-- <li><a href="https://www.lpu.in/about-lpu/strategic-plan.php">
                                                                    <div> Strategic Plan</div>
                                                                </a></li> --> */}
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/admission/lpu-in-your-town.php#lpu-town">
                                                                    <div>Location</div>
                                                                </a></li>
                                                                <li className="menu-item"><a className="menu-link"
                                                                    href="https://www.lpu.in/about-lpu/tour-lpu.php">
                                                                    <div>Tour LPU</div>
                                                                </a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item mega-menu"><a className="menu-link" href="#">
                                                            <div style={{"borderBottom":'1px solid #ef7d00'}}>Admissions</div>
                                                        </a>
                                                            <div className="mega-menu-content mega-menu-style-2">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                                            <li className="menu-item mega-menu-title">
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link">
                                                                                        <div>Get Started</div>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                            <ul className="sub-menu-container">
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/admission/admissions.php">
                                                                                    <div>Overview</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/why-lpu-new.php">
                                                                                    <div>Why LPU?</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/scholarship/scholarship.php">
                                                                                    <div>Scholarship</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/studygrant">
                                                                                    <div>Study Grant</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/student-services/education-loan-assistance.php">
                                                                                    <div>Education Loan Assistance</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    target="_blank"
                                                                                    href="https://www.lpu.in/student-services/residence.php">
                                                                                    <div className="sp-active">Residential Facilities
                                                                                    </div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/student-services/transport.php"
                                                                                    target="_blank">
                                                                                    <div>Transportation Facilities</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/events/freshmeninduction/index.php">
                                                                                    <div className="sp-active">Reporting and Induction
                                                                                    </div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/admission/migration.php"
                                                                                    target="_blank">
                                                                                    <div>Migration</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/events/influencers/"
                                                                                    target="_blank">
                                                                                    <div className="sp-active">LPU Buzz (Influencer's
                                                                                        Talk)</div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/webinar.php"
                                                                                    target="_blank">
                                                                                    <div>LPU's EDUfair (Webinars)</div>
                                                                                </a></li>

                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/disha/"
                                                                                    target="_blank">
                                                                                    <div>DISHA (Counselling and Workshops) </div>
                                                                                </a></li>
                                                                                <li className="menu-item"><a className="menu-link"
                                                                                    href="https://www.lpu.in/admission/lpu-in-your-town.php#lpu-town">
                                                                                    <div>LPU in Your Town</div>
                                                                                </a></li>
                                                                            </ul>

                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                                            <li>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/all/12th">
                                                                                        <div>After 12th (Undergraduate) Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container mb-3">
                                                                                    <li className="menu-item"><a
                                                                                        className="menu-link innr-active"
                                                                                        href=" https://www.lpu.in/programmes/regular/12th">
                                                                                        <div>Regular Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/xhonsindustrycollaboration/12th">
                                                                                        <div>Hons. Programmes with Industry
                                                                                            Collaboration </div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/workintegrated/12th">
                                                                                        <div>Work Integrated Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/collaborative/12th">
                                                                                        <div>Industry Collaborative Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/transferinternational/12th">
                                                                                        <div>International Credit Transfer
                                                                                            Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/hons/12th">
                                                                                        <div>Hons. Programmes</div>
                                                                                    </a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/Integrated/12th">
                                                                                        <div>Integrated Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/all/10th">
                                                                                        <div>After 10th Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/all/Diploma%20or%20Certificate">
                                                                                        <div>After Diploma or Certificate Programmes
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/admission/short-term-courses.php">
                                                                                        <div>Short Term Courses</div>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                                            <li>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/all/Graduation">
                                                                                        <div>After Graduation (Post Graduate) Programmes
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container mb-3">
                                                                                    <li className="menu-item"><a
                                                                                        className="menu-link innr-active"
                                                                                        href="https://www.lpu.in/programmes/regular/Graduation">
                                                                                        <div>Regular Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/xhonsindustrycollaboration/Graduation">
                                                                                        <div>Hons. Programmes with Industry
                                                                                            Collaboration</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/collaborative/Graduation">
                                                                                        <div>Industry Collaborative Programmes
                                                                                        </div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/transferinternational/Graduation">
                                                                                        <div>International Credit Transfer
                                                                                            Programmes
                                                                                        </div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/hons/Graduation">
                                                                                        <div>Hons. Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/parttime/Graduation">
                                                                                        <div>Part Time Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/programmes/all/Post-Graduation">
                                                                                        <div>After Post Graduation Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://nest.lpu.in/phd/index.php">
                                                                                        <div>Doctoral Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/admission/after-doctoral-programmes.php">
                                                                                        <div>After Doctoral Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/admission/executive-development-programmes.php">
                                                                                        <div>Executive Development Programmes</div>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                                            <li>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/international/">
                                                                                        <div>International Applicants</div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container mb-3">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpu.in/international">
                                                                                        <div>Overview</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpu.in/international/programmes/ProgramSearch.php">
                                                                                        <div>Programme Offered</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpu.in/international/english-language-requirement.php">
                                                                                        <div>English Language Requirement</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpu.in/international/scholarship.php">
                                                                                        <div>Scholarship</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpu.in/international/how_to_apply.php">
                                                                                        <div>How to Apply</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpuonline.com/"
                                                                                        rel="nofollow">
                                                                                        <div>Online Education</div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container mb-3">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpuonline.com/"
                                                                                        rel="nofollow">
                                                                                        <div>Programmes</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://admission.lpuonline.com/"
                                                                                        rel="nofollow">
                                                                                        <div>Apply Now</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link" href="https://www.lpude.in/"
                                                                                        rel="nofollow">
                                                                                        <div>Distance Education</div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container mb-3">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank" href="https://www.lpude.in/"
                                                                                        rel="nofollow">
                                                                                        <div>About</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpude.in/admissions/overview.php"
                                                                                        rel="nofollow">
                                                                                        <div>Programmes on offer</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        target="_blank"
                                                                                        href="https://www.lpude.in/contact-us/contact-us.php"
                                                                                        rel="nofollow">
                                                                                        <div>Enquire Now</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                        <li className="menu-item mega-menu"><a className="menu-link" href="#">
                                                            <div>Academics</div>
                                                        </a>
                                                            <div className="mega-menu-content mega-menu-style-2">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-4">
                                                                            <li className="menu-item mega-menu-title">
                                                                                <div className="mega-menu-title">
                                                                                    <a className="menu-link"
                                                                                        href="https://www.lpu.in/academics">
                                                                                        <div>Overview</div>
                                                                                    </a>
                                                                                </div>
                                                                                <ul className="sub-menu-container">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/live-projects.php">
                                                                                        <div>Live projects</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/industry-immersion.php">
                                                                                        <div>Industry Immersion</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/Interdisciplinary-minors.php">
                                                                                        <div>Interdisciplinary Minors</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/curriculum-innovations.php">
                                                                                        <div>Curriculum innovations</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/guest-lectures.php">
                                                                                        <div>Guest lectures / Workshops</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/assessment-and-evaluation.php">
                                                                                        <div>Assessment and Evaluation</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/mentoring-advising.php">
                                                                                        <div>Mentoring and advising</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/stakeholder-feedback.php">
                                                                                        <div>Stakeholder Feedback</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/faculty-development.php">
                                                                                        <div>Human Resource Development Center</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/corporate-training.php">
                                                                                        <div>Corporate Training</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/libraries.php">
                                                                                        <div>Libraries</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/laboratories.php">
                                                                                        <div>Laboratories</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/calendar-regular-programmes.php">
                                                                                        <div>Academic Calendar</div>
                                                                                    </a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://www.lpu.in/academics/holiday-list.php">
                                                                                        <div>Holiday List</div>
                                                                                    </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-4">
                                                                            <li className="menu-item mega-menu-title">
                                                                                <div className="menu-link">Disciplines</div>
                                                                                <ul className="sub-menu-container">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/computer-science-engineering/"
                                                                                        target="_blank" rel="nofollow">Computer
                                                                                        Science & Engineering</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/agriculture/"
                                                                                        target="_blank"
                                                                                        rel="nofollow">Agriculture</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/computer-applications/"
                                                                                        target="_blank" rel="nofollow">Computer
                                                                                        Application</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/electronics-electrical-engineering/"
                                                                                        target="_blank" rel="nofollow">Electronics &
                                                                                        Electrical
                                                                                        Engineering</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/mechanical-engineering/"
                                                                                        target="_blank" rel="nofollow">Mechanical
                                                                                        Engineering</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/bioengineering-and-biosciences/"
                                                                                        target="_blank"
                                                                                        rel="nofollow">Bioengineering &
                                                                                        Biosciences</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/physical-sciences/"
                                                                                        target="_blank" rel="nofollow">Chemical
                                                                                        Engineering
                                                                                        & Physical Sciences</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/civil-engineering/"
                                                                                        target="_blank" rel="nofollow">Civil
                                                                                        Engineering
                                                                                    </a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/interior-and-furniture/"
                                                                                        target="_blank" rel="nofollow">Interior &
                                                                                        Furniture Design,
                                                                                        Product & Industrial design
                                                                                        & User Experience</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/fashion/"
                                                                                        target="_blank" rel="nofollow">Fashion
                                                                                        Design</a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/animation-and-multimedia/"
                                                                                        target="_blank" rel="nofollow">Multimedia &
                                                                                        Animation, Gaming, Graphics & UI/UX</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/film-tv-production/"
                                                                                        target="_blank" rel="nofollow">Film &
                                                                                        Television</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/architecture-design/"
                                                                                        target="_blank" rel="nofollow">Architecture
                                                                                        & Planning</a></li>

                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-4">
                                                                            <li className="menu-item mega-menu-title">
                                                                                <div className="menu-link"></div>
                                                                                <ul className="sub-menu-container">
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="//schools.lpu.in/business/"
                                                                                        target="_blank" rel="nofollow">Business</a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/management-and-commerce/"
                                                                                        target="_blank" rel="nofollow">Commerce &
                                                                                        Economics</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/hotel-management-and-tourism/"
                                                                                        target="_blank" rel="nofollow">Hotel
                                                                                        Management & Tourism</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/law/"
                                                                                        target="_blank" rel="nofollow">Law</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/physiotherapy-and-paramedical-sciences/"
                                                                                        target="_blank" rel="nofollow">Medical
                                                                                        Laboratory Sciences &
                                                                                        Physiotherapy</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/pharmaceutical-sciences/"
                                                                                        target="_blank"
                                                                                        rel="nofollow">Pharmaceutical
                                                                                        Sciences</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/social-sciences/"
                                                                                        target="_blank" rel="nofollow">Social
                                                                                        Sciences & Languages</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/performing-arts/"
                                                                                        target="_blank" rel="nofollow">Theatre &
                                                                                        Music</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/fine-arts/"
                                                                                        target="_blank" rel="nofollow">Fine Arts</a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/journalism-film-production/"
                                                                                        target="_blank" rel="nofollow">Journalism &
                                                                                        Mass Communication</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/polytechnic/"
                                                                                        target="_blank"
                                                                                        rel="nofollow">Polytechnic</a></li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/education/"
                                                                                        target="_blank" rel="nofollow">Education</a>
                                                                                    </li>
                                                                                    <li className="menu-item"><a className="menu-link"
                                                                                        href="https://schools.lpu.in/physical-education/"
                                                                                        target="_blank" rel="nofollow">Physical
                                                                                        Education</a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                        <li className="menu-item mega-menu"><a className="menu-link" href="#">
                                                            <div>Campus Life</div>
                                                        </a>
                                                            <div className="mega-menu-content mega-menu-style-2">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-6">
                                                                            <li className="menu-item mega-menu-title"><a className="menu-link"
                                                                                href="#">
                                                                                <div>Campus Life</div>
                                                                            </a>
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        <ul className="sub-menu-container">
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/entrepreneurship.php">
                                                                                                <div>Entrepreneurship</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/sports.php">
                                                                                                <div>Sports</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/art-and-culture.php">
                                                                                                <div>Art and Culture</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/campus-events.php">
                                                                                                <div>Campus Events</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/student-organisations.php">
                                                                                                <div>Student Organizations</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/community-services.php">
                                                                                                <div>Community Service</div>
                                                                                            </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <ul className="sub-menu-container">
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/visitors.php">
                                                                                                <div>Visitors</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/diversity.php">
                                                                                                <div>Diversity</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/on-campus-jobs.php">
                                                                                                <div>On Campus Jobs</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/fun-zone.php">
                                                                                                <div>Fun Zone</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/campus-life/career-enhancement-initiatives.php">
                                                                                                <div>Career Enhancement Initiatives
                                                                                                </div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/lpusummerschool/">
                                                                                                <div>LPU Summer School</div>
                                                                                            </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="sub-menu-container mega-menu-column col-lg-6">
                                                                            <li className="menu-item mega-menu-title"><a className="menu-link"
                                                                                href="#">
                                                                                <div>Student Services</div>
                                                                            </a>
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        <ul className="sub-menu-container">
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/security.php">
                                                                                                <div>Campus Security</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/healthcare.php">
                                                                                                <div>Uni Health Centre</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/ums.php">
                                                                                                <div>University Management System
                                                                                                </div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/residence.php">
                                                                                                <div>Residential Facilities</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/transport.php">
                                                                                                <div>Transportation Facilities</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                target="_blank"
                                                                                                href="https://www.lpu.in/student-services/lovely-world.php">
                                                                                                <div>Lovely World</div>
                                                                                            </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <ul className="sub-menu-container">
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/shopping-dining.php">
                                                                                                <div>Shopping and Dining</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/banking-postal-services.php">
                                                                                                <div>Banking and Postal Services
                                                                                                </div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/student-services/education-loan-assistance.php">
                                                                                                <div>Education Loan Assistance</div>
                                                                                            </a>
                                                                                            </li>
                                                                                            <li className="menu-item"><a className="menu-link"
                                                                                                href="https://www.lpu.in/placements.php">
                                                                                                <div>Placements</div>
                                                                                            </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                        <li className="menu-item">
                                                            <a className="menu-link" href="https://www.lpu.in/placements.php">
                                                                <div>Placements</div>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a className="menu-link" href="https://www.lpu.in/academics/research.php">
                                                                <div>Research</div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav> 

                                            </div>
                                            <form action="https://www.lpu.in/result.php" className="top-search-form" name="form2"
                                                id="form2">
                                                <input type="hidden" name="cx" value="partner-pub-016589675364233558975:gl7zrlhae3u" />
                                                <input type="hidden" name="cof" value="FORID:11" />
                                                <input type="hidden" name="ie" value="ISO-8859-1" />
                                                {/* <input type="text" name="q" onClick="make_blank();" className="form-control"
                                                    placeholder="Type &amp; Hit Enter.." autoComplete="off" /> */}
                                            </form>


                                            <div id="top-search" className="header-misc-icon">
                                                <a href="#" id="top-search-trigger"><i className="icon-line-search"></i><i
                                                    className="icon-line-cross"></i></a>
                                            </div>
                                            <div className="nav-apply-now">
                                                <a href="https://admission.lpu.in/" target="_blank" className="lpu-btn">

                                                    Apply now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                </div>
                    
            </header>

            <div className={styles.stickyBar}>
                <ul>
                    {stickyBarContent.map((item, index) => (
                        <li key={index} className={item.className}>
                            <a href={item.url} className={item.linkClass}>
                                <img src={item.icon} alt={item.label} />
                                <span className="st-label">{item.label}</span>
                                <span className="apply-now">{item.buttonLabel}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
