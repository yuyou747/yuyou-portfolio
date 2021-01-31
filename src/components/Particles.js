import React, { Component } from "react";
import Particles from "react-tsparticles";

let params = {


    particles: {
        number: {
            value: 0,
            density: {
                enable: true,
                value_area: 500
            }
        },
        color: {
            value: "#fbf30e",
            animation: {
                enable: true,
                speed: 120,
                sync: true
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 0
            },

        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 11,
            random: {
                enable: true,
                minimumValue: 3
            },
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 5,
                sync: true,
                startValue: "min",
                destroy: "max"
            }
        },
        links: {
            enable: false
        },
        move: {
            enable: true,
            speed: 7,
            direction: "none",
            random: false,
            straight: false,
            outMode: "destroy",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onhover: {
                enable: true,
                mode: "trail"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 350,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 300,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            },
            trail: {
                delay: 0.008,
                quantity: 10
            }
        }
    },
    retina_detect: true,
    background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        width: '100%',
        height: '100%',
    }

};

class Particle extends Component {
    render() {
        return (
            <div >
                <Particles width="100vw" height="100vh" params={params} />
            </div>
        );
    }
}

export default Particle;
