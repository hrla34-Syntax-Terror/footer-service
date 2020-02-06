import React from 'react';

var Contact = (props) => {
  return (
    <div className="AJcontact">
      <div className="AJcontactmethod AJcontactmethod1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="AJcontacticon">
          <path d="M4.36 5.783l1.848-1.548a1.014 1.014 0 011.663.724l.007.117c.065.738.196 1.458.386 2.153.055.198.14.463.255.796.09.259.072.542-.05.786l-.966 1.931a14.263 14.263 0 005.756 5.757l1.93-.966c.245-.122.528-.14.786-.05.331.114.595.199.792.253a12.126 12.126 0 002.273.395 1.014 1.014 0 01.72 1.667l-1.557 1.846a.997.997 0 01-.936.34c-.57-.1-1.012-.192-1.327-.273A16.25 16.25 0 014.29 8.066a18.567 18.567 0 01-.274-1.336 1.008 1.008 0 01.344-.947z"/>
        </svg>
        <div className="AJcontactmethodsection">
          <div className="AJcontactmethodtitle">1-800-426-4840</div>
          <div className="AJcontactdetails">Mon–Fri, 5am–10pm PT<br></br>Sat–Sun, 6am–9pm PT</div>
        </div>
      </div>
      <div className="AJcontactmethod AJcontactmethod2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="AJcontacticon">
          <path d="M21 5a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18zm-1 3.536l-7.483 4.32a1 1 0 01-1.017.01L4 8.536V17h16V8.536zM18.658 7H5.34L12 10.845 18.658 7z"/>
        </svg>
        <div className="AJcontactmethodsection">
          <div className="AJcontactmethodtitle">EMAIL US</div>
          <div className="AJcontactdetails">We will respond as quickly as we can.</div>
        </div>
      </div>
      <div className="AJcontactmethod AJcontactmethod3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="AJcontacticon">
          <path d="M21 4a1 1 0 011 1v11a1 1 0 01-1 1h-2.002v2a.999.999 0 01-1.635.771L14 17H3a1 1 0 01-1-1V5a1 1 0 011-1h18zm-1 2H4v9h10.718l2.28 1.879V15H20V6zm-7.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
        <div className="AJcontactmethodsection">
          <div className="AJcontactmethodtitle">LIVE CHAT</div>
          <div className="AJcontactdetails">Mon–Fri, 5am–10pm PT<br></br>Sat–Sun, 6am–9pm PT</div>
        </div>
      </div>
      <div className="AJcontactmethod AJcontactmethod4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="AJcontacticon">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 13.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 6a3.5 3.5 0 00-3.5 3.5 1 1 0 002 0 1.5 1.5 0 013 0c0 .816-.881 1.119-1.5 1.75s-1 1.296-1 2.257a1 1 0 102-.007 1.493 1.493 0 01.695-1.266c.233-.148 1.805-.938 1.805-2.734A3.5 3.5 0 0012 6z"/>
        </svg>
        <div className="AJcontactmethodsection">
          <div className="AJcontactmethodtitle">HELP CENTER</div>
          <div className="AJcontactdetails">Find answers online anytime.</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;