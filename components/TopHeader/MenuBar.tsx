'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MenuBar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const goto = (route: string) => {
    router.push(`/${route}`);
  };

  const handleChangePassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // Implement your change password logic here
    alert('Change password clicked');
  };

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg mb-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavbarCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-transparent">
              {/* Bookings & Payments */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  id="newBookingsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ borderBottom: '1px solid #ef7d00' }}>Bookings & Payments</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="newBookingsDropdown">
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('NewBookings')}>
                      New Booking
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('ViewBookings')}>
                      All Bookings
                    </a>
                  </li>
                </ul>
              </li>

              {/* Payment Receipts */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  id="paymentReceiptsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ borderBottom: '1px solid #ef7d00' }}>Payment Receipts</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="paymentReceiptsDropdown">
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('SearchPayments')}>
                      All Paid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('SearchPendingPayments')}>
                      All Pending
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('FailedPayments')}>
                      All Failed
                    </a>
                  </li>
                </ul>
              </li>

              {/* Results */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  id="resultsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ borderBottom: '1px solid #ef7d00' }}>Results</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="resultsDropdown">
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('BookingStatus')}>
                      Test Status
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item custom-dropdown-item" onClick={() => goto('BookingResult')}>
                      View Results
                    </a>
                  </li>
                </ul>
              </li>

              {/* Change Password */}
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#" onClick={handleChangePassword}>
                  Change Password
                </a>
              </li>

              {/* Logout */}
              <li className="nav-item">
                <a className="nav-link custom-nav-link" onClick={() => goto('Login')}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center mt-4">
        <h2 className="mb-0 text-center mb-4">Central Instrumentation Facility</h2>
      </div>
    </>
  );
};

export default MenuBar;
