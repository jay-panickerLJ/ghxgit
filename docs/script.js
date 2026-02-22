// ==================== //
// Tab Navigation
// ==================== //

function setupTabs(containerSelector, tabBtnSelector, tabPaneSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const tabs = container.querySelectorAll(tabBtnSelector);
    const panes = container.querySelectorAll(tabPaneSelector);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding pane
            tab.classList.add('active');
            const pane = container.querySelector(`#tab-${tabName}`);
            if (pane) {
                pane.classList.add('active');
            }
        });
    });
}

function setupInstallTabs() {
    const container = document.querySelector('.install-tabs');
    if (!container) return;

    const tabs = container.querySelectorAll('[data-install]');
    const panes = container.querySelectorAll('[id^="install-"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const installType = tab.dataset.install;

            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class
            tab.classList.add('active');
            const pane = container.querySelector(`#install-${installType}`);
            if (pane) {
                pane.classList.add('active');
            }
        });
    });
}

// ==================== //
// FAQ Accordion
// ==================== //

function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ==================== //
// Smooth Scroll for Anchor Links
// ==================== //

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== //
// Navbar Active State on Scroll
// ==================== //

function setupNavbarScroll() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== //
// Copy to Clipboard
// ==================== //

function setupCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            font-size: 0.875rem;
            display: none;
        `;

        block.style.position = 'relative';
        block.appendChild(button);

        // Show button on hover
        block.addEventListener('mouseenter', () => {
            button.style.display = 'block';
        });

        block.addEventListener('mouseleave', () => {
            button.style.display = 'none';
        });

        // Copy functionality
        button.addEventListener('click', () => {
            const text = block.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
}

// ==================== //
// Animation Observer for Elements
// ==================== //

function setupAnimationObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe feature cards and command groups
    document.querySelectorAll('.feature-card, .command-group, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== //
// Initialize
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
    // Setup tabs
    setupTabs('.examples-tabs', '.tab-btn[data-tab]', '.tab-pane[id^="tab-"]');
    setupInstallTabs();

    // Setup FAQ
    setupFAQ();

    // Setup smooth scroll
    setupSmoothScroll();

    // Setup navbar scroll
    setupNavbarScroll();

    // Setup copy to clipboard
    setupCodeCopy();

    // Setup animations
    setupAnimationObserver();

    // Log that everything is ready
    console.log('🚀 ghxgit website initialized');
});

// ==================== //
// Keyboard Navigation
// ==================== //

document.addEventListener('keydown', (e) => {
    // Close FAQ on Escape
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    // Navigate tabs with arrow keys (if a tab is focused)
    const activeTab = document.activeElement;
    if (activeTab && activeTab.classList.contains('tab-btn')) {
        const allTabs = Array.from(activeTab.parentElement.querySelectorAll('.tab-btn'));
        const currentIndex = allTabs.indexOf(activeTab);

        if (e.key === 'ArrowRight' && currentIndex < allTabs.length - 1) {
            e.preventDefault();
            allTabs[currentIndex + 1].click();
            allTabs[currentIndex + 1].focus();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            allTabs[currentIndex - 1].click();
            allTabs[currentIndex - 1].focus();
        }
    }
});

// ==================== //
// Performance Monitoring
// ==================== //

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}
