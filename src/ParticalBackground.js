import React from "react";
import Particles from "react-tsparticles"
import bgim from "./assets/img/Image_Bond.png";


export default function ParticleBackground() {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
      <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          img: {
            bgim}
          // color: {
          //   value: "#000000",
          // },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          // shape: {
          //   type: "circle",
          // },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "6"
            },
            image: [
              {
                src: "images/img1.png",
                width: 100,
                height: 100
              },
              {
                src: "images/img2.png",
                width: 100,
                height: 100
              },
              {
                src: "images/img3.png",
                width: 100,
                height: 100
              },
              
            ],
            polygon: {
              nb_sides: 10
            },
            stroke: {
              color: "#000000",
              width: 50
            },
            type: "image"
          },
         

          size: {
            random: true,
            value: 20,
          },
        },
        detectRetina: true,
      }}
    />
    );
}

