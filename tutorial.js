const navbar = `<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">Campus Club</a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">Home</a>
      <a class="navbar-item" href="#">Events</a>
      <a class="navbar-item" href="#">About</a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <a class="button is-primary" href="#">Join Us</a>
      </div>
    </div>
  </div>
</nav>`;
const burger = `<button class="navbar-burger" type="button"
        aria-label="menu" aria-expanded="false"
        aria-controls="navMenu">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</button>`;
const js = `document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    const expanded = burger.classList.contains("is-active");
    burger.setAttribute("aria-expanded", expanded);
  });
});`;
const custom = `:root {
  --brand-color: #222222;
}

.navbar {
  background-color: var(--brand-color);
}

.navbar-brand .navbar-item {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
}

/* Try customizing a Bulma component variable too. */
.button.is-primary {
  --bulma-button-radius: 0;
}`;
const lessons = [
  {
    number: 1,
    short: "Desktop navbar",
    title: "Build the desktop navbar",
    intro:
      "Start with Bulma’s navbar component. You will add navigation links and a call-to-action button, then inspect what happens when the screen gets narrower.",
    tasks: [
      "Open the HTML page from your campus organization website. Make sure the Bulma stylesheet is linked in the <code>&lt;head&gt;</code>.",
      "Add the navbar markup near the top of the <code>&lt;body&gt;</code>.",
      "Replace “Campus Club” with your organization name and add one more navigation link.",
      "Try adding <code>is-light</code>, <code>is-primary</code>, or <code>has-shadow</code> to the <code>&lt;nav&gt;</code> element.",
      "Resize the page below 1024px. What happens to the links?",
    ],
    hint: "Notice: Bulma handles the responsive layout, but the mobile menu is not usable yet.",
    snippets: [["index.html — navbar markup", navbar]],
    checks: [
      "My navbar appears on a wide screen.",
      "I changed the organization name and added a link.",
      "I tested the navbar at a narrow width.",
    ],
    caption:
      "Try the Mobile view: the links disappear because Bulma hides the menu below its desktop breakpoint.",
  },
  {
    number: 2,
    short: "Hamburger menu",
    title: "Add the hamburger button",
    intro:
      "Make the mobile control visible and investigate the class that Bulma uses to show and hide the menu.",
    tasks: [
      "Inside <code>.navbar-brand</code>, insert the hamburger button immediately after the closing <code>&lt;/a&gt;</code> of the brand link, but before the closing <code>&lt;/div&gt;</code> of .navbar-brand.",
      'Add <code>id="navMenu"</code> to the <code>.navbar-menu</code> element, as it appears in the example code below.',
      "Resize your own browser window to a narrow viewport. You should see the hamburger icon.",
      "Click the hamburger. Does anything happen?",
      "In DevTools, manually add <code>is-active</code> to both <code>.navbar-burger</code> and <code>.navbar-menu</code>. Observe the result.",
    ],
    hint: "The <code>is-active</code> class controls the open state. Bulma provides the CSS, but does not automatically add or remove that class.",
    snippets: [
      ["Add inside .navbar-brand", burger],
      ["Change the menu opening tag", '<div class="navbar-menu" id="navMenu">'],
    ],
    checks: [
      "The hamburger is visible at mobile width.",
      "The menu has an id matching aria-controls.",
      "I used DevTools to test the is-active class.",
    ],
    caption:
      "The icon is visible in Mobile view, but clicking it does nothing yet. That is expected for this exercise.",
  },
  {
    number: 3,
    short: "Make it work",
    title: "Make the navbar functional",
    intro:
      "Use the provided JavaScript to toggle Bulma’s active state. You do not need to write or memorize JavaScript syntax for this course.",
    tasks: [
      "Create a file named <code>navbar.js</code> in your project.",
      "Copy the provided JavaScript into that file.",
      "Link the script just before the closing <code>&lt;/body&gt;</code> tag.",
      "Resize your own browser window to mobile width and click the hamburger. Verify that it opens and closes the menu.",
      "Explain in your own words what CSS does and what JavaScript does in this example.",
    ],
    hint: "The script toggles <code>is-active</code> on the button and menu, and updates <code>aria-expanded</code> for accessibility.",
    snippets: [
      ["navbar.js — copy this code", js],
      [
        "Add before the closing body tag",
        "<scr" + 'ipt src="navbar.js"><' + "/script>",
      ],
    ],
    checks: [
      "My JavaScript file is linked correctly.",
      "The menu opens and closes at mobile width.",
      "I can explain the division of labor between CSS and JavaScript.",
    ],
    caption:
      "In Mobile view, click the hamburger to test the working menu. The script is supplied; your task is to connect it.",
  },
  {
    number: 4,
    short: "Customize",
    title: "Customize your navbar",
    intro:
      "Make the navbar look like it belongs to your site. Keep Bulma’s source files untouched; put your changes in your own stylesheet.",
    tasks: [
      "Create or open your own <code>styles.css</code>, linked after the Bulma stylesheet.",
      "Define a custom property in <code>:root</code> for your brand color.",
      "Use <code>var()</code> to apply the color to the navbar.",
      "Change the brand name’s font size or weight and customize the Join Us button.",
      "Try overriding a Bulma component variable, and test the result at desktop and mobile widths.",
    ],
    hint: "For a simple global custom property, define it in <code>:root</code>. For a component-specific Bulma variable, override it on the component selector.",
    snippets: [
      ["styles.css — starting point", custom],
      [
        "Stylesheet order in <head>",
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">\n<link rel="stylesheet" href="styles.css">',
      ],
    ],
    checks: [
      "I defined and used at least one CSS custom property.",
      "I customized the button or another Bulma component.",
      "My navbar works at both desktop and mobile widths.",
    ],
    caption:
      "The example uses a dark brand color and a squared-off button. Your design can be different.",
  },
];
let current = 0;
const $ = (id) => document.getElementById(id);
const state = JSON.parse(
  localStorage.getItem("comp126-bulma-progress") || "{}",
);
function esc(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function save() {
  localStorage.setItem("comp126-bulma-progress", JSON.stringify(state));
}
function render() {
  const l = lessons[current];
  $("step-number").textContent = `Exercise ${l.number} of 4`;
  $("title").textContent = l.title;
  $("intro").textContent = l.intro;
  $("tasks").innerHTML = l.tasks.map((t) => `<li>${t}</li>`).join("");
  $("hint").innerHTML = l.hint;
  $("snippets").innerHTML = l.snippets
    .map(
      ([name, code], i) =>
        `<div class="codebox"><div class="codebar"><span>${name}</span><button class="copy" data-code="${i}" aria-label="Copy ${name}">Copy code</button></div><pre><code>${esc(code)}</code></pre></div>`,
    )
    .join("");
  $("snippets")
    .querySelectorAll(".copy")
    .forEach(
      (b) =>
        (b.onclick = async () => {
          let val = l.snippets[+b.dataset.code][1];
          try {
            await navigator.clipboard.writeText(val);
            b.textContent = "Copied!";
            setTimeout(() => (b.textContent = "Copy code"), 1500);
          } catch (e) {
            b.textContent = "Select code to copy";
          }
        }),
    );
  $("checks").innerHTML = l.checks
    .map(
      (c, i) =>
        `<label><input type="checkbox" data-check="${i}" ${state[`${current}-${i}`] ? "checked" : ""}><span>${c}</span></label>`,
    )
    .join("");
  $("checks")
    .querySelectorAll("input")
    .forEach(
      (c) =>
        (c.onchange = () => {
          state[`${current}-${c.dataset.check}`] = c.checked;
          save();
          renderTabs();
        }),
    );
  $("prev").disabled = current === 0;
  $("next").textContent =
    current === 3 ? "Back to first exercise ↺" : "Next exercise →";
  renderTabs();
}
function renderTabs() {
  $("tabs").innerHTML = lessons
    .map((l, i) => {
      let done = l.checks.every((_, j) => state[`${i}-${j}`]);
      return `<button class="step-tab" data-step="${i}" ${i === current ? 'aria-current="step"' : ""}><span>Exercise ${l.number}${done ? " · ✓ Complete" : ""}</span><strong>${l.short}</strong></button>`;
    })
    .join("");
  $("tabs")
    .querySelectorAll("button")
    .forEach(
      (b) =>
        (b.onclick = () => {
          current = +b.dataset.step;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }),
    );
}
$("prev").onclick = () => {
  if (current > 0) {
    current--;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
$("next").onclick = () => {
  current = current === 3 ? 0 : current + 1;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
render();
