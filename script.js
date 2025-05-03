
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation
            const menuBtn = document.getElementById('menuBtn');
            const closeMenuBtn = document.getElementById('closeMenuBtn');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');
            const mobileNavLinks = mobileNav.getElementsByTagName('a');

            function openMenu() {
                mobileNav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeMenu() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            menuBtn.addEventListener('click', openMenu);
            closeMenuBtn.addEventListener('click', closeMenu);
            overlay.addEventListener('click', closeMenu);

            // Close mobile nav when clicking on links
            Array.from(mobileNavLinks).forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Form submission handling
            const contactForm = document.querySelector('form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Simple validation
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    if (!name || !email || !message) {
                        alert('Please fill out all required fields.');
                        return;
                    }
                    // Here you would normally send the form data to a server
                    // For this demo, just show a success message
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                });
            }
        });
  