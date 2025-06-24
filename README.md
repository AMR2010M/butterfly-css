🦋 Butterfly UI Library
Transform your web applications with elegant, lightweight, and highly customizable UI components using an attribute-based approach, focusing on expressive rotations and fluid animations.

✨ Introduction
Butterfly is a modern, attribute-based CSS framework meticulously crafted for developers who prioritize performance, aesthetic appeal, and dynamic visual effects. Inspired by the natural elegance and fluid movement of butterflies, this library provides a comprehensive set of styling attributes that enable swift UI development with a particular emphasis on responsive rotations and captivating animations.

Butterfly simplifies front-end development by allowing you to apply styles directly in your HTML. While core width and height attributes remain fixed for precise control, the framework empowers you with responsive rotation, ensuring your elements can dynamically adjust their orientation based on screen size, providing a subtle yet impactful adaptive experience.

🚀 Features
Attribute-Based Styling: Apply styles directly in your HTML using custom attributes for quick, clean, and highly readable development.

Lightweight & Performant: Designed with a tiny footprint to ensure exceptionally fast loading and rendering times, optimizing user experience.

Fluid Transitions & Animations: Built-in, customizable animations for delightful user interactions, including standard, coloring, and captivating floating ball effects.

Extensive Utility Attributes, with Responsive Rotation Control:

Responsive Rotation: Achieve dynamic rotations across devices using sm- (for screens 
≥640px
) and lg- (for screens 
≥1024px
) prefixes for rotate attributes. This allows you to define element orientations that adapt precisely to different screen sizes.

Width & Height: Control dimensions precisely with width="X" and height="X" (where X is a pixel value from 
1
 to 
1000
). These attributes provide fixed dimensions for precise control and do not currently support responsive prefixes within Butterfly itself. For responsive sizing, consider using a complementary utility-first CSS framework.

Rotation: Apply element rotations with rotate="X", sm-rotate="X", lg-rotate="X" (where X is degrees from 
0
 to 
360
).

Layout: flex-row, flex-column, center for flexible and aligned content. These attributes do not include responsive prefixes within Butterfly.

Backgrounds: bg='auto', glow for easy background styling and glowing effects.

Shapes & Clip-Paths: circle, triangle, ellipse, square, rectangle, diamond, hexagon, parallelogram, star, trapezoid, sharp, wave, home, mobile, tv, slope, heart, broken, x, message, norad. These maintain their aspect ratios and scale within their containers.

Interactive Effects: hover-1 through hover-29 for a wide range of interactive hover states. morph-hover for dynamic shape transformations.

Transformations: spin, bounce, pulse, swing, fadein, flip, shake, grow, shrink, slide-x, slide-y for dynamic movements that gracefully scale.

Visual Enhancements: blur, lightfouce, handdrawn for unique visual styles that remain consistent across breakpoints.

Comprehensive Color System: Apply red, pink, purple, blue, green, yellow (and their shades like red-50 to red-900) for both background and text colors using dedicated attributes ([color] and [tcolor]).

Modular & Composable: Use only the attributes you need, ensuring minimal CSS overhead and maximum flexibility to build complex UIs from simple attribute combinations.

Framework Agnostic: Works seamlessly with your favorite JavaScript frameworks (React, Vue, Angular, or vanilla JS) by simply adding attributes to your HTML.

📦 Installation
To get started with Butterfly, simply include the CSS file directly in your HTML's <head> section. There are no npm or yarn packages to install, keeping the integration straightforward and lightweight.
<code>
<link rel="stylesheet" href="https://amr2010m.github.io/butterfly-css/float.css"></code>

