document.addEventListener('DOMContentLoaded', () => {
    // Global dark variable accessible anywhere
    window.dark = null;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize localStorage 'dark' state
    if (localStorage.getItem('dark') === null) {
        localStorage.setItem('dark', prefersDark.matches ? '1' : '0');
    }

    const colorConfig = {
        // Backgrounds (dark)
        'dpurple': { type: 'background', dark: 'rgba(42, 1, 97, 1)' },
        'dblack': { type: 'background', dark: 'rgba(0, 0, 0, 1)' },
        'dred': { type: 'background', dark: 'rgba(255, 0, 0, 1)' },
        'dblue': { type: 'background', dark: 'rgba(0, 0, 139, 1)' },
        'dgreen': { type: 'background', dark: 'rgba(0, 100, 0, 1)' },
        'dyellow': { type: 'background', dark: 'rgba(128, 128, 0, 1)' },
        'dorange': { type: 'background', dark: 'rgba(255, 140, 0, 1)' },

        // Backgrounds (light)
        'lwhite': { type: 'background', light: 'rgba(255, 255, 255, 1)' },
        'lgray': { type: 'background', light: 'rgba(184, 183, 185, 1)' },
        'lpurple': { type: 'background', light: 'rgba(132, 0, 255, 1)' },
        'lblue': { type: 'background', light: 'rgba(220, 230, 255, 1)' },
        'lgreen': { type: 'background', light: 'rgba(220, 255, 220, 1)' },
        'lred': { type: 'background', light: 'rgba(255, 220, 220, 1)' },
        'lyellow': { type: 'background', light: 'rgba(255, 255, 224, 1)' },
        'lorange': { type: 'background', light: 'rgba(255, 230, 200, 1)' },
        'lblack': { type: 'background', light: 'rgba(0, 0, 0, 1)' },

        // Text (dark)
        'dtwhite': { type: 'text', dark: 'rgba(255, 255, 255, 1)' },
        'dtred': { type: 'text', dark: 'rgba(255, 0, 0, 1)' },
        'dtblue': { type: 'text', dark: 'rgba(173, 216, 230, 1)' },
        'dtgreen': { type: 'text', dark: 'rgba(144, 238, 144, 1)' },
        'dtyellow': { type: 'text', dark: 'rgba(255, 255, 0, 1)' },
        'dtorange': { type: 'text', dark: 'rgba(255, 165, 0, 1)' },

        // Text (light)
        'tlblack': { type: 'text', light: 'rgba(0, 0, 0, 1)' },
        'tlred': { type: 'text', light: 'rgba(255, 0, 0, 1)' },
        'tlblue': { type: 'text', light: 'rgba(0, 0, 255, 1)' },
        'tlgreen': { type: 'text', light: 'rgba(0, 128, 0, 1)' },
        'tlyellow': { type: 'text', light: 'rgba(128, 128, 0, 1)' },
        'tlorange': { type: 'text', light: 'rgba(255, 69, 0, 1)' },
        'tlwhite': { type: 'text', light: 'rgba(255, 255, 255, 1)' },
        'ltblue': { type: 'text', light: 'rgba(0, 0, 255, 1)' },
    };

    function applyTheme(mode) {
        const allElementsWithColorAttrs = new Set();
        for (const attr in colorConfig) {
            document.querySelectorAll(`[${attr}]`).forEach(el => {
                allElementsWithColorAttrs.add(el);
            });
        }

        // Reset styles
        allElementsWithColorAttrs.forEach(el => {
            el.style.backgroundColor = '';
            el.style.color = '';
        });

        // Apply styles
        for (const attr in colorConfig) {
            document.querySelectorAll(`[${attr}]`).forEach(el => {
                const cfg = colorConfig[attr];
                if (mode === '1' && cfg.dark) {
                    if (cfg.type === 'background') el.style.backgroundColor = cfg.dark;
                    if (cfg.type === 'text') el.style.color = cfg.dark;
                }
                if (mode === '0' && cfg.light) {
                    if (cfg.type === 'background') el.style.backgroundColor = cfg.light;
                    if (cfg.type === 'text') el.style.color = cfg.light;
                }
            });
        }

        window.dark = (mode === '1');
        document.dispatchEvent(new CustomEvent("darkModeApplied", {
            detail: { dark: window.dark }
        }));
    }

    function toggleTheme() {
        const newMode = (localStorage.getItem('dark') === '0') ? '1' : '0';
        localStorage.setItem('dark', newMode);
        applyTheme(newMode);
    }

    // Apply on load
    applyTheme(localStorage.getItem('dark'));

    // Listen for manual toggle
    document.querySelectorAll('[dark-btn]').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Listen for system theme changes (only if user hasn’t chosen manually)
    prefersDark.addEventListener('change', e => {
        if (localStorage.getItem('dark') === null) {
            const mode = e.matches ? '1' : '0';
            localStorage.setItem('dark', mode);
            applyTheme(mode);
        }
    });
});

const fs = require('fs');

let css = '';

// Generate width attributes [w-x] (1 to 500)
for (let i = 1; i <= 500; i++) {
    css += `[w-${i}] { width: ${i}px; }\n`;
}

// Generate height attributes [h-x] (1 to 500)
for (let i = 1; i <= 500; i++) {
    css += `[h-${i}] { height: ${i}px; }\n`;
}

// Write to file
fs.writeFileSync('attributes-width-height.css', css);

console.log('CSS file generated: attributes-width-height.css');
