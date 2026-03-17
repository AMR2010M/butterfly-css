(function() {
    const style = document.createElement('style');
    document.head.appendChild(style);

    const generateButterflyStyles = () => {
        let cssRules = "";
        document.querySelectorAll('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                const name = attr.name;

                // العرض والارتفاع
                if (name.startsWith('w-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { width: ${val}rem !important; }\n`;
                }
                if (name.startsWith('h-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { height: ${val}rem !important; }\n`;
                }
                if (name.startsWith('min-h-')) {
                    const val = name.split('-')[2]; // نأخذ الرقم بعد ثاني شرطة
                    if(!isNaN(val)) cssRules += `[${name}] { min-height: ${val}rem !important; }\n`;
                }
                if (name.startsWith('max-h-')) {
                    const val = name.split('-')[2];
                    if(!isNaN(val)) cssRules += `[${name}] { max-height: ${val}rem !important; }\n`;
                }

                // المارجن بكل اتجاهاته
                if (name.startsWith('m-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { margin: ${val}rem !important; }\n`;
                }
                if (name.startsWith('mt-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { margin-top: ${val}rem !important; }\n`;
                }
                if (name.startsWith('mb-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { margin-bottom: ${val}rem !important; }\n`;
                }
                if (name.startsWith('ml-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { margin-left: ${val}rem !important; }\n`;
                }
                if (name.startsWith('mr-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { margin-right: ${val}rem !important; }\n`;
                }

                // البادينج بكل اتجاهاته
                if (name.startsWith('p-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { padding: ${val}rem !important; }\n`;
                }
                if (name.startsWith('pt-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { padding-top: ${val}rem !important; }\n`;
                }
                if (name.startsWith('pb-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { padding-bottom: ${val}rem !important; }\n`;
                }
                if (name.startsWith('pl-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { padding-left: ${val}rem !important; }\n`;
                }
                if (name.startsWith('pr-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { padding-right: ${val}rem !important; }\n`;
                }

                // الدوران والشفافية والترتيب (القيم الرقمية الأخرى)
                if (name.startsWith('rotate-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { transform: rotate(${val}deg) !important; }\n`;
                }
                if (name.startsWith('opacity-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { opacity: ${val / 100} !important; }\n`;
                }
                if (name.startsWith('z-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { z-index: ${val} !important; }\n`;
                }
                if (name.startsWith('rad-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { border-radius: ${val}rem !important; }\n`;
                }
                if (name.startsWith('gap-')) {
                    const val = name.split('-')[1];
                    if(!isNaN(val)) cssRules += `[${name}] { gap: ${val}rem !important; }\n`;
                }
            });
        });
        style.innerHTML = cssRules;
    };

    window.addEventListener('DOMContentLoaded', generateButterflyStyles);
})();