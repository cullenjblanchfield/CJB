import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/motion.css";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Projects() {
  const { showNav } = useContext(Context);
  const navigate = useNavigate();
  const sourceRef = useRef();
  const [spanArr, setSpanArr] = useState([]);
  const arr = [
    "Grow A Better Dallas",
    "A Million Smiles",
    "Sharing Breath Has No Label",
    "Asphalt And Steel",
    "Along The Flaggy Shore",
   // "The Craft - Mouawad", //
    "Santa Susana",
    "Cazcabel",
    "Nutrisystem",
    "Savvy Wealth",
    "The Hunt Institute",
    "My Center Within",
    "Amelia",
    "Sharing Breath Has No Label",
  ];

  function appendChildren() {
    let i = 0;
    let id;

    id = setInterval(() => {
      if (i === arr.length) {
        clearInterval(id);
        return;
      }
      const elToAdd = arr[i];
      setSpanArr((current) => [...current, elToAdd]);
      i = i + 1;
    }, 200);
  }

  useEffect(() => {
    appendChildren();
  }, []);

  function handleNav(span) {
    console.log(span);
    if (span === "London") {
      navigate(`/motion/${0}`);
    } else if (span === "NEXUS SECURITY") {
      navigate(`/motion/${1}`);
    } else if (span === "The Heart of Texas") {
      navigate(`/motion/${2}`);
    } else if (span === "SMU Women's Rowing") {
      navigate(`/motion/smu-rowing`);
    } else if (span === "Minerva") {
      navigate(`/motion/minerva`);
    } else if (span === "BORROW") {
      navigate(`/motion/${3}`);
    } else if (span === "The Social Panacea") {
      navigate(`/motion/panacea`);
    } else if (span === "PhaseOne Digitization") {
      navigate(`/motion/${6}`);
    } else if (span === "Fine Art America") {
      navigate(`/motion/${8}`);
    } else if (span === "AMN Welcome Back") {
      navigate(`/motion/${9}`);
    } else if (span === "A Million Smiles") {
      navigate(`/motion/A-Million-Smiles`);
    } else if (span === "Grow A Better Dallas") {
      navigate(`/motion/grow-a-better-dallas`);
    } else if (span === "Sharing Breath Has No Label") {
      navigate(`/motion/sharing-breath-has-no-label`);
    } else if (span === "Asphalt And Steel") {
      navigate(`/motion/asphalt-and-steel`);
    } else if (span === "It's Just Us") {
      navigate(`/motion/its-just-us`);
    } else if (span === "Along The Flaggy Shore") {
      navigate(`/motion/along-the-flaggy-shore`);
    } else if (span === "MERC") {
      navigate(`/motion/merc`);
    } else if (span === "Dance With Me Sophie") {
      navigate(`/motion/dance-with-me-sophie`);
    } else if (span === "Sweet Police") {
      navigate(`/motion/sweet-police`);
  //  } else if (span === "The Craft - Mouawad") {
   //   navigate(`/motion/the-craft-mouawad`);
    } else if (span === "Santa Susana") {
      navigate(`/motion/santa-susana`);
    } else if (span === "Cazcabel") {
      navigate(`/motion/cazcabel`);
    } else if (span === "Nutrisystem") {
      navigate(`/motion/nutrisystem`);
    } else if (span === "Savvy Wealth") {
      navigate(`/motion/savvy-wealth`);
    } else if (span === "My Center Within") {
      navigate(`/motion/my-center-within`);
    } else if (span === "The Hunt Institute") {
      navigate(`/motion/the-hunt-institute`);
    }
  }

  return (
    <div className="motion-container">
      {showNav && <SideBar />}
      <Header isBlack={true} />
      <div className="motion-desc">
        {/* <p id="feat-text">Films include</p> */}
        <p className="motion-desc-text">
          {spanArr.length > 0 &&
            spanArr.map((span, index) => {
              return (
                <span onClick={() => handleNav(span)} key={index}>
                  {span}
                </span>
              );
            })}
        </p>
      </div>
      <div className="videos-container">
        <Link to="/motion/grow-a-better-dallas">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #4A818E" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FGrowABetterDallas_Thumbnail.mp4?alt=media&token=d91bd8dc-80ff-4c1a-b62f-d87febff8112"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Grow a Better Dallas</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/A-Million-Smiles">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #C45532" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAMillionSmiles_Thumbnail.mp4?alt=media&token=9a92b8a3-0917-4654-a8ff-aa08d9035b4a"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">A Million Smiles</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/sharing-breath-has-no-label">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #8E4A6E" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FSharingBreathHasNoLabel_Thumbnail.mp4?alt=media&token=e0f7cea6-19c5-44f7-ad4f-adeed69777fd"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Sharing Breath Has No Label</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/asphalt-and-steel">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #B9AA1F" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAsphaltandSteel_Thumbnail.mp4?alt=media&token=1f2d1a71-f69c-4e44-8cca-2a3206d64f17"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Asphalt and Steel</p>
            </div>
          </div>
        </Link>

        <Link to="/motion/along-the-flaggy-shore">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #B94D1F" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FFlaggyShore_Thumbnail.mp4?alt=media&token=38f757b0-2606-4ac4-abdb-8dc8e3d5a94a"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Along the Flaggy Shore</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/the-craft-mouawad">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FMOUAWAD%2FThumbnailMOUAWAD.mp4?alt=media&token=1361e12b-f5a6-41cb-919d-03750dceb58f"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">THE CRAFT - MOUAWAD</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/santa-susana">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #4A90E2" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FSANTA%20SUSANA%2FThumbnailSantaSusana.mp4?alt=media&token=84c45f69-ea11-474e-922a-578b976d5591"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">SANTA SUSANA</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/cazcabel">
          <div className="motion-loop-container">
            <img
              style={{
                width: "70vw",
                margin: "10px",
                height: "auto",
                opacity: 0.85,
                border: "5px solid #777",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FCAZCABEL%2FSTILL%20PHOTOGRAPHY%2FCazcabel_Honey_Front_HoneycombHand.jpg?alt=media&token=319ee530-501b-47b1-9bbe-45668f5afb85"
              alt="CAZCABEL"
            />
            <div className="title-container">
              <p className="video-text">CAZCABEL</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/nutrisystem">
          <div className="motion-loop-container">
            <img
              style={{
                width: "70vw",
                margin: "10px",
                height: "auto",
                opacity: 0.85,
                border: "5px solid #4A90E2",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FNUTRISYSTEM%2Fnutrisystemthumbnail.jpg?alt=media&token=98f06fb8-a1f8-41a1-94bb-a8ebd276b1f4"
              alt="CAZCABEL"
            />
            <div className="title-container">
              <p className="video-text">NUTRISYSTEM</p>
            </div>
          </div>
        </Link>

        <Link to="/motion/savvy-wealth">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FSAVVY%2FThumbnailSavvy.mp4?alt=media&token=ee2ac7b0-7c65-4846-9c00-5db2519527a3"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">SAVVY WEALTH</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/the-hunt-institute">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FTHE%20HUNT%20INSTITUTE%2FHUNT%20INSTITUTE%20THUMBNAIL.mp4?alt=media&token=37599c94-ed4e-40f9-84dc-549e65af5e45"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">THE HUNT INSTITUTE</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/my-center-within">
          <div className="motion-loop-container">
            <img
              style={{
                width: "70vw",
                margin: "10px",
                height: "auto",
                opacity: 0.85,
                border: "5px solid #777",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FMYCENTERWITHIN%2FSTILL%20PHOTOGRAPHY%2FMyCenterWithin00187%20copy%202.jpg?alt=media&token=9f8ebd9b-bda2-4369-8845-50847f37017d"
              alt="CAZCABEL"
            />
            <div className="title-container">
              <p className="video-text">MY CENTER WITHIN</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/amelia">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAMELIA_Thumbnail.mp4?alt=media&token=d037378d-7946-4096-b7c4-b905f136f200"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">AMELIA</p>
            </div>
          </div>
        </Link>

        {/* <Link to="/motion/4">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #f22170" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FHeartOfTXThumbnail.mp4?alt=media&token=8a40e1f7-1d8e-4b08-b74f-7463e67df76b"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">LOVE IN THE MORNING/EVENING</p>
            </div>
          </div>
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
