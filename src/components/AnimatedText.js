class AnimatedText {
    constructor(element, options = {}) {
        this.element = element;
        this.originalText = element.textContent;
        this.options = {
            staggerDelay: options.staggerDelay || 80,
            animationDuration: options.animationDuration || 500,
            threshold: options.threshold || 0.3,
            once: options.once !== false,
            ...options
        };

        this.observer = null;
        this.animated = false;

        this.init();
    }

    init() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return; // Don't animate for users who prefer reduced motion
        }

        this.setupHTML();
        this.setupObserver();
    }

    setupHTML() {
        // Split text into words and wrap each in a span
        const words = this.originalText.split(' ');
        const wrappedWords = words.map((word, index) =>
            `<span class="animated-word" style="
        display: inline-block;
        margin-right: 0.25em;
        opacity: 0;
        filter: blur(8px);
        transform: translateY(20px);
        transition: all ${this.options.animationDuration}ms ease-out;
        transition-delay: ${index * this.options.staggerDelay}ms;
      ">${word}</span>`
        ).join('');

        this.element.innerHTML = wrappedWords;
        this.words = this.element.querySelectorAll('.animated-word');
    }

    setupObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: this.options.threshold
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateIn();
                    if (this.options.once) {
                        this.observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        this.observer.observe(this.element);
    }

    animateIn() {
        this.animated = true;

        // Trigger animation by updating styles
        this.words.forEach(word => {
            word.style.opacity = '1';
            word.style.filter = 'blur(0px)';
            word.style.transform = 'translateY(0px)';
        });
    }

    // Method to manually trigger animation
    trigger() {
        if (!this.animated) {
            this.animateIn();
        }
    }

    // Method to reset animation
    reset() {
        this.animated = false;
        this.words.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.filter = 'blur(8px)';
            word.style.transform = 'translateY(20px)';
            word.style.transitionDelay = `${index * this.options.staggerDelay}ms`;
        });
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.element.innerHTML = this.originalText;
    }
}

// Auto-initialize elements with data-animated-text attribute
document.addEventListener('astro:page-load', () => {
    const elements = document.querySelectorAll('[data-animated-text]');
    elements.forEach(element => {
        const options = {};

        // Read options from data attributes
        if (element.dataset.staggerDelay) {
            options.staggerDelay = parseInt(element.dataset.staggerDelay);
        }
        if (element.dataset.animationDuration) {
            options.animationDuration = parseInt(element.dataset.animationDuration);
        }
        if (element.dataset.threshold) {
            options.threshold = parseFloat(element.dataset.threshold);
        }
        if (element.dataset.once) {
            options.once = element.dataset.once !== 'false';
        }

        new AnimatedText(element, options);
    });
});

// Export for manual use
export default AnimatedText;
