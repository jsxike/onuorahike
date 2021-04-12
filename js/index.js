$(document).ready(function () {
  ///Navigation click
  $('.nav_icon').on('click', function () {
    $('.navigation').toggleClass('clicked');
    $('.nav').toggleClass('clicked');
    $(this).toggleClass('clicked');
  });
  $('.navigation a').on('click', function () {
    $('.navigation').toggleClass('clicked');
    $('.nav').toggleClass('clicked');
    $('.nav_icon').toggleClass('clicked');
  });

  /// Navigation scroll
  $('.work_section-button').on('click', function () {
    $('html, body').animate({ scrollTop: $('.work_header').offset().top }, 'slow');
  });
  $('.resume_section-button').on('click', function () {
    $('html, body').animate({ scrollTop: $('.resume_header').offset().top }, 'slow');
  });

  /////contruction
  $('.construction').addClass('conenter');
  window.setTimeout(() => {
    $('.construction').removeClass('conenter');
  }, 5000);
  window.setTimeout(() => {
    $('.construction').remove();
  }, 7000);
  // const frontLogo = document.querySelectorAll('.header_logo path');
  // for (let i = 0; i < frontLogo.length; i++) {
  //   console.log(`Letter ${i + 1} length is ${frontLogo[i].getTotalLength()}`);
  // }

  ////PARTICLEJS
  // header particle
  particlesJS('header-particles', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1,
          color: '#6ff6a7',
        },
        polygon: {
          nb_sides: 4.800000000000001,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 160,
        color: '#ffffff',
        opacity: 0.19,
        width: 0,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // work particles
  particlesJS('work-particles', {
    particles: {
      number: {
        value: 77,
        density: {
          enable: false,
          value_area: 1341.5509907748635,
        },
      },
      color: {
        value: '#6ff6a7',
      },
      shape: {
        type: 'edge',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 12,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.01603412060865523,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 28.05971106514665,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 0,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.603412060865523,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 481.0236182596568,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // resume particles
  particlesJS('resume-particles', {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#b4b3b4',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 1.5,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 112.2388442605866,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
