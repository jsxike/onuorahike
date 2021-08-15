$(document).ready(function () {
  const getWorkExperience = () => {
    $.getJSON('/experience.json', (data) => {
      let createWorkExp = `<h2 class="resume_head">Work Experience</h2>`;
      data.forEach((exp) => {
        createWorkExp += `<h3 class="resume_company">${exp.company}</h3>`;
        createWorkExp += `<h3 class="resume_company">${exp.date}</h3>`;
        createWorkExp += `<ul>`;
        exp.works.forEach((work) => {
          createWorkExp += `<li class="resume_list">${work}</li>`;
        });
        createWorkExp += `</ul>`;
      });
      // console.log(createWorkExp);
      $('.workexperience').html(createWorkExp);
    }).fail((jqXHR) => {
      console.log(jqXHR.statusText);
    });
  };

  getWorkExperience();

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
  $('.home_section-button').on('click', function () {
    $('html, body').animate({ scrollTop: $('.header').offset().top }, 'slow');
  });
  $('.work_section-button').on('click', function () {
    $('html, body').animate({ scrollTop: $('.work_header').offset().top }, 'slow');
  });
  $('.resume_section-button').on('click', function () {
    $('html, body').animate({ scrollTop: $('.resume_header').offset().top }, 'slow');
  });

  ////PARTICLEJS
  // header particle
  particlesJS('header-particles', {
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
});
