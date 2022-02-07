import React from 'react'
import {Link} from 'react-router-dom'


function Signup() {
    return (
        <div className="bg">
            <div id="form">
            <h1>Sign Up</h1>
            <p>Already have na account yet? <Link to="/login" className="link">Login</Link></p>
            <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="your@example.com" ></input>
            </div>
            <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" ></input>
            </div>
            <div className="field">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Your Password" ></input>
            </div>
            <input type="button" value="Sign Up"></input>
            </div>
            <div id="banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="380"  viewBox="0 0 509.514 744.766">
  <g id="task_image" data-name="task image" transform="translate(-1178.436 -167.117)">
    <path id="Path_22" data-name="Path 22" d="M747.327,253.445h-4.092v-112.1a64.883,64.883,0,0,0-64.883-64.883H440.845a64.883,64.883,0,0,0-64.883,64.883v615a64.883,64.883,0,0,0,64.883,64.883H678.352a64.883,64.883,0,0,0,64.882-64.882V333.24h4.092Z" transform="translate(802.474 90.655)" fill="#e6e6e6"/>
    <path id="Path_23" data-name="Path 23" d="M680.97,93.336h-31a23.02,23.02,0,0,1-21.316,31.714H492.589a23.02,23.02,0,0,1-21.314-31.714H442.319a48.454,48.454,0,0,0-48.454,48.454V755.9a48.454,48.454,0,0,0,48.454,48.454H680.97A48.454,48.454,0,0,0,729.424,755.9h0V141.788a48.454,48.454,0,0,0-48.453-48.453Z" transform="translate(802.474 90.655)" fill="#fff"/>
    <path id="Path_6" data-name="Path 6" d="M531.234,337.965a24.439,24.439,0,0,1,12.234-21.176,24.45,24.45,0,1,0,0,42.347A24.434,24.434,0,0,1,531.234,337.965Z" transform="translate(802.474 90.655)" fill="#ccc"/>
    <path id="Path_7" data-name="Path 7" d="M561.971,337.965a24.438,24.438,0,0,1,12.234-21.177,24.45,24.45,0,1,0,0,42.348,24.434,24.434,0,0,1-12.23-21.171Z" transform="translate(802.474 90.655)" fill="#ccc"/>
    <circle id="Ellipse_1" data-name="Ellipse 1" cx="24.45" cy="24.45" r="24.45" transform="translate(1370.034 404.168)" fill="#1462e1"/>
    <path id="Path_8" data-name="Path 8" d="M632.872,414.331h-142.5a5.123,5.123,0,0,1-5.117-5.117v-142.5a5.123,5.123,0,0,1,5.117-5.117h142.5a5.123,5.123,0,0,1,5.117,5.117v142.5A5.123,5.123,0,0,1,632.872,414.331Zm-142.5-150.686a3.073,3.073,0,0,0-3.07,3.07v142.5a3.073,3.073,0,0,0,3.07,3.07h142.5a3.073,3.073,0,0,0,3.07-3.07v-142.5a3.073,3.073,0,0,0-3.07-3.07Z" transform="translate(802.474 90.655)" fill="#ccc"/>
    <rect id="Rectangle_1" data-name="Rectangle 1" width="218.552" height="2.047" transform="translate(1248.612 614.218)" fill="#ccc"/>
    <circle id="Ellipse_2" data-name="Ellipse 2" cx="6.902" cy="6.902" r="6.902" transform="translate(1248.612 587.634)" fill="#1462e1"/>
    <rect id="Rectangle_2" data-name="Rectangle 2" width="218.552" height="2.047" transform="translate(1248.612 683.234)" fill="#ccc"/>
    <circle id="Ellipse_3" data-name="Ellipse 3" cx="6.902" cy="6.902" r="6.902" transform="translate(1248.612 656.651)" fill="#1462e1"/>
    <path id="Path_1" data-name="Path 1" d="M660.69,671.172H591.622a4.5,4.5,0,0,1-4.5-4.5V642.464a4.5,4.5,0,0,1,4.5-4.5H660.69a4.5,4.5,0,0,1,4.5,4.5v24.208a4.5,4.5,0,0,1-4.5,4.5Z" transform="translate(661.573 87.703)" fill="#1462e1"/>
    <circle id="Ellipse_7" data-name="Ellipse 7" cx="6.902" cy="6.902" r="6.902" transform="translate(1271.126 587.634)" fill="#1462e1"/>
    <circle id="Ellipse_8" data-name="Ellipse 8" cx="6.902" cy="6.902" r="6.902" transform="translate(1293.64 587.634)" fill="#1462e1"/>
    <circle id="Ellipse_9" data-name="Ellipse 9" cx="6.902" cy="6.902" r="6.902" transform="translate(1271.126 656.651)" fill="#1462e1"/>
    <circle id="Ellipse_10" data-name="Ellipse 10" cx="6.902" cy="6.902" r="6.902" transform="translate(1293.64 656.651)" fill="#1462e1"/>
    <path id="Path_2" data-name="Path 2" d="M792.253,565.923a10.09,10.09,0,0,1,1.411.787l44.852-19.143,1.6-11.815,17.922-.11-1.059,27.1L797.78,578.4a10.619,10.619,0,0,1-.448,1.208,10.235,10.235,0,1,1-5.079-13.682Z" transform="translate(771.989 89.017)" fill="#ffb8b8"/>
    <path id="Path_3" data-name="Path 3" d="M636.98,735.021H624.72l-5.832-47.288h18.094Z" transform="translate(999.565 165.478)" fill="#ffb8b8"/>
    <path id="Path_4" data-name="Path 4" d="M615.963,731.518h23.644V746.4H601.076A14.887,14.887,0,0,1,615.963,731.518Z" transform="translate(999.565 165.478)" fill="#2f2e41"/>
    <path id="Path_5" data-name="Path 5" d="M684.66,731.557l-12.2,1.2-10.441-46.488,18.007-1.774Z" transform="translate(999.565 165.478)" fill="#ffb8b8"/>
    <path id="Path_6-2" data-name="Path 6" d="M891.686,806.128H915.33v14.887H876.8A14.887,14.887,0,0,1,891.686,806.128Z" transform="translate(696.556 180.769) rotate(-5.625)" fill="#2f2e41"/>
    <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="24.561" cy="24.561" r="24.561" transform="translate(1615.397 525.491)" fill="#ffb8b8"/>
    <path id="Path_7-2" data-name="Path 7" d="M849.556,801.919a4.471,4.471,0,0,1-4.415-3.7c-6.346-35.226-27.088-150.4-27.584-153.6a1.432,1.432,0,0,1-.016-.222v-8.588a1.489,1.489,0,0,1,.279-.872l2.74-3.838a1.479,1.479,0,0,1,1.143-.625c15.622-.732,66.784-2.879,69.256.209h0c2.482,3.1,1.605,12.507,1.4,14.36l.01.193L915.36,792.239a4.512,4.512,0,0,1-3.715,5.135l-14.356,2.365a4.521,4.521,0,0,1-5.025-3.093c-4.44-14.188-19.329-61.918-24.489-80.387a.5.5,0,0,0-.98.139c.258,17.606.881,62.523,1.1,78.037l.023,1.671a4.518,4.518,0,0,1-4.093,4.536L849.976,801.9C849.836,801.914,849.7,801.919,849.556,801.919Z" transform="translate(771.989 89.017)" fill="#2f2e41"/>
    <path id="Path_99" data-name="Path 99" d="M852.381,495.254c-4.286,2.548-6.851,7.23-8.323,12a113.679,113.679,0,0,0-4.884,27.159l-1.556,27.6-19.255,73.17c16.689,14.121,26.315,10.911,48.781-.639s25.032,3.851,25.032,3.851l4.492-62.258,6.418-68.032a30.165,30.165,0,0,0-4.861-4.674,49.659,49.659,0,0,0-42.442-9Z" transform="translate(771.989 89.017)" fill="#1462e1"/>
    <path id="Path_8-2" data-name="Path 8" d="M846.127,580.7a10.527,10.527,0,0,1,1.5.7l44.348-22.2.736-12.026,18.294-1.261.98,27.413-59.266,19.6a10.5,10.5,0,1,1-6.593-12.232Z" transform="translate(771.989 89.017)" fill="#ffb8b8"/>
    <path id="Path_101" data-name="Path 101" d="M902.766,508.411c10.911,3.851,12.833,45.574,12.833,45.574-12.837-7.06-28.241,4.493-28.241,4.493s-3.209-10.911-7.06-25.032a24.53,24.53,0,0,1,5.134-23.106S891.854,504.558,902.766,508.411Z" transform="translate(771.989 89.017)" fill="#1462e1"/>
    <path id="Path_102" data-name="Path 102" d="M889.991,467.531c-3.06-2.448-7.235,2-7.235,2L880.307,447.5s-15.3,1.833-25.094-.612-11.323,8.875-11.323,8.875a78.582,78.582,0,0,1-.306-13.771c.612-5.508,8.568-11.017,22.645-14.689s21.421,12.24,21.421,12.24C897.445,444.439,893.051,469.979,889.991,467.531Z" transform="translate(771.989 89.017)" fill="#2f2e41"/>
  </g>
</svg>

            </div>
        </div>
    )
}

export default Signup
