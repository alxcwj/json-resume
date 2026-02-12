var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Resume: () => Resume_default,
  render: () => render
});
module.exports = __toCommonJS(index_exports);
var import_server = require("react-dom/server");
var import_styled_components11 = require("styled-components");

// src/ui/Resume.js
var import_styled_components10 = __toESM(require("styled-components"));

// src/ui/Section.js
var import_styled_components = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
var Section = import_styled_components.default.div`
  max-width: 700px;
  margin: 0 auto 18px;

  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
    font-weight: 600;
  }

  hr {
    margin: 0;
    padding: 0;
    margin-top: 7px;
    margin-bottom: 3px;
  }
`;
var Container = import_styled_components.default.div`
  margin: 0 8px;
`;
var SectionComponent = ({ children, title }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children })
  ] });
};
var Section_default = SectionComponent;

// src/ui/Experience.js
var import_styled_components5 = __toESM(require("styled-components"));

// src/ui/List.js
var import_styled_components2 = __toESM(require("styled-components"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var ListContainer = import_styled_components2.default.ul`
  padding-left: 20px;
  line-height: 16px;
  li::before {
    content: '•';
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    line-height: 10px;
  }
`;
var List = ({ items }) => {
  if (!items) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ListContainer, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: item }, item)) });
};
var List_default = List;

// src/ui/DateRange.js
var import_styled_components4 = __toESM(require("styled-components"));

// src/ui/Date.js
var import_styled_components3 = __toESM(require("styled-components"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Text = import_styled_components3.default.div`
  font-style: italic;
  font-size: 1.4rem;
`;
var DateComponent = ({ date }) => {
  if (!date) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { children: "Present" });
  }
  const fullDate = new Date(date);
  const options = { year: "numeric", month: "long" };
  const formattedDate = fullDate.toLocaleDateString("en-US", options);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { children: formattedDate ?? "Present" });
};
var Date_default = DateComponent;

// src/ui/DateRange.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var Range = import_styled_components4.default.div`
  display: flex;
  font-style: italic;
  font-size: 13px;
`;
var DateRange = ({ startDate, endDate }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Range, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Date_default, { date: startDate }),
    "\xA0\u2014\xA0",
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Date_default, { date: endDate })
  ] });
};
var DateRange_default = DateRange;

// src/ui/Experience.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var Meta = import_styled_components5.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;
var Title = import_styled_components5.default.div`
  font-weight: 600;
  font-size: 1.45rem;
  margin-bottom: 3px;
`;
var SubTitle = import_styled_components5.default.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 3px;
`;
var Container2 = import_styled_components5.default.div`
  margin-bottom: 10px;
`;
var Summary = import_styled_components5.default.p`
  margin-bottom: 5px;
`;
var Experience = ({
  title,
  date,
  startDate,
  endDate,
  subTitle,
  summary,
  highlights
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Container2, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Meta, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Title, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "secondary", children: date ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Date_default, { date }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DateRange_default, { startDate, endDate }) })
    ] }),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SubTitle, { children: subTitle }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "secondary", children: [
      summary && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Summary, { children: summary }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(List_default, { items: highlights })
    ] })
  ] });
};
var Experience_default = Experience;

// src/ui/Projects.js
var import_jsx_runtime6 = require("react/jsx-runtime");
var Work = ({ projects }) => {
  if (!projects) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Section_default, { title: "Projects", children: projects.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Experience_default,
      {
        title: w.name,
        startDate: w.startDate,
        endDate: w.endDate,
        summary: w.description,
        highlights: w.highlights
      },
      key
    );
  }) }) });
};
var Projects_default = Work;

// src/ui/Hero.js
var import_styled_components6 = __toESM(require("styled-components"));
var import_fa = require("react-icons/fa");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Title2 = import_styled_components6.default.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
var BasicInfo = import_styled_components6.default.div`
  display: flex;
  gap: 10px 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
var Info = import_styled_components6.default.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  svg {
    color: #000;
    margin-right: 5px;
    width: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;
var HeroComponent = ({ basics }) => {
  const { name, url, location, profiles, phone, email } = basics;
  const linkedin = profiles.find(({ network }) => network === "linkedin");
  const github = profiles.find(({ network }) => network === "github");
  const twitter = profiles.find(({ network }) => network === "twitter");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Section_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Title2, { children: name }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(BasicInfo, { children: [
      location && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaMapPin, {}),
        location.city,
        ", ",
        location.countryCode
      ] }),
      email && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaEnvelope, {}),
        email
      ] }),
      phone && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaPhoneAlt, {}),
        phone
      ] }),
      url && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaLink, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: "{url}", children: url })
      ] }),
      linkedin && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaLinkedin, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: `https://linkedin.com/${linkedin.username}`, children: linkedin.username })
      ] }),
      github && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaGithub, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: `https://github.com/${github.username}`, children: github.username })
      ] }),
      twitter && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_fa.FaTwitter, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: `https://twitter.com/${twitter.username}`, children: twitter.username })
      ] })
    ] }) })
  ] });
};
var Hero_default = HeroComponent;

// src/ui/Summary.js
var import_styled_components7 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Summary2 = import_styled_components7.default.p``;
var SummaryComponent = ({ basics }) => {
  const { summary } = basics;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Section_default, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Summary2, { children: summary }) }) });
};
var Summary_default = SummaryComponent;

// src/ui/Education.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var Education = ({ education }) => {
  if (!education) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Section_default, { title: "Education", children: education.map((e, key) => {
    let subTitle = e.area ? `${e.studyType} in ${e.area}` : e.studyType;
    if (e.score) {
      subTitle = `${subTitle} (${e.score})`;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Experience_default,
      {
        title: e.institution,
        subTitle,
        startDate: e.startDate,
        endDate: e.endDate,
        highlights: e.courses
      },
      key
    );
  }) }) });
};
var Education_default = Education;

// src/ui/Work.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var Work2 = ({ work }) => {
  if (!work) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section_default, { title: "Experience", children: work.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Experience_default,
      {
        title: w.position,
        subTitle: w.name,
        startDate: w.startDate,
        endDate: w.endDate,
        summary: w.summary,
        highlights: w.highlights
      },
      key
    );
  }) }) });
};
var Work_default = Work2;

// src/ui/Certificates.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var Certificates = ({ certificates }) => {
  if (!certificates) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Section_default, { title: "Certificates", children: certificates.map((c, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Experience_default,
      {
        title: c.name,
        subTitle: c.issuer,
        date: c.date
      },
      key
    );
  }) }) });
};
var Certificates_default = Certificates;

// src/ui/Publications.js
var import_jsx_runtime12 = require("react/jsx-runtime");
var Publications = ({ publications }) => {
  if (!publications) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section_default, { title: "Publications", children: publications.map((p, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Experience_default,
      {
        title: p.name,
        subTitle: p.publisher,
        date: p.releaseDate,
        summary: p.summary
      },
      key
    );
  }) }) });
};
var Publications_default = Publications;

// src/ui/Awards.js
var import_jsx_runtime13 = require("react/jsx-runtime");
var Awards = ({ awards }) => {
  if (!awards) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Section_default, { title: "Awards", children: awards.map((a, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Experience_default,
      {
        title: a.title,
        subTitle: a.awarder,
        date: a.date,
        summary: a.summary
      },
      key
    );
  }) }) });
};
var Awards_default = Awards;

// src/ui/OneLineList.js
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var Name = import_styled_components8.default.div`
  font-weight: 600;
  font-size: 1.4rem;
`;
var List2 = import_styled_components8.default.div`
  font-size: 1.4rem;
  margin-left: 5px;
`;
var Container3 = import_styled_components8.default.div`
  margin-bottom: 5px;
  display: flex;
  align-items: baseline;
`;
var OneLineList = ({ name, items }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container3, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Name, { children: [
      name,
      ":"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(List2, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { class: "secondary", children: items.join(", ") }) })
  ] });
};
var OneLineList_default = OneLineList;

// src/ui/Skills.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var Skills = ({ skills }) => {
  if (!skills) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Section_default, { title: "Skills", children: skills.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(OneLineList_default, { name: w.name, items: w.keywords }, key);
  }) }) });
};
var Skills_default = Skills;

// src/ui/Interests.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var Interests = ({ interests }) => {
  if (!interests) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section_default, { title: "Interests", children: interests.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(OneLineList_default, { name: w.name, items: w.keywords }, key);
  }) }) });
};
var Interests_default = Interests;

// src/ui/Languages.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var Languages = ({ languages }) => {
  if (!languages) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Section_default, { title: "Languages", children: languages.map((l, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(OneLineList_default, { name: l.language, items: [l.fluency] }, key);
  }) }) });
};
var Languages_default = Languages;

// src/ui/References.js
var import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_runtime18 = require("react/jsx-runtime");
var Name2 = import_styled_components9.default.div`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;
var Reference = import_styled_components9.default.p``;
var References = ({ references }) => {
  if (!references) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Section_default, { title: "References", children: references.map((r, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { marginBottom: "15px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Name2, { children: r.name }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Reference, { children: r.reference })
    ] }, key);
  }) }) });
};
var References_default = References;

// src/ui/Resume.js
var import_jsx_runtime19 = require("react/jsx-runtime");
var Layout = import_styled_components10.default.div`
  max-width: 660px;
  margin: 0 auto;
  line-height: calc(1ex / 0.32);
  margin-bottom: 40px;
`;
var Resume = ({ resume }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Hero_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Summary_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Education_default, { education: resume.education }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Work_default, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Projects_default, { projects: resume.projects }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Certificates_default, { certificates: resume.certificates }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Publications_default, { publications: resume.publications }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Awards_default, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Languages_default, { languages: resume.languages }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Skills_default, { skills: resume.skills }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Interests_default, { interests: resume.interests }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(References_default, { references: resume.references })
  ] });
};
var Resume_default = Resume;

// src/index.js
var import_jsx_runtime20 = require("react/jsx-runtime");
var render = (resume) => {
  const sheet = new import_styled_components11.ServerStyleSheet();
  const html = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Resume_default, { resume })));
  const styles = sheet.getStyleTags();
  return `<!DOCTYPE html><head>
  <title>${resume.basics.name} - Resume</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <style>
    @font-face {
      font-family: LatinModern;
      font-style: normal;
      font-weight: normal;
      src: url("/fonts/lmroman10-regular.otf") format("opentype");
    }

    @font-face {
      font-family: LatinModern;
      font-weight: bold;
      src: url("/fonts/lmroman10-bold.otf") format("opentype");
    }

    @font-face {
      font-family: LatinModern;
      font-style: italic;
      src: url("/fonts/lmroman10-italic.otf") format("opentype");
    }

     @font-face {
      font-family: LatinModernSans;
      font-style: normal;
      font-weight: normal;
      src: url("/fonts/lmsans10-regular.otf") format("opentype");
    }

    @font-face {
      font-family: LatinModernSans;
      font-weight: bold;
      src: url("/fonts/lmsans10-bold.otf") format("opentype");
    }

    @font-face {
      font-family: LatinModernSans;
      font-style: italic;
      src: url("/fonts/lmsans10-italic.otf") format("opentype");
    }

    html {
      font-family:LatinModern, "Courier New", monospace;
      background: #fff;
      font-size: 10px;
    }

    h2 {
      font-size: 1.65rem;
    }

    p {
      padding: 0;
      margin: 0;
    }

    p, li {
      font-size: 1.4rem;
      line-height: 1.5rem;
    }

    .secondary {
      color: #111;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }



  </style>
  ${styles}</head><body>${html}</body></html>`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Resume,
  render
});
