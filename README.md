butterfly css is a new way to build websites that fly out of the box!
# 🦋 Butterfly CSS
### Build websites that fly out of the box!

**Butterfly CSS** is a new way to build websites that fly out of the box! With butterfly, you can make advanced or boring things instantly in a unique syntax.

---
>[!TIP]
>To use **Butterfly CSS**, simply add the following tags in the `<head>` section of your HTML document:



```html
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/attributes.css](https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/attributes.css)">

<script src="[https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/dark.js](https://cdn.jsdelivr.net/gh/AMR2010M/butterfly-css@latest/dark.js)"></script>

```
</div>

🌟 Features
Intuitive Syntax: Create advanced or boring things instantly with a unique, attribute-based syntax.

Smart Dark Mode: Easy for everyone with only 3 attributes: dblack, lwhite, and dark-btn.

Instant Responsiveness: Create a responsive box with only the responsive attribute in the parent.

Flex-Auto: Changes automatically between row and column on different screen sizes.

Unique Animations: Built-in handdrawn, birthday-paper, and ball-move-1 animations.

Visual Flair: 10 pre-set gradients to make your site pop.

No Setup Required: No environment setup—just a 170kb CDN and JS for dark mode.

Smart Backgrounds: Use bg=auto for instant cover, center, and no-repeat settings.

Quick Shadows: Use s{color} for shadows and much more than you fancy.

🎯 Use Cases
Make your website stand out from repetitive designs built on Tailwind or others.

Perfect for beginners who want advanced animations and dark mode in seconds.

Designed for fast-typing with an easy-to-remember syntax.

🛑 It's NOT for you if you want:
A full package of features like Tailwind.

A very lightweight/minimalist library.

A framework with a massive established community.
**full example(pricing cards):**
```
     <div space></div>
 <h2 class="text-4xl f text-center  mb-16" tpink  > free pricing no cost  💰    </h2>

<!-- Main container with responsive layout to handle mobile, tablet, and desktop views -->
<div flex-auto w-90p center>
     <div w-320
        card
        min-h-450
    white
        hover-5
        columns
        ai-center
        jc-center
        p-40
        handdrawn
        rounded
        shadow
        b-pink
    >
        <h3 font-43 tbold style="color: rgb(255, 0, 111);">basic</h3>
        <p font-43 ol>For personal use.</p>
        <div columns ai-center mb-30>
            <span tmedium tbold font-37 style="color: rgb(255, 0, 111);">free</span>
      
        </div>
        <div columns ai-start jc-start >
            <p font-43 tbold>Features:</p>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>access over 4500 attributes</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace> unlimited Projects</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>documentaion  with preview</p>
            </div>
        </div>
        <button button  hover-1 mt-20 style="background-color: rgb(255, 0, 111);">Get Started</button>
    </div>

    <!-- Plan 2: Pro Tier (Featured) -->
    <div
    w-350
    min-h-500
        card
        white
        hover-5
        columns
        handdrawn
        b-pink
        ai-center
        jc-center
        p-40
        rounded
        shadow
    >
        <h3 font-43 tbold style="color: rgb(255, 0, 111);">Pro</h3>
        <p font-43 ol>For small teams.</p>
        <div columns ai-center mb-30>
            <span tmedium tbold font-37 style="color: rgb(255, 0, 111);" >extra free</span>
       
        </div>
        <div columns ai-start jc-start>
            <p font-43 tbold>Features:</p>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall>all of free</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>use for  commerical sites</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>dark mode cdn</p>
            </div>
           
        </div>
        <button button  hover-1 mt-20 style="background-color: rgb(255, 0, 111);">Get Started</button>
    </div>

    <!-- Plan 3: Enterprise Tier -->
    <div
        card
        b-pink
       min-h-450
        hover-5
        white
        columns
        ai-center
        jc-center
        w-320
        p-40
        rounded
        handdrawn
        shadow
    >
        <h3 font-43 style="color: rgb(255, 0, 111);">Enterprise</h3>
        <p font-43 ol>For  businesses.</p>
        <div columns ai-center mb-30>
            <span  tbold font-37 style="color: rgb(255, 0, 111);font-size: 40px; " >free sponsor </span>
        </div>
        <div columns ai-start jc-start>
            <p font-43 tbold>Features:</p>
          
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>All Pro Features</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>become featured on home page  for a year</p>
            </div>
            <div rows ai-center>
                <span style="color: rgb(255, 0, 111);" mr-10>•</span>
                <p tsmall monospace>limited time offer for first 3 brands (free)</p>
            </div>
        </div>
       <a href="mailto:youremail@gmail.com?subject=i want to become free sponsor">
 <button button gradient-7 hover-1 mt-20 style="background-color: rgb(255, 0, 111);" >Contact us</button></a>
    </div>
</div>
<div >
 
 
 <div space></div>
</div>
```
RESULT:
<img width="1911" height="833" alt="لقطة شاشة 2026-03-09 030234" src="https://github.com/user-attachments/assets/81092cea-73e3-4b35-acd7-940c8a86b6d8" />
