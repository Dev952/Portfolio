 document.addEventListener("DOMContentLoaded", function () {
      // Mobile menu toggle with enhanced animation
      const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");

      if (menuToggle) {
        menuToggle.addEventListener("click", function () {
          navLinks.classList.toggle("active");
          
          // Animate menu toggle icon
          if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.style.transform = "rotate(180deg)";
          } else {
            menuToggle.innerHTML = "☰";
            menuToggle.style.transform = "rotate(0deg)";
          }
        });
      }

      // Enhanced smooth scrolling with offset for navbar
      const links = document.querySelectorAll("nav ul li a");
      links.forEach(link => {
        link.addEventListener("click", function (event) {
          if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
              const navHeight = document.querySelector('nav').offsetHeight;
              const sectionTop = section.offsetTop - navHeight - 20;
              
              window.scrollTo({
                top: sectionTop,
                behavior: "smooth"
              });
            }
          }
        });
      });

      // Enhanced scroll indicator with smoother animation
      let ticking = false;
      
      function updateScrollIndicator() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.min((scrollTop / scrollHeight) * 100, 100);
        document.querySelector(".scroll-indicator").style.width = scrollPercent + "%";
        ticking = false;
      }

      window.addEventListener("scroll", function() {
        if (!ticking) {
          requestAnimationFrame(updateScrollIndicator);
          ticking = true;
        }
      });

      // Enhanced active navigation state
      window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, header');
        const navHeight = document.querySelector('nav').offsetHeight;
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop - navHeight - 50;
          const sectionHeight = section.clientHeight;
          const scrollPos = window.pageYOffset;
          
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });

      // Close mobile menu when clicking on links
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = "☰";
          menuToggle.style.transform = "rotate(0deg)";
        });
      });

      // Simplified navbar background on scroll (no dynamic blur)
      window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.style.background = window.scrollY > 100 ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)';
        nav.style.backdropFilter = 'none';
      });

      // Typewriter effect for hero subtitle
      const subtitle = document.querySelector('.hero-subtitle');
      if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
          if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
          }
        }
        
        setTimeout(typeWriter, 1200);
      }

      // Collapsible project cards
      document.querySelectorAll('.project-card .project-header').forEach(header => {
        header.addEventListener('click', () => {
          const card = header.closest('.project-card');
          card.classList.toggle('open');
        });
      });
    });