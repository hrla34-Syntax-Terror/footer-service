import React from 'react';

var Legal = (props) => {
  return (
    <div className="AJlegal">
      <div className="AJsocials">
        <div className="AJphoneapp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="AJphoneappicon">
            <path d="M4.36 5.783l1.848-1.548a1.014 1.014 0 011.663.724l.007.117c.065.738.196 1.458.386 2.153.055.198.14.463.255.796.09.259.072.542-.05.786l-.966 1.931a14.263 14.263 0 005.756 5.757l1.93-.966c.245-.122.528-.14.786-.05.331.114.595.199.792.253a12.126 12.126 0 002.273.395 1.014 1.014 0 01.72 1.667l-1.557 1.846a.997.997 0 01-.936.34c-.57-.1-1.012-.192-1.327-.273A16.25 16.25 0 014.29 8.066a18.567 18.567 0 01-.274-1.336 1.008 1.008 0 01.344-.947z"/>
          </svg>
          <div className="AJphoneapptext">
            Get REI apps for shopping & adventure
          </div>
        </div>
        <div className="AJsocialplatformcontainer">
          <svg className="AJsocialplatforms" viewBox="0 0 24 24">
            <path d="M11.992 9.052s-1.063-2.731 2.115-4.603c0 0 2.582-1.47 5.073.91 0 0 1.124-.053 2.479-1.018 0 0 .2.888-1.567 2.316 0 0 .982-.077 2.098-.785 0 0-.212 1.223-2.032 2.11 0 0 .554 9.673-9.188 11.79 0 0-5.152 1.127-8.78-1.631 0 0 3.849.388 5.893-1.69 0 0-2.565.233-3.828-2.7 0 0 1.282.214 1.804-.194 0 0-2.706.02-3.308-3.904 0 0 1.103.544 1.824.447 0 0-3.063-1.834-1.21-5.414 0 0 3.418 4.118 8.627 4.366z"/>
          </svg>
          <svg className="AJsocialplatforms" viewBox="0 0 24 24">
          <path d="M9.677 20.895v-8.241H7V9.69h2.677V7.517S9.485 3 13.394 3H17v3.02h-2.415s-1.45-.08-1.465 1.417V9.69h3.34L16 12.654h-2.912V21h-3.41v-.105z"/>
          </svg>
          <svg className="AJsocialplatforms" viewBox="0 0 24 24">
            <path d="M7.677 17.192l1.246-5.156s.126-.623-.196-1.178c0 0-.718-1.771.7-3.273 0 0 1.161-1.298 2.647-.32 0 0 .848.659.506 1.907l-1.009 3.113s-.616 2.367 1.665 2.57c0 0 2.408.32 3.57-2.901 1.161-3.221-.19-5.273-.19-5.273s-1.737-3.012-5.66-2.378c-3.925.634-4.421 4.33-4.421 4.33s-.295 2.278.936 3.938l-.59 1.986S3.879 12.659 4.005 9.25c0 0 .126-5.683 6.013-7.053 0 0 5.331-1.326 8.487 2.904 1.766 2.366 1.64 4.942 1.262 6.853-.379 1.91-1.808 3.133-1.808 3.133s-3.864 4.048-7.226.476l-.715 2.723S9.177 21.236 8.04 22l-.523-.132s-.26-3.287.16-4.676z"/>
          </svg>
          <svg className="AJsocialplatforms" viewBox="0 0 24 24">
            <path d="M18.941 5.225s1.716.06 2.387 1.336c0 0 .67.925.67 5.439v.041c.004.352.018 2.86-.277 4.239-.318 1.485-1.02 1.92-1.02 1.92s-.45.433-1.443.551c-.993.119-4.213.249-7.273.249 0 0-5.603-.003-7.49-.313-1.82-.298-2.13-1.936-2.15-2.052l-.01-.06c-.084-.514-.715-4.683.008-9.198 0 0 .224-1.926 2.479-2.152 0 0 2.318-.213 6.795-.225h.368c4.717 0 6.956.225 6.956.225zM9.925 9.143v5.495l5.469-2.747-5.469-2.748z"/>
          </svg>
          <svg className="AJsocialplatforms" viewBox="0 0 24 24">
            <path d="M16 3a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8zm0 2H8a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3zm-4 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-2.75a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </div>
      </div>
      <div className="AJcopyright">© 2020 Recreational Equipment, Inc. All rights reserved. REI and the REI Co-op logo are trademarks of Recreational Equipment, Inc.</div>
      <ul className="AJlegallinkscontainer">
        <li className="AJlegallink">Terms of Use</li>
        <li className="AJlegallink">Privacy Policy</li>
        <li className="AJlegallink">Interest Based Ads</li>
        <li className="AJlegallink">Product Recalls</li>
        <li className="AJlegallink">CA Transparency Act</li>
        <li className="AJlegallink">REI Accessibility Statement</li>
      </ul>
    </div>
  );
}

export default Legal;