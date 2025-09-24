# 📂 Portfolio Structure Plan for Himanshu Kumar Mishra

## 1. Home Page

- **Navbar** (sticky, smooth scroll)
- **Hero Banner**
  - Name
  - Role (React & UI Developer)
  - Current Company
  - Profile Photo
  - Resume Download Button
- **Work Experience Snapshot**
- **Main Skills Preview** (with navigation link to Skills page)
- **Featured Projects Preview** (with navigation link to Projects page)
- **Contact Form**
- **Footer**

---

## 2. About Page

- **Brief Introduction**
- **Work Experience (detailed)**
- **Certifications**
- **Education Timeline**
- **Contact Link**
- **Footer**

---

## 3. Skills / Technologies Page

- **Skills Categorized:**
  - Frontend (React, Tailwind, GSAP, etc.)
  - Backend (Node.js, Express.js)
  - Database (MongoDB)
  - Version Control (Git, GitHub)
  - Server / Deployment Tools
- **Optional Visuals:** Progress bars, badges, categories
- **"Currently Learning" Section**
- **Footer**

---

## 4. Projects Page

- **Project Grid / Cards**
  - Each project card shows:
    - Project name
    - Screenshot thumbnail
    - Tech stack tags
    - Short description
    - Button → _View Case Study_
- **Footer**

### Project Details Page (for each project)

- **Project Overview**
  - Title + logo (if any)
  - Brief description
  - Links → _Live Demo_, _GitHub_
- **My Role / Contribution**
  - What you built / contributed
- **Tools & Technologies Used**
- **Design Process / Screenshots**
  - Wireframes / mockups (if available)
  - UI screenshots
  - Small demo GIFs/videos
- **Key Features**
- **Challenges & Solutions**
- **Outcome / Results**
- **Screenshots Gallery / Carousel**
- **Footer → Back to Projects**

---

## 5. Contact Page

- **Contact Form** (name, email, message)
- **Social Media Links** (LinkedIn, GitHub, etc.)
- **Location (optional map)**
- **Direct Links** → Email / WhatsApp buttons
- **Call-to-Action Line**: _“Let’s build something amazing together 🚀”_
- **Footer**

---

## Optional / Extra Sections

- **Blog / Articles Page** → Few technical writeups (e.g., building apps with MERN).
- **Testimonials / Recommendations Page** → Short feedback from mentors/trainers/colleagues.
- **Achievements / Hackathons** → Highlight competitions / recognitions.
- **Dark / Light Mode Toggle** → Adds polish & personality.

---

## Font Families

- **Headings** - https://fonts.google.com/specimen/Mozilla+Headline [Mozilla Headline]
- **Paragraphs** - http://fonts.google.com/specimen/Raleway [Raleway]
- **Code or Language Name** - https://fonts.google.com/specimen/JetBrains+Mono?preview.text=const%20c%20%3D%20%22sds%22&query=JetBrains+Mono [JetBrains Mono]

---

## Colors

-- **Heading for light abd dark theme** #f59e0b [orange]
-- **Paragraph for light theme** #273755 [blue]
-- **Paragraph for dark theme** #ffffff [white]

## For THE Glassy Effect

https://css.glass/

## Reference Website

https://orbai-template.framer.website/

## Programming Languages Icons

https://icons8.com/

## For the NEUMORPHISM Shadow

https://freefrontend.com/css-neumorphism-examples/

Case Study Page
│
├── 1. Header / Intro
│ ├── Project Title
│ ├── Short Description (2–3 lines)
│ ├── Role + Tech Stack badges
│
├── 2. Project Context
│ ├── Problem Statement
│ ├── Goals (bullet points)
│
├── 3. Development Process
│ ├── Main Challenges
│ ├── Solutions / Approach
│ ├── Key Features implemented
│
├── 4. Features Showcase
│ ├── Responsive Design
│ ├── API Integrations
│ ├── Animations
│ ├── Performance Improvements
│
├── 5. Results / Outcomes
│ ├── Final Achievements
│ ├── What was improved or delivered
│ ├── Learnings (if personal project)
│
├── 6. Visual Gallery
│ ├── Project Screenshots in Mockups
│ ├── Before/After (if any)
│
└── 7. Links & Navigation
├── Live Demo Button
├── GitHub / Repo (if shareable)
├── Back to Projects / Next Project

https://codepen.io/valencia123/pen/eYjpeME
https://imagekit.io/format-converter/convert-to-webp/

✅ This structure ensures your portfolio looks **professional, detailed, and recruiter-friendly**, with proper case studies for projects.

<!-- useLayoutEffect(() => {
const items = gsap.utils.toArray(listRef.current.querySelectorAll("li"));

    gsap.set(items, { opacity: 0.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: `+=${words.length * window.innerHeight * 0.6}`,
        scrub: true,
        pin: true,
      },
    });
    items.forEach((item) => {
      tl.to(item, { opacity: 1, duration: 0.5 }).to(
        item,
        { opacity: 0.2, duration: 0.5 },
        "+=0.2"
      );
    });

    tl.to(items[items.length - 1], { opacity: 1, duration: 0.5 });

    gsap.to(document.documentElement, {
      "--hue": 360,
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: `+=${words.length * window.innerHeight * 0.6}`,
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());

}, []);



gsap.registerPlugin(Observer);

const scrollingText = gsap.utils.toArray('.rail h4');

const tl = horizontalLoop(scrollingText, {
repeat: -1,
paddingRight: 30,
});

Observer.create({
onChangeY(self) {
let factor = 2.5;
if (self.deltaY < 0) {
factor _= -1;
}
gsap.timeline({
defaults: {
ease: "none",
}
})
.to(tl, { timeScale: factor _ 2.5, duration: 0.2, overwrite: true, })
.to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
}
});

function horizontalLoop(items, config) {
items = gsap.utils.toArray(items);
config = config || {};
let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() _ 100)}),
length = items.length,
startX = items[0].offsetLeft,
times = [],
widths = [],
xPercents = [],
curIndex = 0,
pixelsPerSecond = (config.speed || 1) _ 100,
snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
totalWidth, curX, distanceToStart, distanceToLoop, item, i;
gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
xPercent: (i, el) => {
let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w _ 100 + gsap.getProperty(el, "xPercent"));
return xPercents[i];
}
});
gsap.set(items, {x: 0});
totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 _ widths[length-1] - startX + items[length-1].offsetWidth _ gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
for (i = 0; i < length; i++) {
item = items[i];
curX = xPercents[i] / 100 _ widths[i];
distanceToStart = item.offsetLeft + curX - startX;
distanceToLoop = distanceToStart + widths[i] _ gsap.getProperty(item, "scaleX");
tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] _ 100), duration: distanceToLoop / pixelsPerSecond}, 0)
.fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] _ 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
.add("label" + i, distanceToStart / pixelsPerSecond);
times[i] = distanceToStart / pixelsPerSecond;
}
function toIndex(index, vars) {
vars = vars || {};
(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
let newIndex = gsap.utils.wrap(0, length, index),
time = times[newIndex];
if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
time += tl.duration() _ (index > curIndex ? 1 : -1);
}
curIndex = newIndex;
vars.overwrite = true;
return tl.tweenTo(time, vars);
}
tl.next = vars => toIndex(curIndex+1, vars);
tl.previous = vars => toIndex(curIndex-1, vars);
tl.current = () => curIndex;
tl.toIndex = (index, vars) => toIndex(index, vars);
tl.times = times;
tl.progress(1, true).progress(0, true); // pre-render for performance
if (config.reversed) {
tl.vars.onReverseComplete();
tl.reverse();
}
return tl;
} -->
