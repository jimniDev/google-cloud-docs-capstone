/* Injects the shared Google Cloud header + footer into static pages
   and wires up the dropdown toggle behavior. Replaces the React <Header /> +
   <Footer /> components, preserving the same visual structure. */

(function () {
  const technologyAreas = [
    "AI and ML",
    "Application development",
    "Application hosting",
    "Compute",
    "Data analytics and pipelines",
    "Databases",
    "Distributed, hybrid, and multicloud",
    "Industry solutions",
    "Migration",
    "Networking",
    "Observability and monitoring",
    "Security",
    "Storage",
  ];

  const crossProductTools = [
    "Access and resources management",
    "Costs and usage management",
    "Infrastructure as code",
    "SDK, languages, frameworks, and tools",
  ];

  const moreLinks = [
    { label: "Products and pricing", href: "#" },
    { label: "Support", href: "#" },
    { label: "Release notes", href: "#" },
  ];

  function dropdown(items) {
    return (
      '<div class="gcloud-dropdown" role="menu">' +
      items
        .map(
          (item) =>
            '<a role="menuitem" href="' +
            (item.href || "#") +
            '">' +
            (item.label || item) +
            "</a>"
        )
        .join("") +
      "</div>"
    );
  }

  function navLink(label, href) {
    return (
      '<a class="gcloud-nav-link" href="' + href + '">' + label + "</a>"
    );
  }

  function navItem(label, items, key) {
    return (
      '<div class="gcloud-nav-item" data-nav="' +
      key +
      '">' +
      '<button class="gcloud-nav-button" type="button" aria-haspopup="true" aria-expanded="false">' +
      label +
      '<span class="material-symbols-outlined arrow">keyboard_arrow_down</span>' +
      "</button>" +
      dropdown(items) +
      "</div>"
    );
  }

  function renderHeader(target, options) {
    const homeHref = (options && options.homeHref) || "./home.html";
    const skillsIntroHref =
      (options && options.skillsIntroHref) || "./skills.html";
    const skillsLibraryHref =
      (options && options.skillsLibraryHref) || "./skill-library.html";
    const logoSrc =
      (options && options.logoSrc) || "./assets/logo.svg";
    const skillsLinks = [
      { label: "Skills Introduction", href: skillsIntroHref },
      { label: "Skills Library", href: skillsLibraryHref },
    ];
    target.innerHTML =
      '<header class="gcloud-header">' +
      '  <div class="gcloud-header-inner">' +
      '    <div class="gcloud-header-left">' +
      '      <a class="gcloud-logo" href="' +
      homeHref +
      '" aria-label="Google Cloud home">' +
      '        <img class="gcloud-logo-img" src="' +
      logoSrc +
      '" alt="Google Cloud" />' +
      "      </a>" +
      '      <nav class="gcloud-nav" aria-label="Primary">' +
      navItem("Technology areas", technologyAreas, "tech") +
      navItem("Cross-product tools", crossProductTools, "tools") +
      navItem("Skills", skillsLinks, "skills") +
      "      </nav>" +
      "    </div>" +
      '    <div class="gcloud-header-right">' +
      '      <button type="button" class="gcloud-pill" data-show-on="md">' +
      '        <span class="material-symbols-outlined" style="font-size:18px">terminal</span>Shell' +
      "      </button>" +
      '      <button type="button" class="gcloud-icon-button" aria-label="Theme">' +
      '        <span class="material-symbols-outlined" style="font-size:18px">light_mode</span>' +
      "      </button>" +
      '      <button type="button" class="gcloud-pill" data-show-on="sm">' +
      '        <span class="material-symbols-outlined" style="font-size:16px">language</span>English' +
      '        <span class="material-symbols-outlined" style="font-size:16px">keyboard_arrow_down</span>' +
      "      </button>" +
      '      <button type="button" class="gcloud-pill" data-show-on="md">' +
      '        <span class="material-symbols-outlined" style="font-size:18px;color:#5f6368">computer</span>' +
      '        <span class="label-primary">Console</span>' +
      "      </button>" +
      '      <div class="gcloud-nav-item" data-nav="more">' +
      '        <button type="button" class="gcloud-icon-button round" aria-label="More options">' +
      '          <span class="material-symbols-outlined" style="font-size:18px">more_vert</span>' +
      "        </button>" +
      dropdown(moreLinks) +
      "      </div>" +
      '      <button type="button" class="gcloud-avatar" aria-label="Account">' +
      '        <span class="material-symbols-outlined">person</span>' +
      "      </button>" +
      "    </div>" +
      "  </div>" +
      "</header>";

    bindDropdowns(target);
  }

  function bindDropdowns(scope) {
    const items = scope.querySelectorAll(".gcloud-nav-item");
    items.forEach((item) => {
      const button = item.querySelector(".gcloud-nav-button, .gcloud-icon-button");
      if (!button) return;
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = item.classList.contains("is-open");
        items.forEach((other) => other.classList.remove("is-open"));
        if (!isOpen) {
          item.classList.add("is-open");
          button.setAttribute("aria-expanded", "true");
        } else {
          button.setAttribute("aria-expanded", "false");
        }
      });
    });

    document.addEventListener("click", function () {
      items.forEach((item) => {
        item.classList.remove("is-open");
        const button = item.querySelector(".gcloud-nav-button, .gcloud-icon-button");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    });
  }

  function renderFooter(target) {
    target.innerHTML =
      '<footer class="gcloud-footer">' +
      '  <div class="gcloud-footer-inner">' +
      "    <span>&copy; " +
      new Date().getFullYear() +
      " Google Cloud (prototype)</span>" +
      '    <div class="gcloud-footer-links">' +
      '      <a href="#">Privacy</a>' +
      '      <a href="#">Terms</a>' +
      '      <a href="#">Help</a>' +
      "    </div>" +
      "  </div>" +
      "</footer>";
  }

  function init() {
    document.querySelectorAll("[data-site-header]").forEach((el) => {
      renderHeader(el, {
        homeHref: el.getAttribute("data-home") || "./home.html",
        logoSrc: el.getAttribute("data-logo") || "./assets/logo.svg",
        skillsIntroHref:
          el.getAttribute("data-skills-intro") || "./skills.html",
        skillsLibraryHref:
          el.getAttribute("data-skills-library") || "./skill-library.html",
      });
    });
    document.querySelectorAll("[data-site-footer]").forEach((el) => {
      renderFooter(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
