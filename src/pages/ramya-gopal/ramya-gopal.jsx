import React from "react";
import "rc-banner-anim/assets/index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RamyaImage from "../../assests/ramya/ramya-gopal-side-view.jpg";
import RamyaImage2 from "../../assests/ramya/042A7394.jpg";
import RamyaImage3 from "../../assests/ramya/042A7498.jpg";
import RamyaImage4 from "../../assests/ramya/look-into-eys.jpg";
import RamyaImage5 from "../../assests/ramya/holding-hands.jpg";
import RamyaImage6 from "../../assests/ramya/heart.jpg";
import RamyaImage7 from "../../assests/ramya/headkiss.jpg";
import RamyaImage8 from "../../assests/ramya/handrosebackside.jpg";
import RamyaImage9 from "../../assests/ramya/bornfire.jpg";
import RamyaImage10 from "../../assests/ramya/badge-stick.jpg";
import RamyaImage11 from "../../assests/ramya/backside.jpg";
import RamyaImage12 from "../../assests/ramya/5.jpg";

import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import "./ramya-gopal.css";

export const RamyaGopal = () => {
  return (
    <div>
      <h2 className="text-size p-2">Have a happy married life</h2>
      <div className="background-image">
        <img
          src={RamyaImage}
          alt="ramya gopal holding each other"
          width="100%"
        />
        <div class="image-text image-color text-size">
          We are getting married <br />{" "}
          <p style={{ color: "black" }}>10 Feb 2023</p>
        </div>
        <div className="p-6">
          <p class="text-size">Gopal</p>

          <p className="text-size image-color">Weds</p>

          <p className="text-size">Ramya</p>
        </div>
      </div>

      <div className="text-size p-6">
        <q>
          A successful marriage requires falling in{" "}
          <span className="background-color-image">love many times</span>,
          always with the{" "}
          <span className="background-color-image">same person</span>
        </q>
      </div>
      <div className="p-2">
        <MDBRow>
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage10}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src={RamyaImage9}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </MDBCol>

          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage8}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src={RamyaImage7}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </MDBCol>

          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage6}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src={RamyaImage5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src={RamyaImage4}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage11}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src={RamyaImage12}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>

          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src={RamyaImage2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src={RamyaImage3}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
        </MDBRow>
      </div>

      <div className="text-size p-6">
        Akka and Bava, Congratulations on your marriage, and may your life
        together be filled with adventure, companionship, and everlasting joy.
      </div>


      <div className="text-size p-6">
        Crafted with ❤️ by <span className="background-color-image">gnine creators</span>
      </div>

    </div>
  );
};
