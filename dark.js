// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the 'dark-btn' attribute
    document.querySelectorAll('[dark-btn]').forEach(button => {

        // Initialize localStorage 'dark' state if not already set
        // '0' for light mode, '1' for dark mode
        if (localStorage.getItem('dark') === '0' || localStorage.getItem('dark') === '1') {
            // State is already set, do nothing
        } else {
            localStorage.setItem('dark', '0'); // Default to light mode
        }

        // Define a configuration object for all colors and their dark/light mode values.
        // Each key in this object represents an HTML attribute.
        // 'type': specifies if it controls 'background' or 'text' color.
        // 'dark': the color value when dark mode is active (only for dark-mode specific attributes).
        // 'light': the color value when light mode is active (only for light-mode specific attributes).
        const colorConfig = {
            // Dark Mode Backgrounds (only apply in dark mode)
            'dpurple': { type: 'background', dark: 'rgba(42, 1, 97, 1)' },
            'dblack': { type: 'background', dark: 'rgba(0, 0, 0, 1)' },
            'dred': { type: 'background', dark: 'rgba(255, 0, 0, 1)' },
            'dblue': { type: 'background', dark: 'rgba(0, 0, 139, 1)' },
            'dgreen': { type: 'background', dark: 'rgba(0, 100, 0, 1)' },
            'dyellow': { type: 'background', dark: 'rgba(128, 128, 0, 1)' },
            'dorange': { type: 'background', dark: 'rgba(255, 140, 0, 1)' },

            // Light Mode Backgrounds (only apply in light mode)
            'lwhite': { type: 'background', light: 'rgba(255, 255, 255, 1)' },
            'lgray': { type: 'background', light: 'rgba(184, 183, 185, 1)' },
            'lpurple': { type: 'background', light: 'rgba(132, 0, 255, 1)' },
            'lblue': { type: 'background', light: 'rgba(220, 230, 255, 1)' },
            'lgreen': { type: 'background', light: 'rgba(220, 255, 220, 1)' },
            'lred': { type: 'background', light: 'rgba(255, 220, 220, 1)' },
            'lyellow': { type: 'background', light: 'rgba(255, 255, 224, 1)' },
            'lorange': { type: 'background', light: 'rgba(255, 230, 200, 1)' },
            'lblack': { type: 'background', light: 'rgba(0, 0, 0, 1)' },

            // Dark Mode Text Colors (only apply in dark mode)
            'dtwhite': { type: 'text', dark: 'rgba(255, 255, 255, 1)' },
            'dtred': { type: 'text', dark: 'rgba(255, 0, 0, 1)' },
            'dtblue': { type: 'text', dark: 'rgba(173, 216, 230, 1)' },
            'dtgreen': { type: 'text', dark: 'rgba(144, 238, 144, 1)' },
            'dtyellow': { type: 'text', dark: 'rgba(255, 255, 0, 1)' },
            'dtorange': { type: 'text', dark: 'rgba(255, 165, 0, 1)' },

            // Light Mode Text Colors (only apply in light mode)
            'tlblack': { type: 'text', light: 'rgba(0, 0, 0, 1)' },
            'tlred': { type: 'text', light: 'rgba(255, 0, 0, 1)' },
            'tlblue': { type: 'text', light: 'rgba(0, 0, 255, 1)' },
            'tlgreen': { type: 'text', light: 'rgba(0, 128, 0, 1)' },
            'tlyellow': { type: 'text', light: 'rgba(128, 128, 0, 1)' },
            'tlorange': { type: 'text', light: 'rgba(255, 69, 0, 1)' },
            'tlwhite': { type: 'text', light: 'rgba(255, 255, 255, 1)' },
            'ltblue': { type: 'text', light: 'rgba(0, 0, 255, 1)' },
        };

        /**
         * Applies the specified theme (dark or light) to the elements.
         * @param {string} mode - '0' for light mode, '1' for dark mode.
         */
        function applyTheme(mode) {
            // Collect all elements that have any of our color attributes
            const allElementsWithColorAttrs = new Set();
            for (const attr in colorConfig) {
                document.querySelectorAll(`[${attr}]`).forEach(element => {
                    allElementsWithColorAttrs.add(element);
                });
            }

            // First, reset all relevant styles on all elements that might have been affected.
            // This ensures a clean slate before applying new styles for the current mode.
            allElementsWithColorAttrs.forEach(element => {
                element.style.backgroundColor = ''; // Reset to default/inherited
                element.style.color = ''; // Reset to default/inherited
            });

            // Then, apply colors based on the current mode
            for (const attr in colorConfig) {
                document.querySelectorAll(`[${attr}]`).forEach(element => {
                    const config = colorConfig[attr];

                    if (mode === '1') { // Dark Mode
                        if (config.dark !== undefined) { // Apply dark mode color if defined for this attribute
                            if (config.type === 'background') {
                                element.style.backgroundColor = config.dark;
                            } else if (config.type === 'text') {
                                element.style.color = config.dark;
                            }
                        }
                    } else { // Light Mode
                        if (config.light !== undefined) { // Apply light mode color if defined for this attribute
                            if (config.type === 'background') {
                                element.style.backgroundColor = config.light;
                            } else if (config.type === 'text') {
                                element.style.color = config.light;
                            }
                        }
                    }
                });
            }
            // Update the button text based on the current mode
            button.innerText = (mode === '1') ? 'Light Mode' : 'Dark Mode';
        }

        // Set up the click event listener for the dark mode button
        button.onclick = function() {
            // Toggle the 'dark' state in localStorage
            if (localStorage.getItem('dark') === '0') {
                localStorage.setItem('dark', '1'); // Switch to dark mode
            } else {
                localStorage.setItem('dark', '0'); // Switch to light mode
            }
            // Apply the new theme immediately after state change
            applyTheme(localStorage.getItem('dark'));
            console.log('Current mode:', localStorage.getItem('dark'));
        };

        // Apply the theme on initial page load based on localStorage
        applyTheme(localStorage.getItem('dark'));
    });
});
