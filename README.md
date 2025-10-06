🦋 butterfly CSS
The Mini, Attribute-Based Framework for Instant Web Flair.

Tired of endless utility classes? butterfly CSS is a compact, opinionated, and attribute-based framework designed to give your projects unique styles, stunning effects, and complex animations with a single tag modifier.

Inject personality, not boilerplate. This is styling stripped down to its essential function: making things look good, fast.

🚀 Instant Setup (Zero Configuration)
Forget build tools and environment setups. To activate all features—including our easy dark mode toggler—just drop these two CDN links into the <head> of your HTML file.

HTML

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/attributes.css">

    <script src="https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/dark.js"></script>
</head>
✨ The Attribute Advantage
butterfly CSS flips the script. Instead of juggling dozens of utility classes, you use simple, semantic HTML attributes to apply powerful styling directives.

This intuitive syntax is easy to remember and dramatically speeds up development, letting you focus on content, not class lists.

Usage Example
Feature	butterfly CSS Syntax	What it Does
Shadow	<div s=blue>	Applies a simple blue shadow (s is short for shadow).
Background	<div bg=auto>	Sets background to cover, center, and no-repeat.
Responsiveness	<div responsive>	Makes the element scale gracefully on different screen sizes.
Dark Mode	<body dblack>	Applies dark mode defaults (dark background, light text).

التصدير إلى "جداول بيانات Google"
💡 Standout Features
Effortless Dark Mode 🌑
Implementing a fully functional, stylish dark mode has never been simpler. Use just a few key attributes:

Use dblack on the <body> to set default dark colors.

Use lwhite to specify elements that should use light-mode colors (white text, light background) even when the body is dark.

Add a dark mode toggle button with the dark-btn attribute.

Unique Animations & Effects 💫
Move beyond standard transitions. butterfly CSS includes unique, creative animations that make your site truly memorable, such as:

handdrwn

birthday-paper

ball-move-1

...and many more!

Built-in Responsiveness 📱
Achieve complex responsive layouts with minimal effort:

The responsive attribute on a parent container ensures its contents adapt fluidly to different screens.

flex-auto intelligently switches between a row and a column layout based on the viewport size.

Style Helpers
Access easy-to-use helpers for common tasks:

Apply shadows instantly using the s{color} attribute (e.g., s=red).

Choose from 10 pre-defined gradients to add vibrant depth to your backgrounds.

🎯 Who Is butterfly CSS For?
The Unique Seeker: If you want your website to stand out from the endless stream of "Tailwind-look" sites.

The Beginner Coder: If you're a beginner who wants to implement advanced features (like animations and dark mode) easily and instantly.

The Speed Dev: If you value a fast-typing, easy-to-recall syntax that is fundamentally different from traditional utility frameworks.

⚠️ A Note on Scope
butterfly CSS is likely not for you if you seek:

A Full Feature Package: It does not offer the exhaustive list of granular utilities found in large frameworks like Tailwind CSS.

A Very Lightweight Utility: At its current size (approx. 170kb for the CSS), it is feature-rich but not the absolute lightest "zero-dependency" solution available.

A Large Community Project: We're currently a growing project, not a massive, established ecosystem.

Dive into the full documentation to explore every available attribute and start adding stunning flair to your next project!
