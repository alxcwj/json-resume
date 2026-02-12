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
var import_styled_components14 = require("styled-components");

// src/ui/Resume.js
var import_styled_components13 = __toESM(require("styled-components"));

// src/ui/Hero.js
var import_styled_components2 = __toESM(require("styled-components"));
var import_fa = require("react-icons/fa");

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

// src/ui/Hero.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var Title = import_styled_components2.default.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
var BasicInfo = import_styled_components2.default.div`
  display: flex;
  gap: 10px 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
var Info = import_styled_components2.default.div`
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Section_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { children: name }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(BasicInfo, { children: [
      location && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaMapPin, {}),
        location.city,
        ", ",
        location.countryCode
      ] }),
      email && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaEnvelope, {}),
        email
      ] }),
      phone && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaPhoneAlt, {}),
        phone
      ] }),
      url && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaLink, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "{url}", children: url })
      ] }),
      linkedin && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaLinkedin, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: `https://linkedin.com/${linkedin.username}`, children: linkedin.username })
      ] }),
      github && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaGithub, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: `https://github.com/${github.username}`, children: github.username })
      ] }),
      twitter && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Info, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaTwitter, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: `https://twitter.com/${twitter.username}`, children: twitter.username })
      ] })
    ] }) })
  ] });
};
var Hero_default = HeroComponent;

// src/ui/Summary.js
var import_styled_components3 = __toESM(require("styled-components"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Summary = import_styled_components3.default.p``;
var SummaryComponent = ({ basics }) => {
  const { summary } = basics;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section_default, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Summary, { children: summary }) }) });
};
var Summary_default = SummaryComponent;

// src/ui/Experience.js
var import_styled_components7 = __toESM(require("styled-components"));

// src/ui/List.js
var import_styled_components4 = __toESM(require("styled-components"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var ListContainer = import_styled_components4.default.ul`
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ListContainer, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: item }, item)) });
};
var List_default = List;

// src/ui/DateRange.js
var import_styled_components6 = __toESM(require("styled-components"));

// src/ui/Date.js
var import_styled_components5 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Text = import_styled_components5.default.div`
  font-style: italic;
  font-size: 1.4rem;
  white-space: nowrap;
`;
var DateComponent = ({ date }) => {
  if (!date) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { children: "Present" });
  }
  if (isNaN(Date.parse(date)) && !/^\d{4}$/.test(date)) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { children: date });
  }
  if (/^\d{4}$/.test(date)) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { children: date });
  }
  const fullDate = new Date(date);
  const options = { year: "numeric" };
  const formattedDate = fullDate.toLocaleDateString("en-US", options);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { children: formattedDate ?? "Present" });
};
var Date_default = DateComponent;

// src/ui/DateRange.js
var import_jsx_runtime6 = require("react/jsx-runtime");
var Range = import_styled_components6.default.div`
  display: flex;
  font-style: italic;
  font-size: 13px;
  white-space: nowrap;
`;
var DateRange = ({ startDate, endDate }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Range, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Date_default, { date: startDate }),
    "\xA0\u2014\xA0",
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Date_default, { date: endDate })
  ] });
};
var DateRange_default = DateRange;

// src/ui/Experience.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var Meta = import_styled_components7.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;
var Title2 = import_styled_components7.default.div`
  font-weight: 600;
  font-size: 1.45rem;
  margin-bottom: 3px;
`;
var SubTitle = import_styled_components7.default.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 3px;
`;
var Container2 = import_styled_components7.default.div`
  margin-bottom: 10px;
`;
var Summary2 = import_styled_components7.default.p`
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Container2, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Meta, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Title2, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "secondary", children: date ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Date_default, { date }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DateRange_default, { startDate, endDate }) })
    ] }),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SubTitle, { children: subTitle }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "secondary", children: [
      summary && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Summary2, { children: summary }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(List_default, { items: highlights })
    ] })
  ] });
};
var Experience_default = Experience;

// src/ui/Education.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var Education = ({ education }) => {
  if (!education) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Section_default, { title: "Education", children: education.map((e, key) => {
    let subTitle = e.area ? `${e.studyType} in ${e.area}` : e.studyType;
    if (e.score) {
      subTitle = `${subTitle} (${e.score})`;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/ui/ResearchInterests.js
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var List2 = import_styled_components8.default.div`
  font-size: 1.4rem;
`;
var ResearchInterests = ({ interests }) => {
  if (!interests) {
    return null;
  }
  const researchInterests = interests.find(
    (interest) => interest.name && interest.name.toLowerCase().includes("research interest")
  );
  if (!researchInterests) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Section_default, { title: "Research Interests", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(List2, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "secondary", children: researchInterests.keywords.join(", ") }) }) }) });
};
var ResearchInterests_default = ResearchInterests;

// src/ui/Publications.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var Publications = ({ publications }) => {
  if (!publications) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section_default, { title: "Publications", children: publications.map((p, key) => {
    const dateOrStatus = p.status || p.releaseDate;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Experience_default,
      {
        title: p.name,
        subTitle: p.publisher,
        date: dateOrStatus,
        summary: p.summary
      },
      key
    );
  }) }) });
};
var Publications_default = Publications;

// src/ui/Fellowships.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var Fellowships = ({ awards }) => {
  if (!awards) {
    return null;
  }
  const fellowships = awards.filter((award) => {
    const titleLower = (award.title || "").toLowerCase();
    return titleLower.includes("fellowship") || titleLower.includes("scholars program");
  });
  if (fellowships.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Section_default, { title: "Fellowships", children: fellowships.map((award, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Experience_default,
      {
        title: award.title,
        subTitle: award.awarder,
        date: award.date
      },
      key
    );
  }) }) });
};
var Fellowships_default = Fellowships;

// src/ui/ResearchGrants.js
var import_jsx_runtime12 = require("react/jsx-runtime");
var ResearchGrants = ({ awards }) => {
  if (!awards) {
    return null;
  }
  const grants = awards.filter((award) => {
    const titleLower = (award.title || "").toLowerCase();
    return (titleLower.includes("research opportunity") || titleLower.includes("research grant") || titleLower.includes("grant")) && !titleLower.includes("fellowship") && !titleLower.includes("scholars program");
  });
  if (grants.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section_default, { title: "Research Grants", children: grants.map((award, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Experience_default,
      {
        title: award.title,
        subTitle: award.awarder,
        date: award.date
      },
      key
    );
  }) }) });
};
var ResearchGrants_default = ResearchGrants;

// src/ui/HonorsAwards.js
var import_jsx_runtime13 = require("react/jsx-runtime");
var HonorsAwards = ({ awards }) => {
  if (!awards) {
    return null;
  }
  const honorsAndAwards = awards.filter((award) => {
    const titleLower = (award.title || "").toLowerCase();
    return !titleLower.includes("fellowship") && !titleLower.includes("scholars program") && !titleLower.includes("research opportunity") && !titleLower.includes("research grant");
  });
  if (honorsAndAwards.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Section_default, { title: "Honors & Awards", children: honorsAndAwards.map((award, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Experience_default,
      {
        title: award.title,
        subTitle: award.awarder,
        date: award.date
      },
      key
    );
  }) }) });
};
var HonorsAwards_default = HonorsAwards;

// src/ui/ConferencePresentations.js
var import_styled_components10 = __toESM(require("styled-components"));

// src/ui/MonthYearDate.js
var import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var Text2 = import_styled_components9.default.div`
  font-style: italic;
  font-size: 1.4rem;
  white-space: nowrap;
`;
var MonthYearDate = ({ date }) => {
  if (!date) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text2, { children: "Present" });
  }
  if (/^[A-Za-z]+\s+\d{4}$/.test(date.trim())) {
    const monthMap = {
      "January": "Jan",
      "February": "Feb",
      "March": "Mar",
      "April": "Apr",
      "May": "May",
      "June": "Jun",
      "July": "Jul",
      "August": "Aug",
      "September": "Sep",
      "October": "Oct",
      "November": "Nov",
      "December": "Dec"
    };
    const parts = date.trim().split(" ");
    if (parts.length === 2) {
      const shortMonth = monthMap[parts[0]] || parts[0];
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text2, { children: `${shortMonth} ${parts[1]}` });
    }
  }
  const fullDate = new Date(date);
  const options = { year: "numeric", month: "short" };
  const formattedDate = fullDate.toLocaleDateString("en-US", options);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text2, { children: formattedDate ?? "Present" });
};
var MonthYearDate_default = MonthYearDate;

// src/ui/ConferencePresentations.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var Container3 = import_styled_components10.default.div`
  margin-bottom: 10px;
`;
var Meta2 = import_styled_components10.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;
var Title3 = import_styled_components10.default.div`
  font-weight: 600;
  font-size: 1.45rem;
  margin-bottom: 3px;
`;
var ConferenceInfo = import_styled_components10.default.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 3px;
`;
var ConferencePresentations = ({ projects }) => {
  if (!projects) {
    return null;
  }
  const confPresentations = projects.find(
    (project) => project.name && project.name.toLowerCase().includes("conference presentation")
  );
  if (!confPresentations) {
    return null;
  }
  let presentations = [];
  if (confPresentations.presentations) {
    presentations = confPresentations.presentations;
  } else if (confPresentations.highlights) {
    presentations = confPresentations.highlights.map((highlight) => {
      const match = highlight.match(/^([^:]+):\s*([^.]+)\.\s*—\s*([^|]+)\|\s*(.+)$/);
      if (match) {
        return {
          date: match[1].trim(),
          title: match[2].trim(),
          conference: match[3].trim(),
          location: match[4].trim()
        };
      }
      return {
        title: highlight,
        date: "",
        conference: "",
        location: ""
      };
    });
  }
  if (presentations.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Section_default, { title: "Conference Presentations", children: presentations.map((presentation, key) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Container3, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Meta2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Title3, { children: presentation.title }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(MonthYearDate_default, { date: presentation.date }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ConferenceInfo, { children: [
      presentation.conference,
      presentation.location && ` | ${presentation.location}`
    ] })
  ] }, key)) }) });
};
var ConferencePresentations_default = ConferencePresentations;

// src/ui/ResearchExperience.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var ResearchExperience = ({ work }) => {
  if (!work) {
    return null;
  }
  const researchWork = work.filter((w) => {
    const positionLower = (w.position || "").toLowerCase();
    return positionLower.includes("research");
  });
  if (researchWork.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section_default, { title: "Research Experience", children: researchWork.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var ResearchExperience_default = ResearchExperience;

// src/ui/TeachingMentorship.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var TeachingMentorship = ({ work }) => {
  if (!work) {
    return null;
  }
  const teachingWork = work.filter((w) => {
    const positionLower = (w.position || "").toLowerCase();
    const summaryLower = (w.summary || "").toLowerCase();
    const highlightsText = (w.highlights || []).join(" ").toLowerCase();
    return positionLower.includes("teaching") || positionLower.includes("mentor") || summaryLower.includes("teaching") || summaryLower.includes("mentor") || highlightsText.includes("teaching") || highlightsText.includes(" ta ") || highlightsText.includes("mentor") || highlightsText.includes("supervisor");
  });
  if (teachingWork.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Section_default, { title: "Teaching & Mentorship", children: teachingWork.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var TeachingMentorship_default = TeachingMentorship;

// src/ui/AcademicService.js
var import_jsx_runtime18 = require("react/jsx-runtime");
var AcademicService = ({ work }) => {
  if (!work) {
    return null;
  }
  const serviceWork = work.filter((w) => {
    const positionLower = (w.position || "").toLowerCase();
    const summaryLower = (w.summary || "").toLowerCase();
    return positionLower.includes("service") || positionLower.includes("academic service") || summaryLower.includes("academic service");
  });
  if (serviceWork.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Section_default, { title: "Academic Service", children: serviceWork.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AcademicService_default = AcademicService;

// src/ui/OneLineList.js
var import_styled_components11 = __toESM(require("styled-components"));
var import_jsx_runtime19 = require("react/jsx-runtime");
var Name = import_styled_components11.default.div`
  font-weight: 600;
  font-size: 1.4rem;
`;
var List3 = import_styled_components11.default.div`
  font-size: 1.4rem;
  margin-left: 5px;
`;
var Container4 = import_styled_components11.default.div`
  margin-bottom: 5px;
  display: flex;
  align-items: baseline;
`;
var OneLineList = ({ name, items }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Container4, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Name, { children: [
      name,
      ":"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(List3, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { class: "secondary", children: items.join(", ") }) })
  ] });
};
var OneLineList_default = OneLineList;

// src/ui/Skills.js
var import_jsx_runtime20 = require("react/jsx-runtime");
var Skills = ({ skills }) => {
  if (!skills) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Section_default, { title: "Skills", children: skills.map((w, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(OneLineList_default, { name: w.name, items: w.keywords }, key);
  }) }) });
};
var Skills_default = Skills;

// src/ui/ProfessionalAffiliations.js
var import_jsx_runtime21 = require("react/jsx-runtime");
var ProfessionalAffiliations = ({ projects }) => {
  if (!projects) {
    return null;
  }
  const profAffiliations = projects.find(
    (project) => project.name && project.name.toLowerCase().includes("professional affiliation")
  );
  if (!profAffiliations || !profAffiliations.highlights) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section_default, { title: "Professional Affiliations", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(List_default, { items: profAffiliations.highlights }) }) }) });
};
var ProfessionalAffiliations_default = ProfessionalAffiliations;

// src/ui/References.js
var import_styled_components12 = __toESM(require("styled-components"));
var import_jsx_runtime22 = require("react/jsx-runtime");
var Name2 = import_styled_components12.default.div`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;
var Reference = import_styled_components12.default.p``;
var References = ({ references }) => {
  if (!references) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Section_default, { title: "References", children: references.map((r, key) => {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { marginBottom: "15px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Name2, { children: r.name }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Reference, { children: r.reference })
    ] }, key);
  }) }) });
};
var References_default = References;

// src/ui/Resume.js
var import_jsx_runtime23 = require("react/jsx-runtime");
var Layout = import_styled_components13.default.div`
  max-width: 660px;
  margin: 0 auto;
  line-height: calc(1ex / 0.32);
  margin-bottom: 40px;
`;
var Resume = ({ resume }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Hero_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Summary_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Education_default, { education: resume.education }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ResearchInterests_default, { interests: resume.interests }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Publications_default, { publications: resume.publications }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Fellowships_default, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ResearchGrants_default, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(HonorsAwards_default, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ConferencePresentations_default, { projects: resume.projects }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ResearchExperience_default, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeachingMentorship_default, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AcademicService_default, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skills_default, { skills: resume.skills }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ProfessionalAffiliations_default, { projects: resume.projects }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(References_default, { references: resume.references })
  ] });
};
var Resume_default = Resume;

// src/index.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var render = (resume) => {
  const sheet = new import_styled_components14.ServerStyleSheet();
  const html = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Resume_default, { resume })));
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
