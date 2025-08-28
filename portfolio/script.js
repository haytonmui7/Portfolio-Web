particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00ffcc", "#00ffff"]
    },
    shape: {
      type: "circle",
      "polygon": {
        "nb_sides": 5
      }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      push: {
        "particles_nb": 4
      },
      grab: {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      }
    }
  },
  retina_detect: true
});
