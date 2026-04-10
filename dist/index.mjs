var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// src/components/elements/buttons/Button.tsx
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
function Button(_a) {
  var _b = _a, { link, button, size, className = "", children, onClick = () => {
  }, onMouseEnter = () => {
  }, onMouseLeave = () => {
  } } = _b, other = __objRest(_b, ["link", "button", "size", "className", "children", "onClick", "onMouseEnter", "onMouseLeave"]);
  var _a2, _b2, _c;
  const [isHovered, setIsHovered] = useState(false);
  const backgroundColor = (button == null ? void 0 : button.background_color) || "navy";
  const buttonType = (button == null ? void 0 : button.type) || "solid";
  const classes = clsx("transition-colors relative duration-300 ease-in-out text-center", typeMap == null ? void 0 : typeMap[buttonType], className);
  const blockBgColor = buttonType === "outline" || backgroundColor === "white-alt";
  const splitWords = (_a2 = link == null ? void 0 : link.title) == null ? void 0 : _a2.split(" ");
  return (link == null ? void 0 : link.title) ? /* @__PURE__ */ jsxs(
    motion.div,
    {
      onClick,
      initial: "initial",
      whileHover: "hovered",
      onMouseEnter: () => {
        setIsHovered(true);
        onMouseEnter == null ? void 0 : onMouseEnter();
      },
      onMouseLeave: () => {
        setIsHovered(false);
        onMouseLeave == null ? void 0 : onMouseLeave();
      },
      className: clsx(
        "relative cursor-pointer overflow-hidden rounded-[125rem]",
        !blockBgColor && (backgroundColorMap == null ? void 0 : backgroundColorMap[backgroundColor]),
        backgroundColor === "white-alt" && (backgroundColorMap == null ? void 0 : backgroundColorMap.white)
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              transform: "translateZ(0)"
              // Safari fix as overflow and border radius don't work
            },
            className: "absolute inset-0 flex h-full flex-col overflow-hidden rounded-full",
            children: new Array(4).fill(0).map((_, index) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: {
                  x: index % 2 === 0 ? "-101%" : "101%"
                },
                animate: {
                  x: !isHovered ? index % 2 === 0 ? "-101%" : "101%" : "0%",
                  transition: {
                    duration: !isHovered ? 0.3 : 0.4,
                    delay: index * 0.1,
                    ease: "easeInOut"
                  }
                },
                className: clsx("z-10 flex-1", buttonType !== "outline" && (linesColorMap == null ? void 0 : linesColorMap[backgroundColor]), buttonType === "outline" && "bg-lightBlue")
              },
              `line-${index}`
            ))
          }
        ),
        /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: clsx(classes) }, other), { children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx(
              "button__initial-text relative z-30 overflow-hidden",
              buttonType !== "outline" && ((_b2 = textColorMap == null ? void 0 : textColorMap[backgroundColor]) == null ? void 0 : _b2.initial),
              buttonType === "outline" && "text-navy"
            ),
            children: splitWords.map((word, i) => {
              const isLastWord = i === splitWords.length - 1;
              const accumulatedDelay = splitWords.slice(0, i).reduce((acc, curr) => acc + curr.length, 0) * 0.025;
              return /* @__PURE__ */ jsxs("p", { className: "inline-block", children: [
                word == null ? void 0 : word.split("").map((letter, ind) => /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: clsx("inline-block"),
                    variants: {
                      initial: { y: 0, opacity: 1 },
                      hovered: { y: "-100%", opacity: 0 }
                    },
                    transition: {
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: accumulatedDelay + ind * 0.025
                    },
                    children: letter
                  },
                  `initial-${letter}-${ind}`
                )),
                !isLastWord && /* @__PURE__ */ jsx("span", { children: "\xA0" })
              ] }, `initial-word-${i}`);
            })
          }
        ) })),
        /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: clsx(classes, "!absolute inset-0 z-20") }, other), { children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx(
              "button__hover-text overflow-hidden",
              buttonType !== "outline" && ((_c = textColorMap == null ? void 0 : textColorMap[backgroundColor]) == null ? void 0 : _c.hover),
              buttonType === "outline" && "text-navy"
            ),
            children: splitWords.map((word, i) => {
              const isLastWord = i === splitWords.length - 1;
              const accumulatedDelay = splitWords.slice(0, i).reduce((acc, curr) => acc + curr.length, 0) * 0.025;
              return /* @__PURE__ */ jsxs("p", { className: "inline-block", children: [
                word == null ? void 0 : word.split("").map((letter, ind) => /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: clsx("inline-block"),
                    variants: {
                      initial: { y: "100%", opacity: 0 },
                      hovered: { y: 0, opacity: 1 }
                    },
                    transition: {
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: accumulatedDelay + ind * 0.025
                    },
                    children: letter
                  },
                  `hover-${letter}-${ind}`
                )),
                !isLastWord && /* @__PURE__ */ jsx("span", { children: "\xA0" })
              ] }, `hover-${word}-${i}`);
            })
          }
        ) }))
      ]
    }
  ) : /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: classes }, other), { children }));
}
var backgroundColorMap, typeMap, textColorMap, linesColorMap, Button_default;
var init_Button = __esm({
  "src/components/elements/buttons/Button.tsx"() {
    backgroundColorMap = {
      navy: "bg-navy",
      white: "bg-white",
      "light-grey": "bg-navy/[0.05] text-navy hover:bg-blue hover:text-white",
      // Update
      white15: "bg-white/15",
      navy5: "bg-navy/5"
    };
    typeMap = {
      default: "px-[36px] sm:px-12 py-[15px] md:py-4.25 rounded-[125rem] text-17",
      slim: "px-5 py-3 rounded-[125rem] text-16",
      header: "px-12 py-4 rounded-full font-medium !leading-none lg:px-5 lg:py-[.8rem] lg:text-[1rem]",
      outline: "px-12 py-4.25 rounded-[125rem] font-semibold text-17 border border-lavenderGrey hover:border-lightBlue"
    };
    textColorMap = {
      "white-alt": {
        initial: "text-blue font-semibold",
        hover: "text-blue font-semibold"
      },
      white: {
        initial: "text-navy",
        hover: "text-blue"
      },
      navy: {
        initial: "text-white",
        hover: "text-white"
      },
      white15: {
        initial: "text-white",
        hover: "text-blue"
      },
      navy5: {
        initial: "text-navy",
        hover: "text-white"
      }
    };
    linesColorMap = {
      "white-alt": "bg-lightBlue",
      white: "bg-lightBlue",
      navy: "bg-blue",
      white15: "bg-lightBlue",
      navy5: "bg-blue"
    };
    Button_default = Button;
  }
});

// src/components/elements/Icons.tsx
import { LazyMotion, domAnimation, m } from "framer-motion";
import clsx2 from "clsx";
import { useState as useState2 } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function FooterFeaturedLinksArrow() {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "16", viewBox: "0 0 15 16", fill: "none", children: /* @__PURE__ */ jsx2("path", { d: "M3.95144 4.19309L11.0225 4.19309M11.0225 4.19309L11.0225 11.2642M11.0225 4.19309L3.53553 11.6801", stroke: "#0D1226", strokeLinejoin: "round" }) });
}
function CircleArrow() {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx2("path", { d: "M7.82912 7.55857L12.4409 7.55857M12.4409 7.55857L12.4409 12.1704M12.4409 7.55857L7.55786 12.4417", stroke: "currentColor", strokeLinejoin: "round" }) });
}
function RightArrow() {
  return /* @__PURE__ */ jsx2("svg", { width: "100%", height: "100%", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2("path", { d: "M5.58819 1L10.5882 6M10.5882 6L5.58819 11M10.5882 6L0 6", stroke: "currentColor", strokeLinejoin: "round" }) });
}
function RightArrowCircle({ circleClassName = "text-navy", arrowClassName = "text-white", disableTransitions = false, width = 27, height = 26 }) {
  return /* @__PURE__ */ jsxs2("svg", { width, height, viewBox: "0 0 27 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs2("g", { clipPath: "url(#clip0_1817_13290)", children: [
      /* @__PURE__ */ jsx2("rect", { x: "0.802734", width: "26", height: "26", rx: "13", fill: "currentColor", className: clsx2("transition-colors duration-300 ease-in-out", circleClassName) }),
      disableTransitions ? /* @__PURE__ */ jsx2(
        "path",
        {
          className: clsx2(arrowClassName),
          d: "M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893",
          stroke: "currentColor",
          strokeLinejoin: "round"
        }
      ) : /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2(
          "path",
          {
            className: clsx2("translate-x-0 transition-transform duration-200 group-hover:translate-x-[100%]", arrowClassName),
            d: "M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893",
            stroke: "currentColor",
            strokeLinejoin: "round"
          }
        ),
        " ",
        /* @__PURE__ */ jsx2(
          "path",
          {
            className: clsx2("translate-x-[-100%] transition-transform duration-200 group-hover:translate-x-0", arrowClassName),
            d: "M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893",
            stroke: "currentColor",
            strokeLinejoin: "round"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx2("defs", {})
  ] });
}
function MobileChevron() {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 22 18", fill: "none", children: /* @__PURE__ */ jsx2("path", { d: "M2.68689 4.89706L11 13.1029L19.313 4.89706", stroke: "currentColor", strokeWidth: "2" }) });
}
function FooterCTATopLines() {
  return /* @__PURE__ */ jsxs2("svg", { width: "351", height: "251", viewBox: "0 0 351 251", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M0.677246 0.5V250.5", stroke: "white", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M19.3869 0.5V250.5", stroke: "white" }),
    /* @__PURE__ */ jsx2("path", { d: "M38.0966 0.5V250.5", stroke: "white", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M56.8063 0.5V250.5", stroke: "white", strokeWidth: "2" }),
    /* @__PURE__ */ jsx2("path", { d: "M75.5159 0.5V250.5", stroke: "white", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M94.2256 0.5V250.5", stroke: "white", strokeWidth: "3" }),
    /* @__PURE__ */ jsx2("path", { d: "M112.935 0.5V250.5", stroke: "white", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M131.645 0.5V250.5", stroke: "white", strokeWidth: "4" }),
    /* @__PURE__ */ jsx2("path", { d: "M150.355 0.5V250.5", stroke: "white", strokeWidth: "4.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M169.064 0.5V250.5", stroke: "white", strokeWidth: "5" }),
    /* @__PURE__ */ jsx2("path", { d: "M187.774 0.5V250.5", stroke: "white", strokeWidth: "5.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M206.484 0.5V250.5", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ jsx2("path", { d: "M225.193 0.5V250.5", stroke: "white", strokeWidth: "6.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M243.903 0.5V250.5", stroke: "white", strokeWidth: "7" }),
    /* @__PURE__ */ jsx2("path", { d: "M262.613 0.5V250.5", stroke: "white", strokeWidth: "7.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M281.322 0.5V250.5", stroke: "white", strokeWidth: "8" }),
    /* @__PURE__ */ jsx2("path", { d: "M300.032 0.5V250.5", stroke: "white", strokeWidth: "8.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M318.742 0.5V250.5", stroke: "white", strokeWidth: "9" }),
    /* @__PURE__ */ jsx2("path", { d: "M337.451 0.5V250.5", stroke: "white", strokeWidth: "9.5" })
  ] });
}
function FooterCTABottomLines({ className }) {
  return /* @__PURE__ */ jsxs2("svg", { className, width: "508", height: "251", viewBox: "0 0 508 251", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M494.452 0.5V250.5", stroke: "white", strokeWidth: "3" }),
    /* @__PURE__ */ jsx2("path", { d: "M475.742 0.5V250.5", stroke: "white", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M457.032 0.5V250.5", stroke: "white", strokeWidth: "4" }),
    /* @__PURE__ */ jsx2("path", { d: "M438.323 0.5V250.5", stroke: "white", strokeWidth: "4.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M419.613 0.5V250.5", stroke: "white", strokeWidth: "5" }),
    /* @__PURE__ */ jsx2("path", { d: "M400.903 0.5V250.5", stroke: "white", strokeWidth: "5.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M382.194 0.5V250.5", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ jsx2("path", { d: "M363.484 0.5V250.5", stroke: "white", strokeWidth: "6.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M344.774 0.5V250.5", stroke: "white", strokeWidth: "7" }),
    /* @__PURE__ */ jsx2("path", { d: "M326.065 0.5V250.5", stroke: "white", strokeWidth: "7.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M307.355 0.5V250.5", stroke: "white", strokeWidth: "8" }),
    /* @__PURE__ */ jsx2("path", { d: "M288.645 0.5V250.5", stroke: "white", strokeWidth: "8.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M269.935 0.5V250.5", stroke: "white", strokeWidth: "9" }),
    /* @__PURE__ */ jsx2("path", { d: "M251.226 0.5V250.5", stroke: "white", strokeWidth: "9.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M232.516 0.5V250.5", stroke: "white", strokeWidth: "10" }),
    /* @__PURE__ */ jsx2("path", { d: "M213.806 0.5V250.5", stroke: "white", strokeWidth: "10.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M195.097 0.5V250.5", stroke: "white", strokeWidth: "11" }),
    /* @__PURE__ */ jsx2("path", { d: "M176.387 0.5V250.5", stroke: "white", strokeWidth: "11.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M157.677 0.5V250.5", stroke: "white", strokeWidth: "12" }),
    /* @__PURE__ */ jsx2("path", { d: "M138.968 0.5V250.5", stroke: "white", strokeWidth: "12.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M120.258 0.5V250.5", stroke: "white", strokeWidth: "13" }),
    /* @__PURE__ */ jsx2("path", { d: "M101.548 0.5V250.5", stroke: "white", strokeWidth: "13.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M82.8386 0.5V250.5", stroke: "white", strokeWidth: "14" }),
    /* @__PURE__ */ jsx2("path", { d: "M64.129 0.5V250.5", stroke: "white", strokeWidth: "14.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M45.4193 0.5V250.5", stroke: "white", strokeWidth: "15" }),
    /* @__PURE__ */ jsx2("path", { d: "M26.7097 0.5V250.5", stroke: "white", strokeWidth: "15.5" }),
    /* @__PURE__ */ jsx2("path", { d: "M8 0.5V250.5", stroke: "white", strokeWidth: "16" })
  ] });
}
function CTASpring() {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 292 257", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("rect", { width: "285.46", height: "255.885", transform: "matrix(1 0 0 -1 0.664062 256.337)", fill: "white" }),
    /* @__PURE__ */ jsx2("path", { d: "M0.664062 256.337V0.45165", stroke: "#0000DC", strokeWidth: "0.32387" }),
    /* @__PURE__ */ jsx2("path", { d: "M9.87305 256.337V0.45165", stroke: "#0000DC", strokeWidth: "0.647741" }),
    /* @__PURE__ */ jsx2("path", { d: "M19.0801 256.337V0.45165", stroke: "#0000DC", strokeWidth: "0.971611" }),
    /* @__PURE__ */ jsx2("path", { d: "M28.2891 256.337V0.45165", stroke: "#0000DC", strokeWidth: "1.29548" }),
    /* @__PURE__ */ jsx2("path", { d: "M37.498 256.337V0.45165", stroke: "#0000DC", strokeWidth: "1.61935" }),
    /* @__PURE__ */ jsx2("path", { d: "M46.7051 256.337V0.45165", stroke: "#0000DC", strokeWidth: "1.94322" }),
    /* @__PURE__ */ jsx2("path", { d: "M55.9141 256.337V0.45165", stroke: "#0000DC", strokeWidth: "2.26709" }),
    /* @__PURE__ */ jsx2("path", { d: "M65.123 256.337V0.45165", stroke: "#0000DC", strokeWidth: "2.59096" }),
    /* @__PURE__ */ jsx2("path", { d: "M74.3301 256.337V0.45165", stroke: "#0000DC", strokeWidth: "2.91483" }),
    /* @__PURE__ */ jsx2("path", { d: "M83.5391 256.337V0.45165", stroke: "#0000DC", strokeWidth: "3.2387" }),
    /* @__PURE__ */ jsx2("path", { d: "M92.748 256.337V0.45165", stroke: "#0000DC", strokeWidth: "3.56257" }),
    /* @__PURE__ */ jsx2("path", { d: "M101.957 256.337V0.45165", stroke: "#0000DC", strokeWidth: "3.88644" }),
    /* @__PURE__ */ jsx2("path", { d: "M111.164 256.337V0.45165", stroke: "#0000DC", strokeWidth: "4.21031" }),
    /* @__PURE__ */ jsx2("path", { d: "M120.373 256.337V0.45165", stroke: "#0000DC", strokeWidth: "4.53418" }),
    /* @__PURE__ */ jsx2("path", { d: "M129.582 256.337V0.45165", stroke: "#0000DC", strokeWidth: "4.85806" }),
    /* @__PURE__ */ jsx2("path", { d: "M138.789 256.337V0.45165", stroke: "#0000DC", strokeWidth: "5.18193" }),
    /* @__PURE__ */ jsx2("path", { d: "M147.998 256.337V0.45165", stroke: "#0000DC", strokeWidth: "5.5058" }),
    /* @__PURE__ */ jsx2("path", { d: "M157.207 256.337V0.45165", stroke: "#0000DC", strokeWidth: "5.82967" }),
    /* @__PURE__ */ jsx2("path", { d: "M166.414 256.337V0.45165", stroke: "#0000DC", strokeWidth: "6.15354" }),
    /* @__PURE__ */ jsx2("path", { d: "M175.623 256.337V0.45165", stroke: "#0000DC", strokeWidth: "6.47741" }),
    /* @__PURE__ */ jsx2("path", { d: "M184.832 256.337V0.45165", stroke: "#0000DC", strokeWidth: "6.80128" }),
    /* @__PURE__ */ jsx2("path", { d: "M194.039 256.337V0.45165", stroke: "#0000DC", strokeWidth: "7.12515" }),
    /* @__PURE__ */ jsx2("path", { d: "M203.248 256.337V0.45165", stroke: "#0000DC", strokeWidth: "7.44902" }),
    /* @__PURE__ */ jsx2("path", { d: "M212.457 256.337V0.45165", stroke: "#0000DC", strokeWidth: "7.77289" }),
    /* @__PURE__ */ jsx2("path", { d: "M221.664 256.337V0.45165", stroke: "#0000DC", strokeWidth: "8.09676" }),
    /* @__PURE__ */ jsx2("path", { d: "M230.873 256.337V0.45165", stroke: "#0000DC", strokeWidth: "8.42063" }),
    /* @__PURE__ */ jsx2("path", { d: "M240.082 256.337V0.45165", stroke: "#0000DC", strokeWidth: "8.7445" }),
    /* @__PURE__ */ jsx2("path", { d: "M249.291 256.337V0.45165", stroke: "#0000DC", strokeWidth: "9.06837" }),
    /* @__PURE__ */ jsx2("path", { d: "M258.498 256.337V0.451649", stroke: "#0000DC", strokeWidth: "9.39224" }),
    /* @__PURE__ */ jsx2("path", { d: "M267.707 256.337V0.45165", stroke: "#0000DC", strokeWidth: "9.71611" }),
    /* @__PURE__ */ jsx2("path", { d: "M276.916 256.337V0.451649", stroke: "#0000DC", strokeWidth: "10.04" }),
    /* @__PURE__ */ jsx2("path", { d: "M286.123 256.337V0.45165", stroke: "#0000DC", strokeWidth: "10.3639" })
  ] });
}
function PlusCircle({ circleClassName = "text-blue", plusClassName = "text-white", hideVerticalLine = false }) {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("rect", { width: "24", height: "24", rx: "12", fill: "currentColor", className: circleClassName }),
    /* @__PURE__ */ jsx2(
      m.path,
      {
        animate: {
          opacity: hideVerticalLine ? 0 : 1,
          transition: {
            duration: 0.2,
            ease: "linear"
          }
        },
        d: "M12.0264 6.96777V17.0867",
        stroke: "currentColor",
        className: plusClassName,
        strokeWidth: "1.08",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx2("path", { d: "M17.0859 12.0264L6.96702 12.0264", stroke: "currentColor", className: plusClassName, strokeWidth: "1.08", strokeLinecap: "round" })
  ] });
}
function MinusCircle({ circleClassName = "text-lightGrey", minusClassName = "text-navy" }) {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("rect", { width: "24", height: "24", rx: "12", fill: "currentColor", className: circleClassName }),
    /* @__PURE__ */ jsx2("path", { d: "M17.0859 12.0273L6.96702 12.0273", stroke: "currentColor", className: minusClassName, strokeWidth: "1.08", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx2("path", { d: "M17.0859 12.0273L6.96702 12.0273", stroke: "currentColor", className: minusClassName, strokeWidth: "1.08", strokeLinecap: "round" })
  ] });
}
function LeadersGridPlusCircle() {
  return /* @__PURE__ */ jsxs2("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("rect", { x: "28", width: "28", height: "28", rx: "14", transform: "rotate(90 28 0)", fill: "#0000DC" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 8.4834L14 19.5166", stroke: "#95ECFD", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx2("path", { d: "M19.5156 14L8.48242 14", stroke: "#95ECFD", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function SliderCircleArrow({ circleClassName = "text-white", arrowClassName = "text-navy", flip = false }) {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      className: clsx2(flip && "hover rotate-180 transform", "group"),
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "33",
      viewBox: "0 0 32 33",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx2(
          "rect",
          {
            width: "32",
            height: "32",
            rx: "16",
            transform: "matrix(-1 8.74228e-08 8.74228e-08 1 32 0.5)",
            fill: "currentColor",
            className: clsx2(circleClassName, "opacity-50 group-hover:opacity-100", "transition-[colors, opacity] duration-300 ease-in-out")
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            className: clsx2(arrowClassName, "transition-colors duration-300 ease-in-out"),
            d: "M15.9684 11.5L11.0016 16.4668M11.0016 16.4668L15.9684 21.4337M11.0016 16.4668L21.5195 16.4668",
            stroke: "currentColor",
            strokeWidth: "1.38462",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function TopRightArrowCircle({ width = "24", height = "24" }) {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width: "24", height: "24", rx: "12", fill: "white" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M9.99963 9.72595L14.6824 9.72595M14.6824 9.72595L14.6824 14.4087M14.6824 9.72595L9.7242 14.6842",
        stroke: "#0D1226",
        strokeWidth: "0.923077",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function FeaturedLinkTopRightArrowCircle() {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width: "20", height: "20", rx: "10", fill: "white" }),
    /* @__PURE__ */ jsx2("path", { d: "M7.82925 7.55857L12.4411 7.55857M12.4411 7.55857L12.4411 12.1704M12.4411 7.55857L7.55799 12.4417", stroke: "#0D1226", strokeLinejoin: "round" })
  ] });
}
function TestimonialSliderArrow({ circleClassName = "text-white", arrowClassName = "text-white", circleOpacity = "0.1", flip = false }) {
  return /* @__PURE__ */ jsxs2("svg", { className: clsx2(flip && "rotate-180 transform"), xmlns: "http://www.w3.org/2000/svg", width: "39", height: "39", viewBox: "0 0 39 39", fill: "none", children: [
    /* @__PURE__ */ jsx2(
      "rect",
      {
        width: "38.4",
        height: "38.4",
        rx: "19.2",
        transform: "matrix(-1 8.74228e-08 8.74228e-08 1 38.3984 0.159668)",
        fill: "currentColor",
        className: circleClassName,
        fillOpacity: circleOpacity
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M19.159 13.3599L13.1988 19.3201M13.1988 19.3201L19.159 25.2803M13.1988 19.3201L25.8203 19.3201",
        stroke: "currentColor",
        className: arrowClassName,
        strokeWidth: "1.66154",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function CloseIcon({ lineClassName = "text-navy" }) {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: [
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M18.9961 19.0059L4.9946 5.00436",
        stroke: "currentColor",
        className: lineClassName,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M4.99609 19.0059L18.9976 5.00436",
        stroke: "currentColor",
        className: lineClassName,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function ContactTopRightArrowCircle({ arrowClassName = "text-navy", circleClassName = "text-white" }) {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width: "32", height: "32", rx: "16", fill: "currentColor", className: circleClassName }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M12.5258 12.0938L19.9047 12.0938M19.9047 12.0938L19.9047 19.4727M19.9047 12.0938L12.0918 19.9067",
        stroke: "currentColor",
        className: arrowClassName,
        strokeLinejoin: "round"
      }
    )
  ] });
}
function ContactItemHighlightedUpperSpring({ lineClassName = "text-white" }) {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 334 113", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 -205L1 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx2("path", { d: "M19.582 -205L19.582 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx2("path", { d: "M38.1602 -205L38.1602 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx2("path", { d: "M56.7422 -205L56.7422 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx2("path", { d: "M75.3242 -205L75.3242 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx2("path", { d: "M93.9023 -205L93.9023 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx2("path", { d: "M112.484 -205L112.484 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx2("path", { d: "M131.066 -205L131.066 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx2("path", { d: "M149.645 -205L149.645 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx2("path", { d: "M168.227 -205L168.227 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx2("path", { d: "M186.805 -205L186.805 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx2("path", { d: "M205.387 -205L205.387 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx2("path", { d: "M223.969 -205L223.969 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx2("path", { d: "M242.547 -205L242.547 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "6.9517" }),
    /* @__PURE__ */ jsx2("path", { d: "M261.129 -205L261.129 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "7.44825" }),
    /* @__PURE__ */ jsx2("path", { d: "M279.711 -205L279.711 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "7.9448" }),
    /* @__PURE__ */ jsx2("path", { d: "M298.289 -205L298.289 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "8.44135" }),
    /* @__PURE__ */ jsx2("path", { d: "M316.871 -205L316.871 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "8.93789" }),
    /* @__PURE__ */ jsx2("path", { d: "M335.453 -205L335.453 112.792", stroke: "currentColor", className: lineClassName, strokeWidth: "9.43444" })
  ] });
}
function ContactItemHighlightedUpperSpringHover({ lineClassName = "text-white" }) {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 348 112", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 -206L1 112", stroke: "currentColor", className: lineClassName, strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx2("path", { d: "M16.6445 -206L16.6445 112", stroke: "currentColor", className: lineClassName, strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx2("path", { d: "M32.2891 -206L32.2891 112", stroke: "currentColor", className: lineClassName, strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx2("path", { d: "M47.9336 -206L47.9336 112", stroke: "currentColor", className: lineClassName, strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx2("path", { d: "M63.582 -206L63.582 112", stroke: "currentColor", className: lineClassName, strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx2("path", { d: "M79.2266 -206L79.2266 112", stroke: "currentColor", className: lineClassName, strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx2("path", { d: "M94.8711 -206L94.8711 112", stroke: "currentColor", className: lineClassName, strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx2("path", { d: "M110.516 -206L110.516 112", stroke: "currentColor", className: lineClassName, strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx2("path", { d: "M126.16 -206L126.16 112", stroke: "currentColor", className: lineClassName, strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx2("path", { d: "M141.805 -206L141.805 112", stroke: "currentColor", className: lineClassName, strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx2("path", { d: "M157.453 -206L157.453 112", stroke: "currentColor", className: lineClassName, strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx2("path", { d: "M173.098 -206L173.098 112", stroke: "currentColor", className: lineClassName, strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx2("path", { d: "M188.742 -206L188.742 112", stroke: "currentColor", className: lineClassName, strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx2("path", { d: "M204.387 -206L204.387 112", stroke: "currentColor", className: lineClassName, strokeWidth: "6.9517" }),
    /* @__PURE__ */ jsx2("path", { d: "M220.031 -206L220.031 112", stroke: "currentColor", className: lineClassName, strokeWidth: "7.44825" }),
    /* @__PURE__ */ jsx2("path", { d: "M235.676 -206L235.676 112", stroke: "currentColor", className: lineClassName, strokeWidth: "7.9448" }),
    /* @__PURE__ */ jsx2("path", { d: "M251.324 -206L251.324 112", stroke: "currentColor", className: lineClassName, strokeWidth: "8.44135" }),
    /* @__PURE__ */ jsx2("path", { d: "M266.969 -206L266.969 112", stroke: "currentColor", className: lineClassName, strokeWidth: "8.93789" }),
    /* @__PURE__ */ jsx2("path", { d: "M282.613 -206L282.613 112", stroke: "currentColor", className: lineClassName, strokeWidth: "9.43444" }),
    /* @__PURE__ */ jsx2("path", { d: "M298.258 -206L298.258 112", stroke: "currentColor", className: lineClassName, strokeWidth: "9.93099" }),
    /* @__PURE__ */ jsx2("path", { d: "M313.902 -206L313.902 112", stroke: "currentColor", className: lineClassName, strokeWidth: "10.4275" }),
    /* @__PURE__ */ jsx2("path", { d: "M329.547 -206L329.547 112", stroke: "currentColor", className: lineClassName, strokeWidth: "10.9241" }),
    /* @__PURE__ */ jsx2("path", { d: "M345.195 -206L345.195 112", stroke: "currentColor", className: lineClassName, strokeWidth: "11.4206" })
  ] });
}
function ContactItemHighlightedLowerSpring({ lineClassName = "text-white" }) {
  return (
    // <svg width="204" height="248" viewBox="0 0 204 248" fill="none" xmlns="http://www.w3.org/2000/svg">
    /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 204 248", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx2("path", { d: "M1 0L1 250", stroke: "currentColor", className: lineClassName, strokeWidth: "0.49655" }),
      /* @__PURE__ */ jsx2("path", { d: "M19.582 0L19.582 250", stroke: "currentColor", className: lineClassName, strokeWidth: "0.9931" }),
      /* @__PURE__ */ jsx2("path", { d: "M38.1602 0L38.1602 250", stroke: "currentColor", className: lineClassName, strokeWidth: "1.48965" }),
      /* @__PURE__ */ jsx2("path", { d: "M56.7422 0L56.7422 250", stroke: "currentColor", className: lineClassName, strokeWidth: "1.9862" }),
      /* @__PURE__ */ jsx2("path", { d: "M75.3242 0L75.3242 250", stroke: "currentColor", className: lineClassName, strokeWidth: "2.48275" }),
      /* @__PURE__ */ jsx2("path", { d: "M93.9023 0L93.9023 250", stroke: "currentColor", className: lineClassName, strokeWidth: "2.9793" }),
      /* @__PURE__ */ jsx2("path", { d: "M112.484 0L112.484 250", stroke: "currentColor", className: lineClassName, strokeWidth: "3.47585" }),
      /* @__PURE__ */ jsx2("path", { d: "M131.066 0L131.066 250", stroke: "currentColor", className: lineClassName, strokeWidth: "3.9724" }),
      /* @__PURE__ */ jsx2("path", { d: "M149.645 0L149.645 250", stroke: "currentColor", className: lineClassName, strokeWidth: "4.46895" }),
      /* @__PURE__ */ jsx2("path", { d: "M168.227 0L168.227 250", stroke: "currentColor", className: lineClassName, strokeWidth: "4.9655" }),
      /* @__PURE__ */ jsx2("path", { d: "M186.805 0L186.805 250", stroke: "currentColor", className: lineClassName, strokeWidth: "5.46205" }),
      /* @__PURE__ */ jsx2("path", { d: "M205.387 0L205.387 250", stroke: "currentColor", className: lineClassName, strokeWidth: "5.9586" })
    ] })
  );
}
function ContactItemHighlightedLowerSpringHover() {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 113 248", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 0L1 250", stroke: "#FFFFFF", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx2("path", { d: "M16.6445 0L16.6445 250", stroke: "#FFFFFF", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx2("path", { d: "M32.2891 0L32.2891 250", stroke: "#FFFFFF", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx2("path", { d: "M47.9336 0L47.9336 250", stroke: "#FFFFFF", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx2("path", { d: "M63.582 0L63.582 250", stroke: "#FFFFFF", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx2("path", { d: "M79.2266 0L79.2266 250", stroke: "#FFFFFF", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx2("path", { d: "M94.8711 0L94.8711 250", stroke: "#FFFFFF", strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx2("path", { d: "M110.516 0L110.516 250", stroke: "#FFFFFF", strokeWidth: "3.9724" })
  ] });
}
function ContactItemUpperSpring() {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 91 129", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 0L1 318", stroke: "#4337A8", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx2("path", { d: "M15.7422 0L15.7422 318", stroke: "#4337A8", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx2("path", { d: "M30.4844 0L30.4844 318", stroke: "#4337A8", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx2("path", { d: "M45.2266 0L45.2266 318", stroke: "#4337A8", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx2("path", { d: "M59.9688 0L59.9688 318", stroke: "#4337A8", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx2("path", { d: "M74.7109 0L74.7109 318", stroke: "#4337A8", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx2("path", { d: "M89.4531 0L89.4531 318", stroke: "#4337A8", strokeWidth: "3.47585" })
  ] });
}
function ContactItemLowerSpring() {
  return /* @__PURE__ */ jsxs2("svg", { width: "100%", height: "100%", viewBox: "0 0 194 55", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 0L1 318", stroke: "#4337A8", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx2("path", { d: "M15.7422 0L15.7422 318", stroke: "#4337A8", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx2("path", { d: "M30.4844 0L30.4844 318", stroke: "#4337A8", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx2("path", { d: "M45.2266 0L45.2266 318", stroke: "#4337A8", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx2("path", { d: "M59.9688 0L59.9688 318", stroke: "#4337A8", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx2("path", { d: "M74.7109 0L74.7109 318", stroke: "#4337A8", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx2("path", { d: "M89.4531 0L89.4531 318", stroke: "#4337A8", strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx2("path", { d: "M104.195 0L104.195 318", stroke: "#4337A8", strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx2("path", { d: "M118.934 0L118.934 318", stroke: "#4337A8", strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx2("path", { d: "M133.676 0L133.676 318", stroke: "#4337A8", strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx2("path", { d: "M148.418 0L148.418 318", stroke: "#4337A8", strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx2("path", { d: "M163.16 0L163.16 318", stroke: "#4337A8", strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx2("path", { d: "M177.902 0L177.902 318", stroke: "#4337A8", strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx2("path", { d: "M192.645 0L192.645 318", stroke: "#4337A8", strokeWidth: "6.9517" })
  ] });
}
function Xlogo({ height = "32", width = "32", containerClassName: containerClassName2 = "text-lightGrey", logoClassName = "text-navy" }) {
  const colorTransitionClasses = "transition-colors duration-300 ease-in-out";
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width, height, rx: "2", fill: "currentColor", className: clsx2(colorTransitionClasses, containerClassName2) }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M17.1086 15.1092L21.4477 10.1699H20.4199L16.6506 14.4578L13.6424 10.1699H10.1719L14.7219 16.6545L10.1719 21.8335H11.1997L15.1776 17.3044L18.3552 21.8335H21.8257M11.5707 10.929H13.1498L20.4191 21.1117H18.8396",
        fill: "currentColor",
        className: clsx2(logoClassName, colorTransitionClasses)
      }
    )
  ] });
}
function LinkedinLogo({ width = "32", height = "32", containerClassName: containerClassName2 = "text-lightGrey", logoClassName = "text-navy" }) {
  const colorTransitionClasses = "transition-colors duration-300 ease-in-out";
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width, height, rx: "2", fill: "currentColor", className: clsx2(colorTransitionClasses, containerClassName2) }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.6289 21.3754H13.1656V12.9346H10.6289V21.3754Z",
        fill: "currentColor",
        className: clsx2(logoClassName, colorTransitionClasses)
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.4657 16.6764V21.3754H19.9823V16.9375C19.9823 15.8062 19.5818 15.1101 18.7006 15.1101C18.1302 15.104 17.6176 15.4869 17.4189 16.0673C17.3476 16.29 17.3204 16.5276 17.3388 16.7634V21.3754H14.8555V13.1956H17.3388V14.3269C17.805 13.4619 18.6598 12.932 19.5818 12.9346C21.1839 12.9346 22.4657 14.1529 22.4657 16.6764Z",
        fill: "currentColor",
        className: clsx2(logoClassName, colorTransitionClasses)
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.9331 9.56328C11.2817 9.49163 10.7006 10.0082 10.6347 10.7153C10.6311 10.7515 10.6296 10.7869 10.6289 10.8231C10.6296 11.5216 11.1513 12.0861 11.7932 12.0846C11.8157 12.0846 11.8382 12.0846 11.8606 12.083C12.512 12.1538 13.0931 11.6389 13.159 10.931C13.1619 10.8948 13.1641 10.8594 13.1648 10.8231C13.188 10.1491 12.704 9.58375 12.0845 9.55777C12.0338 9.55619 11.9831 9.55777 11.9331 9.56328Z",
        fill: "currentColor",
        className: clsx2(logoClassName, colorTransitionClasses)
      }
    )
  ] });
}
function FacebookLogo({ width = "32", height = "32", containerClassName: containerClassName2 = "text-lightGrey", logoClassName = "text-navy" }) {
  const colorTransitionClasses = "transition-colors duration-300 ease-in-out";
  return /* @__PURE__ */ jsxs2("svg", { width, height, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("rect", { width, height, rx: "2", fill: "currentColor", className: clsx2(colorTransitionClasses, containerClassName2) }),
    /* @__PURE__ */ jsx2("g", { clipPath: "url(#clip0_807_19270)", children: /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M13.3525 16.2486H14.5802V21.6639C14.5802 21.7708 14.6611 21.8574 14.7609 21.8574H16.8425C16.9423 21.8574 17.0231 21.7708 17.0231 21.6639V16.2741H18.4345C18.5262 16.2741 18.6034 16.2004 18.6139 16.1027L18.8283 14.1091C18.8342 14.0542 18.8179 13.9993 18.7837 13.9581C18.7494 13.9169 18.7003 13.8934 18.6489 13.8934H17.0232V12.6437C17.0232 12.2669 17.2125 12.0759 17.5859 12.0759C17.6392 12.0759 18.6489 12.0759 18.6489 12.0759C18.7486 12.0759 18.8295 11.9892 18.8295 11.8824V10.0524C18.8295 9.94549 18.7486 9.85885 18.6489 9.85885H17.184C17.1737 9.85831 17.1507 9.85742 17.1169 9.85742C16.8627 9.85742 15.9793 9.91088 15.2814 10.5988C14.5082 11.361 14.6157 12.2737 14.6414 12.432V13.8933H13.3525C13.2527 13.8933 13.1719 13.98 13.1719 14.0869V16.055C13.1719 16.162 13.2527 16.2486 13.3525 16.2486Z",
        fill: "currentColor",
        className: clsx2(logoClassName, colorTransitionClasses)
      }
    ) }),
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_807_19270", children: /* @__PURE__ */ jsx2("rect", { width: "11.2", height: "12", fill: "white", transform: "translate(10.4004 9.85742)" }) }) })
  ] });
}
function YoutubeLogo() {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ jsx2("rect", { width: "32", height: "32", rx: "2", fill: "#F6F7F9" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M21.1861 9.3418H10.8137C8.77864 9.3418 7.12891 11.0915 7.12891 13.2499V18.7492C7.12891 20.9076 8.77864 22.6573 10.8137 22.6573H21.1861C23.2212 22.6573 24.8709 20.9076 24.8709 18.7492V13.2499C24.8709 11.0915 23.2212 9.3418 21.1861 9.3418ZM18.6941 16.2671L13.8426 18.7212C13.7133 18.7866 13.564 18.6866 13.564 18.5348V13.4732C13.564 13.3191 13.7173 13.2193 13.8468 13.2889L18.6983 15.8964C18.8426 15.9739 18.8401 16.1933 18.6941 16.2671Z",
        fill: "#0D1226"
      }
    )
  ] });
}
function UlItemBulletOrange() {
  return /* @__PURE__ */ jsxs2("svg", { width: "16", height: "13", viewBox: "0 0 16 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs2("g", { clipPath: "url(#clip0_1367_47698)", children: [
      /* @__PURE__ */ jsx2("rect", { y: "0.700012", width: "1", height: "12", fill: "#FA5D00" }),
      /* @__PURE__ */ jsx2("rect", { x: "3", y: "0.700012", width: "2", height: "12", fill: "#FA5D00" }),
      /* @__PURE__ */ jsx2("rect", { x: "7", y: "0.700012", width: "3", height: "12", fill: "#FA5D00" }),
      /* @__PURE__ */ jsx2("rect", { x: "12", y: "0.700012", width: "4", height: "12", fill: "#FA5D00" })
    ] }),
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_1367_47698", children: /* @__PURE__ */ jsx2("rect", { width: "16", height: "12", fill: "white", transform: "translate(0 0.700012)" }) }) })
  ] });
}
function SearchIcon() {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "16", viewBox: "0 0 17 16", fill: "none", children: [
    /* @__PURE__ */ jsxs2("g", { opacity: "0.6", clipPath: "url(#clip0_736_20885)", children: [
      /* @__PURE__ */ jsx2(
        "path",
        {
          d: "M7.5 12C10.2614 12 12.5 9.76142 12.5 7C12.5 4.23858 10.2614 2 7.5 2C4.73858 2 2.5 4.23858 2.5 7C2.5 9.76142 4.73858 12 7.5 12Z",
          stroke: "#0D1226",
          strokeWidth: "1.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx2("path", { d: "M11.0352 10.5352L14.4995 13.9995", stroke: "#0D1226", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_736_20885", children: /* @__PURE__ */ jsx2("rect", { width: "16", height: "16", fill: "white", transform: "translate(0.5)" }) }) })
  ] });
}
function InputCloseIcon() {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx2("path", { d: "M12.9746 13.1748L0.599609 0.799805", stroke: "#0D1226", strokeWidth: "1.2" }) });
}
function PlayArrow() {
  return /* @__PURE__ */ jsx2("svg", { width: "100%", height: "100%", viewBox: "0 0 21 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2("path", { d: "M21 13.125C14.2917 17.5 0.7 26.25 0 26.25V0L21 13.125Z", fill: "white" }) });
}
function ChevronDown({ width = "20", height = null }) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx2("path", { d: "M9.99857 10.9761L14.1234 6.85132L15.3019 8.02983L9.99857 13.3332L4.69531 8.02983L5.87382 6.85132L9.99857 10.9761Z", fill: "#0D1226" }) });
}
function NavLeftIcon({ className = "", circleClassName = "text-white", arrowClassName = "text-navy" }) {
  const [isHovered, setIsHovered] = useState2(false);
  return /* @__PURE__ */ jsx2(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxs2(
    "svg",
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: clsx2(className, "group"),
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "33",
      viewBox: "0 0 32 33",
      fill: "none",
      children: [
        isHovered ? /* @__PURE__ */ jsx2(
          m.rect,
          {
            transform: "rotate(90 32 0.5)",
            x: "32",
            y: "0.5",
            width: "32",
            height: "32",
            rx: "16",
            fill: "currentColor",
            className: clsx2(circleClassName, "opacity-50 group-hover:opacity-100", "transition-[colors, opacity] duration-300 ease-in-out")
          }
        ) : /* @__PURE__ */ jsx2(
          "rect",
          {
            x: "-0.5",
            y: "0.5",
            width: "31",
            height: "31",
            rx: "15.5",
            transform: "matrix(-1 8.74228e-08 8.74228e-08 1 31 0.5)",
            stroke: "#0D1226",
            strokeOpacity: "0.1"
          }
        ),
        /* @__PURE__ */ jsx2(
          m.path,
          {
            d: "M15.9684 11.5L11.0016 16.4668M11.0016 16.4668L15.9684 21.4337M11.0016 16.4668L21.5195 16.4668",
            stroke: "currentColor",
            className: clsx2(arrowClassName, "transtion-colors duration-300 ease-in-out"),
            strokeWidth: "1.38462",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  ) });
}
function GeniusFaviconIcon() {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 18 18", fill: "none", children: [
    /* @__PURE__ */ jsx2("g", { clipPath: "url(#clip0_4429_25758)", children: /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M37.4037 5.41063C37.2907 5.28652 37.2219 5.12829 37.2081 4.96073C37.1944 4.79318 37.2365 4.62579 37.3278 4.4848C37.4185 4.34056 37.5554 4.23153 37.716 4.17558C37.8766 4.11962 38.0514 4.12008 38.2117 4.17686C38.3656 4.25166 38.4905 4.37549 38.5668 4.52902C38.6432 4.68254 38.6667 4.85711 38.6337 5.02545C38.5962 5.19096 38.5033 5.33858 38.3705 5.44372C38.2376 5.54885 38.0729 5.60514 37.9037 5.60322C37.7497 5.64234 37.5577 5.52598 37.4037 5.41063ZM26.0275 7.18405H23.2987L21.9918 8.49406H24.6816C24.5388 8.93745 24.2544 9.32128 23.8723 9.58619C23.4902 9.8511 23.0317 9.98232 22.5677 9.95954C22.1042 9.94407 21.6583 9.77761 21.2975 9.48533C20.9367 9.19306 20.6806 8.79087 20.5679 8.33959C20.4563 7.88731 20.4979 7.41067 20.686 6.98467C20.874 6.55868 21.198 6.2075 21.6068 5.98639C22.0107 5.76312 22.4755 5.6763 22.9325 5.73881C23.3894 5.80133 23.8141 6.00984 24.1436 6.33345L25.0666 5.40863C24.4786 4.8236 23.7003 4.47043 22.8741 4.4137C22.0478 4.35697 21.2288 4.60048 20.5669 5.09968C19.9006 5.58879 19.4326 6.30266 19.2489 7.11014C19.0652 7.91762 19.1781 8.76447 19.5669 9.49512C19.9554 10.2244 20.5924 10.7893 21.3615 11.0866C22.1306 11.384 22.9807 11.3941 23.7567 11.1151C25.4095 10.5363 26.3705 8.84012 26.0245 7.18205M30.9442 13.39C30.9442 13.9297 30.5212 14.3149 29.9442 14.3149H28.9833V15.5878H28.5223V12.4662H29.9442C30.5212 12.4281 30.9442 12.8133 30.9442 13.392M30.4442 13.392C30.4442 13.0831 30.2142 12.8524 29.8682 12.8524H28.9453V13.8926H29.8682C30.2142 13.8926 30.4442 13.7 30.4442 13.391M37.2858 11.1933H38.5927V6.18701H37.2858V11.1933ZM9.41961 7.7227L6.91977 10.2304H11.3015C11.0761 10.6311 10.7536 10.9682 10.3638 11.2107C9.97406 11.4532 9.52962 11.5932 9.07163 11.6176C8.61265 11.6361 8.15705 11.5316 7.75175 11.3147C7.34645 11.0979 7.00611 10.7765 6.76579 10.3838L4.88291 12.2736C5.49237 13.0335 6.30008 13.6088 7.21615 13.9356C8.13221 14.2623 9.12069 14.3276 10.0716 14.1243C11.0222 13.9095 11.8955 13.436 12.5953 12.7558C13.2951 12.0755 13.7944 11.2149 14.0383 10.2685H14.5763C14.2965 11.4937 13.6293 12.5952 12.6741 13.4087C11.719 14.2223 10.5272 14.7041 9.27662 14.7823C8.02284 14.8576 6.77916 14.5172 5.73727 13.8136C4.69537 13.1099 3.91309 12.082 3.511 10.8884C3.10464 9.69468 3.09882 8.40038 3.4944 7.20304C3.88998 6.0057 4.66524 4.97108 5.70185 4.2571C6.73583 3.54484 7.97136 3.18637 9.22472 3.23498C10.4781 3.2836 11.6823 3.7367 12.6584 4.52693L14.3883 2.75351C11.4675 0.208725 7.12376 0.0161356 4.01096 2.36733C2.50462 3.50087 1.43115 5.11813 0.96951 6.94947C0.507876 8.7808 0.685979 10.7155 1.47413 12.4311C2.2574 14.1507 3.6025 15.5506 5.28684 16.3989C6.97118 17.2473 8.8938 17.4934 10.7365 17.0964C14.5423 16.2869 17.2361 12.8935 17.2361 8.99961C17.2361 8.57531 17.1981 8.15101 17.1591 7.72671L9.41961 7.7227ZM26.7185 13.7762L26.2185 13.699C25.8335 13.6217 25.6805 13.5064 25.6805 13.2747C25.6805 13.0049 25.9495 12.8123 26.3725 12.8123C26.741 12.8164 27.0958 12.9531 27.3724 13.1974L27.6414 12.8514C27.2764 12.5746 26.831 12.4255 26.3735 12.4271C25.6815 12.4271 25.2206 12.7741 25.2206 13.3138C25.2206 13.7762 25.4895 14.046 26.0655 14.1233L26.5655 14.2005C27.0264 14.2777 27.1804 14.4322 27.1804 14.702C27.1804 15.01 26.8724 15.2036 26.4115 15.2036C26.2068 15.2021 26.0048 15.1566 25.8192 15.07C25.6336 14.9835 25.4687 14.858 25.3355 14.702L25.0666 15.0481C25.4233 15.4083 25.9054 15.6158 26.4115 15.6269C27.1414 15.6269 27.6414 15.2417 27.6414 14.6629C27.6804 14.1614 27.3724 13.8916 26.7195 13.7762M8.96164 6.33446C9.466 6.33858 9.95894 6.48567 10.3835 6.75875L12.2284 4.9081C11.3807 4.21808 10.3379 3.81323 9.24799 3.75094C8.15805 3.68864 7.07621 3.97207 6.15582 4.56103C5.23553 5.1504 4.52208 6.01379 4.11541 7.03024C3.70873 8.0467 3.62921 9.1653 3.88797 10.2294H6.65579C6.43504 9.8265 6.32248 9.37298 6.32914 8.91332C6.3358 8.45365 6.46146 8.00361 6.69379 7.60735C6.93663 7.22289 7.27115 6.90519 7.6671 6.68295C8.06305 6.46071 8.50796 6.34094 8.96164 6.33446ZM42.8234 13.7762L42.3234 13.699C41.9384 13.6217 41.7845 13.5064 41.7845 13.2747C41.7845 13.0049 42.0534 12.8123 42.4764 12.8123C42.8449 12.8165 43.1997 12.9532 43.4763 13.1974L43.7453 12.8514C43.3801 12.5744 42.9343 12.4253 42.4764 12.4271C41.7845 12.4271 41.3235 12.7741 41.3235 13.3138C41.3235 13.7762 41.5925 14.046 42.1694 14.1233L42.6694 14.2005C43.1304 14.2777 43.2844 14.4322 43.2844 14.702C43.2844 15.01 42.9764 15.2036 42.5154 15.2036C42.3106 15.202 42.1085 15.1564 41.9228 15.0699C41.737 14.9834 41.5719 14.8579 41.4385 14.702L41.1695 15.0481C41.5267 15.4083 42.009 15.6157 42.5154 15.6269C43.2454 15.6269 43.7453 15.2417 43.7453 14.6629C43.7453 14.1614 43.4763 13.8916 42.8224 13.7762M38.2107 12.8514H39.2866V15.5496H39.7476V12.8514H40.8235V12.4271H38.2107V12.8514ZM42.6694 9.68972C42.5469 9.83718 42.4046 9.96681 42.2464 10.0749C42.051 10.1536 41.842 10.1928 41.6315 10.1902C41.3513 10.195 41.0786 10.0993 40.8625 9.92042C40.7637 9.81974 40.6883 9.69836 40.6418 9.56499C40.5953 9.43163 40.5788 9.28958 40.5935 9.14906V6.25923H39.2866V9.34366C39.283 9.86965 39.4748 10.3781 39.8246 10.77C40.0112 10.9566 40.2331 11.1039 40.4773 11.2031C40.7215 11.3024 40.983 11.3516 41.2465 11.3478C41.5073 11.3502 41.7668 11.3112 42.0154 11.2324C42.2604 11.1571 42.4844 11.0251 42.6694 10.8473V11.2324H43.9753V6.2171H42.6694V9.68972ZM30.2922 9.80507L31.1382 10.5764C30.5744 11.0423 29.8687 11.3007 29.1383 11.3087C28.7839 11.3041 28.4329 11.239 28.1004 11.1161C27.7848 10.9963 27.4972 10.8126 27.2554 10.5764C27.0207 10.3394 26.8258 10.0656 26.6785 9.76595C26.5371 9.45125 26.4714 9.1077 26.4865 8.76288C26.4908 8.41976 26.5558 8.08014 26.6785 7.75981C26.7985 7.45447 26.9819 7.17821 27.2164 6.94934C27.4444 6.71429 27.7194 6.53037 28.0234 6.40969C28.3374 6.26882 28.6796 6.20289 29.0233 6.2171C29.3527 6.22162 29.6784 6.2869 29.9842 6.40969C30.2921 6.52182 30.5598 6.72329 30.7532 6.98846C30.9777 7.23273 31.1481 7.52194 31.2532 7.83705C31.3764 8.18365 31.4413 8.54839 31.4451 8.91635V9.26341H27.7174C27.7997 9.56659 27.9745 9.83633 28.2174 10.0348C28.4679 10.2326 28.7834 10.3289 29.1013 10.3046C29.3116 10.3034 29.52 10.264 29.7163 10.1882C29.9172 10.0739 30.1097 9.94517 30.2922 9.80306M27.7554 8.22223H30.1772C30.099 7.93784 29.9386 7.68305 29.7163 7.48999C29.5243 7.2964 29.2163 7.21916 28.9473 7.21916C28.6783 7.21916 28.3703 7.2964 28.1784 7.48999C27.9718 7.68955 27.8253 7.94325 27.7554 8.22223ZM48.396 8.72376C48.0829 8.45436 47.6924 8.29204 47.2811 8.26034L46.3202 8.10688C46.1282 8.10688 45.9742 8.02964 45.7822 7.9524C45.7322 7.91852 45.6918 7.87229 45.6648 7.81818C45.6379 7.76406 45.6252 7.70389 45.6282 7.64346C45.6276 7.56905 45.6493 7.49617 45.6905 7.43428C45.7317 7.37239 45.7904 7.32435 45.8592 7.2964C46.0299 7.18583 46.2362 7.14458 46.4361 7.18105C46.6964 7.18152 46.9551 7.22038 47.2041 7.2964C47.4764 7.3726 47.7356 7.4896 47.973 7.64346L48.588 6.79587C48.2737 6.60299 47.9382 6.44747 47.5881 6.33245C47.2401 6.22531 46.877 6.17617 46.5131 6.18701C45.8982 6.18701 45.3602 6.34047 45.0132 6.6113C44.8305 6.74124 44.6823 6.91418 44.5817 7.11495C44.4811 7.31572 44.4312 7.53818 44.4363 7.76282C44.4363 8.10989 44.5513 8.49506 44.8202 8.72677C45.1337 8.99607 45.5246 9.15805 45.9362 9.18919L46.8971 9.34366C47.0615 9.35342 47.2205 9.40634 47.3581 9.49713C47.408 9.53108 47.4483 9.57732 47.4753 9.63142C47.5023 9.68552 47.5149 9.74566 47.5121 9.80607C47.5054 9.88845 47.4769 9.96755 47.4296 10.0352C47.3824 10.1029 47.318 10.1568 47.2431 10.1913C47.0281 10.2975 46.7908 10.3504 46.5511 10.3457C46.2864 10.3545 46.0232 10.3017 45.7822 10.1913C45.489 10.0735 45.206 9.93162 44.9362 9.76695L44.2833 10.6547C44.5784 10.8895 44.9189 11.0603 45.2832 11.1562C45.6957 11.277 46.1225 11.3418 46.5521 11.3488C46.8505 11.3481 47.1476 11.309 47.4361 11.2324C47.6843 11.1561 47.9182 11.0388 48.128 10.8854C48.3209 10.7433 48.4786 10.5587 48.589 10.3457C48.6981 10.1453 48.7272 9.95305 48.743 9.69072C48.7555 9.48347 48.7645 9.33038 48.7035 9.16053C48.6425 8.99069 48.5366 8.84073 48.397 8.72677M34.5979 14.0089C34.5975 14.3306 34.5024 14.6451 34.3245 14.9127C34.1466 15.1804 33.8939 15.3894 33.598 15.5135C33.3029 15.6418 32.976 15.6774 32.6603 15.6154C32.3447 15.5534 32.0552 15.3969 31.8301 15.1665C31.6004 14.9407 31.4444 14.6503 31.3826 14.3336C31.3208 14.017 31.3562 13.6891 31.4841 13.393C31.6037 13.0933 31.811 12.8369 32.0788 12.6578C32.3466 12.4787 32.6622 12.3854 32.984 12.39C33.4142 12.3849 33.8288 12.5512 34.137 12.8524C34.2859 13.0056 34.4033 13.1869 34.4824 13.3856C34.5615 13.5844 34.6007 13.7969 34.5979 14.0109M34.137 14.0109C34.137 13.394 33.599 12.8925 32.984 12.8925C32.3691 12.8925 31.8691 13.4322 31.8691 14.049C31.8704 14.1988 31.9014 14.3468 31.9602 14.4844C32.0191 14.622 32.1047 14.7465 32.212 14.8506C32.3193 14.9547 32.4462 15.0363 32.5853 15.0907C32.7243 15.1451 32.8728 15.1712 33.022 15.1675C33.1737 15.1716 33.3245 15.1427 33.464 15.0828C33.6034 15.0229 33.7283 14.9334 33.83 14.8204C34.0316 14.5998 34.1415 14.3102 34.137 14.0109ZM35.2899 11.1963H36.5968V8.07077C36.6358 7.53112 36.4048 7.02958 36.0588 6.6444C35.8723 6.45764 35.6504 6.31022 35.4062 6.21082C35.162 6.11142 34.9004 6.06205 34.6369 6.06563C34.3763 6.06645 34.1172 6.10565 33.868 6.18199C33.6319 6.25876 33.4109 6.3762 33.215 6.52905V6.14287H31.9081V11.1582H33.215V7.68559C33.337 7.53735 33.4794 7.40731 33.638 7.29941C33.8208 7.22417 34.0164 7.18501 34.214 7.18405C34.4941 7.17931 34.7668 7.27498 34.9829 7.45388C35.0842 7.55278 35.1612 7.67394 35.2079 7.80779C35.2546 7.94165 35.2696 8.08455 35.2519 8.22524V11.1943L35.2899 11.1963ZM37.0588 14.2055L37.7497 15.5547H37.2498L36.5958 14.2828H35.7119V15.5547H35.2509V12.4281H36.6728C37.2878 12.4281 37.7107 12.8133 37.7107 13.3529C37.718 13.5486 37.6566 13.7407 37.5373 13.8957C37.418 14.0508 37.2483 14.159 37.0578 14.2015M36.6348 13.8926C36.9808 13.8926 37.2498 13.7 37.2498 13.391C37.2498 13.0821 37.0188 12.8895 36.6348 12.8895H35.7119V13.9307H36.6368L36.6348 13.8926Z",
        fill: "white"
      }
    ) }),
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_4429_25758", children: /* @__PURE__ */ jsx2("rect", { width: "16.5634", height: "16.5634", fill: "currentColor", transform: "translate(0.718262 0.71814)" }) }) })
  ] });
}
function StockArrow() {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 7 9", fill: "none", children: [
    /* @__PURE__ */ jsx2("path", { d: "M2.74146 8.22998L2.74145 1.92578L3.65843 1.92578L3.65843 8.22998L2.74146 8.22998Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx2("path", { d: "M6.4 3.96963L5.73108 4.63855L3.2 2.10701L0.668922 4.63855L-2.92395e-08 3.96963L3.20001 0.770075L6.4 3.96963Z", fill: "currentColor" })
  ] });
}
function ContactSalesFormLines({ height = null, width = null }) {
  return /* @__PURE__ */ jsxs2("svg", { width, height, viewBox: "0 0 772 719", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("path", { d: "M718 719L718 203", stroke: "#95ECFD", strokeWidth: "0.464655" }),
    /* @__PURE__ */ jsx2("path", { d: "M695.098 719L695.098 203", stroke: "#95ECFD", strokeWidth: "0.92931" }),
    /* @__PURE__ */ jsx2("path", { d: "M672.195 719L672.195 203", stroke: "#95ECFD", strokeWidth: "1.39397" }),
    /* @__PURE__ */ jsx2("path", { d: "M649.289 719L649.289 203", stroke: "#95ECFD", strokeWidth: "1.85862" }),
    /* @__PURE__ */ jsx2("path", { d: "M626.387 719L626.387 203", stroke: "#95ECFD", strokeWidth: "2.32328" }),
    /* @__PURE__ */ jsx2("path", { d: "M603.484 719L603.484 203", stroke: "#95ECFD", strokeWidth: "2.78793" }),
    /* @__PURE__ */ jsx2("path", { d: "M580.582 719L580.582 203", stroke: "#95ECFD", strokeWidth: "3.25259" }),
    /* @__PURE__ */ jsx2("path", { d: "M557.676 719L557.676 203", stroke: "#95ECFD", strokeWidth: "3.71724" }),
    /* @__PURE__ */ jsx2("path", { d: "M534.773 719L534.774 203", stroke: "#95ECFD", strokeWidth: "4.1819" }),
    /* @__PURE__ */ jsx2("path", { d: "M511.871 719L511.871 203", stroke: "#95ECFD", strokeWidth: "4.64655" }),
    /* @__PURE__ */ jsx2("path", { d: "M488.969 719L488.969 203", stroke: "#95ECFD", strokeWidth: "5.11121" }),
    /* @__PURE__ */ jsx2("path", { d: "M466.066 719L466.067 203", stroke: "#95ECFD", strokeWidth: "5.57586" }),
    /* @__PURE__ */ jsx2("path", { d: "M443.16 719L443.16 203", stroke: "#95ECFD", strokeWidth: "6.04052" }),
    /* @__PURE__ */ jsx2("path", { d: "M420.258 719L420.258 203", stroke: "#95ECFD", strokeWidth: "6.50517" }),
    /* @__PURE__ */ jsx2("path", { d: "M397.355 719L397.356 203", stroke: "#95ECFD", strokeWidth: "6.96983" }),
    /* @__PURE__ */ jsx2("path", { d: "M374.453 719L374.453 203", stroke: "#95ECFD", strokeWidth: "7.43448" }),
    /* @__PURE__ */ jsx2("path", { d: "M351.547 719L351.547 203", stroke: "#95ECFD", strokeWidth: "7.89914" }),
    /* @__PURE__ */ jsx2("path", { d: "M328.645 719L328.645 203", stroke: "#95ECFD", strokeWidth: "8.36379" }),
    /* @__PURE__ */ jsx2("path", { d: "M305.742 719L305.742 203", stroke: "#95ECFD", strokeWidth: "8.82845" }),
    /* @__PURE__ */ jsx2("path", { d: "M282.84 719L282.84 203", stroke: "#95ECFD", strokeWidth: "9.2931" }),
    /* @__PURE__ */ jsx2("path", { d: "M259.934 719L259.934 203", stroke: "#95ECFD", strokeWidth: "9.75776" }),
    /* @__PURE__ */ jsx2("path", { d: "M237.031 719L237.031 203", stroke: "#95ECFD", strokeWidth: "10.2224" }),
    /* @__PURE__ */ jsx2("path", { d: "M214.129 719L214.129 203", stroke: "#95ECFD", strokeWidth: "10.6871" }),
    /* @__PURE__ */ jsx2("path", { d: "M191.227 719L191.227 203", stroke: "#95ECFD", strokeWidth: "11.1517" }),
    /* @__PURE__ */ jsx2("path", { d: "M168.324 719L168.324 203", stroke: "#95ECFD", strokeWidth: "11.6164" }),
    /* @__PURE__ */ jsx2("path", { d: "M145.418 719L145.418 203", stroke: "#95ECFD", strokeWidth: "12.081" }),
    /* @__PURE__ */ jsx2("path", { d: "M122.516 719L122.516 203", stroke: "#95ECFD", strokeWidth: "12.5457" }),
    /* @__PURE__ */ jsx2("path", { d: "M99.6133 719L99.6134 203", stroke: "#95ECFD", strokeWidth: "13.0103" }),
    /* @__PURE__ */ jsx2("path", { d: "M76.7109 719L76.7111 203", stroke: "#95ECFD", strokeWidth: "13.475" }),
    /* @__PURE__ */ jsx2("path", { d: "M53.8047 719L53.8048 203", stroke: "#95ECFD", strokeWidth: "13.9397" }),
    /* @__PURE__ */ jsx2("path", { d: "M30.9023 719L30.9025 203", stroke: "#95ECFD", strokeWidth: "14.4043" }),
    /* @__PURE__ */ jsx2("path", { d: "M8 719L8.00011 203", stroke: "#95ECFD", strokeWidth: "14.869" }),
    /* @__PURE__ */ jsx2("path", { d: "M54 447L53.9999 0.000369608", stroke: "#95ECFD", strokeWidth: "0.464655" }),
    /* @__PURE__ */ jsx2("path", { d: "M76.9023 447L76.9022 0.000369608", stroke: "#95ECFD", strokeWidth: "0.92931" }),
    /* @__PURE__ */ jsx2("path", { d: "M99.8047 447L99.8046 0.000369608", stroke: "#95ECFD", strokeWidth: "1.39397" }),
    /* @__PURE__ */ jsx2("path", { d: "M122.711 447L122.711 0.000369608", stroke: "#95ECFD", strokeWidth: "1.85862" }),
    /* @__PURE__ */ jsx2("path", { d: "M145.613 447L145.613 0.000369608", stroke: "#95ECFD", strokeWidth: "2.32328" }),
    /* @__PURE__ */ jsx2("path", { d: "M168.516 447L168.516 0.000369608", stroke: "#95ECFD", strokeWidth: "2.78793" }),
    /* @__PURE__ */ jsx2("path", { d: "M191.418 447L191.418 0.000247538", stroke: "#95ECFD", strokeWidth: "3.25259" }),
    /* @__PURE__ */ jsx2("path", { d: "M214.324 447L214.324 0.000247538", stroke: "#95ECFD", strokeWidth: "3.71724" }),
    /* @__PURE__ */ jsx2("path", { d: "M237.227 447L237.226 0.000247538", stroke: "#95ECFD", strokeWidth: "4.1819" }),
    /* @__PURE__ */ jsx2("path", { d: "M260.129 447L260.129 0.000247538", stroke: "#95ECFD", strokeWidth: "4.64655" }),
    /* @__PURE__ */ jsx2("path", { d: "M283.031 447L283.031 0.000247538", stroke: "#95ECFD", strokeWidth: "5.11121" }),
    /* @__PURE__ */ jsx2("path", { d: "M305.934 447L305.933 0.000247538", stroke: "#95ECFD", strokeWidth: "5.57586" }),
    /* @__PURE__ */ jsx2("path", { d: "M328.84 447L328.84 0.000247538", stroke: "#95ECFD", strokeWidth: "6.04052" }),
    /* @__PURE__ */ jsx2("path", { d: "M351.742 447L351.742 0.000247538", stroke: "#95ECFD", strokeWidth: "6.50517" }),
    /* @__PURE__ */ jsx2("path", { d: "M374.645 447L374.644 0.000247538", stroke: "#95ECFD", strokeWidth: "6.96983" }),
    /* @__PURE__ */ jsx2("path", { d: "M397.547 447L397.547 0.000247538", stroke: "#95ECFD", strokeWidth: "7.43448" }),
    /* @__PURE__ */ jsx2("path", { d: "M420.453 447L420.453 0.000125468", stroke: "#95ECFD", strokeWidth: "7.89914" }),
    /* @__PURE__ */ jsx2("path", { d: "M443.355 447L443.355 0.000125468", stroke: "#95ECFD", strokeWidth: "8.36379" }),
    /* @__PURE__ */ jsx2("path", { d: "M466.258 447L466.258 0.000125468", stroke: "#95ECFD", strokeWidth: "8.82845" }),
    /* @__PURE__ */ jsx2("path", { d: "M489.16 447L489.16 0.000125468", stroke: "#95ECFD", strokeWidth: "9.2931" }),
    /* @__PURE__ */ jsx2("path", { d: "M512.066 447L512.066 0.000125468", stroke: "#95ECFD", strokeWidth: "9.75776" }),
    /* @__PURE__ */ jsx2("path", { d: "M534.969 447L534.969 0.000125468", stroke: "#95ECFD", strokeWidth: "10.2224" }),
    /* @__PURE__ */ jsx2("path", { d: "M557.871 447L557.871 0.000125468", stroke: "#95ECFD", strokeWidth: "10.6871" }),
    /* @__PURE__ */ jsx2("path", { d: "M580.773 447L580.773 0.000125468", stroke: "#95ECFD", strokeWidth: "11.1517" }),
    /* @__PURE__ */ jsx2("path", { d: "M603.676 447L603.676 0.000125468", stroke: "#95ECFD", strokeWidth: "11.6164" }),
    /* @__PURE__ */ jsx2("path", { d: "M626.582 447L626.582 0.000125468", stroke: "#95ECFD", strokeWidth: "12.081" }),
    /* @__PURE__ */ jsx2("path", { d: "M649.484 447L649.484 3.39746e-06", stroke: "#95ECFD", strokeWidth: "12.5457" }),
    /* @__PURE__ */ jsx2("path", { d: "M672.387 447L672.387 3.39746e-06", stroke: "#95ECFD", strokeWidth: "13.0103" }),
    /* @__PURE__ */ jsx2("path", { d: "M695.289 447L695.289 3.39746e-06", stroke: "#95ECFD", strokeWidth: "13.475" }),
    /* @__PURE__ */ jsx2("path", { d: "M718.195 447L718.195 3.39746e-06", stroke: "#95ECFD", strokeWidth: "13.9397" }),
    /* @__PURE__ */ jsx2("path", { d: "M741.098 447L741.098 3.39746e-06", stroke: "#95ECFD", strokeWidth: "14.4043" }),
    /* @__PURE__ */ jsx2("path", { d: "M764 447L764 3.39746e-06", stroke: "#95ECFD", strokeWidth: "14.869" })
  ] });
}
var init_Icons = __esm({
  "src/components/elements/Icons.tsx"() {
  }
});

// src/components/elements/buttons/TextLink.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function TextLink({ className = "", link, children, text_link }) {
  const circleClassMap = {
    navy: "text-navy group-hover:text-blue",
    white: "text-white group-hover:text-lightBlue"
  };
  const arrowClassMap = {
    navy: "text-white",
    white: "text-navy"
  };
  return /* @__PURE__ */ jsx3("div", { className: `text-16--clamp group inline-flex cursor-pointer select-none items-center leading-tight ${className}`, children: ((link == null ? void 0 : link.title) || children) && /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-[14px] font-bold text-inherit", children: [
    /* @__PURE__ */ jsx3(RightArrowCircle, { circleClassName: circleClassMap == null ? void 0 : circleClassMap[text_link == null ? void 0 : text_link.background_color], arrowClassName: arrowClassMap == null ? void 0 : arrowClassMap[text_link == null ? void 0 : text_link.background_color] }),
    (link == null ? void 0 : link.title) && /* @__PURE__ */ jsx3("span", { style: { maxWidth: "calc(100% - 40px)" }, dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.title } }),
    !(link == null ? void 0 : link.title) && children && children
  ] }) });
}
var TextLink_default;
var init_TextLink = __esm({
  "src/components/elements/buttons/TextLink.tsx"() {
    init_Icons();
    TextLink_default = TextLink;
  }
});

// src/utils/trackEvent.ts
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
var trackEvent, trackEvent_default, trackLinkClick, trackLinkClickProduct, trackFooterMenuItemClick;
var init_trackEvent = __esm({
  "src/utils/trackEvent.ts"() {
    trackEvent = (eventName, eventParams) => {
      try {
        window.dataLayer = window.dataLayer || [];
        const obj = __spreadValues({
          event: eventName
        }, eventParams);
        if (!obj.page_location) {
          obj.page_location = window.location.href;
        }
        window.dataLayer.push(__spreadValues({
          event: eventName
        }, eventParams));
      } catch (error) {
        console.log(error);
      }
    };
    trackEvent_default = trackEvent;
    trackLinkClick = (link) => {
      try {
        trackEvent("buttons_trackevent", {
          button_name: link == null ? void 0 : link.title,
          button_id: link == null ? void 0 : link.id,
          exit_click: link == null ? void 0 : link.url
        });
      } catch (error) {
        console.log(error);
      }
    };
    trackLinkClickProduct = (link) => {
      try {
        trackEvent("products_trackevent", {
          button_name: "brands",
          button_url: link == null ? void 0 : link.url,
          exit_click: "/"
        });
      } catch (error) {
        console.log(error);
      }
    };
    trackFooterMenuItemClick = (title) => {
      if (!title) return;
      trackEvent("footer_trackevent", {
        item_name: title,
        menu_type: "menu_footer"
      });
    };
  }
});

// src/utils/cmsUrlToNextHref.ts
function cmsUrlToNextHref(raw) {
  if (raw == null) return "#";
  if (raw === "" || raw === "#") return raw;
  if (!raw.startsWith("http")) return raw;
  try {
    const u = new URL(raw);
    if (LOCAL_HOSTNAMES.has(u.hostname)) {
      const path = u.pathname + u.search + u.hash;
      if (!path || path === "/") return "/";
      return path.startsWith("/") ? path : `/${path}`;
    }
  } catch (e) {
  }
  return raw;
}
var LOCAL_HOSTNAMES;
var init_cmsUrlToNextHref = __esm({
  "src/utils/cmsUrlToNextHref.ts"() {
    LOCAL_HOSTNAMES = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]"]);
  }
});

// src/components/elements/links/Link.tsx
import NextLink from "next/link";
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Link(props) {
  const _a = props, { link, type, href, to, target, children, className } = _a, other = __objRest(_a, ["link", "type", "href", "to", "target", "children", "className"]);
  const url = cmsUrlToNextHref((link == null ? void 0 : link.url) || href || to || "#");
  let isExternal = false;
  let urlPath = url.trim().replace(/^[a-zA-Z]{3,5}:\/{2}[a-zA-Z0-9_.:-]+\//, "");
  if (urlPath.slice(0, 1) !== "/" && urlPath.slice(0, 1) !== "#") {
    urlPath = `/${urlPath}`;
  }
  if (!url.includes(process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL) && (url.slice(0, 4) === "http" || url.slice(0, 7) === "mailto:" || url.slice(0, 4) === "tel:")) {
    isExternal = true;
    urlPath = url;
  }
  const defaultLinkClasses = `inline-flex items-center ${className || ""} ${url.length === 0 || url === "#" ? "pointer-events-none cursor-default" : ""}`;
  return isExternal ? /* @__PURE__ */ jsx4(
    "a",
    __spreadProps(__spreadValues({
      href: urlPath,
      target: (link == null ? void 0 : link.target) || target || "",
      className: defaultLinkClasses
    }, other), {
      onClick: (e) => {
        trackLinkClick(__spreadProps(__spreadValues({}, link), { url: urlPath }));
        if (other.onClick) other.onClick(e);
      },
      children: /* @__PURE__ */ jsx4(LinkTypeRenderer, __spreadValues({}, props))
    })
  ) : /* @__PURE__ */ jsx4(
    NextLink,
    __spreadProps(__spreadValues({
      href: urlPath,
      target: (link == null ? void 0 : link.target) || target || "",
      type: type === "button" ? "button" : "button",
      className: defaultLinkClasses
    }, other), {
      onClick: (e) => {
        trackLinkClick(__spreadProps(__spreadValues({}, link), { url: urlPath }));
        if (other.onClick) other.onClick(e);
      },
      children: /* @__PURE__ */ jsx4(LinkTypeRenderer, __spreadValues({}, props))
    })
  );
}
function LinkTypeRenderer(props) {
  var _a;
  const { type, link, children } = props;
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    !type && !children && ((_a = link == null ? void 0 : link.title) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.title } }),
    type === "button" && /* @__PURE__ */ jsx4(Button_default, __spreadValues({}, props)),
    type === "text" && /* @__PURE__ */ jsx4(TextLink_default, __spreadValues({}, props)),
    children
  ] });
}
var init_Link = __esm({
  "src/components/elements/links/Link.tsx"() {
    init_Button();
    init_TextLink();
    init_trackEvent();
    init_cmsUrlToNextHref();
  }
});

// src/components/elements/links/LinkGroup.tsx
import clsx3 from "clsx";
import { jsx as jsx5 } from "react/jsx-runtime";
function LinkGroup({ links, className = "", noFullWidthOnMobile, centered = false }) {
  return /* @__PURE__ */ jsx5("div", { className: clsx3("link-group", noFullWidthOnMobile ? "relative mx-auto block w-fit md:w-auto" : "w-full md:w-auto", className), children: /* @__PURE__ */ jsx5("div", { className: (clsx3("-mb-4 flex flex-col md:flex-row md:space-x-5"), centered ? "items-center justify-center" : ""), children: (links == null ? void 0 : links.length) > 0 && (links == null ? void 0 : links.map(({ link }, i) => /* @__PURE__ */ jsx5("div", { className: clsx3((links == null ? void 0 : links.length) > 1 && "pb-4", centered && "mx-auto w-fit"), children: /* @__PURE__ */ jsx5(Link, __spreadProps(__spreadValues({}, link), { className: links.length > 1 ? "w-full md:w-auto" : "" })) }, `linkgroupitem${i}`))) }) });
}
var LinkGroup_default;
var init_LinkGroup = __esm({
  "src/components/elements/links/LinkGroup.tsx"() {
    init_Link();
    LinkGroup_default = LinkGroup;
  }
});

// src/components/elements/Wp.tsx
import Image from "next/image";
import { jsx as jsx6 } from "react/jsx-runtime";
function WpImage(_a) {
  var _b = _a, { image, fill = false, priority = false, className = "", setParentLoadingComplete, onLoad } = _b, props = __objRest(_b, ["image", "fill", "priority", "className", "setParentLoadingComplete", "onLoad"]);
  if (!image || !image.url) return null;
  const handleLoad = () => {
    if (setParentLoadingComplete) {
      setParentLoadingComplete(true);
    }
    if (onLoad) {
      onLoad();
    }
  };
  const imageProps = {
    src: image.url,
    alt: image.alt || image.title,
    priority
  };
  if (fill) {
    return /* @__PURE__ */ jsx6(Image, __spreadProps(__spreadValues({}, imageProps), { fill: true, className: `${className} animate-opacity transition-opacity duration-200`, priority, onLoad: handleLoad }));
  }
  return /* @__PURE__ */ jsx6(
    Image,
    __spreadProps(__spreadValues({}, imageProps), {
      width: Number(image.width),
      height: Number(image.height),
      className: `${className} animate-opacity transition-opacity duration-200`,
      priority,
      onLoad: handleLoad
    })
  );
}
var init_Wp = __esm({
  "src/components/elements/Wp.tsx"() {
  }
});

// src/components/elements/media/RivePlayer.tsx
import { useEffect as useEffect2, useRef } from "react";
import { useInView } from "framer-motion";
import { jsx as jsx7 } from "react/jsx-runtime";
function RivePlayer({ riveFile, priority, isHovered, runText }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return /* @__PURE__ */ jsx7("div", { ref, className: "rive-wrapper pointer-events-none relative !h-full !w-full", children: priority ? /* @__PURE__ */ jsx7(LazyRive, { riveFile, isInView, isHovered, runText }) : isInView && /* @__PURE__ */ jsx7(LazyRive, { riveFile, isInView, isHovered, runText }) });
}
function LazyRive({ riveFile, isInView, isHovered, runText }) {
  const { useRive, Fit, Layout, useStateMachineInput } = __require("@rive-app/react-canvas");
  const { rive, RiveComponent } = useRive({
    src: riveFile == null ? void 0 : riveFile.url,
    autoplay: true,
    artBoard: "New Artboard",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Cover
    })
  });
  const onHoverInput = useStateMachineInput(rive, "State Machine 1", "Boolean 1");
  useEffect2(() => {
    if (onHoverInput) {
      if (isHovered !== void 0) {
        onHoverInput.value = isHovered;
      }
    }
  }, [onHoverInput, isHovered]);
  const currentDate = runText ? /* @__PURE__ */ new Date() : null;
  const dayOfMonth = runText ? currentDate.getDate() : null;
  const formattedDay = runText ? (dayOfMonth < 10 ? "0" : "") + dayOfMonth : null;
  useEffect2(() => {
    if (runText && rive) {
      rive.setTextRunValue("DATE", formattedDay);
    }
  }, [runText, rive]);
  useEffect2(() => {
    if (rive) {
      if (isInView) {
        rive.play();
      } else {
        rive.pause();
      }
    }
  }, [rive, isInView]);
  return /* @__PURE__ */ jsx7(RiveComponent, {});
}
var init_RivePlayer = __esm({
  "src/components/elements/media/RivePlayer.tsx"() {
  }
});

// src/components/elements/media/AssetVideo.tsx
import { useRef as useRef2, useEffect as useEffect3, useState as useState3 } from "react";
import Image2 from "next/image";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function AssetVideo({ video }) {
  var _a, _b, _c;
  const videoRef = useRef2(null);
  const [canPlay, setCanPlay] = useState3(false);
  const handlePlay = () => {
    var _a2;
    setCanPlay(true);
    trackEvent_default("video_trackevent", {
      id: (_a2 = video == null ? void 0 : video.file) == null ? void 0 : _a2.url,
      play: true,
      progress: getProgress(),
      pause: false
    });
  };
  const handlePause = () => {
    var _a2;
    trackEvent_default("video_trackevent", {
      id: (_a2 = video == null ? void 0 : video.file) == null ? void 0 : _a2.url,
      play: false,
      progress: getProgress(),
      pause: true
    });
  };
  const getProgress = () => videoRef.current ? videoRef.current.currentTime / videoRef.current.duration * 100 : 0;
  const handleCanPlay = () => {
    setCanPlay(true);
  };
  useEffect3(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("canplay", handleCanPlay);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, [videoRef == null ? void 0 : videoRef.current]);
  return /* @__PURE__ */ jsxs5("div", { className: "relative h-full w-full", children: [
    !canPlay && ((_a = video == null ? void 0 : video.poster) == null ? void 0 : _a.url) && /* @__PURE__ */ jsx8(Image2, { src: (_b = video == null ? void 0 : video.poster) == null ? void 0 : _b.url, alt: "video thumbnail", width: 1280, height: 720, objectFit: "cover", priority: true }),
    /* @__PURE__ */ jsx8(
      "video",
      {
        ref: videoRef,
        loop: true,
        muted: true,
        autoPlay: true,
        playsInline: true,
        controls: video == null ? void 0 : video.show_controls,
        className: `h-full w-full object-cover object-center ${canPlay ? "opacity-100" : "opacity-0"}`,
        children: /* @__PURE__ */ jsx8("source", { src: `${(_c = video == null ? void 0 : video.file) == null ? void 0 : _c.url}` })
      }
    )
  ] });
}
var AssetVideo_default;
var init_AssetVideo = __esm({
  "src/components/elements/media/AssetVideo.tsx"() {
    init_trackEvent();
    AssetVideo_default = AssetVideo;
  }
});

// src/components/elements/media/Asset.tsx
import clsx4 from "clsx";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Asset({ isHovered, type, animation, video, priority = false, ratio, image, fill = false, className = "" }) {
  return /* @__PURE__ */ jsxs6("div", { className: `h-full w-full ${fill ? "absolute inset-0" : ""}`, style: type === "animation" ? { aspectRatio: animation == null ? void 0 : animation.aspect_ratio } : {}, children: [
    type === "image" && /* @__PURE__ */ jsx9(WpImage, { image, fill, priority, className: clsx4("h-full w-full", fill ? "object-cover" : "object-contain", className) }),
    type === "animation" && (animation == null ? void 0 : animation.animation) && /* @__PURE__ */ jsx9(RivePlayer, { riveFile: animation == null ? void 0 : animation.animation, priority, isHovered }),
    type === "video" && video && /* @__PURE__ */ jsx9(AssetVideo_default, { video })
  ] });
}
var init_Asset = __esm({
  "src/components/elements/media/Asset.tsx"() {
    init_Wp();
    init_RivePlayer();
    init_AssetVideo();
  }
});

// src/components/elements/media/Icon.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function Icon({ priority = false, icon }) {
  return /* @__PURE__ */ jsx10("div", { className: "h-full w-full", children: (icon == null ? void 0 : icon.type) === "image" && /* @__PURE__ */ jsx10(WpImage, { image: icon == null ? void 0 : icon.image, fill: true, priority, className: "h-full w-full object-contain" }) });
}
var Icon_default;
var init_Icon = __esm({
  "src/components/elements/media/Icon.tsx"() {
    init_Wp();
    Icon_default = Icon;
  }
});

// src/components/ColorHelpers.tsx
function getHexValue(color) {
  const hexMap = {
    navy: "#0D1226",
    blue: "#0000DC",
    lightBlue: "#95ECFD",
    brightGreen: "#E1FF67",
    lightGreen: "#18C971",
    green: "#047C40",
    lightPurple: "#C2D1FF",
    purple: "#4337A8",
    lightOrange: "#FFEBAF",
    orange: "#FA5D00",
    lightRed: "#F76B6A",
    red: "#C20000",
    black: "#000",
    lightGrey: "#F6F7F9",
    white: "#ffffff"
  };
  return (hexMap == null ? void 0 : hexMap[color]) || "#ffffff";
}
function getClassValue(color) {
  const classMap = {
    navy: "bg-navy",
    blue: "bg-blue",
    lightBlue: "bg-lightBlue",
    brightGreen: "bg-brightGreen",
    lightGreen: "bg-lightGreen",
    green: "bg-green",
    lightPurple: "bg-lightPurple",
    purple: "bg-purple",
    lightOrange: "bg-lightOrange",
    orange: "bg-orange",
    lightRed: "bg-lightRed",
    red: "bg-red",
    black: "bg-black",
    lightGrey: "bg-lightGrey",
    white: "bg-white"
  };
  return (classMap == null ? void 0 : classMap[color]) || "bg-white";
}
function getBackgroundAndTextColor(color) {
  const map = {
    white: "bg-white text-navy",
    navy: "bg-navy text-white",
    "bright-green": "bg-brightGreen text-navy",
    // refactor and delete
    green: "bg-green text-white",
    lightGreen: "bg-lightGreen text-navy",
    brightGreen: "bg-brightGreen text-navy",
    lightBlue: "bg-lightBlue text-navy",
    lightOrange: "bg-lightOrange text-navy",
    lightPurple: "bg-lightPurple text-navy",
    purple: "bg-purple text-white",
    blue: "bg-blue text-white",
    orange: "bg-orange text-navy",
    lightRed: "bg-lightRed text-white",
    red: "bg-lightRed text-white"
  };
  return (map == null ? void 0 : map[color]) || "bg-navy text-white";
}
function getBackgroundColor(color) {
  const map = {
    purple: "bg-purple",
    lightGreen: "bg-lightGreen",
    orange: "bg-orange",
    lightRed: "bg-lightRed",
    lightGrey: "bg-lightGrey",
    lightBlue: "bg-lightBlue",
    lightOrange: "bg-lightOrange",
    lightPurple: "bg-lightPurple",
    navy: "bg-navy",
    blue: "bg-blue",
    brightGreen: "bg-brightGreen",
    white: "bg-white",
    white5: "bg-white/5"
  };
  return (map == null ? void 0 : map[color]) || "bg-purple";
}
function getTextColor(color) {
  const map = {
    blue: "text-blue",
    "bright-green": "text-brightGreen",
    purple: "text-purple",
    lightPurple: "text-lightPurple",
    lightGrey: "text-lightGrey",
    lightBlue: "text-lightBlue",
    navy: "text-navy",
    black: "text-black",
    green: "text-green",
    lightGreen: "text-lightGreen",
    lightOrange: "text-lightOrange",
    orange: "text-orange",
    brightGreen: "text-brightGreen",
    red: "text-red",
    lightRed: "text-lightRed",
    white: "text-white",
    lavenderGrey: "text-lavenderGrey"
  };
  return (map == null ? void 0 : map[color]) || "text-blue";
}
function sectionColor(background) {
  switch (background) {
    case "black":
      return "bg-black text-white";
    case "navy":
      return "bg-navy text-white";
    case "white":
      return "bg-white text-black";
    case "blue":
      return "bg-blue text-white";
    case "lightBlue":
      return "bg-lightBlue text-navy";
    case "lightPurple":
      return "bg-lightPurple text-navy";
    case "purple":
      return "bg-purple text-white";
    case "lightGrey":
      return "bg-lightGrey text-navy";
    default:
      return `bg-${background}`;
  }
}
var init_ColorHelpers = __esm({
  "src/components/ColorHelpers.tsx"() {
  }
});

// src/utils/text.tsx
var getSplitBreakText, getHighlightedText;
var init_text = __esm({
  "src/utils/text.tsx"() {
    init_ColorHelpers();
    getSplitBreakText = ({ text, breakAtAll, disable = false }) => {
      if (disable) return text.replace(/<>/g, "");
      return text == null ? void 0 : text.replace(/<>/g, `<span class="br ${breakAtAll ? "br--break-at-all" : ""}"></span>`);
    };
    getHighlightedText = ({ content, disable = false, color }) => {
      const highlightColor = getTextColor(color);
      return content == null ? void 0 : content.replace(/\|([^*]+?)\|/g, disable ? `` : `<span class="${highlightColor}">$1</span>`);
    };
  }
});

// src/components/elements/text/HighlightedText.tsx
import React4 from "react";
function HighlightedText({ tag, className, content, disable, color }) {
  const TagType = tag || "h2";
  const splitContent = getSplitBreakText({ text: content });
  const highlightedText = getHighlightedText({ content: splitContent, disable, color });
  const elementProps = {
    className: `${className} relative z-10`,
    dangerouslySetInnerHTML: { __html: highlightedText }
  };
  return React4.createElement(TagType, elementProps);
}
var HighlightedText_default;
var init_HighlightedText = __esm({
  "src/components/elements/text/HighlightedText.tsx"() {
    init_text();
    HighlightedText_default = HighlightedText;
  }
});

// src/components/elements/PillTag.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function PillTag({ text }) {
  return /* @__PURE__ */ jsx12(
    "span",
    {
      className: "text-9 ml-2 rounded-full bg-blue px-[10px] pb-[.3rem] pt-[.4rem] font-semibold !leading-none text-white",
      dangerouslySetInnerHTML: {
        __html: text
      }
    }
  );
}
var PillTag_default;
var init_PillTag = __esm({
  "src/components/elements/PillTag.tsx"() {
    PillTag_default = PillTag;
  }
});

// src/components/elements/PostTag.tsx
import clsx6 from "clsx";
import { jsx as jsx13 } from "react/jsx-runtime";
function PostTag({ text, bgColor = "lightGrey", textColor = "navy" }) {
  return /* @__PURE__ */ jsx13(
    "span",
    {
      className: clsx6("text-15 rounded px-[10px] py-1 font-body font-medium", getTextColor(textColor), getBackgroundColor(bgColor)),
      dangerouslySetInnerHTML: { __html: text }
    }
  );
}
var PostTag_default;
var init_PostTag = __esm({
  "src/components/elements/PostTag.tsx"() {
    init_ColorHelpers();
    PostTag_default = PostTag;
  }
});

// src/components/elements/PodcastSpring.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
function PodcastSpring({ cardHovered, colour = "", heightFull = false }) {
  const bars = Array.from({ length: 48 }, (_, i) => i + 1);
  const barTranslate = [
    [0, 8],
    [5, 45],
    [10, 1],
    [30, 18]
  ];
  const getRandomTranslate = (translates) => {
    const values = translates == null ? void 0 : translates.map((obj) => obj);
    return values[Math.floor(Math.random() * values.length)];
  };
  const colourClass = [""];
  if (colour === "purple") {
    colourClass.push("bg-purple");
  } else {
    colourClass.push("bg-lightPurple");
  }
  return /* @__PURE__ */ jsx14("div", { className: `flex w-full items-end justify-between overflow-hidden ${heightFull ? "h-auto grow" : "h-[2.625rem]"}`, children: bars.map((index) => {
    const translateY = getRandomTranslate(barTranslate);
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        className: "flex h-full flex-col items-center transition-transform duration-300",
        style: { transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` },
        children: [
          /* @__PURE__ */ jsx14("div", { className: `shrink-0 ${heightFull ? "h-1/4 w-[0.09375rem]" : "h-[.5rem] w-[0.0625rem]"} ${colourClass.join(" ")}` }),
          /* @__PURE__ */ jsx14("div", { className: `${heightFull ? "h-3/4 w-[.28rem] sm:w-[.3125rem]" : "h-full w-[0.2rem]"} ${colourClass.join(" ")}` })
        ]
      },
      `podcast-spring-${index}`
    );
  }) });
}
var PodcastSpring_default;
var init_PodcastSpring = __esm({
  "src/components/elements/PodcastSpring.tsx"() {
    PodcastSpring_default = PodcastSpring;
  }
});

// src/components/elements/PostAsideSubscribe.tsx
import { useRef as useRef3 } from "react";
import { useInView as useInView2 } from "framer-motion";
import clsx7 from "clsx";
import { Fragment as Fragment3, jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
function PostAsideSubscribe({ heading = null, embed = null }) {
  const assetRef = useRef3(null);
  const isAssetInView = useInView2(assetRef, { amount: 0.5, once: true });
  return /* @__PURE__ */ jsxs9(Fragment3, { children: [
    /* @__PURE__ */ jsxs9("div", { className: "relative rounded-t-lg bg-blue p-8 px-6", children: [
      /* @__PURE__ */ jsx15(
        "h6",
        {
          className: "mb-12 font-normal text-white",
          dangerouslySetInnerHTML: {
            __html: getSplitBreakText({
              text: "Be the first to <> know about new <> content"
            })
          }
        }
      ),
      embed ? /* @__PURE__ */ jsx15("div", { dangerouslySetInnerHTML: { __html: embed } }) : /* @__PURE__ */ jsx15("iframe", { title: "blog-subscribe", src: "https://digital.geniussports.com/l/822433/2024-07-12/ty4lzy", width: "100%", height: "100%", style: { border: "0" } })
    ] }),
    /* @__PURE__ */ jsx15("div", { className: "pt-[50px]", children: /* @__PURE__ */ jsx15("div", { ref: assetRef, className: "relative mt-[-52px] h-[52px] bg-blue", children: /* @__PURE__ */ jsx15(
      "div",
      {
        className: clsx7(
          "linear absolute bottom-0 left-0 flex w-full origin-bottom flex-col bg-white transition-transform duration-300",
          isAssetInView ? "scale-y-[100%]" : "scale-y-0"
        ),
        children: /* @__PURE__ */ jsx15(BottomLines, { width: "100%" })
      }
    ) }) })
  ] });
}
function BottomLines({ width = "100%", height = null }) {
  return /* @__PURE__ */ jsxs9("svg", { width, height, viewBox: "0 0 334 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx15("path", { d: "M0 51L334 51", stroke: "#0000DC" }),
    /* @__PURE__ */ jsx15("path", { d: "M0 39L334 39", stroke: "#0000DC", strokeWidth: "2" }),
    /* @__PURE__ */ jsx15("path", { d: "M0 27L334 27", stroke: "#0000DC", strokeWidth: "3" }),
    /* @__PURE__ */ jsx15("path", { d: "M0 15L334 15", stroke: "#0000DC", strokeWidth: "4" }),
    /* @__PURE__ */ jsx15("path", { d: "M0 3L334 2.99999", stroke: "#0000DC", strokeWidth: "5" })
  ] });
}
var PostAsideSubscribe_default;
var init_PostAsideSubscribe = __esm({
  "src/components/elements/PostAsideSubscribe.tsx"() {
    init_text();
    PostAsideSubscribe_default = PostAsideSubscribe;
  }
});

// src/components/elements/TextStrokeStack.tsx
import clsx9 from "clsx";
import { LazyMotion as LazyMotion2, m as m2, domAnimation as domAnimation2 } from "framer-motion";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function TextStrokeStack({
  centerText,
  topText,
  bottomText,
  options,
  int = 0,
  hideTopRow = false,
  hideBottomRow = false,
  textClassName
}) {
  const bgColor = getBackgroundColor((options == null ? void 0 : options.bgColor) || "blue");
  const otherItemsTextColor = getTextColor((options == null ? void 0 : options.bgColor) || "blue");
  const centerTextColor = getTextColor((options == null ? void 0 : options.textColor) || "brightGreen");
  const textSizeClassMap = {
    "70": "text-70",
    "64": "text-64 is-stat",
    "88": "text-88"
  };
  const textStrokeMap = {
    brightGreen: "text-stroke-stack__item--stroke-brightGreen",
    lightPurple: "text-stroke-stack__item--stroke-lightPurple",
    white: "text-stroke-stack__item--stroke-white",
    navy: "text-stroke-stack__item--stroke-navy",
    lightBlue: "text-stroke-stack__item--stroke-lightBlue"
  };
  const itemClasses = `${textSizeClassMap == null ? void 0 : textSizeClassMap[(options == null ? void 0 : options.textSize) || "70"]} leading-[1]`;
  const ease = [0.68, -0.2, 0.15, 0.98];
  return /* @__PURE__ */ jsx17(LazyMotion2, { features: domAnimation2, children: /* @__PURE__ */ jsxs10("div", { className: "text-stroke-stack relative flex flex-col overflow-hidden py-[0px]", children: [
    !hideTopRow && /* @__PURE__ */ jsx17(
      m2.p,
      {
        initial: { y: 15, scale: 0.9 },
        whileInView: { y: 0, scale: 1 },
        viewport: { once: true },
        transition: {
          duration: 0.8,
          ease,
          delay: 0.2 * (int + 1)
        },
        className: clsx9(textClassName, textStrokeMap == null ? void 0 : textStrokeMap[(options == null ? void 0 : options.strokeColor) || "brightGreen"], "-mb-12", otherItemsTextColor, itemClasses),
        children: topText || centerText
      }
    ),
    /* @__PURE__ */ jsx17("p", { className: clsx9(textClassName, itemClasses, bgColor, centerTextColor, "text-stroke-stack__item z-10 px-[.2rem]"), children: centerText }),
    !hideBottomRow && /* @__PURE__ */ jsx17(
      m2.p,
      {
        initial: { y: -15, scale: 0.9 },
        whileInView: { y: 0, scale: 1 },
        viewport: { once: true },
        transition: {
          duration: 0.8,
          ease,
          delay: 0.2 * (int + 1)
        },
        className: clsx9(textClassName, textStrokeMap == null ? void 0 : textStrokeMap[(options == null ? void 0 : options.strokeColor) || "brightGreen"], "-mt-12", otherItemsTextColor, itemClasses),
        children: bottomText || centerText
      }
    )
  ] }) });
}
var TextStrokeStack_default;
var init_TextStrokeStack = __esm({
  "src/components/elements/TextStrokeStack.tsx"() {
    init_ColorHelpers();
    TextStrokeStack_default = TextStrokeStack;
  }
});

// src/utils/context.ts
import { createContext } from "react";
var GlobalContext;
var init_context = __esm({
  "src/utils/context.ts"() {
    GlobalContext = createContext([]);
  }
});

// src/utils/links.tsx
var getLinkTarget, getButtonLinkProps;
var init_links = __esm({
  "src/utils/links.tsx"() {
    getLinkTarget = (target) => target === "_blank" ? "_blank" : "_self";
    getButtonLinkProps = ({ title, url, className, button = { background_color: "navy", type: "default" } }) => ({
      link: {
        title,
        url: url || "/",
        target: ""
      },
      type: "button",
      button,
      className
    });
  }
});

// src/components/global/header/HeaderElements/HeaderButtons.tsx
import clsx12 from "clsx";
import { jsx as jsx23 } from "react/jsx-runtime";
function HeaderButtons({ isMobile = false, button, bgColor, isSubmenuOpen }) {
  var _a, _b, _c;
  let buttonBgColor = "";
  if (isSubmenuOpen) {
    buttonBgColor = "navy5";
  } else if (bgColor === "navy" || bgColor === "black" || bgColor === "purple" || bgColor === "blue") {
    buttonBgColor = "white15";
  } else {
    buttonBgColor = "navy5";
  }
  const buttonProps2 = getButtonLinkProps({
    title: (_a = button == null ? void 0 : button.link) == null ? void 0 : _a.title,
    button: {
      background_color: buttonBgColor,
      type: "header"
    }
  });
  return /* @__PURE__ */ jsx23("div", { className: ` items-center ${isMobile ? "mt-[6.875rem] flex flex-col space-y-3" : "hidden justify-end space-x-3 lg:flex"}`, children: /* @__PURE__ */ jsx23(Link, { href: ((_b = button == null ? void 0 : button.link) == null ? void 0 : _b.url) || "#", link: button == null ? void 0 : button.link, target: (_c = button == null ? void 0 : button.link) == null ? void 0 : _c.target, className: clsx12("max-w-[20.9375rem]", isMobile && "w-full"), children: /* @__PURE__ */ jsx23(Button_default, __spreadValues({}, buttonProps2)) }) });
}
var HeaderButtons_default;
var init_HeaderButtons = __esm({
  "src/components/global/header/HeaderElements/HeaderButtons.tsx"() {
    init_Link();
    init_Button();
    init_links();
    HeaderButtons_default = HeaderButtons;
  }
});

// src/components/global/header/SubmenuWrapper.tsx
import { m as m7 } from "framer-motion";
import { jsx as jsx24 } from "react/jsx-runtime";
function SubmenuWrapper({ children }) {
  return /* @__PURE__ */ jsx24(
    m7.div,
    {
      layout: true,
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: wrapperVariants,
      className: "borer-black/5 absolute inset-x-0 top-[100%] !mx-0 origin-top border-t bg-white md:py-8 lg:py-12",
      children
    }
  );
}
var wrapperVariants, barVariants, SubmenuWrapper_default;
var init_SubmenuWrapper = __esm({
  "src/components/global/header/SubmenuWrapper.tsx"() {
    wrapperVariants = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          type: "easeInOut",
          duration: 0.3
        }
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
          type: "easeInOut",
          duration: 0.3
        }
      }
    };
    barVariants = {
      visible: {
        y: "0",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 22
        }
      },
      hidden: {
        y: "-100%",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 22
        }
      }
    };
    SubmenuWrapper_default = SubmenuWrapper;
  }
});

// src/components/global/header/HeaderElements/HeaderIconCard.tsx
import Link4 from "next/link";
import { jsx as jsx26, jsxs as jsxs14 } from "react/jsx-runtime";
function HeaderIconCard({ item, gapLrg, parentMenu }) {
  var _a, _b, _c;
  return /* @__PURE__ */ jsxs14(
    Link4,
    {
      href: cmsUrlToNextHref(((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.url) || "#"),
      target: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.target,
      className: "group relative flex flex-col rounded-lg bg-lightGrey p-4 text-left transition-colors duration-200 hover:bg-lightGrey md:p-6 lg:col-span-7 lg:bg-white",
      onClick: () => {
        if (!parentMenu) return;
        trackEvent_default("menu_trackevent", {
          level_1: parentMenu.menu_item.title,
          level_2: item.link.title,
          menu_type: "menu_header"
        });
      },
      children: [
        /* @__PURE__ */ jsx26("div", { className: "absolute right-4 top-4 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:right-6 md:top-6 lg:rotate-45 lg:scale-0", children: /* @__PURE__ */ jsx26(CircleArrow, {}) }),
        /* @__PURE__ */ jsxs14("div", { className: "mb-1 flex items-center justify-start gap-3 lg:mb-2", children: [
          /* @__PURE__ */ jsx26("span", { className: "text-20 block font-heading font-medium tracking-[-0.0125em]", dangerouslySetInnerHTML: { __html: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.title } }),
          (item == null ? void 0 : item.add_new_tag) && /* @__PURE__ */ jsx26(PillTag_default, { text: "NEW" })
        ] }),
        /* @__PURE__ */ jsx26("p", { className: "text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
      ]
    }
  );
}
var HeaderIconCard_default;
var init_HeaderIconCard = __esm({
  "src/components/global/header/HeaderElements/HeaderIconCard.tsx"() {
    init_cmsUrlToNextHref();
    init_Icons();
    init_trackEvent();
    init_PillTag();
    HeaderIconCard_default = HeaderIconCard;
  }
});

// src/components/global/header/TabSubmenu/FeaturedCustomer.tsx
import Link5 from "next/link";
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
function FeaturedCustomer({ featuredCustomer, parentMenu }) {
  var _a, _b;
  const bars = Array.from({ length: 17 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs15("div", { className: "ml-auto w-full space-y-4 lg:max-w-[29.5rem] lg:space-y-6", children: [
    /* @__PURE__ */ jsxs15(
      Link5,
      {
        href: cmsUrlToNextHref(featuredCustomer.permalink),
        className: "group relative flex overflow-hidden rounded-[0.375rem] bg-green p-4 lg:p-5",
        onClick: () => {
          trackEvent_default("menu_trackevent", {
            level_1: parentMenu.menu_item.title,
            level_2: featuredCustomer.post_title,
            menu_type: "menu_header"
          });
        },
        children: [
          /* @__PURE__ */ jsxs15("div", { className: "relative z-10 flex h-full min-h-[9.5625rem] flex-col lg:min-h-[14rem]", children: [
            /* @__PURE__ */ jsx27("div", { className: "mb-12 flex h-8 w-[5rem] items-center", children: /* @__PURE__ */ jsx27(WpImage, { image: featuredCustomer.acf.media.logo, className: "h-full w-full object-contain object-left" }) }),
            /* @__PURE__ */ jsx27(
              "span",
              {
                className: "text-20 mt-auto inline-flex font-heading font-medium tracking-[-0.0125em] text-white",
                dangerouslySetInnerHTML: { __html: featuredCustomer.post_title }
              }
            ),
            /* @__PURE__ */ jsx27("div", { className: "absolute right-0 top-0 h-5 w-5 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0", children: /* @__PURE__ */ jsx27(CircleArrow, {}) })
          ] }),
          /* @__PURE__ */ jsx27("div", { className: "absolute inset-0 z-[5] bg-gradient-to-t from-black" }),
          /* @__PURE__ */ jsx27(WpImage, { image: featuredCustomer.acf.media.thumbnail, fill: true, className: "z-0 h-full w-full object-cover" })
        ]
      }
    ),
    ((_b = (_a = featuredCustomer == null ? void 0 : featuredCustomer.acf) == null ? void 0 : _a.key_stats) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxs15("div", { className: "relative rounded-l-[0.375rem] bg-brightGreen text-black", children: [
      /* @__PURE__ */ jsxs15("div", { className: "relative z-10 flex items-center space-x-6 p-6 py-3 lg:max-w-[18rem]", children: [
        /* @__PURE__ */ jsxs15("div", { className: "text-header-stat relative py-2 font-heading font-[450] lg:py-4", children: [
          /* @__PURE__ */ jsx27(
            "span",
            {
              className: "relative z-10 inline-block bg-brightGreen font-heading font-[450]",
              dangerouslySetInnerHTML: { __html: featuredCustomer.acf.key_stats[0].stat }
            }
          ),
          /* @__PURE__ */ jsx27(
            "span",
            {
              className: "stat-stroke absolute left-0 top-0 text-brightGreen",
              dangerouslySetInnerHTML: { __html: featuredCustomer.acf.key_stats[0].stat }
            }
          ),
          /* @__PURE__ */ jsx27(
            "span",
            {
              className: "stat-stroke absolute bottom-0 left-0 text-brightGreen",
              dangerouslySetInnerHTML: { __html: featuredCustomer.acf.key_stats[0].stat }
            }
          )
        ] }),
        /* @__PURE__ */ jsx27(
          "span",
          {
            className: "text-18 line-clamp-2 inline-block font-heading font-[450]",
            dangerouslySetInnerHTML: { __html: featuredCustomer.acf.key_stats[0].caption }
          }
        )
      ] }),
      /* @__PURE__ */ jsx27("div", { className: "absolute inset-y-0 right-0 flex h-full flex-row-reverse justify-start lg:w-1/3", children: bars.map((index) => /* @__PURE__ */ jsx27(
        "div",
        {
          className: "h-full shrink-0 bg-white",
          style: { width: `${8 - index * 0.4}px`, marginLeft: `${1.5 + 0.4 * index}px` }
        },
        `featured-customer-bar-${index}`
      )) })
    ] })
  ] });
}
var FeaturedCustomer_default;
var init_FeaturedCustomer = __esm({
  "src/components/global/header/TabSubmenu/FeaturedCustomer.tsx"() {
    init_cmsUrlToNextHref();
    init_Wp();
    init_Icons();
    init_trackEvent();
    FeaturedCustomer_default = FeaturedCustomer;
  }
});

// src/components/global/header/TabSubmenu/TabsSubmenu.tsx
import { m as m9 } from "framer-motion";
import { jsx as jsx28, jsxs as jsxs16 } from "react/jsx-runtime";
function TabsSubmenu({ submenu, parentMenu }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs16(m9.div, { layout: true, className: "items-start space-y-4 lg:flex lg:space-y-0 2xl:mx-[-1.5rem]", children: [
    /* @__PURE__ */ jsx28("menu", { className: "grid gap-4 sm:grid-cols-2 lg:max-w-[49rem] lg:gap-0", children: ((_a = submenu == null ? void 0 : submenu.sub_menu_item) == null ? void 0 : _a.length) > 0 && ((_b = submenu == null ? void 0 : submenu.sub_menu_item) == null ? void 0 : _b.map((item) => {
      var _a2, _b2;
      return (
        // eslint-disable-next-line
        /* @__PURE__ */ jsx28(
          "div",
          {
            onClick: () => {
              var _a3, _b3, _c;
              trackEvent_default("menu_trackevent", {
                level_1: (_a3 = parentMenu == null ? void 0 : parentMenu.menu_item) == null ? void 0 : _a3.title,
                level_2: (_c = (_b3 = item == null ? void 0 : item.content) == null ? void 0 : _b3.link) == null ? void 0 : _c.title,
                menu_type: "menu_header"
              });
            },
            children: /* @__PURE__ */ jsx28(HeaderIconCard_default, { item: item.content, gapLrg: true })
          },
          (_b2 = (_a2 = item == null ? void 0 : item.content) == null ? void 0 : _a2.link) == null ? void 0 : _b2.title
        )
      );
    })) }),
    /* @__PURE__ */ jsx28(FeaturedCustomer_default, { featuredCustomer: submenu.featured_customer_story, parentMenu })
  ] });
}
var TabsSubmenu_default;
var init_TabsSubmenu = __esm({
  "src/components/global/header/TabSubmenu/TabsSubmenu.tsx"() {
    init_trackEvent();
    init_HeaderIconCard();
    init_FeaturedCustomer();
    TabsSubmenu_default = TabsSubmenu;
  }
});

// src/components/global/header/GridSubmenu/InnerColumnMenu.tsx
import Link6 from "next/link";
import { jsx as jsx29, jsxs as jsxs17 } from "react/jsx-runtime";
function InnerColumnMenu({ heading_link, inner_menu, parentMenu, addNewTag, setShowMobileNav }) {
  return /* @__PURE__ */ jsxs17("menu", { children: [
    /* @__PURE__ */ jsxs17(
      Link6,
      {
        href: cmsUrlToNextHref((heading_link == null ? void 0 : heading_link.url) || "#"),
        target: heading_link == null ? void 0 : heading_link.target,
        className: "group inline-flex items-end space-x-3",
        onClick: () => {
          trackEvent_default("menu_trackevent", {
            level_1: parentMenu.menu_item.title,
            level_2: heading_link.title,
            menu_type: "menu_header"
          });
        },
        children: [
          /* @__PURE__ */ jsx29("span", { className: "text-20 font-heading font-medium !leading-[1] tracking-[-0.0125em]", dangerouslySetInnerHTML: { __html: heading_link == null ? void 0 : heading_link.title } }),
          /* @__PURE__ */ jsx29("div", { className: "h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition duration-200 group-hover:rotate-45 group-hover:bg-blue lg:rotate-0", children: /* @__PURE__ */ jsx29(CircleArrow, {}) }),
          addNewTag && /* @__PURE__ */ jsx29(PillTag_default, { text: "NEW" })
        ]
      }
    ),
    /* @__PURE__ */ jsx29("div", { className: "mt-6 flex flex-col space-y-4", children: (inner_menu == null ? void 0 : inner_menu.length) > 0 && (inner_menu == null ? void 0 : inner_menu.map((item) => {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsxs17(
        Link6,
        {
          href: cmsUrlToNextHref(((_b = item == null ? void 0 : item.link) == null ? void 0 : _b.url) || "#"),
          target: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.target,
          className: "group flex items-center space-x-2",
          onClick: () => {
            trackEvent_default("menu_trackevent", {
              level_1: parentMenu.menu_item.title,
              level_2: item.link.title,
              menu_type: "menu_header"
            });
            setShowMobileNav(false);
          },
          children: [
            /* @__PURE__ */ jsx29("span", { className: "text-16 !leading-none opacity-[.75]", dangerouslySetInnerHTML: { __html: (_d = item == null ? void 0 : item.link) == null ? void 0 : _d.title } }),
            /* @__PURE__ */ jsx29("div", { className: "h-[0.625rem] w-[0.6875rem] -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx29(RightArrow, {}) }),
            " ",
            (item == null ? void 0 : item.add_new_tag) && /* @__PURE__ */ jsx29(PillTag_default, { text: "NEW" })
          ]
        }
      ) }, (_a = item == null ? void 0 : item.link) == null ? void 0 : _a.title);
    })) })
  ] });
}
var InnerColumnMenu_default;
var init_InnerColumnMenu = __esm({
  "src/components/global/header/GridSubmenu/InnerColumnMenu.tsx"() {
    init_cmsUrlToNextHref();
    init_Icons();
    init_trackEvent();
    init_PillTag();
    InnerColumnMenu_default = InnerColumnMenu;
  }
});

// src/components/global/header/GridSubmenu/CardMenu.tsx
import Link7 from "next/link";
import { jsx as jsx30, jsxs as jsxs18 } from "react/jsx-runtime";
function CardMenu({ card, parentMenu }) {
  var _a, _b, _c, _d, _e, _f;
  const bars = Array.from({ length: 30 }, (_, i) => i + 1);
  const { card_type, image } = card || {};
  return /* @__PURE__ */ jsx30("div", { className: "w-full md:ml-auto md:max-w-[37.625rem]", children: /* @__PURE__ */ jsxs18("div", { className: "relative z-10 flex h-full flex-col overflow-hidden rounded-lg bg-navy p-4 text-white lg:p-8", children: [
    /* @__PURE__ */ jsxs18("div", { className: "mb-10 max-w-[16.5rem]", children: [
      /* @__PURE__ */ jsx30("span", { className: "text-20 mb-2 font-heading font-medium tracking-[-0.0125em]", dangerouslySetInnerHTML: { __html: (_a = card == null ? void 0 : card.card_link) == null ? void 0 : _a.title } }),
      /* @__PURE__ */ jsx30("p", { className: "text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80", dangerouslySetInnerHTML: { __html: card == null ? void 0 : card.description } })
    ] }),
    card_type === "image" && !!((_b = card == null ? void 0 : card.image) == null ? void 0 : _b.url) && /* @__PURE__ */ jsx30("div", { className: "relative z-10 aspect-[400/160] w-full overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx30(WpImage, { image, fill: true, className: "object-cover object-center" }) }),
    card_type === "links" && /* @__PURE__ */ jsx30("menu", { className: "relative z-[5] mt-auto grid gap-2 sm:grid-cols-2", children: ((_c = card == null ? void 0 : card.inner_menu) == null ? void 0 : _c.length) > 0 && ((_d = card == null ? void 0 : card.inner_menu) == null ? void 0 : _d.map((item) => {
      var _a2, _b2, _c2, _d2;
      return /* @__PURE__ */ jsxs18(
        Link7,
        {
          href: cmsUrlToNextHref((_b2 = item == null ? void 0 : item.link) == null ? void 0 : _b2.url),
          target: (_c2 = item == null ? void 0 : item.link) == null ? void 0 : _c2.target,
          className: "group flex items-center space-x-2 rounded-md bg-white/5 p-4 py-[.94rem] backdrop-blur-lg",
          onClick: () => {
            var _a3;
            trackEvent_default("menu_trackevent", {
              level_1: parentMenu.menu_item.title,
              level_2: (_a3 = item == null ? void 0 : item.link) == null ? void 0 : _a3.title,
              menu_type: "menu_header"
            });
          },
          children: [
            /* @__PURE__ */ jsx30(
              "span",
              {
                className: "text-16 font-heading font-normal !leading-none opacity-[.75] transition-opacity duration-200 group-hover:opacity-100",
                dangerouslySetInnerHTML: { __html: (_d2 = item == null ? void 0 : item.link) == null ? void 0 : _d2.title }
              }
            ),
            /* @__PURE__ */ jsx30("div", { className: "h-[0.625rem] w-[0.6875rem] -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx30(RightArrow, {}) })
          ]
        },
        (_a2 = item == null ? void 0 : item.link) == null ? void 0 : _a2.title
      );
    })) }),
    /* @__PURE__ */ jsxs18(
      Link7,
      {
        href: cmsUrlToNextHref((_e = card == null ? void 0 : card.card_link) == null ? void 0 : _e.url),
        target: (_f = card == null ? void 0 : card.card_link) == null ? void 0 : _f.target,
        className: "group absolute inset-0",
        onClick: () => {
          trackEvent_default("menu_trackevent", {
            level_1: parentMenu.menu_item.title,
            level_2: card.card_link.title,
            menu_type: "menu_header"
          });
        },
        children: [
          /* @__PURE__ */ jsx30("div", { className: "absolute right-6 top-6 z-[5] h-5 w-5 rounded-full bg-white text-navy transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0", children: /* @__PURE__ */ jsx30(CircleArrow, {}) }),
          /* @__PURE__ */ jsx30("div", { className: "absolute bottom-[50%] right-0 flex h-[30%] w-1/3 origin-right flex-row-reverse justify-start transition-transform duration-300 group-hover:scale-x-100 lg:w-1/3 lg:scale-x-0", children: bars.slice(0, 16).map((index) => /* @__PURE__ */ jsx30(
            "div",
            {
              className: "h-full shrink-0 bg-blue",
              style: { width: `${3.5 - index * 0.2}px`, marginLeft: `${6 + 0.1 * index}px` }
            },
            `bars-first-set-${index}`
          )) }),
          /* @__PURE__ */ jsx30("div", { className: "absolute bottom-0 right-0 flex h-1/2 w-3/4 origin-right flex-row-reverse justify-start transition-transform duration-300 group-hover:scale-x-100 lg:w-1/3 lg:scale-x-0", children: bars.map((index) => /* @__PURE__ */ jsx30(
            "div",
            {
              className: "h-full shrink-0 bg-blue",
              style: { width: `${6 - index * 0.2}px`, marginLeft: `${6 + 0.1 * index}px` }
            },
            `bars-second-set-${index}`
          )) })
        ]
      }
    )
  ] }) });
}
var CardMenu_default;
var init_CardMenu = __esm({
  "src/components/global/header/GridSubmenu/CardMenu.tsx"() {
    init_cmsUrlToNextHref();
    init_Icons();
    init_trackEvent();
    init_Wp();
    CardMenu_default = CardMenu;
  }
});

// src/components/global/header/GridSubmenu/GridSubmenu.tsx
import { m as m10 } from "framer-motion";
import { jsx as jsx31, jsxs as jsxs19 } from "react/jsx-runtime";
function GridSubmenu({ submenu, parentMenu, setShowMobileNav }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs19(m10.div, { layout: true, className: "grid gap-y-[2.25rem] md:grid-cols-2 md:gap-x-6", children: [
    /* @__PURE__ */ jsx31("div", { className: "grid gap-y-[3.25rem] sm:grid-cols-2 sm:gap-x-12", children: ((_a = submenu == null ? void 0 : submenu.grid_items) == null ? void 0 : _a.length) > 0 && ((_b = submenu.grid_items) == null ? void 0 : _b.map((group) => {
      var _a2;
      return /* @__PURE__ */ jsx31("div", { children: /* @__PURE__ */ jsx31(
        InnerColumnMenu_default,
        {
          heading_link: group.heading_link,
          addNewTag: group.add_new_tag,
          inner_menu: group.inner_menu,
          parentMenu,
          setShowMobileNav
        }
      ) }, (_a2 = group.heading_link) == null ? void 0 : _a2.title);
    })) }),
    /* @__PURE__ */ jsx31(CardMenu_default, { card: submenu.card, parentMenu })
  ] });
}
var GridSubmenu_default;
var init_GridSubmenu = __esm({
  "src/components/global/header/GridSubmenu/GridSubmenu.tsx"() {
    init_InnerColumnMenu();
    init_CardMenu();
    GridSubmenu_default = GridSubmenu;
  }
});

// src/components/global/header/CardSubmenu/HeaderCard.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";
import Link8 from "next/link";
import { Fragment as Fragment4, jsx as jsx32, jsxs as jsxs20 } from "react/jsx-runtime";
function HeaderCard({ card, parentMenu }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const [investorsData, setInvestorsData] = useState4(null);
  const cardBackground = [""];
  const arrowColor = [""];
  if (card.background === "white") {
    cardBackground.push("bg-blue lg:bg-white text-white lg:text-navy hover:bg-blue hover:text-white");
    arrowColor.push("bg-white text-blue");
  } else {
    cardBackground.push("bg-navy text-white  lg:bg-lightBlue lg:text-navy hover:bg-navy hover:text-white");
    arrowColor.push("bg-purple text-white");
  }
  const bars = Array.from({ length: 30 }, (_, i) => i + 1);
  useEffect4(() => {
    const fetchInvestorsData = async () => {
      const response = await fetch("https://investors.geniussports.com/feed/StockQuote.svc/GetFullStockQuoteList?exchange=NYSE&symbol=GENI&pageSize=1");
      if (!response.ok) {
        throw new Error("Failed to fetch investor data");
      } else {
        const data = await response.json();
        setInvestorsData(data);
      }
    };
    if (card == null ? void 0 : card.show_investor_data) {
      fetchInvestorsData();
    }
  }, [card == null ? void 0 : card.show_investor_data]);
  return /* @__PURE__ */ jsxs20(
    Link8,
    {
      href: cmsUrlToNextHref(((_a = card == null ? void 0 : card.link) == null ? void 0 : _a.url) || "#"),
      target: (_b = card == null ? void 0 : card.link) == null ? void 0 : _b.target,
      className: `group relative block h-full overflow-hidden rounded-lg p-6 transition-colors duration-300 ${cardBackground.join(" ")}`,
      onClick: () => {
        var _a2;
        if (!parentMenu) return;
        trackEvent_default("menu_trackevent", {
          level_1: parentMenu.menu_item.title,
          level_2: (_a2 = card == null ? void 0 : card.link) == null ? void 0 : _a2.title,
          menu_type: "menu_header"
        });
      },
      children: [
        /* @__PURE__ */ jsxs20("div", { className: "relative z-10 flex h-full flex-col", children: [
          /* @__PURE__ */ jsx32(
            "div",
            {
              className: `absolute right-0 z-10 h-5 w-5 rounded-full transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0 ${arrowColor.join(" ")}`,
              children: /* @__PURE__ */ jsx32(CircleArrow, {})
            }
          ),
          /* @__PURE__ */ jsx32("span", { className: "text-20 mb-2 font-heading font-medium tracking-[-0.0125em]", dangerouslySetInnerHTML: { __html: (_c = card == null ? void 0 : card.link) == null ? void 0 : _c.title } }),
          /* @__PURE__ */ jsx32(
            "p",
            {
              className: "text-15 mb-6 max-w-[18.125rem] font-body !leading-[1.4] tracking-[-0.009375em] opacity-80 lg:mb-[3.375rem]",
              dangerouslySetInnerHTML: { __html: card.description }
            }
          ),
          !card.show_investor_data && /* @__PURE__ */ jsx32("div", { className: "mt-auto overflow-hidden rounded-md", children: /* @__PURE__ */ jsx32(Asset, __spreadValues({}, card.media)) }),
          card.show_investor_data && /* @__PURE__ */ jsxs20("div", { className: "mt-auto flex flex-col rounded-md bg-white p-4 text-navy", children: [
            /* @__PURE__ */ jsxs20("div", { className: "mb-8 flex items-center space-x-2 md:mb-10", children: [
              /* @__PURE__ */ jsx32("div", { className: "flex h-6 w-6 items-center justify-center rounded-[0.125rem] bg-navy p-[.2rem] text-white", children: /* @__PURE__ */ jsx32(GeniusFaviconIcon, {}) }),
              /* @__PURE__ */ jsxs20("div", { className: "text-9 flex items-center space-x-2 rounded-[.35rem] bg-lightGrey p-[0.2rem] pl-[0.625rem] font-semibold", children: [
                /* @__PURE__ */ jsx32("span", { className: "opacity-80", dangerouslySetInnerHTML: { __html: (_d = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _d.Exchange } }),
                /* @__PURE__ */ jsx32(
                  "span",
                  {
                    className: "rounded-[.25rem] bg-white px-2 py-1",
                    dangerouslySetInnerHTML: { __html: (_e = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _e.Symbol }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs20("div", { className: "flex items-end space-x-3", children: [
              !!((_g = (_f = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _f.TradePrice) == null ? void 0 : _g.toFixed(2)) && /* @__PURE__ */ jsx32(
                "span",
                {
                  className: "text-40 !leading-none",
                  dangerouslySetInnerHTML: { __html: `$${(_i = (_h = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _h.TradePrice) == null ? void 0 : _i.toFixed(2)}` }
                }
              ),
              /* @__PURE__ */ jsxs20(
                "div",
                {
                  className: `inline-flex items-center space-x-2 rounded-full bg-lightGrey px-[0.375rem] py-[0.35rem] ${((_j = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _j.PercChange) > 0 ? "text-lightGreen" : "text-lightRed"}`,
                  children: [
                    /* @__PURE__ */ jsx32(
                      "span",
                      {
                        className: "text-12 font-body font-bold !leading-none",
                        dangerouslySetInnerHTML: { __html: `${(_k = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _k.PercChange}%` }
                      }
                    ),
                    /* @__PURE__ */ jsx32("div", { className: `h-[.6rem] w-[.8rem] shrink-0 ${((_l = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _l.PercChange) > 0 ? "" : "rotate-180"}`, children: /* @__PURE__ */ jsx32(StockArrow, {}) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx32(
              "span",
              {
                className: "text-11 mt-2 inline-block font-body font-medium opacity-40 md:mt-3",
                dangerouslySetInnerHTML: { __html: (_m = investorsData == null ? void 0 : investorsData.GetFullStockQuoteListResult[0]) == null ? void 0 : _m.TradeDate }
              }
            )
          ] })
        ] }),
        card.background === "white" && /* @__PURE__ */ jsxs20("div", { className: "absolute inset-0 flex origin-bottom flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0", children: [
          bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx32("div", { className: "w-full bg-lightBlue", style: { height: `${2 + 1 * index}px`, marginBottom: `${10 - 1 * index}px` } }, index)),
          /* @__PURE__ */ jsx32("div", { className: "h-10 w-full bg-lightBlue" })
        ] }),
        card.background !== "white" && /* @__PURE__ */ jsxs20(Fragment4, { children: [
          /* @__PURE__ */ jsx32("div", { className: "absolute bottom-0 left-0 flex h-[62%] w-1/2 origin-bottom flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0", children: bars.map((index) => /* @__PURE__ */ jsx32(
            "div",
            {
              className: "w-full bg-purple",
              style: { height: `${0 + 0.2 * index}px`, marginTop: `${8 - 0.2 * index}px` }
            },
            `header-card-bars-first-set-${index}`
          )) }),
          /* @__PURE__ */ jsx32("div", { className: "absolute bottom-0 right-0 flex h-[62%] w-1/2 origin-bottom translate-y-[36%] flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0", children: bars.map((index) => /* @__PURE__ */ jsx32(
            "div",
            {
              className: "w-full bg-purple",
              style: { height: `${0 + 0.2 * index}px`, marginTop: `${8 - 0.2 * index}px` }
            },
            `header-card-bars-second-set-${index}`
          )) })
        ] })
      ]
    }
  );
}
var HeaderCard_default;
var init_HeaderCard = __esm({
  "src/components/global/header/CardSubmenu/HeaderCard.tsx"() {
    init_cmsUrlToNextHref();
    init_Asset();
    init_Icons();
    init_trackEvent();
    HeaderCard_default = HeaderCard;
  }
});

// src/components/global/header/CardSubmenu/CardSubmenu.tsx
import { m as m11 } from "framer-motion";
import { jsx as jsx33, jsxs as jsxs21 } from "react/jsx-runtime";
function CardSubmenu({ submenu, parentMenu }) {
  var _a, _b, _c, _d;
  return (
    // console.log(submenu);
    /* @__PURE__ */ jsxs21(m11.div, { layout: true, className: "grid gap-y-4 md:grid-cols-3 md:gap-x-6", children: [
      /* @__PURE__ */ jsx33("div", { children: /* @__PURE__ */ jsx33(HeaderCard_default, { card: submenu.first_card, parentMenu }) }),
      /* @__PURE__ */ jsx33("div", { className: "flex flex-col space-y-4 lg:space-y-0", children: ((_b = (_a = submenu == null ? void 0 : submenu.inner_menu) == null ? void 0 : _a.menu_items) == null ? void 0 : _b.length) > 0 && ((_d = (_c = submenu == null ? void 0 : submenu.inner_menu) == null ? void 0 : _c.menu_items) == null ? void 0 : _d.map((item) => {
        var _a2;
        return /* @__PURE__ */ jsx33(HeaderIconCard_default, { item, parentMenu, gapLrg: true }, (_a2 = item.link) == null ? void 0 : _a2.title);
      })) }),
      /* @__PURE__ */ jsx33("div", { children: /* @__PURE__ */ jsx33(HeaderCard_default, { card: submenu.last_card, parentMenu }) })
    ] })
  );
}
var CardSubmenu_default;
var init_CardSubmenu = __esm({
  "src/components/global/header/CardSubmenu/CardSubmenu.tsx"() {
    init_HeaderCard();
    init_HeaderIconCard();
    CardSubmenu_default = CardSubmenu;
  }
});

// src/components/global/header/LearnSubmenu/FeaturedCard.tsx
import { useState as useState5 } from "react";
import Link9 from "next/link";
import { jsx as jsx34, jsxs as jsxs22 } from "react/jsx-runtime";
function FeaturedCard({ item, parentMenu }) {
  var _a, _b, _c;
  const bars = Array.from({ length: 48 }, (_, i) => i + 1);
  const barTranslate = [
    [0, 8],
    [5, 45],
    [10, 1],
    [30, 18]
  ];
  const getRandomTranslate = (translates) => {
    const values = translates == null ? void 0 : translates.map((obj) => obj);
    return values[Math.floor(Math.random() * values.length)];
  };
  const [cardHovered, setCardHovered] = useState5(false);
  return /* @__PURE__ */ jsxs22(
    Link9,
    {
      href: cmsUrlToNextHref(((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.url) || "#"),
      target: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.target,
      className: "group flex flex-col overflow-hidden rounded-lg bg-brightGreen p-4 text-navy transition-colors duration-200 hover:bg-brightGreen hover:text-navy md:h-full md:grow md:bg-purple md:text-white",
      onMouseEnter: () => setCardHovered(true),
      onMouseLeave: () => setCardHovered(false),
      onClick: () => {
        if (!parentMenu) return;
        trackEvent_default("menu_trackevent", {
          level_1: parentMenu.menu_item.title,
          level_2: item.link.title,
          menu_type: "menu_header"
        });
      },
      children: [
        /* @__PURE__ */ jsx34("div", { className: "item-center relative mb-4 flex h-[3.5rem] w-[3.5rem] invert transition-colors duration-200 group-hover:invert md:mb-6 md:h-[4.375rem] md:w-[4.375rem] md:invert-0", children: /* @__PURE__ */ jsx34(Icon_default, { icon: item.icon }) }),
        /* @__PURE__ */ jsx34("div", { className: "absolute right-4 top-4 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:right-6 md:top-6 lg:rotate-45 lg:scale-0", children: /* @__PURE__ */ jsx34(CircleArrow, {}) }),
        /* @__PURE__ */ jsxs22("div", { className: "mb-6 max-w-[19.875rem]", children: [
          /* @__PURE__ */ jsx34("span", { className: "text-20 mb-1 font-heading font-medium tracking-[-0.0125em] lg:mb-2", dangerouslySetInnerHTML: { __html: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.title } }),
          /* @__PURE__ */ jsx34("p", { className: "text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
        ] }),
        /* @__PURE__ */ jsx34("div", { className: " mt-auto flex h-[2.75rem] w-full items-end justify-between overflow-hidden", children: bars.map((index) => {
          const translateY = getRandomTranslate(barTranslate);
          return /* @__PURE__ */ jsxs22(
            "div",
            {
              className: "flex h-full flex-col items-center transition-transform duration-300",
              style: { transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` },
              children: [
                /* @__PURE__ */ jsx34("div", { className: "h-[.5rem] w-[0.0625rem] shrink-0 bg-purple transition-all duration-200 group-hover:bg-purple md:bg-brightGreen" }),
                /* @__PURE__ */ jsx34("div", { className: "h-full w-[0.2rem] bg-purple transition-all duration-200 group-hover:bg-purple md:bg-brightGreen" })
              ]
            },
            `featured-card-bar-${index}`
          );
        }) })
      ]
    }
  );
}
var FeaturedCard_default;
var init_FeaturedCard = __esm({
  "src/components/global/header/LearnSubmenu/FeaturedCard.tsx"() {
    init_cmsUrlToNextHref();
    init_Icon();
    init_Icons();
    init_trackEvent();
    FeaturedCard_default = FeaturedCard;
  }
});

// src/utils/getPostPreviewImage.ts
var getPostPreviewImage, getPostPreviewImage_default;
var init_getPostPreviewImage = __esm({
  "src/utils/getPostPreviewImage.ts"() {
    getPostPreviewImage = (post) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return (_g = (_d = (_b = (_a = post == null ? void 0 : post.acf) == null ? void 0 : _a.preview) == null ? void 0 : _b.thumbnail) != null ? _d : (_c = post == null ? void 0 : post.preview) == null ? void 0 : _c.thumbnail) != null ? _g : __spreadProps(__spreadValues({}, post == null ? void 0 : post.featured_image), { url: (_f = (_e = post == null ? void 0 : post.featured_image) == null ? void 0 : _e.src) != null ? _f : "" });
    };
    getPostPreviewImage_default = getPostPreviewImage;
  }
});

// src/components/global/header/LearnSubmenu/FeaturedArticle.tsx
import Link10 from "next/link";
import { jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
function FeaturedArticle({ item, parentMenu }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs23(
    Link10,
    {
      href: cmsUrlToNextHref(item == null ? void 0 : item.permalink),
      className: "group relative block rounded-lg bg-lightPurple p-3 pb-4 text-navy transition-colors duration-200 hover:bg-lightPurple md:flex md:items-center md:space-x-4 md:bg-[#F6F7F9] md:pb-3",
      onClick: () => {
        if (!parentMenu) return;
        trackEvent_default("menu_trackevent", {
          level_1: parentMenu.menu_item.title,
          level_2: item == null ? void 0 : item.post_title,
          menu_type: "menu_header"
        });
      },
      children: [
        /* @__PURE__ */ jsx35("div", { className: "relative mb-4 aspect-[39/23] w-full shrink-0 overflow-hidden rounded-lg md:mb-0 md:max-w-[11.375rem]", children: /* @__PURE__ */ jsx35(WpImage, { image: getPostPreviewImage_default(item), fill: true, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsx35("div", { className: "absolute right-4 top-3 hidden h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:block lg:rotate-45 lg:scale-0", children: /* @__PURE__ */ jsx35(CircleArrow, {}) }),
        /* @__PURE__ */ jsxs23("div", { className: "max-w-[21.4375rem]", children: [
          /* @__PURE__ */ jsx35("div", { className: "block", children: ((_a = item == null ? void 0 : item.categories) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx35(
            "span",
            {
              className: "text-14 rounded-md bg-purple px-2 py-[.3rem] font-body font-medium text-white transition-colors duration-200 group-hover:bg-purple group-hover:text-white md:bg-white md:text-navy",
              dangerouslySetInnerHTML: { __html: (_b = item == null ? void 0 : item.categories[0]) == null ? void 0 : _b.name }
            }
          ) }),
          /* @__PURE__ */ jsx35("h3", { className: "text-16 !font-book mt-4 line-clamp-2", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.post_title } })
        ] })
      ]
    }
  );
}
var FeaturedArticle_default;
var init_FeaturedArticle = __esm({
  "src/components/global/header/LearnSubmenu/FeaturedArticle.tsx"() {
    init_cmsUrlToNextHref();
    init_Wp();
    init_Icons();
    init_trackEvent();
    init_getPostPreviewImage();
    FeaturedArticle_default = FeaturedArticle;
  }
});

// src/components/global/header/LearnSubmenu/LearnSubmenu.tsx
import { m as m12 } from "framer-motion";
import { jsx as jsx36, jsxs as jsxs24 } from "react/jsx-runtime";
function LearnSubmenu({ submenu, parentMenu }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs24(m12.div, { layout: true, className: "items-start space-y-4 lg:flex lg:items-stretch lg:space-x-6 lg:space-y-0  2xl:mx-[-1.5rem]", children: [
    /* @__PURE__ */ jsxs24("div", { className: "w-full shrink-0 space-y-4 md:space-y-6 lg:w-[calc(62%-1.5rem)]", children: [
      /* @__PURE__ */ jsx36("div", { className: "grid gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-0 lg:gap-x-0", children: ((_a = submenu == null ? void 0 : submenu.cards) == null ? void 0 : _a.length) > 0 && ((_b = submenu == null ? void 0 : submenu.cards) == null ? void 0 : _b.map((item) => {
        var _a2;
        return /* @__PURE__ */ jsx36("div", { children: /* @__PURE__ */ jsx36(HeaderIconCard_default, { item, gapLrg: true, parentMenu }) }, (_a2 = item == null ? void 0 : item.link) == null ? void 0 : _a2.title);
      })) }),
      /* @__PURE__ */ jsx36("div", { children: /* @__PURE__ */ jsx36(FeaturedArticle_default, { item: submenu == null ? void 0 : submenu.featured_article, parentMenu }) })
    ] }),
    /* @__PURE__ */ jsx36("div", { className: "w-full shrink-0 lg:w-[38%] lg:max-w-[30.9375rem]", children: /* @__PURE__ */ jsx36(FeaturedCard_default, { item: submenu == null ? void 0 : submenu.featured_card, parentMenu }) })
  ] });
}
var LearnSubmenu_default;
var init_LearnSubmenu = __esm({
  "src/components/global/header/LearnSubmenu/LearnSubmenu.tsx"() {
    init_HeaderIconCard();
    init_FeaturedCard();
    init_FeaturedArticle();
    LearnSubmenu_default = LearnSubmenu;
  }
});

// src/components/global/header/Mobile/MobileSubmenuHandler.tsx
import { jsx as jsx41, jsxs as jsxs28 } from "react/jsx-runtime";
function MobileSubmenuHandler({ menu, parentMenu, setShowMobileNav }) {
  return /* @__PURE__ */ jsxs28("div", { className: "pb-8 pt-4 md:pb-10", children: [
    (menu == null ? void 0 : menu.submenu_type) === "tabsMenu" && /* @__PURE__ */ jsx41(TabsSubmenu_default, { submenu: menu == null ? void 0 : menu.tabs_submenu, parentMenu }),
    (menu == null ? void 0 : menu.submenu_type) === "gridMenu" && /* @__PURE__ */ jsx41(GridSubmenu_default, { submenu: menu == null ? void 0 : menu.grid_submenu, parentMenu, setShowMobileNav }),
    (menu == null ? void 0 : menu.submenu_type) === "cardMenu" && /* @__PURE__ */ jsx41(CardSubmenu_default, { submenu: menu == null ? void 0 : menu.card_submenu, parentMenu }),
    (menu == null ? void 0 : menu.submenu_type) === "learnMenu" && /* @__PURE__ */ jsx41(LearnSubmenu_default, { submenu: menu == null ? void 0 : menu.learn_submenu, parentMenu })
  ] });
}
var MobileSubmenuHandler_default;
var init_MobileSubmenuHandler = __esm({
  "src/components/global/header/Mobile/MobileSubmenuHandler.tsx"() {
    init_TabsSubmenu();
    init_GridSubmenu();
    init_CardSubmenu();
    init_LearnSubmenu();
    MobileSubmenuHandler_default = MobileSubmenuHandler;
  }
});

// src/components/global/MobileNav.tsx
var MobileNav_exports = {};
__export(MobileNav_exports, {
  default: () => MobileNav
});
import { memo, useEffect as useEffect6 } from "react";
import Link12 from "next/link";
import { m as m14, LazyMotion as LazyMotion6, domAnimation as domAnimation6, AnimatePresence as AnimatePresence2 } from "framer-motion";
import clsx15 from "clsx";
import { Fragment as Fragment5, jsx as jsx42, jsxs as jsxs29 } from "react/jsx-runtime";
function MobileNav({ menu = [], button, showMobileNav, setShowMobileNav, selectedSubmenu, setSelectedSubmenu, hasBanner }) {
  const transitionSettings = {
    duration: 0.2,
    ease: "easeInOut"
  };
  const slide = {
    initial: {
      translateY: "-100%",
      transition: transitionSettings
    },
    animate: {
      translateY: 0,
      transition: transitionSettings
    },
    exit: {
      translateY: "-100%",
      transition: transitionSettings
    }
  };
  useEffect6(() => {
    document.body.style.overflow = showMobileNav ? "hidden" : "auto";
  }, [showMobileNav]);
  return /* @__PURE__ */ jsx42(LazyMotion6, { features: domAnimation6, children: /* @__PURE__ */ jsx42(AnimatePresence2, { children: showMobileNav ? /* @__PURE__ */ jsx42(
    m14.div,
    {
      variants: slide,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      className: "fixed inset-0 z-40 h-full overflow-y-auto bg-white text-navy lg:hidden",
      children: /* @__PURE__ */ jsxs29("div", { className: clsx15("container flex flex-col justify-between", hasBanner ? "pt-[125px]" : "pt-[100px]"), children: [
        /* @__PURE__ */ jsx42("div", { children: /* @__PURE__ */ jsx42("menu", { className: "grid divide-y divide-lightGrey border-t border-lightGrey", children: Array.isArray(menu) ? menu == null ? void 0 : menu.map((item, index) => /* @__PURE__ */ jsx42(
          m14.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: {
              x: 0,
              opacity: 1
            },
            transition: {
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.1
            },
            children: /* @__PURE__ */ jsx42(
              MemoizedMobileNavItem,
              {
                setShowMobileNav,
                item,
                selectedSubmenu,
                setSelectedSubmenu,
                index
              }
            )
          },
          `top-level-${index}`
        )) : null }) }),
        /* @__PURE__ */ jsx42(HeaderButtons_default, { isMobile: true, button, bgColor: "" })
      ] })
    },
    "mobile-nav"
  ) : null }) });
}
function MobileNavItem({ item, setShowMobileNav, selectedSubmenu, setSelectedSubmenu, index }) {
  var _a, _b, _c, _d, _e;
  const handleClick = () => {
    setShowMobileNav(false);
  };
  if (item == null ? void 0 : item.add_submenu) {
    return /* @__PURE__ */ jsxs29(Fragment5, { children: [
      /* @__PURE__ */ jsxs29(
        "button",
        {
          className: "flex w-full items-center justify-between py-6 text-[20px]",
          type: "button",
          "aria-label": `Open ${(_a = item == null ? void 0 : item.menu_item) == null ? void 0 : _a.title} menu`,
          onClick: () => setSelectedSubmenu(selectedSubmenu === index ? -1 : index),
          children: [
            /* @__PURE__ */ jsx42("span", { dangerouslySetInnerHTML: { __html: (_b = item == null ? void 0 : item.menu_item) == null ? void 0 : _b.title } }),
            /* @__PURE__ */ jsx42(
              "div",
              {
                className: `h-[1.125rem] w-[1.375rem] shrink-0 transition-transform duration-500 ${selectedSubmenu === index ? "rotate-180 text-blue" : "text-navy"}`,
                children: /* @__PURE__ */ jsx42(MobileChevron, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx42(AnimatePresence2, { mode: "wait", children: selectedSubmenu === index && /* @__PURE__ */ jsx42(
        m14.div,
        {
          initial: { opacity: 0, height: "0" },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: "0" },
          transition: { duration: 0.2, delay: 0.1, ease: "easeInOut" },
          children: /* @__PURE__ */ jsx42(MobileSubmenuHandler_default, { menu: item.submenu, parentMenu: item, setShowMobileNav })
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ jsx42(Link12, { href: cmsUrlToNextHref((_c = item == null ? void 0 : item.menu_item) == null ? void 0 : _c.url), target: (_d = item == null ? void 0 : item.menu_item) == null ? void 0 : _d.target, onClick: handleClick, className: "flex items-center justify-between py-6 text-[20px]", children: /* @__PURE__ */ jsx42("span", { dangerouslySetInnerHTML: { __html: (_e = item == null ? void 0 : item.menu_item) == null ? void 0 : _e.title } }) });
}
var MemoizedMobileNavItem;
var init_MobileNav = __esm({
  "src/components/global/MobileNav.tsx"() {
    init_cmsUrlToNextHref();
    init_Icons();
    init_MobileSubmenuHandler();
    init_HeaderButtons();
    MemoizedMobileNavItem = memo(MobileNavItem);
  }
});

// src/components/global/Footer/components/FeaturedLink.tsx
import clsx17 from "clsx";
import { useState as useState8 } from "react";
import { m as m16, LazyMotion as LazyMotion8, domAnimation as domAnimation8 } from "framer-motion";
import { jsx as jsx44, jsxs as jsxs31 } from "react/jsx-runtime";
function ExtendedRightArea() {
  return /* @__PURE__ */ jsxs31("svg", { width: "30", height: "72", viewBox: "0 0 30 72", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "flex-shrink-0", children: [
    /* @__PURE__ */ jsx44("path", { d: "M4.01758 0V72", stroke: "#F6F7F9", strokeWidth: "8" }),
    /* @__PURE__ */ jsx44("path", { d: "M12.0176 0V72", stroke: "#F6F7F9", strokeWidth: "6" }),
    /* @__PURE__ */ jsx44("path", { d: "M20.0176 0V72", stroke: "#F6F7F9", strokeWidth: "4" }),
    /* @__PURE__ */ jsx44("path", { d: "M28.0176 0V72", stroke: "#F6F7F9", strokeWidth: "2" })
  ] });
}
function FeaturedLink({ link, className, footer, hoverType = "arrow" }) {
  var _a, _b;
  const [isHovered, setIsHovered] = useState8(false);
  return /* @__PURE__ */ jsx44(LazyMotion8, { features: domAnimation8, children: /* @__PURE__ */ jsxs31("div", { className: clsx17("flex items-start", className), onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [
    /* @__PURE__ */ jsxs31(
      Link,
      {
        href: ((_a = link == null ? void 0 : link.link) == null ? void 0 : _a.url) || "#",
        target: getLinkTarget((_b = link == null ? void 0 : link.link) == null ? void 0 : _b.target),
        className: clsx17(
          "relative flex items-center gap-4 bg-lightGrey p-2 transition-transform duration-200 ease-in-out",
          hoverType === "extends" ? `${isHovered ? "rounded-l" : "rounded"}` : "rounded",
          footer && "w-full"
        ),
        onClick: () => {
          var _a2;
          trackFooterMenuItemClick((link == null ? void 0 : link.text) || ((_a2 = link == null ? void 0 : link.link) == null ? void 0 : _a2.title));
        },
        children: [
          hoverType === "arrow" && /* @__PURE__ */ jsx44(m16.div, { variants: arrowAnimation, initial: "hidden", animate: isHovered ? "visible" : "hidden", className: "absolute right-3 top-3", children: /* @__PURE__ */ jsx44(FooterFeaturedLinksArrow, {}) }),
          /* @__PURE__ */ jsx44(WpImage, { image: link == null ? void 0 : link.image, className: "h-14 w-14 overflow-hidden rounded-[3px] object-cover object-left" }),
          /* @__PURE__ */ jsx44("p", { className: "text-14 max-w-[70%] font-medium text-navy/80", dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.text } })
        ]
      }
    ),
    hoverType === "extends" && /* @__PURE__ */ jsx44("div", { className: clsx17("transition-transform duration-300 ease-in-out", isHovered ? "translate-x-0" : "translate-x-[-100%]"), children: /* @__PURE__ */ jsx44(ExtendedRightArea, {}) })
  ] }) });
}
var arrowAnimation, FeaturedLink_default;
var init_FeaturedLink = __esm({
  "src/components/global/Footer/components/FeaturedLink.tsx"() {
    init_Link();
    init_Icons();
    init_Wp();
    init_links();
    init_trackEvent();
    arrowAnimation = {
      hidden: {
        opacity: 0,
        x: -5,
        y: 5,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut"
        }
      }
    };
    FeaturedLink_default = FeaturedLink;
  }
});

// src/components/global/Portal.tsx
import { useRef as useRef5, useEffect as useEffect9 } from "react";
import { createPortal } from "react-dom";
var Portal, Portal_default;
var init_Portal = __esm({
  "src/components/global/Portal.tsx"() {
    Portal = ({ rootId, children, className = "", style = "" }) => {
      const target = useRef5(document.getElementById(rootId));
      useEffect9(
        () => () => {
          window.requestAnimationFrame(() => {
            if (target.current.childNodes.length === 0) {
              target.current.remove();
              target.current = null;
            }
          });
        },
        [rootId]
      );
      if (!target.current) {
        target.current = document.createElement("div");
        target.current.setAttribute("class", className);
        target.current.setAttribute("id", rootId);
        target.current.setAttribute("style", style);
        document.body.appendChild(target.current);
      }
      return createPortal(children, target.current);
    };
    Portal_default = Portal;
  }
});

// src/components/global/LightBoxOverlay.tsx
import { useEffect as useEffect10 } from "react";
import clsx20 from "clsx";
import { jsx as jsx49, jsxs as jsxs36 } from "react/jsx-runtime";
function LightboxOverlay({
  children,
  onClick = () => {
  },
  contentVerticalPosition = "top",
  hideCloseButton = false,
  disableBlur = false,
  childrenContainerClassName = ""
}) {
  useEffect10(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  useEffect10(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClick == null ? void 0 : onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);
  const itemVerticalPositionMap = {
    top: "items-start",
    center: "items-center"
  };
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      className: `lightbox-overlay fixed inset-0 left-0 top-0 flex min-h-[100dvh] justify-center overflow-y-auto p-[15px] ${itemVerticalPositionMap[contentVerticalPosition]}`,
      style: {
        // top: window.scrollY || 0,
        zIndex: 9999
        // height: height + 15 || "100dvh"
      },
      children: [
        !hideCloseButton && /* @__PURE__ */ jsx49(
          "button",
          {
            type: "button",
            className: "absolute right-4 top-4 z-10 text-white",
            onClick: () => {
              onClick == null ? void 0 : onClick();
            },
            children: /* @__PURE__ */ jsx49(CloseIcon, {})
          }
        ),
        /* @__PURE__ */ jsx49(
          "button",
          {
            type: "button",
            "aria-label": "Close",
            className: clsx20("absolute left-0 top-0 h-full w-full bg-black/40 bg-opacity-90", !disableBlur && "backdrop-blur-sm"),
            onClick: () => {
              onClick == null ? void 0 : onClick();
            }
          }
        ),
        /* @__PURE__ */ jsx49(
          "div",
          {
            className: clsx20(childrenContainerClassName, "max-h-[80dvh] overflow-auto md:max-h-[95dvh]"),
            children
          }
        )
      ]
    }
  );
}
var LightBoxOverlay_default;
var init_LightBoxOverlay = __esm({
  "src/components/global/LightBoxOverlay.tsx"() {
    init_Icons();
    LightBoxOverlay_default = LightboxOverlay;
  }
});

// src/components/flexible/content/components/TwoColContent.tsx
var TwoColContent_exports = {};
__export(TwoColContent_exports, {
  default: () => TwoColContent_default
});
import clsx21 from "clsx";
import { useWindowSize } from "react-use";
import { jsx as jsx51, jsxs as jsxs38 } from "react/jsx-runtime";
function TwoColContent(props) {
  var _a, _b, _c, _d, _e;
  const { content, media, options } = props;
  const { add_featured_link, background_color } = options || {};
  const hasBackgroundColor = options.background_color !== "none";
  const { width: windowWidth } = useWindowSize();
  const containerMapKey = hasBackgroundColor ? "large" : options.container_size;
  const hasMobileAsset = ((_a = Object.keys(media == null ? void 0 : media.asset_mobile)) == null ? void 0 : _a.length) > 1;
  const noFullWidthOnMobile = hasBackgroundColor;
  return /* @__PURE__ */ jsx51("div", { className: "two-col-content", children: /* @__PURE__ */ jsx51("div", { className: clsx21(containerMap == null ? void 0 : containerMap[containerMapKey]), children: /* @__PURE__ */ jsxs38(
    "div",
    {
      className: clsx21(
        hasBackgroundColor ? "flex-col pt-16" : "flex-col-reverse",
        "flex items-center gap-8 md:gap-10 lg:gap-24",
        gapMap == null ? void 0 : gapMap[options == null ? void 0 : options.gap],
        hasBackgroundColor && `${getBackgroundAndTextColor(background_color)} -ml-5 w-[100vw] overflow-hidden pb-16 sm:ml-0 sm:w-fit sm:rounded-xl md:py-[38px] md:pl-20 md:pr-0 lg:pl-[109px] xl:py-0`,
        assetPositionMap == null ? void 0 : assetPositionMap[options == null ? void 0 : options.asset_position],
        (options == null ? void 0 : options.align_asset_to_edge) && (options == null ? void 0 : options.asset_position) === "right" && "justify-end",
        (options == null ? void 0 : options.align_asset_to_edge) && (options == null ? void 0 : options.asset_position) === "left" && "justify-start"
      ),
      children: [
        /* @__PURE__ */ jsxs38("div", { className: clsx21("flex flex-col", hasBackgroundColor ? "sm:pr-[28px]" : "sm:pl-0", (options == null ? void 0 : options.align_asset_to_edge) && "max-w-[434px]"), children: [
          !!(content == null ? void 0 : content.heading) && /* @__PURE__ */ jsx51(
            "h2",
            {
              dangerouslySetInnerHTML: {
                __html: getSplitBreakText({
                  text: content.heading,
                  breakAtAll: true
                })
              },
              className: clsx21(
                getHeadingFontSize((_b = options == null ? void 0 : options.heading_font_size) == null ? void 0 : _b.text_size),
                "mb-4 !font-normal !tracking-[-0.025em] md:mb-5",
                hasBackgroundColor && "text-center md:text-left"
              )
            }
          ),
          !!(content == null ? void 0 : content.content) && /* @__PURE__ */ jsx51(
            "div",
            {
              dangerouslySetInnerHTML: { __html: content.content },
              className: clsx21("text-18 prose font-body opacity-80", hasBackgroundColor && "px-5 text-center md:px-0 md:text-left")
            }
          ),
          ((_d = (_c = content == null ? void 0 : content.links) == null ? void 0 : _c.links) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsx51(
            LinkGroup_default,
            {
              className: clsx21("mt-6 md:mt-8 lg:mt-10", hasBackgroundColor && "mx-auto px-5 md:mx-0 md:px-0"),
              links: (_e = content.links) == null ? void 0 : _e.links,
              noFullWidthOnMobile
            }
          ),
          add_featured_link && (content == null ? void 0 : content.featured_link) && /* @__PURE__ */ jsx51(FeaturedLink_default, { link: content == null ? void 0 : content.featured_link, className: "mt-8 sm:mt-10 xl:mt-20", hoverType: "extends" })
        ] }),
        !!media.asset && /* @__PURE__ */ jsx51(
          "div",
          __spreadProps(__spreadValues({
            className: clsx21(
              "w-full flex-shrink-0 overflow-hidden rounded-lg sm:max-w-[60%] md:max-w-[50%]",
              (options == null ? void 0 : options.align_asset_to_edge) && (options == null ? void 0 : options.asset_position) === "right" && "md:-mr-20 1441px:-mr-0",
              (options == null ? void 0 : options.align_asset_to_edge) && (options == null ? void 0 : options.asset_position) === "left" && "md:-ml-20 1441px:-ml-0"
            )
          }, windowWidth > 1280 && {
            style: {
              maxWidth: (options == null ? void 0 : options.align_asset_to_edge) ? "700px" : options.asset_max_width
            }
          }), {
            children: windowWidth < 768 && hasMobileAsset ? /* @__PURE__ */ jsx51(Asset, __spreadValues({}, media.asset_mobile)) : /* @__PURE__ */ jsx51(Asset, __spreadValues({}, media.asset))
          })
        )
      ]
    }
  ) }) });
}
var assetPositionMap, getHeadingFontSize, gapMap, containerMap, TwoColContent_default;
var init_TwoColContent = __esm({
  "src/components/flexible/content/components/TwoColContent.tsx"() {
    init_ColorHelpers();
    init_LinkGroup();
    init_Asset();
    init_FeaturedLink();
    init_text();
    assetPositionMap = {
      left: "md:flex-row-reverse",
      right: "md:flex-row"
    };
    getHeadingFontSize = (text_size) => {
      if (text_size === "default") {
        return "text-h4 is-smaller-mob";
      }
      return `text-${text_size}`;
    };
    gapMap = {
      127: "xl:gap-[127px]",
      65: "xl:gap-[65px]",
      50: "xl:gap-[50px]"
    };
    containerMap = {
      default: "container container--extra-small",
      large: "container"
    };
    TwoColContent_default = TwoColContent;
  }
});

// src/hooks/usePageVisibility.js
import { useEffect as useEffect12, useState as useState11 } from "react";
var usePageVisibility;
var init_usePageVisibility = __esm({
  "src/hooks/usePageVisibility.js"() {
    usePageVisibility = () => {
      const [isVisible, setIsVisible] = useState11(typeof window !== "undefined" ? !window.document.hidden : false);
      const onVisibilityChange = () => setIsVisible(!window.document.hidden);
      useEffect12(() => {
        document.addEventListener("visibilitychange", onVisibilityChange, false);
        return () => {
          document.removeEventListener("visibilitychange", onVisibilityChange);
        };
      });
      return { isVisible };
    };
  }
});

// src/components/flexible/content/components/RotatingHeading.tsx
var RotatingHeading_exports = {};
__export(RotatingHeading_exports, {
  default: () => RotatingHeading_default
});
import { useState as useState12, useEffect as useEffect13, useRef as useRef6 } from "react";
import { m as m19, AnimatePresence as AnimatePresence4, LayoutGroup, LazyMotion as LazyMotion11, domAnimation as domAnimation11 } from "framer-motion";
import clsx22 from "clsx";
import { useWindowSize as useWindowSize2 } from "react-use";
import { jsx as jsx52, jsxs as jsxs39 } from "react/jsx-runtime";
function RotatingHeading(props) {
  var _a, _b, _c, _d, _e;
  const {
    subheading,
    links,
    prepend_text,
    rotating_text_values,
    append_text,
    tag_type = "h2",
    rotating_text_style,
    text_size = "default",
    textClassNames = "",
    rotating_text_color = "blue",
    max_width = ""
  } = props;
  const [activeIndex, setActiveIndex] = useState12(0);
  const { width: windowWidth } = useWindowSize2();
  const interval = useRef6(null);
  const { isVisible } = usePageVisibility();
  useEffect13(() => {
    interval.current = setInterval(() => {
      if (!isVisible) return;
      setActiveIndex((prev) => (prev + 1) % (rotating_text_values == null ? void 0 : rotating_text_values.length));
    }, ROTATING_INTERVAL);
    return () => {
      clearInterval(interval.current);
    };
  }, [interval, isVisible, rotating_text_values == null ? void 0 : rotating_text_values.length]);
  const prependText = prepend_text ? prepend_text.split(" ") : [];
  const appendText = append_text ? append_text.split(" ") : [];
  const TagType = tag_type || "h2";
  const isMobile = windowWidth < 768;
  const textSize = text_size === "default" || isMobile ? "" : `text-${text_size}`;
  return /* @__PURE__ */ jsx52("div", { className: "rotating-heading", children: /* @__PURE__ */ jsxs39("div", { className: "flex flex-col", children: [
    subheading && /* @__PURE__ */ jsx52("p", { className: "text-15 mx-auto mb-4 font-[450] opacity-80", dangerouslySetInnerHTML: { __html: subheading } }),
    /* @__PURE__ */ jsx52(LazyMotion11, { features: domAnimation11, children: /* @__PURE__ */ jsx52(
      TagType,
      {
        className: clsx22("text-h2 mx-auto text-center !leading-[1.1] !tracking-[-0.02em]", textSize),
        style: max_width ? { maxWidth: max_width } : {},
        children: /* @__PURE__ */ jsxs39(LayoutGroup, { children: [
          (prependText == null ? void 0 : prependText.length) > 0 && (prependText == null ? void 0 : prependText.map((word, i) => /* @__PURE__ */ jsx52(
            m19.span,
            {
              layout: true,
              className: clsx22("z-[20]", rotating_text_style === "standalone" && "mx-auto", rotating_text_style === "inline" && "inline-block"),
              children: /* @__PURE__ */ jsx52(m19.span, { layout: true, style: { display: "inline-block", willChange: "transform" }, className: clsx22(textClassNames), children: `${word}\xA0` })
            },
            word
          ))),
          (prependText == null ? void 0 : prependText.length) > 0 && /* @__PURE__ */ jsx52("br", {}),
          /* @__PURE__ */ jsx52(
            m19.div,
            {
              className: clsx22(
                "z-[10] w-fit",
                rotating_text_style === "standalone" && "mx-auto",
                rotating_text_style === "inline" && "mx-auto flex justify-center md:inline-block"
              ),
              children: /* @__PURE__ */ jsx52(
                m19.span,
                {
                  className: "inline-block",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: {
                    duration: 0.4,
                    delay: 0.5,
                    opacity: { duration: 0.6 },
                    skewX: { type: "spring", bounce: 0.4, delay: 0.7 }
                  },
                  children: /* @__PURE__ */ jsx52(AnimatePresence4, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx52(
                    m19.span,
                    {
                      variants: rotatingTextAnimation,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      layout: true,
                      className: clsx22("inline-block", getTextColor(rotating_text_color), textClassNames),
                      children: (_a = rotating_text_values == null ? void 0 : rotating_text_values[activeIndex]) == null ? void 0 : _a.text
                    },
                    activeIndex
                  ) })
                }
              )
            }
          ),
          (appendText == null ? void 0 : appendText.length) > 0 && (appendText == null ? void 0 : appendText.map((word, i) => /* @__PURE__ */ jsx52(
            m19.span,
            {
              layout: true,
              className: clsx22("z-[20]", rotating_text_style === "standalone" && "mx-auto", rotating_text_style === "inline" && "inline-block"),
              children: /* @__PURE__ */ jsx52(m19.span, { layout: true, style: { display: "inline-block", willChange: "transform" }, className: clsx22(textClassNames), children: `\xA0${word}` })
            },
            word
          )))
        ] }, `${prepend_text}-${rotating_text_values == null ? void 0 : rotating_text_values[0].text}-${append_text}`)
      }
    ) }),
    (links == null ? void 0 : links.length) > 0 && ((_e = (_d = (_c = (_b = links[0]) == null ? void 0 : _b.link) == null ? void 0 : _c.link) == null ? void 0 : _d.url) == null ? void 0 : _e.length) > 0 && /* @__PURE__ */ jsx52(LinkGroup_default, { centered: true, links, className: "mt-8 md:mt-12" })
  ] }) });
}
var ROTATING_INTERVAL, rotatingTextAnimation, RotatingHeading_default;
var init_RotatingHeading = __esm({
  "src/components/flexible/content/components/RotatingHeading.tsx"() {
    init_usePageVisibility();
    init_ColorHelpers();
    init_LinkGroup();
    ROTATING_INTERVAL = 4e3;
    rotatingTextAnimation = {
      initial: {
        // y: "60%",
        opacity: 0
      },
      animate: {
        // y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0,
          opacity: { duration: 0.6, delay: 0.1 }
        }
      },
      exit: {
        // y: "-100%",
        opacity: 0,
        transition: {
          opacity: {
            duration: 0.3
          },
          duration: 0.4
        }
      }
    };
    RotatingHeading_default = RotatingHeading;
  }
});

// src/hooks/useWindowSize.tsx
import { useState as useState13, useEffect as useEffect14 } from "react";
function useWindowSize3() {
  const [windowSize, setWindowSize] = useState13({
    width: void 0,
    height: void 0
  });
  useEffect14(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
var init_useWindowSize = __esm({
  "src/hooks/useWindowSize.tsx"() {
  }
});

// src/components/flexible/content/components/FourColumnThumbnailGrid/GridCard.tsx
import { useState as useState14 } from "react";
import Link14 from "next/link";
import { jsx as jsx53, jsxs as jsxs40 } from "react/jsx-runtime";
function GridCard(_a) {
  var _b = _a, { item } = _b, other = __objRest(_b, ["item"]);
  var _a2, _b2, _c, _d;
  const [isHovered, setIsHovered] = useState14(false);
  const link = (item == null ? void 0 : item.link) || {};
  let urlPath = item.link.url.trim().replace(/^[a-zA-Z]{3,5}:\/{2}[a-zA-Z0-9_.:-]+\//, "");
  if (urlPath.slice(0, 1) !== "/" && urlPath.slice(0, 1) !== "#") {
    urlPath = `/${urlPath}`;
  }
  return /* @__PURE__ */ jsxs40(
    Link14,
    {
      href: ((_b2 = item == null ? void 0 : item.link) == null ? void 0 : _b2.url) || "#",
      target: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.target,
      className: "group w-[17.0625rem] shrink-0 snap-start md:w-[18.875rem] lg:w-auto",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: (e) => {
        trackLinkClickProduct(__spreadProps(__spreadValues({}, link), { url: urlPath }));
        if (other.onClick) other.onClick(e);
      },
      children: [
        /* @__PURE__ */ jsx53("div", { className: "relative mb-8 aspect-[151/193]", children: /* @__PURE__ */ jsx53(Asset, __spreadProps(__spreadValues({}, item.media), { isHovered })) }),
        /* @__PURE__ */ jsxs40("div", { className: "mb-3 flex items-center transition-transform duration-300 lg:mb-5 lg:-translate-x-8 lg:space-x-3 lg:group-hover:translate-x-0", children: [
          /* @__PURE__ */ jsx53("div", { className: "z-10 hidden h-5 w-5 rotate-45 scale-0 rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-[1] lg:flex", children: /* @__PURE__ */ jsx53(CircleArrow, {}) }),
          /* @__PURE__ */ jsx53("h3", { className: "text-22 is-heading font-medium", dangerouslySetInnerHTML: { __html: (_d = item == null ? void 0 : item.link) == null ? void 0 : _d.title } })
        ] }),
        /* @__PURE__ */ jsx53("p", { className: "text-16 max-w-[18.4rem] font-body opacity-80", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
      ]
    },
    (_a2 = item == null ? void 0 : item.link) == null ? void 0 : _a2.title
  );
}
var GridCard_default;
var init_GridCard = __esm({
  "src/components/flexible/content/components/FourColumnThumbnailGrid/GridCard.tsx"() {
    init_Asset();
    init_Icons();
    init_trackEvent();
    GridCard_default = GridCard;
  }
});

// src/components/flexible/content/components/FourColumnThumbnailGrid.tsx
var FourColumnThumbnailGrid_exports = {};
__export(FourColumnThumbnailGrid_exports, {
  default: () => FourColumnThumbnailGrid_default
});
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { jsx as jsx54 } from "react/jsx-runtime";
function FourColumnThumbnailGrid({ grid }) {
  const { width: windowWidth } = useWindowSize3();
  const isDesktop = windowWidth >= 1024;
  if (isDesktop) {
    return /* @__PURE__ */ jsx54("div", { className: "grid w-full grid-cols-4 gap-6", children: grid == null ? void 0 : grid.map((item) => {
      var _a;
      return /* @__PURE__ */ jsx54(GridCard_default, { item }, (_a = item == null ? void 0 : item.link) == null ? void 0 : _a.title);
    }) });
  }
  return /* @__PURE__ */ jsx54(
    Swiper,
    {
      direction: "horizontal",
      spaceBetween: 24,
      slidesPerView: 1.25,
      breakpoints: {
        540: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        }
      },
      className: "!mx-0 !overflow-visible will-change-transform",
      children: (grid == null ? void 0 : grid.length) > 0 && (grid == null ? void 0 : grid.map((item) => {
        var _a, _b;
        return /* @__PURE__ */ jsx54(SwiperSlide, { children: /* @__PURE__ */ jsx54(GridCard_default, { item }, (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.title) }, (_a = item == null ? void 0 : item.link) == null ? void 0 : _a.title);
      }))
    }
  );
}
var FourColumnThumbnailGrid_default;
var init_FourColumnThumbnailGrid = __esm({
  "src/components/flexible/content/components/FourColumnThumbnailGrid.tsx"() {
    init_useWindowSize();
    init_GridCard();
    FourColumnThumbnailGrid_default = FourColumnThumbnailGrid;
  }
});

// src/hooks/useAutoTransition.js
import { useEffect as useEffect15 } from "react";
import { useInView as useInView4 } from "framer-motion";
var useAutoTransition, useAutoTransition_default;
var init_useAutoTransition = __esm({
  "src/hooks/useAutoTransition.js"() {
    init_usePageVisibility();
    useAutoTransition = ({ ref, max, interval, active, setter, controls = null }) => {
      const isVisible = usePageVisibility();
      const isInView = useInView4(ref, { once: false, amount: 0.4 });
      useEffect15(() => {
        const updateNumber = () => {
          setter((prevNumber) => (prevNumber + 1) % max);
        };
        let timeout;
        if (isInView && isVisible) {
          timeout = setTimeout(updateNumber, interval);
          if (controls) {
            controls.start({
              transform: "translateX(0)",
              transition: { duration: interval / 1e3, ease: "linear" }
            });
          }
        } else if (controls) {
          controls.stop();
        }
        return () => clearTimeout(timeout);
      }, [isInView, isVisible, active]);
    };
    useAutoTransition_default = useAutoTransition;
  }
});

// src/components/flexible/content/components/MediaAndStats.tsx
var MediaAndStats_exports = {};
__export(MediaAndStats_exports, {
  default: () => MediaAndStats_default
});
import { useState as useState15, useRef as useRef7 } from "react";
import { useInView as useInView5, AnimatePresence as AnimatePresence5, m as m20, LazyMotion as LazyMotion12, domAnimation as domAnimation12 } from "framer-motion";
import { jsx as jsx55, jsxs as jsxs41 } from "react/jsx-runtime";
function MediaAndStats({ large_media_item, stats, small_media_item }) {
  var _a, _b, _c, _d, _e, _f;
  const ref = useRef7(null);
  const isInView = useInView5(ref, { once: true, amount: 0.4 });
  const [activeStat, setActiveStat] = useState15(0);
  useAutoTransition_default({
    ref,
    max: stats == null ? void 0 : stats.length,
    interval: 4e3,
    active: activeStat,
    setter: setActiveStat
  });
  const ease = [0.68, -0.2, 0.15, 0.98];
  const initial = {
    opacity: 0,
    transform: "translateY(-2rem)"
  };
  const anIn = {
    opacity: 1,
    transform: "translateY(0rem)"
  };
  const out = {
    opacity: 0,
    transform: "translateY(2rem)"
  };
  return /* @__PURE__ */ jsxs41("div", { className: "relative grid gap-y-3 overflow-hidden text-center md:grid-cols-12 lg:gap-x-6 lg:overflow-visible", children: [
    /* @__PURE__ */ jsx55("div", { className: "relative aspect-[130/73] overflow-hidden rounded-md md:col-span-12 lg:col-span-5", children: /* @__PURE__ */ jsx55(Asset, __spreadValues({}, large_media_item)) }),
    /* @__PURE__ */ jsxs41("div", { className: "grid grid-cols-2 gap-x-3 md:col-span-12 md:flex md:gap-x-0 md:space-x-3 lg:col-span-7 lg:space-x-6", children: [
      /* @__PURE__ */ jsx55(LazyMotion12, { features: domAnimation12, children: /* @__PURE__ */ jsx55("div", { ref, className: "flex shrink-0 rounded-md bg-lightBlue p-3 text-left text-navy md:min-w-[16.25rem] md:p-5", children: /* @__PURE__ */ jsx55(AnimatePresence5, { mode: "popLayout", initial: false, children: /* @__PURE__ */ jsxs41(
        m20.div,
        {
          className: "flex h-full w-full flex-col",
          initial,
          animate: anIn,
          exit: out,
          transition: {
            duration: 1,
            ease,
            delay: 0
          },
          children: [
            /* @__PURE__ */ jsxs41("div", { className: "text-70 relative mb-6 py-4 lg:py-8", children: [
              /* @__PURE__ */ jsx55("span", { className: "text-70 relative z-10 bg-lightBlue", dangerouslySetInnerHTML: { __html: (_a = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _a.stat } }),
              /* @__PURE__ */ jsx55(
                "span",
                {
                  className: "stat-stroke absolute left-0 top-0 text-lightBlue",
                  dangerouslySetInnerHTML: { __html: ((_b = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _b.old_stat) || ((_c = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _c.stat) }
                }
              ),
              /* @__PURE__ */ jsx55(
                "span",
                {
                  className: "stat-stroke absolute bottom-0 left-0 text-lightBlue",
                  dangerouslySetInnerHTML: { __html: ((_d = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _d.old_stat) || ((_e = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _e.stat) }
                }
              )
            ] }),
            /* @__PURE__ */ jsx55("p", { className: "text-20 mt-auto", dangerouslySetInnerHTML: { __html: (_f = stats == null ? void 0 : stats[activeStat]) == null ? void 0 : _f.caption } })
          ]
        },
        `stat-${activeStat}-${Math.floor(Math.random() * 100) + 1}`
      ) }) }) }),
      /* @__PURE__ */ jsx55("div", { className: "relative aspect-[60/73] shrink-0 overflow-hidden rounded-md", children: /* @__PURE__ */ jsx55(Asset, __spreadValues({}, small_media_item)) }),
      /* @__PURE__ */ jsx55("div", { className: "hidden h-full lg:!-ml-4 lg:block", children: /* @__PURE__ */ jsx55(RightLines, { height: "100%", isInView }) }),
      /* @__PURE__ */ jsx55("div", { className: "hidden w-full min-w-[295px] md:block lg:!-ml-4 lg:hidden", children: /* @__PURE__ */ jsx55(RightLines, { width: "100%", isInView }) })
    ] })
  ] });
}
function RightLines({ height = null, width = null, isInView = false }) {
  return /* @__PURE__ */ jsx55(LazyMotion12, { features: domAnimation12, children: /* @__PURE__ */ jsxs41(
    "svg",
    {
      style: {
        transformBox: "fill-box"
      },
      width,
      height,
      viewBox: "0 0 295 292",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs41(
          m20.g,
          {
            style: {
              transformBox: "fill-box",
              transformOrigin: "right"
            },
            initial: { scaleX: 0 },
            animate: {
              scaleX: isInView ? 1 : 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut"
              },
              transformOrigin: "right"
            },
            children: [
              /* @__PURE__ */ jsx55("path", { d: "M292.477 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "5.36158" }),
              /* @__PURE__ */ jsx55("path", { d: "M277.058 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "5.77401" }),
              /* @__PURE__ */ jsx55("path", { d: "M261.639 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "6.18644" }),
              /* @__PURE__ */ jsx55("path", { d: "M246.219 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "6.59887" }),
              /* @__PURE__ */ jsx55("path", { d: "M230.8 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "7.0113" }),
              /* @__PURE__ */ jsx55("path", { d: "M215.381 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "7.42373" }),
              /* @__PURE__ */ jsx55("path", { d: "M199.961 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "7.83616" }),
              /* @__PURE__ */ jsx55("path", { d: "M184.542 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "8.24859" }),
              /* @__PURE__ */ jsx55("path", { d: "M169.123 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "8.66102" }),
              /* @__PURE__ */ jsx55("path", { d: "M153.703 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "9.07345" }),
              /* @__PURE__ */ jsx55("path", { d: "M138.284 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "9.48588" }),
              /* @__PURE__ */ jsx55("path", { d: "M122.865 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "9.8983" }),
              /* @__PURE__ */ jsx55("path", { d: "M107.445 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "10.3107" }),
              /* @__PURE__ */ jsx55("path", { d: "M92.0259 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "10.7232" }),
              /* @__PURE__ */ jsx55("path", { d: "M76.6065 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "11.1356" }),
              /* @__PURE__ */ jsx55("path", { d: "M61.1871 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "11.548" }),
              /* @__PURE__ */ jsx55("path", { d: "M45.7678 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "11.9605" }),
              /* @__PURE__ */ jsx55("path", { d: "M30.3485 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "12.3729" }),
              /* @__PURE__ */ jsx55("path", { d: "M14.9291 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "12.7853" }),
              /* @__PURE__ */ jsx55("path", { d: "M-0.490234 183.5V-0.500006", stroke: "#95ECFD", strokeWidth: "13.1977" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs41(
          m20.g,
          {
            style: {
              transformBox: "fill-box"
            },
            initial: { scaleX: 0 },
            animate: {
              scaleX: isInView ? 1 : 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut"
              },
              transformOrigin: "left"
            },
            children: [
              /* @__PURE__ */ jsx55("path", { d: "M15.0793 292.032V114.798", stroke: "#95ECFD", strokeWidth: "0.824859" }),
              /* @__PURE__ */ jsx55("path", { d: "M30.5097 292.032V114.798", stroke: "#95ECFD", strokeWidth: "1.23729" }),
              /* @__PURE__ */ jsx55("path", { d: "M45.9401 292.032V114.798", stroke: "#95ECFD", strokeWidth: "1.64972" }),
              /* @__PURE__ */ jsx55("path", { d: "M61.3705 292.032V114.798", stroke: "#95ECFD", strokeWidth: "2.06215" }),
              /* @__PURE__ */ jsx55("path", { d: "M76.8009 292.032V114.798", stroke: "#95ECFD", strokeWidth: "2.47458" }),
              /* @__PURE__ */ jsx55("path", { d: "M92.2313 292.032V114.798", stroke: "#95ECFD", strokeWidth: "2.88701" }),
              /* @__PURE__ */ jsx55("path", { d: "M107.662 292.032V114.798", stroke: "#95ECFD", strokeWidth: "3.29943" }),
              /* @__PURE__ */ jsx55("path", { d: "M123.092 292.032V114.798", stroke: "#95ECFD", strokeWidth: "3.71186" }),
              /* @__PURE__ */ jsx55("path", { d: "M138.522 292.032V114.798", stroke: "#95ECFD", strokeWidth: "4.12429" }),
              /* @__PURE__ */ jsx55("path", { d: "M153.953 292.032V114.798", stroke: "#95ECFD", strokeWidth: "4.53672" }),
              /* @__PURE__ */ jsx55("path", { d: "M169.383 292.032V114.798", stroke: "#95ECFD", strokeWidth: "4.94915" }),
              /* @__PURE__ */ jsx55("path", { d: "M184.813 292.032V114.798", stroke: "#95ECFD", strokeWidth: "5.36158" }),
              /* @__PURE__ */ jsx55("path", { d: "M200.244 292.032V114.798", stroke: "#95ECFD", strokeWidth: "5.77401" }),
              /* @__PURE__ */ jsx55("path", { d: "M215.674 292.032V114.798", stroke: "#95ECFD", strokeWidth: "6.18644" }),
              /* @__PURE__ */ jsx55("path", { d: "M231.105 292.032V114.798", stroke: "#95ECFD", strokeWidth: "6.59887" }),
              /* @__PURE__ */ jsx55("path", { d: "M246.535 292.032V114.798", stroke: "#95ECFD", strokeWidth: "7.0113" }),
              /* @__PURE__ */ jsx55("path", { d: "M261.965 292.032V114.798", stroke: "#95ECFD", strokeWidth: "7.42373" }),
              /* @__PURE__ */ jsx55("path", { d: "M277.396 292.032V114.798", stroke: "#95ECFD", strokeWidth: "7.83616" }),
              /* @__PURE__ */ jsx55("path", { d: "M292.826 292.032V114.798", stroke: "#95ECFD", strokeWidth: "8.24859" })
            ]
          }
        )
      ]
    }
  ) });
}
var MediaAndStats_default;
var init_MediaAndStats = __esm({
  "src/components/flexible/content/components/MediaAndStats.tsx"() {
    init_Asset();
    init_useAutoTransition();
    MediaAndStats_default = MediaAndStats;
  }
});

// src/components/flexible/content/components/mosaicContent/MosaicDesktop.tsx
import { LazyMotion as LazyMotion13, m as m21, domAnimation as domAnimation13 } from "framer-motion";
import { jsx as jsx56, jsxs as jsxs42 } from "react/jsx-runtime";
function MosaicDesktop({ grid = [] }) {
  const initial = {
    transform: "scale(0.8)"
  };
  const animate = {
    transform: "scale(1)"
  };
  const transition = {
    type: "spring",
    stiffness: 180,
    damping: 22
  };
  return /* @__PURE__ */ jsx56(LazyMotion13, { features: domAnimation13, children: /* @__PURE__ */ jsxs42("div", { className: "absolute hidden gap-x-4 lg:inset-x-[-13.625rem] lg:bottom-[-9rem] lg:top-[-2rem] lg:grid lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxs42("div", { className: "lg:col-span-4 lg:col-start-2 lg:space-y-4", children: [
      /* @__PURE__ */ jsx56(
        m21.div,
        {
          className: "relative w-full rounded-lg bg-white/20 lg:aspect-[13/9] lg:max-w-[17.0625rem]",
          initial,
          whileInView: animate,
          viewport: { once: true },
          transition: { transition },
          children: grid[0] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[0].media)) : null
        }
      ),
      /* @__PURE__ */ jsx56(
        m21.div,
        {
          className: "relative aspect-[163/129] w-full max-w-[20.375rem] rounded-lg bg-white/20",
          initial,
          whileInView: animate,
          viewport: { once: true },
          transition: { transition, delay: 0.1 },
          children: grid[1] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[1].media)) : null
        }
      ),
      /* @__PURE__ */ jsx56(
        m21.div,
        {
          className: "relative ml-auto aspect-[99/52] w-full max-w-[30.9375rem] rounded-lg bg-white/20",
          initial,
          whileInView: animate,
          viewport: { once: true },
          transition: { transition, delay: 0.2 },
          children: grid[2] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[2].media)) : null
        }
      )
    ] }),
    /* @__PURE__ */ jsx56("div", { className: "flex items-end lg:col-span-3", children: /* @__PURE__ */ jsx56(
      m21.div,
      {
        className: "relative aspect-[81/70] w-full max-w-[26rem] rounded-lg bg-white/20",
        initial,
        whileInView: animate,
        viewport: { once: true },
        transition: { transition, delay: 0.3 },
        children: grid[3] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[3].media)) : null
      }
    ) }),
    /* @__PURE__ */ jsxs42("div", { className: "lg:col-span-4 lg:space-y-4", children: [
      /* @__PURE__ */ jsx56(
        m21.div,
        {
          className: "relative ml-auto aspect-[99/71] w-full max-w-[30.9375rem] rounded-lg bg-white/20",
          initial,
          whileInView: animate,
          viewport: { once: true },
          transition: { transition, delay: 0.4 },
          children: grid[4] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[4].media)) : null
        }
      ),
      /* @__PURE__ */ jsx56(
        m21.div,
        {
          className: "relative aspect-[8/5] w-full max-w-[35rem] rounded-lg bg-white/20",
          initial,
          whileInView: animate,
          viewport: { once: true },
          transition: { transition, delay: 0.5 },
          children: grid[5] ? /* @__PURE__ */ jsx56(Asset, __spreadValues({ fill: true }, grid[5].media)) : null
        }
      )
    ] })
  ] }) });
}
var MosaicDesktop_default;
var init_MosaicDesktop = __esm({
  "src/components/flexible/content/components/mosaicContent/MosaicDesktop.tsx"() {
    init_Asset();
    MosaicDesktop_default = MosaicDesktop;
  }
});

// src/components/flexible/content/components/mosaicContent/MosaicMarquee.tsx
import Marquee from "react-fast-marquee";
import { jsx as jsx57, jsxs as jsxs43 } from "react/jsx-runtime";
function MosaicMarquee({ grid = [] }) {
  return /* @__PURE__ */ jsx57("div", { className: "mosaic-marquee mb-[-3rem] w-[300%] sm:w-[120%] lg:hidden", children: /* @__PURE__ */ jsx57(Marquee, { className: "relative z-10", speed: 35, children: /* @__PURE__ */ jsxs43("div", { className: "grid w-full grid-cols-12 gap-x-4", children: [
    /* @__PURE__ */ jsxs43("div", { className: "col-span-4 flex flex-col justify-end space-y-3", children: [
      /* @__PURE__ */ jsx57("div", { className: "relative aspect-[71/39] w-full rounded-lg bg-white/20", children: grid[1] ? /* @__PURE__ */ jsx57(Asset, __spreadValues({ fill: true }, grid[1].media)) : null }),
      /* @__PURE__ */ jsx57("div", { className: "relative ml-auto aspect-[71/39] w-full rounded-lg bg-white/20", children: grid[2] ? /* @__PURE__ */ jsx57(Asset, __spreadValues({ fill: true }, grid[2].media)) : null })
    ] }),
    /* @__PURE__ */ jsx57("div", { className: "col-span-3 flex items-end", children: /* @__PURE__ */ jsx57("div", { className: "relative aspect-[5/7] w-full rounded-lg bg-white/20", children: grid[3] ? /* @__PURE__ */ jsx57(Asset, __spreadValues({ fill: true }, grid[3].media)) : null }) }),
    /* @__PURE__ */ jsxs43("div", { className: "col-span-5 space-y-3 pr-4", children: [
      /* @__PURE__ */ jsx57("div", { className: "relative ml-auto aspect-[201/101] w-full rounded-lg bg-white/20", children: grid[4] ? /* @__PURE__ */ jsx57(Asset, __spreadValues({ fill: true }, grid[4].media)) : null }),
      /* @__PURE__ */ jsx57("div", { className: "relative aspect-[201/101] w-full rounded-lg bg-white/20", children: grid[5] ? /* @__PURE__ */ jsx57(Asset, __spreadValues({ fill: true }, grid[5].media)) : null })
    ] })
  ] }) }) });
}
var MosaicMarquee_default;
var init_MosaicMarquee = __esm({
  "src/components/flexible/content/components/mosaicContent/MosaicMarquee.tsx"() {
    init_Asset();
    MosaicMarquee_default = MosaicMarquee;
  }
});

// src/components/flexible/content/components/MosaicContent.tsx
var MosaicContent_exports = {};
__export(MosaicContent_exports, {
  default: () => MosaicContent_default
});
import { jsx as jsx58, jsxs as jsxs44 } from "react/jsx-runtime";
function MosaicContent({ content, grid }) {
  return /* @__PURE__ */ jsxs44("div", { className: "relative ml-[-1.5rem] w-[calc(100%+3rem)] overflow-hidden bg-blue pt-[4.5rem] text-white md:mx-auto md:w-full md:rounded-[.75rem] lg:pb-[17.3125rem] lg:pt-[6.375rem]", children: [
    /* @__PURE__ */ jsxs44("div", { className: "relative z-10 mx-auto mb-[4.6875rem] max-w-[35rem] px-5 text-center lg:mb-0", children: [
      /* @__PURE__ */ jsx58("h2", { className: "text-h4 mb-6", dangerouslySetInnerHTML: { __html: content.heading } }),
      /* @__PURE__ */ jsx58("p", { className: "opacity-80", dangerouslySetInnerHTML: { __html: content.content } }),
      /* @__PURE__ */ jsx58("div", { className: "mt-8 lg:mt-10", children: /* @__PURE__ */ jsx58(LinkGroup_default, { links: content.links.links, centered: true }) })
    ] }),
    /* @__PURE__ */ jsx58(MosaicDesktop_default, { grid }),
    /* @__PURE__ */ jsx58(MosaicMarquee_default, { grid })
  ] });
}
var MosaicContent_default;
var init_MosaicContent = __esm({
  "src/components/flexible/content/components/MosaicContent.tsx"() {
    init_LinkGroup();
    init_MosaicDesktop();
    init_MosaicMarquee();
    MosaicContent_default = MosaicContent;
  }
});

// src/utils/parseSlug.ts
function parseSlug(inputString) {
  if (!inputString) return "";
  return inputString.toString().normalize("NFD").toLowerCase().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^\w-]+/g, "");
}
var init_parseSlug = __esm({
  "src/utils/parseSlug.ts"() {
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/context.tsx
import { createContext as createContext2 } from "react";
var LinkedTwoColContext;
var init_context2 = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/context.tsx"() {
    LinkedTwoColContext = createContext2([]);
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/ExpandedTab.tsx
import { useContext as useContext3 } from "react";
import clsx23 from "clsx";
import { AnimatePresence as AnimatePresence6, LazyMotion as LazyMotion14, domAnimation as domAnimation14, m as m22 } from "framer-motion";
import Link15 from "next/link";
import { Fragment as Fragment7, jsx as jsx59, jsxs as jsxs45 } from "react/jsx-runtime";
function ExpandedTab({ tab, onClick, isActive, bgColorType }) {
  var _a;
  const { heading, content, add_featured_link, featured_link } = tab;
  const { text, link } = featured_link;
  const [context] = useContext3(LinkedTwoColContext);
  const { themeColor } = context || {};
  let finalText = "";
  if (add_featured_link) {
    finalText = getHighlightedText({ content: text, color: themeColor });
  }
  const plusColor = ((_a = ["brightGreen"]) == null ? void 0 : _a.includes(themeColor)) ? "text-navy" : "text-white";
  return /* @__PURE__ */ jsx59(LazyMotion14, { features: domAnimation14, children: /* @__PURE__ */ jsx59(AnimatePresence6, { initial: false, children: /* @__PURE__ */ jsxs45(
    m22.button,
    {
      layout: "position",
      type: "button",
      onClick: () => {
        onClick == null ? void 0 : onClick();
      },
      className: "flex flex-col px-5 py-4",
      children: [
        /* @__PURE__ */ jsxs45("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx59(
            m22.div,
            {
              layout: "preserve-aspect",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: { duration: 0.4, ease: "easeInOut" }
              },
              children: /* @__PURE__ */ jsx59("span", { className: "block h-6 w-6", children: isActive ? /* @__PURE__ */ jsx59(MinusCircle, { circleClassName: bgColorType === "dark" ? "text-white" : "text-lightGrey" }) : /* @__PURE__ */ jsx59(PlusCircle, { circleClassName: getTextColor(themeColor), plusClassName: plusColor }) })
            },
            isActive.toString()
          ),
          /* @__PURE__ */ jsx59(
            m22.h3,
            {
              layout: "preserve-aspect",
              className: "text-18 text-left",
              dangerouslySetInnerHTML: {
                __html: heading
              }
            }
          )
        ] }),
        isActive && /* @__PURE__ */ jsxs45(Fragment7, { children: [
          /* @__PURE__ */ jsx59(
            m22.p,
            {
              layout: "preserve-aspect",
              className: clsx23("text-16 mt-3 text-left font-body"),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.4, ease: "easeInOut" },
              dangerouslySetInnerHTML: {
                __html: content
              }
            }
          ),
          add_featured_link && /* @__PURE__ */ jsxs45(
            Link15,
            {
              href: (link == null ? void 0 : link.url) || "/",
              target: getLinkTarget(link == null ? void 0 : link.target),
              className: "group relative mt-5 flex w-full items-center justify-start gap-5 rounded-lg bg-navy p-2",
              children: [
                /* @__PURE__ */ jsx59("div", { className: "transition-[transform, opacity] absolute right-3 top-3 translate-y-2 opacity-0 duration-300 ease-linear group-hover:translate-y-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx59(FeaturedLinkTopRightArrowCircle, {}) }),
                /* @__PURE__ */ jsx59(WpImage, { image: featured_link == null ? void 0 : featured_link.image, className: "aspect-[1/1] h-full max-w-[72px] rounded-lg object-cover" }),
                /* @__PURE__ */ jsx59(
                  "p",
                  {
                    className: "text-16 max-w-[100%] text-left font-body text-white sm:max-w-[50%]",
                    dangerouslySetInnerHTML: {
                      __html: finalText
                    }
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  ) }) });
}
var ExpandedTab_default;
var init_ExpandedTab = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/ExpandedTab.tsx"() {
    init_Icons();
    init_Wp();
    init_text();
    init_links();
    init_ColorHelpers();
    init_context2();
    ExpandedTab_default = ExpandedTab;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/ExpandedTabs.tsx
import { useState as useState16 } from "react";
import clsx24 from "clsx";
import { jsx as jsx60 } from "react/jsx-runtime";
function ExpandedTabs({ tabs, bgColorType = "light", className }) {
  const [activeTabIndex, setActiveTabIndex] = useState16(null);
  return /* @__PURE__ */ jsx60(
    "div",
    {
      className: clsx24(
        className,
        "mt-8 flex w-full flex-col divide-y divide-lightGrey overflow-hidden rounded-lg",
        bgColorType === "light" && "bg-white",
        bgColorType === "dark" && "bg-lightGrey"
      ),
      children: (tabs == null ? void 0 : tabs.length) > 0 && (tabs == null ? void 0 : tabs.map((tab, index) => /* @__PURE__ */ jsx60(
        ExpandedTab_default,
        {
          tab,
          bgColorType,
          onClick: () => {
            setActiveTabIndex(index === activeTabIndex ? null : index);
          },
          isActive: index === activeTabIndex
        },
        `tab-${index}`
      )))
    }
  );
}
var ExpandedTabs_default;
var init_ExpandedTabs = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/ExpandedTabs.tsx"() {
    init_ExpandedTab();
    ExpandedTabs_default = ExpandedTabs;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/FeaturedSection.tsx
import { jsx as jsx61, jsxs as jsxs46 } from "react/jsx-runtime";
function FeauturedSection({ featuredSection }) {
  return /* @__PURE__ */ jsxs46("div", { className: "text-16 flex items-center justify-between gap-x-3 rounded-lg bg-lightGrey p-3 sm:mt-8 sm:flex-row md:gap-6 md:pl-5", children: [
    /* @__PURE__ */ jsxs46("div", { className: "w-2/3 md:w-full md:max-w-[40%] xl:max-w-[100%]", children: [
      !!(featuredSection == null ? void 0 : featuredSection.heading) && /* @__PURE__ */ jsx61(
        "p",
        {
          className: "text-16 mb-1 font-medium text-navy sm:mb-3",
          dangerouslySetInnerHTML: {
            __html: featuredSection.heading
          }
        }
      ),
      !!(featuredSection == null ? void 0 : featuredSection.content) && /* @__PURE__ */ jsx61(
        "p",
        {
          className: "text-15 is-smaller font-body text-navy/80",
          dangerouslySetInnerHTML: {
            __html: featuredSection.content
          }
        }
      )
    ] }),
    !!(featuredSection == null ? void 0 : featuredSection.asset) && /* @__PURE__ */ jsx61("div", { className: "relative aspect-[172/111] w-1/3 overflow-hidden rounded-[4px] sm:w-full sm:max-w-[222px] xl:max-w-[172px]", children: /* @__PURE__ */ jsx61(Asset, __spreadProps(__spreadValues({}, featuredSection == null ? void 0 : featuredSection.asset), { fill: true })) })
  ] });
}
var FeaturedSection_default;
var init_FeaturedSection = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/FeaturedSection.tsx"() {
    init_Asset();
    FeaturedSection_default = FeauturedSection;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/DefaultLinks.tsx
import { jsx as jsx62 } from "react/jsx-runtime";
function DefaultLinks({ links }) {
  const parseLinks = (items) => {
    const parsed = items == null ? void 0 : items.map((link) => ({
      link: {
        link: link == null ? void 0 : link.link,
        text_link: {
          background_color: "navy"
          // May need to update for theming
        },
        type: "text"
      }
    }));
    return parsed;
  };
  return /* @__PURE__ */ jsx62(LinkGroup_default, { links: parseLinks(links) });
}
var DefaultLinks_default;
var init_DefaultLinks = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/DefaultLinks.tsx"() {
    init_LinkGroup();
    DefaultLinks_default = DefaultLinks;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/ExtendsLinks.tsx
import clsx25 from "clsx";
import { jsx as jsx63, jsxs as jsxs47 } from "react/jsx-runtime";
function RightLines2({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs47("svg", { width, height, viewBox: "0 0 29 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx63("path", { d: "M4 0V48", stroke: "#F6F7F9", strokeWidth: "8" }),
    /* @__PURE__ */ jsx63("path", { d: "M12 0V48", stroke: "#F6F7F9", strokeWidth: "6" }),
    /* @__PURE__ */ jsx63("path", { d: "M20 0V48", stroke: "#F6F7F9", strokeWidth: "4" }),
    /* @__PURE__ */ jsx63("path", { d: "M28 0V48", stroke: "#F6F7F9", strokeWidth: "2" })
  ] });
}
function ExtendsLinks({ links, sectionHasBgColor }) {
  return (links == null ? void 0 : links.length) > 0 && (links == null ? void 0 : links.map((link, index) => {
    var _a, _b, _c;
    return /* @__PURE__ */ jsxs47(
      "div",
      {
        className: clsx25("linear group flex h-full items-stretch transition-transform duration-[400ms]", sectionHasBgColor && "hover:translate-x-4"),
        children: [
          /* @__PURE__ */ jsxs47(
            Link,
            {
              className: clsx25(
                "text-16 relative flex items-start py-3 font-medium",
                !sectionHasBgColor && "linear transition-[transform, colors] duration-[400ms] group-hover:rounded-l-lg group-hover:bg-lightGrey group-hover:pl-4 group-hover:pr-6"
              ),
              target: getLinkTarget((_a = link == null ? void 0 : link.link) == null ? void 0 : _a.target),
              href: (_b = link == null ? void 0 : link.link) == null ? void 0 : _b.url,
              children: [
                /* @__PURE__ */ jsx63("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx63(RightArrowCircle, { disableTransitions: true, width: 22, height: 22 }) }),
                /* @__PURE__ */ jsx63(
                  "span",
                  {
                    className: "ml-[14px]",
                    dangerouslySetInnerHTML: {
                      __html: (_c = link == null ? void 0 : link.link) == null ? void 0 : _c.title
                    }
                  }
                ),
                (link == null ? void 0 : link.show_new_tag) && /* @__PURE__ */ jsx63(PillTag_default, { text: "NEW" })
              ]
            },
            index
          ),
          !sectionHasBgColor && /* @__PURE__ */ jsx63("div", { className: "transition-[transform, opacity] -translate-x-2 opacity-0 duration-200 group-hover:translate-x-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx63(RightLines2, { height: "100%" }) })
        ]
      },
      `extends-link-${index}`
    );
  }));
}
var ExtendsLinks_default;
var init_ExtendsLinks = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/ExtendsLinks.tsx"() {
    init_Link();
    init_Icons();
    init_links();
    init_PillTag();
    ExtendsLinks_default = ExtendsLinks;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/LinkedTwoColContentAndLinks.tsx
import { Fragment as Fragment8, jsx as jsx64, jsxs as jsxs48 } from "react/jsx-runtime";
function LinkedTwoColContentAndLinks({ section, hasBgColor }) {
  const { content, hide_default_links, default_links_type, links } = section;
  return /* @__PURE__ */ jsxs48(Fragment8, { children: [
    /* @__PURE__ */ jsx64(
      "p",
      {
        className: "text-18 font-body text-navy/80 opacity-80",
        dangerouslySetInnerHTML: {
          __html: content
        }
      }
    ),
    !hide_default_links && /* @__PURE__ */ jsxs48(Fragment8, { children: [
      default_links_type === "extends" && (links == null ? void 0 : links.length) > 0 && /* @__PURE__ */ jsx64("div", { className: "mt-6 flex flex-col md:mt-[36px]", children: /* @__PURE__ */ jsx64(ExtendsLinks_default, { links, sectionHasBgColor: hasBgColor }) }),
      default_links_type === "default" && (links == null ? void 0 : links.length) > 0 && /* @__PURE__ */ jsx64("div", { className: "mt-6 md:mt-[36px]", children: /* @__PURE__ */ jsx64(DefaultLinks_default, { links }) })
    ] })
  ] });
}
var LinkedTwoColContentAndLinks_default;
var init_LinkedTwoColContentAndLinks = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/LinkedTwoColContentAndLinks.tsx"() {
    init_DefaultLinks();
    init_ExtendsLinks();
    LinkedTwoColContentAndLinks_default = LinkedTwoColContentAndLinks;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/ContentSection.tsx
import clsx26 from "clsx";
import { useInView as useInView6 } from "framer-motion";
import { useEffect as useEffect16, useRef as useRef8 } from "react";
import { useWindowSize as useWindowSize4 } from "react-use";
import { jsx as jsx65, jsxs as jsxs49 } from "react/jsx-runtime";
function ContentSection({ section, onInView }) {
  var _a, _b;
  const { width: windowWidth } = useWindowSize4();
  const {
    section_heading,
    heading: sectionHeading,
    asset,
    asset_mobile,
    // asset_size,
    asset_position,
    add_featured_section = false,
    add_expanded_tabs = false,
    featured_section,
    expanded_tabs,
    mobile_gap,
    desktop_gap
  } = section;
  const ref = useRef8(null);
  const isInView = useInView6(ref, { amount: 0.7 });
  const isAssetImage = (asset == null ? void 0 : asset.type) === "image";
  let sectionBgColor = "";
  const hasBackgroundColor = (section == null ? void 0 : section.section_background_color) !== "none";
  if (hasBackgroundColor) {
    sectionBgColor = getBackgroundColor(section == null ? void 0 : section.section_background_color);
  }
  useEffect16(() => {
    if (isInView && windowWidth > 768) {
      onInView == null ? void 0 : onInView();
    }
  }, [isInView]);
  const tabsLayout = !!add_expanded_tabs;
  const hasMobileAsset = ((_a = Object.keys(asset_mobile)) == null ? void 0 : _a.length) > 1;
  return /* @__PURE__ */ jsxs49("div", { children: [
    /* @__PURE__ */ jsxs49(
      "div",
      {
        ref,
        id: parseSlug(section_heading),
        className: clsx26(
          tabsLayout ? `${mobileGapMap == null ? void 0 : mobileGapMap[mobile_gap]} md:!items-stretch md:gap-24` : `gap-8 md:gap-10 ${desktopGapMap == null ? void 0 : desktopGapMap[desktop_gap]}`,
          "flex w-full scroll-mt-20 flex-col items-center justify-between overflow-hidden",
          hasBackgroundColor ? "py-8 md:py-0" : "flex-col-reverse",
          asset_position === "left" ? "md:flex-row-reverse" : "md:flex-row",
          sectionBgColor,
          hasBackgroundColor && "rounded-xl"
        ),
        children: [
          /* @__PURE__ */ jsxs49(
            "div",
            {
              className: clsx26(
                (tabsLayout || hasBackgroundColor) && "p-5 pt-0 md:pt-5",
                tabsLayout ? "flex flex-col justify-between md:max-w-[50%]" : "md:max-w-[48%]",
                "sm:p-8",
                hasBackgroundColor && asset_position === "left" && "xl:pl-0",
                hasBackgroundColor && asset_position === "right" && "xl:pr-0",
                hasBackgroundColor ? "xl:p-16" : "xl:p-0"
              ),
              children: [
                /* @__PURE__ */ jsxs49("div", { children: [
                  /* @__PURE__ */ jsx65(
                    "h2",
                    {
                      className: clsx26(tabsLayout && "text-h4", "text-h3 mb-4 block font-normal !tracking-[-0.0175em] md:mb-6"),
                      dangerouslySetInnerHTML: {
                        __html: getSplitBreakText({
                          text: sectionHeading,
                          disable: windowWidth < 1150
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx65("div", { className: clsx26(tabsLayout && "block md:hidden lg:block"), children: /* @__PURE__ */ jsx65(LinkedTwoColContentAndLinks_default, { section, hasBgColor: hasBackgroundColor }) })
                ] }),
                add_expanded_tabs && /* @__PURE__ */ jsx65(ExpandedTabs_default, { bgColorType: !hasBackgroundColor ? "dark" : "light", tabs: (_b = expanded_tabs == null ? void 0 : expanded_tabs.expanded_tabs) == null ? void 0 : _b.tabs }),
                add_featured_section && /* @__PURE__ */ jsx65("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx65(FeaturedSection_default, { featuredSection: featured_section }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs49(
            "div",
            {
              className: clsx26(
                asset_position === "left" && "pr-5 sm:pr-0",
                asset_position === "right" && "pl-5 sm:pl-0",
                "flex w-full flex-shrink-0 flex-col justify-between xs:max-w-[80%] md:max-w-[45%] lg:max-w-[50%] lg:justify-end"
                // assetSizeMap?.[asset_size || "default"]
              ),
              children: [
                tabsLayout && /* @__PURE__ */ jsx65("div", { className: clsx26("hidden md:block lg:hidden", asset_position === "right" && "pr-8 pt-8", asset_position === "left" && "pl-8 pt-8"), children: /* @__PURE__ */ jsx65(LinkedTwoColContentAndLinks_default, { section, hasBgColor: hasBackgroundColor }) }),
                /* @__PURE__ */ jsx65(
                  "div",
                  {
                    className: clsx26(
                      "lg:max-w-full",
                      isAssetImage && "w-full flex-shrink-0",
                      // assetSizeMap?.[asset_size || "default"],
                      !hasBackgroundColor && "overflow-hidden rounded-lg md:rounded-xl"
                    ),
                    children: /* @__PURE__ */ jsx65(
                      Asset,
                      __spreadProps(__spreadValues({}, windowWidth < 768 && hasMobileAsset ? asset_mobile : asset), {
                        className: clsx26(
                          isAssetImage && "object-cover object-center",
                          asset_position === "right" && "md:object-right-bottom",
                          asset_position === "left" && "md:object-left-bottom"
                        )
                      })
                    )
                  }
                )
              ]
            }
          )
        ]
      },
      section_heading
    ),
    add_featured_section && /* @__PURE__ */ jsx65(
      "div",
      {
        className: clsx26(
          "mt-4 block xl:hidden",
          asset_position === "left" && !tabsLayout && "md:pr-10",
          asset_position === "right" && !tabsLayout && "md:pl-10"
        ),
        children: /* @__PURE__ */ jsx65(FeaturedSection_default, { featuredSection: featured_section })
      }
    )
  ] });
}
var mobileGapMap, desktopGapMap, ContentSection_default;
var init_ContentSection = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/ContentSection.tsx"() {
    init_ColorHelpers();
    init_Asset();
    init_parseSlug();
    init_text();
    init_ExpandedTabs();
    init_FeaturedSection();
    init_LinkedTwoColContentAndLinks();
    mobileGapMap = {
      "32px": "gap-8",
      none: ""
    };
    desktopGapMap = {
      "96px": "lg:gap-24",
      "192px": "lg:gap-48"
    };
    ContentSection_default = ContentSection;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/components/NavigationDesktop.tsx
import clsx27 from "clsx";
import { LazyMotion as LazyMotion15, domAnimation as domAnimation15, m as m23 } from "framer-motion";
import Link16 from "next/link";
import { jsx as jsx66, jsxs as jsxs50 } from "react/jsx-runtime";
function NavigationDesktop({ heading, sections, activeSection, themeColor }) {
  const indicatorColor = getBackgroundColor(themeColor);
  return /* @__PURE__ */ jsx66("div", { className: "sticky top-0 z-10 mb-16 hidden border-y border-[#0d12260d] bg-white py-5 md:mb-20 md:block lg:mb-36", children: /* @__PURE__ */ jsxs50("menu", { className: "container justify-between gap-x-8 md:flex", children: [
    /* @__PURE__ */ jsx66(
      "span",
      {
        className: "text-16 font-body font-normal",
        dangerouslySetInnerHTML: {
          __html: heading
        }
      }
    ),
    /* @__PURE__ */ jsx66("nav", { className: "flex items-center md:gap-x-10 lg:gap-x-20", children: (sections == null ? void 0 : sections.length) > 0 && (sections == null ? void 0 : sections.map((section) => {
      const { section_heading } = section;
      const isActive = activeSection === section_heading;
      return /* @__PURE__ */ jsxs50(
        Link16,
        {
          className: clsx27(isActive ? "font-medium text-navy" : "font-normal text-navy/60", "text-16 flex items-center gap-x-3"),
          href: `#${parseSlug(section_heading)}`,
          children: [
            isActive && /* @__PURE__ */ jsx66(LazyMotion15, { features: domAnimation15, children: /* @__PURE__ */ jsx66(
              m23.span,
              {
                initial: {
                  y: "-100%",
                  opacity: 0
                },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.25,
                    ease: "easeInOut"
                  }
                },
                className: clsx27(indicatorColor, "h-2 w-2 rounded-full")
              }
            ) }),
            section_heading
          ]
        },
        section_heading
      );
    })) })
  ] }) });
}
var NavigationDesktop_default;
var init_NavigationDesktop = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/components/NavigationDesktop.tsx"() {
    init_ColorHelpers();
    init_parseSlug();
    NavigationDesktop_default = NavigationDesktop;
  }
});

// src/components/flexible/content/components/LinkedTwoColContent/LinkedTwoColContent.tsx
var LinkedTwoColContent_exports = {};
__export(LinkedTwoColContent_exports, {
  default: () => LinkedTwoColContent_default
});
import clsx28 from "clsx";
import { useCallback, useContext as useContext4, useEffect as useEffect17, useRef as useRef9, useState as useState17 } from "react";
import { useInView as useInView7 } from "framer-motion";
import { jsx as jsx67, jsxs as jsxs51 } from "react/jsx-runtime";
function LinkedTwoColContent(props) {
  var _a;
  const { content, options } = props;
  const { y_spacing = "medium" } = options;
  const { heading, sections } = content;
  const { theme_color = "purple" } = options;
  const { hide_navigation } = options;
  const [context, setContext] = useContext4(GlobalContext);
  const [localContext, setLocalContext] = useState17({ themeColor: theme_color });
  const containerRef = useRef9(null);
  const markerRef = useRef9(null);
  const isMarkerInView = useInView7(markerRef, { amount: 0.2 });
  const isContainerInView = useInView7(containerRef, { amount: 0.1 });
  const [activeSection, setActiveSection] = useState17((_a = sections == null ? void 0 : sections[0]) == null ? void 0 : _a.section_heading);
  useEffect17(() => {
    if ((isMarkerInView || !isContainerInView) && (context == null ? void 0 : context.blockHeader)) {
      setContext((prev) => __spreadProps(__spreadValues({}, prev), { blockHeader: false }));
    }
  }, [context == null ? void 0 : context.blockHeader, isContainerInView, isMarkerInView, setContext]);
  const onInViewHandler = useCallback(
    (section) => {
      setActiveSection(section == null ? void 0 : section.section_heading);
      if (!(context == null ? void 0 : context.blockHeader)) {
        setContext((prev) => __spreadProps(__spreadValues({}, prev), { blockHeader: true }));
      }
    },
    [context == null ? void 0 : context.blockHeader, setContext]
  );
  return /* @__PURE__ */ jsx67(LinkedTwoColContext.Provider, { value: [localContext, setLocalContext], children: /* @__PURE__ */ jsxs51("div", { ref: containerRef, className: "linked-two-col-content relative", children: [
    /* @__PURE__ */ jsx67("div", { ref: markerRef, className: "absolute -top-[50px] left-0 h-[50px] w-screen" }),
    !hide_navigation && /* @__PURE__ */ jsx67(NavigationDesktop_default, { heading, sections, activeSection, themeColor: theme_color }),
    /* @__PURE__ */ jsx67("div", { className: "container mt-[72px]", children: /* @__PURE__ */ jsx67("div", { className: clsx28("flex flex-col", ySpacingMap == null ? void 0 : ySpacingMap[y_spacing]), children: (sections == null ? void 0 : sections.length) > 0 && (sections == null ? void 0 : sections.map((section) => /* @__PURE__ */ jsx67(
      ContentSection_default,
      {
        onInView: () => {
          onInViewHandler(section);
        },
        section
      },
      section.section_heading
    ))) }) })
  ] }) });
}
var ySpacingMap, LinkedTwoColContent_default;
var init_LinkedTwoColContent = __esm({
  "src/components/flexible/content/components/LinkedTwoColContent/LinkedTwoColContent.tsx"() {
    init_context();
    init_ContentSection();
    init_context2();
    init_NavigationDesktop();
    ySpacingMap = {
      medium: "gap-10 sm:gap-16 md:gap-y-20 lg:gap-y-44",
      small: "gap-10 sm:gap-16 md:gap-y-12 lg:gap-y-16"
    };
    LinkedTwoColContent_default = LinkedTwoColContent;
  }
});

// src/components/flexible/content/components/ProductSlideOut/ProductSlideOutCard.tsx
import Link17 from "next/link";
import { m as m24 } from "framer-motion";
import { jsx as jsx68, jsxs as jsxs52 } from "react/jsx-runtime";
function ProductSlideOutCard({ item, setActiveSlide, activeSlide, index }) {
  var _a, _b;
  const ease = [0.68, -0.2, 0.15, 0.98];
  let basis = ["", "lg:basis-[28%] xl:basis-[27.3%]", "lg:basis-[23%] xl:basis-[19.8%]"];
  if (activeSlide === 1) {
    basis = ["lg:basis-[28%] xl:basis-[27.3%]", "", "lg:basis-[23%] xl:basis-[19.8%]"];
  } else if (activeSlide === 2) {
    basis = ["lg:basis-[28%] xl:basis-[27.3%]", "lg:basis-[23%] xl:basis-[19.8%]"];
  }
  return /* @__PURE__ */ jsx68(
    m24.div,
    {
      layout: true,
      className: `overflow-hidden transition-all duration-500 ${index === 0 ? "md:col-span-2" : ""} ${activeSlide === index ? "grow lg:basis-[44%] xl:basis-[49%]" : `shrink ${basis[index]}`}`,
      children: /* @__PURE__ */ jsxs52(
        Link17,
        {
          href: (_a = item == null ? void 0 : item.link) == null ? void 0 : _a.url,
          className: `group flex h-full flex-col ${index === 0 ? "md:max-lg:flex md:max-lg:flex-row md:max-lg:items-center md:max-lg:space-x-8" : ""}`,
          onMouseEnter: () => setActiveSlide(index),
          children: [
            /* @__PURE__ */ jsx68(
              "div",
              {
                className: `h-auto shrink-0 overflow-hidden rounded-lg transition-colors duration-300 lg:h-[25.75rem] xl:h-[32.5rem] ${index === 0 ? "w-auto md:w-[48%] lg:w-auto" : ""} ${getClassValue(item == null ? void 0 : item.colours)} ${activeSlide === index ? "" : " md:!bg-lightGrey"}`,
                children: /* @__PURE__ */ jsxs52(m24.div, { className: "relative aspect-[157/130] h-full w-full max-lg:!opacity-100", children: [
                  /* @__PURE__ */ jsx68(Asset, __spreadProps(__spreadValues({}, item == null ? void 0 : item.media), { fill: true, className: "object-center lg:object-left", isHovered: activeSlide === index })),
                  /* @__PURE__ */ jsx68("div", { className: "absolute left-3 right-0 top-3 z-10 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:scale-0 lg:left-4 lg:top-4 lg:h-8 lg:w-8 lg:rotate-45", children: /* @__PURE__ */ jsx68(CircleArrow, {}) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs52("div", { className: `pt-8 lg:pl-3 lg:pt-10 ${index === 0 ? "md:w-1/2 md:shrink-0 md:pt-0 lg:w-full" : ""}`, children: [
              /* @__PURE__ */ jsx68(
                HighlightedText_default,
                {
                  tag: "span",
                  className: `text-22 is-heading block font-medium lg:mb-4 ${item.heading_width === "small" ? "max-w-[17.7rem]" : "lg:max-w-[17rem] xl:max-w-none"}`,
                  content: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.title,
                  color: ""
                }
              ),
              /* @__PURE__ */ jsx68(
                m24.p,
                {
                  className: "text-18 w-full max-w-[24rem] font-body max-lg:!translate-x-0 max-lg:!opacity-80 lg:line-clamp-2 lg:max-w-[31.75rem]",
                  dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description },
                  animate: {
                    opacity: activeSlide === index ? 0.8 : 0,
                    transform: activeSlide === index ? "translateY(0rem)" : "translateX(1.5rem)"
                  },
                  transition: {
                    duration: 0.6,
                    ease
                  }
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
var ProductSlideOutCard_default;
var init_ProductSlideOutCard = __esm({
  "src/components/flexible/content/components/ProductSlideOut/ProductSlideOutCard.tsx"() {
    init_Asset();
    init_Icons();
    init_HighlightedText();
    init_ColorHelpers();
    ProductSlideOutCard_default = ProductSlideOutCard;
  }
});

// src/components/flexible/content/components/ProductSlideOut.tsx
var ProductSlideOut_exports = {};
__export(ProductSlideOut_exports, {
  default: () => ProductSlideOut_default
});
import { useState as useState18 } from "react";
import { LazyMotion as LazyMotion16, domAnimation as domAnimation16 } from "framer-motion";
import { jsx as jsx69 } from "react/jsx-runtime";
function ProductSlideOut({ items }) {
  const [activeSlide, setActiveSlide] = useState18(0);
  return /* @__PURE__ */ jsx69(LazyMotion16, { features: domAnimation16, children: /* @__PURE__ */ jsx69("div", { className: "grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:gap-x-0 lg:gap-y-0 lg:space-x-6", children: (items == null ? void 0 : items.length) > 0 && (items == null ? void 0 : items.map((item, i) => {
    var _a;
    return /* @__PURE__ */ jsx69(ProductSlideOutCard_default, { item, index: i, setActiveSlide, activeSlide }, (_a = item == null ? void 0 : item.link) == null ? void 0 : _a.title);
  })) }) });
}
var ProductSlideOut_default;
var init_ProductSlideOut = __esm({
  "src/components/flexible/content/components/ProductSlideOut.tsx"() {
    init_ProductSlideOutCard();
    ProductSlideOut_default = ProductSlideOut;
  }
});

// src/components/flexible/content/components/ThreeColumnCardGrid.tsx
var ThreeColumnCardGrid_exports = {};
__export(ThreeColumnCardGrid_exports, {
  default: () => ThreeColumnCardGrid_default
});
import { jsx as jsx70, jsxs as jsxs53 } from "react/jsx-runtime";
function ThreeColumnCardGrid({ spring_colour, hide_springs, grid }) {
  const bars = Array.from({ length: 12 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsx70("div", { className: "grid gap-y-6 md:grid-cols-3 md:gap-6", children: grid == null ? void 0 : grid.map((item, i) => /* @__PURE__ */ jsxs53("div", { className: "overflow-hidden rounded-lg bg-lightGrey text-navy", children: [
    /* @__PURE__ */ jsxs53("div", { className: "relative px-6 py-5 lg:px-[1.875rem] lg:py-[1.625rem]", children: [
      /* @__PURE__ */ jsx70("div", { className: "relative z-10 aspect-[352/195] overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx70(Asset, __spreadProps(__spreadValues({}, item == null ? void 0 : item.media), { fill: true, className: "object-cover" })) }),
      !hide_springs && /* @__PURE__ */ jsx70("div", { className: "absolute inset-x-0 top-0 flex h-1/2 flex-col justify-between", children: bars == null ? void 0 : bars.map((index) => /* @__PURE__ */ jsx70("div", { className: `w-full ${getClassValue(spring_colour == null ? void 0 : spring_colour.colours)}`, style: { height: 6 - 0.5 * index } }, index)) })
    ] }),
    /* @__PURE__ */ jsxs53("div", { className: "p-6 lg:p-8", children: [
      /* @__PURE__ */ jsx70("h3", { className: "text-h6 mb-2 lg:mb-4", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.heading } }),
      (item == null ? void 0 : item.description) && /* @__PURE__ */ jsx70("p", { className: "text-18 font-body !leading-[1.45] !tracking-[-0.01125em]", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
    ] })
  ] }, i)) });
}
var ThreeColumnCardGrid_default;
var init_ThreeColumnCardGrid = __esm({
  "src/components/flexible/content/components/ThreeColumnCardGrid.tsx"() {
    init_Asset();
    init_ColorHelpers();
    ThreeColumnCardGrid_default = ThreeColumnCardGrid;
  }
});

// src/components/flexible/content/components/FourColumnListGrid.tsx
var FourColumnListGrid_exports = {};
__export(FourColumnListGrid_exports, {
  default: () => FourColumnListGrid_default
});
import { jsx as jsx71, jsxs as jsxs54 } from "react/jsx-runtime";
function FourColumnListGrid({ spring_colour, hide_springs, grid }) {
  const bars = Array.from({ length: 12 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsx71("div", { className: "grid gap-y-6 md:grid-cols-4 md:gap-6", children: grid == null ? void 0 : grid.map((item, i) => /* @__PURE__ */ jsx71("div", { className: "overflow-hidden rounded-lg bg-lightGrey text-navy", children: /* @__PURE__ */ jsxs54("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxs54("span", { className: "text-h3 block pb-4 text-blue md:pb-6", children: [
      i + 1,
      "."
    ] }),
    /* @__PURE__ */ jsx71("h3", { className: "text-h7 mb-2 lg:mb-3", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.heading } }),
    (item == null ? void 0 : item.description) && /* @__PURE__ */ jsx71("p", { className: "text-18 font-body !leading-[1.45] !tracking-[-0.01125em]", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
  ] }) }, i)) });
}
var FourColumnListGrid_default;
var init_FourColumnListGrid = __esm({
  "src/components/flexible/content/components/FourColumnListGrid.tsx"() {
    FourColumnListGrid_default = FourColumnListGrid;
  }
});

// src/components/flexible/content/components/StatsGrid.tsx
var StatsGrid_exports = {};
__export(StatsGrid_exports, {
  default: () => StatsGrid_default
});
import { jsx as jsx72, jsxs as jsxs55 } from "react/jsx-runtime";
function StatsGrid({ sectionBG, columns, stats }) {
  const columnsClasses = [""];
  const cardClasses = ["space-y-0"];
  const statsClass = [""];
  if (columns === "three") {
    columnsClasses.push("grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10");
    statsClass.push(" text-64");
  } else {
    columnsClasses.push("grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-10");
    statsClass.push(" text-70");
  }
  return /* @__PURE__ */ jsx72("div", { className: `grid ${columnsClasses.join("")}`, children: stats == null ? void 0 : stats.map((item, l) => /* @__PURE__ */ jsxs55(
    "div",
    {
      className: `flex flex-col items-center text-center ${(l + 1) % 3 === 0 && columns === "three" ? "sm:col-span-2 md:col-span-1" : ""} ${cardClasses.join(" ")}`,
      children: [
        /* @__PURE__ */ jsx72("div", { className: `relative ${statsClass.join(" ")} is-stat py-0 font-heading font-[450]`, children: /* @__PURE__ */ jsx72(
          TextStrokeStack_default,
          {
            topText: (item == null ? void 0 : item.old_stat) || item.stat,
            bottomText: (item == null ? void 0 : item.old_stat) || item.stat,
            centerText: item.stat,
            int: l,
            options: {
              textColor: "navy",
              strokeColor: "navy",
              bgColor: "white",
              textSize: "64"
            }
          }
        ) }),
        /* @__PURE__ */ jsx72("p", { className: "text-20 mt-[0] font-heading !leading-[1.4]", dangerouslySetInnerHTML: { __html: item.caption } })
      ]
    },
    l
  )) });
}
var StatsGrid_default;
var init_StatsGrid = __esm({
  "src/components/flexible/content/components/StatsGrid.tsx"() {
    init_TextStrokeStack();
    StatsGrid_default = StatsGrid;
  }
});

// src/components/flexible/content/components/IconGrid.tsx
var IconGrid_exports = {};
__export(IconGrid_exports, {
  default: () => IconGrid_default
});
import Link18 from "next/link";
import { Fragment as Fragment9, jsx as jsx73, jsxs as jsxs56 } from "react/jsx-runtime";
function IconGrid({ grid, add_link, card_type, end_link, sectionBG }) {
  const cardColor = [""];
  if (sectionBG === "navy" || sectionBG === "purple") {
    cardColor.push("bg-lightGrey/5");
  } else if (sectionBG === "black" || sectionBG === "blue") {
    cardColor.push("bg-white/15");
  } else if (sectionBG === "brightGreen" || sectionBG === "lightBlue" || sectionBG === "lightPurple" || sectionBG === "lightGrey") {
    cardColor.push("bg-navy/5");
  } else {
    cardColor.push("bg-lightGrey");
  }
  return /* @__PURE__ */ jsxs56(Fragment9, { children: [
    /* @__PURE__ */ jsx73("div", { className: "mx-auto grid max-w-[69.75rem] gap-y-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-[1.5625rem]", children: grid == null ? void 0 : grid.map((item, index) => {
      var _a, _b, _c;
      if (add_link && ((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.url)) {
        return /* @__PURE__ */ jsx73(Link18, { href: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.url, target: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.target, className: `group rounded-lg p-5 md:p-6 ${cardColor.join(" ")}`, children: /* @__PURE__ */ jsx73(IconContent, { item, addLink: add_link, cardType: card_type, int: index }) }, item == null ? void 0 : item.heading);
      }
      return /* @__PURE__ */ jsx73("div", { className: `rounded-lg p-5 md:p-6 ${cardColor.join(" ")}`, children: /* @__PURE__ */ jsx73(IconContent, { item, addLink: add_link, cardType: card_type, int: index }) }, index);
    }) }),
    (end_link == null ? void 0 : end_link.url) && /* @__PURE__ */ jsx73("div", { className: "mt-10 flex justify-center text-center  md:mt-16 lg:mt-20", children: /* @__PURE__ */ jsxs56(Link18, { href: end_link == null ? void 0 : end_link.url, target: end_link == null ? void 0 : end_link.target, className: "group inline-flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx73("div", { className: "h-6 w-6 rotate-[45deg] rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-blue group-hover:text-white", children: /* @__PURE__ */ jsx73(CircleArrow, {}) }),
      /* @__PURE__ */ jsx73("span", { className: "text-17 font-semibold", dangerouslySetInnerHTML: { __html: end_link == null ? void 0 : end_link.title } })
    ] }) })
  ] });
}
function IconContent({ item, addLink, cardType, int }) {
  var _a, _b;
  const headingStyle = [""];
  if (addLink || cardType === "number") {
    headingStyle.push(" text-h7");
  } else {
    headingStyle.push(" text-h6");
  }
  return /* @__PURE__ */ jsxs56("div", { className: "flex h-full flex-col", children: [
    cardType === "number" ? /* @__PURE__ */ jsx73(
      "span",
      {
        className: "text-h3 mb-6 inline-block text-blue md:mb-8",
        dangerouslySetInnerHTML: { __html: `${Number(int) + 1 > 9 ? "" : "0"}${Number(int) + 1}` }
      }
    ) : /* @__PURE__ */ jsx73("div", { className: "relative mb-[1.875rem] h-12 w-12", children: /* @__PURE__ */ jsx73(Icon_default, { icon: item.icon }) }),
    item.heading && /* @__PURE__ */ jsx73("h3", { className: `mb-2 !font-[450] lg:mb-4 ${headingStyle.join(" ")}`, dangerouslySetInnerHTML: { __html: item.heading } }),
    (item == null ? void 0 : item.description) && /* @__PURE__ */ jsx73(
      "p",
      {
        className: "text-18 max-w-[18.9rem] font-body !leading-[1.45] tracking-[-0.01125rem] opacity-80",
        dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description }
      }
    ),
    addLink && ((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.title) && /* @__PURE__ */ jsxs56("div", { className: "mt-auto flex items-center space-x-3 pt-4", children: [
      /* @__PURE__ */ jsx73("div", { className: "h-6 w-6 rotate-[45deg] rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-blue group-hover:text-white", children: /* @__PURE__ */ jsx73(CircleArrow, {}) }),
      /* @__PURE__ */ jsx73("span", { className: "text-17 font-semibold", dangerouslySetInnerHTML: { __html: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.title } })
    ] })
  ] });
}
var IconGrid_default;
var init_IconGrid = __esm({
  "src/components/flexible/content/components/IconGrid.tsx"() {
    init_Icon();
    init_Icons();
    IconGrid_default = IconGrid;
  }
});

// src/components/flexible/content/components/FullWidthProductCallout.tsx
var FullWidthProductCallout_exports = {};
__export(FullWidthProductCallout_exports, {
  default: () => FullWidthProductCallout_default
});
import Link19 from "next/link";
import { jsx as jsx74, jsxs as jsxs57 } from "react/jsx-runtime";
function FullWidthProductCallout({ media, link, description }) {
  return /* @__PURE__ */ jsx74("div", { children: /* @__PURE__ */ jsxs57(Link19, { href: link == null ? void 0 : link.url, target: link == null ? void 0 : link.target, className: "group space-y-6 lg:space-y-8", children: [
    /* @__PURE__ */ jsxs57("div", { className: "relative w-full overflow-hidden rounded-lg max-md:aspect-[16/8]", children: [
      /* @__PURE__ */ jsx74("div", { className: "absolute left-3 right-0 top-3 z-10 h-5 w-5 scale-0 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:left-4 lg:top-4 lg:h-8 lg:w-8 lg:rotate-45", children: /* @__PURE__ */ jsx74(CircleArrow, {}) }),
      /* @__PURE__ */ jsx74("div", { className: "max-md:absolute max-md:inset-0", children: /* @__PURE__ */ jsx74(Asset, __spreadValues({ className: "max-md:object-cover max-md:object-left-top" }, media)) })
    ] }),
    /* @__PURE__ */ jsxs57("div", { className: "max-w-[39.25rem] space-y-2 md:p-3 lg:space-y-3", children: [
      (link == null ? void 0 : link.title) && /* @__PURE__ */ jsx74("span", { className: "text-22 is-heading block font-medium", dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.title } }),
      description && /* @__PURE__ */ jsx74("p", { className: "text-18 w-full font-body opacity-80", dangerouslySetInnerHTML: { __html: description } })
    ] })
  ] }) });
}
var FullWidthProductCallout_default;
var init_FullWidthProductCallout = __esm({
  "src/components/flexible/content/components/FullWidthProductCallout.tsx"() {
    init_Asset();
    init_Icons();
    FullWidthProductCallout_default = FullWidthProductCallout;
  }
});

// src/components/flexible/content/components/ProductGrid/ProductGridLinkCard.tsx
import { useState as useState19 } from "react";
import Link20 from "next/link";
import { jsx as jsx75, jsxs as jsxs58 } from "react/jsx-runtime";
function ProductGridLinkCard({ link, fullWidth }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const [cardHovered, setCardHovered] = useState19(false);
  if ((link == null ? void 0 : link.link_type) === "resource") {
    return /* @__PURE__ */ jsxs58(
      Link20,
      {
        href: ((_a = link == null ? void 0 : link.resource) == null ? void 0 : _a.permalink) || "#",
        className: `group flex items-center space-x-3 rounded-lg p-2 lg:space-x-5 ${fullWidth ? "mt-8 bg-navy text-white md:mt-auto " : "bg-lightGrey"}`,
        children: [
          /* @__PURE__ */ jsx75("div", { className: "relative aspect-[57/32] w-full max-w-[7rem] overflow-hidden rounded-md bg-lightBlue", children: /* @__PURE__ */ jsx75(WpImage, { image: getPostPreviewImage_default(link == null ? void 0 : link.resource), fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-[1.07]" }) }),
          /* @__PURE__ */ jsx75("h3", { className: "text-16--clamp max-w-[19.875rem] font-body !leading-[1.3]", dangerouslySetInnerHTML: { __html: (_b = link == null ? void 0 : link.resource) == null ? void 0 : _b.post_title } })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs58(
    Link20,
    {
      href: ((_d = (_c = link == null ? void 0 : link.link_card) == null ? void 0 : _c.link) == null ? void 0 : _d.url) || "#",
      className: "block overflow-hidden rounded-lg bg-navy p-3 text-white md:p-4",
      onMouseOver: () => setCardHovered(true),
      onMouseLeave: () => setCardHovered(false),
      children: [
        /* @__PURE__ */ jsxs58("div", { className: "mb-3 flex items-center space-x-3 md:mb-4 lg:space-x-4", children: [
          ((_e = link == null ? void 0 : link.link_card) == null ? void 0 : _e.tag) && /* @__PURE__ */ jsx75(
            "span",
            {
              className: "text-15 rounded-md bg-white/10 px-2 py-[.3rem] font-body font-medium text-white",
              dangerouslySetInnerHTML: { __html: (_f = link == null ? void 0 : link.link_card) == null ? void 0 : _f.tag }
            }
          ),
          ((_g = link == null ? void 0 : link.link_card) == null ? void 0 : _g.date) && /* @__PURE__ */ jsx75("span", { className: "text-15 font-regular font-body", dangerouslySetInnerHTML: { __html: (_h = link == null ? void 0 : link.link_card) == null ? void 0 : _h.date } })
        ] }),
        /* @__PURE__ */ jsx75(
          "h3",
          {
            className: `text-22 is-heading font-medium ${((_i = link == null ? void 0 : link.link_card) == null ? void 0 : _i.podcast_link) ? "mb-2 line-clamp-1  md:mb-3" : ""}`,
            dangerouslySetInnerHTML: { __html: (_k = (_j = link == null ? void 0 : link.link_card) == null ? void 0 : _j.link) == null ? void 0 : _k.title }
          }
        ),
        ((_l = link == null ? void 0 : link.link_card) == null ? void 0 : _l.podcast_link) && /* @__PURE__ */ jsx75(PodcastSpring_default, { cardHovered })
      ]
    }
  );
}
var ProductGridLinkCard_default;
var init_ProductGridLinkCard = __esm({
  "src/components/flexible/content/components/ProductGrid/ProductGridLinkCard.tsx"() {
    init_Wp();
    init_PodcastSpring();
    init_getPostPreviewImage();
    ProductGridLinkCard_default = ProductGridLinkCard;
  }
});

// src/components/flexible/content/components/ProductGrid/ProductGridCard.tsx
import { Fragment as Fragment10, jsx as jsx76, jsxs as jsxs59 } from "react/jsx-runtime";
function ProductGridCard({ card }) {
  var _a, _b, _c;
  const cardColour = card.options.color;
  const cardOrder = card.options.content_order;
  const cardClasses = ["", sectionColor(cardColour)];
  if (cardOrder === "textFirst") {
    cardClasses.push(" ");
  } else {
    cardClasses.push(" flex flex-col-reverse");
  }
  const hasLink = (_a = card == null ? void 0 : card.options) == null ? void 0 : _a.add_link;
  if (!hasLink) {
    cardClasses.push(" h-full");
  }
  const hasEmbed = (_b = card == null ? void 0 : card.options) == null ? void 0 : _b.add_embed;
  return /* @__PURE__ */ jsxs59(Fragment10, { children: [
    /* @__PURE__ */ jsxs59("div", { className: `overflow-hidden rounded-md md:rounded-xl ${cardClasses.join(" ")}`, children: [
      /* @__PURE__ */ jsxs59("div", { className: "mx-auto w-full p-6 md:p-8 lg:p-10", children: [
        /* @__PURE__ */ jsx76(HighlightedText_default, { tag: "span", className: "text-h6 mb-2 block md:mb-4", content: card == null ? void 0 : card.heading, color: "" }),
        /* @__PURE__ */ jsx76("p", { className: "text-18 font-body opacity-80", dangerouslySetInnerHTML: { __html: card == null ? void 0 : card.content } })
      ] }),
      /* @__PURE__ */ jsx76("div", { className: "w-full", children: /* @__PURE__ */ jsx76(Asset, __spreadValues({}, card == null ? void 0 : card.media)) })
    ] }),
    hasEmbed && /* @__PURE__ */ jsx76("div", { dangerouslySetInnerHTML: { __html: card == null ? void 0 : card.embed } }),
    hasLink && /* @__PURE__ */ jsx76(ProductGridLinkCard_default, { link: (_c = card == null ? void 0 : card.link_card) == null ? void 0 : _c.link, fullWidth: false })
  ] });
}
var ProductGridCard_default;
var init_ProductGridCard = __esm({
  "src/components/flexible/content/components/ProductGrid/ProductGridCard.tsx"() {
    init_Asset();
    init_HighlightedText();
    init_ColorHelpers();
    init_ProductGridLinkCard();
    ProductGridCard_default = ProductGridCard;
  }
});

// src/components/flexible/content/components/ProductGrid/FullWidthProductCard.tsx
import { jsx as jsx77, jsxs as jsxs60 } from "react/jsx-runtime";
function FullWidthProductCard({ content_width, card }) {
  var _a, _b;
  const contentWidth = content_width;
  const cardColour = card.options.color;
  const cardOrder = card.options.content_order;
  const cardClasses = ["", sectionColor(cardColour)];
  const contentClasses = [""];
  if (cardOrder === "textFirst") {
    cardClasses.push("md:items-center  md:flex-row");
    contentClasses.push("md:ml-[3%] md:mr-auto");
  } else {
    cardClasses.push("md:items-center  md:flex-row-reverse");
    contentClasses.push("md:mx-auto");
  }
  if (contentWidth === "small") {
    contentClasses.push("max-w-[27.8rem]");
  } else if (contentWidth === "large") {
    contentClasses.push("max-w-[32.5rem]");
  } else {
    contentClasses.push("max-w-[28.25rem]");
  }
  const hasLink = (_a = card == null ? void 0 : card.options) == null ? void 0 : _a.add_link;
  if (hasLink) {
    cardClasses.push("md:!items-stretch");
    contentClasses.push("flex flex-col md:py-[3.5rem]");
  }
  return /* @__PURE__ */ jsx77("div", { className: "md:col-span-12", children: /* @__PURE__ */ jsxs60("div", { className: `flex flex-col overflow-hidden rounded-md md:rounded-xl ${cardClasses.join(" ")}`, children: [
    /* @__PURE__ */ jsxs60("div", { className: `w-full p-6  ${contentClasses.join(" ")}`, children: [
      /* @__PURE__ */ jsx77(
        HighlightedText_default,
        {
          tag: "span",
          className: `text-h5 mb-4 block lg:mb-6 ${contentWidth === "large" ? "max-w-[22rem]" : ""}`,
          content: card == null ? void 0 : card.heading,
          color: ""
        }
      ),
      /* @__PURE__ */ jsx77("p", { className: `text-18 font-body opacity-80 ${hasLink ? "md:mb-10" : ""}`, dangerouslySetInnerHTML: { __html: card == null ? void 0 : card.content } }),
      hasLink && /* @__PURE__ */ jsx77(ProductGridLinkCard_default, { link: (_b = card == null ? void 0 : card.link_card) == null ? void 0 : _b.link, fullWidth: true })
    ] }),
    /* @__PURE__ */ jsx77("div", { className: "w-full md:max-w-[32.5rem]", children: /* @__PURE__ */ jsx77(Asset, __spreadValues({}, card == null ? void 0 : card.media)) })
  ] }) });
}
var FullWidthProductCard_default;
var init_FullWidthProductCard = __esm({
  "src/components/flexible/content/components/ProductGrid/FullWidthProductCard.tsx"() {
    init_Asset();
    init_HighlightedText();
    init_ColorHelpers();
    init_ProductGridLinkCard();
    FullWidthProductCard_default = FullWidthProductCard;
  }
});

// src/components/flexible/content/components/ProductGrid.tsx
var ProductGrid_exports = {};
__export(ProductGrid_exports, {
  default: () => ProductGrid_default
});
import React16 from "react";
import { jsx as jsx78, jsxs as jsxs61 } from "react/jsx-runtime";
function ProductGrid({ grid }) {
  return /* @__PURE__ */ jsx78("div", { className: "mx-auto grid max-w-[69.375rem] gap-y-6 md:grid-cols-12 md:gap-6 lg:gap-10", children: grid == null ? void 0 : grid.map((card, index) => /* @__PURE__ */ jsxs61(React16.Fragment, { children: [
    (card == null ? void 0 : card.acf_fc_layout) === "full_width" && /* @__PURE__ */ jsx78(FullWidthProductCard_default, { card, content_width: card == null ? void 0 : card.content_width }, index),
    (card == null ? void 0 : card.acf_fc_layout) === "half_grid" && /* @__PURE__ */ jsxs61("div", { className: "grid gap-y-6 md:col-span-12 md:grid-cols-2 md:gap-x-6 lg:gap-x-10", children: [
      /* @__PURE__ */ jsx78("div", { className: "flex flex-col space-y-5", children: /* @__PURE__ */ jsx78(ProductGridCard_default, { card: card.card_left }) }),
      /* @__PURE__ */ jsx78("div", { className: "space-y-5", children: /* @__PURE__ */ jsx78(ProductGridCard_default, { card: card.card_right }) })
    ] }, `half-grid-${index}`),
    ((card == null ? void 0 : card.acf_fc_layout) === "staggered_grid_right" || (card == null ? void 0 : card.acf_fc_layout) === "staggered_grid_left") && /* @__PURE__ */ jsxs61("div", { className: "grid gap-y-6 md:col-span-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-10", children: [
      /* @__PURE__ */ jsx78("div", { className: (card == null ? void 0 : card.acf_fc_layout) === "staggered_grid_left" ? "md:col-span-7" : "md:col-span-5", children: /* @__PURE__ */ jsx78(ProductGridCard_default, { card: card.card_left }) }),
      /* @__PURE__ */ jsx78("div", { className: (card == null ? void 0 : card.acf_fc_layout) === "staggered_grid_left" ? "md:col-span-5" : "md:col-span-7", children: /* @__PURE__ */ jsx78(ProductGridCard_default, { card: card.card_right }) })
    ] }, `${card == null ? void 0 : card.acf_fc_layout}-${index}`)
  ] }, `${card == null ? void 0 : card.acf_fc_layout} - ${index}`)) });
}
var ProductGrid_default;
var init_ProductGrid = __esm({
  "src/components/flexible/content/components/ProductGrid.tsx"() {
    init_ProductGridCard();
    init_FullWidthProductCard();
    ProductGrid_default = ProductGrid;
  }
});

// src/components/flexible/content/components/StaggeredThumbnailGrid.tsx
var StaggeredThumbnailGrid_exports = {};
__export(StaggeredThumbnailGrid_exports, {
  default: () => StaggeredThumbnailGrid_default
});
import Link21 from "next/link";
import { jsx as jsx79, jsxs as jsxs62 } from "react/jsx-runtime";
function StaggeredThumbnailGrid({ grid }) {
  return /* @__PURE__ */ jsx79("div", { className: "mx-auto grid w-full max-w-[69.375rem] gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-20 lg:gap-y-32", children: grid == null ? void 0 : grid.map((item, index) => {
    if (index % 2) {
      return /* @__PURE__ */ jsx79("div", { className: "flex md:pl-16 lg:pl-20", children: /* @__PURE__ */ jsx79(GridContent, { item }) }, index);
    }
    return /* @__PURE__ */ jsx79("div", { children: /* @__PURE__ */ jsx79(GridContent, { item }) }, index);
  }) });
}
function GridContent({ item }) {
  var _a, _b, _c;
  if ((_a = item == null ? void 0 : item.link) == null ? void 0 : _a.url) {
    return /* @__PURE__ */ jsxs62(Link21, { href: (_b = item == null ? void 0 : item.link) == null ? void 0 : _b.url, className: "group mt-auto", children: [
      /* @__PURE__ */ jsx79("div", { className: "relative mb-8 aspect-[54/39] w-full overflow-hidden rounded-lg lg:mb-16", children: /* @__PURE__ */ jsx79(WpImage, { image: item == null ? void 0 : item.thumbnail, fill: true, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsx79("h3", { className: "text-h5 font-book", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.heading } }),
      (item == null ? void 0 : item.description) && /* @__PURE__ */ jsx79("p", { className: "text-18 mt-4 font-body md:mt-6", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } }),
      /* @__PURE__ */ jsxs62("div", { className: "mt-auto flex items-center space-x-3 pt-4 md:pt-10", children: [
        /* @__PURE__ */ jsx79("div", { className: "h-6 w-6 rotate-[45deg] rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-blue group-hover:text-white", children: /* @__PURE__ */ jsx79(CircleArrow, {}) }),
        /* @__PURE__ */ jsx79("span", { className: "text-17 font-semibold", dangerouslySetInnerHTML: { __html: (_c = item == null ? void 0 : item.link) == null ? void 0 : _c.title } })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs62("div", { className: "mt-auto", children: [
    /* @__PURE__ */ jsx79("div", { className: "relative mb-8 aspect-[54/39] w-full overflow-hidden rounded-lg lg:mb-16", children: /* @__PURE__ */ jsx79(WpImage, { image: item == null ? void 0 : item.thumbnail, fill: true, className: "h-full w-full object-cover" }) }),
    /* @__PURE__ */ jsx79("h3", { className: "text-h5 font-book", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.heading } }),
    (item == null ? void 0 : item.description) && /* @__PURE__ */ jsx79("p", { className: "text-18 mt-4 font-body md:mt-6", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.description } })
  ] });
}
var StaggeredThumbnailGrid_default;
var init_StaggeredThumbnailGrid = __esm({
  "src/components/flexible/content/components/StaggeredThumbnailGrid.tsx"() {
    init_Wp();
    init_Icons();
    StaggeredThumbnailGrid_default = StaggeredThumbnailGrid;
  }
});

// src/components/flexible/content/components/ReportGrid.tsx
var ReportGrid_exports = {};
__export(ReportGrid_exports, {
  default: () => ReportGrid_default
});
import Link22 from "next/link";
import { jsx as jsx80, jsxs as jsxs63 } from "react/jsx-runtime";
function ReportGrid({ featured_report, reports }) {
  var _a, _b, _c;
  return /* @__PURE__ */ jsxs63("div", { className: "grid grid-cols-2 gap-x-3 md:grid-cols-12 md:gap-x-6", children: [
    /* @__PURE__ */ jsxs63(
      Link22,
      {
        href: (_a = featured_report == null ? void 0 : featured_report.link) == null ? void 0 : _a.url,
        target: (_b = featured_report == null ? void 0 : featured_report.link) == null ? void 0 : _b.target,
        className: "group relative col-span-2 space-y-6 overflow-hidden rounded-lg bg-lightBlue p-6 sm:flex sm:space-x-8 sm:space-y-0 sm:pb-0 md:col-span-8 md:px-8 md:pt-8 lg:space-x-[3.75rem] xl:row-span-2",
        children: [
          /* @__PURE__ */ jsxs63("div", { className: "flex max-w-[24rem] flex-col sm:h-full sm:pb-8 sm:pt-6", children: [
            /* @__PURE__ */ jsx80("span", { className: "text-15 mb-auto text-blue", dangerouslySetInnerHTML: { __html: featured_report == null ? void 0 : featured_report.date } }),
            /* @__PURE__ */ jsx80("h3", { className: "text-h3 my-3 md:my-6", dangerouslySetInnerHTML: { __html: (_c = featured_report == null ? void 0 : featured_report.link) == null ? void 0 : _c.title } }),
            /* @__PURE__ */ jsx80("div", { className: "absolute right-6 top-6 mt-auto h-6 w-6 rounded-full bg-blue text-white transition-colors duration-300 group-hover:bg-white group-hover:text-blue sm:relative sm:right-0 sm:top-0", children: /* @__PURE__ */ jsx80(CircleArrow, {}) })
          ] }),
          /* @__PURE__ */ jsx80("div", { className: "transform-translate relative hidden aspect-[295/420] w-full max-w-[18.625rem] overflow-hidden rounded-md duration-500 group-hover:-translate-y-3 sm:block", children: /* @__PURE__ */ jsx80(WpImage, { image: featured_report == null ? void 0 : featured_report.thumbnail, fill: true, className: "h-full w-full object-cover object-top" }) })
        ]
      }
    ),
    reports == null ? void 0 : reports.map((item, index) => {
      var _a2, _b2, _c2;
      return /* @__PURE__ */ jsxs63(Link22, { href: (_a2 = item == null ? void 0 : item.link) == null ? void 0 : _a2.url, target: (_b2 = item == null ? void 0 : item.link) == null ? void 0 : _b2.target, className: "group block border-b border-navy/5 py-4 md:col-span-4 md:p-8", children: [
        /* @__PURE__ */ jsx80("div", { className: "mt-auto h-6 w-6 rounded-full bg-white text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white", children: /* @__PURE__ */ jsx80(CircleArrow, {}) }),
        /* @__PURE__ */ jsx80("h3", { className: "text-h6 is-report mt-6 md:mt-10 lg:mt-[3.25rem]", dangerouslySetInnerHTML: { __html: (_c2 = item == null ? void 0 : item.link) == null ? void 0 : _c2.title } })
      ] }, index);
    })
  ] });
}
var ReportGrid_default;
var init_ReportGrid = __esm({
  "src/components/flexible/content/components/ReportGrid.tsx"() {
    init_Wp();
    init_Icons();
    ReportGrid_default = ReportGrid;
  }
});

// src/components/flexible/content/components/SubscribeContent.tsx
var SubscribeContent_exports = {};
__export(SubscribeContent_exports, {
  default: () => SubscribeContent_default
});
import { jsx as jsx81, jsxs as jsxs64 } from "react/jsx-runtime";
function SubscribeContent({ content, form_embed }) {
  return /* @__PURE__ */ jsxs64("div", { className: "grid gap-y-10 md:grid-cols-12 md:gap-x-6", children: [
    /* @__PURE__ */ jsx81("div", { className: "text-prose prose md:col-span-7", dangerouslySetInnerHTML: { __html: content } }),
    /* @__PURE__ */ jsx81("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsx81("div", { className: "md:ml-auto md:max-w-[20.875rem]", children: /* @__PURE__ */ jsx81(PostAsideSubscribe_default, { heading: form_embed == null ? void 0 : form_embed.heading, embed: form_embed == null ? void 0 : form_embed.embed }) }) })
  ] });
}
var SubscribeContent_default;
var init_SubscribeContent = __esm({
  "src/components/flexible/content/components/SubscribeContent.tsx"() {
    init_PostAsideSubscribe();
    SubscribeContent_default = SubscribeContent;
  }
});

// src/components/flexible/content/components/PageLinkCard.tsx
var PageLinkCard_exports = {};
__export(PageLinkCard_exports, {
  default: () => PageLinkCard_default
});
import Link23 from "next/link";
import { LazyMotion as LazyMotion17, m as m26, domAnimation as domAnimation17 } from "framer-motion";
import { jsx as jsx82, jsxs as jsxs65 } from "react/jsx-runtime";
function PageLinkCard({ content, thumbnail }) {
  var _a, _b, _c;
  const ease = [0.68, -0.2, 0.15, 0.98];
  const initial = {
    opacity: 0,
    transform: "translateX(3rem)"
  };
  const scaleAnimate = {
    opacity: 1,
    transform: "scaleX(1)"
  };
  const scaleExit = {
    opacity: 0,
    transform: "scaleX(0)"
  };
  const bars = Array.from({ length: 20 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsx82(LazyMotion17, { features: domAnimation17, children: /* @__PURE__ */ jsxs65(
    Link23,
    {
      href: ((_a = content.link) == null ? void 0 : _a.url) || "/#",
      className: "group mx-auto grid max-w-[42rem] overflow-hidden rounded-[.25rem] bg-navy pt-8 text-white md:items-center md:py-16 lg:max-w-[69.375rem] lg:grid-cols-9 lg:gap-x-5 lg:rounded-[.125rem] lg:pb-[10rem] lg:pt-[7.5rem]",
      children: [
        /* @__PURE__ */ jsxs65("div", { className: "mb-4 space-y-6 px-5 md:px-8 lg:col-span-5 lg:mb-0 lg:space-y-8 lg:pl-16", children: [
          (content == null ? void 0 : content.subheading) && /* @__PURE__ */ jsx82(
            m26.span,
            {
              className: "text-15 inline-block font-body opacity-80",
              dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading },
              initial,
              whileInView: scaleAnimate,
              viewport: { once: true },
              transition: {
                duration: 1,
                ease,
                delay: 0.4
              }
            }
          ),
          /* @__PURE__ */ jsx82(
            m26.h3,
            {
              className: "text-h5 max-w-[20.5rem] !font-[450] !leading-[1.2]",
              initial,
              whileInView: scaleAnimate,
              viewport: { once: true },
              transition: {
                duration: 1,
                ease,
                delay: 0.3
              },
              dangerouslySetInnerHTML: { __html: content.heading }
            }
          ),
          /* @__PURE__ */ jsxs65(
            m26.span,
            {
              className: "text-16 inline-flex items-center space-x-3",
              initial,
              whileInView: scaleAnimate,
              viewport: { once: true },
              transition: {
                duration: 1,
                ease,
                delay: 0.4
              },
              children: [
                /* @__PURE__ */ jsx82("div", { className: "z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-white text-navy transition-colors duration-200 group-hover:bg-blue group-hover:text-white", children: /* @__PURE__ */ jsx82(CircleArrow, {}) }),
                /* @__PURE__ */ jsx82("span", { className: "font-semibold", dangerouslySetInnerHTML: { __html: (_b = content == null ? void 0 : content.link) == null ? void 0 : _b.title } })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "relative p-5 pt-6 md:p-8 lg:col-span-4 lg:p-0", children: [
          /* @__PURE__ */ jsx82(
            m26.div,
            {
              className: "relative z-10 aspect-[78/47] w-full max-w-[32rem] overflow-hidden rounded-[0.375rem] lg:max-w-[25.625rem]",
              initial,
              whileInView: scaleAnimate,
              viewport: { once: true },
              transition: {
                duration: 1,
                ease,
                delay: 0.1
              },
              children: /* @__PURE__ */ jsx82(WpImage, { image: thumbnail, fill: true, className: "h-full w-full object-cover" })
            }
          ),
          /* @__PURE__ */ jsx82(
            m26.div,
            {
              className: "absolute left-[-9%] top-[15%] hidden aspect-[1/1] h-full bg-[#EAFBFF] lg:block",
              initial,
              whileInView: scaleAnimate,
              viewport: { once: true },
              transition: {
                duration: 1,
                ease,
                delay: 0.6
              }
            }
          ),
          /* @__PURE__ */ jsxs65("div", { className: "absolute inset-y-0 right-0 w-2/3 lg:inset-y-[-10rem]", children: [
            /* @__PURE__ */ jsx82(
              m26.div,
              {
                className: "flex h-[55%] w-full origin-left justify-between",
                initial: scaleExit,
                whileInView: scaleAnimate,
                viewport: { once: true },
                transition: {
                  duration: 1,
                  ease,
                  delay: 0.5
                },
                children: bars == null ? void 0 : bars.map((index) => /* @__PURE__ */ jsx82("div", { className: "h-full bg-lightBlue", style: { width: `${13 - index * 0.4}px` } }, index))
              }
            ),
            /* @__PURE__ */ jsx82(
              m26.div,
              {
                className: "ml-auto mt-auto flex h-[45%] w-1/3 origin-right justify-between",
                initial: scaleExit,
                whileInView: scaleAnimate,
                viewport: { once: true },
                transition: {
                  duration: 1,
                  ease,
                  delay: 0.6
                },
                children: (_c = bars == null ? void 0 : bars.slice(0, 8)) == null ? void 0 : _c.map((index) => /* @__PURE__ */ jsx82("div", { className: "h-full bg-lightBlue", style: { width: `${0.4 + index * 0.4}px` } }, index))
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
var PageLinkCard_default;
var init_PageLinkCard = __esm({
  "src/components/flexible/content/components/PageLinkCard.tsx"() {
    init_Wp();
    init_Icons();
    PageLinkCard_default = PageLinkCard;
  }
});

// src/components/flexible/company/components/StackedCards/HeadingAssetRow.tsx
var HeadingAssetRow_exports = {};
__export(HeadingAssetRow_exports, {
  default: () => HeadingAssetRow_default
});
import clsx29 from "clsx";
import { useWindowSize as useWindowSize5 } from "react-use";
import { Fragment as Fragment11, jsx as jsx83, jsxs as jsxs66 } from "react/jsx-runtime";
function HeadingAssetRow(props) {
  var _a, _b, _c;
  const { heading, assets } = props;
  const { width: windowWidth } = useWindowSize5();
  return /* @__PURE__ */ jsx83("div", { className: "heading-asset-row", children: /* @__PURE__ */ jsxs66("div", { className: "container--extra-small container", children: [
    heading && /* @__PURE__ */ jsx83(
      "span",
      {
        className: "text-h4 mb-12 block text-center md:mb-16",
        dangerouslySetInnerHTML: {
          __html: getSplitBreakText({
            text: heading
          })
        }
      }
    ),
    (assets == null ? void 0 : assets.length) > 0 && /* @__PURE__ */ jsxs66(Fragment11, { children: [
      windowWidth > 768 && /* @__PURE__ */ jsx83("div", { className: "flex w-full items-end justify-center gap-6", children: assets == null ? void 0 : assets.map((asset, index) => /* @__PURE__ */ jsx83("div", { className: clsx29(assetSizeMap == null ? void 0 : assetSizeMap[asset == null ? void 0 : asset.size], "relative w-full overflow-hidden rounded-lg"), children: /* @__PURE__ */ jsx83(Asset, __spreadProps(__spreadValues({}, asset == null ? void 0 : asset.asset), { fill: true, className: "object-top" }), `asset${index}`) }, `asset-${index}`)) }),
      windowWidth < 768 && /* @__PURE__ */ jsxs66("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx83("div", { className: "flex w-full items-end justify-between gap-4", children: (_b = (_a = [...assets]) == null ? void 0 : _a.splice(0, 2)) == null ? void 0 : _b.map((asset, index) => /* @__PURE__ */ jsx83("div", { className: clsx29(assetSizeMap == null ? void 0 : assetSizeMap[asset == null ? void 0 : asset.size], "relative w-full overflow-hidden rounded-lg"), children: /* @__PURE__ */ jsx83(Asset, __spreadProps(__spreadValues({}, asset == null ? void 0 : asset.asset), { fill: true, className: "object-top" }), `asset${index}`) }, `asset-row-one-${index}`)) }),
        /* @__PURE__ */ jsx83("div", { className: "relative aspect-[539/302] overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx83(Asset, __spreadProps(__spreadValues({}, (_c = assets[2]) == null ? void 0 : _c.asset), { fill: true, className: "object-top" })) })
      ] })
    ] })
  ] }) });
}
var assetSizeMap, HeadingAssetRow_default;
var init_HeadingAssetRow = __esm({
  "src/components/flexible/company/components/StackedCards/HeadingAssetRow.tsx"() {
    init_Asset();
    init_text();
    assetSizeMap = {
      small: "asset--small aspect-[210/328] md:aspect-[217/339] max-w-[40%] md:max-w-[20%] xl:max-w-[217px]",
      medium: "asset--medium aspect-[308/239] md:aspect-[319/247] flex-1 md:max-w-[30%] xl:max-w-[319px]",
      large: "asset--large aspect-[526/295] md:max-w-[30%] xl:max-w-[526px]"
    };
    HeadingAssetRow_default = HeadingAssetRow;
  }
});

// src/components/flexible/content/components/FormEmbeds.tsx
var FormEmbeds_exports = {};
__export(FormEmbeds_exports, {
  default: () => FormEmbeds_default
});
import clsx30 from "clsx";
import { jsx as jsx84 } from "react/jsx-runtime";
function FormEmbeds(props) {
  const { form_embeds, options } = props;
  return /* @__PURE__ */ jsx84("div", { className: "form-embeds", children: /* @__PURE__ */ jsx84("div", { className: clsx30((options == null ? void 0 : options.alignment) === "center" && "justify-center", (options == null ? void 0 : options.alignment) === "left" && "justify-start", "flex flex-wrap gap-10"), children: form_embeds == null ? void 0 : form_embeds.map((form_embed, index) => /* @__PURE__ */ jsx84("div", { className: "form-embed-wrapper rounded-lg bg-white px-6 py-7", children: /* @__PURE__ */ jsx84("div", { dangerouslySetInnerHTML: { __html: form_embed.embed } }, `form-embed-${index}`) })) }) });
}
var FormEmbeds_default;
var init_FormEmbeds = __esm({
  "src/components/flexible/content/components/FormEmbeds.tsx"() {
    FormEmbeds_default = FormEmbeds;
  }
});

// src/components/flexible/media/components/media/MediaBars.tsx
import { jsx as jsx85, jsxs as jsxs67 } from "react/jsx-runtime";
function MediaBars({ colour, style }) {
  const bars = Array.from({ length: 30 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs67("div", { className: "absolute inset-0 flex", children: [
    style === "bottom" && /* @__PURE__ */ jsx85("div", { className: "-mx-6 h-20 h-[13.875rem] w-[calc(100%+3rem)] origin-bottom scale-100 scale-y-50 self-end lg:-mx-20 lg:w-[calc(100%+10rem)] lg:scale-y-100", children: bars == null ? void 0 : bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { height: 22 - index * 2, marginTop: 3 + 2 * index } }, index)) }),
    style === "top_left" && /* @__PURE__ */ jsxs67("div", { className: "relative -mx-6 h-full w-[calc(100%+3rem)] lg:-mx-20 lg:w-[calc(100%+10rem)]", children: [
      /* @__PURE__ */ jsx85("div", { className: "absolute top-[6.6%] flex h-[48%] origin-left flex-row justify-start", children: bars == null ? void 0 : bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${4 - index * 0.2}px`, marginLeft: `${8 + 0.2 * index}px` } }, index)) }),
      /* @__PURE__ */ jsx85("div", { className: "absolute bottom-[6.6%] right-0 flex h-[48%] origin-right flex-row-reverse justify-end", children: bars == null ? void 0 : bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${10 - index * 0.6}px`, marginLeft: `${8 + 0.4 * index}px` } }, index)) })
    ] }),
    style === "center" && /* @__PURE__ */ jsxs67("div", { className: "relative -mx-6 my-auto h-[60%] w-[calc(100%+3rem)] lg:-mx-20 lg:w-[calc(100%+10rem)]", children: [
      /* @__PURE__ */ jsx85("div", { className: "absolute bottom-[32%] flex h-[68%] origin-left flex-row-reverse justify-start", children: bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${14 - index * 0.2}px`, marginLeft: `${7 + 0.2 * index}px` } }, index)) }),
      /* @__PURE__ */ jsx85("div", { className: "absolute bottom-[0%] flex h-[32%] origin-left flex-row justify-start", children: bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${7 - index * 0.4}px`, marginLeft: `${12 + 0.26 * index}px` } }, index)) }),
      /* @__PURE__ */ jsx85("div", { className: "absolute bottom-[32%] right-0 flex h-[68%] origin-left flex-row justify-end pr-2", children: bars.slice(0, 12).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${7 - index * 0.4}px`, marginLeft: `${12 + 0.2 * index}px` } }, index)) }),
      /* @__PURE__ */ jsx85("div", { className: "absolute bottom-[0%] right-0 flex h-[32%] origin-left flex-row-reverse justify-end", children: bars.slice(0, 10).map((index) => /* @__PURE__ */ jsx85("div", { className: `w-full ${colour}`, style: { width: `${14 - index * 0.2}px`, marginLeft: `${7 + 0.2 * index}px` } }, index)) })
    ] })
  ] });
}
var MediaBars_default;
var init_MediaBars = __esm({
  "src/components/flexible/media/components/media/MediaBars.tsx"() {
    MediaBars_default = MediaBars;
  }
});

// src/components/flexible/media/components/Media.tsx
import { jsx as jsx86, jsxs as jsxs68 } from "react/jsx-runtime";
function Media({ media, options }) {
  var _a, _b, _c, _d, _e;
  const componentWrapper = [""];
  const mediaWrapper = ["mx-auto relative z-10"];
  if ((media == null ? void 0 : media.type) !== "image") {
    mediaWrapper.push("rounded-lg overflow-hidden h-full");
  }
  if (((_a = options == null ? void 0 : options.background_colour) == null ? void 0 : _a.colours) !== "none") {
    componentWrapper.push("px-5 pt-5 md:px-12 md:pt-12 lg:px-[6.875rem] lg:pt-[6.875rem] rounded-lg", getClassValue((_b = options == null ? void 0 : options.background_colour) == null ? void 0 : _b.colours));
  }
  if ((options == null ? void 0 : options.background_springs) && ((_c = options == null ? void 0 : options.background_springs[0]) == null ? void 0 : _c.acf_fc_layout) === "bottom") {
    componentWrapper.push("pb-10 lg:pb-[4.875rem]");
  }
  return /* @__PURE__ */ jsxs68("div", { className: `relative ${componentWrapper.join(" ")}`, children: [
    /* @__PURE__ */ jsx86("div", { className: mediaWrapper.join(" "), style: { maxWidth: (options == null ? void 0 : options.max_width) ? `${options == null ? void 0 : options.max_width}px` : "none" }, children: /* @__PURE__ */ jsx86(Asset, __spreadProps(__spreadValues({}, media), { priority: options == null ? void 0 : options.media_load })) }),
    (options == null ? void 0 : options.background_springs) && /* @__PURE__ */ jsx86(MediaBars_default, { colour: getClassValue((_d = options == null ? void 0 : options.springs_colour) == null ? void 0 : _d.colours), style: (_e = options == null ? void 0 : options.background_springs[0]) == null ? void 0 : _e.acf_fc_layout })
  ] });
}
var Media_default;
var init_Media = __esm({
  "src/components/flexible/media/components/Media.tsx"() {
    init_Asset();
    init_ColorHelpers();
    init_MediaBars();
    Media_default = Media;
  }
});

// src/components/flexible/content/components/FeatureSlider.tsx
var FeatureSlider_exports = {};
__export(FeatureSlider_exports, {
  default: () => FeatureSlider_default
});
import { useRef as useRef10 } from "react";
import { m as m27, LazyMotion as LazyMotion18, domAnimation as domAnimation18 } from "framer-motion";
import clsx31 from "clsx";
import { Swiper as Swiper2, SwiperSlide as SwiperSlide2 } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { Fragment as Fragment12, jsx as jsx87, jsxs as jsxs69 } from "react/jsx-runtime";
function FeatureSlider({ slides = [] }) {
  const swiperRef = useRef10(null);
  return /* @__PURE__ */ jsx87(LazyMotion18, { features: domAnimation18, children: /* @__PURE__ */ jsx87(
    Swiper2,
    {
      ref: swiperRef,
      direction: "horizontal",
      spaceBetween: 92,
      speed: 1200,
      slidesPerView: 1.15,
      centeredSlides: true,
      autoplay: {
        delay: 4e3,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1.15
        }
      },
      modules: [Autoplay, Pagination],
      className: "quote-slider !mx-0 !overflow-visible will-change-transform",
      children: slides == null ? void 0 : slides.map((slide) => /* @__PURE__ */ jsx87(SwiperSlide2, { className: "!h-auto overflow-hidden rounded-xl transition-all duration-300 md:max-h-[620px]", children: ({ isActive }) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsxs69(Fragment12, { children: [
          (slide == null ? void 0 : slide.layout) === "image" && /* @__PURE__ */ jsx87(
            SlideLayoutImage,
            {
              isActive,
              title: slide == null ? void 0 : slide.image.title,
              link: (_a = slide == null ? void 0 : slide.image) == null ? void 0 : _a.link,
              colours: slide == null ? void 0 : slide.image.colours,
              image: slide == null ? void 0 : slide.image
            }
          ),
          (slide == null ? void 0 : slide.layout) === "video" && /* @__PURE__ */ jsx87(Media_default, { media: (_b = slide == null ? void 0 : slide.video) == null ? void 0 : _b.media, options: (_c = slide == null ? void 0 : slide.video) == null ? void 0 : _c.options })
        ] });
      } }, `slide-${slide.permalink}`))
    }
  ) });
}
function SlideLayoutImage({ title, colours, image, isActive, link }) {
  const theme = getBackgroundAndTextColor(colours);
  const ref = useRef10(null);
  return /* @__PURE__ */ jsxs69("div", { ref, className: clsx31("relative flex h-full flex-col overflow-hidden transition-all duration-300 sm:rounded-xl", theme), children: [
    /* @__PURE__ */ jsx87("div", { className: "absolute left-0 top-0 h-full w-[50%]", children: /* @__PURE__ */ jsx87(RightLines3, { isActive, height: "100%" }) }),
    isActive && /* @__PURE__ */ jsxs69(
      m27.div,
      {
        initial: { opacity: 0 },
        transition: { delay: 1.3, duration: 0.55 },
        animate: {
          opacity: isActive ? 1 : 0
        },
        className: "flex h-full flex-col justify-between p-4  md:px-11 md:py-8",
        children: [
          /* @__PURE__ */ jsx87("div", { className: "relative rounded-xl md:aspect-[974/400]", children: /* @__PURE__ */ jsx87(Link, { href: link == null ? void 0 : link.url, className: "w-full", children: /* @__PURE__ */ jsx87(Asset, __spreadProps(__spreadValues({}, image), { priority: true, className: "!w-[80% mx-auto] mx-auto max-h-[130px] rounded-xl sm:max-h-full sm:!w-auto" })) }) }),
          /* @__PURE__ */ jsxs69("div", { className: "items-end justify-between text-center sm:text-left md:flex", children: [
            /* @__PURE__ */ jsx87("div", { className: "pt-3 md:max-w-[430px] md:pt-6", children: /* @__PURE__ */ jsx87(Link, { href: link == null ? void 0 : link.url, children: /* @__PURE__ */ jsx87("h2", { className: "text-40-s text-center !leading-[1.1] md:text-left", children: title }) }) }),
            /* @__PURE__ */ jsxs69(Link, { href: link == null ? void 0 : link.url, className: "mt-2 flex items-center space-x-3 md:mt-0", children: [
              /* @__PURE__ */ jsx87(RightArrowCircle, {}),
              /* @__PURE__ */ jsx87("span", { className: "text-18 font-semibold", children: link == null ? void 0 : link.title })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function RightLines3({ height = null, width = null, isActive = false }) {
  return /* @__PURE__ */ jsx87(LazyMotion18, { features: domAnimation18, children: /* @__PURE__ */ jsx87(
    "svg",
    {
      style: {
        transformBox: "fill-box"
      },
      width,
      height,
      viewBox: "0 0 500 480",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxs69(
        m27.g,
        {
          style: {
            transformBox: "fill-box"
          },
          initial: { scaleX: 1 },
          animate: {
            scaleX: isActive ? 0 : 1,
            transition: {
              duration: 0.7,
              delay: 0.8,
              ease: "easeInOut"
            },
            originX: "0px"
          },
          children: [
            /* @__PURE__ */ jsx87("path", { d: "M450 265.873L450 4.27961e-05", stroke: "#0D1226", strokeWidth: "0.49655" }),
            /* @__PURE__ */ jsx87("path", { d: "M431.419 265.873L431.419 4.27961e-05", stroke: "#0D1226", strokeWidth: "0.9931" }),
            /* @__PURE__ */ jsx87("path", { d: "M412.839 265.873L412.839 4.27961e-05", stroke: "#0D1226", strokeWidth: "1.48965" }),
            /* @__PURE__ */ jsx87("path", { d: "M394.258 265.873L394.258 4.27961e-05", stroke: "#0D1226", strokeWidth: "1.9862" }),
            /* @__PURE__ */ jsx87("path", { d: "M375.677 265.873L375.677 4.27961e-05", stroke: "#0D1226", strokeWidth: "2.48275" }),
            /* @__PURE__ */ jsx87("path", { d: "M357.097 265.873L357.097 4.27961e-05", stroke: "#0D1226", strokeWidth: "2.9793" }),
            /* @__PURE__ */ jsx87("path", { d: "M338.516 265.873L338.516 4.27961e-05", stroke: "#0D1226", strokeWidth: "3.47585" }),
            /* @__PURE__ */ jsx87("path", { d: "M319.936 265.873L319.936 4.27961e-05", stroke: "#0D1226", strokeWidth: "3.9724" }),
            /* @__PURE__ */ jsx87("path", { d: "M301.355 265.873L301.355 4.27961e-05", stroke: "#0D1226", strokeWidth: "4.46895" }),
            /* @__PURE__ */ jsx87("path", { d: "M282.774 265.873L282.774 4.27961e-05", stroke: "#0D1226", strokeWidth: "4.9655" }),
            /* @__PURE__ */ jsx87("path", { d: "M264.193 265.873L264.193 4.27961e-05", stroke: "#0D1226", strokeWidth: "5.46205" }),
            /* @__PURE__ */ jsx87("path", { d: "M245.613 265.873L245.613 4.27961e-05", stroke: "#0D1226", strokeWidth: "5.9586" }),
            /* @__PURE__ */ jsx87("path", { d: "M227.032 265.873L227.032 4.27961e-05", stroke: "#0D1226", strokeWidth: "6.45515" }),
            /* @__PURE__ */ jsx87("path", { d: "M208.452 265.873L208.452 4.27961e-05", stroke: "#0D1226", strokeWidth: "6.9517" }),
            /* @__PURE__ */ jsx87("path", { d: "M189.871 265.873L189.871 4.27961e-05", stroke: "#0D1226", strokeWidth: "7.44825" }),
            /* @__PURE__ */ jsx87("path", { d: "M171.291 265.873L171.291 4.27961e-05", stroke: "#0D1226", strokeWidth: "7.9448" }),
            /* @__PURE__ */ jsx87("path", { d: "M152.709 265.873L152.709 4.27961e-05", stroke: "#0D1226", strokeWidth: "8.44135" }),
            /* @__PURE__ */ jsx87("path", { d: "M134.129 265.873L134.129 4.27961e-05", stroke: "#0D1226", strokeWidth: "8.93789" }),
            /* @__PURE__ */ jsx87("path", { d: "M115.548 265.873L115.548 4.27961e-05", stroke: "#0D1226", strokeWidth: "9.43444" }),
            /* @__PURE__ */ jsx87("path", { d: "M96.9678 265.873L96.9678 4.27961e-05", stroke: "#0D1226", strokeWidth: "9.93099" }),
            /* @__PURE__ */ jsx87("path", { d: "M78.3872 265.873L78.3872 4.27961e-05", stroke: "#0D1226", strokeWidth: "10.4275" }),
            /* @__PURE__ */ jsx87("path", { d: "M59.8062 265.873L59.8062 4.27961e-05", stroke: "#0D1226", strokeWidth: "10.9241" }),
            /* @__PURE__ */ jsx87("path", { d: "M41.2256 265.873L41.2256 4.27961e-05", stroke: "#0D1226", strokeWidth: "11.4206" }),
            /* @__PURE__ */ jsx87("path", { d: "M22.645 265.873L22.645 4.27961e-05", stroke: "#0D1226", strokeWidth: "11.9172" }),
            /* @__PURE__ */ jsx87("path", { d: "M4.06445 265.873L4.06445 4.27961e-05", stroke: "#0D1226", strokeWidth: "12.4137" }),
            /* @__PURE__ */ jsx87("path", { d: "M580 603V265.031", stroke: "#0D1226", strokeWidth: "0.49655" }),
            /* @__PURE__ */ jsx87("path", { d: "M561.419 603V265.031", stroke: "#0D1226", strokeWidth: "0.9931" }),
            /* @__PURE__ */ jsx87("path", { d: "M542.839 603V265.031", stroke: "#0D1226", strokeWidth: "1.48965" }),
            /* @__PURE__ */ jsx87("path", { d: "M524.258 603V265.031", stroke: "#0D1226", strokeWidth: "1.9862" }),
            /* @__PURE__ */ jsx87("path", { d: "M505.677 603V265.031", stroke: "#0D1226", strokeWidth: "2.48275" }),
            /* @__PURE__ */ jsx87("path", { d: "M487.097 603V265.031", stroke: "#0D1226", strokeWidth: "2.9793" }),
            /* @__PURE__ */ jsx87("path", { d: "M468.516 603V265.031", stroke: "#0D1226", strokeWidth: "3.47585" }),
            /* @__PURE__ */ jsx87("path", { d: "M449.936 603V265.031", stroke: "#0D1226", strokeWidth: "3.9724" }),
            /* @__PURE__ */ jsx87("path", { d: "M431.355 603V265.031", stroke: "#0D1226", strokeWidth: "4.46895" }),
            /* @__PURE__ */ jsx87("path", { d: "M412.774 603V265.031", stroke: "#0D1226", strokeWidth: "4.9655" }),
            /* @__PURE__ */ jsx87("path", { d: "M394.193 603V265.031", stroke: "#0D1226", strokeWidth: "5.46205" }),
            /* @__PURE__ */ jsx87("path", { d: "M375.613 603V265.031", stroke: "#0D1226", strokeWidth: "5.9586" }),
            /* @__PURE__ */ jsx87("path", { d: "M357.032 603V265.031", stroke: "#0D1226", strokeWidth: "6.45515" }),
            /* @__PURE__ */ jsx87("path", { d: "M338.452 603V265.031", stroke: "#0D1226", strokeWidth: "6.9517" }),
            /* @__PURE__ */ jsx87("path", { d: "M319.871 603V265.031", stroke: "#0D1226", strokeWidth: "7.44825" }),
            /* @__PURE__ */ jsx87("path", { d: "M301.291 603V265.031", stroke: "#0D1226", strokeWidth: "7.9448" }),
            /* @__PURE__ */ jsx87("path", { d: "M282.71 603V265.031", stroke: "#0D1226", strokeWidth: "8.44135" }),
            /* @__PURE__ */ jsx87("path", { d: "M264.129 603V265.031", stroke: "#0D1226", strokeWidth: "8.93789" }),
            /* @__PURE__ */ jsx87("path", { d: "M245.548 603L245.548 265.031", stroke: "#0D1226", strokeWidth: "9.43444" }),
            /* @__PURE__ */ jsx87("path", { d: "M226.968 603L226.968 265.031", stroke: "#0D1226", strokeWidth: "9.93099" }),
            /* @__PURE__ */ jsx87("path", { d: "M208.387 603L208.387 265.031", stroke: "#0D1226", strokeWidth: "10.4275" }),
            /* @__PURE__ */ jsx87("path", { d: "M189.807 603L189.807 265.031", stroke: "#0D1226", strokeWidth: "10.9241" }),
            /* @__PURE__ */ jsx87("path", { d: "M171.226 603L171.226 265.031", stroke: "#0D1226", strokeWidth: "11.4206" }),
            /* @__PURE__ */ jsx87("path", { d: "M152.646 603L152.646 265.031", stroke: "#0D1226", strokeWidth: "11.9172" }),
            /* @__PURE__ */ jsx87("path", { d: "M134.065 603L134.065 265.031", stroke: "#0D1226", strokeWidth: "12.4137" }),
            /* @__PURE__ */ jsx87("path", { d: "M115.484 603L115.484 265.031", stroke: "#0D1226", strokeWidth: "12.9103" }),
            /* @__PURE__ */ jsx87("path", { d: "M96.9033 603L96.9033 265.031", stroke: "#0D1226", strokeWidth: "13.4068" }),
            /* @__PURE__ */ jsx87("path", { d: "M78.3228 603L78.3228 265.031", stroke: "#0D1226", strokeWidth: "13.9034" }),
            /* @__PURE__ */ jsx87("path", { d: "M59.7422 603L59.7422 265.031", stroke: "#0D1226", strokeWidth: "14.3999" }),
            /* @__PURE__ */ jsx87("path", { d: "M41.1616 603L41.1616 265.031", stroke: "#0D1226", strokeWidth: "14.8965" }),
            /* @__PURE__ */ jsx87("path", { d: "M22.5811 603L22.5811 265.031", stroke: "#0D1226", strokeWidth: "15.393" }),
            /* @__PURE__ */ jsx87("path", { d: "M4.00049 603L4.00049 265.031", stroke: "#0D1226", strokeWidth: "15.8896" })
          ]
        }
      )
    }
  ) });
}
var FeatureSlider_default;
var init_FeatureSlider = __esm({
  "src/components/flexible/content/components/FeatureSlider.tsx"() {
    init_Link();
    init_Icons();
    init_ColorHelpers();
    init_Asset();
    init_Media();
    FeatureSlider_default = FeatureSlider;
  }
});

// src/components/flexible/media/components/TwoColumnMediaGrid.tsx
var TwoColumnMediaGrid_exports = {};
__export(TwoColumnMediaGrid_exports, {
  default: () => TwoColumnMediaGrid_default
});
import { jsx as jsx90 } from "react/jsx-runtime";
function TwoColumnMediaGrid({ layout, grid }) {
  return /* @__PURE__ */ jsx90("div", { className: "grid gap-y-6 sm:grid-cols-8 sm:gap-6", children: grid == null ? void 0 : grid.map((item, index) => {
    const cardWidth = [];
    if (layout === "staggered") {
      switch (index % 4) {
        case 0:
          cardWidth.push("sm:col-span-5");
          break;
        case 1:
          cardWidth.push("sm:col-span-3");
          break;
        case 2:
          cardWidth.push("sm:col-span-3");
          break;
        case 3:
          cardWidth.push("sm:col-span-5");
          break;
      }
    } else {
      cardWidth.push("sm:col-span-4");
    }
    return /* @__PURE__ */ jsx90("div", { className: `relative overflow-hidden rounded-md lg:rounded-lg ${cardWidth.join(" ")}`, children: /* @__PURE__ */ jsx90(Asset, __spreadProps(__spreadValues({}, item.media), { className: "object-cover" })) }, index);
  }) });
}
var TwoColumnMediaGrid_default;
var init_TwoColumnMediaGrid = __esm({
  "src/components/flexible/media/components/TwoColumnMediaGrid.tsx"() {
    init_Asset();
    TwoColumnMediaGrid_default = TwoColumnMediaGrid;
  }
});

// src/components/flexible/media/components/TextMediaBox.tsx
var TextMediaBox_exports = {};
__export(TextMediaBox_exports, {
  default: () => TextMediaBox_default
});
import { jsx as jsx91, jsxs as jsxs71 } from "react/jsx-runtime";
function TextMediaBox({ heading, description, links, media }) {
  const bars = Array.from({ length: 20 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs71("div", { className: "-mx-6 w-[calc(100%+3rem)] overflow-hidden bg-lightGrey px-6 pb-12 pt-10 text-navy md:px-10 md:pb-[4.5rem] md:pt-[6.125rem] lg:mx-auto lg:w-full lg:rounded-lg lg:px-[6.5625rem]", children: [
    /* @__PURE__ */ jsxs71("div", { className: "mx-auto max-w-[35.9375rem] text-center", children: [
      heading && /* @__PURE__ */ jsx91("h2", { className: "text-h3", dangerouslySetInnerHTML: { __html: heading } }),
      description && /* @__PURE__ */ jsx91("p", { className: "text-18 mt-4 font-body opacity-80 md:mt-6", dangerouslySetInnerHTML: { __html: description } }),
      links && /* @__PURE__ */ jsx91("div", { className: "mt-6 md:mt-10", children: /* @__PURE__ */ jsx91(LinkGroup_default, { links, centered: true }) })
    ] }),
    /* @__PURE__ */ jsxs71("div", { className: "relative mt-8 md:mt-[7.5rem]", children: [
      /* @__PURE__ */ jsx91("div", { className: "absolute left-[79%] top-[5%] flex h-[40%] w-[30%] flex-row-reverse justify-between", children: bars.map((index) => /* @__PURE__ */ jsx91("div", { className: "h-full shrink-0 bg-blue", style: { width: `${9 - index * 0.4}px` } }, `bars-second-set-${index}`)) }),
      /* @__PURE__ */ jsx91("div", { className: " relative z-10 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx91(Asset, __spreadValues({}, media)) }),
      /* @__PURE__ */ jsx91("div", { className: "absolute right-[70%] top-[75%] flex h-[40%] w-[40%] justify-between", children: bars.map((index) => /* @__PURE__ */ jsx91("div", { className: "h-full shrink-0 bg-blue", style: { width: `${9 - index * 0.4}px` } }, `bars-second-set-${index}`)) })
    ] })
  ] });
}
var TextMediaBox_default;
var init_TextMediaBox = __esm({
  "src/components/flexible/media/components/TextMediaBox.tsx"() {
    init_LinkGroup();
    init_Asset();
    TextMediaBox_default = TextMediaBox;
  }
});

// src/components/flexible/customers/components/Quote/StaticQuote.tsx
import { jsx as jsx93, jsxs as jsxs72 } from "react/jsx-runtime";
function StaticQuote({ customer }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsxs72("div", { className: "mx-auto flex max-w-[41.5rem] flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx93("div", { className: "relative mb-6 flex h-[3.5rem] w-24 justify-center md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32", children: /* @__PURE__ */ jsx93(WpImage, { image: (_b = (_a = customer.acf) == null ? void 0 : _a.media) == null ? void 0 : _b.logo, className: "h-full w-full object-contain" }) }),
    /* @__PURE__ */ jsx93("blockquote", { className: "quote-lg font-book font-heading", dangerouslySetInnerHTML: { __html: (_d = (_c = customer.acf) == null ? void 0 : _c.key_quote) == null ? void 0 : _d.quotation } }),
    /* @__PURE__ */ jsx93("div", { className: "mt-12", children: /* @__PURE__ */ jsxs72(Link, { href: customer.permalink, className: "text-17 inline-flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx93("div", { className: "z-10 h-[1.625rem] w-[1.625rem] rotate-45 rounded-full bg-black text-white", children: /* @__PURE__ */ jsx93(CircleArrow, {}) }),
      /* @__PURE__ */ jsx93("span", { className: "font-semibold", dangerouslySetInnerHTML: { __html: "Read full story" } })
    ] }) })
  ] });
}
var StaticQuote_default;
var init_StaticQuote = __esm({
  "src/components/flexible/customers/components/Quote/StaticQuote.tsx"() {
    init_Link();
    init_Wp();
    init_Icons();
    StaticQuote_default = StaticQuote;
  }
});

// src/components/flexible/customers/components/Quote/PageQuote.tsx
import { jsx as jsx94, jsxs as jsxs73 } from "react/jsx-runtime";
function PageQuote({ quote }) {
  return /* @__PURE__ */ jsxs73("div", { className: "mx-auto flex max-w-[48rem] flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx94("div", { className: "relative mb-6 flex h-[3.5rem] w-24 justify-center md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32", children: /* @__PURE__ */ jsx94(WpImage, { image: quote == null ? void 0 : quote.logo, className: "h-full w-full object-contain object-center" }) }),
    /* @__PURE__ */ jsx94("blockquote", { className: "quote-lg font-book font-heading", dangerouslySetInnerHTML: { __html: quote.quote } }),
    /* @__PURE__ */ jsxs73("div", { className: "mt-12 flex items-center space-x-3 md:space-x-4 lg:mt-[3.5rem]", children: [
      (quote == null ? void 0 : quote.profile) && /* @__PURE__ */ jsx94("div", { className: "relative h-12 w-12 overflow-hidden rounded-full bg-lightRed lg:h-[4.5rem] lg:w-[4.5rem]", children: /* @__PURE__ */ jsx94(WpImage, { image: quote == null ? void 0 : quote.profile, fill: true, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs73("div", { className: "flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsx94("span", { className: "text-18 !font-medium", dangerouslySetInnerHTML: { __html: quote.name } }),
        /* @__PURE__ */ jsx94("span", { className: "text-15 !font-body opacity-85", dangerouslySetInnerHTML: { __html: quote.job_position } })
      ] })
    ] })
  ] });
}
var PageQuote_default;
var init_PageQuote = __esm({
  "src/components/flexible/customers/components/Quote/PageQuote.tsx"() {
    init_Wp();
    PageQuote_default = PageQuote;
  }
});

// src/components/flexible/customers/components/Quote/RotatingQuotes.tsx
import { useState as useState20, useRef as useRef11 } from "react";
import { m as m28, LazyMotion as LazyMotion19, domAnimation as domAnimation19, useAnimationControls } from "framer-motion";
import { Swiper as Swiper3, SwiperSlide as SwiperSlide3 } from "swiper/react";
import { Autoplay as Autoplay2, Pagination as Pagination2, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { jsx as jsx95, jsxs as jsxs74 } from "react/jsx-runtime";
function RotatingQuotes({ customers }) {
  const ease = [0.68, -0.2, 0.15, 0.98];
  const initial = {
    opacity: 0,
    transform: "translateY(-2rem)"
  };
  const animate = {
    opacity: 1,
    transform: "translateY(0rem)"
  };
  const exit = {
    opacity: 0,
    transform: "translateY(2rem)"
  };
  const controls = useAnimationControls();
  const [activeQuote, setActiveQuote] = useState20(0);
  const swiperRef = useRef11(null);
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveQuote(swiperRef.current.swiper.activeIndex);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet(index, className) {
      return `<button type="button" aria-label="Select the next slide" class="${className}"></button>`;
    }
  };
  return /* @__PURE__ */ jsx95(LazyMotion19, { features: domAnimation19, children: /* @__PURE__ */ jsx95(
    Swiper3,
    {
      ref: swiperRef,
      direction: "horizontal",
      spaceBetween: 24,
      speed: 1200,
      slidesPerView: 1,
      effect: "fade",
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false
      },
      onSlideChange: handleSlideChange,
      pagination,
      modules: [Autoplay2, Pagination2, EffectFade],
      className: "quote-slider !mx-0 !overflow-visible will-change-transform",
      children: customers == null ? void 0 : customers.map((customer, l) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsx95(SwiperSlide3, { children: /* @__PURE__ */ jsxs74("div", { className: "mx-auto flex max-w-[41.5rem] flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsx95(
            m28.div,
            {
              className: "relative mb-6 h-[3.5rem] w-24 md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32",
              initial,
              animate: activeQuote === l ? animate : exit,
              transition: {
                duration: activeQuote === l ? 1 : 0.5,
                ease,
                delay: activeQuote === l ? 0.6 : 0.2
              },
              children: /* @__PURE__ */ jsx95(WpImage, { image: (_b = (_a = customer.acf) == null ? void 0 : _a.media) == null ? void 0 : _b.logo, fill: true, className: "h-full w-full object-contain" })
            }
          ),
          /* @__PURE__ */ jsx95(
            m28.blockquote,
            {
              className: "quote-lg font-book font-heading",
              dangerouslySetInnerHTML: { __html: (_d = (_c = customer.acf) == null ? void 0 : _c.key_quote) == null ? void 0 : _d.quotation },
              initial,
              animate: activeQuote === l ? animate : exit,
              transition: {
                duration: activeQuote === l ? 1 : 0.5,
                ease,
                delay: activeQuote === l ? 0.7 : 0.1
              }
            }
          ),
          /* @__PURE__ */ jsx95(
            m28.div,
            {
              className: "mt-12",
              initial,
              animate: activeQuote === l ? animate : exit,
              transition: {
                duration: activeQuote === l ? 1 : 0.5,
                ease,
                delay: activeQuote === l ? 0.8 : 0
              },
              children: /* @__PURE__ */ jsxs74(Link, { href: customer.permalink, className: "text-17 group inline-flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx95("div", { className: "z-10 h-[1.625rem] w-[1.625rem]", children: /* @__PURE__ */ jsx95(RightArrowCircle, { circleClassName: "text-navy group-hover:text-blue", arrowClassName: "text-white group-hover:text-white" }) }),
                /* @__PURE__ */ jsx95("span", { className: "font-semibold", dangerouslySetInnerHTML: { __html: "Read full story" } })
              ] })
            }
          )
        ] }, `customer-${customer.permalink}`) }, `customer-${customer.permalink}`);
      })
    }
  ) });
}
var RotatingQuotes_default;
var init_RotatingQuotes = __esm({
  "src/components/flexible/customers/components/Quote/RotatingQuotes.tsx"() {
    init_Link();
    init_Wp();
    init_Icons();
    RotatingQuotes_default = RotatingQuotes;
  }
});

// src/components/flexible/customers/components/Quote.tsx
var Quote_exports = {};
__export(Quote_exports, {
  default: () => Quote_default
});
import { jsx as jsx96 } from "react/jsx-runtime";
function Quote({ quote_source, customers, quote }) {
  if (quote_source === "customerStory" && (customers == null ? void 0 : customers.length) > 1) {
    return /* @__PURE__ */ jsx96(RotatingQuotes_default, { customers });
  }
  return /* @__PURE__ */ jsx96("div", { children: quote_source === "customerStory" ? customers == null ? void 0 : customers.map((customer, l) => /* @__PURE__ */ jsx96(StaticQuote_default, { customer }, l)) : /* @__PURE__ */ jsx96(PageQuote_default, { quote }) });
}
var Quote_default;
var init_Quote = __esm({
  "src/components/flexible/customers/components/Quote.tsx"() {
    init_StaticQuote();
    init_PageQuote();
    init_RotatingQuotes();
    Quote_default = Quote;
  }
});

// src/components/flexible/customers/components/CustomersSlideOut.tsx
var CustomersSlideOut_exports = {};
__export(CustomersSlideOut_exports, {
  default: () => CustomersSlideOut_default
});
import { createRef, useRef as useRef12, useState as useState21 } from "react";
import Link24 from "next/link";
import { LazyMotion as LazyMotion20, m as m29, domMax, useIsomorphicLayoutEffect } from "framer-motion";
import { Fragment as Fragment13, jsx as jsx97, jsxs as jsxs75 } from "react/jsx-runtime";
function CustomersSlideOut({ customers }) {
  const [activeCustomer, setActiveCustomer] = useState21(0);
  const ease = [0.68, -0.2, 0.15, 0.98];
  const initial = {
    opacity: 0,
    transform: "translateX(3rem)"
  };
  const animate = {
    opacity: 1,
    transform: "translateX(0rem)"
  };
  const scaleAnimate = {
    opacity: 1,
    transform: "scaleX(1)"
  };
  const scaleExit = {
    opacity: 0,
    transform: "scaleX(0)"
  };
  const bars = Array.from({ length: 20 }, (_, i) => i + 1);
  const { width: windowWidth } = useWindowSize3();
  const isMobile = windowWidth < 768;
  const updateCustomer = (l) => {
    setActiveCustomer(l);
  };
  const [tallestCardHeight, setTallestCardHeight] = useState21(0);
  const cardRefs = useRef12([]);
  cardRefs.current = customers == null ? void 0 : customers.map((_, i) => cardRefs.current[i] || createRef());
  useIsomorphicLayoutEffect(() => {
    const tallestHeight = cardRefs.current.reduce((maxHeight, cardRef) => Math.max(maxHeight, cardRef.current.offsetHeight), 0);
    setTallestCardHeight(tallestHeight);
  }, []);
  return /* @__PURE__ */ jsx97(LazyMotion20, { features: domMax, children: /* @__PURE__ */ jsx97(
    m29.div,
    {
      layout: true,
      className: `flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ${(customers == null ? void 0 : customers.length) === 1 ? "justify-center" : ""}`,
      style: { height: tallestCardHeight > 0 && !isMobile ? `${tallestCardHeight}px` : "auto" },
      children: customers == null ? void 0 : customers.map((customer, i) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        const isActive = isMobile ? true : activeCustomer === i;
        const basis = [""];
        if (i === 0) {
          basis.push("md:basis-[7%] lg:basis-[5%]");
        } else if (i === 1) {
          basis.push("md:basis-[6.875%] lg:basis-[4.375%]");
        } else if (i === 2) {
          basis.push("md:basis-[6.25%] lg:basis-[3.75%]");
        } else {
          basis.push("md:basis-[5%] lg:basis-[2.5%]");
        }
        return /* @__PURE__ */ jsx97(
          m29.div,
          {
            ref: cardRefs.current[i],
            layout: true,
            className: `overflow-hidden ${isActive ? "shrink-0 md:basis-[75%] lg:basis-[85.625%]" : `shrink ${basis.join(" ")}`}`,
            onMouseEnter: () => isMobile ? void 0 : updateCustomer(i),
            children: /* @__PURE__ */ jsx97(
              Link24,
              {
                href: customer.permalink,
                className: `group grid h-full overflow-hidden rounded-[.25rem] bg-lightGrey pt-8 lg:grid-cols-9 lg:rounded-[.125rem] lg:py-16 ${isActive ? "lg:gap-x-5" : "pointer-events-none"}`,
                children: isActive && /* @__PURE__ */ jsxs75(Fragment13, { children: [
                  /* @__PURE__ */ jsxs75("div", { className: "mb-4 space-y-6 px-5 md:px-8 lg:col-span-5 lg:mb-0 lg:space-y-8 lg:pl-16", children: [
                    /* @__PURE__ */ jsx97(
                      m29.div,
                      {
                        className: "relative flex h-10 w-[7rem] items-center md:h-12",
                        initial,
                        animate,
                        transition: {
                          duration: 0.8,
                          ease,
                          delay: 0.1
                        },
                        children: /* @__PURE__ */ jsx97(WpImage, { image: (_b = (_a = customer == null ? void 0 : customer.acf) == null ? void 0 : _a.media) == null ? void 0 : _b.logo, fill: true, className: "h-full w-full object-contain object-left" })
                      }
                    ),
                    /* @__PURE__ */ jsx97(
                      m29.span,
                      {
                        className: "text-h5 block max-w-[25.375rem] !font-[450] !leading-[1.2]",
                        initial,
                        animate,
                        transition: {
                          duration: 0.8,
                          ease,
                          delay: 0.2
                        },
                        dangerouslySetInnerHTML: { __html: customer.post_title }
                      }
                    ),
                    /* @__PURE__ */ jsxs75(
                      m29.span,
                      {
                        className: "text-16 inline-flex items-center space-x-3",
                        initial,
                        animate,
                        transition: {
                          duration: 0.8,
                          ease,
                          delay: 0.3
                        },
                        children: [
                          /* @__PURE__ */ jsx97("div", { className: "z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition-colors duration-200 group-hover:bg-blue", children: /* @__PURE__ */ jsx97(CircleArrow, {}) }),
                          /* @__PURE__ */ jsx97("span", { className: "font-semibold", dangerouslySetInnerHTML: { __html: "Read full story" } })
                        ]
                      }
                    ),
                    ((_c = customer == null ? void 0 : customer.products) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxs75(
                      m29.div,
                      {
                        className: "!mt-8 space-y-2 lg:!mt-24 lg:flex lg:items-center lg:space-x-3 lg:space-y-0 xl:space-x-10",
                        initial,
                        animate,
                        transition: {
                          duration: 0.8,
                          ease,
                          delay: 0.4
                        },
                        children: [
                          /* @__PURE__ */ jsx97("span", { className: "text-16 font-body tracking-[-0.01em] opacity-60", dangerouslySetInnerHTML: { __html: "Products used" } }),
                          (_e = (_d = customer == null ? void 0 : customer.products) == null ? void 0 : _d.slice(0)) == null ? void 0 : _e.map((item) => {
                            var _a2, _b2, _c2, _d2;
                            return /* @__PURE__ */ jsxs75("div", { className: "flex space-x-3 xl:items-center", children: [
                              /* @__PURE__ */ jsxs75("div", { className: "relative mt-[.3rem] flex h-3 w-4 justify-between space-x-[0.125rem] xl:mt-0", children: [
                                /* @__PURE__ */ jsx97("div", { className: `h-full w-[0.0625rem] ${getClassValue((_a2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _a2.customer_colour)}` }),
                                /* @__PURE__ */ jsx97("div", { className: `h-full w-[0.125rem] ${getClassValue((_b2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _b2.customer_colour)}` }),
                                /* @__PURE__ */ jsx97("div", { className: `h-full w-[0.1875rem] ${getClassValue((_c2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _c2.customer_colour)}` }),
                                /* @__PURE__ */ jsx97("div", { className: `h-full w-[.25rem] ${getClassValue((_d2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _d2.customer_colour)}` })
                              ] }),
                              /* @__PURE__ */ jsx97("span", { className: "text-16 font-heading font-medium tracking-[0.01em]", dangerouslySetInnerHTML: { __html: item.name } })
                            ] }, item.id);
                          })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs75("div", { className: "relative p-5 pt-6 md:p-8 lg:col-span-4 lg:p-0", children: [
                    /* @__PURE__ */ jsx97(
                      m29.div,
                      {
                        className: "relative z-10 aspect-[205/136] w-full max-w-[32rem] overflow-hidden rounded-[0.375rem] lg:max-w-[25.625rem]",
                        initial,
                        animate,
                        transition: {
                          duration: 0.8,
                          ease,
                          delay: 0.1
                        },
                        children: /* @__PURE__ */ jsx97(
                          WpImage,
                          {
                            image: {
                              url: (_f = customer == null ? void 0 : customer.featured_image) == null ? void 0 : _f.src,
                              alt: (_g = customer == null ? void 0 : customer.featured_image) == null ? void 0 : _g.alt,
                              height: (_h = customer == null ? void 0 : customer.featured_image) == null ? void 0 : _h.height,
                              width: (_i = customer == null ? void 0 : customer.featured_image) == null ? void 0 : _i.width
                            },
                            fill: true,
                            className: "h-full w-full object-cover"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs75("div", { className: "absolute inset-y-0 right-0 w-2/3 lg:inset-y-[-4rem]", children: [
                      /* @__PURE__ */ jsx97(
                        m29.div,
                        {
                          className: "flex h-[55%] w-full origin-left justify-between",
                          initial: scaleExit,
                          animate: scaleAnimate,
                          transition: {
                            duration: 0.8,
                            ease,
                            delay: 0.4
                          },
                          children: bars == null ? void 0 : bars.map((index) => {
                            var _a2;
                            return /* @__PURE__ */ jsx97("div", { className: `h-full ${getClassValue((_a2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _a2.customer_colour)}`, style: { width: `${13 - index * 0.4}px` } }, index);
                          })
                        }
                      ),
                      /* @__PURE__ */ jsx97(
                        m29.div,
                        {
                          className: "ml-auto mt-auto flex h-[45%] w-1/3 origin-right justify-between",
                          initial: scaleExit,
                          animate: scaleAnimate,
                          transition: {
                            duration: 0.8,
                            ease,
                            delay: 0.5
                          },
                          children: (_j = bars == null ? void 0 : bars.slice(0, 8)) == null ? void 0 : _j.map((index) => {
                            var _a2;
                            return /* @__PURE__ */ jsx97(
                              "div",
                              {
                                className: `h-full ${getClassValue((_a2 = customer == null ? void 0 : customer.acf) == null ? void 0 : _a2.customer_colour)}`,
                                style: { width: `${0.4 + index * 0.4}px` }
                              },
                              index
                            );
                          })
                        }
                      )
                    ] })
                  ] })
                ] })
              }
            )
          },
          customer.ID
        );
      })
    }
  ) });
}
var CustomersSlideOut_default;
var init_CustomersSlideOut = __esm({
  "src/components/flexible/customers/components/CustomersSlideOut.tsx"() {
    init_Wp();
    init_Icons();
    init_useWindowSize();
    init_ColorHelpers();
    CustomersSlideOut_default = CustomersSlideOut;
  }
});

// src/components/flexible/customers/components/CustomerGrid/components/DoubleStatCard.tsx
import { jsx as jsx98, jsxs as jsxs76 } from "react/jsx-runtime";
function DoubleStatCard({ card }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs76("div", { className: "customer-grid__double-stat-card relative grid min-h-[250px] grid-cols-2 overflow-hidden rounded-lg bg-lightBlue md:min-h-0", children: [
    /* @__PURE__ */ jsx98("div", { className: "w-full", children: /* @__PURE__ */ jsx98(DoubleLeftLines, { width: "100%" }) }),
    /* @__PURE__ */ jsx98(DoubleStatContentBlock, { content: (_a = card == null ? void 0 : card.double_stats) == null ? void 0 : _a[0], hideBottomRow: true }),
    /* @__PURE__ */ jsx98(DoubleStatContentBlock, { content: (_b = card == null ? void 0 : card.double_stats) == null ? void 0 : _b[1], hideTopRow: true }),
    /* @__PURE__ */ jsx98("div", { className: "flex w-full flex-col justify-end", children: /* @__PURE__ */ jsx98(DoubleRightLines, { width: "100%" }) })
  ] });
}
function DoubleLeftLines({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs76("svg", { width, height, viewBox: "0 0 314 174", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx98("path", { d: "M313 0V174", stroke: "white", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M294.291 0V174", stroke: "white" }),
    /* @__PURE__ */ jsx98("path", { d: "M275.58 0V174", stroke: "white", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M256.871 0V174", stroke: "white", strokeWidth: "2" }),
    /* @__PURE__ */ jsx98("path", { d: "M238.162 0V174", stroke: "white", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M219.451 0V174", stroke: "white", strokeWidth: "3" }),
    /* @__PURE__ */ jsx98("path", { d: "M200.742 0V174", stroke: "white", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M182.033 0V174", stroke: "white", strokeWidth: "4" }),
    /* @__PURE__ */ jsx98("path", { d: "M163.322 0V174", stroke: "white", strokeWidth: "4.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M144.613 0V174", stroke: "white", strokeWidth: "5" }),
    /* @__PURE__ */ jsx98("path", { d: "M125.902 0V174", stroke: "white", strokeWidth: "5.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M107.193 0V174", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ jsx98("path", { d: "M88.4844 0V174", stroke: "white", strokeWidth: "6.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M69.7734 0V174", stroke: "white", strokeWidth: "7" }),
    /* @__PURE__ */ jsx98("path", { d: "M51.0645 0V174", stroke: "white", strokeWidth: "7.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M32.3555 0V174", stroke: "white", strokeWidth: "8" }),
    /* @__PURE__ */ jsx98("path", { d: "M13.6445 0V174", stroke: "white", strokeWidth: "8.5" })
  ] });
}
function DoubleRightLines({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs76("svg", { width, height, viewBox: "0 0 314 174", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx98("path", { d: "M1 0V174", stroke: "white", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M19.709 0V174", stroke: "white" }),
    /* @__PURE__ */ jsx98("path", { d: "M38.4199 0V174", stroke: "white", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M57.1289 0V174", stroke: "white", strokeWidth: "2" }),
    /* @__PURE__ */ jsx98("path", { d: "M75.8379 0V174", stroke: "white", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M94.5488 0V174", stroke: "white", strokeWidth: "3" }),
    /* @__PURE__ */ jsx98("path", { d: "M113.258 0V174", stroke: "white", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M131.967 0V174", stroke: "white", strokeWidth: "4" }),
    /* @__PURE__ */ jsx98("path", { d: "M150.678 0V174", stroke: "white", strokeWidth: "4.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M169.387 0V174", stroke: "white", strokeWidth: "5" }),
    /* @__PURE__ */ jsx98("path", { d: "M188.098 0V174", stroke: "white", strokeWidth: "5.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M206.807 0V174", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ jsx98("path", { d: "M225.516 0V174", stroke: "white", strokeWidth: "6.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M244.227 0V174", stroke: "white", strokeWidth: "7" }),
    /* @__PURE__ */ jsx98("path", { d: "M262.936 0V174", stroke: "white", strokeWidth: "7.5" }),
    /* @__PURE__ */ jsx98("path", { d: "M281.645 0V174", stroke: "white", strokeWidth: "8" }),
    /* @__PURE__ */ jsx98("path", { d: "M300.355 0V174", stroke: "white", strokeWidth: "8.5" })
  ] });
}
function DoubleStatContentBlock({ content, hideTopRow = false, hideBottomRow = false }) {
  return /* @__PURE__ */ jsxs76("div", { className: "flex h-full flex-col items-start justify-between py-3 pl-[22px] pr-3", children: [
    /* @__PURE__ */ jsx98(
      TextStrokeStack_default,
      {
        hideTopRow,
        hideBottomRow,
        topText: hideBottomRow ? content == null ? void 0 : content.top_text : "",
        centerText: hideBottomRow ? content == null ? void 0 : content.bottom_text : content == null ? void 0 : content.top_text,
        bottomText: hideTopRow ? content == null ? void 0 : content.bottom_text : "",
        options: {
          textColor: "navy",
          bgColor: "lightBlue",
          strokeColor: "navy"
        }
      }
    ),
    /* @__PURE__ */ jsx98("p", { className: "text-22 font-[450] text-navy", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.label } })
  ] });
}
var DoubleStatCard_default;
var init_DoubleStatCard = __esm({
  "src/components/flexible/customers/components/CustomerGrid/components/DoubleStatCard.tsx"() {
    init_TextStrokeStack();
    DoubleStatCard_default = DoubleStatCard;
  }
});

// src/components/flexible/customers/components/CustomerGrid/components/SingleStatCard.tsx
import { jsx as jsx99, jsxs as jsxs77 } from "react/jsx-runtime";
function SingleStatCard({ card }) {
  var _a, _b, _c, _d, _e, _f, _g;
  return /* @__PURE__ */ jsxs77("div", { className: "custome-grid__single-stat-card relative min-h-[250px] overflow-hidden rounded-lg bg-brightGreen md:min-h-0", children: [
    /* @__PURE__ */ jsx99("div", { className: "absolute right-0 top-0 h-full", children: /* @__PURE__ */ jsx99(RightLines4, { height: "100%" }) }),
    /* @__PURE__ */ jsxs77("div", { className: "relative flex h-full flex-col items-start justify-between p-8", children: [
      /* @__PURE__ */ jsx99(
        TextStrokeStack_default,
        {
          textClassName: "!tracking-[0em]",
          bottomText: (_b = (_a = card == null ? void 0 : card.single_stat) == null ? void 0 : _a.stacked_text) == null ? void 0 : _b.top_text,
          centerText: (_d = (_c = card == null ? void 0 : card.single_stat) == null ? void 0 : _c.stacked_text) == null ? void 0 : _d.center_text,
          topText: (_f = (_e = card == null ? void 0 : card.single_stat) == null ? void 0 : _e.stacked_text) == null ? void 0 : _f.bottom_text,
          options: {
            textSize: "88",
            textColor: "navy",
            bgColor: "brightGreen",
            strokeColor: "navy"
          }
        }
      ),
      /* @__PURE__ */ jsx99("p", { className: "text-h6 font-[450]", dangerouslySetInnerHTML: { __html: (_g = card == null ? void 0 : card.single_stat) == null ? void 0 : _g.label } })
    ] })
  ] });
}
function RightLines4({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs77("svg", { width, height, viewBox: "0 0 277 348", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx99("path", { d: "M1 0V348", stroke: "white", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M19.709 0V348", stroke: "white" }),
    /* @__PURE__ */ jsx99("path", { d: "M38.4199 0V348", stroke: "white", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M57.1289 0V348", stroke: "white", strokeWidth: "2" }),
    /* @__PURE__ */ jsx99("path", { d: "M75.8379 0V348", stroke: "white", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M94.5488 0V348", stroke: "white", strokeWidth: "3" }),
    /* @__PURE__ */ jsx99("path", { d: "M113.258 0V348", stroke: "white", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M131.967 0V348", stroke: "white", strokeWidth: "4" }),
    /* @__PURE__ */ jsx99("path", { d: "M150.678 0V348", stroke: "white", strokeWidth: "4.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M169.387 0V348", stroke: "white", strokeWidth: "5" }),
    /* @__PURE__ */ jsx99("path", { d: "M188.098 0V348", stroke: "white", strokeWidth: "5.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M206.807 0V348", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ jsx99("path", { d: "M225.516 0V348", stroke: "white", strokeWidth: "6.5" }),
    /* @__PURE__ */ jsx99("path", { d: "M244.227 0V348", stroke: "white", strokeWidth: "7" }),
    /* @__PURE__ */ jsx99("path", { d: "M262.936 0V348", stroke: "white", strokeWidth: "7.5" })
  ] });
}
var SingleStatCard_default;
var init_SingleStatCard = __esm({
  "src/components/flexible/customers/components/CustomerGrid/components/SingleStatCard.tsx"() {
    init_TextStrokeStack();
    SingleStatCard_default = SingleStatCard;
  }
});

// src/components/flexible/customers/components/CustomerGrid/components/PostCard.tsx
import Link25 from "next/link";
import { jsx as jsx100, jsxs as jsxs78 } from "react/jsx-runtime";
function PostCard({ card }) {
  var _a, _b, _c, _d, _e;
  const relatedPost = (_a = card == null ? void 0 : card.post) == null ? void 0 : _a[0];
  return /* @__PURE__ */ jsxs78(
    Link25,
    {
      href: (relatedPost == null ? void 0 : relatedPost.permalink) || "/",
      className: "customer-grid-card--post group relative min-h-[250px] overflow-hidden rounded-lg px-7 py-6 md:min-h-[348px]",
      children: [
        /* @__PURE__ */ jsx100(
          WpImage,
          {
            image: (_c = (_b = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _b.media) == null ? void 0 : _c.thumbnail,
            className: "linear absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsx100("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs78("div", { className: "relative flex h-full flex-col justify-between", children: [
          /* @__PURE__ */ jsxs78("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ jsx100(WpImage, { image: (_e = (_d = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _d.media) == null ? void 0 : _e.light_logo, className: "h-8 w-auto" }),
            /* @__PURE__ */ jsx100("div", { className: "transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105", children: /* @__PURE__ */ jsx100(TopRightArrowCircle, { width: "36", height: "36" }) })
          ] }),
          /* @__PURE__ */ jsx100(
            "span",
            {
              className: "text-h6 max-w-full font-[450] text-white md:max-w-[85%]",
              dangerouslySetInnerHTML: {
                __html: relatedPost == null ? void 0 : relatedPost.post_title
              }
            }
          )
        ] })
      ]
    }
  );
}
var PostCard_default;
var init_PostCard = __esm({
  "src/components/flexible/customers/components/CustomerGrid/components/PostCard.tsx"() {
    init_Icons();
    init_Wp();
    PostCard_default = PostCard;
  }
});

// src/components/flexible/customers/components/CustomerGrid/CustomerGrid.tsx
var CustomerGrid_exports = {};
__export(CustomerGrid_exports, {
  default: () => CustomerGrid_default
});
import { Fragment as Fragment14 } from "react";
import { jsx as jsx101, jsxs as jsxs79 } from "react/jsx-runtime";
function CustomerGrid(props) {
  const { cards } = props;
  return /* @__PURE__ */ jsx101("div", { className: "customer-grid", children: /* @__PURE__ */ jsx101("div", { className: "grid gap-4 md:grid-cols-2 md:gap-6", children: (cards == null ? void 0 : cards.length) > 0 && (cards == null ? void 0 : cards.map(({ card }, i) => {
    const { layout } = card;
    return /* @__PURE__ */ jsxs79(Fragment14, { children: [
      layout === "doubleStat" && /* @__PURE__ */ jsx101(DoubleStatCard_default, { card }),
      layout === "singleStat" && /* @__PURE__ */ jsx101(SingleStatCard_default, { card }),
      layout === "post" && /* @__PURE__ */ jsx101(PostCard_default, { card })
    ] }, `customer-grid-card-${i}`);
  })) }) });
}
var CustomerGrid_default;
var init_CustomerGrid = __esm({
  "src/components/flexible/customers/components/CustomerGrid/CustomerGrid.tsx"() {
    init_DoubleStatCard();
    init_SingleStatCard();
    init_PostCard();
    CustomerGrid_default = CustomerGrid;
  }
});

// src/utils/cacheBustingString.ts
function cacheBustingString(url = "") {
  const date = /* @__PURE__ */ new Date();
  const dateStr = date.getTime().toString().slice(0, 9);
  if (!url.length) {
    return dateStr;
  }
  return `${url}${url.includes("?") ? `&v=${dateStr}` : `?v=${dateStr}`}`;
}
var init_cacheBustingString = __esm({
  "src/utils/cacheBustingString.ts"() {
  }
});

// src/utils/cms.ts
async function avoidRateLimit() {
  function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms));
  }
  if (process.env.NODE_ENV === "production") {
    await sleep();
  }
}
function cms() {
  return {
    paths: async () => {
      const data = await fetchFromWp("together/paths");
      const parsedData = data == null ? void 0 : data.filter(
        (path) => (
          // Use a regular expression to check if the path doesn't end with "blog/" followed by a number
          !/blogs\/\d+\/?$/.test(path) && !/newsroom\/\d+\/?$/.test(path) && !/customer-stories\/\d+\/?$/.test(path) && !path.includes("thank-you") && !path.includes("404")
        )
      );
      return parsedData;
    },
    page: async (slug) => {
      const data = await fetchFromWp(`together/post?slug=${slug}`);
      return data;
    },
    options: async () => {
      const data = await fetchFromWp(`together/options`);
      return data;
    },
    preview: async (post_id) => {
      const data = await fetchFromWp(`together/preview?post_id=${post_id}&cache=${+/* @__PURE__ */ new Date()}`, {
        cache: "no-cache"
      });
      return data;
    },
    robots: async () => {
      const data = await fetchFromWp("together/robots");
      return data;
    },
    get: async (path, options) => {
      const data = await fetchFromWp(path, options);
      return data;
    },
    search: async (query) => {
      const data = await fetchFromWp(`together/search?q=${query}`);
      return data;
    },
    post: async (path, body) => {
      const data = await cms().get(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      return data;
    },
    getJobContent: async (jobId) => {
      try {
        const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/geniussports/jobs/${jobId}?questions=true`);
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        return null;
      }
    },
    redirects: async () => {
      try {
        const data = await fetchFromWp(`together/redirects`);
        return data;
      } catch (error) {
        return [];
      }
    },
    handleRedirectOrPageNotFound: async (slug) => {
      var _a;
      const redirects = await cms().redirects();
      if (redirects) {
        const match = redirects.filter(({ source }) => source === slug || source === `${slug}/`).pop();
        if (match == null ? void 0 : match.destination) {
          return {
            redirect: {
              destination: match == null ? void 0 : match.destination,
              permanent: (_a = match == null ? void 0 : match.permanent) != null ? _a : true
            }
          };
        }
      }
      return {
        notFound: true
      };
    },
    login: async (username, password) => {
      try {
        const processedUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL}/wp-json/jwt-auth/v1/token`;
        const response = await fetch(processedUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return null;
      }
    },
    reportsPaths: async () => {
      const data = await fetchFromWp(`together/reports/paths`, {
        headers: { "Content-Type": "application/json" }
      });
      return data;
    },
    reports: async (token, category, page) => {
      const url = `together/reports`;
      const params = new URLSearchParams();
      if (category) params.set("category", category);
      if (page) params.set("page", page.toString());
      const response = await fetchFromWp(`${url}?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      return response;
    },
    report: async (id) => {
      const response = await fetchFromWp(`together/reports/single/${id}`, {
        headers: { "Content-Type": "application/json" }
      });
      return response;
    },
    reportCategories: async (token) => {
      const response = await fetchFromWp(`together/report-categories`, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      return response;
    }
  };
}
var fetchFromWp;
var init_cms = __esm({
  "src/utils/cms.ts"() {
    init_cacheBustingString();
    fetchFromWp = async (url, options, attempt = 1) => {
      const MAX_RETRIES = 3;
      const baseUrl = typeof window !== "undefined" ? window.__NEXT_PUBLIC_WORDPRESS_BASE_URL__ || process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL : process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL;
      const processedUrl = `${baseUrl}/wp-json/${cacheBustingString(url)}`;
      const processedOptions = __spreadValues({ next: { revalidate: 60 } }, options);
      try {
        const res = await fetch(
          processedUrl,
          processedOptions
        );
        if (res.status === 503 && attempt < MAX_RETRIES) {
          await avoidRateLimit();
          return fetchFromWp(url, options, attempt + 1);
        }
        const data = res.json();
        return data;
      } catch (error) {
        console.error(`${error.code} ${error.message} on URL ${processedUrl}`);
        if (attempt < MAX_RETRIES) {
          await avoidRateLimit();
          return fetchFromWp(url, options, attempt + 1);
        }
        console.error(`Max retries reached on URL ${processedUrl}`);
        throw new Error(`${processedUrl} Failed after max retries: ${error.message}`);
      }
    };
  }
});

// src/components/flexible/blog/components/BlogIndex/FilterDropdown.tsx
import { m as m30 } from "framer-motion";
import clsx32 from "clsx";
import { useRouter as useRouter2 } from "next/router";
import { jsx as jsx102, jsxs as jsxs80 } from "react/jsx-runtime";
function FilterDropdown({ menu, setOpenDropdown, blockScroll, allLinkURL = "/", setActiveFilter }) {
  const router = useRouter2();
  return /* @__PURE__ */ jsxs80(
    m30.div,
    {
      initial: { y: -10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -10, opacity: 0 },
      transition: { duration: 0.3 },
      onClick: () => setOpenDropdown(false),
      className: clsx32("category-filters__filter-dropdown absolute top-[130%] z-[20] max-h-[20.75rem] w-full overflow-y-auto rounded-lg bg-lightGrey shadow-lg"),
      children: [
        /* @__PURE__ */ jsx102(
          "button",
          {
            type: "button",
            "aria-label": "Show all posts",
            className: "group flex items-center p-4 transition-colors duration-200  hover:bg-white/10 sm:space-x-3 md:space-x-4 md:pr-6",
            onClick: () => {
              setActiveFilter("all");
              console.log("allLinkURL", allLinkURL);
              router.push(allLinkURL);
            },
            children: /* @__PURE__ */ jsx102("span", { className: "text-16", dangerouslySetInnerHTML: { __html: "All" } })
          }
        ),
        (menu == null ? void 0 : menu.length) > 0 && (menu == null ? void 0 : menu.map((item) => /* @__PURE__ */ jsx102(
          "button",
          {
            "aria-label": `Show ${item.name} posts`,
            type: "button",
            className: "group flex items-center p-4 transition-colors duration-200 hover:bg-stone-50 sm:space-x-3 md:space-x-4 md:pr-6",
            onClick: () => {
              setActiveFilter(item.name);
              router.push(item.url);
            },
            children: /* @__PURE__ */ jsx102("span", { className: "text-16", dangerouslySetInnerHTML: { __html: item.name } })
          },
          item.id
        )))
      ]
    },
    "results box"
  );
}
var FilterDropdown_default;
var init_FilterDropdown = __esm({
  "src/components/flexible/blog/components/BlogIndex/FilterDropdown.tsx"() {
    FilterDropdown_default = FilterDropdown;
  }
});

// src/components/flexible/blog/components/BlogIndex/BlogSearch.tsx
import clsx33 from "clsx";
import { m as m31, LazyMotion as LazyMotion21, domAnimation as domAnimation20 } from "framer-motion";
import { jsx as jsx103, jsxs as jsxs81 } from "react/jsx-runtime";
function BlogSearch({ open, className, hideCloseIcon, onSearchClick, onSearchCloseClick, onInputChange }) {
  return open ? /* @__PURE__ */ jsx103(LazyMotion21, { features: domAnimation20, children: /* @__PURE__ */ jsxs81(
    m31.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.2, ease: "easeInOut" },
      className: clsx33("relative flex w-full items-center lg:max-w-[320px]", className),
      children: [
        /* @__PURE__ */ jsx103(
          m31.input,
          {
            variants: itemAnim,
            animate: "animate",
            initial: "initial",
            transition: { delay: 0.25, ease: "easeInOut", duration: 0.2 },
            onChange: (e) => {
              onInputChange(e);
            },
            onKeyDown: (e) => {
              if (e.key === "Escape") {
                onSearchCloseClick == null ? void 0 : onSearchCloseClick();
              }
            },
            type: "text",
            placeholder: "Search",
            className: "text-18 font-family w-full border border-b border-l-0 border-r-0 border-t-0 border-[#0d12261a] bg-white px-10 py-2 font-normal text-navy focus:border-transparent focus:outline-none focus:ring-0"
          }
        ),
        /* @__PURE__ */ jsx103("span", { className: "absolute left-2 top-1/2 -translate-y-1/2 transform", children: /* @__PURE__ */ jsx103(m31.div, { layoutId: "search-icon", children: /* @__PURE__ */ jsx103(SearchIcon, {}) }) }),
        !hideCloseIcon && /* @__PURE__ */ jsx103(
          m31.button,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, translateY: "-50%" },
            transition: { delay: 0.4, ease: "easeInOut", duration: 0.2 },
            type: "button",
            onClick: () => {
              onSearchCloseClick == null ? void 0 : onSearchCloseClick();
            },
            className: "absolute right-2 top-1/2 transform",
            children: /* @__PURE__ */ jsx103(CloseIcon, { lineClassName: "text-navy/70" })
          }
        )
      ]
    }
  ) }) : /* @__PURE__ */ jsx103(
    "button",
    {
      type: "button",
      "aria-label": "Toggle search",
      onClick: () => {
        onSearchClick == null ? void 0 : onSearchClick();
      },
      children: /* @__PURE__ */ jsx103(m31.div, { layoutId: "search-icon", children: /* @__PURE__ */ jsx103(SearchIcon, {}) })
    }
  );
}
var itemAnim, BlogSearch_default;
var init_BlogSearch = __esm({
  "src/components/flexible/blog/components/BlogIndex/BlogSearch.tsx"() {
    init_Icons();
    itemAnim = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 }
    };
    BlogSearch_default = BlogSearch;
  }
});

// src/components/flexible/blog/components/BlogIndex/CategoryFilters.tsx
import { useEffect as useEffect18, useState as useState22 } from "react";
import clsx34 from "clsx";
import { m as m32, LazyMotion as LazyMotion22, domMax as domMax2, AnimatePresence as AnimatePresence7 } from "framer-motion";
import { useRouter as useRouter3 } from "next/router";
import { Fragment as Fragment15, jsx as jsx104, jsxs as jsxs82 } from "react/jsx-runtime";
function CategoryFilters({
  activeFilter,
  setActiveFilter,
  taxonomyTerms,
  taxonomyTermAccessor = "category",
  className,
  allLinkURL = "/",
  onSearchClick,
  onSearchCloseClick,
  hideFilters = false,
  openSearch = false,
  onInputChange
}) {
  var _a, _b;
  const router = useRouter3();
  const { asPath } = router;
  const [openDropdown, setOpenDropdown] = useState22(false);
  function changePage(urlLink) {
    router.push(urlLink, "", { scroll: false });
  }
  useEffect18(() => {
    var _a2;
    (_a2 = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _a2.forEach((element) => {
      const nameAsUrl = element == null ? void 0 : element.name.replace(/ /g, "-").toLowerCase().replace(/&[a-z]+;/g, "").replace("--", "-");
      if (asPath.replace("/newsroom", "").replace("/category", "").includes(nameAsUrl)) {
        setActiveFilter(element == null ? void 0 : element.name);
      }
    });
  }, [taxonomyTerms]);
  return /* @__PURE__ */ jsx104(LazyMotion22, { features: domMax2, children: /* @__PURE__ */ jsxs82("div", { className: clsx34(className, "category-filters w-full"), children: [
    /* @__PURE__ */ jsxs82("div", { className: "hidden w-full items-center justify-between gap-12 lg:flex", children: [
      /* @__PURE__ */ jsx104(
        m32.menu,
        {
          layout: true,
          className: clsx34(
            "text-white-50 text-17 scrollbar scrollbar--dark relative hidden w-full max-w-[70%] items-center gap-x-8 gap-y-4 overflow-x-auto pb-4 lg:flex lg:pb-3"
          ),
          children: !hideFilters && /* @__PURE__ */ jsxs82(Fragment15, { children: [
            /* @__PURE__ */ jsxs82(
              "div",
              {
                role: "button",
                onClick: () => {
                  setActiveFilter("all");
                  changePage(allLinkURL);
                },
                tabIndex: 0,
                "aria-label": "All",
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    setActiveFilter("all");
                    changePage(allLinkURL);
                  }
                },
                className: "relative ml-4 flex cursor-pointer items-center gap-2",
                children: [
                  activeFilter === "all" && /* @__PURE__ */ jsx104(m32.div, { layoutId: "category-filter-marker", className: "absolute -left-4 top-[calc(50%-4px)] h-2 w-2 rounded-full bg-blue" }),
                  /* @__PURE__ */ jsx104("p", { className: clsx34("whitespace-nowrap transition-colors duration-300 ease-in-out", activeFilter === "all" ? "text-navy" : "text-navy/50"), children: "All" })
                ]
              }
            ),
            ((_a = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _a.length) > 0 && ((_b = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _b.map((ind) => {
              const isActive = activeFilter === (ind == null ? void 0 : ind.name);
              return /* @__PURE__ */ jsxs82(
                "div",
                {
                  tabIndex: 0,
                  role: "button",
                  onClick: () => {
                    setActiveFilter(ind == null ? void 0 : ind.name);
                    changePage(ind == null ? void 0 : ind.url);
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      setActiveFilter(ind == null ? void 0 : ind.name);
                      changePage(ind == null ? void 0 : ind.url);
                    }
                  },
                  "aria-label": ind == null ? void 0 : ind.name,
                  className: clsx34("relative ml-4 flex cursor-pointer items-center gap-2", (router == null ? void 0 : router.asPath) === (ind == null ? void 0 : ind.url) && "pointer-events-none"),
                  children: [
                    isActive && /* @__PURE__ */ jsx104(m32.div, { layoutId: "category-filter-marker", className: "absolute -left-4 top-[calc(50%-4px)] h-2 w-2 rounded-full bg-blue" }),
                    /* @__PURE__ */ jsx104(
                      "p",
                      {
                        className: clsx34("whitespace-nowrap transition-colors duration-300 ease-in-out", isActive ? "text-navy" : "text-navy/60"),
                        dangerouslySetInnerHTML: {
                          __html: ind == null ? void 0 : ind.name
                        }
                      }
                    )
                  ]
                },
                ind == null ? void 0 : ind.id
              );
            }))
          ] })
        }
      ),
      /* @__PURE__ */ jsx104(m32.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "-mt-4", children: /* @__PURE__ */ jsx104(BlogSearch_default, { open: openSearch, onSearchClick, onSearchCloseClick, onInputChange }) }, `search-open-${openSearch}`)
    ] }),
    /* @__PURE__ */ jsxs82("div", { className: "relative lg:hidden", children: [
      /* @__PURE__ */ jsxs82(
        "button",
        {
          type: "button",
          "aria-label": "Show category filter menu",
          onClick: () => {
            setOpenDropdown(!openDropdown);
          },
          className: "flex w-full items-center justify-between rounded-md border border-[#0d12261a] bg-lightGrey px-4 py-3 text-left",
          children: [
            /* @__PURE__ */ jsx104("span", { dangerouslySetInnerHTML: { __html: `${activeFilter === "all" ? "Select Category" : activeFilter}` } }),
            /* @__PURE__ */ jsx104("div", { className: clsx34("origin-center transition-transform duration-300", openDropdown ? "-rotate-180" : ""), children: /* @__PURE__ */ jsx104(ChevronDown, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsx104(AnimatePresence7, { mode: "wait", children: openDropdown && /* @__PURE__ */ jsx104(
        FilterDropdown_default,
        {
          allLinkURL,
          menu: taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor],
          setOpenDropdown,
          setActiveFilter,
          blockScroll: true
        }
      ) })
    ] })
  ] }) });
}
var CategoryFilters_default;
var init_CategoryFilters = __esm({
  "src/components/flexible/blog/components/BlogIndex/CategoryFilters.tsx"() {
    init_Icons();
    init_FilterDropdown();
    init_BlogSearch();
    CategoryFilters_default = CategoryFilters;
  }
});

// src/components/flexible/blog/components/BlogIndex/BlogIndexCard.tsx
import Link26 from "next/link";
import get from "lodash/get";
import { motion as motion2 } from "framer-motion";
import { Fragment as Fragment16, jsx as jsx105, jsxs as jsxs83 } from "react/jsx-runtime";
function AnimWrapper({ children, index, animKey }) {
  return /* @__PURE__ */ jsx105(
    motion2.div,
    {
      variants: cardAnim,
      initial: "initial",
      animate: "animate",
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 20
      },
      className: "flex h-full w-full flex-col gap-6",
      children
    },
    animKey
  );
}
function InnerContent({ post, imageAccessor, categoryAccessor, showCustomerLogo, hideCTA }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  const { post_title } = post;
  let imageURL = get(post, imageAccessor);
  if (!imageURL && ((_a = post == null ? void 0 : post.featured_image) == null ? void 0 : _a.src)) {
    imageURL = __spreadProps(__spreadValues({}, post == null ? void 0 : post.featured_image), { url: (_b = post == null ? void 0 : post.featured_image) == null ? void 0 : _b.src });
  }
  const isOnDemand = (_e = (_d = (_c = post == null ? void 0 : post.acf) == null ? void 0 : _c.visual_tags) == null ? void 0 : _d.tags) == null ? void 0 : _e.includes("On-demand");
  const isCustomerStory = (_f = post == null ? void 0 : post.permalink) == null ? void 0 : _f.includes("customer-stories");
  return /* @__PURE__ */ jsxs83(Fragment16, { children: [
    /* @__PURE__ */ jsxs83("div", { className: "relative aspect-[411/231] w-full overflow-hidden rounded-lg bg-lightGrey md:max-w-[411px]", children: [
      /* @__PURE__ */ jsx105(WpImage, { image: imageURL, className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105" }),
      showCustomerLogo && !!((_h = (_g = post == null ? void 0 : post.acf) == null ? void 0 : _g.media) == null ? void 0 : _h.light_logo) && /* @__PURE__ */ jsxs83(Fragment16, { children: [
        /* @__PURE__ */ jsx105("div", { className: "absolute inset-0 z-0 bg-black/20" }),
        /* @__PURE__ */ jsx105("div", { className: "absolute inset-0 z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx105(WpImage, { className: "linear w-full max-w-[45%] transition-transform duration-300 group-hover:scale-105", image: (_j = (_i = post == null ? void 0 : post.acf) == null ? void 0 : _i.media) == null ? void 0 : _j.light_logo }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx105("div", { className: "flex flex-col gap-5", children: /* @__PURE__ */ jsxs83("div", { className: "text-15 flex flex-wrap items-center gap-4 font-body font-normal", children: [
      (_k = post == null ? void 0 : post[categoryAccessor]) == null ? void 0 : _k.map((category) => /* @__PURE__ */ jsx105(PostTag_default, { text: category.name }, category == null ? void 0 : category.id)),
      !isCustomerStory && /* @__PURE__ */ jsx105(
        "span",
        {
          className: "text-15 font-body font-normal",
          dangerouslySetInnerHTML: {
            __html: isOnDemand ? "On-demand" : post == null ? void 0 : post.post_date_gmt
          }
        }
      ),
      /* @__PURE__ */ jsx105(
        "span",
        {
          dangerouslySetInnerHTML: {
            // Priority - location, first normal post tag, first visual tag, first custom tag
            __html: (
              // @ts-ignore
              ((_m = (_l = post == null ? void 0 : post.acf) == null ? void 0 : _l.visual_tags) == null ? void 0 : _m.location) || ((_o = (_n = post == null ? void 0 : post.tags) == null ? void 0 : _n[0]) == null ? void 0 : _o.name) || ((_r = (_q = (_p = post == null ? void 0 : post.acf) == null ? void 0 : _p.visual_tags) == null ? void 0 : _q.tags) == null ? void 0 : _r[0]) || ((_u = (_t = (_s = post == null ? void 0 : post.acf) == null ? void 0 : _s.visual_tags) == null ? void 0 : _t.custom_tags) == null ? void 0 : _u[0])
            )
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx105("span", { className: "preview-text-heading text-22 is-heading -mt-3 text-left !font-medium sm:mt-0", dangerouslySetInnerHTML: { __html: post_title } }),
    !hideCTA && /* @__PURE__ */ jsxs83("div", { className: "mt-auto flex items-center gap-[14px]", children: [
      /* @__PURE__ */ jsx105(RightArrowCircle, { circleClassName: "text-navy group-hover:text-blue" }),
      /* @__PURE__ */ jsx105("span", { className: "text-17 group font-semibold", children: "Learn more" })
    ] })
  ] });
}
function BlogIndexCard({
  post,
  categoryAccessor = "categories",
  imageAccessor = "acf.preview.thumbnail",
  hideCTA = false,
  showCustomerLogo = false,
  index,
  disableAnimation,
  searchOpen
}) {
  var _a, _b, _c, _d;
  const { post_title } = post;
  const isExternalLink = !!((_b = (_a = post == null ? void 0 : post.acf) == null ? void 0 : _a.preview) == null ? void 0 : _b.external_link);
  return /* @__PURE__ */ jsx105(
    Link26,
    {
      className: "blog-index-card group",
      href: ((_d = (_c = post == null ? void 0 : post.acf) == null ? void 0 : _c.preview) == null ? void 0 : _d.external_link) || (post == null ? void 0 : post.permalink) || "#",
      target: isExternalLink ? "_blank" : "_self",
      rel: "noopener noreferrer",
      "aria-label": "Read article",
      children: disableAnimation ? /* @__PURE__ */ jsx105("div", { className: "flex h-full w-full flex-col gap-6", children: /* @__PURE__ */ jsx105(InnerContent, { post, imageAccessor, categoryAccessor, showCustomerLogo, hideCTA }) }) : /* @__PURE__ */ jsx105(AnimWrapper, { animKey: `${post_title}-${searchOpen}`, index, children: /* @__PURE__ */ jsx105(InnerContent, { post, imageAccessor, categoryAccessor, showCustomerLogo, hideCTA }) })
    }
  );
}
var cardAnim, BlogIndexCard_default;
var init_BlogIndexCard = __esm({
  "src/components/flexible/blog/components/BlogIndex/BlogIndexCard.tsx"() {
    init_Icons();
    init_PostTag();
    init_Wp();
    cardAnim = {
      initial: { opacity: 0, x: 10 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3
        }
      }
    };
    BlogIndexCard_default = BlogIndexCard;
  }
});

// src/components/flexible/blog/components/BlogIndex/TagFilters.tsx
import { useState as useState23, useEffect as useEffect19 } from "react";
import Link27 from "next/link";
import clsx35 from "clsx";
import { m as m33, LazyMotion as LazyMotion23, domMax as domMax3, AnimatePresence as AnimatePresence8 } from "framer-motion";
import { useRouter as useRouter4 } from "next/router";
import { jsx as jsx106, jsxs as jsxs84 } from "react/jsx-runtime";
function TagFilters({ activeFilter, setActiveFilter, taxonomyTerms, taxonomyTermAccessor = "category", className, allLinkURL = "/" }) {
  var _a, _b;
  const router = useRouter4();
  const { asPath } = router;
  const [openDropdown, setOpenDropdown] = useState23(false);
  useEffect19(() => {
    var _a2;
    (_a2 = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _a2.forEach((element) => {
      const nameAsUrl = element == null ? void 0 : element.name.replace(/ /g, "-").toLowerCase().replace(/&[a-z]+;/g, "").replace("--", "-");
      if (asPath.replace("/tag", "").includes(nameAsUrl)) {
        setActiveFilter(element == null ? void 0 : element.name);
      }
    });
  }, [taxonomyTerms]);
  return /* @__PURE__ */ jsx106(LazyMotion23, { features: domMax3, children: /* @__PURE__ */ jsxs84("div", { className: clsx35(className, "tag-filters"), children: [
    /* @__PURE__ */ jsxs84(
      "menu",
      {
        className: clsx35(
          "scrollbar scrollbar--light hidden flex-col items-start gap-x-8 gap-y-4 overflow-x-auto md:flex-row lg:flex lg:flex-col",
          "text-white-50 text-17"
        ),
        children: [
          /* @__PURE__ */ jsxs84(
            Link27,
            {
              href: allLinkURL,
              role: "button",
              scroll: false,
              onClick: () => {
                setActiveFilter("all");
              },
              tabIndex: 0,
              className: "flex cursor-pointer items-center gap-2",
              children: [
                activeFilter === "all" && /* @__PURE__ */ jsx106(m33.div, { layoutId: "tag-filter-marker", className: "h-2 w-2 rounded-full bg-blue" }),
                /* @__PURE__ */ jsx106("p", { className: clsx35("whitespace-nowrap transition-colors duration-300 ease-in-out", activeFilter === "all" ? "text-navy" : "text-navy/50"), children: "All" })
              ]
            }
          ),
          ((_a = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _a.length) > 0 && ((_b = taxonomyTerms == null ? void 0 : taxonomyTerms[taxonomyTermAccessor]) == null ? void 0 : _b.map((ind) => {
            const isActive = activeFilter === (ind == null ? void 0 : ind.name);
            return /* @__PURE__ */ jsxs84(
              Link27,
              {
                href: ind == null ? void 0 : ind.url,
                tabIndex: 0,
                role: "button",
                scroll: false,
                onClick: () => {
                  setActiveFilter(ind == null ? void 0 : ind.name);
                },
                className: clsx35("flex cursor-pointer items-center gap-2", (router == null ? void 0 : router.asPath) === (ind == null ? void 0 : ind.url) && "pointer-events-none"),
                children: [
                  isActive && /* @__PURE__ */ jsx106(m33.div, { layoutId: "filter-marker", className: "h-2 w-2 rounded-full bg-blue" }),
                  /* @__PURE__ */ jsx106(
                    "p",
                    {
                      className: clsx35("whitespace-nowrap transition-colors duration-300 ease-in-out", isActive ? "text-navy" : "text-navy/60"),
                      dangerouslySetInnerHTML: {
                        __html: ind == null ? void 0 : ind.name
                      }
                    }
                  )
                ]
              },
              ind == null ? void 0 : ind.id
            );
          }))
        ]
      }
    ),
    /* @__PURE__ */ jsxs84("div", { className: "relative lg:hidden", children: [
      /* @__PURE__ */ jsxs84(
        "button",
        {
          type: "button",
          "aria-label": "Show filter menu",
          onClick: () => {
            setOpenDropdown(!openDropdown);
          },
          className: "flex w-full items-center justify-between rounded-md border border-[#0d12261a] bg-lightGrey px-4 py-3 text-left",
          children: [
            /* @__PURE__ */ jsx106("span", { dangerouslySetInnerHTML: { __html: `${activeFilter === "all" ? "Select Type" : activeFilter}` } }),
            /* @__PURE__ */ jsx106("div", { className: clsx35("origin-center transition-transform duration-300", openDropdown ? "-rotate-180" : ""), children: /* @__PURE__ */ jsx106(ChevronDown, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsx106(AnimatePresence8, { mode: "wait", children: openDropdown && /* @__PURE__ */ jsx106(
        FilterDropdown_default,
        {
          allLinkURL,
          blockScroll: true,
          menu: taxonomyTerms == null ? void 0 : taxonomyTerms.post_tag,
          setOpenDropdown,
          setActiveFilter
        }
      ) })
    ] })
  ] }) });
}
var TagFilters_default;
var init_TagFilters = __esm({
  "src/components/flexible/blog/components/BlogIndex/TagFilters.tsx"() {
    init_Icons();
    init_FilterDropdown();
    TagFilters_default = TagFilters;
  }
});

// src/components/flexible/blog/components/BlogIndex/BlogPagination.tsx
import clsx36 from "clsx";
import { useRouter as useRouter5 } from "next/router";
import ReactPaginate from "react-paginate";
import { jsx as jsx107 } from "react/jsx-runtime";
function BlogPagination({ postListing, onClick, basePath = "content-hub" }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const router = useRouter5();
  let path = "";
  if (router.asPath.includes("category")) {
    path = `${basePath}/category/${(_a = router.query) == null ? void 0 : _a.slug[2]}`;
  } else if (router.asPath.includes("tag")) {
    path = `${basePath}/tag/${(_b = router.query) == null ? void 0 : _b.slug[2]}`;
  } else if (basePath === "/the-fan-engagement-podcast/") {
    path = `the-fan-engagement-podcast`;
  } else {
    path = `${basePath}`;
  }
  return /* @__PURE__ */ jsx107(
    ReactPaginate,
    {
      className: "mt-12 flex select-none items-center justify-center space-x-2 md:mt-24",
      pageClassName: "h-7.5 w-7.5 rounded-full flex items-center justify-center hover:bg-lightGrey transition-colors duration-300",
      activeClassName: "!text-white !bg-blue",
      breakLabel: "...",
      breakClassName: "w-[1.8rem] flex justify-center",
      initialPage: ((_c = postListing == null ? void 0 : postListing.page) == null ? void 0 : _c.current) - 1,
      onClick: ({ event }) => {
        router.push(event.currentTarget.href, void 0, { scroll: false });
        onClick == null ? void 0 : onClick();
      },
      hrefBuilder: (page, pageCount) => page > 1 && page <= pageCount ? `/${path}/page/${page}` : `/${path}`,
      pageRangeDisplayed: 4,
      marginPagesDisplayed: 2,
      pageCount: (_d = postListing == null ? void 0 : postListing.page) == null ? void 0 : _d.total,
      renderOnZeroPageCount: null,
      previousLinkClassName: ((_e = postListing == null ? void 0 : postListing.page) == null ? void 0 : _e.current) === 1 && "pointer-events-none",
      nextLinkClassName: ((_f = postListing == null ? void 0 : postListing.page) == null ? void 0 : _f.current) === ((_g = postListing == null ? void 0 : postListing.page) == null ? void 0 : _g.total) && "pointer-events-none",
      previousLabel: ((_h = postListing == null ? void 0 : postListing.page) == null ? void 0 : _h.current) === 1 ? "" : /* @__PURE__ */ jsx107(PaginateArrow, { isDisabled: ((_i = postListing == null ? void 0 : postListing.page) == null ? void 0 : _i.current) === 1, onClick }),
      nextLabel: ((_j = postListing == null ? void 0 : postListing.page) == null ? void 0 : _j.current) === ((_k = postListing == null ? void 0 : postListing.page) == null ? void 0 : _k.total) ? "" : /* @__PURE__ */ jsx107(PaginateArrow, { rotate180: true, isDisabled: ((_l = postListing == null ? void 0 : postListing.page) == null ? void 0 : _l.current) === ((_m = postListing == null ? void 0 : postListing.page) == null ? void 0 : _m.total), onClick })
    }
  );
}
function PaginateArrow({ isDisabled, rotate180, onClick }) {
  return /* @__PURE__ */ jsx107(
    "button",
    {
      type: "button",
      onClick: () => {
        onClick == null ? void 0 : onClick();
      },
      className: clsx36(
        rotate180 && "rotate-180",
        `flex h-7.5 w-7.5 items-center justify-center rounded-full p-[0.325rem]`,
        isDisabled ? "paginate-arrow--disabled text-midnight/40 pointer-events-none" : "text-navy transition-colors duration-300 hover:bg-blue/40 hover:text-navy"
      ),
      children: /* @__PURE__ */ jsx107(PaginationArrow, {})
    }
  );
}
function PaginationArrow() {
  return /* @__PURE__ */ jsx107("svg", { className: "h-full w-full", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx107("g", { children: /* @__PURE__ */ jsx107(
    "path",
    {
      d: "M5.21763 7.33327L8.79363 3.75726L7.85083 2.81445L2.66536 7.99993L7.85083 13.1853L8.79363 12.2425L5.21763 8.6666H13.332V7.33327H5.21763Z",
      fill: "currentColor"
    }
  ) }) });
}
var BlogPagination_default;
var init_BlogPagination = __esm({
  "src/components/flexible/blog/components/BlogIndex/BlogPagination.tsx"() {
    BlogPagination_default = BlogPagination;
  }
});

// src/components/flexible/blog/components/BlogIndex/BlogIndex.tsx
var BlogIndex_exports = {};
__export(BlogIndex_exports, {
  default: () => BlogIndex_default
});
import { useContext as useContext5, useEffect as useEffect20, useRef as useRef13, useState as useState24 } from "react";
import clsx37 from "clsx";
import { useDebounce, useWindowSize as useWindowSize6 } from "react-use";
import { motion as motion3 } from "framer-motion";
import { Fragment as Fragment17, jsx as jsx108, jsxs as jsxs85 } from "react/jsx-runtime";
function BlogIndex({
  heading,
  hideAside = false,
  // hidePostShare = false,
  hideTagFilters = false,
  colNumber = 2,
  topFiltersTaxonomyTermAccessor = "category",
  postCategoriesAccessor = "categories",
  sideFiltersTaxonomyTermAccessor = "post_tag",
  allLinkURL = "/content-hub/",
  imageAccessor,
  hideCTAs = false,
  showCustomerLogos = false,
  paginationBasePath
}) {
  const [context] = useContext5(GlobalContext);
  const { postListing } = context;
  const { taxonomyTerms, posts } = postListing || {};
  const [activeCategoryFilter, setActiveCategoryFilter] = useState24("all");
  const [activeTagFilter, setActiveTagFilter] = useState24("all");
  const containerRef = useRef13(null);
  const { width: windowWidth } = useWindowSize6();
  const scrollToListings = () => {
    var _a;
    (_a = containerRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const [openSearch, setOpenSearch] = useState24(false);
  const [searchTerm, setSearchTerm] = useState24("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState24("");
  const [searchResults, setSearchResults] = useState24([]);
  const [, cancel] = useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    250,
    [searchTerm]
  );
  useEffect20(() => {
    const getPosts = async () => {
      const results = await cms().search(debouncedSearchTerm);
      setSearchResults(results);
    };
    getPosts();
    if ((debouncedSearchTerm == null ? void 0 : debouncedSearchTerm.length) > 0) {
      trackEvent_default("search_trackevent", {
        keyword: debouncedSearchTerm
      });
    }
  }, [debouncedSearchTerm]);
  useEffect20(() => {
    if (activeTagFilter !== "all" || activeCategoryFilter !== "all") {
      scrollToListings();
    }
  }, [activeCategoryFilter, activeTagFilter]);
  const postsToRender = searchTerm ? searchResults : posts;
  return /* @__PURE__ */ jsxs85("div", { ref: containerRef, id: "blog-index", className: "blog-index scroll-mt-32 sm:scroll-mt-40", children: [
    /* @__PURE__ */ jsxs85("div", { className: "mb-12 flex flex-col justify-between gap-6 sm:gap-8 lg:mb-[88px] lg:gap-12 xl:gap-16", children: [
      /* @__PURE__ */ jsxs85("div", { className: "flex items-center justify-between gap-32", children: [
        /* @__PURE__ */ jsx108(
          "span",
          {
            className: "text-h3 !tracking-[-0.0275em]",
            dangerouslySetInnerHTML: { __html: getSplitBreakText({ text: heading, disable: windowWidth <= 1150 }) }
          }
        ),
        /* @__PURE__ */ jsx108("div", { className: clsx37("flex items-center gap-x-8 lg:hidden", openSearch && "flex-1") })
      ] }),
      /* @__PURE__ */ jsx108("div", { className: clsx37(colNumber === 2 ? "lg:hidden" : "lg:hidden"), children: /* @__PURE__ */ jsx108(
        BlogSearch_default,
        {
          className: "mt-4",
          open: true,
          hideCloseIcon: true,
          onSearchClick: () => setOpenSearch(!openSearch),
          onSearchCloseClick: () => {
            setOpenSearch(false);
            setSearchTerm("");
          },
          onInputChange: (e) => setSearchTerm(e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxs85("div", { className: clsx37("flex w-full flex-col gap-4 sm:flex-row sm:items-center", openSearch && "flex-1"), children: [
        /* @__PURE__ */ jsx108(
          CategoryFilters_default,
          {
            className: "flex-1",
            activeFilter: activeCategoryFilter,
            setActiveFilter: setActiveCategoryFilter,
            taxonomyTerms,
            taxonomyTermAccessor: topFiltersTaxonomyTermAccessor,
            allLinkURL,
            onSearchClick: () => setOpenSearch(!openSearch),
            onSearchCloseClick: () => {
              setOpenSearch(false);
              setSearchTerm("");
            },
            openSearch,
            onInputChange: (e) => setSearchTerm(e.target.value)
          }
        ),
        !hideTagFilters && /* @__PURE__ */ jsx108("div", { className: "block flex-1 lg:hidden", children: /* @__PURE__ */ jsx108(
          TagFilters_default,
          {
            activeFilter: activeTagFilter,
            setActiveFilter: setActiveTagFilter,
            taxonomyTerms,
            taxonomyTermAccessor: sideFiltersTaxonomyTermAccessor,
            allLinkURL
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs85("div", { className: "flex flex-col items-start justify-between gap-12 md:gap-32 lg:flex-row", children: [
      !hideAside && !openSearch && /* @__PURE__ */ jsx108("div", { className: "hidden flex-1 flex-col gap-16 md:sticky md:top-16 lg:flex", children: /* @__PURE__ */ jsx108(
        TagFilters_default,
        {
          activeFilter: activeTagFilter,
          setActiveFilter: setActiveTagFilter,
          taxonomyTerms,
          taxonomyTermAccessor: sideFiltersTaxonomyTermAccessor,
          allLinkURL
        }
      ) }),
      /* @__PURE__ */ jsx108("div", { className: clsx37("flex w-full origin-right flex-col", colNumber === 2 && !openSearch ? "max-w-[894px]" : ""), children: searchTerm && searchResults.length === 0 ? /* @__PURE__ */ jsx108("p", { className: "mx-auto text-center font-body", children: "No results, enter another search term." }) : /* @__PURE__ */ jsxs85(Fragment17, { children: [
        /* @__PURE__ */ jsx108(
          motion3.div,
          {
            variants: animationParent,
            initial: "initial",
            animate: "animate",
            className: clsx37(
              "grid w-full gap-10",
              colNumber === 2 && !openSearch && "sm:grid-cols-2 md:gap-x-[72px] md:gap-y-20",
              (colNumber === 3 || openSearch) && "sm:grid-cols-2 sm:gap-x-6 sm:gap-y-20 md:grid-cols-3"
            ),
            children: (postsToRender == null ? void 0 : postsToRender.length) > 0 && (posts == null ? void 0 : posts.map((post, i) => /* @__PURE__ */ jsx108(
              BlogIndexCard_default,
              {
                showCustomerLogo: showCustomerLogos,
                hideCTA: hideCTAs,
                imageAccessor,
                categoryAccessor: postCategoriesAccessor,
                post,
                index: i,
                disableAnimation: colNumber === 3,
                searchOpen: openSearch
              },
              post.ID
            )))
          }
        ),
        /* @__PURE__ */ jsx108(
          BlogPagination_default,
          {
            basePath: paginationBasePath,
            postListing,
            onClick: () => {
              scrollToListings();
            }
          }
        )
      ] }) })
    ] })
  ] });
}
var animationParent, BlogIndex_default;
var init_BlogIndex = __esm({
  "src/components/flexible/blog/components/BlogIndex/BlogIndex.tsx"() {
    init_context();
    init_text();
    init_cms();
    init_trackEvent();
    init_CategoryFilters();
    init_BlogIndexCard();
    init_TagFilters();
    init_BlogSearch();
    init_BlogPagination();
    animationParent = {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeInOut",
          when: "beforeChildren",
          staggerChildren: 0.25,
          delayChildren: 0.25
        }
      }
    };
    BlogIndex_default = BlogIndex;
  }
});

// src/components/flexible/blog/components/previewCards/SimpleLearnPreviewCard.tsx
import Link28 from "next/link";
import { jsx as jsx110, jsxs as jsxs86 } from "react/jsx-runtime";
function SimpleLearnPreviewCard({ sizeLrg, flip = false, item }) {
  var _a, _b, _c;
  const thumbnail = __spreadProps(__spreadValues({
    url: (_a = item.featured_image) == null ? void 0 : _a.src
  }, item.featured_image), {
    alt: "Blog thumbnail image"
  });
  return /* @__PURE__ */ jsxs86(Link28, { href: item.permalink, className: `group gap-y-6 md:gap-y-8 ${flip ? "flex flex-col md:flex-col-reverse" : "flex flex-col"}`, children: [
    !!(item == null ? void 0 : item.featured_image.src) && /* @__PURE__ */ jsx110("div", { className: "relative aspect-[137/77] overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx110(WpImage, { image: thumbnail, fill: true, className: "object-cover transition-transform duration-[700ms] group-hover:scale-[1.05]" }) }),
    /* @__PURE__ */ jsxs86("div", { children: [
      /* @__PURE__ */ jsxs86("div", { className: "mb-4 flex items-center space-x-3 md:mb-5 lg:space-x-4", children: [
        ((_b = item == null ? void 0 : item.categories) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsx110(
          "span",
          {
            className: "text-15 rounded-md bg-[#F6F7F9] px-2 py-[.3rem] font-body font-medium text-navy",
            dangerouslySetInnerHTML: { __html: (_c = item == null ? void 0 : item.categories[0]) == null ? void 0 : _c.name }
          }
        ),
        /* @__PURE__ */ jsx110("span", { className: "text-15 font-regular font-body", dangerouslySetInnerHTML: { __html: item.post_date_gmt } })
      ] }),
      /* @__PURE__ */ jsx110(
        "h3",
        {
          className: `mb-6 block !font-medium md:mb-8 ${flip ? "max-w-[36rem]" : "max-w-[42rem]"} ${sizeLrg ? "text-h6 " : "text-24 is-larger"}`,
          dangerouslySetInnerHTML: { __html: item.post_title }
        }
      ),
      /* @__PURE__ */ jsxs86("span", { className: "text-17 inline-flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx110("div", { className: "z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition-colors duration-200 group-hover:bg-blue", children: /* @__PURE__ */ jsx110(CircleArrow, {}) }),
        /* @__PURE__ */ jsx110("span", { className: "font-semibold", dangerouslySetInnerHTML: { __html: "Learn more" } })
      ] })
    ] })
  ] }, item.ID);
}
var SimpleLearnPreviewCard_default;
var init_SimpleLearnPreviewCard = __esm({
  "src/components/flexible/blog/components/previewCards/SimpleLearnPreviewCard.tsx"() {
    init_Wp();
    init_Icons();
    SimpleLearnPreviewCard_default = SimpleLearnPreviewCard;
  }
});

// src/components/flexible/blog/components/previewCards/LearnPreviewTextCard.tsx
import Link29 from "next/link";
import { jsx as jsx111, jsxs as jsxs87 } from "react/jsx-runtime";
function LearnPreviewTextCard({ item }) {
  var _a, _b, _c, _d, _e;
  return /* @__PURE__ */ jsxs87(Link29, { href: item.permalink, className: "group relative flex grow flex-col rounded-lg bg-[#F6F7F9] p-6", children: [
    /* @__PURE__ */ jsx111("div", { className: "absolute right-6 top-6 z-10 h-6 w-6 scale-0 rounded-full bg-black text-white transition-transform duration-200 group-hover:scale-100 ", children: /* @__PURE__ */ jsx111(CircleArrow, {}) }),
    /* @__PURE__ */ jsxs87("div", { className: "mb-10 flex items-center space-x-3 md:mb-12 lg:space-x-4", children: [
      ((_a = item == null ? void 0 : item.categories) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx111(
        "span",
        {
          className: "text-15 rounded-md bg-blue px-2 py-[.3rem] font-body font-medium text-white",
          dangerouslySetInnerHTML: { __html: (_b = item == null ? void 0 : item.categories[0]) == null ? void 0 : _b.name }
        }
      ),
      /* @__PURE__ */ jsx111("span", { className: "text-15 font-regular font-body", dangerouslySetInnerHTML: { __html: item.post_date_gmt } })
    ] }),
    /* @__PURE__ */ jsx111(
      "span",
      {
        className: "preview-text-heading text-h6 !font-book mb-6 mt-auto line-clamp-2 max-w-[28.125rem] md:mb-8",
        dangerouslySetInnerHTML: { __html: item.post_title }
      }
    ),
    /* @__PURE__ */ jsxs87("div", { className: "flex items-center space-x-3 lg:space-x-4", children: [
      ((_c = item == null ? void 0 : item.author) == null ? void 0 : _c.profile_picture) && /* @__PURE__ */ jsx111("div", { className: "relative h-10 w-10 overflow-hidden rounded-md bg-blue lg:h-[3.5rem] lg:w-[3.5rem]", children: /* @__PURE__ */ jsx111(WpImage, { image: (_d = item == null ? void 0 : item.author) == null ? void 0 : _d.profile_picture, fill: true, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs87("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx111("span", { className: "text-18 font-heading font-medium", dangerouslySetInnerHTML: { __html: item.author.name } }),
        ((_e = item == null ? void 0 : item.author) == null ? void 0 : _e.role) && /* @__PURE__ */ jsx111("span", { className: "text-15 font-body opacity-80", dangerouslySetInnerHTML: { __html: item.author.role } })
      ] })
    ] })
  ] }, item.ID);
}
var LearnPreviewTextCard_default;
var init_LearnPreviewTextCard = __esm({
  "src/components/flexible/blog/components/previewCards/LearnPreviewTextCard.tsx"() {
    init_Wp();
    init_Icons();
    LearnPreviewTextCard_default = LearnPreviewTextCard;
  }
});

// src/components/flexible/blog/components/previewCards/LearnGridLink.tsx
import { useState as useState25 } from "react";
import Link30 from "next/link";
import { jsx as jsx112, jsxs as jsxs88 } from "react/jsx-runtime";
function LearnGridLink({ link }) {
  var _a, _b, _c;
  const bars = Array.from({ length: 35 }, (_, i) => i + 1);
  const barTranslate = [
    [0, 8],
    [5, 45],
    [10, 1],
    [30, 18]
  ];
  const getRandomTranslate = (translates) => {
    const values = translates == null ? void 0 : translates.map((obj) => obj);
    return values[Math.floor(Math.random() * values.length)];
  };
  const [cardHovered, setCardHovered] = useState25(false);
  return /* @__PURE__ */ jsxs88(
    Link30,
    {
      href: (_a = link == null ? void 0 : link.link) == null ? void 0 : _a.url,
      onMouseOver: () => setCardHovered(true),
      onMouseLeave: () => setCardHovered(false),
      className: "group relative flex flex-wrap items-center rounded-lg bg-navy p-4 text-white md:flex-nowrap md:space-x-3 lg:space-x-4",
      children: [
        (link == null ? void 0 : link.thumbnail) && /* @__PURE__ */ jsx112("div", { className: "relative aspect-[1/1] w-[28%] shrink-0 overflow-hidden rounded-[0.1525rem] md:h-[7rem] md:w-[7rem] lg:h-[9.625rem] lg:w-[9.625rem]", children: /* @__PURE__ */ jsx112(WpImage, { image: link == null ? void 0 : link.thumbnail, fill: true, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsx112("div", { className: "absolute right-4 top-4 z-10 h-6 w-6 scale-0 rounded-full bg-white text-navy transition-transform duration-200 group-hover:scale-100", children: /* @__PURE__ */ jsx112(CircleArrow, {}) }),
        /* @__PURE__ */ jsxs88("div", { className: "w-[72%] pl-4 md:w-auto md:pl-0", children: [
          /* @__PURE__ */ jsxs88("div", { className: "flex items-center space-x-3 lg:space-x-4", children: [
            (link == null ? void 0 : link.tag) && /* @__PURE__ */ jsx112("span", { className: "text-15 rounded-md bg-white/10 px-2 py-[.3rem] font-body font-medium text-white", dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.tag } }),
            (link == null ? void 0 : link.podcast_link) && (link == null ? void 0 : link.date) && /* @__PURE__ */ jsx112("span", { className: "text-15 font-regular font-body", dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.date } })
          ] }),
          /* @__PURE__ */ jsx112(
            "span",
            {
              className: `text-h6 !font-book mt-3  md:my-[1.375rem] ${(link == null ? void 0 : link.podcast_link) ? "line-clamp-1" : "line-clamp-2"}`,
              dangerouslySetInnerHTML: { __html: (_b = link == null ? void 0 : link.link) == null ? void 0 : _b.title }
            }
          ),
          (link == null ? void 0 : link.podcast_link) && /* @__PURE__ */ jsx112("div", { className: "hidden h-[2.625rem] w-full items-end justify-between overflow-hidden md:flex", children: bars.map((index) => {
            const translateY = getRandomTranslate(barTranslate);
            return /* @__PURE__ */ jsxs88(
              "div",
              {
                className: "flex h-full flex-col items-center transition-transform duration-300",
                style: { transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` },
                children: [
                  /* @__PURE__ */ jsx112("div", { className: "h-[.5rem] w-[0.0625rem] shrink-0 bg-lightPurple" }),
                  /* @__PURE__ */ jsx112("div", { className: "h-full w-[0.2rem] bg-lightPurple" })
                ]
              },
              `podcast-bar-set-1-${index}`
            );
          }) })
        ] }),
        (link == null ? void 0 : link.podcast_link) && /* @__PURE__ */ jsx112("div", { className: "mt-6 flex h-[2.625rem] w-full shrink-0 items-end justify-between overflow-hidden md:hidden", children: (_c = bars.slice(0, 35)) == null ? void 0 : _c.map((index) => {
          const translateY = getRandomTranslate(barTranslate);
          return /* @__PURE__ */ jsxs88(
            "div",
            {
              className: "flex h-full flex-col items-center transition-transform duration-300",
              style: { transform: `translateY(${translateY[0]}%)` },
              children: [
                /* @__PURE__ */ jsx112("div", { className: "h-[.5rem] w-[0.0625rem] shrink-0 bg-lightPurple" }),
                /* @__PURE__ */ jsx112("div", { className: "h-full w-[0.2rem] bg-lightPurple" })
              ]
            },
            `podcast-bar-set-2-${index}`
          );
        }) })
      ]
    }
  );
}
var LearnGridLink_default;
var init_LearnGridLink = __esm({
  "src/components/flexible/blog/components/previewCards/LearnGridLink.tsx"() {
    init_Wp();
    init_Icons();
    LearnGridLink_default = LearnGridLink;
  }
});

// src/components/flexible/blog/components/LearnPosts.tsx
var LearnPosts_exports = {};
__export(LearnPosts_exports, {
  default: () => LearnPosts_default
});
import { jsx as jsx113, jsxs as jsxs89 } from "react/jsx-runtime";
function LearnPosts({ layout, link_card, posts }) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (layout === "grid") {
    return /* @__PURE__ */ jsxs89("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx113("div", { className: "", children: (_a = posts == null ? void 0 : posts.slice(0, 1)) == null ? void 0 : _a.map((item) => /* @__PURE__ */ jsx113(SimpleLearnPreviewCard_default, { sizeLrg: true, flip: true, item }, item.ID)) }),
      /* @__PURE__ */ jsxs89("div", { className: "flex flex-col space-y-6", children: [
        ((_b = link_card.link) == null ? void 0 : _b.link_type) === "resource" ? /* @__PURE__ */ jsx113(LearnPreviewTextCard_default, { item: (_c = link_card.link) == null ? void 0 : _c.resource }) : /* @__PURE__ */ jsx113(LearnGridLink_default, { link: (_d = link_card.link) == null ? void 0 : _d.link_card }),
        (_e = posts == null ? void 0 : posts.slice(1)) == null ? void 0 : _e.map((item) => /* @__PURE__ */ jsx113(LearnPreviewTextCard_default, { item }, item.ID))
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs89("div", { className: "grid gap-y-10 md:grid-cols-12 md:gap-x-10", children: [
    /* @__PURE__ */ jsx113("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsx113("div", { className: "md:sticky md:top-32", children: (_f = posts == null ? void 0 : posts.slice(0, 1)) == null ? void 0 : _f.map((item) => /* @__PURE__ */ jsx113(SimpleLearnPreviewCard_default, { sizeLrg: true, item }, item.ID)) }) }),
    /* @__PURE__ */ jsx113("div", { className: "flex flex-col space-y-10 md:col-span-5 md:space-y-12 lg:col-span-4 lg:col-start-9 lg:space-y-[4.625rem]", children: (_g = posts == null ? void 0 : posts.slice(1)) == null ? void 0 : _g.map((item) => /* @__PURE__ */ jsx113(SimpleLearnPreviewCard_default, { sizeLrg: false, item }, item.ID)) })
  ] });
}
var LearnPosts_default;
var init_LearnPosts = __esm({
  "src/components/flexible/blog/components/LearnPosts.tsx"() {
    init_SimpleLearnPreviewCard();
    init_LearnPreviewTextCard();
    init_LearnGridLink();
    LearnPosts_default = LearnPosts;
  }
});

// src/components/flexible/blog/components/FeaturedBlogPosts/PostPreviewCard.tsx
import Link31 from "next/link";
import { jsx as jsx114, jsxs as jsxs90 } from "react/jsx-runtime";
function PostPreviewCard({
  post,
  categoriesAccessor = "categories"
  // imageAccessor = "acf.preview.thumbnail"
}) {
  var _a, _b, _c, _d, _e;
  return /* @__PURE__ */ jsxs90(Link31, { href: (post == null ? void 0 : post.permalink) || "/", className: "preview-card group flex w-full flex-col gap-5 md:aspect-[411/397] md:max-w-[411px] md:gap-6", children: [
    /* @__PURE__ */ jsx114("div", { className: "aspect-[411/227] w-full overflow-hidden rounded-md", children: ((_a = post == null ? void 0 : post.featured_image) == null ? void 0 : _a.src) ? /* @__PURE__ */ jsx114(
      WpImage,
      {
        image: {
          url: (_b = post == null ? void 0 : post.featured_image) == null ? void 0 : _b.src,
          width: (_c = post == null ? void 0 : post.featured_image) == null ? void 0 : _c.width,
          height: (_d = post == null ? void 0 : post.featured_image) == null ? void 0 : _d.height
        },
        className: "h-full w-full object-cover object-center transition-transform duration-300 ease-linear group-hover:scale-110"
      }
    ) : /* @__PURE__ */ jsx114("div", { className: "h-full w-full bg-lightGrey" }) }),
    /* @__PURE__ */ jsxs90("div", { className: "flex flex-wrap items-center gap-4", children: [
      ((_e = post == null ? void 0 : post[categoriesAccessor]) == null ? void 0 : _e.length) > 0 && (post == null ? void 0 : post[categoriesAccessor].map((category) => /* @__PURE__ */ jsx114(PostTag_default, { text: category.name }, category.id))),
      !!(post == null ? void 0 : post.post_date_gmt) && /* @__PURE__ */ jsx114("p", { dangerouslySetInnerHTML: { __html: post.post_date_gmt }, className: "text-15 font-body" })
    ] }),
    !!(post == null ? void 0 : post.post_title) && /* @__PURE__ */ jsx114("p", { dangerouslySetInnerHTML: { __html: post.post_title }, className: "text-22 -mt-1 text-left font-medium" })
  ] });
}
var PostPreviewCard_default;
var init_PostPreviewCard = __esm({
  "src/components/flexible/blog/components/FeaturedBlogPosts/PostPreviewCard.tsx"() {
    init_PostTag();
    init_Wp();
    PostPreviewCard_default = PostPreviewCard;
  }
});

// src/components/flexible/blog/components/FeaturedBlogPosts/PostsSlider.tsx
import { useState as useState26 } from "react";
import { Swiper as Swiper4, SwiperSlide as SwiperSlide4 } from "swiper/react";
import "swiper/css";
import clsx38 from "clsx";
import { jsx as jsx115, jsxs as jsxs91 } from "react/jsx-runtime";
function PostsSlider({ heading, posts, categoriesAccessor }) {
  const [swiperInstance, setSwiperInstance] = useState26(null);
  const [_, setSwiperInstanceUpdate] = useState26(null);
  const disablePrevButton = swiperInstance == null ? void 0 : swiperInstance.isBeginning;
  const disableNextButton = swiperInstance == null ? void 0 : swiperInstance.isEnd;
  return (posts == null ? void 0 : posts.length) > 0 && /* @__PURE__ */ jsxs91("div", { className: "posts-slider", children: [
    /* @__PURE__ */ jsxs91("div", { className: "mb-12 flex items-center justify-between gap-12 md:mb-16 xl:mb-24", children: [
      /* @__PURE__ */ jsx115("span", { dangerouslySetInnerHTML: { __html: heading }, className: "text-h3 font-normal" }),
      /* @__PURE__ */ jsxs91("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx115(
          "button",
          {
            className: clsx38("group", disablePrevButton && "pointer-events-none opacity-50"),
            "aria-label": "Go to previous slides",
            onClick: () => {
              swiperInstance.slidePrev();
            },
            type: "button",
            children: /* @__PURE__ */ jsx115(NavLeftIcon, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white" })
          }
        ),
        /* @__PURE__ */ jsx115(
          "button",
          {
            className: clsx38("group", disableNextButton && "pointer-events-none opacity-50"),
            "aria-label": "Go to next slides",
            onClick: () => {
              swiperInstance.slideNext();
            },
            type: "button",
            children: /* @__PURE__ */ jsx115(NavLeftIcon, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white", className: "rotate-180" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx115(
      Swiper4,
      {
        onSwiper: (s) => setSwiperInstance(s),
        onSlideChange: (s) => {
          setSwiperInstanceUpdate(__spreadValues({}, s));
        },
        spaceBetween: 24,
        slidesPerView: 1.2,
        breakpoints: {
          480: { slidesPerView: 1.75 },
          768: { slidesPerView: 3.2 }
        },
        className: "!overflow-visible",
        children: (posts == null ? void 0 : posts.length) > 0 && (posts == null ? void 0 : posts.map((post, index) => /* @__PURE__ */ jsx115(SwiperSlide4, { children: /* @__PURE__ */ jsx115(PostPreviewCard_default, { categoriesAccessor, post }, post.ID) }, `slide-${index}`)))
      }
    )
  ] });
}
var PostsSlider_default;
var init_PostsSlider = __esm({
  "src/components/flexible/blog/components/FeaturedBlogPosts/PostsSlider.tsx"() {
    init_Icons();
    init_PostPreviewCard();
    PostsSlider_default = PostsSlider;
  }
});

// src/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsSlider.tsx
var FeaturedBlogPostsSlider_exports = {};
__export(FeaturedBlogPostsSlider_exports, {
  default: () => FeaturedBlogPostsSlider_default
});
import { jsx as jsx116, jsxs as jsxs92 } from "react/jsx-runtime";
function FeaturedBlogPosts(props) {
  const { content, categoriesAccessor } = props;
  const { heading, layout, posts, post_category } = content || {};
  const { recent_posts } = post_category || {};
  return /* @__PURE__ */ jsxs92("div", { className: "featured-blog-posts-slider", children: [
    layout === "mixedPostsSlider" && /* @__PURE__ */ jsx116(PostsSlider_default, { categoriesAccessor, heading, posts }),
    layout === "categoryPostsSlider" && /* @__PURE__ */ jsx116(PostsSlider_default, { categoriesAccessor, heading, posts: recent_posts })
  ] });
}
var FeaturedBlogPostsSlider_default;
var init_FeaturedBlogPostsSlider = __esm({
  "src/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsSlider.tsx"() {
    init_PostsSlider();
    FeaturedBlogPostsSlider_default = FeaturedBlogPosts;
  }
});

// src/components/flexible/blog/components/BlogFeaturedRow.tsx
var BlogFeaturedRow_exports = {};
__export(BlogFeaturedRow_exports, {
  default: () => BlogFeaturedRow_default
});
import Link32 from "next/link";
import { useWindowSize as useWindowSize7 } from "react-use";
import clsx39 from "clsx";
import { jsx as jsx117, jsxs as jsxs93 } from "react/jsx-runtime";
function BlogFeaturedRow(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { post } = props;
  const relatedPost = post[0];
  const useAuthorGuest = ((_a = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _a.show_guest_author) || false;
  const authorImage = useAuthorGuest ? (_c = (_b = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _b.guest_author) == null ? void 0 : _c.avatar : (_d = relatedPost == null ? void 0 : relatedPost.author) == null ? void 0 : _d.profile_picture;
  const authorName = useAuthorGuest ? (_f = (_e = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _e.guest_author) == null ? void 0 : _f.name : (_g = relatedPost == null ? void 0 : relatedPost.author) == null ? void 0 : _g.name;
  const { width: windowWidth } = useWindowSize7();
  const isMobile = windowWidth < 768;
  const mobileTextClass = "text-h6";
  return /* @__PURE__ */ jsx117("div", { className: "blog-featured-row", children: /* @__PURE__ */ jsx117("div", { className: "container", children: /* @__PURE__ */ jsxs93(Link32, { href: (relatedPost == null ? void 0 : relatedPost.permalink) || "/", className: "group flex flex-col-reverse justify-start gap-4 sm:gap-12 md:flex-row md:gap-16 xl:gap-20", children: [
    /* @__PURE__ */ jsxs93("div", { className: "flex w-full max-w-[520px] flex-col items-start justify-between gap-6", children: [
      /* @__PURE__ */ jsxs93("div", { children: [
        /* @__PURE__ */ jsxs93("div", { className: "mb-4 flex flex-wrap items-center justify-start gap-4 sm:mb-6", children: [
          /* @__PURE__ */ jsx117(PostTag_default, { text: "Featured" }),
          /* @__PURE__ */ jsx117("span", { className: "text-15 font-body font-normal", children: relatedPost == null ? void 0 : relatedPost.post_date_gmt })
        ] }),
        !!(relatedPost == null ? void 0 : relatedPost.post_title) && /* @__PURE__ */ jsx117("p", { className: clsx39(isMobile ? mobileTextClass : "text-h4"), dangerouslySetInnerHTML: { __html: relatedPost == null ? void 0 : relatedPost.post_title } })
      ] }),
      /* @__PURE__ */ jsxs93("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx117(WpImage, { image: authorImage, className: "h-10 w-10 rounded" }),
        /* @__PURE__ */ jsxs93("div", { className: "flex flex-col font-body text-navy", children: [
          /* @__PURE__ */ jsx117("p", { className: "text-12 font-normal opacity-60", children: "Published by" }),
          /* @__PURE__ */ jsx117("p", { className: "text-16 font-medium text-navy", dangerouslySetInnerHTML: { __html: authorName } })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx117("div", { className: "aspect-[652/369] w-full overflow-hidden rounded object-cover object-center md:max-w-[652px]", children: /* @__PURE__ */ jsx117(
      WpImage,
      {
        image: getPostPreviewImage_default(relatedPost),
        className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
      }
    ) })
  ] }) }) });
}
var BlogFeaturedRow_default;
var init_BlogFeaturedRow = __esm({
  "src/components/flexible/blog/components/BlogFeaturedRow.tsx"() {
    init_PostTag();
    init_Wp();
    init_getPostPreviewImage();
    BlogFeaturedRow_default = BlogFeaturedRow;
  }
});

// src/components/flexible/blog/components/BlogFeaturedGrid.tsx
var BlogFeaturedGrid_exports = {};
__export(BlogFeaturedGrid_exports, {
  default: () => BlogFeaturedGrid_default
});
import clsx40 from "clsx";
import Link33 from "next/link";
import { useWindowSize as useWindowSize8 } from "react-use";
import { jsx as jsx118, jsxs as jsxs94 } from "react/jsx-runtime";
function BlogFeaturedGrid(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { featured_post, other_posts } = props;
  const isFeaturedOnDemand = (_d = (_c = (_b = (_a = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _a.acf) == null ? void 0 : _b.visual_tags) == null ? void 0 : _c.tags) == null ? void 0 : _d.includes("On-demand");
  const { width: windowWidth } = useWindowSize8();
  const isMobile = windowWidth < 768;
  const mobileTextClass = "text-h6";
  return /* @__PURE__ */ jsx118("div", { className: "blog-featured-grid", children: /* @__PURE__ */ jsxs94("div", { className: "flex flex-col items-start justify-start gap-12 md:gap-12 lg:flex-row lg:gap-20", children: [
    /* @__PURE__ */ jsxs94(
      Link33,
      {
        href: ((_e = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _e.permalink) || "/",
        className: "group flex flex-shrink-0 flex-col gap-4 sm:gap-8 md:max-w-[100%] lg:max-w-[50%] xl:max-w-[42.5%]",
        children: [
          /* @__PURE__ */ jsx118("div", { className: "aspect-[543/305] w-full overflow-hidden rounded-lg xl:max-w-[543px]", children: /* @__PURE__ */ jsx118(
            WpImage,
            {
              alt: (_f = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _f.post_title,
              image: getPostPreviewImage_default(featured_post == null ? void 0 : featured_post[0]),
              className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs94("div", { className: "", children: [
            /* @__PURE__ */ jsxs94("div", { className: "mb-4 flex flex-wrap items-center justify-start gap-4 sm:mb-5", children: [
              (_h = (_g = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _g.categories) == null ? void 0 : _h.map((category) => /* @__PURE__ */ jsx118(PostTag_default, { text: category.name }, category == null ? void 0 : category.id)),
              /* @__PURE__ */ jsx118(
                "span",
                {
                  className: "text-15 font-body font-normal",
                  dangerouslySetInnerHTML: {
                    __html: isFeaturedOnDemand ? "On-demand" : (_i = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _i.post_date_gmt
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx118(
              "p",
              {
                className: clsx40("preview-text-heading !text-normal mb-4 sm:mb-8", isMobile ? mobileTextClass : "text-h6"),
                dangerouslySetInnerHTML: { __html: (_j = featured_post == null ? void 0 : featured_post[0]) == null ? void 0 : _j.post_title }
              }
            ),
            /* @__PURE__ */ jsxs94("div", { className: "text-17 group flex items-center gap-[14px] font-semibold", children: [
              /* @__PURE__ */ jsx118(RightArrowCircle, { circleClassName: "text-navy group-hover:text-blue" }),
              "Read article"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx118("div", { className: "grid h-full flex-col justify-between gap-10 sm:grid-cols-2 xl:flex", children: other_posts == null ? void 0 : other_posts.map((post) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k, _l, _m, _n, _o, _p;
      const isOnDemand = (_c2 = (_b2 = (_a2 = post == null ? void 0 : post.acf) == null ? void 0 : _a2.visual_tags) == null ? void 0 : _b2.tags) == null ? void 0 : _c2.includes("On-demand");
      return /* @__PURE__ */ jsxs94(
        Link33,
        {
          href: (post == null ? void 0 : post.permalink) || "/",
          className: "group flex flex-col items-start justify-start gap-6 lg:gap-[34px] xl:flex-row xl:items-center",
          children: [
            /* @__PURE__ */ jsx118("div", { className: "aspect-[265/150] w-full overflow-hidden rounded-md xl:max-w-[265px]", children: /* @__PURE__ */ jsx118(
              WpImage,
              {
                image: getPostPreviewImage_default(post),
                className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxs94("div", { className: "text-15 flex flex-col gap-4 font-body font-normal xl:gap-6", children: [
              /* @__PURE__ */ jsxs94("div", { className: "flex items-center gap-4", children: [
                (_d2 = post == null ? void 0 : post.categories) == null ? void 0 : _d2.map((category) => /* @__PURE__ */ jsx118(PostTag_default, { text: category.name }, category == null ? void 0 : category.id)),
                /* @__PURE__ */ jsxs94("div", { className: "flex items-center gap-4 lg:hidden xl:flex", children: [
                  /* @__PURE__ */ jsx118("span", { dangerouslySetInnerHTML: { __html: isOnDemand ? "On-demand" : post == null ? void 0 : post.post_date_gmt } }),
                  /* @__PURE__ */ jsx118(
                    "span",
                    {
                      className: "text-15 font-body font-normal",
                      dangerouslySetInnerHTML: {
                        __html: ((_f2 = (_e2 = post == null ? void 0 : post.acf) == null ? void 0 : _e2.visual_tags) == null ? void 0 : _f2.location) || // @ts-ignore
                        ((_h2 = (_g2 = post == null ? void 0 : post.tags) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.name) || ((_k = (_j2 = (_i2 = post == null ? void 0 : post.acf) == null ? void 0 : _i2.visual_tags) == null ? void 0 : _j2.tags) == null ? void 0 : _k[0]) || ((_n = (_m = (_l = post == null ? void 0 : post.acf) == null ? void 0 : _l.visual_tags) == null ? void 0 : _m.custom_tags) == null ? void 0 : _n[0])
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs94("div", { className: "hidden items-center gap-4 lg:flex xl:hidden", children: [
                /* @__PURE__ */ jsx118("span", { dangerouslySetInnerHTML: { __html: post == null ? void 0 : post.post_date_gmt } }),
                /* @__PURE__ */ jsx118(
                  "span",
                  {
                    className: "text-15 font-body font-normal",
                    dangerouslySetInnerHTML: {
                      // @ts-ignore
                      __html: (_p = (_o = post == null ? void 0 : post.tags) == null ? void 0 : _o[0]) == null ? void 0 : _p.name
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx118(
                "p",
                {
                  className: clsx40("preview-text-heading !font-normal", isMobile ? mobileTextClass : "text-20"),
                  dangerouslySetInnerHTML: { __html: post == null ? void 0 : post.post_title }
                }
              )
            ] })
          ]
        },
        post.ID
      );
    }) })
  ] }) });
}
var BlogFeaturedGrid_default;
var init_BlogFeaturedGrid = __esm({
  "src/components/flexible/blog/components/BlogFeaturedGrid.tsx"() {
    init_Icons();
    init_PostTag();
    init_Wp();
    init_getPostPreviewImage();
    BlogFeaturedGrid_default = BlogFeaturedGrid;
  }
});

// src/components/flexible/blog/components/NewsroomFeaturedRow.tsx
var NewsroomFeaturedRow_exports = {};
__export(NewsroomFeaturedRow_exports, {
  default: () => NewsroomFeaturedRow_default
});
import clsx41 from "clsx";
import Link34 from "next/link";
import { jsx as jsx119, jsxs as jsxs95 } from "react/jsx-runtime";
function NewsroomFeaturedRow(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { post, options } = props;
  if (!post || !post.length) return null;
  const relatedPost = post[0];
  const useAuthorGuest = ((_a = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _a.show_guest_author) || false;
  const authorImage = useAuthorGuest ? (_c = (_b = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _b.guest_author) == null ? void 0 : _c.avatar : (_d = relatedPost == null ? void 0 : relatedPost.author) == null ? void 0 : _d.profile_picture;
  const authorName = useAuthorGuest ? (_f = (_e = relatedPost == null ? void 0 : relatedPost.acf) == null ? void 0 : _e.guest_author) == null ? void 0 : _f.name : (_g = relatedPost == null ? void 0 : relatedPost.author) == null ? void 0 : _g.name;
  return /* @__PURE__ */ jsx119("div", { className: "blog-featured-row", children: /* @__PURE__ */ jsx119("div", { className: "container", children: /* @__PURE__ */ jsxs95(
    Link34,
    {
      href: (relatedPost == null ? void 0 : relatedPost.permalink) || "/",
      className: clsx41(
        options.asset_position === "left" ? "md:flex-row-reverse" : "md:flex-row",
        "group flex flex-col-reverse justify-start gap-6 sm:gap-12 md:justify-between md:gap-16 xl:gap-20"
      ),
      children: [
        /* @__PURE__ */ jsxs95("div", { className: "flex w-full max-w-[520px] flex-col items-start justify-between gap-4 sm:gap-6", children: [
          /* @__PURE__ */ jsxs95("div", { children: [
            /* @__PURE__ */ jsxs95("div", { className: "mb-6 flex items-center justify-start gap-4", children: [
              /* @__PURE__ */ jsx119(PostTag_default, { text: "Featured", bgColor: "blue", textColor: "white" }),
              /* @__PURE__ */ jsx119("span", { className: "text-15 font-body font-normal", children: relatedPost == null ? void 0 : relatedPost.post_date_gmt })
            ] }),
            !!(relatedPost == null ? void 0 : relatedPost.post_title) && /* @__PURE__ */ jsx119(
              "p",
              {
                className: "preview-text-heading text-h5 !leading-[1.20] !tracking-[-0.015em]",
                dangerouslySetInnerHTML: { __html: relatedPost == null ? void 0 : relatedPost.post_title }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs95("div", { className: "text-17 flex items-center gap-[14px] font-semibold", children: [
            /* @__PURE__ */ jsx119(RightArrowCircle, { circleClassName: "group-hover:text-blue" }),
            /* @__PURE__ */ jsx119("span", { dangerouslySetInnerHTML: { __html: "Read article" } })
          ] })
        ] }),
        /* @__PURE__ */ jsx119("div", { className: "aspect-[652/366] w-full overflow-hidden rounded object-cover object-center md:max-w-[652px]", children: /* @__PURE__ */ jsx119(
          WpImage,
          {
            image: getPostPreviewImage_default(relatedPost),
            className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          }
        ) })
      ]
    }
  ) }) });
}
var NewsroomFeaturedRow_default;
var init_NewsroomFeaturedRow = __esm({
  "src/components/flexible/blog/components/NewsroomFeaturedRow.tsx"() {
    init_Icons();
    init_PostTag();
    init_Wp();
    init_getPostPreviewImage();
    NewsroomFeaturedRow_default = NewsroomFeaturedRow;
  }
});

// src/components/flexible/blog/components/FeaturedMixedSlider/MixedSliderCardInner.tsx
import { Fragment as Fragment18, jsx as jsx120, jsxs as jsxs96 } from "react/jsx-runtime";
function MixedSliderCardInner({ item }) {
  var _a, _b;
  const { layout, page, post, file } = item;
  let image = null;
  if (layout === "post") {
    image = getPostPreviewImage_default(post == null ? void 0 : post[0]);
  }
  if (layout === "page") {
    image = page == null ? void 0 : page.image;
  }
  if (layout === "file") {
    image = file == null ? void 0 : file.image;
  }
  let tag = null;
  if (layout === "post") {
    tag = (_a = post == null ? void 0 : post[0]) == null ? void 0 : _a.post_date_gmt;
  }
  if (layout === "page") {
    tag = page == null ? void 0 : page.tag;
  }
  if (layout === "file") {
    tag = file == null ? void 0 : file.tag;
  }
  let heading = null;
  if (layout === "post") {
    heading = (_b = post == null ? void 0 : post[0]) == null ? void 0 : _b.post_title;
  }
  if (layout === "page") {
    heading = page == null ? void 0 : page.heading;
  }
  if (layout === "file") {
    heading = file == null ? void 0 : file.heading;
  }
  return /* @__PURE__ */ jsxs96(Fragment18, { children: [
    /* @__PURE__ */ jsx120("div", { className: "mb-6 aspect-[411/227] w-full overflow-hidden rounded-md", children: /* @__PURE__ */ jsx120(WpImage, { image, className: "h-full w-full object-cover object-center transition-transform duration-300 ease-linear group-hover:scale-110" }) }),
    /* @__PURE__ */ jsx120("span", { className: "text-15 mb-5 font-body", children: tag }),
    /* @__PURE__ */ jsx120("p", { className: "text-22 font-medium lg:max-w-[90%]", dangerouslySetInnerHTML: { __html: heading } })
  ] });
}
var MixedSliderCardInner_default;
var init_MixedSliderCardInner = __esm({
  "src/components/flexible/blog/components/FeaturedMixedSlider/MixedSliderCardInner.tsx"() {
    init_Wp();
    init_getPostPreviewImage();
    MixedSliderCardInner_default = MixedSliderCardInner;
  }
});

// src/components/flexible/blog/components/FeaturedMixedSlider/MixedSliderCard.tsx
import Link35 from "next/link";
import { Fragment as Fragment19, jsx as jsx121, jsxs as jsxs97 } from "react/jsx-runtime";
function MixedSliderCard(props) {
  var _a, _b, _c, _d;
  const { item } = props;
  const { layout, page, post, file } = item;
  let link = {
    link: null,
    target: null
  };
  if (layout === "post") {
    link = {
      link: (_a = post == null ? void 0 : post[0]) == null ? void 0 : _a.permalink,
      target: "_self"
    };
  }
  if (layout === "page") {
    link = {
      link: (_b = page == null ? void 0 : page.link) == null ? void 0 : _b.url,
      target: (_c = page == null ? void 0 : page.link) == null ? void 0 : _c.target
    };
  }
  return /* @__PURE__ */ jsxs97(Fragment19, { children: [
    (layout === "post" || layout === "page") && /* @__PURE__ */ jsx121(Link35, { href: (link == null ? void 0 : link.link) || "/", target: (link == null ? void 0 : link.target) || "_self", className: "mixed-slider-card--page-post group flex flex-col items-start", children: /* @__PURE__ */ jsx121(MixedSliderCardInner_default, { item }) }),
    layout === "file" && /* @__PURE__ */ jsx121("a", { download: true, href: (_d = file == null ? void 0 : file.file) == null ? void 0 : _d.url, className: "mixed-slider-card--file group flex flex-col items-start", children: /* @__PURE__ */ jsx121(MixedSliderCardInner_default, { item }) })
  ] });
}
var MixedSliderCard_default;
var init_MixedSliderCard = __esm({
  "src/components/flexible/blog/components/FeaturedMixedSlider/MixedSliderCard.tsx"() {
    init_MixedSliderCardInner();
    MixedSliderCard_default = MixedSliderCard;
  }
});

// src/components/flexible/blog/components/FeaturedMixedSlider/index.tsx
var FeaturedMixedSlider_exports = {};
__export(FeaturedMixedSlider_exports, {
  default: () => FeaturedMixedSlider_default
});
import { useState as useState27 } from "react";
import { Swiper as Swiper5, SwiperSlide as SwiperSlide5 } from "swiper/react";
import "swiper/css";
import clsx42 from "clsx";
import { jsx as jsx122, jsxs as jsxs98 } from "react/jsx-runtime";
function FeaturedMixedSlider(props) {
  const { heading, items } = props;
  const [swiperInstance, setSwiperInstance] = useState27(null);
  const [_, setSwiperInstanceUpdate] = useState27(null);
  const disablePrevButton = swiperInstance == null ? void 0 : swiperInstance.isBeginning;
  const disableNextButton = swiperInstance == null ? void 0 : swiperInstance.isEnd;
  return /* @__PURE__ */ jsxs98("div", { className: "featured-page-post-slider", children: [
    /* @__PURE__ */ jsxs98("div", { className: "mb-12 flex justify-between gap-12 md:mb-16 xl:mb-24", children: [
      /* @__PURE__ */ jsx122("h3", { dangerouslySetInnerHTML: { __html: heading }, className: "font-normal tracking-[-0.0175em]" }),
      /* @__PURE__ */ jsxs98("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx122(
          "button",
          {
            className: clsx42(disablePrevButton && "pointer-events-none opacity-50"),
            "aria-label": "Go to previous slides",
            onClick: () => {
              swiperInstance.slidePrev();
            },
            type: "button",
            children: /* @__PURE__ */ jsx122(NavLeftIcon, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white" })
          }
        ),
        /* @__PURE__ */ jsx122(
          "button",
          {
            className: clsx42(disableNextButton && "pointer-events-none opacity-50"),
            "aria-label": "Go to next slides",
            onClick: () => {
              swiperInstance.slideNext();
            },
            type: "button",
            children: /* @__PURE__ */ jsx122(NavLeftIcon, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white", className: "rotate-180" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx122(
      Swiper5,
      {
        onSwiper: (s) => setSwiperInstance(s),
        onSlideChange: (s) => {
          setSwiperInstanceUpdate(__spreadValues({}, s));
        },
        spaceBetween: 24,
        breakpoints: {
          480: { slidesPerView: 1.75 },
          768: { slidesPerView: 3.2 }
        },
        className: "!overflow-visible",
        children: (items == null ? void 0 : items.length) > 0 && (items == null ? void 0 : items.map((item, index) => /* @__PURE__ */ jsx122(SwiperSlide5, { children: /* @__PURE__ */ jsx122(MixedSliderCard_default, { item }, `item-${index}`) }, `slide-${index}`)))
      }
    )
  ] });
}
var FeaturedMixedSlider_default;
var init_FeaturedMixedSlider = __esm({
  "src/components/flexible/blog/components/FeaturedMixedSlider/index.tsx"() {
    init_Icons();
    init_MixedSliderCard();
    FeaturedMixedSlider_default = FeaturedMixedSlider;
  }
});

// src/components/flexible/conversions/components/GetStartedCTA.tsx
var GetStartedCTA_exports = {};
__export(GetStartedCTA_exports, {
  default: () => GetStartedCTA_default
});
import { useState as useState28 } from "react";
import { jsx as jsx125, jsxs as jsxs100 } from "react/jsx-runtime";
function GetStartedCTA({ heading, content, link }) {
  const [hovered, setHovered] = useState28(false);
  const buttonProps2 = getButtonLinkProps({
    title: String(link == null ? void 0 : link.title),
    button: {
      background_color: "white",
      type: "default"
    }
  });
  return /* @__PURE__ */ jsxs100("div", { className: "flex flex-col items-center overflow-hidden rounded-lg bg-blue pt-[1.75rem] text-white md:pt-12 lg:flex-row lg:pl-12 lg:pr-10 lg:pt-0", children: [
    /* @__PURE__ */ jsxs100("div", { className: "relative z-10 mb-6 space-y-4 px-5 text-center lg:mb-0 lg:px-0 lg:text-left", children: [
      heading && /* @__PURE__ */ jsx125("span", { className: "text-h4 mx-auto max-w-[13.8rem] !tracking-[-0.025em] lg:mx-0 lg:max-w-none", dangerouslySetInnerHTML: { __html: heading } }),
      content && /* @__PURE__ */ jsx125("p", { className: "text-18 max-w-[18rem] font-body lg:max-w-none", dangerouslySetInnerHTML: { __html: content } })
    ] }),
    /* @__PURE__ */ jsxs100("div", { className: "order-last mb-[-50%] mr-[-75%] mt-[-10%] w-4/5 rotate-[55deg] lg:order-[2] lg:my-[-13%] lg:ml-auto lg:mr-0 lg:w-[17.8125rem] lg:rotate-45", children: [
      /* @__PURE__ */ jsx125("div", { className: `hidden translate-x-8 translate-y-[.2rem] transition-transform duration-500 lg:block ${hovered ? "translate-x-[15%]" : ""}`, children: /* @__PURE__ */ jsx125(CTASpring, {}) }),
      /* @__PURE__ */ jsx125("div", { className: `rotate-180 transition-transform duration-500 ${hovered ? "lg:translate-x-[-15%]" : ""}`, children: /* @__PURE__ */ jsx125(CTASpring, {}) })
    ] }),
    (link == null ? void 0 : link.title) && /* @__PURE__ */ jsx125(
      "div",
      {
        className: "relative z-10 w-auto px-6 text-center md:mx-auto lg:order-last lg:ml-auto lg:mr-0 lg:w-auto lg:shrink-0 lg:px-0 lg:text-left",
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        children: /* @__PURE__ */ jsx125(Link, { href: link == null ? void 0 : link.url, target: link == null ? void 0 : link.target, children: /* @__PURE__ */ jsx125(Button_default, __spreadValues({}, buttonProps2)) })
      }
    )
  ] });
}
var GetStartedCTA_default;
var init_GetStartedCTA = __esm({
  "src/components/flexible/conversions/components/GetStartedCTA.tsx"() {
    init_Link();
    init_Icons();
    init_links();
    init_Button();
    GetStartedCTA_default = GetStartedCTA;
  }
});

// src/components/flexible/conversions/components/ConnectCTA.tsx
var ConnectCTA_exports = {};
__export(ConnectCTA_exports, {
  default: () => ConnectCTA_default
});
import clsx44 from "clsx";
import Link37 from "next/link";
import { useInView as useInView9 } from "framer-motion";
import { useRef as useRef15, useState as useState29 } from "react";
import { jsx as jsx126, jsxs as jsxs101 } from "react/jsx-runtime";
function ConnectCTA(props) {
  var _a, _b, _c;
  const { content, options } = props;
  const { layout, background_color, text_color } = options || {};
  const { heading, links, form } = content || {};
  const { success_text = "Thanks for subscribing." } = form || {};
  const ref = useRef15(null);
  const isInView = useInView9(ref, { amount: 0.7, once: true });
  const [formSubmitted, setFormSubmitted] = useState29(false);
  const buttonProps2 = getButtonLinkProps({
    title: (_a = content == null ? void 0 : content.file) == null ? void 0 : _a.button_text,
    button: {
      background_color: "white-alt",
      type: "default"
    }
  });
  return /* @__PURE__ */ jsx126("div", { ref, className: "connect-cta", children: /* @__PURE__ */ jsxs101("div", { className: "flex h-full w-full justify-stretch", children: [
    /* @__PURE__ */ jsxs101(
      "div",
      {
        className: clsx44(
          "flex flex-1 flex-col items-center justify-between gap-6 rounded-l-lg px-6 py-6 sm:py-8 sm:pl-12 sm:pr-10 md:flex-row",
          getBackgroundColor(background_color),
          getTextColor(text_color || "white")
        ),
        children: [
          !!heading && /* @__PURE__ */ jsx126(
            "span",
            {
              className: "text-h5",
              dangerouslySetInnerHTML: {
                __html: getSplitBreakText({
                  text: heading
                })
              }
            }
          ),
          layout === "fileDownload" && /* @__PURE__ */ jsx126(
            "a",
            {
              download: true,
              href: (_c = (_b = content == null ? void 0 : content.file) == null ? void 0 : _b.file) == null ? void 0 : _c.url,
              children: /* @__PURE__ */ jsx126(Button_default, __spreadValues({}, buttonProps2))
            }
          ),
          layout === "links" && /* @__PURE__ */ jsx126("div", { className: "flex gap-x-2", children: (links == null ? void 0 : links.length) > 0 && (links == null ? void 0 : links.map((link, index) => {
            var _a2, _b2;
            const { image } = link;
            return /* @__PURE__ */ jsx126(
              Link37,
              {
                target: ((_a2 = link == null ? void 0 : link.link) == null ? void 0 : _a2.target) || "_self",
                href: (_b2 = link == null ? void 0 : link.link) == null ? void 0 : _b2.url,
                className: "h-10 w-10 rounded-full bg-white p-[1px] transition-opacity duration-300 ease-in-out hover:opacity-80",
                children: /* @__PURE__ */ jsx126(WpImage, { image, className: "h-full w-full" })
              },
              `link-${index}`
            );
          })) }),
          layout === "subscribe" && /* @__PURE__ */ jsx126("div", { className: "w-full md:max-w-[366px]", children: /* @__PURE__ */ jsx126("div", { dangerouslySetInnerHTML: { __html: form == null ? void 0 : form.form_embed } }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx126(
      "div",
      {
        className: clsx44(
          isInView ? "scale-x-100" : "scale-x-0",
          "origin-left transition-transform duration-300 ease-linear",
          "leaders-grid__row-one__lines flex"
        ),
        children: Array(3).fill("").map((_, i) => /* @__PURE__ */ jsx126(
          "div",
          {
            style: { width: `${8 - i * 2.4}px`, marginLeft: `${4 + i * 1.4}px` },
            className: clsx44("h-full", getBackgroundColor(background_color))
          },
          `line-${i}`
        ))
      }
    )
  ] }) });
}
var ConnectCTA_default;
var init_ConnectCTA = __esm({
  "src/components/flexible/conversions/components/ConnectCTA.tsx"() {
    init_Wp();
    init_text();
    init_ColorHelpers();
    init_Button();
    init_links();
    ConnectCTA_default = ConnectCTA;
  }
});

// src/components/flexible/conversions/components/ContactGrid/ItemHeadings.tsx
import clsx45 from "clsx";
import { motion as motion4 } from "framer-motion";
import { Fragment as Fragment20, jsx as jsx127, jsxs as jsxs102 } from "react/jsx-runtime";
function ItemHeadings({ subheading, heading, altVer }) {
  return /* @__PURE__ */ jsxs102(Fragment20, { children: [
    !!subheading && /* @__PURE__ */ jsx127(
      "span",
      {
        className: clsx45(
          "text-15 relative text-left transition-colors duration-300 ease-linear",
          altVer ? "text-white/80" : "text-navy/80 group-hover:text-white/80"
        ),
        dangerouslySetInnerHTML: {
          __html: subheading
        }
      }
    ),
    !!heading && /* @__PURE__ */ jsx127(
      motion4.p,
      {
        layout: "position",
        transition: { duration: 0.25, ease: "linear" },
        className: clsx45(
          "text-h5 relative text-left font-bold transition-colors duration-300 ease-linear",
          altVer ? "text-white" : "text-navy group-hover:text-white"
        ),
        dangerouslySetInnerHTML: {
          __html: getSplitBreakText({
            text: heading
          })
        }
      }
    )
  ] });
}
var ItemHeadings_default;
var init_ItemHeadings = __esm({
  "src/components/flexible/conversions/components/ContactGrid/ItemHeadings.tsx"() {
    init_text();
    ItemHeadings_default = ItemHeadings;
  }
});

// src/components/flexible/conversions/components/ContactGrid/ItemArrows.tsx
import { m as m34 } from "framer-motion";
import { Fragment as Fragment21, jsx as jsx128, jsxs as jsxs103 } from "react/jsx-runtime";
function ItemArrows({ isHovered, altVer }) {
  return /* @__PURE__ */ jsxs103(Fragment21, { children: [
    altVer && isHovered && /* @__PURE__ */ jsx128(
      m34.span,
      {
        initial: { opacity: 0, x: -10, y: 10 },
        animate: {
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
          y: isHovered ? 0 : 10,
          transition: {
            duration: 0.4,
            ease: "easeInOut"
          }
        },
        className: "absolute right-6 top-6 md:right-3 md:top-3 lg:right-6 lg:top-6",
        children: /* @__PURE__ */ jsx128(ContactTopRightArrowCircle, {})
      }
    ),
    !altVer && isHovered && /* @__PURE__ */ jsx128(
      m34.span,
      {
        initial: { opacity: 0, x: -10, y: 10 },
        animate: {
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
          y: isHovered ? 0 : 10,
          transition: {
            duration: 0.4,
            ease: "easeInOut"
          }
        },
        className: "absolute right-6 top-6 md:right-3 md:top-3 lg:right-6 lg:top-6",
        children: /* @__PURE__ */ jsx128(ContactTopRightArrowCircle, { arrowClassName: "text-white", circleClassName: "text-purple" })
      }
    )
  ] });
}
var ItemArrows_default;
var init_ItemArrows = __esm({
  "src/components/flexible/conversions/components/ContactGrid/ItemArrows.tsx"() {
    init_Icons();
    ItemArrows_default = ItemArrows;
  }
});

// src/components/flexible/conversions/components/ContactGrid/AnimatedLines.tsx
import clsx46 from "clsx";
import { Fragment as Fragment22, jsx as jsx129, jsxs as jsxs104 } from "react/jsx-runtime";
function AnimatedLines({ isHovered, highlight }) {
  return /* @__PURE__ */ jsxs104(Fragment22, { children: [
    highlight && /* @__PURE__ */ jsx129("div", { className: "absolute right-0 top-0 flex w-full max-w-[348px] flex-col items-end", children: /* @__PURE__ */ jsxs104(
      "span",
      {
        className: clsx46(
          "flex h-full w-full flex-col items-end",
          isHovered ? "scale-x-0" : "scale-x-75 md:scale-x-100",
          "h-full origin-right transition-transform duration-300 ease-linear"
        ),
        children: [
          /* @__PURE__ */ jsx129("span", { className: "aspect-[334/113] w-full max-w-[334px]", children: /* @__PURE__ */ jsx129(ContactItemHighlightedUpperSpring, {}) }),
          /* @__PURE__ */ jsx129("span", { className: "-mt-[1px] aspect-[204/248] w-full max-w-[204px]", children: /* @__PURE__ */ jsx129(ContactItemHighlightedLowerSpring, {}) })
        ]
      }
    ) }),
    !highlight && /* @__PURE__ */ jsx129("div", { className: "absolute right-0 top-0 flex h-full w-full max-w-[194px]", children: /* @__PURE__ */ jsxs104(
      "span",
      {
        className: clsx46(
          isHovered ? "scale-x-75 md:scale-x-100" : "scale-x-0",
          "flex h-full w-full origin-right flex-col items-end justify-end transition-transform duration-300 ease-linear"
        ),
        children: [
          /* @__PURE__ */ jsx129("span", { className: "aspect-[91/129] w-full max-w-[91px]", children: /* @__PURE__ */ jsx129(ContactItemUpperSpring, {}) }),
          /* @__PURE__ */ jsx129("span", { className: "aspect-[194/55] w-full max-w-[194px]", children: /* @__PURE__ */ jsx129(ContactItemLowerSpring, {}) })
        ]
      }
    ) })
  ] });
}
var AnimatedLines_default;
var init_AnimatedLines = __esm({
  "src/components/flexible/conversions/components/ContactGrid/AnimatedLines.tsx"() {
    init_Icons();
    AnimatedLines_default = AnimatedLines;
  }
});

// src/components/flexible/conversions/components/ContactGrid/LinkItem.tsx
import Link38 from "next/link";
import clsx47 from "clsx";
import { useState as useState30 } from "react";
import { LazyMotion as LazyMotion25, domAnimation as domAnimation22 } from "framer-motion";
import { jsx as jsx130, jsxs as jsxs105 } from "react/jsx-runtime";
function LinkItem({ item, highlight = false }) {
  const { subheading, heading, link } = item;
  const [isHovered, setIsHovered] = useState30(false);
  return /* @__PURE__ */ jsx130(LazyMotion25, { features: domAnimation22, children: /* @__PURE__ */ jsxs105(
    Link38,
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      href: (link == null ? void 0 : link.url) || "#",
      target: getLinkTarget(link == null ? void 0 : link.target),
      className: clsx47(
        "group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg p-4 transition-colors duration-300 ease-in-out md:p-6 lg:p-8",
        highlight ? "bg-blue text-white" : "bg-lightGrey hover:bg-navy"
      ),
      children: [
        /* @__PURE__ */ jsx130(AnimatedLines_default, { isHovered, highlight }),
        /* @__PURE__ */ jsx130(ItemHeadings_default, { subheading, heading, altVer: highlight }),
        /* @__PURE__ */ jsx130(ItemArrows_default, { altVer: highlight, isHovered })
      ]
    }
  ) });
}
var LinkItem_default;
var init_LinkItem = __esm({
  "src/components/flexible/conversions/components/ContactGrid/LinkItem.tsx"() {
    init_links();
    init_ItemHeadings();
    init_ItemArrows();
    init_AnimatedLines();
    LinkItem_default = LinkItem;
  }
});

// src/components/flexible/conversions/components/ContactGrid/ModalItem.tsx
import { useState as useState31 } from "react";
import clsx48 from "clsx";
import { AnimatePresence as AnimatePresence9, LazyMotion as LazyMotion26, domAnimation as domAnimation23, m as m35 } from "framer-motion";
import { jsx as jsx131, jsxs as jsxs106 } from "react/jsx-runtime";
function ModalItem({ item, highlight = false }) {
  var _a;
  const { subheading, heading, form } = item;
  const [showModal, setShowModal] = useState31(false);
  const [isHovered, setIsHovered] = useState31(false);
  return /* @__PURE__ */ jsxs106(LazyMotion26, { features: domAnimation23, children: [
    /* @__PURE__ */ jsxs106(
      "button",
      {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        type: "button",
        onClick: () => setShowModal(true),
        className: clsx48(
          "group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg p-4 transition-colors duration-300 ease-in-out md:p-6 lg:p-8",
          highlight ? "bg-blue text-white" : "bg-lightGrey hover:bg-navy"
        ),
        children: [
          /* @__PURE__ */ jsx131(AnimatedLines_default, { isHovered, highlight }),
          /* @__PURE__ */ jsx131(ItemHeadings_default, { subheading, heading, altVer: highlight }),
          /* @__PURE__ */ jsx131(ItemArrows_default, { altVer: highlight, isHovered })
        ]
      }
    ),
    /* @__PURE__ */ jsx131(AnimatePresence9, { children: showModal && /* @__PURE__ */ jsx131(Portal_default, { rootId: "contact-form-modal", children: /* @__PURE__ */ jsx131(
      LightBoxOverlay_default,
      {
        onClick: () => {
          setShowModal(false);
        },
        contentVerticalPosition: "center",
        disableBlur: true,
        childrenContainerClassName: "w-full",
        children: /* @__PURE__ */ jsx131(LazyMotion26, { features: domAnimation23, children: /* @__PURE__ */ jsx131(
          m35.div,
          {
            initial: {
              opacity: 0,
              scale: 0.8,
              y: 20
            },
            animate: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.25,
                ease: "easeInOut"
              }
            },
            exit: {
              opacity: 0,
              scale: 0.8,
              y: 20,
              transition: {
                duration: 0.25,
                ease: "easeInOut"
              }
            },
            className: "contact-grid__dummy-form relative mx-auto max-w-[671px] rounded-xl bg-white p-6 md:aspect-[671/682] md:px-10 md:py-12",
            children: /* @__PURE__ */ jsx131("div", { className: "form-embed-wrapper overflow-hidden bg-white", children: ((_a = item == null ? void 0 : item.form) == null ? void 0 : _a.form_embed) && /* @__PURE__ */ jsx131("div", { dangerouslySetInnerHTML: { __html: item.form.form_embed } }) })
          }
        ) })
      }
    ) }) })
  ] });
}
var ModalItem_default;
var init_ModalItem = __esm({
  "src/components/flexible/conversions/components/ContactGrid/ModalItem.tsx"() {
    init_Portal();
    init_LightBoxOverlay();
    init_ItemHeadings();
    init_ItemArrows();
    init_AnimatedLines();
    ModalItem_default = ModalItem;
  }
});

// src/components/flexible/conversions/components/ContactGrid/ContactGrid.tsx
var ContactGrid_exports = {};
__export(ContactGrid_exports, {
  default: () => ContactGrid_default
});
import clsx49 from "clsx";
import { useRef as useRef16 } from "react";
import { useInView as useInView10 } from "framer-motion";
import { useWindowSize as useWindowSize9 } from "react-use";
import { jsx as jsx132, jsxs as jsxs107 } from "react/jsx-runtime";
function LeftLines({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs107("svg", { width, height, viewBox: "0 0 388 318", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx132("path", { d: "M6.06641 318L6.06641 1.48416e-05", stroke: "#0000DC", strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx132("path", { d: "M21.6445 318L21.6445 1.48416e-05", stroke: "#0000DC", strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx132("path", { d: "M37.2266 318L37.2266 1.48416e-05", stroke: "#0000DC", strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx132("path", { d: "M52.8047 318L52.8047 1.48416e-05", stroke: "#0000DC", strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx132("path", { d: "M68.3867 318L68.3867 1.48416e-05", stroke: "#0000DC", strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx132("path", { d: "M83.9688 318L83.9687 1.48416e-05", stroke: "#0000DC", strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx132("path", { d: "M99.5469 318L99.5469 1.48416e-05", stroke: "#0000DC", strokeWidth: "6.9517" }),
    /* @__PURE__ */ jsx132("path", { d: "M115.129 318L115.129 1.48416e-05", stroke: "#0000DC", strokeWidth: "7.44825" }),
    /* @__PURE__ */ jsx132("path", { d: "M130.711 318L130.711 1.48416e-05", stroke: "#0000DC", strokeWidth: "7.9448" }),
    /* @__PURE__ */ jsx132("path", { d: "M146.289 318L146.289 1.48416e-05", stroke: "#0000DC", strokeWidth: "8.44135" }),
    /* @__PURE__ */ jsx132("path", { d: "M161.871 318L161.871 1.48416e-05", stroke: "#0000DC", strokeWidth: "8.93789" }),
    /* @__PURE__ */ jsx132("path", { d: "M177.453 318L177.453 1.48416e-05", stroke: "#0000DC", strokeWidth: "9.43444" }),
    /* @__PURE__ */ jsx132("path", { d: "M193.031 318L193.031 1.48416e-05", stroke: "#0000DC", strokeWidth: "9.93099" }),
    /* @__PURE__ */ jsx132("path", { d: "M208.613 318L208.613 1.48416e-05", stroke: "#0000DC", strokeWidth: "10.4275" }),
    /* @__PURE__ */ jsx132("path", { d: "M224.195 318L224.195 1.48416e-05", stroke: "#0000DC", strokeWidth: "10.9241" }),
    /* @__PURE__ */ jsx132("path", { d: "M239.773 318L239.773 1.48416e-05", stroke: "#0000DC", strokeWidth: "11.4206" }),
    /* @__PURE__ */ jsx132("path", { d: "M255.355 318L255.355 1.48416e-05", stroke: "#0000DC", strokeWidth: "11.9172" }),
    /* @__PURE__ */ jsx132("path", { d: "M270.938 318L270.937 1.48416e-05", stroke: "#0000DC", strokeWidth: "12.4137" }),
    /* @__PURE__ */ jsx132("path", { d: "M286.516 318L286.516 1.48416e-05", stroke: "#0000DC", strokeWidth: "12.9103" }),
    /* @__PURE__ */ jsx132("path", { d: "M302.098 318L302.098 1.48416e-05", stroke: "#0000DC", strokeWidth: "13.4068" }),
    /* @__PURE__ */ jsx132("path", { d: "M317.676 318L317.676 1.48416e-05", stroke: "#0000DC", strokeWidth: "13.9034" }),
    /* @__PURE__ */ jsx132("path", { d: "M333.258 318L333.258 1.48416e-05", stroke: "#0000DC", strokeWidth: "14.3999" }),
    /* @__PURE__ */ jsx132("path", { d: "M348.84 318L348.84 1.48416e-05", stroke: "#0000DC", strokeWidth: "14.8965" }),
    /* @__PURE__ */ jsx132("path", { d: "M364.418 318L364.418 1.48416e-05", stroke: "#0000DC", strokeWidth: "15.393" }),
    /* @__PURE__ */ jsx132("path", { d: "M380 318L380 1.48416e-05", stroke: "#0000DC", strokeWidth: "15.8896" })
  ] });
}
function ContactGrid(props) {
  var _a, _b;
  const { content } = props;
  const getFirstRowItemSize = (index) => {
    switch (index) {
      case 0:
        return "w-full min-h-[200px] md:aspect-[737/360] md:max-w-[57.5%]";
      case 1:
        return "w-full min-h-[200px] flex-1";
      default:
        return "w-full min-h-[200px] flex-1";
    }
  };
  const getSecondRowItemSize = (index) => {
    switch (index) {
      default:
        return "w-full min-h-[200px] lg:aspect-[409/360] flex-1";
    }
  };
  const containerRef = useRef16(null);
  const { width: windowWidth } = useWindowSize9();
  const amountThreshold = windowWidth > 768 ? 0.5 : 0.2;
  const isInView = useInView10(containerRef, { amount: amountThreshold, once: true });
  return /* @__PURE__ */ jsxs107("div", { ref: containerRef, className: "contact-grid", children: [
    /* @__PURE__ */ jsx132("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 sm:gap-6 md:flex", children: (_a = [...content.items].splice(0, 2)) == null ? void 0 : _a.map((item, index) => {
      const { type } = item;
      const isFirstItem = index === 0;
      return /* @__PURE__ */ jsxs107("div", { className: clsx49(getFirstRowItemSize == null ? void 0 : getFirstRowItemSize(index), "relative"), children: [
        isFirstItem && /* @__PURE__ */ jsx132(
          "div",
          {
            className: clsx49(
              isInView ? "scale-x-100" : "scale-x-0",
              "absolute left-[-9%] top-4 h-full origin-right transition-transform duration-300 ease-linear"
            ),
            children: /* @__PURE__ */ jsx132(LeftLines, { height: "90%" })
          }
        ),
        type === "link" && /* @__PURE__ */ jsx132(LinkItem_default, { item, highlight: index === 0 }),
        type === "modalForm" && /* @__PURE__ */ jsx132(ModalItem_default, { item, highlight: index === 0 })
      ] }, `first-row-item-${index}`);
    }) }),
    /* @__PURE__ */ jsx132("div", { className: "grid gap-6 sm:grid-cols-2 md:flex", children: (_b = [...content.items].splice(2, content.items.length)) == null ? void 0 : _b.map((item, index) => {
      const { type } = item;
      return /* @__PURE__ */ jsxs107("div", { className: clsx49(getSecondRowItemSize == null ? void 0 : getSecondRowItemSize(index)), children: [
        type === "link" && /* @__PURE__ */ jsx132(LinkItem_default, { item }),
        type === "modalForm" && /* @__PURE__ */ jsx132(ModalItem_default, { item })
      ] }, `second-row-item-${index}`);
    }) })
  ] });
}
var ContactGrid_default;
var init_ContactGrid = __esm({
  "src/components/flexible/conversions/components/ContactGrid/ContactGrid.tsx"() {
    init_LinkItem();
    init_ModalItem();
    ContactGrid_default = ContactGrid;
  }
});

// src/components/layouts/Section/useSection.tsx
import { useCallback as useCallback2, useMemo } from "react";
var useSection, useSection_default;
var init_useSection = __esm({
  "src/components/layouts/Section/useSection.tsx"() {
    useSection = () => {
      const paddingTopMap = useMemo(
        () => ({
          none: "pt-0",
          min: "pt-8 md:pt-20",
          tiny: "pt-8 md:pt-24",
          xSmall: "pt-10 md:pt-[104px]",
          small: "pt-10 md:pt-28",
          medium: "pt-12 md:pt-[120px]",
          large: "pt-12 md:pt-36",
          xLarge: "pt-16 md:pt-40",
          huge: "pt-16 md:pt-40 lg:pt-44",
          max: "pt-20 md:pt-[190px]"
        }),
        []
      );
      const paddingBottomMap = useMemo(
        () => ({
          none: "pb-0",
          min: "pb-8 md:pb-20",
          tiny: "pb-8 md:pb-24",
          xSmall: "pb-10 md:pb-[104px]",
          small: "pb-10 md:pb-28",
          medium: "pb-12 md:pb-[120px]",
          large: "pb-12 md:pb-36",
          xLarge: "pb-16 md:pb-40",
          huge: "pb-16 md:pb-40 lg:pb-44",
          max: "pb-20 md:pb-[190px]"
        }),
        []
      );
      const innerSpacingMap = useMemo(
        () => ({
          none: "space-y-0",
          min: "space-y-8 md:space-y-8",
          tiny: "space-y-8 md:space-y-[72px]",
          xSmall: "space-y-10 md:space-y-20",
          small: "space-y-12 md:space-y-[88px]",
          medium: "space-y-12 md:space-y-24",
          large: "space-y-12 md:space-y-[104px]",
          xLarge: "space-y-12 md:space-y-[120px]",
          huge: "space-y-16 md:space-y-32",
          xHuge: "space-y-16 md:space-y-[136px]",
          max: "space-y-20 md:space-y-44"
        }),
        []
      );
      const getSectionColors = useCallback2((background = "") => {
        switch (background) {
          case "black":
            return "bg-black text-white";
          case "navy":
            return "bg-navy text-white";
          case "white":
            return "bg-white text-black";
          case "blue":
            return "bg-blue text-white";
          case "lightBlue":
            return "bg-lightBlue text-navy";
          case "lightPurple":
            return "bg-lightPurple text-navy";
          case "purple":
            return "bg-purple text-white";
          case "lightGrey":
            return "bg-lightGrey text-navy";
          case "brightGreen":
            return "bg-brightGreen text-navy";
          default:
            return `bg-${background}`;
        }
      }, []);
      const values = useMemo(
        () => ({
          paddingTopMap,
          paddingBottomMap,
          innerSpacingMap,
          getSectionColors
        }),
        [paddingTopMap, paddingBottomMap, innerSpacingMap, getSectionColors]
      );
      return values;
    };
    useSection_default = useSection;
  }
});

// src/components/flexible/company/components/StackedCards/StackedCards.tsx
var StackedCards_exports = {};
__export(StackedCards_exports, {
  default: () => StackedCards_default
});
import { createRef as createRef2, useRef as useRef17, useState as useState32 } from "react";
import clsx50 from "clsx";
import { useIsomorphicLayoutEffect as useIsomorphicLayoutEffect2, useInView as useInView11 } from "framer-motion";
import { useMeasure, useWindowSize as useWindowSize10 } from "react-use";
import { jsx as jsx134, jsxs as jsxs108 } from "react/jsx-runtime";
function StackedCards(props) {
  var _a, _b;
  const [linesHeightRef, { height: linesHeight }] = useMeasure();
  const { width: windowWidth } = useWindowSize10();
  const { content } = props;
  const cardRefs = useRef17([]);
  const [totalCardsHeight, setTotalCardsHeight] = useState32(0);
  const { paddingBottomMap, paddingTopMap } = useSection_default();
  cardRefs.current = content == null ? void 0 : content.cards.map((_, i) => cardRefs.current[i] || createRef2());
  useIsomorphicLayoutEffect2(() => {
    const newTotalHeight = cardRefs.current.reduce(
      (sum, ref) => sum + (ref.current ? ref.current.offsetHeight : 0),
      0
    );
    setTotalCardsHeight(newTotalHeight);
  }, [windowWidth, content == null ? void 0 : content.cards]);
  const cardPaddingMap = {
    twoColContent: `${paddingBottomMap == null ? void 0 : paddingBottomMap.min} ${paddingTopMap == null ? void 0 : paddingTopMap.min}`,
    headingAssetRow: `${paddingBottomMap == null ? void 0 : paddingBottomMap.min} ${paddingTopMap == null ? void 0 : paddingTopMap.min}`
  };
  const linesRef = useRef17(null);
  const isInView = useInView11(linesRef, { amount: 0.7 });
  const marginValue = windowWidth > 768 ? 12 : 4;
  const cardTopValue = windowWidth > 768 ? 18 : 10;
  return /* @__PURE__ */ jsxs108("div", { className: "stacked-cards", children: [
    /* @__PURE__ */ jsx134("div", { ref: linesHeightRef, className: "sticky top-0", children: /* @__PURE__ */ jsx134(
      "div",
      {
        ref: linesRef,
        className: clsx50(
          isInView ? "scale-y-100" : "scale-y-0",
          "origin-top transition-transform duration-300 ease-linear",
          "leaders-grid__row-one__lines flex w-full flex-col"
        ),
        children: Array(5).fill("").map((_, i) => /* @__PURE__ */ jsx134("div", { style: { height: `${12 - i * 2.4}px`, marginBottom: `${marginValue + i * 0.6}px` }, className: "w-full bg-blue" }))
      }
    ) }),
    /* @__PURE__ */ jsx134("div", { className: "", children: /* @__PURE__ */ jsx134(
      "div",
      {
        className: "relative",
        style: {
          height: totalCardsHeight + content.cards.length * 18 + linesHeight
        },
        children: ((_a = content == null ? void 0 : content.cards) == null ? void 0 : _a.length) > 0 && ((_b = content == null ? void 0 : content.cards) == null ? void 0 : _b.map((card, index) => {
          const componentMap = {
            twoColContent: /* @__PURE__ */ jsx134(TwoColContent_default, __spreadValues({}, card.two_col_content)),
            headingAssetRow: /* @__PURE__ */ jsx134(HeadingAssetRow_default, __spreadValues({}, card.heading_asset_row))
          };
          return /* @__PURE__ */ jsx134(
            "div",
            {
              ref: cardRefs.current[index],
              style: {
                top: `${index * cardTopValue + linesHeight}px`,
                borderTop: "1px solid",
                borderColor: "rgba(0, 0, 220, 1)"
              },
              className: clsx50(cardPaddingMap == null ? void 0 : cardPaddingMap[card == null ? void 0 : card.component_type], "sticky bg-white"),
              children: componentMap[card.component_type]
            },
            `card-${index}`
          );
        }))
      }
    ) })
  ] });
}
var StackedCards_default;
var init_StackedCards = __esm({
  "src/components/flexible/company/components/StackedCards/StackedCards.tsx"() {
    init_useSection();
    init_TwoColContent();
    init_HeadingAssetRow();
    StackedCards_default = StackedCards;
  }
});

// src/components/flexible/company/components/ContentAnimatedBottomCards/AssetCard.tsx
import { m as m36 } from "framer-motion";
import clsx51 from "clsx";
import { jsx as jsx135 } from "react/jsx-runtime";
function AssetCard({ card, isInView, className = "" }) {
  const { asset } = card;
  return /* @__PURE__ */ jsx135(
    m36.div,
    {
      animate: { y: isInView ? 0 : "105%", transition: { duration: 0.4, ease: "easeInOut" } },
      className: clsx51(
        "relative aspect-[286/200] h-full w-full overflow-hidden rounded-lg sm:aspect-none 960:aspect-[286/375] 960:max-w-[286px] 960:rounded-b-none",
        className
      ),
      children: /* @__PURE__ */ jsx135(Asset, __spreadProps(__spreadValues({}, asset), { fill: true, className: "!object-cover object-center" }))
    }
  );
}
var AssetCard_default;
var init_AssetCard = __esm({
  "src/components/flexible/company/components/ContentAnimatedBottomCards/AssetCard.tsx"() {
    init_Asset();
    AssetCard_default = AssetCard;
  }
});

// src/components/flexible/company/components/ContentAnimatedBottomCards/StatisticCard.tsx
import { m as m37 } from "framer-motion";
import { jsx as jsx136, jsxs as jsxs109 } from "react/jsx-runtime";
function StatisticCard({ card, isInView }) {
  const { statistic } = card;
  return /* @__PURE__ */ jsxs109(
    m37.div,
    {
      animate: { y: isInView ? 0 : "105%", transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } },
      className: "relative flex h-full w-full flex-col justify-between rounded-lg bg-blue 960:h-auto 960:rounded-t-lg",
      children: [
        /* @__PURE__ */ jsxs109("div", { className: "p-4 md:p-6", children: [
          !!(statistic == null ? void 0 : statistic.heading) && /* @__PURE__ */ jsx136(
            "p",
            {
              className: "text-h2 mb-4 !tracking-[-0.02em] text-lightBlue sm:mb-12 xl:mb-[100px]",
              dangerouslySetInnerHTML: {
                __html: statistic.heading
              }
            }
          ),
          !!(statistic == null ? void 0 : statistic.label) && /* @__PURE__ */ jsx136(
            "p",
            {
              className: "text-16 mb-2 font-body text-lightBlue/90",
              dangerouslySetInnerHTML: {
                __html: statistic.label
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx136("div", { className: "flex flex-col-reverse gap-[12px]", children: Array(7).fill("").map((_, i) => /* @__PURE__ */ jsx136("div", { style: { height: `${4 - i * 0.6}px` }, className: "w-full bg-lightBlue" }, `statistic-line-${i}`)) })
      ]
    }
  );
}
var StatisticCard_default;
var init_StatisticCard = __esm({
  "src/components/flexible/company/components/ContentAnimatedBottomCards/StatisticCard.tsx"() {
    StatisticCard_default = StatisticCard;
  }
});

// src/components/flexible/company/components/ContentAnimatedBottomCards/TestimonialCard.tsx
import { m as m38 } from "framer-motion";
import { jsx as jsx137, jsxs as jsxs110 } from "react/jsx-runtime";
function TestimonialCard({ card, isInView }) {
  const { testimonial } = card;
  return /* @__PURE__ */ jsxs110(
    m38.div,
    {
      animate: { opacity: isInView ? 1 : 0, transition: { duration: 0.4, ease: "easeInOut" } },
      className: "flex h-full flex-col gap-6 rounded-xl bg-navy p-4 sm:gap-14 md:p-6 960:h-auto 960:min-w-[286px] 960:rounded-b-none",
      children: [
        /* @__PURE__ */ jsxs110("div", { className: "flex items-center gap-3", children: [
          !!testimonial.image && /* @__PURE__ */ jsx137(WpImage, { image: testimonial.image, className: "h-16 w-16 rounded-full object-cover" }),
          /* @__PURE__ */ jsxs110("div", { className: "flex flex-col gap-1", children: [
            !!(testimonial == null ? void 0 : testimonial.full_name) && /* @__PURE__ */ jsx137("p", { className: "text-18 text-white", dangerouslySetInnerHTML: { __html: testimonial.full_name } }),
            !!(testimonial == null ? void 0 : testimonial.job_role) && /* @__PURE__ */ jsx137("p", { className: "text-15 font-body text-white/85", dangerouslySetInnerHTML: { __html: testimonial.job_role } })
          ] })
        ] }),
        !!(testimonial == null ? void 0 : testimonial.main_text) && /* @__PURE__ */ jsx137("p", { className: "text-16 font-body text-white/90 sm:mb-10", dangerouslySetInnerHTML: { __html: testimonial.main_text } })
      ]
    }
  );
}
var TestimonialCard_default;
var init_TestimonialCard = __esm({
  "src/components/flexible/company/components/ContentAnimatedBottomCards/TestimonialCard.tsx"() {
    init_Wp();
    TestimonialCard_default = TestimonialCard;
  }
});

// src/components/flexible/company/components/ContentAnimatedBottomCards/CardSelect.tsx
import clsx52 from "clsx";
import { Fragment as Fragment23, jsx as jsx138, jsxs as jsxs111 } from "react/jsx-runtime";
function CardSelect({ card, areCardsInView, index }) {
  const { card_type } = card;
  return (
    // <div className="960:aspect-none aspect-auto h-full w-full md:aspect-[100/100] md:h-auto md:overflow-hidden">
    /* @__PURE__ */ jsxs111(Fragment23, { children: [
      card_type === "asset" && /* @__PURE__ */ jsx138(AssetCard_default, { card, isInView: areCardsInView, className: clsx52(index === 0 && "rounded-lg 960:rounded-t-lg") }),
      card_type === "statistic" && /* @__PURE__ */ jsx138(StatisticCard_default, { card, isInView: areCardsInView }),
      card_type === "testimonial" && /* @__PURE__ */ jsx138(TestimonialCard_default, { card, isInView: areCardsInView })
    ] })
  );
}
var CardSelect_default;
var init_CardSelect = __esm({
  "src/components/flexible/company/components/ContentAnimatedBottomCards/CardSelect.tsx"() {
    init_AssetCard();
    init_StatisticCard();
    init_TestimonialCard();
    CardSelect_default = CardSelect;
  }
});

// src/components/flexible/company/components/ContentAnimatedBottomCards/ContentAnimatedBottomCards.tsx
var ContentAnimatedBottomCards_exports = {};
__export(ContentAnimatedBottomCards_exports, {
  default: () => ContentAnimatedBottomCards_default
});
import { LazyMotion as LazyMotion27, domAnimation as domAnimation24, useInView as useInView12 } from "framer-motion";
import { useRef as useRef18 } from "react";
import { useWindowSize as useWindowSize11 } from "react-use";
import clsx53 from "clsx";
import { jsx as jsx139, jsxs as jsxs112 } from "react/jsx-runtime";
function ContentAnimatedBottomCards(props) {
  var _a, _b, _c, _d, _e;
  const { content } = props;
  const ref = useRef18(null);
  const { width: windowWidth } = useWindowSize11();
  const inViewThreshold = windowWidth > 960 ? 0.7 : 0.1;
  const areCardsInView = useInView12(ref, {
    amount: inViewThreshold,
    once: true
  });
  return /* @__PURE__ */ jsx139(LazyMotion27, { features: domAnimation24, children: /* @__PURE__ */ jsx139("div", { ref, className: "content-animated-bottom-cards", children: /* @__PURE__ */ jsx139("div", { className: "container", children: /* @__PURE__ */ jsxs112("div", { className: "content-animated-bottom-cards__content flex flex-col items-center overflow-hidden rounded-xl bg-lightBlue px-5 pb-8 pt-8 sm:pt-16 md:px-8 md:pt-24 960:pb-0", children: [
    /* @__PURE__ */ jsxs112("div", { className: "mb-12 flex flex-col items-center md:mb-20 960:mb-32", children: [
      !!(content == null ? void 0 : content.heading) && /* @__PURE__ */ jsx139(
        "span",
        {
          className: "text-h3 mb-6 text-center",
          dangerouslySetInnerHTML: {
            __html: getSplitBreakText({
              text: content.heading,
              breakAtAll: true
            })
          }
        }
      ),
      !!(content == null ? void 0 : content.content) && /* @__PURE__ */ jsx139(
        "span",
        {
          dangerouslySetInnerHTML: { __html: content.content },
          className: "text-16 mb-6 block w-full max-w-[494px] text-center font-body sm:mb-10"
        }
      ),
      ((_b = (_a = content == null ? void 0 : content.links) == null ? void 0 : _a.links) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsx139(LinkGroup_default, { centered: true, links: (_c = content == null ? void 0 : content.links) == null ? void 0 : _c.links })
    ] }),
    ((_d = content == null ? void 0 : content.cards) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsx139("div", { className: "content-animated-bottom-card__cards grid w-full items-end gap-3 sm:grid-cols-2 960:flex 960:gap-6", children: (_e = content == null ? void 0 : content.cards) == null ? void 0 : _e.map((card, index) => /* @__PURE__ */ jsx139("div", { className: clsx53("h-full w-full", index === 2 && windowWidth < 960 && "order-last"), children: /* @__PURE__ */ jsx139(CardSelect_default, { index, card, areCardsInView }, `content-animated-bottom-card-${index}`) }, `content-animated-bottom-card-${index}`)) })
  ] }) }) }) });
}
var ContentAnimatedBottomCards_default;
var init_ContentAnimatedBottomCards = __esm({
  "src/components/flexible/company/components/ContentAnimatedBottomCards/ContentAnimatedBottomCards.tsx"() {
    init_LinkGroup();
    init_text();
    init_CardSelect();
    ContentAnimatedBottomCards_default = ContentAnimatedBottomCards;
  }
});

// src/hooks/useIsClient.ts
import { useState as useState33, useEffect as useEffect21, useMemo as useMemo2 } from "react";
var useIsClient, useIsClient_default;
var init_useIsClient = __esm({
  "src/hooks/useIsClient.ts"() {
    useIsClient = () => {
      const [isClient, setIsClient] = useState33(false);
      useEffect21(() => {
        setIsClient(true);
      }, []);
      const values = useMemo2(
        () => ({
          isClient
        }),
        [isClient]
      );
      return values;
    };
    useIsClient_default = useIsClient;
  }
});

// src/components/flexible/company/components/LeadersGrid/LeadersGridCard.tsx
import clsx54 from "clsx";
import { useInView as useInView13 } from "framer-motion";
import { useRef as useRef19 } from "react";
import { jsx as jsx140, jsxs as jsxs113 } from "react/jsx-runtime";
function LeftLines2({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs113("svg", { width, height, viewBox: "0 0 89 342", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx140("path", { d: "M88.5 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx140("path", { d: "M69.7903 0.5V341.5", stroke: "#C2D1FF" }),
    /* @__PURE__ */ jsx140("path", { d: "M51.0807 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx140("path", { d: "M32.371 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "2" }),
    /* @__PURE__ */ jsx140("path", { d: "M13.6613 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "2.5" })
  ] });
}
function RightLines5({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs113("svg", { width, height, viewBox: "0 0 86 342", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx140("path", { d: "M0.5 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx140("path", { d: "M19.2097 0.5V341.5", stroke: "#C2D1FF" }),
    /* @__PURE__ */ jsx140("path", { d: "M37.9194 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx140("path", { d: "M56.629 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "2" }),
    /* @__PURE__ */ jsx140("path", { d: "M75.3387 0.5V341.5", stroke: "#C2D1FF", strokeWidth: "2.5" })
  ] });
}
function LeadersGridCard({ team_member, isFirstItem, isLastItem }) {
  const {
    acf: {
      preview: { full_name, role, image }
    }
  } = team_member || {};
  const ref = useRef19(null);
  const isInView = useInView13(ref, { amount: 0.7, once: true });
  return /* @__PURE__ */ jsxs113("div", { ref, className: "group relative block aspect-[293/371] w-full max-w-[293px] bg-white/5", children: [
    isFirstItem && /* @__PURE__ */ jsx140(
      "div",
      {
        className: clsx54(
          isInView ? "scale-x-100" : "scale-x-0",
          "hidden origin-right transition-transform duration-300 ease-linear md:block",
          "leaders-grid__row-one__lines absolute -left-[35%] top-[50%] flex h-[95%] -translate-y-1/2 gap-4"
        ),
        children: /* @__PURE__ */ jsx140(LeftLines2, { height: "100%" })
      }
    ),
    isLastItem && /* @__PURE__ */ jsx140(
      "div",
      {
        className: clsx54(
          isInView ? "scale-x-100" : "scale-x-0",
          "hidden origin-left transition-transform duration-300 ease-linear md:block",
          "leaders-grid__row-one__lines absolute -right-[35%] top-[50%] flex h-[95%] -translate-y-1/2 flex-row-reverse gap-4"
        ),
        children: /* @__PURE__ */ jsx140(RightLines5, { height: "100%" })
      }
    ),
    /* @__PURE__ */ jsx140("div", { className: "relative h-full w-full overflow-hidden rounded-lg bg-purple", children: (image == null ? void 0 : image.url) && /* @__PURE__ */ jsx140(WpImage, { image, fill: true, className: "relative object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105" }) }),
    /* @__PURE__ */ jsx140("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }),
    /* @__PURE__ */ jsx140("div", { className: "absolute bottom-0 left-0 z-10 flex w-full items-center justify-between px-4 py-3", children: /* @__PURE__ */ jsxs113("div", { className: "flex flex-col", children: [
      !!full_name && /* @__PURE__ */ jsx140(
        "p",
        {
          className: "text-18 font-medium text-white",
          dangerouslySetInnerHTML: {
            __html: full_name
          }
        }
      ),
      !!role && /* @__PURE__ */ jsx140(
        "p",
        {
          className: "text-16 font-body text-white/50",
          dangerouslySetInnerHTML: {
            __html: role
          }
        }
      )
    ] }) })
  ] }, team_member == null ? void 0 : team_member.ID);
}
var LeadersGridCard_default;
var init_LeadersGridCard = __esm({
  "src/components/flexible/company/components/LeadersGrid/LeadersGridCard.tsx"() {
    init_Wp();
    LeadersGridCard_default = LeadersGridCard;
  }
});

// src/components/flexible/company/components/LeadersGrid/LeadersGrid.tsx
var LeadersGrid_exports = {};
__export(LeadersGrid_exports, {
  default: () => LeadersGrid_default
});
import { useState as useState34 } from "react";
import { useWindowSize as useWindowSize12 } from "react-use";
import { Swiper as Swiper6, SwiperSlide as SwiperSlide6 } from "swiper/react";
import "swiper/css";
import { Fragment as Fragment24, jsx as jsx141, jsxs as jsxs114 } from "react/jsx-runtime";
function LeadersGrid(props) {
  var _a;
  const { content } = props;
  const { heading, team_members } = content;
  const { width: windowWidth } = useWindowSize12();
  const [swiperInstance, setSwiperInstance] = useState34(null);
  const [_, setSwiperInstanceUpdate] = useState34(null);
  const { isClient } = useIsClient_default();
  return /* @__PURE__ */ jsx141("div", { className: "leaders-grid", children: /* @__PURE__ */ jsxs114("div", { className: "flex flex-col items-center md:items-end", children: [
    !!heading && /* @__PURE__ */ jsx141(
      "span",
      {
        className: "text-h2 mx-auto mb-12 font-[450] text-white sm:mb-20",
        dangerouslySetInnerHTML: {
          __html: getSplitBreakText({
            text: heading,
            breakAtAll: true
          })
        }
      }
    ),
    (team_members == null ? void 0 : team_members.length) > 0 && isClient && /* @__PURE__ */ jsxs114(Fragment24, { children: [
      windowWidth > 768 && /* @__PURE__ */ jsx141("div", { className: "relative mb-6 grid w-full grid-cols-2 gap-6 md:mb-9 md:grid-cols-3 md:gap-9 lg:grid-cols-4", children: (_a = [...team_members]) == null ? void 0 : _a.map((team_member, i) => /* @__PURE__ */ jsx141(LeadersGridCard_default, { isFirstItem: i === 0, isLastItem: i === team_members.length - 1, team_member }, team_member == null ? void 0 : team_member.ID)) }),
      windowWidth <= 768 && /* @__PURE__ */ jsx141("div", { className: "w-full", children: /* @__PURE__ */ jsx141(
        Swiper6,
        {
          onSwiper: (s) => setSwiperInstance(s),
          onSlideChange: (s) => {
            setSwiperInstanceUpdate(__spreadValues({}, s));
          },
          className: "!overflow-visible",
          spaceBetween: 24,
          slidesPerView: 1.4,
          breakpoints: {
            480: { slidesPerView: 1.75 },
            768: { slidesPerView: 2 }
          },
          children: team_members == null ? void 0 : team_members.map((team_member, i) => /* @__PURE__ */ jsx141(SwiperSlide6, { children: /* @__PURE__ */ jsx141(LeadersGridCard_default, { isFirstItem: i === 0, isLastItem: i === team_members.length - 1, team_member }, team_member == null ? void 0 : team_member.ID) }, `slide-${i}`))
        }
      ) })
    ] })
  ] }) });
}
var LeadersGrid_default;
var init_LeadersGrid = __esm({
  "src/components/flexible/company/components/LeadersGrid/LeadersGrid.tsx"() {
    init_text();
    init_useIsClient();
    init_LeadersGridCard();
    LeadersGrid_default = LeadersGrid;
  }
});

// src/components/flexible/company/components/RolesOfTheWeek/RoleCard.tsx
import Link39 from "next/link";
import { LazyMotion as LazyMotion28, m as m40, domAnimation as domAnimation25 } from "framer-motion";
import { useState as useState35 } from "react";
import { jsx as jsx142, jsxs as jsxs115 } from "react/jsx-runtime";
function RoleCard({ role }) {
  const { category, job_role, location, link } = role;
  const [isHovered, setIsHovered] = useState35(false);
  return /* @__PURE__ */ jsx142(LazyMotion28, { features: domAnimation25, children: /* @__PURE__ */ jsxs115(
    Link39,
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      href: (link == null ? void 0 : link.url) || "#",
      target: link == null ? void 0 : link.target,
      className: "roles-of-the-week__role-card flex h-full flex-col items-start gap-10 rounded-xl bg-navy p-4 text-white transition-colors duration-300 ease-in-out hover:bg-purple",
      onClick: () => {
        trackEvent_default("job_trackevent", {
          job_name: job_role,
          city_name: location,
          exit_click: link == null ? void 0 : link.url
        });
      },
      children: [
        /* @__PURE__ */ jsxs115("div", { className: "flex w-full items-center justify-between", children: [
          !!category && /* @__PURE__ */ jsx142(PostTag_default, { bgColor: "white5", textColor: "white", text: category }),
          /* @__PURE__ */ jsx142(
            m40.div,
            {
              animate: {
                opacity: isHovered ? 1 : 0,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              },
              children: /* @__PURE__ */ jsx142(TopRightArrowCircle, {})
            }
          )
        ] }),
        !!job_role && /* @__PURE__ */ jsx142(
          "p",
          {
            className: "text-20 font-medium",
            dangerouslySetInnerHTML: {
              __html: job_role
            }
          }
        ),
        !!location && /* @__PURE__ */ jsx142(
          "p",
          {
            className: "text-16 mt-auto font-body text-lightPurple",
            dangerouslySetInnerHTML: {
              __html: location
            }
          }
        )
      ]
    }
  ) });
}
var RoleCard_default;
var init_RoleCard = __esm({
  "src/components/flexible/company/components/RolesOfTheWeek/RoleCard.tsx"() {
    init_Icons();
    init_PostTag();
    init_trackEvent();
    RoleCard_default = RoleCard;
  }
});

// src/components/flexible/company/components/RolesOfTheWeek/RolesOfTheWeek.tsx
var RolesOfTheWeek_exports = {};
__export(RolesOfTheWeek_exports, {
  default: () => RolesOfTheWeek_default
});
import { Swiper as Swiper7, SwiperSlide as SwiperSlide7 } from "swiper/react";
import "swiper/css";
import { useState as useState36 } from "react";
import clsx55 from "clsx";
import { jsx as jsx143, jsxs as jsxs116 } from "react/jsx-runtime";
function RolesOfTheWeek(props) {
  const [swiperInstance, setSwiperInstance] = useState36(null);
  const [_, setSwiperInstanceUpdate] = useState36(null);
  const { heading, roles } = props;
  const disablePrevButton = swiperInstance == null ? void 0 : swiperInstance.isBeginning;
  const disableNextButton = swiperInstance == null ? void 0 : swiperInstance.isEnd;
  return /* @__PURE__ */ jsxs116("div", { className: "roles-of-the-week", children: [
    /* @__PURE__ */ jsxs116("div", { className: "mb-10 flex justify-between gap-12 sm:mb-13 md:mb-[90px]", children: [
      /* @__PURE__ */ jsx143(
        "span",
        {
          className: "text-h3 tracking-[-0.0275em]",
          dangerouslySetInnerHTML: {
            __html: getSplitBreakText({
              text: heading,
              breakAtAll: true
            })
          }
        }
      ),
      roles && roles.length >= 4 && /* @__PURE__ */ jsxs116("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx143(
          "button",
          {
            "aria-label": "Go to previous slides",
            onClick: () => {
              swiperInstance.slidePrev();
            },
            type: "button",
            className: clsx55(disablePrevButton && "pointer-events-none opacity-50"),
            children: /* @__PURE__ */ jsx143(SliderCircleArrow, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white" })
          }
        ),
        /* @__PURE__ */ jsx143(
          "button",
          {
            "aria-label": "Go to next slides",
            onClick: () => {
              swiperInstance.slideNext();
            },
            type: "button",
            className: clsx55(disableNextButton && "pointer-events-none opacity-50"),
            children: /* @__PURE__ */ jsx143(SliderCircleArrow, { circleClassName: "group-hover:text-navy text-white", arrowClassName: "text-navy group-hover:text-white", flip: true })
          }
        )
      ] })
    ] }),
    roles && roles.length < 4 ? /* @__PURE__ */ jsx143("div", { className: "flex flex-col justify-center gap-6 lg:flex-row", children: roles && roles.length > 0 && roles.map((role, index) => /* @__PURE__ */ jsx143("div", { className: "mx-auto w-full lg:mx-0 lg:w-[302px]", children: /* @__PURE__ */ jsx143(RoleCard_default, { role }, index) })) }) : /* @__PURE__ */ jsx143(
      Swiper7,
      {
        onSwiper: (s) => setSwiperInstance(s),
        onSlideChange: (s) => {
          setSwiperInstanceUpdate(__spreadValues({}, s));
        },
        spaceBetween: 24,
        slidesPerView: 1.25,
        breakpoints: {
          480: { slidesPerView: 1.75 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        },
        className: "!overflow-visible",
        children: (roles == null ? void 0 : roles.length) > 0 && (roles == null ? void 0 : roles.map((role, index) => /* @__PURE__ */ jsx143(SwiperSlide7, { className: "!h-auto", children: /* @__PURE__ */ jsx143(RoleCard_default, { role }, index) }, `slide-${index}`)))
      }
    )
  ] });
}
var RolesOfTheWeek_default;
var init_RolesOfTheWeek = __esm({
  "src/components/flexible/company/components/RolesOfTheWeek/RolesOfTheWeek.tsx"() {
    init_Icons();
    init_text();
    init_RoleCard();
    RolesOfTheWeek_default = RolesOfTheWeek;
  }
});

// src/components/flexible/company/components/ValuesThreeCol/ValuesThreeColCard.tsx
import clsx56 from "clsx";
import { useRef as useRef20 } from "react";
import { useInView as useInView14 } from "framer-motion";
import Image3 from "next/image";
import { jsx as jsx144, jsxs as jsxs117 } from "react/jsx-runtime";
function ValuesThreeColCard({ value, index }) {
  const { heading, text_list } = value;
  const ref = useRef20(null);
  const isInView = useInView14(ref, { amount: 0.7, once: true });
  const delayMap = {
    1: "delay-100",
    2: "delay-200"
  };
  return /* @__PURE__ */ jsxs117("div", { ref, className: "values-three-col__card overflow-hidden rounded-xl bg-lightPurple pb-8 pt-10 text-navy", children: [
    /* @__PURE__ */ jsxs117("div", { className: "-ml-9 mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs117(
        "p",
        {
          className: clsx56(
            "-mb-7 text-[120px] leading-[0.8] text-purple transition-transform duration-300 ease-linear",
            delayMap == null ? void 0 : delayMap[index],
            isInView ? "scale-100" : "scale-75"
          ),
          children: [
            index < 10 ? "0" : "",
            index + 1
          ]
        }
      ),
      /* @__PURE__ */ jsx144(
        "div",
        {
          className: clsx56(
            delayMap == null ? void 0 : delayMap[index],
            isInView ? "scale-x-100" : "scale-x-0",
            "-mr-1 h-[88px]",
            "origin-right transition-transform duration-300 ease-linear",
            "leaders-grid__row-one__lines flex flex-row-reverse"
          ),
          children: Array(20).fill("").map((_, i) => /* @__PURE__ */ jsx144("div", { style: { width: `${9 - i * 0.35}px`, marginRight: `${3 + i * 0.3}px` }, className: "h-full bg-purple" }, i))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs117("div", { className: "flex flex-col gap-6 px-6 py-8 sm:px-10", children: [
      !!heading && /* @__PURE__ */ jsx144(
        "h5",
        {
          dangerouslySetInnerHTML: {
            __html: heading
          }
        }
      ),
      (text_list == null ? void 0 : text_list.length) > 0 && /* @__PURE__ */ jsx144("ul", { className: "values-three-col__card__list space-y-3", children: (text_list == null ? void 0 : text_list.length) > 0 && text_list.map((text, i) => /* @__PURE__ */ jsxs117("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx144(Image3, { src: "/ul-item-bullet-purple.svg", width: 16, height: 12, className: "mt-[6px] flex-shrink-0 object-contain", alt: "list-item-icon" }),
        /* @__PURE__ */ jsx144("p", { className: "text-18 font-body", dangerouslySetInnerHTML: { __html: text.text } })
      ] }, `text-${i}`)) })
    ] })
  ] });
}
var ValuesThreeColCard_default;
var init_ValuesThreeColCard = __esm({
  "src/components/flexible/company/components/ValuesThreeCol/ValuesThreeColCard.tsx"() {
    ValuesThreeColCard_default = ValuesThreeColCard;
  }
});

// src/components/flexible/company/components/ValuesThreeCol/ValuesThreeCol.tsx
var ValuesThreeCol_exports = {};
__export(ValuesThreeCol_exports, {
  default: () => ValuesThreeCol_default
});
import { jsx as jsx145 } from "react/jsx-runtime";
function ValuesThreeCol(props) {
  var _a;
  const { content } = props;
  return /* @__PURE__ */ jsx145("div", { className: "values-three-col", children: /* @__PURE__ */ jsx145("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: ((_a = content == null ? void 0 : content.values) == null ? void 0 : _a.length) > 0 && content.values.map((value, index) => /* @__PURE__ */ jsx145(ValuesThreeColCard_default, { value, index }, `value-${index}`)) }) });
}
var ValuesThreeCol_default;
var init_ValuesThreeCol = __esm({
  "src/components/flexible/company/components/ValuesThreeCol/ValuesThreeCol.tsx"() {
    init_ValuesThreeColCard();
    ValuesThreeCol_default = ValuesThreeCol;
  }
});

// src/components/flexible/company/components/ValuesGrid/ValuesGridCard.tsx
import { m as m41 } from "framer-motion";
import { jsx as jsx146, jsxs as jsxs118 } from "react/jsx-runtime";
function ValuesGridCard({ value }) {
  const { image, heading: valueHeading, text, link, link_target } = value;
  const hoverBgStyle = link ? "hover:[background-color:rgb(229,229,229)] transition-colors duration-300 ease-in-out p-4" : null;
  return /* @__PURE__ */ jsxs118(
    m41.a,
    {
      href: link,
      target: link ? link_target : void 0,
      variants: valuesGridCardAnim,
      className: `flex flex-col items-start rounded-xl bg-lightGrey p-6 ${hoverBgStyle}`,
      children: [
        !!(image == null ? void 0 : image.url) && /* @__PURE__ */ jsx146(WpImage, { image, className: "mb-[30px] h-12 w-12 object-contain" }),
        !!valueHeading && /* @__PURE__ */ jsx146("h6", { dangerouslySetInnerHTML: { __html: valueHeading }, className: "mb-4 font-medium" }),
        !!text && /* @__PURE__ */ jsx146("p", { dangerouslySetInnerHTML: { __html: text }, className: "text-18 max-w-[97.5%] font-body text-navy/80" })
      ]
    }
  );
}
var valuesGridCardAnim, ValuesGridCard_default;
var init_ValuesGridCard = __esm({
  "src/components/flexible/company/components/ValuesGrid/ValuesGridCard.tsx"() {
    init_Wp();
    valuesGridCardAnim = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring", stiffness: 120, damping: 20, restDelta: 1e-3 } }
    };
    ValuesGridCard_default = ValuesGridCard;
  }
});

// src/components/flexible/company/components/ValuesGrid/ValuesGrid.tsx
var ValuesGrid_exports = {};
__export(ValuesGrid_exports, {
  default: () => ValuesGrid_default
});
import { LazyMotion as LazyMotion29, domAnimation as domAnimation26, m as m42, useInView as useInView15 } from "framer-motion";
import { useRef as useRef21 } from "react";
import { useWindowSize as useWindowSize13 } from "react-use";
import { jsx as jsx147, jsxs as jsxs119 } from "react/jsx-runtime";
function ValuesGrid(props) {
  const { content } = props;
  const { heading, values } = content || {};
  const ref = useRef21(null);
  const { width: windowWidth } = useWindowSize13();
  const amountThreshold = windowWidth > 640 ? 0.4 : 0.1;
  const isInView = useInView15(ref, { once: true, amount: amountThreshold });
  return /* @__PURE__ */ jsx147(LazyMotion29, { features: domAnimation26, children: /* @__PURE__ */ jsx147("div", { ref, className: "values-grid", children: /* @__PURE__ */ jsxs119("div", { className: "container--extra-small container", children: [
    !!heading && /* @__PURE__ */ jsx147(
      "span",
      {
        className: "text-h2 mx-auto mb-16 block text-center md:mb-24",
        dangerouslySetInnerHTML: {
          __html: getSplitBreakText({
            text: heading,
            breakAtAll: true
          })
        }
      }
    ),
    (values == null ? void 0 : values.length) > 0 && /* @__PURE__ */ jsx147(
      m42.div,
      {
        variants: valuesGridAnim,
        initial: "initial",
        animate: isInView ? "animate" : "initial",
        className: "grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3",
        children: values == null ? void 0 : values.map((value, index) => /* @__PURE__ */ jsx147(ValuesGridCard_default, { value }, `value-${index}`))
      }
    )
  ] }) }) });
}
var valuesGridAnim, ValuesGrid_default;
var init_ValuesGrid = __esm({
  "src/components/flexible/company/components/ValuesGrid/ValuesGrid.tsx"() {
    init_text();
    init_ValuesGridCard();
    valuesGridAnim = {
      initial: {
        y: 20,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.15
        }
      }
    };
    ValuesGrid_default = ValuesGrid;
  }
});

// src/components/flexible/company/components/LocationsGrid/LocationsGridContent.tsx
import { jsx as jsx148, jsxs as jsxs120 } from "react/jsx-runtime";
function LocationsGridContent({ location }) {
  const { heading, text } = location;
  return /* @__PURE__ */ jsx148("div", { className: "relative", children: /* @__PURE__ */ jsxs120("div", { className: "p-6", children: [
    !!heading && /* @__PURE__ */ jsx148("h6", { dangerouslySetInnerHTML: { __html: heading } }),
    !!text && /* @__PURE__ */ jsx148("p", { dangerouslySetInnerHTML: { __html: text }, className: "text-18 font-body" })
  ] }) });
}
var LocationsGridContent_default;
var init_LocationsGridContent = __esm({
  "src/components/flexible/company/components/LocationsGrid/LocationsGridContent.tsx"() {
    LocationsGridContent_default = LocationsGridContent;
  }
});

// src/components/flexible/company/components/LocationsGrid/LocationCard.tsx
import clsx57 from "clsx";
import { jsx as jsx149, jsxs as jsxs121 } from "react/jsx-runtime";
function LocationCard({ index, location, row }) {
  var _a;
  return /* @__PURE__ */ jsxs121(
    "div",
    {
      className: clsx57(
        row === 1 && (rowOnecontainerClassNameMap == null ? void 0 : rowOnecontainerClassNameMap[index]),
        row === 2 && (rowTwocontainerClassNameMap == null ? void 0 : rowTwocontainerClassNameMap[index]),
        containerClassName,
        "relative overflow-hidden"
      ),
      children: [
        !!((_a = location == null ? void 0 : location.image) == null ? void 0 : _a.url) && /* @__PURE__ */ jsx149(WpImage, { image: location == null ? void 0 : location.image, className: "absolute inset-0 h-full w-full rounded-lg object-cover object-center" }),
        /* @__PURE__ */ jsx149("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
        /* @__PURE__ */ jsx149(LocationsGridContent_default, { location })
      ]
    }
  );
}
var containerClassName, rowOnecontainerClassNameMap, rowTwocontainerClassNameMap, LocationCard_default;
var init_LocationCard = __esm({
  "src/components/flexible/company/components/LocationsGrid/LocationCard.tsx"() {
    init_Wp();
    init_LocationsGridContent();
    containerClassName = "flex flex-col items-start justify-end rounded-xl bg-navy text-white";
    rowOnecontainerClassNameMap = {
      0: "md:aspect-[375/228] md:aspect-[713/406] min-h-[300px] md:min-h-fit w-full md:max-w-[713px]",
      1: "md:aspect-[285/261] md:aspect-[543/465] min-h-[300px] md:min-h-fit w-full md:max-w-[543px]"
    };
    rowTwocontainerClassNameMap = {
      0: "md:aspect-[216/212] md:aspect-[411/359] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]",
      1: "md:aspect-[215/280] md:aspect-[411/474] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]",
      2: "md:aspect-[216/172] md:aspect-[411/292] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]"
    };
    LocationCard_default = LocationCard;
  }
});

// src/components/flexible/company/components/LocationsGrid/LocationsGrid.tsx
var LocationsGrid_exports = {};
__export(LocationsGrid_exports, {
  default: () => LocationsGrid_default
});
import clsx58 from "clsx";
import { useInView as useInView16 } from "framer-motion";
import { useRef as useRef22 } from "react";
import { useWindowSize as useWindowSize14 } from "react-use";
import { jsx as jsx150, jsxs as jsxs122 } from "react/jsx-runtime";
function LocationsGrid(props) {
  var _a, _b, _c, _d;
  const { content } = props;
  const { locations } = content || {};
  const { width: windowWidth } = useWindowSize14();
  const ref = useRef22(null);
  const isInViewThreshold = windowWidth > 768 ? 0.5 : 0.1;
  const isInView = useInView16(ref, { amount: isInViewThreshold, once: true });
  return /* @__PURE__ */ jsxs122("div", { ref, className: "locations-grid relative", children: [
    /* @__PURE__ */ jsx150(
      "div",
      {
        className: clsx58(
          isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
          "transition-[transform, opacity] origin-right duration-300 ease-linear",
          "absolute -left-20 -top-4 flex h-[267px] md:top-0"
        ),
        children: Array(28).fill("").map((_, i) => /* @__PURE__ */ jsx150("div", { style: { width: `${14 - i * 0.5}px`, marginRight: `${4 + i * 0.4}px` }, className: "h-full bg-purple" }, `top-left-card-line-${i}`))
      }
    ),
    /* @__PURE__ */ jsx150(
      "div",
      {
        className: clsx58(
          isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
          "transition-[transform, opacity] origin-left duration-300 ease-linear",
          "absolute -bottom-4 -right-20 flex h-[267px] flex-row-reverse md:bottom-0 md:top-[50%] md:-translate-y-1/2"
        ),
        children: Array(28).fill("").map((_, i) => /* @__PURE__ */ jsx150("div", { style: { width: `${10 - i * 0.5}px`, marginRight: `${8 - i * 0.01}px` }, className: "h-full bg-purple" }, `middle-right-card-line-${i}`))
      }
    ),
    /* @__PURE__ */ jsx150("div", { className: "mb-4 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:gap-6", children: (_b = (_a = [...locations]) == null ? void 0 : _a.splice(0, 2)) == null ? void 0 : _b.map((location, index) => /* @__PURE__ */ jsx150(LocationCard_default, { index, location, row: 1 }, `location-row-one-${index}`)) }),
    /* @__PURE__ */ jsx150("div", { className: "flex flex-col gap-4 md:flex-row md:items-start md:gap-6", children: (_d = (_c = [...locations]) == null ? void 0 : _c.splice(2, 4)) == null ? void 0 : _d.map((location, index) => /* @__PURE__ */ jsx150(LocationCard_default, { index, location, row: 2 }, `location-row-two-${index}`)) })
  ] });
}
var LocationsGrid_default;
var init_LocationsGrid = __esm({
  "src/components/flexible/company/components/LocationsGrid/LocationsGrid.tsx"() {
    init_LocationCard();
    LocationsGrid_default = LocationsGrid;
  }
});

// src/components/flexible/company/components/TestimonialSliderCentered/TestimonialSliderNavButtons.tsx
import { m as m43, LazyMotion as LazyMotion30, domAnimation as domAnimation27 } from "framer-motion";
import { useEffect as useEffect22 } from "react";
import { jsx as jsx151, jsxs as jsxs123 } from "react/jsx-runtime";
function ArrowWithProgressRing({ className = "" }) {
  return /* @__PURE__ */ jsxs123("svg", { width: "53", height: "54", className, viewBox: "0 0 53 54", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx151("rect", { x: "45.8008", y: "8.15967", width: "38.4", height: "38.4", rx: "19.2", transform: "rotate(90 45.8008 8.15967)", fill: "white" }),
    /* @__PURE__ */ jsx151(
      "path",
      {
        d: "M26.9895 21.7109L32.9497 27.6711M32.9497 27.6711L26.9895 33.6313M32.9497 27.6711H20.3281",
        stroke: "#0D1226",
        strokeWidth: "1.66154",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function TestimonialSliderNavButtons({ onPrevClick, onNextClick, activeSlideIndex }) {
  const { isVisible } = usePageVisibility();
  useEffect22(() => {
    const interval = setInterval(() => {
      if (!isVisible) return;
      onNextClick == null ? void 0 : onNextClick();
    }, INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [isVisible, onNextClick]);
  return /* @__PURE__ */ jsx151(LazyMotion30, { features: domAnimation27, children: /* @__PURE__ */ jsxs123("div", { className: "mt-12 flex items-center justify-start gap-4 md:mt-20", children: [
    /* @__PURE__ */ jsx151(
      "button",
      {
        className: "cursor-pointer",
        type: "button",
        "aria-label": "Previous slide",
        onClick: () => {
          onPrevClick == null ? void 0 : onPrevClick();
        },
        children: /* @__PURE__ */ jsx151(ArrowWithProgressRing, { className: "rotate-180" })
      }
    ),
    /* @__PURE__ */ jsxs123("button", { className: "relative block cursor-pointer overflow-hidden", type: "button", "aria-label": "Next slide", onClick: () => onNextClick == null ? void 0 : onNextClick(), children: [
      /* @__PURE__ */ jsx151(
        m43.div,
        {
          initial: {
            background: "conic-gradient(#FFFFFF 0%, #FFFFFF 0%, transparent 0%, transparent 100%)"
          },
          animate: {
            background: isVisible ? "conic-gradient(#FFFFFF 0%, #FFFFFF 100%, transparent 100%)" : "conic-gradient(#FFFFFF 0%, #FFFFFF 0%, transparent 0%, transparent 100%)"
          },
          transition: { duration: INTERVAL / 1e3, repeat: Infinity, ease: "linear" },
          className: "absolute inset-0 rounded-full"
        },
        activeSlideIndex
      ),
      /* @__PURE__ */ jsxs123("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx151("div", { className: "absolute left-[50%] top-[50%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[6px] border-purple" }),
        /* @__PURE__ */ jsx151(ArrowWithProgressRing, {})
      ] })
    ] })
  ] }) });
}
var INTERVAL, TestimonialSliderNavButtons_default;
var init_TestimonialSliderNavButtons = __esm({
  "src/components/flexible/company/components/TestimonialSliderCentered/TestimonialSliderNavButtons.tsx"() {
    init_usePageVisibility();
    INTERVAL = 6e3;
    TestimonialSliderNavButtons_default = TestimonialSliderNavButtons;
  }
});

// src/components/flexible/company/components/TestimonialSliderCentered/TestimonialCard.tsx
import { jsx as jsx152, jsxs as jsxs124 } from "react/jsx-runtime";
function TestimonialCard2({ testimonial }) {
  const { main_text, author } = testimonial || {};
  return /* @__PURE__ */ jsxs124("div", { className: "testimonial-slider-centered__card relative flex w-full max-w-[684px] flex-col items-start justify-between rounded-lg bg-lightPurple p-8 text-navy md:min-h-[400px] md:p-12", children: [
    !!main_text && /* @__PURE__ */ jsx152("p", { className: "text-22 mb-12 text-center !tracking-[-0.04375em] md:text-left", dangerouslySetInnerHTML: { __html: main_text } }),
    /* @__PURE__ */ jsxs124("div", { className: "flex items-center justify-start gap-4", children: [
      !!author && /* @__PURE__ */ jsx152(WpImage, { className: "h-16 w-16 rounded-full object-cover", image: author.image }),
      /* @__PURE__ */ jsxs124("div", { className: "!tracking-[-0.04375em]", children: [
        !!(author == null ? void 0 : author.full_name) && /* @__PURE__ */ jsx152(
          "p",
          {
            className: "text-18 font-medium",
            dangerouslySetInnerHTML: {
              __html: author.full_name
            }
          }
        ),
        /* @__PURE__ */ jsx152("div", { className: "flex font-body", children: /* @__PURE__ */ jsxs124("p", { children: [
          author == null ? void 0 : author.job_role,
          " ",
          (author == null ? void 0 : author.department) ? ", " : "",
          /* @__PURE__ */ jsx152(
            "span",
            {
              className: "font-medium",
              dangerouslySetInnerHTML: {
                __html: author.department
              }
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
var TestimonialCard_default2;
var init_TestimonialCard2 = __esm({
  "src/components/flexible/company/components/TestimonialSliderCentered/TestimonialCard.tsx"() {
    init_Wp();
    TestimonialCard_default2 = TestimonialCard2;
  }
});

// src/components/flexible/company/components/TestimonialSliderCentered/TestimonialSliderCentered.tsx
var TestimonialSliderCentered_exports = {};
__export(TestimonialSliderCentered_exports, {
  default: () => TestimonialSliderCentered_default
});
import { useState as useState37 } from "react";
import { motion as motion5, AnimatePresence as AnimatePresence10 } from "framer-motion";
import Image4 from "next/image";
import { jsx as jsx153, jsxs as jsxs125 } from "react/jsx-runtime";
function TestimonialSliderCentered(props) {
  const { content } = props;
  const { testimonials } = content || {};
  const [activeSlideIndex, setActiveSlideIndex] = useState37(0);
  const [direction, setDirection] = useState37("right");
  return /* @__PURE__ */ jsx153("div", { className: "testimonial-slider-centered ", children: /* @__PURE__ */ jsxs125("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxs125("div", { className: "relative", children: [
      /* @__PURE__ */ jsx153("div", { className: "absolute -left-[55%] top-[50%] flex w-full -translate-y-1/2 justify-start", children: /* @__PURE__ */ jsx153(
        motion5.div,
        {
          variants: lineAnimation,
          initial: direction === "left" ? "hiddenLeft" : "hiddenRight",
          animate: "visible",
          exit: direction === "left" ? "exitLeft" : "exitRight",
          className: "aspect-[576/349] w-full max-w-[576px]",
          transition: {
            duration: 0.25,
            ease: "easeInOut"
          },
          children: /* @__PURE__ */ jsx153(
            Image4,
            {
              src: "/images/testimonial-slider-lines-left.png",
              layout: "fill",
              objectFit: "contain",
              objectPosition: "left",
              className: "",
              alt: "testimonial-slider-left-lines"
            }
          )
        },
        activeSlideIndex
      ) }),
      /* @__PURE__ */ jsx153("div", { className: "absolute -right-[55%] top-[50%] flex w-full -translate-y-1/2 justify-end", children: /* @__PURE__ */ jsx153(
        motion5.div,
        {
          variants: lineAnimation,
          initial: direction === "left" ? "hiddenLeft" : "hiddenRight",
          animate: "visible",
          exit: direction === "left" ? "exitLeft" : "exitRight",
          className: "aspect-[576/349] w-full max-w-[576px]",
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          },
          children: /* @__PURE__ */ jsx153(
            Image4,
            {
              src: "/images/testimonial-slider-lines-right.png",
              layout: "fill",
              objectFit: "contain",
              objectPosition: "right",
              className: "",
              alt: "testimonial-slider-right-lines"
            }
          )
        },
        activeSlideIndex
      ) }),
      /* @__PURE__ */ jsx153(AnimatePresence10, { initial: false, mode: "wait", children: /* @__PURE__ */ jsx153(
        motion5.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, ease: "easeInOut" },
          exit: { opacity: 0 },
          className: "flex w-full items-center justify-center",
          children: /* @__PURE__ */ jsx153(TestimonialCard_default2, { testimonial: testimonials[activeSlideIndex] })
        },
        activeSlideIndex
      ) })
    ] }),
    /* @__PURE__ */ jsx153(
      TestimonialSliderNavButtons_default,
      {
        activeSlideIndex,
        onPrevClick: () => {
          setActiveSlideIndex((prev) => {
            const newIndex = prev === 0 ? testimonials.length - 1 : prev - 1;
            if (newIndex < prev) {
              setDirection("left");
            } else {
              setDirection("right");
            }
            return newIndex;
          });
        },
        onNextClick: () => {
          setActiveSlideIndex((prev) => {
            const newIndex = prev === testimonials.length - 1 ? 0 : prev + 1;
            if (newIndex > prev) {
              setDirection("right");
            } else {
              setDirection("left");
            }
            return newIndex;
          });
        }
      }
    )
  ] }) });
}
var lineAnimation, TestimonialSliderCentered_default;
var init_TestimonialSliderCentered = __esm({
  "src/components/flexible/company/components/TestimonialSliderCentered/TestimonialSliderCentered.tsx"() {
    init_TestimonialSliderNavButtons();
    init_TestimonialCard2();
    lineAnimation = {
      hiddenLeft: {
        opacity: 0,
        x: "100%"
      },
      hiddenRight: {
        opacity: 0,
        x: "-100%"
      },
      visible: {
        opacity: 1,
        x: 0
      },
      exitLeft: {
        opacity: 0,
        x: "100%"
      },
      exitRight: {
        opacity: 0,
        x: "-100%"
      }
    };
    TestimonialSliderCentered_default = TestimonialSliderCentered;
  }
});

// src/components/flexible/company/components/JobRoles/JobFilters.tsx
import { jsx as jsx154, jsxs as jsxs126 } from "react/jsx-runtime";
function JobFilters({ activeDepartment = "All", setActiveDepartment, activeLocation = "All", setActiveLocation, departments, locations }) {
  const selectClassNames = "text-16 bg-snow block w-full rounded-lg border-none py-4 pl-5 pr-4 font-body font-normal focus:outline-none focus:ring-0 md:max-w-[331px]";
  return /* @__PURE__ */ jsxs126("div", { className: "flex w-full justify-center gap-3", children: [
    /* @__PURE__ */ jsxs126(
      "select",
      {
        className: selectClassNames,
        value: activeDepartment,
        onChange: (e) => {
          setActiveDepartment(e.target.value);
          setActiveLocation("All");
        },
        children: [
          /* @__PURE__ */ jsx154("option", { value: "All", children: "Department" }),
          (departments == null ? void 0 : departments.length) > 0 && (departments == null ? void 0 : departments.map((department) => /* @__PURE__ */ jsx154("option", { value: department, children: department }, department)))
        ]
      }
    ),
    /* @__PURE__ */ jsxs126("select", { className: selectClassNames, value: activeLocation, onChange: (e) => setActiveLocation(e.target.value), children: [
      /* @__PURE__ */ jsx154("option", { value: "All", children: "Location" }),
      (locations == null ? void 0 : locations.length) > 0 && (locations == null ? void 0 : locations.map((location) => /* @__PURE__ */ jsx154("option", { value: location, children: location }, location)))
    ] })
  ] });
}
var JobFilters_default;
var init_JobFilters = __esm({
  "src/components/flexible/company/components/JobRoles/JobFilters.tsx"() {
    JobFilters_default = JobFilters;
  }
});

// src/components/flexible/company/components/JobRoles/DepartmentGroup.tsx
import Link40 from "next/link";
import { jsx as jsx155, jsxs as jsxs127 } from "react/jsx-runtime";
function DepartmentGroup({ group }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs127("div", { className: "", children: [
    /* @__PURE__ */ jsxs127("h3", { className: "text-15 mb-6 mr-2 text-navy/60 md:mb-12", children: [
      /* @__PURE__ */ jsx155("span", { dangerouslySetInnerHTML: { __html: group == null ? void 0 : group.title } }),
      /* @__PURE__ */ jsx155("span", { className: "ml-2 text-navy", dangerouslySetInnerHTML: { __html: (_a = group == null ? void 0 : group.jobs) == null ? void 0 : _a.length } })
    ] }),
    /* @__PURE__ */ jsx155("div", { className: "flex flex-col divide-y-2 divide-lightGrey border-y border-lightGrey", children: (_b = group == null ? void 0 : group.jobs) == null ? void 0 : _b.map((job) => {
      var _a2, _b2;
      return /* @__PURE__ */ jsxs127(
        Link40,
        {
          className: "group relative grid py-4 md:grid-cols-7 md:gap-x-6 md:py-8",
          href: `/careers/job/${job.id}`,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => {
            var _a3;
            trackEvent_default("job_trackevent", {
              job_name: job == null ? void 0 : job.title,
              city_name: (_a3 = job == null ? void 0 : job.location) == null ? void 0 : _a3.name,
              exit_click: `/careers/job/${job.id}`
            });
          },
          children: [
            !!(job == null ? void 0 : job.title) && /* @__PURE__ */ jsx155(
              "h4",
              {
                className: "text-22 mb-2 w-[80%] font-medium !leading-[1.2] transition-transform duration-300 ease-in-out group-hover:translate-x-2 md:col-span-4 md:group-hover:translate-x-4",
                dangerouslySetInnerHTML: { __html: job.title }
              }
            ),
            !!((_a2 = job == null ? void 0 : job.location) == null ? void 0 : _a2.name) && /* @__PURE__ */ jsx155("p", { className: "text-16 font-body font-normal text-navy/60 md:col-span-2", dangerouslySetInnerHTML: { __html: (_b2 = job == null ? void 0 : job.location) == null ? void 0 : _b2.name } }),
            /* @__PURE__ */ jsx155("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx155("div", { className: "absolute right-0 top-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-2 md:relative md:top-auto md:group-hover:-translate-x-4", children: /* @__PURE__ */ jsx155(RightArrowCircle, { circleClassName: "text-navy group-hover:text-blue" }) }) })
          ]
        },
        job.id
      );
    }) })
  ] });
}
var DepartmentGroup_default;
var init_DepartmentGroup = __esm({
  "src/components/flexible/company/components/JobRoles/DepartmentGroup.tsx"() {
    init_Icons();
    init_trackEvent();
    DepartmentGroup_default = DepartmentGroup;
  }
});

// src/components/flexible/company/components/JobRoles/JobListingHelpers.tsx
var FilterJobs, JobListingHelpers_default, GroupJobsByDepartment, GetVisibleJobs, FilterJobsByCountryAndCity;
var init_JobListingHelpers = __esm({
  "src/components/flexible/company/components/JobRoles/JobListingHelpers.tsx"() {
    FilterJobs = (roles, selectedDepartment, selectedLocation) => {
      return roles == null ? void 0 : roles.filter((job) => {
        var _a;
        const departmentMatches = selectedDepartment === "All" || ((_a = job.departments[0]) == null ? void 0 : _a.name) === selectedDepartment;
        const locationMatches = selectedLocation === "All" || job.location.name === selectedLocation;
        return departmentMatches && locationMatches;
      });
    };
    JobListingHelpers_default = FilterJobs;
    GroupJobsByDepartment = (jobs) => {
      const groupedJobs = {};
      jobs == null ? void 0 : jobs.forEach((job) => {
        var _a, _b;
        const departmentName = ((_a = job.departments[0]) == null ? void 0 : _a.name) || "Other";
        const departmentId = ((_b = job.departments[0]) == null ? void 0 : _b.id) || null;
        if (!groupedJobs[departmentName]) {
          groupedJobs[departmentName] = {
            title: departmentName,
            id: departmentId,
            jobs: []
          };
        }
        groupedJobs[departmentName].jobs.push(job);
      });
      return Object.values(groupedJobs);
    };
    GetVisibleJobs = (listedJobs, visibleJobs) => {
      const jobsToShow = [];
      let jobsCount = 0;
      listedJobs.forEach((group) => {
        const remainingJobs = visibleJobs - jobsCount;
        if (remainingJobs <= 0) return;
        const groupJobsToShow = group.jobs.slice(0, remainingJobs);
        jobsToShow.push(__spreadProps(__spreadValues({}, group), { jobs: groupJobsToShow }));
        jobsCount += groupJobsToShow.length;
      });
      return jobsToShow;
    };
    FilterJobsByCountryAndCity = ({ jobs, department, country, city }) => {
      return jobs == null ? void 0 : jobs.filter((job) => {
        var _a, _b, _c;
        const departmentMatches = department === "All" || ((_a = job.departments[0]) == null ? void 0 : _a.name) === department;
        const countryMatches = country === "All" || ((_b = job.location.name) == null ? void 0 : _b.indexOf(country)) >= 0;
        const cityMatches = city === "All" || ((_c = job.location.name) == null ? void 0 : _c.indexOf(city)) >= 0;
        return departmentMatches && countryMatches && cityMatches;
      });
    };
  }
});

// src/components/flexible/company/components/JobRoles/CountryAndCityFilters.tsx
import { useEffect as useEffect23, useState as useState38 } from "react";
import { jsx as jsx156, jsxs as jsxs128 } from "react/jsx-runtime";
function CountryAndCityFilters(props) {
  var _a, _b;
  const [countries, setCountries] = useState38({});
  const [cities, setCities] = useState38([]);
  let selectClassNames = "text-16 bg-snow block w-full rounded-lg border-none py-4 pl-5 pr-4 font-body";
  selectClassNames += " font-normal focus:outline-none focus:ring-0 md:max-w-[331px]";
  const handleOnChangeDepartment = (value) => {
    props == null ? void 0 : props.setActiveCountry("All");
    props == null ? void 0 : props.setActiveCity("All");
    props == null ? void 0 : props.setActiveDepartment(value);
  };
  const handleOnChangeCountry = (value) => {
    setCities(countries[value]);
    props == null ? void 0 : props.setActiveCountry(value);
    props == null ? void 0 : props.setActiveCity("All");
  };
  useEffect23(() => {
    var _a2;
    const countriesList = {};
    (_a2 = props == null ? void 0 : props.locations) == null ? void 0 : _a2.forEach((location) => {
      var _a3, _b2, _c, _d;
      const isRemote = (location == null ? void 0 : location.indexOf("Remote")) >= 0;
      const locationArray = location.split(isRemote ? "-" : ",");
      const country = (_a3 = locationArray[locationArray.length - 1]) == null ? void 0 : _a3.trim();
      const city = (_c = (_b2 = location == null ? void 0 : location.replace(`, ${country}`, "")) == null ? void 0 : _b2.replace(`- ${country}`, "")) == null ? void 0 : _c.trim();
      if (countriesList[country]) {
        (_d = countriesList[country]) == null ? void 0 : _d.push(city);
      } else {
        countriesList[country] = [city];
      }
      const countryCities = new Set(countriesList[country]);
      countriesList[country] = Array.from(countryCities);
    });
    setCities([]);
    setCountries(countriesList);
  }, [props == null ? void 0 : props.locations]);
  return /* @__PURE__ */ jsxs128("div", { className: "flex w-full justify-center gap-3", children: [
    /* @__PURE__ */ jsxs128("select", { className: selectClassNames, value: props == null ? void 0 : props.activeDepartment, onChange: (e) => handleOnChangeDepartment(e.target.value), children: [
      /* @__PURE__ */ jsx156("option", { value: "All", children: "Department" }),
      (_a = props == null ? void 0 : props.departments) == null ? void 0 : _a.map((option) => /* @__PURE__ */ jsx156("option", { value: option, children: option }, option))
    ] }),
    /* @__PURE__ */ jsxs128("select", { className: selectClassNames, value: props == null ? void 0 : props.activeCountry, onChange: (e) => handleOnChangeCountry(e.target.value), children: [
      /* @__PURE__ */ jsx156("option", { value: "All", children: "Country" }),
      (_b = Object.keys(countries)) == null ? void 0 : _b.map((option) => /* @__PURE__ */ jsx156("option", { value: option, children: option }, option))
    ] }),
    /* @__PURE__ */ jsxs128("select", { className: selectClassNames, value: props == null ? void 0 : props.activeCity, onChange: (e) => props == null ? void 0 : props.setActiveCity(e.target.value), children: [
      /* @__PURE__ */ jsx156("option", { value: "All", children: "City" }),
      cities == null ? void 0 : cities.map((option) => /* @__PURE__ */ jsx156("option", { value: option, children: option }, option))
    ] })
  ] });
}
var CountryAndCityFilters_default;
var init_CountryAndCityFilters = __esm({
  "src/components/flexible/company/components/JobRoles/CountryAndCityFilters.tsx"() {
    CountryAndCityFilters_default = CountryAndCityFilters;
  }
});

// src/components/flexible/company/components/JobRoles/JobRoles.tsx
var JobRoles_exports = {};
__export(JobRoles_exports, {
  default: () => JobRoles_default
});
import { useState as useState39, useEffect as useEffect24, useMemo as useMemo3 } from "react";
import { jsx as jsx157, jsxs as jsxs129 } from "react/jsx-runtime";
function JobRoles(props) {
  const { content } = props;
  const { heading, filter_type, filter_departments_condition, departments_to_filter } = content || {};
  const [jobs, setJobs] = useState39(null);
  const [listedJobs, setListedJobs] = useState39(null);
  const [departments, setDepartments] = useState39([]);
  const [activeDepartment, setActiveDepartment] = useState39("All");
  const [filteredDepartments, setFilteredDepartments] = useState39(null);
  const [locations, setLocations] = useState39([]);
  const [activeLocation, setActiveLocation] = useState39("All");
  const [activeCountry, setActiveCountry] = useState39("All");
  const [activeCity, setActiveCity] = useState39("All");
  const handleChangeLocations = (filteredJobs) => {
    const allJobsGrouped = filteredJobs == null ? void 0 : filteredJobs.map(({ jobs: jobs2 }) => jobs2);
    const allJobs = allJobsGrouped == null ? void 0 : allJobsGrouped.reduce((acc, cv) => acc ? [...acc, ...cv] : cv, []);
    const allLocations = allJobs == null ? void 0 : allJobs.map(({ location: { name } }) => name);
    setLocations(allLocations);
  };
  useEffect24(() => {
    const fetchDepartmentsAndLocations = async () => {
      var _a;
      const url = `https://boards-api.greenhouse.io/v1/boards/geniussports/jobs?content=true`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.jobs) {
          throw new Error("No jobs data found");
        }
        const departmentsSet = /* @__PURE__ */ new Set();
        const filterCondition = filter_departments_condition;
        const isInclude = filterCondition === "include";
        const isExclude = filterCondition === "exclude";
        const filteredDepartments2 = departments_to_filter == null ? void 0 : departments_to_filter.reduce((acc, current) => {
          acc[current == null ? void 0 : current.department_title] = current;
          return acc;
        }, []);
        setFilteredDepartments(filteredDepartments2);
        const filteredDepartmentsAreEmpty = (departments_to_filter == null ? void 0 : departments_to_filter.length) < 1;
        const filteredJobs = (_a = data == null ? void 0 : data.jobs) == null ? void 0 : _a.filter((job) => {
          let addJob = false;
          job.departments.forEach((department) => {
            const filteredDepartment = filteredDepartments2 ? filteredDepartments2[department.name] : null;
            const departmentIsFiltered = !!filteredDepartment;
            if (isInclude && (departmentIsFiltered || filteredDepartmentsAreEmpty)) {
              addJob = true;
              departmentsSet.add(department.name);
            }
            if (isExclude && (!departmentIsFiltered || filteredDepartmentsAreEmpty)) {
              departmentsSet.add(department.name);
              addJob = true;
            }
            if (isExclude && departmentIsFiltered && (filteredDepartment == null ? void 0 : filteredDepartment.show_in_select)) {
              departmentsSet.add(department.name);
            }
          });
          return addJob;
        });
        setJobs(filteredJobs);
        setDepartments(Array.from(departmentsSet));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDepartmentsAndLocations();
  }, []);
  const departmentNotResultsData = useMemo3(() => {
    if (!filteredDepartments || !filteredDepartments[activeDepartment]) {
      return null;
    }
    const departmentFilteredData = filteredDepartments[activeDepartment];
    departmentFilteredData.not_results_text = (departmentFilteredData == null ? void 0 : departmentFilteredData.not_results_text) || "Your query didn't return any results.";
    return departmentFilteredData;
  }, [filteredDepartments, activeDepartment]);
  useEffect24(() => {
    if (filter_type !== "normal") {
      return;
    }
    const filteredJobs = JobListingHelpers_default(jobs, activeDepartment, activeLocation);
    const groupedFilteredJobs = GroupJobsByDepartment(filteredJobs);
    setListedJobs(groupedFilteredJobs);
    if (activeLocation === "All") {
      const locationNames = filteredJobs == null ? void 0 : filteredJobs.map(({ location: { name } }) => name);
      const uniqueLocations = Array.from(new Set(locationNames));
      setLocations(uniqueLocations);
    }
  }, [filter_type, jobs, activeDepartment, activeLocation]);
  useEffect24(() => {
    if (filter_type !== "country_and_city") {
      return;
    }
    const filteredJobs = FilterJobsByCountryAndCity({
      jobs,
      department: activeDepartment,
      country: activeCountry,
      city: activeCity
    });
    const groupedFilteredJobs = GroupJobsByDepartment(filteredJobs);
    setListedJobs(groupedFilteredJobs);
    if (activeCountry === "All" && activeCity === "All") {
      handleChangeLocations(groupedFilteredJobs);
    }
  }, [filter_type, jobs, activeDepartment, activeCountry, activeCity]);
  const totalJobs = listedJobs == null ? void 0 : listedJobs.reduce((acc, group) => {
    var _a;
    return acc + (((_a = group.jobs) == null ? void 0 : _a.length) || 0);
  }, 0);
  const [visibleJobs, setVisibleJobs] = useState39(10);
  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
  };
  const visibleJobGroups = listedJobs && GetVisibleJobs(listedJobs, visibleJobs);
  return /* @__PURE__ */ jsx157("div", { className: "job roles mx-auto max-w-[66.375rem]", children: /* @__PURE__ */ jsxs129("div", { className: "container", children: [
    /* @__PURE__ */ jsxs129("div", { className: "mb-12 flex w-full flex-col items-center sm:mb-20 md:mb-[120px]", children: [
      !!heading && /* @__PURE__ */ jsx157("span", { className: "text-h2 mx-auto mb-12 text-center md:mb-16", dangerouslySetInnerHTML: { __html: heading } }),
      filter_type === "normal" && /* @__PURE__ */ jsx157(
        JobFilters_default,
        {
          activeDepartment,
          setActiveDepartment,
          activeLocation,
          setActiveLocation,
          departments,
          locations
        }
      ),
      filter_type === "country_and_city" && /* @__PURE__ */ jsx157(
        CountryAndCityFilters_default,
        {
          activeDepartment,
          setActiveDepartment,
          activeCountry,
          setActiveCountry,
          activeCity,
          setActiveCity,
          departments,
          locations
        }
      )
    ] }),
    /* @__PURE__ */ jsxs129("div", { className: "flex flex-col space-y-10 md:space-y-12 lg:space-y-16", children: [
      (visibleJobGroups == null ? void 0 : visibleJobGroups.length) > 0 ? visibleJobGroups == null ? void 0 : visibleJobGroups.map((group, index) => /* @__PURE__ */ jsx157(DepartmentGroup_default, { group }, index)) : /* @__PURE__ */ jsxs129("div", { className: "inline-block w-auto text-left", children: [
        /* @__PURE__ */ jsx157("h3", { className: "text-15 mb-6 mr-2 text-navy/60 md:mb-12", children: /* @__PURE__ */ jsx157("span", { dangerouslySetInnerHTML: { __html: departmentNotResultsData == null ? void 0 : departmentNotResultsData.department_title } }) }),
        /* @__PURE__ */ jsx157("p", { className: "mb-4", dangerouslySetInnerHTML: { __html: departmentNotResultsData == null ? void 0 : departmentNotResultsData.not_results_text } }),
        (departmentNotResultsData == null ? void 0 : departmentNotResultsData.see_results_button_link) && /* @__PURE__ */ jsxs129(Link, { href: (departmentNotResultsData == null ? void 0 : departmentNotResultsData.see_results_button_link) || "/", className: "flex items-center gap-[14px] font-bold text-inherit", children: [
          /* @__PURE__ */ jsx157("div", { className: "h-6 w-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[90deg]", children: /* @__PURE__ */ jsx157(RightArrowCircle, { circleClassName: "text-navy group-hover:text-blue" }) }),
          /* @__PURE__ */ jsx157("span", { dangerouslySetInnerHTML: { __html: departmentNotResultsData == null ? void 0 : departmentNotResultsData.see_results_button_text } })
        ] })
      ] }),
      visibleJobs < totalJobs && /* @__PURE__ */ jsx157("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs129(
        "button",
        {
          type: "button",
          "aria-label": "Load more open roles",
          onClick: loadMoreJobs,
          className: "text-17 group mt-4 inline-flex items-center space-x-3 p-2 font-semibold text-navy",
          children: [
            /* @__PURE__ */ jsx157("div", { className: "h-6 w-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[135deg]", children: /* @__PURE__ */ jsx157(CircleArrow, {}) }),
            /* @__PURE__ */ jsx157("span", { dangerouslySetInnerHTML: { __html: "Load more" } })
          ]
        }
      ) })
    ] })
  ] }) });
}
var JobRoles_default;
var init_JobRoles = __esm({
  "src/components/flexible/company/components/JobRoles/JobRoles.tsx"() {
    init_Icons();
    init_Link();
    init_JobFilters();
    init_DepartmentGroup();
    init_JobListingHelpers();
    init_CountryAndCityFilters();
    JobRoles_default = JobRoles;
  }
});

// src/components/landing/Legal/components/LegalMasthead.tsx
import { LazyMotion as LazyMotion31, domAnimation as domAnimation28, m as m44, useInView as useInView17 } from "framer-motion";
import clsx59 from "clsx";
import { useRef as useRef23 } from "react";
import { jsx as jsx158, jsxs as jsxs130 } from "react/jsx-runtime";
function HorizontalBars({
  className,
  barsClassName,
  bars = [0, 1, 2, 3, 4],
  barVolume = 10,
  marginInitial = 4,
  heightFactor = 2,
  marginFactor = 0.2,
  blockAnimation = false
}) {
  const ref = useRef23(null);
  const isInView = useInView17(ref, { amount: 0.7, once: true });
  return /* @__PURE__ */ jsx158(LazyMotion31, { features: domAnimation28, children: /* @__PURE__ */ jsx158(m44.div, __spreadProps(__spreadValues({ ref, initial: "hidden", animate: isInView ? "visible" : "hidden" }, !blockAnimation && { variants: barVariants }), { className, children: bars == null ? void 0 : bars.map((item) => /* @__PURE__ */ jsx158(
    "div",
    {
      className: clsx59("w-full", barsClassName),
      style: { height: barVolume - item * heightFactor, marginTop: marginInitial + marginFactor * item }
    },
    item
  )) })) });
}
var init_LegalMasthead = __esm({
  "src/components/landing/Legal/components/LegalMasthead.tsx"() {
    init_SubmenuWrapper();
  }
});

// src/components/flexible/company/components/LocationsAccordion/OfficeRow.tsx
import Link41 from "next/link";
import { jsx as jsx159, jsxs as jsxs131 } from "react/jsx-runtime";
function OfficeRow({ office }) {
  var _a;
  const { description, heading: officeHeading, image, subheading: officeSubheading } = office;
  return /* @__PURE__ */ jsxs131(Link41, { href: ((_a = office == null ? void 0 : office.link) == null ? void 0 : _a.url) || "/", target: "_blank", className: "group flex flex-col justify-start sm:flex-row", children: [
    !!image && /* @__PURE__ */ jsx159("div", { className: "mb-3 mr-8 aspect-[218/138] w-full max-w-[100%] overflow-hidden rounded sm:mb-0 sm:max-w-[218px] md:mr-16", children: /* @__PURE__ */ jsx159(WpImage, { className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105", image }) }),
    /* @__PURE__ */ jsxs131("div", { className: "flex flex-col gap-4 lg:flex-row lg:gap-16", children: [
      /* @__PURE__ */ jsxs131("div", { className: "flex flex-col items-start gap-4 lg:max-w-[40%]", children: [
        !!officeHeading && /* @__PURE__ */ jsxs131("div", { className: "flex items-center gap-3 transition-transform duration-300 lg:-translate-x-8 lg:group-hover:translate-x-0", children: [
          /* @__PURE__ */ jsx159("span", { className: "transition-transform duration-300 lg:scale-0 lg:group-hover:scale-[1]", children: /* @__PURE__ */ jsx159(RightArrowCircle, { height: 22, width: 22 }) }),
          /* @__PURE__ */ jsx159("h6", { dangerouslySetInnerHTML: { __html: officeHeading }, className: "text-22" })
        ] }),
        !!officeSubheading && /* @__PURE__ */ jsx159("p", { dangerouslySetInnerHTML: { __html: officeSubheading }, className: "text-18 font-body font-medium text-navy/60" })
      ] }),
      !!description && /* @__PURE__ */ jsx159("p", { dangerouslySetInnerHTML: { __html: description }, className: "text-18 font-body text-navy/60 sm:max-w-[326px]" })
    ] })
  ] });
}
var OfficeRow_default;
var init_OfficeRow = __esm({
  "src/components/flexible/company/components/LocationsAccordion/OfficeRow.tsx"() {
    init_Icons();
    init_Wp();
    OfficeRow_default = OfficeRow;
  }
});

// src/components/flexible/company/components/LocationsAccordion/LocationsRow.tsx
import { m as m45, motion as motion6, LazyMotion as LazyMotion32, domMax as domMax4, AnimatePresence as AnimatePresence11 } from "framer-motion";
import {
  useRef as useRef24
} from "react";
import clsx60 from "clsx";
import { Fragment as Fragment25, jsx as jsx160, jsxs as jsxs132 } from "react/jsx-runtime";
function LocationsRow({
  location,
  onClick,
  isExpanded
  // isInView
}) {
  const { heading, subheading, offices } = location;
  const ref = useRef24(null);
  return /* @__PURE__ */ jsx160(LazyMotion32, { features: domMax4, children: /* @__PURE__ */ jsxs132(Fragment25, { children: [
    /* @__PURE__ */ jsx160(AnimatePresence11, { mode: "popLayout", children: /* @__PURE__ */ jsxs132(
      motion6.button,
      {
        layout: true,
        type: "button",
        "aria-label": "Toggle location row",
        onClick: () => {
          onClick == null ? void 0 : onClick();
        },
        className: "flex w-full scroll-mt-24 items-center justify-between gap-10 py-6 md:py-8",
        ref,
        children: [
          /* @__PURE__ */ jsxs132("div", { className: "flex flex-col items-start gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsx160(
              "p",
              {
                className: "text-32 text-left font-[450]",
                dangerouslySetInnerHTML: {
                  __html: heading
                }
              }
            ),
            /* @__PURE__ */ jsx160(
              "p",
              {
                className: "text-20--extra-clamp text-left font-body text-navy/80",
                dangerouslySetInnerHTML: {
                  __html: subheading
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx160(
            m45.span,
            {
              animate: {
                rotate: isExpanded ? 0 : 90,
                transition: {
                  duration: 0.25,
                  ease: "linear"
                }
              },
              className: clsx60("h-6 w-6 flex-shrink-0 sm:h-10 sm:w-10"),
              children: /* @__PURE__ */ jsx160(
                PlusCircle,
                {
                  hideVerticalLine: isExpanded,
                  circleClassName: clsx60("transition-transform duration-300 ease-in-out", isExpanded ? "text-blue" : "text-black")
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx160(AnimatePresence11, { mode: "wait", children: isExpanded && /* @__PURE__ */ jsx160(
      m45.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: {
          opacity: 0,
          y: 40
        },
        transition: { duration: 0.25, ease: "linear" },
        className: "mx-auto flex max-w-[894px] flex-col gap-8 py-4 md:pb-12 md:pt-10",
        children: (offices == null ? void 0 : offices.length) > 0 && offices.map((office, index) => /* @__PURE__ */ jsx160(OfficeRow_default, { office }, `office-row-${index}`))
      }
    ) })
  ] }) });
}
var LocationsRow_default;
var init_LocationsRow = __esm({
  "src/components/flexible/company/components/LocationsAccordion/LocationsRow.tsx"() {
    init_Icons();
    init_OfficeRow();
    LocationsRow_default = LocationsRow;
  }
});

// src/components/flexible/company/components/LocationsAccordion/LocationsAccordion.tsx
var LocationsAccordion_exports = {};
__export(LocationsAccordion_exports, {
  default: () => LocationsAccordion_default
});
import { useRef as useRef25, useState as useState40 } from "react";
import { jsx as jsx161, jsxs as jsxs133 } from "react/jsx-runtime";
function LocationsAccordion(props) {
  const [activeIndex, setActiveIndex] = useState40(0);
  const ref = useRef25(null);
  const { content } = props;
  const { locations } = content;
  return /* @__PURE__ */ jsx161("div", { className: "locations-accordion", ref, children: /* @__PURE__ */ jsxs133("div", { className: "container--extra-small container", children: [
    /* @__PURE__ */ jsx161(HorizontalBars, { className: "", barsClassName: "bg-lightGrey", marginInitial: 14, marginFactor: 0.4 }),
    /* @__PURE__ */ jsx161("div", { className: "flex flex-col divide-y divide-lightGrey border-y border-lightGrey", children: (locations == null ? void 0 : locations.length) > 0 && locations.map((location, index) => /* @__PURE__ */ jsx161(
      LocationsRow_default,
      {
        location,
        onClick: () => {
          if (activeIndex === index) {
            setActiveIndex(-1);
          } else {
            setActiveIndex(index);
          }
        },
        isExpanded: activeIndex === index
      },
      `location-row-${index}`
    )) })
  ] }) });
}
var LocationsAccordion_default;
var init_LocationsAccordion = __esm({
  "src/components/flexible/company/components/LocationsAccordion/LocationsAccordion.tsx"() {
    init_LegalMasthead();
    init_LocationsRow();
    LocationsAccordion_default = LocationsAccordion;
  }
});

// src/components/flexible/company/components/FAQsAccordion/FAQsAccordion.module.scss
var require_FAQsAccordion_module = __commonJS({
  "src/components/flexible/company/components/FAQsAccordion/FAQsAccordion.module.scss"() {
  }
});

// src/components/flexible/company/components/FAQsAccordion/FAQAccordionItem.tsx
import clsx61 from "clsx";
import { useRef as useRef26 } from "react";
import { m as m46, motion as motion7, LazyMotion as LazyMotion33, domMax as domMax5, AnimatePresence as AnimatePresence12 } from "framer-motion";
import { jsx as jsx162, jsxs as jsxs134 } from "react/jsx-runtime";
function FAQAccordionItem({ question, onClick, isExpanded }) {
  const ref = useRef26(null);
  const { heading, content } = question;
  return /* @__PURE__ */ jsxs134(LazyMotion33, { features: domMax5, children: [
    /* @__PURE__ */ jsx162(AnimatePresence12, { mode: "popLayout", children: /* @__PURE__ */ jsxs134(
      motion7.button,
      {
        layout: true,
        type: "button",
        "aria-label": "Toggle location row",
        onClick: () => {
          onClick == null ? void 0 : onClick();
        },
        className: "flex w-full scroll-mt-24 items-center justify-between gap-10 py-6 md:py-8",
        ref,
        children: [
          /* @__PURE__ */ jsx162("div", { className: "flex flex-col items-start gap-2 md:gap-3", children: /* @__PURE__ */ jsx162("p", { className: "text-2xl text-xl font-[450]", dangerouslySetInnerHTML: { __html: heading } }) }),
          /* @__PURE__ */ jsx162(
            m46.span,
            {
              animate: {
                rotate: isExpanded ? 0 : 90,
                transition: { duration: 0.25, ease: "linear" }
              },
              className: clsx61("h-6 w-6 flex-shrink-0 sm:h-10 sm:w-10"),
              children: /* @__PURE__ */ jsx162(
                PlusCircle,
                {
                  hideVerticalLine: isExpanded,
                  circleClassName: clsx61("transition-transform duration-300 ease-in-out", isExpanded ? "text-blue" : "text-black")
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx162(AnimatePresence12, { mode: "wait", children: isExpanded && /* @__PURE__ */ jsx162(
      m46.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40 },
        transition: { duration: 0.25, ease: "linear" },
        className: `mx-auto flex w-full flex-col gap-8 py-4 text-left md:pb-12 md:pt-10 ${import_FAQsAccordion_module.default.content}`,
        dangerouslySetInnerHTML: { __html: content }
      }
    ) })
  ] });
}
var import_FAQsAccordion_module, FAQAccordionItem_default;
var init_FAQAccordionItem = __esm({
  "src/components/flexible/company/components/FAQsAccordion/FAQAccordionItem.tsx"() {
    init_Icons();
    import_FAQsAccordion_module = __toESM(require_FAQsAccordion_module());
    FAQAccordionItem_default = FAQAccordionItem;
  }
});

// src/components/flexible/company/components/FAQsAccordion/FAQsAccordion.tsx
var FAQsAccordion_exports = {};
__export(FAQsAccordion_exports, {
  default: () => FAQsAccordion_default
});
import { useRef as useRef27, useState as useState41 } from "react";
import { jsx as jsx163, jsxs as jsxs135 } from "react/jsx-runtime";
function FAQsAccordion(props) {
  const ref = useRef27(null);
  const { questions } = props;
  const [activeIndex, setActiveIndex] = useState41(0);
  return /* @__PURE__ */ jsx163("div", { className: "questions-accordion", ref, children: /* @__PURE__ */ jsxs135("div", { className: "container--extra-small container", children: [
    /* @__PURE__ */ jsx163(HorizontalBars, { className: "", barsClassName: "bg-lightGrey", marginInitial: 10, marginFactor: 0.4 }),
    /* @__PURE__ */ jsx163("div", { className: "flex flex-col divide-y divide-lightGrey border-y border-lightGrey", children: (questions == null ? void 0 : questions.length) > 0 && questions.map((question, index) => /* @__PURE__ */ jsx163(
      FAQAccordionItem_default,
      {
        question,
        onClick: () => setActiveIndex(activeIndex === index ? -1 : index),
        isExpanded: activeIndex === index
      },
      `question-row-${index}`
    )) })
  ] }) });
}
var FAQsAccordion_default;
var init_FAQsAccordion = __esm({
  "src/components/flexible/company/components/FAQsAccordion/FAQsAccordion.tsx"() {
    init_LegalMasthead();
    init_FAQAccordionItem();
    FAQsAccordion_default = FAQsAccordion;
  }
});

// src/components/flexible/podcast/components/FeaturedPodcast.tsx
var FeaturedPodcast_exports = {};
__export(FeaturedPodcast_exports, {
  default: () => FeaturedPodcast_default
});
import { useState as useState45 } from "react";
import Link44 from "next/link";
import { jsx as jsx186, jsxs as jsxs155 } from "react/jsx-runtime";
function FeaturedPodcast({ featured_podcast }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [isHovered, setIsHovered] = useState45(false);
  const [showSummary, setShowSummary] = useState45(false);
  return /* @__PURE__ */ jsxs155("div", { className: "grid gap-x-10 gap-y-8 md:grid-cols-12", children: [
    /* @__PURE__ */ jsx186("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsx186("div", { className: "top-32 overflow-hidden rounded-lg md:sticky", children: /* @__PURE__ */ jsx186(WpImage, { image: (_a = featured_podcast.acf) == null ? void 0 : _a.thumbnail }) }) }),
    /* @__PURE__ */ jsx186("div", { className: "md:col-span-7 lg:pt-6", children: /* @__PURE__ */ jsxs155("div", { className: "md:ml-auto md:max-w-[40.8125rem]", children: [
      /* @__PURE__ */ jsxs155("div", { className: "mb-8 flex items-center space-x-3 lg:mb-10 lg:space-x-8", children: [
        /* @__PURE__ */ jsx186("span", { className: "text-15 rounded-md bg-purple px-2 py-[.3rem] font-body font-medium text-white", dangerouslySetInnerHTML: { __html: "Featured" } }),
        ((_b = featured_podcast.acf) == null ? void 0 : _b.episode_number) && /* @__PURE__ */ jsx186(
          "span",
          {
            className: "text-15 font-regular font-body opacity-80",
            dangerouslySetInnerHTML: { __html: `Episode ${(_c = featured_podcast.acf) == null ? void 0 : _c.episode_number}` }
          }
        )
      ] }),
      /* @__PURE__ */ jsx186("h2", { className: "text-h3 mb-8 line-clamp-2 lg:mb-10", dangerouslySetInnerHTML: { __html: featured_podcast.post_title } }),
      /* @__PURE__ */ jsxs155(
        Link44,
        {
          href: ((_d = featured_podcast == null ? void 0 : featured_podcast.acf) == null ? void 0 : _d.podcast_link) || "#",
          target: "_blank",
          className: `mb-6 flex items-stretch space-x-3 md:space-x-8 lg:mb-[3.375rem] ${((_e = featured_podcast == null ? void 0 : featured_podcast.acf) == null ? void 0 : _e.podcast_link) ? "group" : ""}`,
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
          children: [
            /* @__PURE__ */ jsx186("div", { className: "flex aspect-[1/1] h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy p-4 pl-5 transition-colors duration-200 group-hover:bg-purple lg:h-[4.5rem] lg:w-[4.5rem] lg:p-5 lg:pl-6", children: /* @__PURE__ */ jsx186(PlayArrow, {}) }),
            /* @__PURE__ */ jsx186(PodcastSpring_default, { cardHovered: isHovered, colour: "purple", heightFull: true })
          ]
        }
      ),
      ((_f = featured_podcast == null ? void 0 : featured_podcast.acf) == null ? void 0 : _f.summary) && /* @__PURE__ */ jsxs155("div", { className: "space-y-6 md:space-y-8", children: [
        /* @__PURE__ */ jsx186(
          "div",
          {
            className: `prose font-body opacity-80 transition-all duration-500 ${showSummary ? "" : "line-clamp-3"}`,
            dangerouslySetInnerHTML: { __html: (_g = featured_podcast == null ? void 0 : featured_podcast.acf) == null ? void 0 : _g.summary }
          },
          "short summary"
        ),
        /* @__PURE__ */ jsxs155(
          "button",
          {
            type: "button",
            "aria-label": "Toggle Summary Length",
            className: "btn-group inline-flex items-center space-x-2",
            onClick: () => setShowSummary(!showSummary),
            children: [
              /* @__PURE__ */ jsx186("span", { className: "text-17 font-semibold", dangerouslySetInnerHTML: { __html: "Learn more" } }),
              /* @__PURE__ */ jsx186(
                "div",
                {
                  className: `btn-group-hover:bg-blue flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full bg-navy p-[.3rem] text-white transition-transform duration-300 ${showSummary ? "rotate-180" : ""}`,
                  children: /* @__PURE__ */ jsx186(MobileChevron, {})
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
var FeaturedPodcast_default;
var init_FeaturedPodcast = __esm({
  "src/components/flexible/podcast/components/FeaturedPodcast.tsx"() {
    init_Wp();
    init_Icons();
    init_PodcastSpring();
    FeaturedPodcast_default = FeaturedPodcast;
  }
});

// src/components/flexible/podcast/components/PodcastIndex.tsx
var PodcastIndex_exports = {};
__export(PodcastIndex_exports, {
  default: () => PodcastIndex_default
});
import { useContext as useContext6 } from "react";
import { jsx as jsx187, jsxs as jsxs156 } from "react/jsx-runtime";
function PodcastIndex({ heading }) {
  const [context] = useContext6(GlobalContext);
  const { postListing } = context;
  const podcasts = postListing == null ? void 0 : postListing.posts;
  return /* @__PURE__ */ jsxs156("div", { className: "space-y-10 md:space-y-20", children: [
    /* @__PURE__ */ jsx187("div", { className: "text-center", children: /* @__PURE__ */ jsx187("span", { className: "text-h4", dangerouslySetInnerHTML: { __html: heading } }) }),
    /* @__PURE__ */ jsx187("div", { className: "grid gap-y-6 sm:grid-cols-2 sm:gap-x-5 md:gap-x-6 md:gap-y-[1.75rem]", children: podcasts == null ? void 0 : podcasts.map((item) => {
      var _a;
      return /* @__PURE__ */ jsx187("div", { dangerouslySetInnerHTML: { __html: (_a = item == null ? void 0 : item.acf) == null ? void 0 : _a.podcast_embed } }, item.ID);
    }) }),
    /* @__PURE__ */ jsx187("div", { children: /* @__PURE__ */ jsx187(BlogPagination_default, { postListing, basePath: postListing == null ? void 0 : postListing.base_path, onClick: null }) })
  ] });
}
var PodcastIndex_default;
var init_PodcastIndex = __esm({
  "src/components/flexible/podcast/components/PodcastIndex.tsx"() {
    init_context();
    init_BlogPagination();
    PodcastIndex_default = PodcastIndex;
  }
});

// src/components/article/components/ArticleTextContent.tsx
var ArticleTextContent_exports = {};
__export(ArticleTextContent_exports, {
  default: () => ArticleTextContent
});
import clsx70 from "clsx";
import { useInView as useInView24 } from "framer-motion";
import { useEffect as useEffect29, useRef as useRef37 } from "react";
import { jsx as jsx204 } from "react/jsx-runtime";
function ArticleTextContent(props) {
  const { liColor = "purple", add_anchor_id, anchor_id, text, onInView, onNotInView } = props;
  const ref = useRef37(null);
  const isInView = useInView24(ref, { amount: 0.5 });
  useEffect29(() => {
    if (isInView) {
      onInView == null ? void 0 : onInView(anchor_id);
    } else {
      onNotInView == null ? void 0 : onNotInView(anchor_id);
    }
  }, [anchor_id, isInView, onInView, onNotInView]);
  const textReplace = text == null ? void 0 : text.replace(/\/\/(uat\.)?cms\./g, "//www.");
  return /* @__PURE__ */ jsx204(
    "div",
    {
      ref,
      id: add_anchor_id ? parseSlug(anchor_id) : void 0,
      className: clsx70("text-prose prose--post prose scroll-mt-32 text-navy/80", liColorMap == null ? void 0 : liColorMap[liColor]),
      dangerouslySetInnerHTML: { __html: textReplace }
    }
  );
}
var liColorMap;
var init_ArticleTextContent = __esm({
  "src/components/article/components/ArticleTextContent.tsx"() {
    init_parseSlug();
    liColorMap = {
      purple: "prose--post--li-purple",
      orange: "prose--post--li-orange"
    };
  }
});

// src/components/article/components/ArticleIndexedFeatureCards.tsx
var ArticleIndexedFeatureCards_exports = {};
__export(ArticleIndexedFeatureCards_exports, {
  default: () => ArticleIndexedFeatureCards_default
});
import { jsx as jsx205, jsxs as jsxs167 } from "react/jsx-runtime";
function ArticleIndexedFeatureCards(props) {
  const { cards } = props;
  return /* @__PURE__ */ jsx205("div", { className: "indexed-feature-cards flex flex-col gap-[36px]", children: (cards == null ? void 0 : cards.length) > 0 && (cards == null ? void 0 : cards.map((card, index) => {
    const { content, heading, subheading } = card;
    return /* @__PURE__ */ jsxs167(
      "div",
      {
        className: "!md:pl-[158px] relative overflow-hidden rounded-lg bg-lightPurple p-6 pl-32 md:p-10 md:pl-[140px]",
        children: [
          /* @__PURE__ */ jsxs167("div", { className: "absolute -left-12 top-6 flex flex-col md:top-10", children: [
            /* @__PURE__ */ jsxs167("p", { className: "text-[133px] leading-[1] text-purple", children: [
              index < 9 ? "0" : "",
              index + 1
            ] }),
            /* @__PURE__ */ jsx205("span", { className: "w-full max-w-[80%]", children: /* @__PURE__ */ jsx205(
              HorizontalBars,
              {
                className: "flex flex-col-reverse",
                barsClassName: "bg-purple",
                barVolume: 7,
                heightFactor: 0.4,
                bars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                marginInitial: 6,
                marginFactor: 0.4,
                blockAnimation: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs167("div", { className: "flex flex-col items-start", children: [
            !!subheading && /* @__PURE__ */ jsx205("span", { className: "text-15--clamp mb-4 text-navy", dangerouslySetInnerHTML: { __html: subheading } }),
            !!heading && /* @__PURE__ */ jsx205("h5", { className: "mb-6", dangerouslySetInnerHTML: { __html: heading } }),
            !!content && /* @__PURE__ */ jsx205("p", { dangerouslySetInnerHTML: { __html: content }, className: "text-18 font-body text-black/80" })
          ] })
        ]
      },
      `indexed-feature-card-${index}`
    );
  })) });
}
var ArticleIndexedFeatureCards_default;
var init_ArticleIndexedFeatureCards = __esm({
  "src/components/article/components/ArticleIndexedFeatureCards.tsx"() {
    init_LegalMasthead();
    ArticleIndexedFeatureCards_default = ArticleIndexedFeatureCards;
  }
});

// src/components/article/components/ArticleQuote.tsx
var ArticleQuote_exports = {};
__export(ArticleQuote_exports, {
  default: () => ArticleQuote_default
});
import { jsx as jsx206, jsxs as jsxs168 } from "react/jsx-runtime";
function AuthorDetails({ author }) {
  return /* @__PURE__ */ jsxs168("div", { className: "flex flex-col", children: [
    !!(author == null ? void 0 : author.name) && /* @__PURE__ */ jsx206("p", { className: "text-18 font-bold", dangerouslySetInnerHTML: { __html: author == null ? void 0 : author.name } }),
    /* @__PURE__ */ jsxs168("p", { className: "text-15 font-body font-normal opacity-85", children: [
      author == null ? void 0 : author.job_title,
      /* @__PURE__ */ jsx206(
        "span",
        {
          className: "font-medium",
          dangerouslySetInnerHTML: {
            __html: (author == null ? void 0 : author.company) ? `, ${author == null ? void 0 : author.company}` : ""
          }
        }
      )
    ] })
  ] });
}
function ArticleQuote(props) {
  const { author, icon, main_text } = props;
  return /* @__PURE__ */ jsxs168("div", { className: "article-quote flex flex-col rounded-lg bg-purple p-6 text-white md:p-8", children: [
    !!icon && /* @__PURE__ */ jsx206(WpImage, { image: icon, className: "mb-10 block h-auto w-[85px] object-contain object-left sm:hidden" }),
    !!main_text && /* @__PURE__ */ jsx206("p", { className: "text-24 mb-[2.25rem] text-left sm:mb-16", dangerouslySetInnerHTML: { __html: main_text } }),
    /* @__PURE__ */ jsxs168("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxs168("div", { className: "flex items-center gap-4 sm:gap-6", children: [
        !!(author == null ? void 0 : author.avatar) && /* @__PURE__ */ jsx206(WpImage, { image: author == null ? void 0 : author.avatar, className: "h-14 w-14 rounded-full object-cover" }),
        /* @__PURE__ */ jsx206("span", { className: "block sm:hidden", children: /* @__PURE__ */ jsx206(AuthorDetails, { author }) })
      ] }),
      /* @__PURE__ */ jsxs168("div", { className: "flex flex-row gap-7 sm:items-center", children: [
        /* @__PURE__ */ jsx206("span", { className: "hidden sm:block", children: /* @__PURE__ */ jsx206(AuthorDetails, { author }) }),
        /* @__PURE__ */ jsx206("div", { className: "hidden h-[42px] w-[1px] bg-white/20 sm:block" }),
        !!icon && /* @__PURE__ */ jsx206(WpImage, { image: icon, className: "hidden h-auto w-[85px] object-contain object-left sm:block" })
      ] })
    ] })
  ] });
}
var ArticleQuote_default;
var init_ArticleQuote = __esm({
  "src/components/article/components/ArticleQuote.tsx"() {
    init_Wp();
    ArticleQuote_default = ArticleQuote;
  }
});

// src/components/article/components/ArticleTripleColStats.tsx
var ArticleTripleColStats_exports = {};
__export(ArticleTripleColStats_exports, {
  default: () => ArticleTripleColStats_default
});
import clsx71 from "clsx";
import Image5 from "next/image";
import { jsx as jsx207, jsxs as jsxs169 } from "react/jsx-runtime";
function ArticleTripleColStats(props) {
  const { stats } = props;
  return /* @__PURE__ */ jsxs169("div", { className: "article-triple-col-stats relative min-h-[366px] rounded-lg bg-navy pb-[40%] pt-4 sm:pt-0 lg:pb-0", children: [
    /* @__PURE__ */ jsx207("div", { className: "grid gap-4 px-6 py-4 md:grid-cols-3 md:gap-12", children: (stats == null ? void 0 : stats.length) > 0 && (stats == null ? void 0 : stats.map((stat, index) => {
      const { stat: statText, text } = stat;
      return /* @__PURE__ */ jsxs169("div", { className: clsx71("gap flex flex-col items-center gap-4", index !== 1 && "md:mt-[30%]"), children: [
        /* @__PURE__ */ jsx207(
          TextStrokeStack_default,
          {
            centerText: statText,
            hideBottomRow: true,
            int: index,
            options: {
              textColor: "lightPurple",
              strokeColor: "lightPurple",
              bgColor: "navy",
              textSize: "64"
            }
          }
        ),
        /* @__PURE__ */ jsx207("p", { className: "text-22 text-center font-medium text-lightPurple", dangerouslySetInnerHTML: { __html: text } })
      ] }, `stat-${index}`);
    })) }),
    /* @__PURE__ */ jsx207("div", { className: "absolute bottom-0 left-0 aspect-[1956/644] w-full lg:max-w-[652px]", children: /* @__PURE__ */ jsx207(Image5, { alt: "", src: "/images/triple-col-stats-lines.png", layout: "fill", objectPosition: "right", objectFit: "contain" }) })
  ] });
}
var ArticleTripleColStats_default;
var init_ArticleTripleColStats = __esm({
  "src/components/article/components/ArticleTripleColStats.tsx"() {
    init_TextStrokeStack();
    ArticleTripleColStats_default = ArticleTripleColStats;
  }
});

// src/components/article/components/ArticleBasicQuotes.tsx
var ArticleBasicQuotes_exports = {};
__export(ArticleBasicQuotes_exports, {
  default: () => ArticleBasicQuotes_default
});
import clsx72 from "clsx";
import { jsx as jsx208, jsxs as jsxs170 } from "react/jsx-runtime";
function AuthorDetails2({ author }) {
  return /* @__PURE__ */ jsxs170("div", { className: "flex flex-col", children: [
    !!(author == null ? void 0 : author.name) && /* @__PURE__ */ jsx208("p", { className: "text-18 font-bold", dangerouslySetInnerHTML: { __html: author == null ? void 0 : author.name } }),
    /* @__PURE__ */ jsxs170("p", { className: "text-15 font-body font-normal opacity-85", children: [
      author == null ? void 0 : author.job_title,
      /* @__PURE__ */ jsx208(
        "span",
        {
          className: "font-medium",
          dangerouslySetInnerHTML: {
            __html: (author == null ? void 0 : author.company) ? `, ${author == null ? void 0 : author.company}` : ""
          }
        }
      )
    ] })
  ] });
}
function ArticleBasicQuotes(props) {
  const { quotes } = props;
  return /* @__PURE__ */ jsx208("div", { className: "flex flex-col gap-10 md:gap-14", children: quotes == null ? void 0 : quotes.map((quote, index) => {
    const { author, background_color, main_text } = quote;
    return /* @__PURE__ */ jsxs170(
      "div",
      {
        className: clsx72(
          getBackgroundColor(background_color),
          "article-quote flex flex-col rounded-lg p-8 md:p-12",
          background_color === "navy" && "text-white",
          background_color === "lightGrey" && "text-navy"
        ),
        children: [
          !!main_text && /* @__PURE__ */ jsx208("p", { className: "text-20 mb-8 text-center sm:mb-16 sm:text-left", dangerouslySetInnerHTML: { __html: main_text } }),
          /* @__PURE__ */ jsxs170("div", { className: "flex flex-col items-center gap-4 sm:flex-row", children: [
            /* @__PURE__ */ jsxs170("div", { className: "flex items-center gap-6", children: [
              !!(author == null ? void 0 : author.avatar) && /* @__PURE__ */ jsx208(WpImage, { image: author == null ? void 0 : author.avatar, className: "h-16 w-16 rounded-full object-cover object-center" }),
              /* @__PURE__ */ jsx208("span", { className: "block sm:hidden", children: /* @__PURE__ */ jsx208(AuthorDetails2, { author }) })
            ] }),
            /* @__PURE__ */ jsx208("div", { className: "flex flex-row items-center gap-7", children: /* @__PURE__ */ jsx208("span", { className: "hidden sm:block", children: /* @__PURE__ */ jsx208(AuthorDetails2, { author }) }) })
          ] })
        ]
      },
      `quote-${index}`
    );
  }) });
}
var ArticleBasicQuotes_default;
var init_ArticleBasicQuotes = __esm({
  "src/components/article/components/ArticleBasicQuotes.tsx"() {
    init_ColorHelpers();
    init_Wp();
    ArticleBasicQuotes_default = ArticleBasicQuotes;
  }
});

// src/components/article/components/ArticleIndexedListItems.tsx
var ArticleIndexedListItems_exports = {};
__export(ArticleIndexedListItems_exports, {
  default: () => ArticleIndexedListItems_default
});
import { LazyMotion as LazyMotion37, m as m53, domAnimation as domAnimation31, useInView as useInView25 } from "framer-motion";
import { useRef as useRef38 } from "react";
import { jsx as jsx209, jsxs as jsxs171 } from "react/jsx-runtime";
function RightLines7({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs171("svg", { width, height, viewBox: "0 0 35 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx209("path", { d: "M4 0V64", stroke: "#F6F7F9", strokeWidth: "8" }),
    /* @__PURE__ */ jsx209("path", { d: "M14 0V64", stroke: "#F6F7F9", strokeWidth: "6" }),
    /* @__PURE__ */ jsx209("path", { d: "M24 0V64", stroke: "#F6F7F9", strokeWidth: "4" }),
    /* @__PURE__ */ jsx209("path", { d: "M34 0V64", stroke: "#F6F7F9", strokeWidth: "2" })
  ] });
}
function ArticleIndexedListItems(props) {
  const ref = useRef38(null);
  const isInView = useInView25(ref, { amount: 0.7 });
  const { items } = props;
  return /* @__PURE__ */ jsx209(LazyMotion37, { features: domAnimation31, children: /* @__PURE__ */ jsx209("div", { ref, className: "article-indexed-list-items", children: /* @__PURE__ */ jsx209("div", { className: "flex flex-col gap-4 overflow-hidden", children: (items == null ? void 0 : items.length) > 0 && (items == null ? void 0 : items.map((item, index) => (
    // console.log("ArticleIndexedListItems.item", item);
    /* @__PURE__ */ jsxs171("div", { className: "flex h-full items-stretch justify-start", children: [
      /* @__PURE__ */ jsxs171("div", { className: "text-18 flex max-w-[90%] flex-1 items-center justify-start gap-4 rounded-l-lg bg-lightGrey p-4 font-body font-medium sm:max-w-[93%]", children: [
        /* @__PURE__ */ jsx209(
          "div",
          {
            className: "text-14 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy font-body !tracking-[-0.08em] text-white/80",
            dangerouslySetInnerHTML: {
              __html: `${index < 10 ? "0" : ""} ${index + 1}`
            }
          }
        ),
        !!item.text && /* @__PURE__ */ jsx209(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: item.text
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx209(
        m53.div,
        {
          initial: {
            translateX: -20
          },
          animate: {
            translateX: isInView ? 0 : -20,
            transition: {
              duration: 0.4,
              delay: 0.15 * index,
              ease: "easeInOut"
            }
          },
          className: "flex-shrink-0",
          children: /* @__PURE__ */ jsx209(RightLines7, { height: "100%" })
        }
      )
    ] }, `article-indexex-list-item-${index}`)
  ))) }) }) });
}
var ArticleIndexedListItems_default;
var init_ArticleIndexedListItems = __esm({
  "src/components/article/components/ArticleIndexedListItems.tsx"() {
    ArticleIndexedListItems_default = ArticleIndexedListItems;
  }
});

// src/components/article/components/ArticleTextStrokeStackList.tsx
var ArticleTextStrokeStackList_exports = {};
__export(ArticleTextStrokeStackList_exports, {
  default: () => ArticleTextStrokeStackList_default
});
import { jsx as jsx210, jsxs as jsxs172 } from "react/jsx-runtime";
function ArticleTextStrokeStacklist(props) {
  const { items } = props;
  return /* @__PURE__ */ jsx210("div", { className: "article-text-stroke-stack-list", children: /* @__PURE__ */ jsx210("div", { className: "flex flex-col gap-[16px]", children: (items == null ? void 0 : items.length) > 0 && (items == null ? void 0 : items.map((item, index) => {
    var _a, _b, _c;
    return /* @__PURE__ */ jsxs172(
      "div",
      {
        className: "flex flex-col items-center gap-12 rounded-lg bg-lightGrey p-4 sm:p-6 md:flex-row md:pr-8",
        children: [
          /* @__PURE__ */ jsx210("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx210(
            TextStrokeStack_default,
            {
              bottomText: (_a = item == null ? void 0 : item.stacked_text) == null ? void 0 : _a.bottom_text,
              centerText: (_b = item == null ? void 0 : item.stacked_text) == null ? void 0 : _b.center_text,
              topText: (_c = item == null ? void 0 : item.stacked_text) == null ? void 0 : _c.top_text,
              int: index,
              options: {
                textSize: "64",
                textColor: "navy",
                bgColor: "lightGrey",
                strokeColor: "navy"
              }
            }
          ) }),
          !!(item == null ? void 0 : item.description) && /* @__PURE__ */ jsx210(
            "p",
            {
              className: "text-20 font-normal",
              dangerouslySetInnerHTML: {
                __html: item == null ? void 0 : item.description
              }
            }
          )
        ]
      },
      `text-stroke-stack-list-item${index}`
    );
  })) }) });
}
var ArticleTextStrokeStackList_default;
var init_ArticleTextStrokeStackList = __esm({
  "src/components/article/components/ArticleTextStrokeStackList.tsx"() {
    init_TextStrokeStack();
    ArticleTextStrokeStackList_default = ArticleTextStrokeStacklist;
  }
});

// src/components/elements/index.ts
init_Button();
init_Button();
init_TextLink();
init_Link();
init_LinkGroup();
init_Asset();
init_AssetVideo();
init_Icon();
init_RivePlayer();
init_HighlightedText();

// src/components/elements/text/TextCard.tsx
init_LinkGroup();
init_HighlightedText();
init_Wp();
import clsx5 from "clsx";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var ySpacings = {
  h1: "space-y-6",
  h2: "space-y-4 md:space-y-5",
  h3: "space-y-4 md:space-y-5"
};
function TextCard({
  text_card: {
    icon,
    subheading = "",
    heading = "",
    content = "",
    links = [],
    options: {
      section_max_width = "",
      custom_max_width,
      text_alignment = "left",
      has_mobile_text_alignment = false,
      mobile_text_alignment = "left",
      add_icon = false,
      section_alignment = "left",
      subheading_tag = "h6",
      // subheading_font_size = "default",
      subheading_classes = "",
      heading_tag = "h2",
      heading_font_size = "default",
      heading_classes = "",
      heading_max_width = "",
      heading_highlighted_color = "",
      content_max_width = "",
      content_font_size,
      content_classes = "",
      custom_y_spacing = "",
      mobile_section_alignment = ""
    } = {}
  }
}) {
  var _a, _b, _c, _d;
  const HeadingTag = heading_tag || "h2";
  const headingFontSize = heading_font_size === "default" ? HeadingTag : heading_font_size;
  const SubheadingTag = subheading_tag || "h6";
  const ySpacing = custom_y_spacing || ySpacings[headingFontSize] || "space-y-2";
  const flexItemAlignmentClasses = clsx5(text_alignment === "center" ? "items-center" : text_alignment === "right" ? "items-end" : "items-start");
  const sectionAlignmentClasses = clsx5(section_alignment === "center" ? "md:items-center" : section_alignment === "right" ? "items-end" : "items-start");
  return /* @__PURE__ */ jsx11("div", { className: clsx5("flex w-full flex-col", mobile_section_alignment, sectionAlignmentClasses), children: /* @__PURE__ */ jsxs7(
    "div",
    {
      className: clsx5(
        "text-card flex flex-col",
        flexItemAlignmentClasses,
        ySpacing,
        `text-${has_mobile_text_alignment ? mobile_text_alignment : text_alignment}`,
        `md:text-${text_alignment} md:${section_max_width}`
      ),
      style: custom_max_width ? { maxWidth: `${custom_max_width}rem` } : {},
      children: [
        add_icon && /* @__PURE__ */ jsx11("div", { className: "relative !mb-2 flex h-8 w-8 items-center justify-center md:!mb-3", children: /* @__PURE__ */ jsx11(WpImage, { image: icon, fill: true, className: "h-full w-full object-contain" }) }),
        subheading && /* @__PURE__ */ jsx11(
          SubheadingTag,
          {
            className: clsx5("text-15 w-full font-heading tracking-[0.011em] opacity-80", subheading_classes || ""),
            dangerouslySetInnerHTML: { __html: subheading }
          }
        ),
        heading && /* @__PURE__ */ jsx11(
          HighlightedText_default,
          {
            tag: HeadingTag,
            content: heading,
            className: clsx5("w-full", `text-${headingFontSize} ${heading_classes || ""} md:${heading_max_width}`),
            color: heading_highlighted_color
          }
        ),
        content && /* @__PURE__ */ jsx11(
          "div",
          {
            className: clsx5(
              "w-full font-body opacity-80",
              content_font_size ? `text-${content_font_size}` : "text-18",
              content_classes || "",
              `md:${content_max_width || ""}`
            ),
            dangerouslySetInnerHTML: { __html: content }
          }
        ),
        (links == null ? void 0 : links.length) > 0 && ((_d = (_c = (_b = (_a = links[0]) == null ? void 0 : _a.link) == null ? void 0 : _b.link) == null ? void 0 : _c.url) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsx11("div", { className: "!md:mt-8 !mt-6 lg:!mt-[3.4375rem]", children: /* @__PURE__ */ jsx11(LinkGroup_default, { centered: true, links, className: headingFontSize === "h1" ? "md:pt-4" : "pt-2" }) })
      ]
    }
  ) });
}
var TextCard_default = TextCard;

// src/components/elements/index.ts
init_PillTag();
init_PostTag();
init_PodcastSpring();
init_PostAsideSubscribe();

// src/components/elements/CustomLines.tsx
import clsx8 from "clsx";
import { jsx as jsx16 } from "react/jsx-runtime";

// src/components/elements/index.ts
init_Icons();

// src/components/elements/WpHotkey.tsx
import { useHotkeys } from "react-hotkeys-hook";

// src/components/elements/index.ts
init_TextStrokeStack();
init_Wp();

// src/components/global/Header.tsx
init_context();
import { useState as useState7, useContext as useContext2, useEffect as useEffect7 } from "react";
import { usePathname as usePathname2 } from "next/navigation";
import dynamic from "next/dynamic";
import { Squash as Hamburger } from "hamburger-react";
import { m as m15, LazyMotion as LazyMotion7, domAnimation as domAnimation7, AnimatePresence as AnimatePresence3 } from "framer-motion";
import clsx16 from "clsx";

// src/components/global/header/ScrollHeader.tsx
init_context();
import { useMotionValueEvent, useScroll, m as m3, useMotionValue, useSpring, useMotionTemplate, LazyMotion as LazyMotion3, domAnimation as domAnimation3 } from "framer-motion";
import { useContext } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
function ScrollHeader({ className = "", setIsScrolled, children, blockScroll = false, showDesktopMenu, showMobileNav, bgColor }) {
  const [context] = useContext(GlobalContext);
  const { blockHeader } = context;
  const yMotionValue = useMotionValue(0);
  const ySpring = useSpring(yMotionValue, {
    damping: 24,
    stiffness: 150
  });
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    const scrollOffset = 2;
    const scrollDifference = latest - prev;
    if (showDesktopMenu || showMobileNav) {
      yMotionValue.set(0);
    } else if (blockHeader || latest > 100 && latest > prev) {
      yMotionValue.set(-100);
    } else if (latest > 120 && scrollDifference < -scrollOffset) {
      yMotionValue.set(0);
    } else {
      yMotionValue.set(0);
    }
    if (latest > 250) {
      setIsScrolled(true);
    } else setIsScrolled(false);
  });
  const yTemplate = useMotionTemplate`translateY(${ySpring}%)`;
  return /* @__PURE__ */ jsx18(LazyMotion3, { features: domAnimation3, children: /* @__PURE__ */ jsx18(
    m3.header,
    {
      animate: {
        backgroundColor: bgColor,
        transition: {
          type: "easeInOut",
          duration: bgColor === "#FFFFFF" ? 0.3 : 0.2
        }
      },
      style: {
        transform: blockScroll ? "translateY(0%)" : yTemplate
      },
      className,
      children
    }
  ) });
}
var ScrollHeader_default = ScrollHeader;

// src/components/global/header/HeaderElements/HeaderLogo.tsx
import Link2 from "next/link";
import { LazyMotion as LazyMotion4, m as m4, AnimatePresence, domAnimation as domAnimation4 } from "framer-motion";

// src/components/global/Logo.tsx
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
function Logo() {
  return /* @__PURE__ */ jsxs11("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 64 64", fill: "none", children: [
    /* @__PURE__ */ jsx19("g", { clipPath: "url(#clip0_3689_48605)", children: /* @__PURE__ */ jsx19(
      "path",
      {
        d: "M38.6051 43.9082H41.401V54.5962H38.6051V43.9082ZM31.6934 37.3328C36.6197 37.3328 41.3442 35.3657 44.8277 31.8642C48.3111 28.3627 50.2681 23.6137 50.2681 18.6619C50.2677 17.7159 50.1969 16.7712 50.0563 15.8358H32.6855L27.0469 21.5126H36.8972C36.4052 22.4249 35.6847 23.1922 34.8069 23.7385C33.9291 24.2847 32.9246 24.591 31.8929 24.627C30.8611 24.663 29.8379 24.4275 28.9246 23.9437C28.0112 23.46 27.2395 22.7448 26.6857 21.869L22.5275 26.0487C23.8963 27.7654 25.7152 29.0635 27.7789 29.7962C29.8427 30.529 32.0691 30.6673 34.2069 30.1956C36.3447 29.7238 38.3088 28.6608 39.8774 27.1266C41.4461 25.5923 42.5568 23.6478 43.0844 21.5126H44.295C43.6791 24.2733 42.1839 26.7566 40.0364 28.5855C37.889 30.4145 35.2065 31.4892 32.3962 31.6466C29.5859 31.804 26.8012 31.0354 24.4649 29.4576C22.1286 27.8797 20.3683 25.5788 19.4511 22.904C18.5338 20.2292 18.5099 17.3266 19.3828 14.6369C20.2557 11.9472 21.9778 9.61714 24.2877 8.00054C26.5977 6.38393 29.3692 5.56902 32.1818 5.67949C34.9943 5.78996 37.6941 6.8198 39.8715 8.61266L43.8848 4.57862C41.6212 2.6024 38.9153 1.20639 35.9982 0.509889C33.0812 -0.18661 30.0398 -0.162895 27.1339 0.579008C24.2279 1.32091 21.5439 2.75894 19.3111 4.77023C17.0783 6.78152 15.3631 9.30627 14.312 12.1287C13.261 14.9512 12.9054 17.9875 13.2756 20.9782C13.6458 23.9688 14.7308 26.8249 16.4378 29.3024C18.1449 31.78 20.4233 33.8052 23.0784 35.2052C25.7335 36.6052 28.6863 37.3382 31.6845 37.3417L31.6934 37.3328ZM14.6058 45.9701H8.76202L5.93713 48.8186H11.6828C11.3758 49.764 10.7703 50.5828 9.9582 51.1508C9.14608 51.7188 8.17173 52.0048 7.18316 51.9654C6.19459 51.926 5.24582 51.5634 4.48096 50.9326C3.71609 50.3018 3.17694 49.4374 2.94538 48.4705C2.71383 47.5037 2.80254 46.4873 3.19802 45.5757C3.59351 44.6642 4.27417 43.9073 5.13661 43.42C5.99905 42.9327 6.99614 42.7417 7.97643 42.8759C8.95673 43.0102 9.86665 43.4623 10.568 44.1637L12.5746 42.1467C11.3259 40.8964 9.67215 40.1382 7.91423 40.0101C6.15631 39.8819 4.41104 40.3924 2.99593 41.4485C1.58081 42.5047 0.589898 44.0363 0.203455 45.7649C-0.182989 47.4934 0.0607191 49.304 0.890242 50.8672C1.71977 52.4304 3.07998 53.6423 4.72343 54.2825C6.36687 54.9226 8.18434 54.9485 9.84518 54.3554C11.506 53.7623 12.8999 52.5897 13.7731 51.0508C14.6464 49.5118 14.9411 47.709 14.6035 45.9701H14.6058ZM25.0536 59.2286C25.0536 60.3985 24.173 61.2053 22.8865 61.2053H20.8174V63.8947H19.8253V57.243H22.8887C24.1752 57.243 25.0447 58.0498 25.0447 59.2376L25.0536 59.2286ZM24.0503 59.2286C24.0503 58.5563 23.5598 58.1081 22.7839 58.1081H20.8174V60.3604H22.7839C23.5509 60.3694 24.0414 59.9323 24.0414 59.2376L24.0503 59.2286ZM16.0572 60.0937L14.9893 59.9234C14.1376 59.7799 13.8076 59.5245 13.8076 58.9821C13.8076 58.3927 14.385 57.9938 15.2457 57.9938C16.0383 58.0138 16.8011 58.302 17.4106 58.8118L17.9591 58.0498C17.1872 57.4679 16.2484 57.1533 15.2836 57.1533C13.8076 57.1533 12.8422 57.9064 12.8422 59.065C12.8422 60.0242 13.4397 60.5957 14.6504 60.7952L15.7652 60.9767C16.7283 61.1381 17.1029 61.4249 17.1029 62.0211C17.1029 62.6777 16.4496 63.1416 15.4954 63.1416C14.6727 63.1416 13.9347 62.801 13.2167 62.0973L12.6103 62.801C12.9812 63.1791 13.4231 63.4795 13.9103 63.6849C14.3974 63.8904 14.9203 63.9967 15.4486 63.9978C17.0271 63.9978 18.0862 63.1797 18.0862 61.9538C18.0817 60.9117 17.4485 60.3313 16.0483 60.1027L16.0572 60.0937ZM41.1245 39.9078C40.8647 39.6491 40.5236 39.4889 40.1595 39.4546C39.7953 39.4203 39.4306 39.514 39.1275 39.7197C38.8243 39.9254 38.6015 40.2304 38.4971 40.5828C38.3926 40.9351 38.4129 41.313 38.5545 41.6519C38.6962 41.9909 38.9504 42.27 39.2738 42.4417C39.5972 42.6134 39.9699 42.667 40.3282 42.5935C40.6866 42.5199 41.0085 42.3237 41.2391 42.0384C41.4697 41.753 41.5947 41.396 41.5928 41.0284C41.5918 40.8204 41.5491 40.6147 41.4671 40.4236C41.3851 40.2326 41.2655 40.0602 41.1156 39.9168L41.1245 39.9078ZM31.6934 12.696C32.824 12.6956 33.9309 13.0223 34.8817 13.6373L39.0399 9.45757C37.124 7.90839 34.7726 7.00304 32.3174 6.86926C29.8621 6.73548 27.4271 7.38002 25.3559 8.71195C23.2846 10.0439 21.6818 11.9959 20.7735 14.2927C19.8652 16.5894 19.6973 19.1148 20.2935 21.5126H26.4694C25.977 20.604 25.7282 19.5821 25.7475 18.5476C25.7669 17.513 26.0537 16.5013 26.5798 15.6119C27.1059 14.7225 27.8531 13.986 28.7481 13.4747C29.6431 12.9635 30.655 12.6951 31.6845 12.696H31.6934ZM50.1098 51.3152C49.8701 51.6519 49.5505 51.9231 49.1801 52.1041C48.7822 52.2951 48.3455 52.3902 47.9047 52.382C47.6101 52.3955 47.3158 52.3478 47.0403 52.2418C46.7648 52.1357 46.5141 51.9736 46.3039 51.7657C46.0993 51.5467 45.9406 51.2887 45.8372 51.0069C45.7337 50.725 45.6877 50.4252 45.7019 50.1251V43.9082H42.8948V50.5353C42.8751 51.1003 42.9699 51.6634 43.1735 52.1905C43.377 52.7175 43.685 53.1974 44.0787 53.6011C44.4735 53.9989 44.9453 54.3108 45.4651 54.5174C45.9848 54.7241 46.5412 54.8211 47.0998 54.8024C47.656 54.8079 48.2086 54.7138 48.7319 54.5245C49.2303 54.3433 49.6935 54.0764 50.1009 53.7356V54.5962H52.8968V43.9082H50.1009L50.1098 51.3152ZM50.3974 60.0937L49.3294 59.9234C48.4777 59.7799 48.1455 59.5245 48.1455 58.9821C48.1455 58.3927 48.723 57.9938 49.5836 57.9938C50.3764 58.0131 51.1394 58.3013 51.7485 58.8118L52.297 58.0498C51.5252 57.4679 50.5863 57.1533 49.6215 57.1533C48.1478 57.1533 47.1823 57.9064 47.1823 59.065C47.1823 60.0242 47.7776 60.5957 48.9883 60.7952L50.1031 60.9767C51.0685 61.1381 51.4409 61.4249 51.4409 62.0211C51.4409 62.6777 50.7876 63.1416 49.8333 63.1416C49.0106 63.1416 48.2726 62.801 47.5524 62.0973L46.9482 62.801C47.3186 63.1792 47.76 63.4798 48.2469 63.6852C48.7337 63.8906 49.2563 63.9969 49.7843 63.9978C51.3651 63.9978 52.4241 63.1797 52.4241 61.9538C52.4219 60.9117 51.7887 60.3313 50.3885 60.1027L50.3974 60.0937ZM62.3636 49.2421C61.7973 48.7088 60.9976 48.3666 59.9646 48.2157L57.9245 47.9087C57.5323 47.8816 57.1513 47.7659 56.8097 47.5703C56.7005 47.4971 56.612 47.3966 56.553 47.2788C56.494 47.1609 56.4664 47.0297 56.473 46.8979C56.4749 46.7438 56.5179 46.5931 56.5975 46.4614C56.6771 46.3298 56.7905 46.222 56.9257 46.1494C57.2952 45.9414 57.7155 45.842 58.1385 45.8625C58.6866 45.863 59.2311 45.9492 59.7528 46.118C60.3356 46.3141 60.8962 46.5718 61.425 46.8867L62.7627 45.0826C62.1126 44.6534 61.4056 44.3184 60.6624 44.0875C59.9281 43.8634 59.1646 43.7509 58.3972 43.7536C57.0505 43.7536 55.9758 44.0614 55.1732 44.677C54.7881 44.9584 54.4771 45.33 54.2673 45.7596C54.0575 46.1892 53.9552 46.6638 53.9692 47.1422C53.9526 47.527 54.0178 47.9109 54.1604 48.2684C54.303 48.6259 54.5199 48.9487 54.7964 49.2152C55.3478 49.7352 56.1468 50.0773 57.1932 50.2417L59.2355 50.5487C59.5954 50.5794 59.9423 50.6987 60.2455 50.8961C60.3466 50.9722 60.428 51.0716 60.4831 51.1858C60.5382 51.3 60.5653 51.4258 60.5621 51.5527C60.5567 51.7295 60.5008 51.901 60.4012 52.0468C60.3016 52.1927 60.1624 52.3066 60.0003 52.3752C59.5328 52.6 59.0174 52.7054 58.4997 52.6823C57.9294 52.6804 57.3637 52.5795 56.8275 52.3842C56.1989 52.1528 55.6001 51.8466 55.0439 51.4721L53.6571 53.3389C54.3014 53.8407 55.0356 54.2135 55.8198 54.4371C56.7013 54.6943 57.6153 54.8219 58.5332 54.8158C59.1628 54.8209 59.7896 54.731 60.3927 54.5491C60.9225 54.393 61.4202 54.1425 61.862 53.8096C62.2593 53.5086 62.589 53.1268 62.8296 52.689C63.0683 52.2598 63.192 51.7756 63.1886 51.2838C63.2013 50.9049 63.1335 50.5276 62.9897 50.1771C62.846 49.8265 62.6295 49.5109 62.3547 49.2511L62.3636 49.2421ZM23.6646 51.5909L25.5018 53.2717C24.305 54.3016 22.7714 54.85 21.1964 54.8114C20.4214 54.8181 19.6525 54.6719 18.9334 54.3811C18.2595 54.1102 17.6429 53.7132 17.1163 53.2112C16.5913 52.7006 16.1751 52.0881 15.893 51.4108C15.6109 50.7334 15.4688 50.0055 15.4753 49.2713C15.4705 48.5297 15.6123 47.7946 15.8923 47.1086C16.303 46.1034 17.0037 45.2447 17.9041 44.6432C18.8045 44.0417 19.8634 43.7249 20.9445 43.7334C21.6657 43.7292 22.3792 43.8821 23.0359 44.1817C23.6681 44.4649 24.2375 44.8726 24.7103 45.3807C25.1915 45.9079 25.5657 46.5246 25.8117 47.196C26.0821 47.928 26.2173 48.7034 26.2108 49.4842V50.2215H18.298C18.4741 50.871 18.8619 51.4424 19.3994 51.8441C19.9537 52.2573 20.6291 52.4734 21.3191 52.4582C21.7637 52.4626 22.2055 52.3867 22.6234 52.2341C23.0114 52.0952 23.3661 51.8761 23.6646 51.5909ZM18.2779 48.2045H23.4818C23.3216 47.6017 22.9834 47.0617 22.5119 46.6559C22.0635 46.26 21.4855 46.0445 20.8888 46.0508C20.2857 46.0376 19.6984 46.2455 19.2366 46.6357C18.7612 47.0445 18.4258 47.5934 18.2779 48.2045ZM40.5738 58.126H42.8993V63.8969H43.8937V58.126H46.2192V57.243H40.5605L40.5738 58.126ZM32.8684 60.5688C32.8737 61.2548 32.6762 61.927 32.3011 62.5001C31.926 63.0732 31.39 63.5215 30.7612 63.7881C30.1324 64.0547 29.4389 64.1277 28.7688 63.9978C28.0986 63.8679 27.4819 63.5409 26.9968 63.0584C26.5117 62.5758 26.1801 61.9593 26.0439 61.2871C25.9077 60.6149 25.9731 59.9171 26.2318 59.2823C26.4905 58.6475 26.9309 58.1041 27.4972 57.7211C28.0634 57.3381 28.73 57.1327 29.4125 57.1309C29.8649 57.1244 30.3141 57.2086 30.7337 57.3786C31.1534 57.5487 31.5351 57.8012 31.8565 58.1213C32.1779 58.4414 32.4325 58.8228 32.6055 59.243C32.7785 59.6633 32.8663 60.114 32.8639 60.5688H32.8684ZM31.8561 60.5688C31.8439 60.088 31.6909 59.6215 31.4164 59.2276C31.1419 58.8337 30.7581 58.5298 30.3128 58.3539C29.8674 58.1779 29.3804 58.1378 28.9126 58.2385C28.4447 58.3392 28.0167 58.5762 27.6821 58.9199C27.3474 59.2637 27.121 59.6989 27.031 60.1713C26.941 60.6436 26.9914 61.1322 27.176 61.5759C27.3606 62.0196 27.6712 62.3988 28.069 62.6661C28.4667 62.9334 28.934 63.077 29.4125 63.0789C29.7384 63.0812 30.0613 63.0173 30.3621 62.8912C30.6629 62.7652 30.9352 62.5794 31.1629 62.3451C31.3907 62.1108 31.569 61.8327 31.6873 61.5275C31.8057 61.2223 31.8616 60.8962 31.8517 60.5688H31.8561ZM34.3087 54.6052H37.1068V47.958C37.131 47.3956 37.0389 46.8343 36.8363 46.3095C36.6338 45.7847 36.3252 45.3079 35.9301 44.909C35.5349 44.5101 35.0618 44.1979 34.5406 43.9921C34.0194 43.7863 33.4614 43.6914 32.9018 43.7133C32.3495 43.707 31.8003 43.7972 31.2787 43.98C30.7837 44.1561 30.3239 44.4194 29.9208 44.7576V43.9082H27.1294V54.5962H29.9253V47.2005C30.1649 46.8632 30.4845 46.5912 30.855 46.4094C31.2468 46.2215 31.6763 46.1272 32.1103 46.1337C32.4048 46.1198 32.699 46.1672 32.9744 46.2729C33.2499 46.3785 33.5007 46.5402 33.7111 46.7478C33.9147 46.9638 34.0729 47.2188 34.1763 47.4975C34.2797 47.7763 34.3263 48.0731 34.3131 48.3703L34.3087 54.6052ZM38.1213 61.035L39.5973 63.8969H38.4981L37.1313 61.165H35.2696V63.8947H34.2775V57.243H37.283C38.5984 57.243 39.488 58.0408 39.488 59.2107C39.4912 59.6228 39.3596 60.0246 39.1135 60.3542C38.8674 60.6838 38.5203 60.923 38.1257 61.035H38.1213ZM37.1938 60.3402C37.9697 60.3402 38.4802 59.892 38.4802 59.2197C38.4802 58.5473 37.9697 58.0991 37.1938 58.0991H35.2652V60.3223L37.1938 60.3402Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ jsx19("defs", { children: /* @__PURE__ */ jsx19("clipPath", { id: "clip0_3689_48605", children: /* @__PURE__ */ jsx19("rect", { width: "63.2", height: "64", fill: "currentColor" }) }) })
  ] });
}
function HeaderLogoTop() {
  return /* @__PURE__ */ jsxs11("svg", { width: "100%", height: "100%", viewBox: "0 0 63 39", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx19("g", { clipPath: "url(#clip0_4007_2215)", children: /* @__PURE__ */ jsx19(
      "path",
      {
        d: "M38.6041 43.9077H41.4V54.5956H38.6041V43.9077ZM31.6924 37.3322C36.6187 37.3322 41.3433 35.3651 44.8267 31.8636C48.3101 28.3621 50.2671 23.6131 50.2671 18.6613C50.2667 17.7153 50.1959 16.7707 50.0553 15.8353H32.6846L27.0459 21.512H36.8963C36.4043 22.4243 35.6837 23.1916 34.8059 23.7379C33.9282 24.2841 32.9237 24.5904 31.8919 24.6265C30.8601 24.6625 29.8369 24.4269 28.9236 23.9431C28.0103 23.4594 27.2385 22.7442 26.6847 21.8684L22.5265 26.0481C23.8953 27.7649 25.7142 29.0629 27.7779 29.7956C29.8417 30.5284 32.0681 30.6667 34.2059 30.195C36.3437 29.7232 38.3078 28.6603 39.8765 27.126C41.4451 25.5917 42.5559 23.6472 43.0834 21.512H44.294C43.6781 24.2727 42.1829 26.756 40.0355 28.5849C37.888 30.4139 35.2055 31.4886 32.3952 31.646C29.5849 31.8034 26.8003 31.0348 24.464 29.457C22.1277 27.8791 20.3673 25.5782 19.4501 22.9034C18.5329 20.2286 18.5089 17.326 19.3818 14.6363C20.2547 11.9466 21.9768 9.61656 24.2868 7.99996C26.5967 6.38335 29.3683 5.56844 32.1808 5.67891C34.9933 5.78938 37.6932 6.81922 39.8705 8.61208L43.8838 4.57804C41.6202 2.60182 38.9143 1.20581 35.9973 0.509309C33.0802 -0.18719 30.0388 -0.163474 27.1329 0.578428C24.227 1.32033 21.5429 2.75836 19.3101 4.76965C17.0773 6.78094 15.3621 9.30569 14.311 12.1282C13.26 14.9506 12.9044 17.9869 13.2746 20.9776C13.6448 23.9682 14.7298 26.8243 16.4369 29.3019C18.1439 31.7794 20.4224 33.8047 23.0774 35.2046C25.7325 36.6046 28.6853 37.3377 31.6835 37.3412L31.6924 37.3322ZM14.6048 45.9695H8.76104L5.93615 48.818H11.6818C11.3749 49.7634 10.7693 50.5823 9.95722 51.1502C9.1451 51.7182 8.17076 52.0042 7.18219 51.9648C6.19362 51.9254 5.24484 51.5628 4.47998 50.932C3.71512 50.3013 3.17596 49.4368 2.94441 48.47C2.71286 47.5031 2.80156 46.4867 3.19705 45.5752C3.59253 44.6636 4.27319 43.9067 5.13563 43.4194C5.99807 42.9321 6.99516 42.7411 7.97546 42.8753C8.95575 43.0096 9.86567 43.4617 10.567 44.1632L12.5736 42.1461C11.3249 40.8958 9.67118 40.1376 7.91326 40.0095C6.15534 39.8813 4.41006 40.3918 2.99495 41.4479C1.57984 42.5041 0.588921 44.0358 0.202478 45.7643C-0.183965 47.4929 0.0597425 49.3034 0.889266 50.8666C1.71879 52.4298 3.079 53.6417 4.72245 54.2819C6.36589 54.9221 8.18336 54.948 9.8442 54.3549C11.505 53.7618 12.8989 52.5891 13.7722 51.0502C14.6454 49.5113 14.9401 47.7084 14.6026 45.9695H14.6048ZM25.0527 59.228C25.0527 60.3979 24.172 61.2047 22.8855 61.2047H20.8164V63.8941H19.8243V57.2424H22.8877C24.1742 57.2424 25.0437 58.0492 25.0437 59.237L25.0527 59.228ZM24.0493 59.228C24.0493 58.5557 23.5588 58.1075 22.7829 58.1075H20.8164V60.3598H22.7829C23.5499 60.3688 24.0404 59.9318 24.0404 59.237L24.0493 59.228ZM16.0563 60.0931L14.9883 59.9228C14.1366 59.7794 13.8066 59.5239 13.8066 58.9815C13.8066 58.3921 14.3841 57.9932 15.2447 57.9932C16.0374 58.0132 16.8001 58.3014 17.4096 58.8112L17.9581 58.0492C17.1862 57.4673 16.2474 57.1528 15.2826 57.1528C13.8066 57.1528 12.8412 57.9058 12.8412 59.0644C12.8412 60.0236 13.4387 60.5951 14.6494 60.7946L15.7642 60.9761C16.7274 61.1375 17.1019 61.4244 17.1019 62.0205C17.1019 62.6771 16.4487 63.1411 15.4944 63.1411C14.6717 63.1411 13.9337 62.8004 13.2158 62.0967L12.6093 62.8004C12.9803 63.1785 13.4221 63.4789 13.9093 63.6844C14.3964 63.8898 14.9193 63.9961 15.4476 63.9972C17.0261 63.9972 18.0852 63.1792 18.0852 61.9533C18.0807 60.9111 17.4475 60.3307 16.0473 60.1021L16.0563 60.0931ZM41.1236 39.9072C40.8637 39.6485 40.5227 39.4883 40.1585 39.454C39.7943 39.4197 39.4296 39.5134 39.1265 39.7191C38.8233 39.9249 38.6006 40.2299 38.4961 40.5822C38.3916 40.9345 38.4119 41.3124 38.5536 41.6514C38.6952 41.9903 38.9494 42.2694 39.2728 42.4411C39.5962 42.6128 39.9689 42.6664 40.3272 42.5929C40.6856 42.5194 41.0075 42.3232 41.2381 42.0378C41.4687 41.7524 41.5937 41.3955 41.5918 41.0278C41.5908 40.8198 41.5481 40.6141 41.4661 40.4231C41.3841 40.232 41.2646 40.0596 41.1146 39.9162L41.1236 39.9072ZM31.6924 12.6954C32.823 12.695 33.9299 13.0218 34.8807 13.6367L39.0389 9.45699C37.123 7.90781 34.7716 7.00246 32.3164 6.86868C29.8612 6.7349 27.4261 7.37944 25.3549 8.71137C23.2837 10.0433 21.6808 11.9953 20.7725 14.2921C19.8642 16.5888 19.6963 19.1142 20.2925 21.512H26.4685C25.976 20.6034 25.7272 19.5816 25.7466 18.547C25.7659 17.5124 26.0527 16.5007 26.5788 15.6113C27.1049 14.7219 27.8521 13.9854 28.7471 13.4742C29.6421 12.9629 30.6541 12.6945 31.6835 12.6954H31.6924ZM50.1088 51.3146C49.8691 51.6513 49.5495 51.9225 49.1791 52.1035C48.7812 52.2945 48.3446 52.3897 47.9038 52.3814C47.6091 52.395 47.3148 52.3472 47.0393 52.2412C46.7639 52.1351 46.5132 51.973 46.3029 51.7651C46.0983 51.5461 45.9396 51.2881 45.8362 51.0063C45.7328 50.7245 45.6868 50.4246 45.7009 50.1246V43.9077H42.8939V50.5347C42.8742 51.0997 42.969 51.6628 43.1725 52.1899C43.376 52.7169 43.684 53.1969 44.0778 53.6006C44.4725 53.9983 44.9444 54.3102 45.4641 54.5169C45.9838 54.7235 46.5403 54.8205 47.0989 54.8018C47.655 54.8073 48.2076 54.7132 48.7309 54.5239C49.2293 54.3428 49.6926 54.0758 50.0999 53.735V54.5956H52.8958V43.9077H50.0999L50.1088 51.3146ZM50.3964 60.0931L49.3285 59.9228C48.4768 59.7794 48.1445 59.5239 48.1445 58.9815C48.1445 58.3921 48.722 57.9932 49.5826 57.9932C50.3754 58.0125 51.1384 58.3008 51.7476 58.8112L52.296 58.0492C51.5242 57.4673 50.5854 57.1528 49.6205 57.1528C48.1468 57.1528 47.1814 57.9058 47.1814 59.0644C47.1814 60.0236 47.7767 60.5951 48.9873 60.7946L50.1021 60.9761C51.0675 61.1375 51.4399 61.4244 51.4399 62.0205C51.4399 62.6771 50.7866 63.1411 49.8323 63.1411C49.0096 63.1411 48.2716 62.8004 47.5515 62.0967L46.9473 62.8004C47.3176 63.1786 47.7591 63.4792 48.2459 63.6846C48.7327 63.8901 49.2553 63.9963 49.7833 63.9972C51.3641 63.9972 52.4231 63.1792 52.4231 61.9533C52.4209 60.9111 51.7877 60.3307 50.3875 60.1021L50.3964 60.0931ZM62.3627 49.2416C61.7963 48.7082 60.9967 48.366 59.9636 48.2151L57.9235 47.9081C57.5313 47.881 57.1503 47.7653 56.8087 47.5697C56.6995 47.4965 56.6111 47.3961 56.552 47.2782C56.493 47.1604 56.4655 47.0291 56.4721 46.8973C56.4739 46.7433 56.5169 46.5925 56.5965 46.4609C56.6762 46.3292 56.7895 46.2214 56.9247 46.1488C57.2943 45.9409 57.7145 45.8415 58.1376 45.8619C58.6856 45.8624 59.2302 45.9486 59.7518 46.1174C60.3347 46.3135 60.8952 46.5712 61.424 46.8861L62.7617 45.082C62.1116 44.6528 61.4046 44.3178 60.6615 44.087C59.9271 43.8628 59.1636 43.7503 58.3962 43.753C57.0495 43.753 55.9749 44.0608 55.1722 44.6764C54.7871 44.9578 54.4761 45.3294 54.2663 45.759C54.0565 46.1886 53.9542 46.6632 53.9682 47.1416C53.9516 47.5264 54.0168 47.9103 54.1594 48.2678C54.3021 48.6253 54.5189 48.9481 54.7954 49.2147C55.3469 49.7346 56.1458 50.0768 57.1922 50.2411L59.2345 50.5481C59.5945 50.5789 59.9413 50.6982 60.2445 50.8955C60.3456 50.9716 60.4271 51.071 60.4821 51.1852C60.5372 51.2994 60.5643 51.4253 60.5611 51.5522C60.5557 51.729 60.4999 51.9005 60.4002 52.0463C60.3006 52.1921 60.1615 52.3061 59.9993 52.3747C59.5318 52.5994 59.0164 52.7049 58.4988 52.6817C57.9285 52.6798 57.3628 52.579 56.8266 52.3836C56.1979 52.1522 55.5991 51.846 55.0429 51.4715L53.6561 53.3384C54.3005 53.8401 55.0346 54.2129 55.8188 54.4365C56.7004 54.6937 57.6143 54.8213 58.5322 54.8153C59.1618 54.8203 59.7886 54.7304 60.3917 54.5486C60.9216 54.3925 61.4192 54.142 61.861 53.809C62.2583 53.508 62.5881 53.1262 62.8286 52.6884C63.0673 52.2592 63.191 51.775 63.1876 51.2832C63.2003 50.9043 63.1326 50.527 62.9888 50.1765C62.845 49.826 62.6285 49.5103 62.3537 49.2505L62.3627 49.2416ZM23.6636 51.5903L25.5008 53.2711C24.304 54.301 22.7705 54.8494 21.1955 54.8108C20.4204 54.8175 19.6515 54.6714 18.9324 54.3805C18.2585 54.1096 17.6419 53.7126 17.1153 53.2106C16.5903 52.7001 16.1741 52.0875 15.892 51.4102C15.6099 50.7329 15.4678 50.0049 15.4743 49.2707C15.4696 48.5292 15.6113 47.7941 15.8913 47.108C16.3021 46.1028 17.0027 45.2442 17.9031 44.6427C18.8035 44.0411 19.8624 43.7243 20.9435 43.7329C21.6647 43.7286 22.3782 43.8815 23.0349 44.1811C23.6671 44.4643 24.2365 44.872 24.7093 45.3801C25.1906 45.9073 25.5647 46.524 25.8107 47.1954C26.0811 47.9274 26.2164 48.7028 26.2098 49.4836V50.2209H18.297C18.4731 50.8705 18.861 51.4418 19.3984 51.8435C19.9527 52.2568 20.6281 52.4728 21.3181 52.4576C21.7627 52.462 22.2045 52.3861 22.6224 52.2335C23.0104 52.0947 23.3652 51.8755 23.6636 51.5903ZM18.2769 48.2039H23.4808C23.3206 47.6011 22.9824 47.0612 22.5109 46.6553C22.0626 46.2594 21.4845 46.0439 20.8878 46.0502C20.2847 46.037 19.6974 46.245 19.2357 46.6351C18.7602 47.044 18.4248 47.5928 18.2769 48.2039ZM40.5729 58.1254H42.8983V63.8963H43.8927V58.1254H46.2182V57.2424H40.5595L40.5729 58.1254ZM32.8674 60.5682C32.8727 61.2542 32.6753 61.9264 32.3001 62.4995C31.925 63.0726 31.3891 63.5209 30.7602 63.7875C30.1314 64.0542 29.4379 64.1271 28.7678 63.9972C28.0976 63.8673 27.481 63.5404 26.9959 63.0578C26.5108 62.5752 26.1791 61.9587 26.0429 61.2865C25.9067 60.6143 25.9721 59.9165 26.2309 59.2817C26.4896 58.6469 26.9299 58.1035 27.4962 57.7205C28.0624 57.3375 28.729 57.1321 29.4115 57.1303C29.8639 57.1238 30.3131 57.208 30.7328 57.378C31.1524 57.5481 31.5341 57.8006 31.8555 58.1207C32.1769 58.4409 32.4315 58.8222 32.6045 59.2425C32.7775 59.6627 32.8653 60.1134 32.8629 60.5682H32.8674ZM31.8552 60.5682C31.8429 60.0875 31.6899 59.621 31.4155 59.227C31.141 58.8331 30.7571 58.5292 30.3118 58.3533C29.8665 58.1774 29.3795 58.1372 28.9116 58.2379C28.4437 58.3386 28.0157 58.5756 27.6811 58.9193C27.3464 59.2631 27.12 59.6983 27.03 60.1707C26.94 60.643 26.9904 61.1316 27.1751 61.5753C27.3597 62.019 27.6702 62.3982 28.068 62.6655C28.4658 62.9328 28.9331 63.0764 29.4115 63.0783C29.7374 63.0806 30.0604 63.0167 30.3611 62.8907C30.6619 62.7646 30.9343 62.5788 31.162 62.3445C31.3897 62.1102 31.568 61.8321 31.6864 61.5269C31.8047 61.2217 31.8606 60.8956 31.8507 60.5682H31.8552ZM34.3077 54.6046H37.1058V47.9574C37.13 47.395 37.0379 46.8337 36.8354 46.3089C36.6328 45.7842 36.3242 45.3073 35.9291 44.9084C35.534 44.5095 35.0609 44.1974 34.5396 43.9915C34.0184 43.7857 33.4604 43.6908 32.9008 43.7127C32.3485 43.7064 31.7993 43.7966 31.2777 43.9794C30.7827 44.1555 30.3229 44.4189 29.9199 44.7571V43.9077H27.1284V54.5956H29.9243V47.1999C30.164 46.8626 30.4835 46.5907 30.8541 46.4088C31.2458 46.221 31.6754 46.1266 32.1093 46.1331C32.4038 46.1193 32.698 46.1666 32.9735 46.2723C33.2489 46.378 33.4997 46.5396 33.7102 46.7472C33.9137 46.9632 34.0719 47.2182 34.1753 47.4969C34.2788 47.7757 34.3253 48.0725 34.3122 48.3698L34.3077 54.6046ZM38.1203 61.0344L39.5963 63.8963H38.4971L37.1304 61.1644H35.2687V63.8941H34.2765V57.2424H37.282C38.5974 57.2424 39.487 58.0402 39.487 59.2101C39.4903 59.6222 39.3587 60.024 39.1125 60.3536C38.8664 60.6832 38.5193 60.9224 38.1248 61.0344H38.1203ZM37.1928 60.3396C37.9687 60.3396 38.4793 59.8914 38.4793 59.2191C38.4793 58.5467 37.9687 58.0985 37.1928 58.0985H35.2642V60.3217L37.1928 60.3396Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ jsx19("defs", { children: /* @__PURE__ */ jsx19("clipPath", { id: "clip0_4007_2215", children: /* @__PURE__ */ jsx19("rect", { width: "63", height: "39", fill: "currentColor" }) }) })
  ] });
}
function HeaderLogoBottom() {
  return /* @__PURE__ */ jsxs11("svg", { width: "100%", height: "100%", viewBox: "0 0 64 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx19("g", { clipPath: "url(#clip0_4007_2213)", children: /* @__PURE__ */ jsx19(
      "path",
      {
        d: "M39.0925 5.59367H41.9238V16.4486H39.0925V5.59367ZM32.0933 -1.08456C37.0819 -1.08456 41.8663 -3.0824 45.3938 -6.63857C48.9214 -10.1948 50.9031 -15.018 50.9031 -20.0472C50.9027 -21.008 50.831 -21.9674 50.6886 -22.9174H33.098L27.388 -17.1519H37.363C36.8648 -16.2253 36.1351 -15.4461 35.2462 -14.8913C34.3573 -14.3365 33.3401 -14.0254 32.2953 -13.9888C31.2505 -13.9523 30.2143 -14.1915 29.2894 -14.6828C28.3645 -15.1741 27.583 -15.9005 27.0222 -16.79L22.8114 -12.545C24.1975 -10.8014 26.0394 -9.48308 28.1293 -8.73888C30.2191 -7.99467 32.4737 -7.85419 34.6386 -8.33329C36.8035 -8.81239 38.7924 -9.89199 40.3809 -11.4502C41.9694 -13.0085 43.0943 -14.9833 43.6284 -17.1519H44.8544C44.2307 -14.3481 42.7166 -11.826 40.5419 -9.9685C38.3673 -8.11097 35.6509 -7.01944 32.805 -6.85959C29.9591 -6.69975 27.1392 -7.48032 24.7733 -9.08281C22.4075 -10.6853 20.6248 -13.0222 19.696 -15.7388C18.7672 -18.4554 18.7429 -21.4033 19.6269 -24.1351C20.5108 -26.8668 22.2547 -29.2332 24.5939 -30.8751C26.9331 -32.517 29.7397 -33.3446 32.5878 -33.2324C35.436 -33.1202 38.17 -32.0743 40.3749 -30.2534L44.439 -34.3505C42.1468 -36.3576 39.4066 -37.7754 36.4526 -38.4828C33.4987 -39.1902 30.4188 -39.1661 27.476 -38.4126C24.5333 -37.6591 21.8153 -36.1986 19.5542 -34.1559C17.2932 -32.1132 15.5562 -29.549 14.4919 -26.6824C13.4276 -23.8158 13.0675 -20.7321 13.4423 -17.6947C13.8172 -14.6573 14.9159 -11.7566 16.6446 -9.24035C18.3733 -6.72412 20.6806 -4.6672 23.3692 -3.24535C26.0579 -1.8235 29.0481 -1.079 32.0842 -1.07545L32.0933 -1.08456ZM14.7894 7.68773H8.87164L6.01099 10.5807H11.8294C11.5186 11.5409 10.9054 12.3725 10.083 12.9494C9.26057 13.5262 8.27389 13.8167 7.2728 13.7767C6.27172 13.7367 5.31094 13.3684 4.53639 12.7278C3.76185 12.0872 3.21587 11.2092 2.98138 10.2272C2.7469 9.24528 2.83673 8.213 3.23722 7.28721C3.63771 6.36141 4.32699 5.59268 5.20034 5.09779C6.0737 4.60289 7.08341 4.40887 8.07612 4.54521C9.06882 4.68154 9.99026 5.14078 10.7005 5.85315L12.7325 3.80461C11.468 2.53476 9.7933 1.76471 8.01313 1.63457C6.23296 1.50443 4.46559 2.02284 3.03256 3.09549C1.59954 4.16814 0.596079 5.72375 0.204744 7.47931C-0.186591 9.23487 0.0602021 11.0737 0.900226 12.6613C1.74025 14.2489 3.11768 15.4798 4.78193 16.13C6.44618 16.7801 8.28665 16.8065 9.96851 16.2041C11.6504 15.6017 13.0619 14.4107 13.9462 12.8478C14.8305 11.2848 15.1289 9.45376 14.7871 7.68773H14.7894ZM25.3695 21.1534C25.3695 22.3416 24.4777 23.161 23.1749 23.161H21.0796V25.8924H20.0749V19.1368H23.1772C24.4799 19.1368 25.3605 19.9562 25.3605 21.1625L25.3695 21.1534ZM24.3535 21.1534C24.3535 20.4706 23.8568 20.0153 23.071 20.0153H21.0796V22.3029H23.071C23.8477 22.312 24.3444 21.8681 24.3444 21.1625L24.3535 21.1534ZM16.2592 22.032L15.1777 21.859C14.3152 21.7134 13.9811 21.4539 13.9811 20.903C13.9811 20.3044 14.5659 19.8993 15.4374 19.8993C16.2401 19.9196 17.0125 20.2123 17.6297 20.7301L18.1851 19.9562C17.4035 19.3652 16.4528 19.0457 15.4758 19.0457C13.9811 19.0457 13.0034 19.8105 13.0034 20.9873C13.0034 21.9615 13.6085 22.5419 14.8345 22.7445L15.9634 22.9288C16.9388 23.0927 17.3181 23.3841 17.3181 23.9895C17.3181 24.6564 16.6566 25.1276 15.6902 25.1276C14.8571 25.1276 14.1098 24.7816 13.3828 24.0669L12.7686 24.7816C13.1443 25.1656 13.5917 25.4707 14.085 25.6794C14.5784 25.888 15.1078 25.996 15.6428 25.9971C17.2414 25.9971 18.3138 25.1663 18.3138 23.9212C18.3093 22.8628 17.6681 22.2733 16.2502 22.0411L16.2592 22.032ZM41.6438 1.53074C41.3807 1.26795 41.0353 1.10527 40.6665 1.07043C40.2978 1.03559 39.9284 1.13075 39.6215 1.33968C39.3145 1.54862 39.0889 1.8584 38.9831 2.21624C38.8773 2.57408 38.8979 2.95783 39.0413 3.30209C39.1847 3.64636 39.4421 3.92983 39.7696 4.1042C40.0972 4.27857 40.4745 4.33305 40.8374 4.25835C41.2003 4.18366 41.5263 3.9844 41.7598 3.69456C41.9933 3.40471 42.1199 3.0422 42.118 2.66881C42.117 2.45752 42.0737 2.24861 41.9907 2.0546C41.9077 1.8606 41.7866 1.68551 41.6348 1.53984L41.6438 1.53074ZM32.0933 -26.1063C33.2382 -26.1067 34.3591 -25.7748 35.3219 -25.1503L39.5328 -29.3953C37.5926 -30.9687 35.2114 -31.8882 32.7251 -32.0241C30.2389 -32.1599 27.773 -31.5053 25.6756 -30.1526C23.5781 -28.7998 21.955 -26.8173 21.0351 -24.4847C20.1153 -22.1521 19.9453 -19.5872 20.5491 -17.1519H26.8032C26.3045 -18.0747 26.0526 -19.1125 26.0722 -20.1633C26.0918 -21.214 26.3822 -22.2415 26.9149 -23.1448C27.4477 -24.0481 28.2044 -24.7961 29.1107 -25.3154C30.017 -25.8346 31.0418 -26.1072 32.0842 -26.1063H32.0933ZM50.7428 13.1163C50.5001 13.4583 50.1764 13.7337 49.8013 13.9175C49.3984 14.1116 48.9562 14.2082 48.5098 14.1998C48.2114 14.2136 47.9134 14.1651 47.6345 14.0574C47.3555 13.9497 47.1016 13.7851 46.8887 13.5738C46.6815 13.3515 46.5208 13.0894 46.4161 12.8032C46.3114 12.517 46.2648 12.2124 46.2791 11.9077V5.59367H43.4365V12.3242C43.4166 12.8981 43.5126 13.47 43.7187 14.0053C43.9248 14.5406 44.2367 15.028 44.6354 15.438C45.0351 15.842 45.513 16.1587 46.0393 16.3686C46.5656 16.5785 47.1291 16.677 47.6948 16.658C48.2579 16.6636 48.8176 16.5681 49.3475 16.3758C49.8522 16.1918 50.3213 15.9207 50.7338 15.5746V16.4486H53.5651V5.59367H50.7338L50.7428 13.1163ZM51.0341 22.032L49.9526 21.859C49.0901 21.7134 48.7537 21.4539 48.7537 20.903C48.7537 20.3044 49.3384 19.8993 50.21 19.8993C51.0128 19.9189 51.7855 20.2117 52.4023 20.7301L52.9577 19.9562C52.1761 19.3652 51.2254 19.0457 50.2483 19.0457C48.7559 19.0457 47.7783 19.8105 47.7783 20.9873C47.7783 21.9615 48.3811 22.5419 49.6071 22.7445L50.736 22.9288C51.7137 23.0927 52.0907 23.3841 52.0907 23.9895C52.0907 24.6564 51.4292 25.1276 50.4628 25.1276C49.6297 25.1276 48.8824 24.7816 48.1531 24.0669L47.5412 24.7816C47.9163 25.1657 48.3633 25.471 48.8563 25.6796C49.3493 25.8883 49.8785 25.9962 50.4132 25.9971C52.014 25.9971 53.0864 25.1663 53.0864 23.9212C53.0842 22.8628 52.4429 22.2733 51.025 22.0411L51.0341 22.032ZM63.1518 11.0109C62.5783 10.4692 61.7685 10.1217 60.7223 9.96843L58.6564 9.6566C58.2593 9.62909 57.8734 9.51161 57.5275 9.31289C57.4169 9.23857 57.3274 9.13657 57.2676 9.01687C57.2078 8.89718 57.1799 8.76389 57.1866 8.63005C57.1885 8.47357 57.232 8.32047 57.3127 8.18675C57.3933 8.05302 57.508 7.94357 57.6449 7.86982C58.0192 7.65863 58.4448 7.55768 58.8732 7.57847C59.4281 7.57899 59.9796 7.66653 60.5079 7.83795C61.0981 8.03712 61.6657 8.29883 62.2012 8.61867L63.5559 6.78637C62.8975 6.35047 62.1816 6.01026 61.429 5.77576C60.6854 5.54815 59.9122 5.43384 59.1351 5.43661C57.7714 5.43661 56.6831 5.7492 55.8703 6.37438C55.4803 6.66018 55.1654 7.03763 54.9529 7.47396C54.7405 7.91028 54.6368 8.3923 54.6511 8.87815C54.6343 9.26895 54.7003 9.65888 54.8447 10.0219C54.9891 10.385 55.2087 10.7128 55.4887 10.9836C56.0472 11.5117 56.8562 11.8592 57.9159 12.0261L59.984 12.3379C60.3485 12.3691 60.6998 12.4903 61.0068 12.6907C61.1092 12.768 61.1917 12.8689 61.2474 12.9849C61.3032 13.1009 61.3307 13.2287 61.3274 13.3576C61.3219 13.5372 61.2654 13.7113 61.1645 13.8594C61.0636 14.0075 60.9227 14.1233 60.7585 14.193C60.2851 14.4212 59.7632 14.5283 59.239 14.5048C58.6614 14.5028 58.0886 14.4004 57.5456 14.2021C56.909 13.967 56.3026 13.656 55.7393 13.2757L54.335 15.1717C54.9875 15.6813 55.731 16.0599 56.5251 16.287C57.4178 16.5482 58.3433 16.6778 59.2728 16.6717C59.9104 16.6768 60.5451 16.5855 61.1558 16.4008C61.6924 16.2423 62.1964 15.9879 62.6437 15.6497C63.0461 15.344 63.38 14.9562 63.6236 14.5116C63.8653 14.0757 63.9906 13.5839 63.9871 13.0845C64 12.6996 63.9314 12.3164 63.7858 11.9604C63.6402 11.6044 63.421 11.2838 63.1427 11.02L63.1518 11.0109ZM23.9629 13.3963L25.8233 15.1034C24.6113 16.1494 23.0584 16.7064 21.4635 16.6671C20.6786 16.674 19.9 16.5255 19.1718 16.2301C18.4894 15.955 17.8649 15.5518 17.3317 15.042C16.8 14.5234 16.3785 13.9013 16.0929 13.2134C15.8072 12.5255 15.6633 11.7862 15.6699 11.0405C15.6651 10.2874 15.8086 9.54079 16.0921 8.84401C16.5081 7.82309 17.2177 6.95105 18.1295 6.34014C19.0413 5.72923 20.1136 5.40742 21.2083 5.41613C21.9386 5.4118 22.6612 5.56711 23.3262 5.87136C23.9664 6.15897 24.543 6.57304 25.0218 7.0891C25.5091 7.62456 25.888 8.25085 26.1371 8.93278C26.411 9.6762 26.5479 10.4637 26.5413 11.2567V12.0056H18.5283C18.7067 12.6653 19.0994 13.2455 19.6437 13.6535C20.205 14.0732 20.8889 14.2926 21.5877 14.2772C22.0379 14.2817 22.4853 14.2046 22.9085 14.0496C23.3014 13.9086 23.6606 13.686 23.9629 13.3963ZM18.508 9.95705H23.7777C23.6155 9.34479 23.2731 8.79644 22.7956 8.38423C22.3415 7.98217 21.7562 7.76332 21.1519 7.76967C20.5412 7.7563 19.9465 7.96747 19.4789 8.36374C18.9974 8.77897 18.6577 9.33639 18.508 9.95705ZM41.0861 20.0336H43.441V25.8946H44.448V20.0336H46.8029V19.1368H41.0726L41.0861 20.0336ZM33.2831 22.5146C33.2885 23.2113 33.0886 23.8939 32.7087 24.476C32.3288 25.0581 31.7861 25.5133 31.1493 25.7841C30.5125 26.0549 29.8103 26.1291 29.1316 25.9971C28.453 25.8652 27.8285 25.5331 27.3373 25.043C26.846 24.5529 26.5102 23.9268 26.3723 23.244C26.2344 22.5613 26.3006 21.8527 26.5626 21.2079C26.8246 20.5632 27.2705 20.0113 27.8439 19.6224C28.4173 19.2334 29.0924 19.0248 29.7835 19.023C30.2417 19.0163 30.6965 19.1018 31.1215 19.2745C31.5464 19.4472 31.933 19.7037 32.2584 20.0288C32.5839 20.3539 32.8418 20.7412 33.0169 21.1681C33.1921 21.5949 33.2811 22.0527 33.2786 22.5146H33.2831ZM32.2581 22.5146C32.2457 22.0263 32.0908 21.5525 31.8128 21.1524C31.5349 20.7523 31.1461 20.4437 30.6952 20.265C30.2442 20.0863 29.7511 20.0456 29.2773 20.1478C28.8035 20.2501 28.3701 20.4908 28.0312 20.8399C27.6923 21.189 27.463 21.631 27.3718 22.1108C27.2807 22.5905 27.3318 23.0867 27.5187 23.5373C27.7057 23.988 28.0202 24.3731 28.423 24.6446C28.8258 24.9161 29.299 25.0619 29.7835 25.0638C30.1135 25.0661 30.4406 25.0013 30.7451 24.8733C31.0497 24.7452 31.3255 24.5566 31.5561 24.3186C31.7867 24.0806 31.9673 23.7982 32.0872 23.4882C32.207 23.1782 32.2636 22.8471 32.2536 22.5146H32.2581ZM34.7417 16.4577H37.5752V9.70667C37.5997 9.13551 37.5064 8.56545 37.3013 8.03246C37.0962 7.49948 36.7837 7.01514 36.3836 6.61004C35.9835 6.20494 35.5044 5.88788 34.9765 5.67886C34.4487 5.46983 33.8837 5.3734 33.317 5.39564C32.7577 5.38924 32.2015 5.48089 31.6733 5.66651C31.1721 5.84538 30.7065 6.11283 30.2983 6.45633V5.59367H27.4715V16.4486H30.3028V8.93733C30.5455 8.59474 30.8691 8.31858 31.2443 8.13385C31.641 7.9431 32.076 7.84729 32.5155 7.85388C32.8137 7.8398 33.1116 7.88793 33.3906 7.99524C33.6695 8.10255 33.9235 8.26675 34.1366 8.47755C34.3427 8.69693 34.5029 8.95589 34.6076 9.23901C34.7124 9.52213 34.7595 9.82361 34.7462 10.1255L34.7417 16.4577ZM38.6025 22.988L40.0972 25.8946H38.9841L37.6001 23.12H35.7148V25.8924H34.7101V19.1368H37.7536C39.0857 19.1368 39.9866 19.9471 39.9866 21.1352C39.9898 21.5538 39.8566 21.9618 39.6073 22.2966C39.3581 22.6313 39.0066 22.8743 38.6071 22.988H38.6025ZM37.6633 22.2824C38.449 22.2824 38.966 21.8272 38.966 21.1443C38.966 20.4615 38.449 20.0062 37.6633 20.0062H35.7103V22.2642L37.6633 22.2824Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ jsx19("defs", { children: /* @__PURE__ */ jsx19("clipPath", { id: "clip0_4007_2213", children: /* @__PURE__ */ jsx19("rect", { width: "64", height: "26", fill: "currentColor" }) }) })
  ] });
}

// src/components/global/header/HeaderElements/HeaderLogo.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
function HeaderLogo({ bgColor, isScrolled }) {
  const logoColor = [""];
  if (bgColor === "white" || bgColor === "brightGreen" || bgColor === "lightOrange" || bgColor === "lightBlue") {
    logoColor.push("text-blue");
  }
  const ease = [0.68, -0.2, 0.15, 0.98];
  return /* @__PURE__ */ jsx20(LazyMotion4, { features: domAnimation4, children: /* @__PURE__ */ jsx20("div", { className: `w-10 cursor-pointer lg:w-16 ${logoColor.join(" ")}`, children: /* @__PURE__ */ jsxs12(Link2, { href: "/", "aria-label": "Back to Home", children: [
    /* @__PURE__ */ jsx20(HeaderLogoTop, {}),
    /* @__PURE__ */ jsx20(AnimatePresence, { initial: false, children: !isScrolled && /* @__PURE__ */ jsx20(
      m4.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: 0.4,
          ease
        },
        children: /* @__PURE__ */ jsx20(HeaderLogoBottom, {})
      }
    ) })
  ] }) }) });
}
var HeaderLogo_default = HeaderLogo;

// src/components/global/header/HeaderElements/HeaderMenu.tsx
import clsx11 from "clsx";
import { m as m6 } from "framer-motion";

// src/components/global/header/HeaderElements/MenuItem.tsx
init_cmsUrlToNextHref();
import Link3 from "next/link";
import { m as m5 } from "framer-motion";
import clsx10 from "clsx";
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
function MenuItem({ openDesktopMenu, hoverMenuDesktop, item, int, selectedSubmenu, isScrolled }) {
  if (item.add_submenu) {
    return /* @__PURE__ */ jsx21("button", { type: "button", "aria-label": `Open ${item.menu_item.title} submenu`, onMouseEnter: () => openDesktopMenu(int), children: /* @__PURE__ */ jsx21(InnerItem, { item, int, selectedSubmenu, isScrolled }) });
  }
  return /* @__PURE__ */ jsx21(Link3, { href: cmsUrlToNextHref(item.menu_item.url), target: item.menu_item.target, onMouseEnter: () => hoverMenuDesktop(int), children: /* @__PURE__ */ jsx21(InnerItem, { item, int, selectedSubmenu, isScrolled }) });
}
function InnerItem({ item, int, selectedSubmenu, isScrolled }) {
  return /* @__PURE__ */ jsxs13(
    m5.span,
    {
      initial: {
        padding: "2.5rem 0"
      },
      animate: {
        padding: isScrolled ? "1.25rem 0" : "2.5rem 0",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 22
        }
      },
      className: clsx10("main-menu-item relative flex"),
      children: [
        /* @__PURE__ */ jsx21(
          "span",
          {
            style: {
              transform: "translateZ(0)"
            },
            dangerouslySetInnerHTML: { __html: item.menu_item.title }
          }
        ),
        selectedSubmenu === int ? /* @__PURE__ */ jsx21(
          m5.div,
          {
            transition: {
              type: "spring",
              stiffness: 180,
              damping: 22
            },
            className: "absolute inset-x-0 bottom-0 h-[0.1875rem] w-full bg-blue",
            layoutId: "activeNav"
          }
        ) : null
      ]
    }
  );
}
var MenuItem_default = MenuItem;

// src/components/global/header/HeaderElements/HeaderMenu.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function HeaderMenu({ openDesktopMenu, hoverMenuDesktop, menu, selectedSubmenu, isScrolled }) {
  return /* @__PURE__ */ jsx22(
    m6.div,
    {
      animate: {
        transition: {
          delay: 0.2,
          type: "spring",
          stiffness: 180,
          damping: 22
        }
      },
      className: clsx11("!mr-auto hidden flex-col justify-end lg:flex"),
      children: /* @__PURE__ */ jsx22("nav", { className: "flex items-end lg:space-x-6 xl:space-x-8", children: menu == null ? void 0 : menu.map((item, l) => /* @__PURE__ */ jsx22(
        MenuItem_default,
        {
          openDesktopMenu,
          hoverMenuDesktop,
          isScrolled,
          item,
          int: l,
          selectedSubmenu
        },
        item.menu_item.title
      )) })
    }
  );
}
var HeaderMenu_default = HeaderMenu;

// src/components/global/Header.tsx
init_HeaderButtons();
init_SubmenuWrapper();

// src/components/global/header/SubmenuHandler.tsx
import React7 from "react";

// src/components/global/header/SubmenuAnimation.tsx
import clsx13 from "clsx";
import { m as m8 } from "framer-motion";
import { jsx as jsx25 } from "react/jsx-runtime";
function SubmenuAnimation({ index, selectedSubmenu, children }) {
  return /* @__PURE__ */ jsx25(
    m8.div,
    {
      className: clsx13(
        "relative w-full transition-all duration-300",
        selectedSubmenu === index ? "opacity-100" : "pointer-events-none opacity-0",
        selectedSubmenu === index || selectedSubmenu === null ? "transform-none" : selectedSubmenu > index ? "-translate-x-16" : "translate-x-16"
      ),
      "aria-hidden": selectedSubmenu !== index,
      children
    },
    index
  );
}
var SubmenuAnimation_default = SubmenuAnimation;

// src/components/global/header/SubmenuHandler.tsx
init_TabsSubmenu();
init_GridSubmenu();
init_CardSubmenu();
init_LearnSubmenu();
import { jsx as jsx37, jsxs as jsxs25 } from "react/jsx-runtime";
function SubmenuHandler({ menus, selectedSubmenu = null, setShowMobileNav }) {
  return /* @__PURE__ */ jsx37("div", { className: "container transform-gpu text-black duration-200", children: menus == null ? void 0 : menus.map((menu, i) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (selectedSubmenu === i && (menu == null ? void 0 : menu.add_submenu)) {
      return /* @__PURE__ */ jsxs25(React7.Fragment, { children: [
        ((_a = menu == null ? void 0 : menu.submenu) == null ? void 0 : _a.submenu_type) === "tabsMenu" && /* @__PURE__ */ jsx37(SubmenuAnimation_default, { selectedSubmenu, index: i, children: /* @__PURE__ */ jsx37(TabsSubmenu_default, { submenu: (_b = menu == null ? void 0 : menu.submenu) == null ? void 0 : _b.tabs_submenu, parentMenu: menu }) }),
        ((_c = menu == null ? void 0 : menu.submenu) == null ? void 0 : _c.submenu_type) === "gridMenu" && /* @__PURE__ */ jsx37(SubmenuAnimation_default, { selectedSubmenu, index: i, children: /* @__PURE__ */ jsx37(GridSubmenu_default, { submenu: (_d = menu == null ? void 0 : menu.submenu) == null ? void 0 : _d.grid_submenu, parentMenu: menu, setShowMobileNav }) }),
        ((_e = menu == null ? void 0 : menu.submenu) == null ? void 0 : _e.submenu_type) === "cardMenu" && /* @__PURE__ */ jsx37(SubmenuAnimation_default, { selectedSubmenu, index: i, children: /* @__PURE__ */ jsx37(CardSubmenu_default, { submenu: (_f = menu == null ? void 0 : menu.submenu) == null ? void 0 : _f.card_submenu, parentMenu: menu }) }),
        ((_g = menu == null ? void 0 : menu.submenu) == null ? void 0 : _g.submenu_type) === "learnMenu" && /* @__PURE__ */ jsx37(SubmenuAnimation_default, { selectedSubmenu, index: i, children: /* @__PURE__ */ jsx37(LearnSubmenu_default, { submenu: (_h = menu == null ? void 0 : menu.submenu) == null ? void 0 : _h.learn_submenu, parentMenu: menu }) })
      ] }, i);
    }
    return null;
  }) });
}
var SubmenuHandler_default = SubmenuHandler;

// src/components/global/Header.tsx
init_ColorHelpers();

// src/components/templates/SingleResource/components/ScrollProgress.tsx
import { useState as useState6 } from "react";
import { useScroll as useScroll2, LazyMotion as LazyMotion5, m as m13, domAnimation as domAnimation5, useTransform, useMotionValueEvent as useMotionValueEvent2 } from "framer-motion";
import { jsx as jsx38, jsxs as jsxs26 } from "react/jsx-runtime";
function ScrollProgressEnd() {
  return /* @__PURE__ */ jsxs26("svg", { xmlns: "http://www.w3.org/2000/svg", width: "34", height: "3", viewBox: "0 0 34 3", fill: "none", children: [
    /* @__PURE__ */ jsx38("path", { d: "M33 0V84", stroke: "#0000DC", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx38("path", { d: "M28.5801 0V84", stroke: "#0000DC" }),
    /* @__PURE__ */ jsx38("path", { d: "M24.1621 0V84", stroke: "#0000DC", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx38("path", { d: "M19.7422 0V84", stroke: "#0000DC", strokeWidth: "2" }),
    /* @__PURE__ */ jsx38("path", { d: "M15.3223 0V84", stroke: "#0000DC", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx38("path", { d: "M10.9023 0V84", stroke: "#0000DC", strokeWidth: "3" }),
    /* @__PURE__ */ jsx38("path", { d: "M6.48438 0V84", stroke: "#0000DC", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx38("path", { d: "M2.06445 0V84", stroke: "#0000DC", strokeWidth: "4" })
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll2();
  const [showScrollProgressEnd, setShowScrollProgressEnd] = useState6(false);
  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  useMotionValueEvent2(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setShowScrollProgressEnd(true);
    } else {
      setShowScrollProgressEnd(false);
    }
  });
  return /* @__PURE__ */ jsx38(LazyMotion5, { features: domAnimation5, children: /* @__PURE__ */ jsx38("div", { className: "scroll-progress-bar absolute inset-x-0 bottom-0 z-[9999] h-[3px] origin-left", children: /* @__PURE__ */ jsxs26("div", { className: "flex h-full", children: [
    /* @__PURE__ */ jsx38(m13.div, { className: "h-full w-full bg-blue", style: { width } }),
    showScrollProgressEnd && /* @__PURE__ */ jsx38(ScrollProgressEnd, {})
  ] }) }) });
}
var ScrollProgress_default = ScrollProgress;

// src/components/global/HeaderSpacer.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
function HeaderSpacer({ hasBanner }) {
  const spacerHeight = hasBanner ? "h-[125px] md:h-[150px] w-full" : "md:h-[104px] h-[68px] w-full";
  return /* @__PURE__ */ jsx39("div", { className: spacerHeight });
}
var HeaderSpacer_default = HeaderSpacer;

// src/components/global/Banner.tsx
init_ColorHelpers();
import Link11 from "next/link";
import clsx14 from "clsx";
import { jsx as jsx40, jsxs as jsxs27 } from "react/jsx-runtime";
function isDateBetween(currentDate, startDate, endDate) {
  return currentDate >= startDate && currentDate <= endDate;
}
function Banner(props) {
  const { link, background_colours, text_colours, show_toast_bar = false, schedule_toast_bar = false, start_date, end_date } = props;
  const isBannerDateBetween = schedule_toast_bar ? isDateBetween(/* @__PURE__ */ new Date(), new Date(start_date), new Date(end_date)) : false;
  if (!(link == null ? void 0 : link.url)) return null;
  if (!show_toast_bar) return null;
  if (schedule_toast_bar && !isBannerDateBetween) return null;
  const bannerBGColor = getBackgroundColor(background_colours);
  const bannerTextColor = getTextColor(text_colours);
  const svgTextColor = getTextColor(background_colours);
  const svgBGColor = getHexValue(text_colours);
  return /* @__PURE__ */ jsx40(
    Link11,
    {
      href: link == null ? void 0 : link.url,
      className: clsx14(
        "text-16 bannerPencil group mb-2 flex items-center justify-center px-5 py-1.5 font-heading md:mb-0 md:py-[11px]",
        bannerBGColor,
        bannerTextColor
      ),
      children: /* @__PURE__ */ jsxs27("div", { className: "relative", children: [
        /* @__PURE__ */ jsx40(
          "svg",
          {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: clsx14("absolute -left-10 top-0 z-10 h-6 w-6 scale-0 rounded-full transition-transform duration-200 group-hover:scale-100", svgTextColor),
            children: /* @__PURE__ */ jsxs27("g", { clipPath: "url(#clip0_5489_553)", children: [
              /* @__PURE__ */ jsx40("rect", { width: "26", height: "26", rx: "13", fill: svgBGColor }),
              /* @__PURE__ */ jsx40("path", { d: "M12.6053 9.41211L16.1925 12.9993M16.1925 12.9993L12.6053 16.5864M16.1925 12.9993H8.59619", stroke: "currentColor", strokeLinejoin: "round" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx40("span", { className: clsx14("text-16 mt-[1px] inline-block", bannerTextColor), dangerouslySetInnerHTML: { __html: link == null ? void 0 : link.title } })
      ] })
    }
  );
}

// src/components/global/Header.tsx
import { jsx as jsx43, jsxs as jsxs30 } from "react/jsx-runtime";
var MobileNav2 = dynamic(() => Promise.resolve().then(() => (init_MobileNav(), MobileNav_exports)));
function Header({
  bgColor = "white",
  blockScroll,
  addScrollProgress,
  showPageToast
}) {
  var _a, _b, _c, _d;
  const [context] = useContext2(GlobalContext);
  const pathname = usePathname2();
  const { header = [] } = (context == null ? void 0 : context.options) || {};
  const [showMobileNav, setShowMobileNav] = useState7(false);
  const [isScrolled, setIsScrolled] = useState7(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState7(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState7(-1);
  const [hoveredMenuItem, setHoveredMenuItem] = useState7(-1);
  const openDesktopMenu = (index) => {
    setSelectedSubmenu(index !== null ? index : -1);
    setShowDesktopMenu(index !== null);
    setHoveredMenuItem(index !== null ? index : -1);
  };
  const hoverMenuDesktop = (index) => {
    setShowDesktopMenu(null);
    setHoveredMenuItem(index !== null ? index : -1);
  };
  const closeDesktopMenu = () => {
    setSelectedSubmenu(-1);
    setHoveredMenuItem(-1);
    setShowDesktopMenu(false);
  };
  const closeMobileMenu = () => {
    setShowMobileNav(false);
  };
  useEffect7(() => {
    closeDesktopMenu();
    closeMobileMenu();
  }, [pathname]);
  const selectedColor = isScrolled ? "white" : bgColor;
  const headerBgTextColor = getBackgroundAndTextColor(selectedColor);
  const actualMenu = selectedSubmenu > -1 ? header == null ? void 0 : header.menu[selectedSubmenu] : null;
  const hasBanner = Boolean((_b = (_a = context == null ? void 0 : context.options) == null ? void 0 : _a.header) == null ? void 0 : _b.toast_bar.show_toast_bar_on_all_pages) || showPageToast;
  return /* @__PURE__ */ jsx43(LazyMotion7, { features: domAnimation7, children: /* @__PURE__ */ jsxs30("div", { className: "font-heading", children: [
    /* @__PURE__ */ jsx43(HeaderSpacer_default, { hasBanner }),
    /* @__PURE__ */ jsxs30(
      ScrollHeader_default,
      {
        blockScroll,
        setIsScrolled,
        showMobileNav,
        showDesktopMenu,
        bgColor: showDesktopMenu || showMobileNav ? "#FFFFFF" : getHexValue(selectedColor),
        className: clsx16(
          "fixed inset-x-0 top-0 z-50 w-full py-2 md:py-3 lg:py-0",
          hasBanner && "!pt-0",
          (showDesktopMenu || showMobileNav) && "!text-navy",
          headerBgTextColor
        ),
        children: [
          hasBanner && /* @__PURE__ */ jsx43(Banner, __spreadValues({}, (_d = (_c = context == null ? void 0 : context.options) == null ? void 0 : _c.header) == null ? void 0 : _d.toast_bar)),
          /* @__PURE__ */ jsx43("div", { className: "container h-full", onMouseLeave: () => closeDesktopMenu(), children: /* @__PURE__ */ jsxs30("div", { className: "flex h-full items-center justify-between space-x-4 lg:space-x-12 xl:space-x-16", children: [
            /* @__PURE__ */ jsx43(HeaderLogo_default, { bgColor: selectedColor, isScrolled }),
            /* @__PURE__ */ jsx43(
              HeaderMenu_default,
              {
                menu: header == null ? void 0 : header.menu,
                selectedSubmenu: hoveredMenuItem,
                openDesktopMenu,
                hoverMenuDesktop,
                isScrolled
              }
            ),
            /* @__PURE__ */ jsx43(HeaderButtons_default, { isSubmenuOpen: showDesktopMenu, isMobile: false, button: header == null ? void 0 : header.button, bgColor: selectedColor }),
            /* @__PURE__ */ jsx43(AnimatePresence3, { children: showDesktopMenu && /* @__PURE__ */ jsx43(SubmenuWrapper_default, { children: /* @__PURE__ */ jsx43(SubmenuHandler_default, { menus: header.menu, selectedSubmenu, setShowMobileNav }) }) }),
            /* @__PURE__ */ jsx43("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx43(
              "div",
              {
                className: "-mr-[15px] lg:hidden",
                onClick: () => setShowMobileNav(!showMobileNav),
                onKeyUp: ({ key }) => {
                  if (key === "Enter") {
                    setShowMobileNav(!showMobileNav);
                  }
                },
                role: "button",
                tabIndex: 0,
                children: /* @__PURE__ */ jsx43(
                  Hamburger,
                  {
                    size: 18,
                    toggled: showMobileNav,
                    label: `${showMobileNav ? "Hide menu" : "Show menu"}`,
                    "aria-expanded": showMobileNav,
                    "aria-controls": "menu"
                  }
                )
              }
            ) })
          ] }) }),
          addScrollProgress && !showMobileNav && /* @__PURE__ */ jsx43("div", { className: "absolute bottom-0 left-0 w-full translate-y-[-100%]", children: /* @__PURE__ */ jsx43(ScrollProgress_default, {}) })
        ]
      }
    ),
    /* @__PURE__ */ jsx43(
      MobileNav2,
      {
        showMobileNav,
        menu: header.menu,
        button: header == null ? void 0 : header.button,
        setShowMobileNav,
        selectedSubmenu,
        setSelectedSubmenu,
        hasBanner
      }
    ),
    /* @__PURE__ */ jsx43(AnimatePresence3, { children: showDesktopMenu && /* @__PURE__ */ jsx43(m15.div, { initial: { opacity: 0 }, animate: { opacity: 0.3 }, exit: { opacity: 0 }, className: "fixed inset-0 z-[30] bg-black" }) })
  ] }) });
}

// src/components/global/Footer/Footer.tsx
init_links();
init_trackEvent();
init_ColorHelpers();
init_Wp();
init_FeaturedLink();
import Link13 from "next/link";
import { LazyMotion as LazyMotion10, domAnimation as domAnimation10 } from "framer-motion";
import clsx19 from "clsx";

// src/components/global/Footer/components/FooterCTA/FooterCTA.tsx
init_ColorHelpers();
init_LinkGroup();
init_text();
import clsx18 from "clsx";
import { useInView as useInView3, m as m18 } from "framer-motion";
import { useEffect as useEffect8, useRef as useRef4, useState as useState9 } from "react";

// src/components/global/Footer/components/FooterCTA/components/Lines.tsx
import { LazyMotion as LazyMotion9, domAnimation as domAnimation9, m as m17 } from "framer-motion";
import { jsx as jsx45, jsxs as jsxs32 } from "react/jsx-runtime";
function FooterCTALinesDesktop({ height = null, width = null, isInView = false }) {
  return /* @__PURE__ */ jsx45(LazyMotion9, { features: domAnimation9, children: /* @__PURE__ */ jsxs32(
    "svg",
    {
      style: {
        transformBox: "fill-box"
      },
      width,
      height,
      viewBox: "0 0 508 501",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs32("g", { clipPath: "url(#clip0_3855_28126)", children: [
          /* @__PURE__ */ jsxs32(
            m17.g,
            {
              style: {
                transformBox: "fill-box"
              },
              initial: { scaleX: 0 },
              animate: {
                rotateY: 360,
                scaleX: isInView ? 1 : 0,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut"
                },
                transformOrigin: "right"
              },
              children: [
                /* @__PURE__ */ jsx45("path", { d: "M157.677 0.5V250.5", stroke: "white", strokeWidth: "0.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M176.387 0.5V250.5", stroke: "white" }),
                /* @__PURE__ */ jsx45("path", { d: "M195.097 0.5V250.5", stroke: "white", strokeWidth: "1.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M213.806 0.5V250.5", stroke: "white", strokeWidth: "2" }),
                /* @__PURE__ */ jsx45("path", { d: "M232.516 0.5V250.5", stroke: "white", strokeWidth: "2.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M251.226 0.5V250.5", stroke: "white", strokeWidth: "3" }),
                /* @__PURE__ */ jsx45("path", { d: "M269.935 0.5V250.5", stroke: "white", strokeWidth: "3.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M288.645 0.5V250.5", stroke: "white", strokeWidth: "4" }),
                /* @__PURE__ */ jsx45("path", { d: "M307.355 0.5V250.5", stroke: "white", strokeWidth: "4.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M326.064 0.5V250.5", stroke: "white", strokeWidth: "5" }),
                /* @__PURE__ */ jsx45("path", { d: "M344.774 0.5V250.5", stroke: "white", strokeWidth: "5.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M363.484 0.5V250.5", stroke: "white", strokeWidth: "6" }),
                /* @__PURE__ */ jsx45("path", { d: "M382.193 0.5V250.5", stroke: "white", strokeWidth: "6.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M400.903 0.5V250.5", stroke: "white", strokeWidth: "7" }),
                /* @__PURE__ */ jsx45("path", { d: "M419.613 0.5V250.5", stroke: "white", strokeWidth: "7.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M438.322 0.5V250.5", stroke: "white", strokeWidth: "8" }),
                /* @__PURE__ */ jsx45("path", { d: "M457.032 0.5V250.5", stroke: "white", strokeWidth: "8.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M475.742 0.5V250.5", stroke: "white", strokeWidth: "9" }),
                /* @__PURE__ */ jsx45("path", { d: "M494.451 0.5V250.5", stroke: "white", strokeWidth: "9.5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs32(
            m17.g,
            {
              style: {
                transformBox: "fill-box"
              },
              initial: { scaleX: 0 },
              animate: {
                scaleX: isInView ? 1 : 0,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut"
                },
                transformOrigin: "left"
              },
              children: [
                /* @__PURE__ */ jsx45("path", { d: "M494.452 250.5V500.5", stroke: "white", strokeWidth: "3" }),
                /* @__PURE__ */ jsx45("path", { d: "M475.742 250.5V500.5", stroke: "white", strokeWidth: "3.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M457.032 250.5V500.5", stroke: "white", strokeWidth: "4" }),
                /* @__PURE__ */ jsx45("path", { d: "M438.323 250.5V500.5", stroke: "white", strokeWidth: "4.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M419.613 250.5V500.5", stroke: "white", strokeWidth: "5" }),
                /* @__PURE__ */ jsx45("path", { d: "M400.903 250.5V500.5", stroke: "white", strokeWidth: "5.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M382.194 250.5V500.5", stroke: "white", strokeWidth: "6" }),
                /* @__PURE__ */ jsx45("path", { d: "M363.484 250.5V500.5", stroke: "white", strokeWidth: "6.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M344.774 250.5V500.5", stroke: "white", strokeWidth: "7" }),
                /* @__PURE__ */ jsx45("path", { d: "M326.064 250.5V500.5", stroke: "white", strokeWidth: "7.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M307.355 250.5V500.5", stroke: "white", strokeWidth: "8" }),
                /* @__PURE__ */ jsx45("path", { d: "M288.645 250.5V500.5", stroke: "white", strokeWidth: "8.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M269.936 250.5V500.5", stroke: "white", strokeWidth: "9" }),
                /* @__PURE__ */ jsx45("path", { d: "M251.226 250.5V500.5", stroke: "white", strokeWidth: "9.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M232.516 250.5V500.5", stroke: "white", strokeWidth: "10" }),
                /* @__PURE__ */ jsx45("path", { d: "M213.806 250.5V500.5", stroke: "white", strokeWidth: "10.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M195.097 250.5V500.5", stroke: "white", strokeWidth: "11" }),
                /* @__PURE__ */ jsx45("path", { d: "M176.387 250.5V500.5", stroke: "white", strokeWidth: "11.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M157.677 250.5V500.5", stroke: "white", strokeWidth: "12" }),
                /* @__PURE__ */ jsx45("path", { d: "M138.968 250.5V500.5", stroke: "white", strokeWidth: "12.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M120.258 250.5V500.5", stroke: "white", strokeWidth: "13" }),
                /* @__PURE__ */ jsx45("path", { d: "M101.548 250.5V500.5", stroke: "white", strokeWidth: "13.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M82.8386 250.5V500.5", stroke: "white", strokeWidth: "14" }),
                /* @__PURE__ */ jsx45("path", { d: "M64.1289 250.5V500.5", stroke: "white", strokeWidth: "14.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M45.4194 250.5V500.5", stroke: "white", strokeWidth: "15" }),
                /* @__PURE__ */ jsx45("path", { d: "M26.7097 250.5V500.5", stroke: "white", strokeWidth: "15.5" }),
                /* @__PURE__ */ jsx45("path", { d: "M8 250.5V500.5", stroke: "white", strokeWidth: "16" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx45("defs", { children: /* @__PURE__ */ jsx45("clipPath", { id: "clip0_3855_28126", children: /* @__PURE__ */ jsx45("rect", { width: "508", height: "501", fill: "white" }) }) })
      ]
    }
  ) });
}
function FooterCTALinesMobile({ width = null, height = null, isInView = false }) {
  return /* @__PURE__ */ jsx45(LazyMotion9, { features: domAnimation9, children: /* @__PURE__ */ jsxs32("svg", { width, height, viewBox: "0 0 375 182", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs32("g", { clipPath: "url(#clip0_3855_28194)", children: [
      /* @__PURE__ */ jsxs32(
        m17.g,
        {
          style: {
            transformBox: "fill-box"
          },
          initial: { scaleX: 0 },
          animate: {
            scaleX: isInView ? 1 : 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut"
            },
            transformOrigin: "left"
          },
          children: [
            /* @__PURE__ */ jsx45("path", { d: "M367.371 137.118V273.118", stroke: "white", strokeWidth: "1.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M353.339 137.118V273.118", stroke: "white", strokeWidth: "2.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M339.306 137.118V273.118", stroke: "white", strokeWidth: "2.625" }),
            /* @__PURE__ */ jsx45("path", { d: "M325.274 137.118V273.118", stroke: "white", strokeWidth: "3" }),
            /* @__PURE__ */ jsx45("path", { d: "M311.242 137.118V273.118", stroke: "white", strokeWidth: "3.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M297.21 137.118V273.118", stroke: "white", strokeWidth: "3.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M283.177 137.118V273.118", stroke: "white", strokeWidth: "4.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M269.145 137.118V273.118", stroke: "white", strokeWidth: "4.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M255.113 137.118V273.118", stroke: "white", strokeWidth: "4.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M241.081 137.118V273.118", stroke: "white", strokeWidth: "5.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M227.048 137.118V273.118", stroke: "white", strokeWidth: "5.625" }),
            /* @__PURE__ */ jsx45("path", { d: "M213.016 137.118V273.118", stroke: "white", strokeWidth: "6" }),
            /* @__PURE__ */ jsx45("path", { d: "M198.984 137.118V273.118", stroke: "white", strokeWidth: "6.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M184.952 137.118V273.118", stroke: "white", strokeWidth: "6.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M170.919 137.118V273.118", stroke: "white", strokeWidth: "7.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M156.887 137.118V273.118", stroke: "white", strokeWidth: "7.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M142.855 137.118V273.118", stroke: "white", strokeWidth: "7.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M128.823 137.118V273.118", stroke: "white", strokeWidth: "8.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M114.79 137.118V273.118", stroke: "white", strokeWidth: "8.625" }),
            /* @__PURE__ */ jsx45("path", { d: "M100.758 137.118V273.118", stroke: "white", strokeWidth: "9" }),
            /* @__PURE__ */ jsx45("path", { d: "M86.7258 137.118V273.118", stroke: "white", strokeWidth: "9.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M72.6936 137.118V273.118", stroke: "white", strokeWidth: "9.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M58.6613 137.118V273.118", stroke: "white", strokeWidth: "10.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M44.629 137.118V273.118", stroke: "white", strokeWidth: "10.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M30.5968 137.118V273.118", stroke: "white", strokeWidth: "10.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M16.5645 137.118V273.118", stroke: "white", strokeWidth: "11.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M2.53223 137.118V273.118", stroke: "white", strokeWidth: "11.625" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs32(
        m17.g,
        {
          style: {
            transformBox: "fill-box"
          },
          initial: { scaleX: 0 },
          animate: {
            rotateY: 360,
            scaleX: isInView ? 1 : 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut"
            },
            transformOrigin: "right"
          },
          children: [
            /* @__PURE__ */ jsx45("path", { d: "M59 0.118164V137.118", stroke: "white", strokeWidth: "0.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M73.0322 0.118164V137.118", stroke: "white", strokeWidth: "0.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M87.0646 0.118164V137.118", stroke: "white", strokeWidth: "1.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M101.097 0.118164V137.118", stroke: "white", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M115.129 0.118164V137.118", stroke: "white", strokeWidth: "1.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M129.161 0.118164V137.118", stroke: "white", strokeWidth: "2.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M143.194 0.118164V137.118", stroke: "white", strokeWidth: "2.625" }),
            /* @__PURE__ */ jsx45("path", { d: "M157.226 0.118164V137.118", stroke: "white", strokeWidth: "3" }),
            /* @__PURE__ */ jsx45("path", { d: "M171.258 0.118164V137.118", stroke: "white", strokeWidth: "3.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M185.29 0.118164V137.118", stroke: "white", strokeWidth: "3.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M199.323 0.118164V137.118", stroke: "white", strokeWidth: "4.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M213.355 0.118164V137.118", stroke: "white", strokeWidth: "4.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M227.387 0.118164V137.118", stroke: "white", strokeWidth: "4.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M241.419 0.118164V137.118", stroke: "white", strokeWidth: "5.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M255.452 0.118164V137.118", stroke: "white", strokeWidth: "5.625" }),
            /* @__PURE__ */ jsx45("path", { d: "M269.484 0.118164V137.118", stroke: "white", strokeWidth: "6" }),
            /* @__PURE__ */ jsx45("path", { d: "M283.516 0.118164V137.118", stroke: "white", strokeWidth: "6.375" }),
            /* @__PURE__ */ jsx45("path", { d: "M297.548 0.118164V137.118", stroke: "white", strokeWidth: "6.75" }),
            /* @__PURE__ */ jsx45("path", { d: "M311.581 0.118164V137.118", stroke: "white", strokeWidth: "7.125" }),
            /* @__PURE__ */ jsx45("path", { d: "M325.613 0.118164V137.118", stroke: "white", strokeWidth: "7.5" }),
            /* @__PURE__ */ jsx45("path", { d: "M339.645 0.118164V137.118", stroke: "white", strokeWidth: "7.875" }),
            /* @__PURE__ */ jsx45("path", { d: "M353.677 0.118164V137.118", stroke: "white", strokeWidth: "8.25" }),
            /* @__PURE__ */ jsx45("path", { d: "M367.71 0.118164V137.118", stroke: "white", strokeWidth: "8.625" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx45("defs", { children: /* @__PURE__ */ jsx45("clipPath", { id: "clip0_3855_28194", children: /* @__PURE__ */ jsx45("rect", { width: "375", height: "182", fill: "white" }) }) })
  ] }) });
}

// src/components/global/Footer/components/FooterCTA/FooterCTA.tsx
import { jsx as jsx46, jsxs as jsxs33 } from "react/jsx-runtime";
var bgColorTransitionMap = {
  "blue-to-bright-green": {
    initial: "blue",
    animated: "brightGreen"
  },
  "navy-to-light-blue": {
    initial: "navy",
    animated: "lightBlue"
  }
};
function FooterCTA({ CTA }) {
  var _a, _b, _c;
  const ctaRef = useRef4(null);
  const isCTAInView = useInView3(ctaRef, { amount: 0.8, once: true });
  const [dynamicLinks, setDynamicLinks] = useState9([]);
  useEffect8(() => {
    var _a2, _b2;
    const links = (_b2 = (_a2 = CTA == null ? void 0 : CTA.links) == null ? void 0 : _a2.links) == null ? void 0 : _b2.map((link) => {
      var _a3, _b3, _c2;
      return {
        link: __spreadProps(__spreadValues({}, link == null ? void 0 : link.link), {
          button: __spreadProps(__spreadValues({}, (_a3 = link == null ? void 0 : link.link) == null ? void 0 : _a3.button), {
            background_color: isCTAInView ? "navy" : (_c2 = (_b3 = link == null ? void 0 : link.link) == null ? void 0 : _b3.button) == null ? void 0 : _c2.background_color
          })
        })
      };
    });
    setDynamicLinks(links);
  }, [(_a = CTA == null ? void 0 : CTA.links) == null ? void 0 : _a.links, isCTAInView]);
  return /* @__PURE__ */ jsxs33(
    m18.div,
    {
      ref: ctaRef,
      animate: {
        backgroundColor: isCTAInView ? getHexValue((_b = bgColorTransitionMap[CTA == null ? void 0 : CTA.background_color_transition]) == null ? void 0 : _b.animated) : getHexValue((_c = bgColorTransitionMap[CTA == null ? void 0 : CTA.background_color_transition]) == null ? void 0 : _c.initial),
        transition: {
          duration: 1,
          ease: "easeInOut"
        }
      },
      className: clsx18("footer__cta relative flex flex-col overflow-hidden rounded-none pt-18 sm:pb-72 md:rounded-xl md:px-20 md:py-18.875"),
      children: [
        /* @__PURE__ */ jsx46("div", { className: "absolute right-0 top-0 hidden h-full sm:block", children: /* @__PURE__ */ jsx46(FooterCTALinesDesktop, { height: "100%", isInView: isCTAInView }) }),
        /* @__PURE__ */ jsx46(
          "h2",
          {
            className: clsx18(
              "text-72 relative mx-auto max-w-[70%] px-6 text-center font-heading transition-colors duration-[800ms] ease-linear sm:max-w-[80%] md:mx-0 md:text-left xl:max-w-[50%]",
              isCTAInView ? "text-navy" : "text-white"
            ),
            dangerouslySetInnerHTML: {
              __html: getSplitBreakText({
                text: (CTA == null ? void 0 : CTA.heading) || ""
              })
            }
          }
        ),
        /* @__PURE__ */ jsx46(
          "p",
          {
            className: clsx18(
              "text-20 relative mt-5 px-6 text-center font-body !leading-[1.5] transition-colors duration-[800ms] ease-linear md:text-left",
              isCTAInView ? "text-navy" : "text-white"
            ),
            dangerouslySetInnerHTML: {
              __html: getSplitBreakText({
                text: CTA == null ? void 0 : CTA.text
              })
            }
          }
        ),
        /* @__PURE__ */ jsx46("div", { className: "relative mt-8 px-6 md:mt-14", children: /* @__PURE__ */ jsx46(LinkGroup_default, { noFullWidthOnMobile: true, links: dynamicLinks }) }),
        /* @__PURE__ */ jsx46("div", { className: "mt-12 block w-full sm:hidden", children: /* @__PURE__ */ jsx46(FooterCTALinesMobile, { width: "100%", isInView: isCTAInView }) })
      ]
    }
  );
}
var FooterCTA_default = FooterCTA;

// src/components/global/Footer/Footer.tsx
import { jsx as jsx47, jsxs as jsxs34 } from "react/jsx-runtime";
function Footer(props) {
  var _a, _b, _c, _d, _e, _f;
  const { columns, social, terms, hideCTA = false, hideFeaturedLinks = false, CTA = {}, featuredLinks = [], bgColor } = props;
  const footerBgTextColor = getBackgroundAndTextColor(bgColor);
  return /* @__PURE__ */ jsx47(LazyMotion10, { features: domAnimation10, children: /* @__PURE__ */ jsxs34("div", { className: clsx19("footer font-heading pb-8 md:pb-16", footerBgTextColor), children: [
    !hideCTA && /* @__PURE__ */ jsx47("div", { className: clsx19("container--1376px container--no-mobile-padding container", "pb-18 pt-6 md:pb-24"), children: /* @__PURE__ */ jsx47(FooterCTA_default, { CTA }) }),
    /* @__PURE__ */ jsxs34("div", { className: "container", children: [
      !hideFeaturedLinks && /* @__PURE__ */ jsx47("div", { className: "footer__featured-links grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: ((_a = featuredLinks == null ? void 0 : featuredLinks.items) == null ? void 0 : _a.length) > 0 && ((_b = featuredLinks == null ? void 0 : featuredLinks.items) == null ? void 0 : _b.map((link, index) => /* @__PURE__ */ jsx47(FeaturedLink_default, { link, footer: true }, `footer-featured-link-${index}`))) }),
      /* @__PURE__ */ jsxs34("div", { className: "flex flex-col pt-18 md:flex-row md:py-24 lg:pb-51", children: [
        /* @__PURE__ */ jsx47("menu", { className: "grid w-full max-w-272 grid-cols-2 gap-x-6 gap-y-20 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: (columns == null ? void 0 : columns.length) > 0 && (columns == null ? void 0 : columns.map((col, i) => {
          var _a2, _b2;
          return (
            // Col
            /* @__PURE__ */ jsxs34("div", { children: [
              /* @__PURE__ */ jsx47(
                "h3",
                {
                  className: clsx19("text-14 mb-6 md:mb-10", bgColor === "navy" && "text-white/70", bgColor === "white" && "text-navy/70"),
                  dangerouslySetInnerHTML: {
                    __html: col.heading
                  }
                }
              ),
              /* @__PURE__ */ jsx47("div", { className: "flex flex-col gap-5", children: ((_a2 = col == null ? void 0 : col.links) == null ? void 0 : _a2.length) > 0 && ((_b2 = col == null ? void 0 : col.links) == null ? void 0 : _b2.map((link, index) => {
                var _a3, _b3, _c2;
                return /* @__PURE__ */ jsx47(
                  Link13,
                  {
                    href: ((_a3 = link == null ? void 0 : link.link) == null ? void 0 : _a3.url) || "",
                    target: ((_b3 = link == null ? void 0 : link.link) == null ? void 0 : _b3.target) ? "_blank" : "_self",
                    dangerouslySetInnerHTML: { __html: ((_c2 = link == null ? void 0 : link.link) == null ? void 0 : _c2.title) || "" },
                    className: clsx19(
                      bgColor === "navy" && "text-white hover:text-brightGreen",
                      bgColor === "white" && "text-navy hover:text-blue",
                      "text-17 transition-colors duration-300 ease-in-out "
                    ),
                    onClick: () => {
                      var _a4;
                      trackFooterMenuItemClick((_a4 = link == null ? void 0 : link.link) == null ? void 0 : _a4.title);
                    }
                  },
                  `footer-menu-link-${index}`
                );
              })) })
            ] }, `footer-menu-col-${i}`)
          );
        })) }),
        /* @__PURE__ */ jsx47("div", { className: "footer__social flex items-start justify-center space-x-1 py-18 sm:py-13 md:justify-start md:py-0", children: ((_c = social == null ? void 0 : social.links) == null ? void 0 : _c.length) > 0 && ((_d = social == null ? void 0 : social.links) == null ? void 0 : _d.map((link, index) => {
          var _a2, _b2;
          return /* @__PURE__ */ jsx47(
            Link13,
            {
              href: (_a2 = link == null ? void 0 : link.link) == null ? void 0 : _a2.url,
              target: getLinkTarget((_b2 = link == null ? void 0 : link.link) == null ? void 0 : _b2.target),
              className: clsx19(
                "group h-8 w-8 rounded-sm transition-colors duration-300 ease-in-out",
                bgColor === "navy" && "bg-white/5 hover:bg-white/20",
                bgColor === "white" && "bg-lightGrey hover:bg-navy"
              ),
              onClick: () => {
                var _a3;
                trackFooterMenuItemClick((_a3 = link == null ? void 0 : link.link) == null ? void 0 : _a3.title);
              },
              children: /* @__PURE__ */ jsx47(
                WpImage,
                {
                  image: link == null ? void 0 : link.image,
                  className: clsx19(
                    "h-full w-full object-contain transition-[filter] duration-1000 ease-in-out",
                    // Transition filter not working
                    bgColor === "navy" && "invert",
                    bgColor === "white" && "group-hover:invert"
                  )
                }
              )
            },
            `footer-social-link-${index}`
          );
        })) })
      ] }),
      /* @__PURE__ */ jsxs34(
        "div",
        {
          className: clsx19(
            "footer__terms text-15--clamp flex flex-col-reverse items-center justify-between gap-y-14 sm:gap-y-8 lg:flex-row lg:gap-y-3",
            bgColor === "navy" && "text-white/70",
            bgColor === "white" && "text-navy/70"
          ),
          children: [
            /* @__PURE__ */ jsxs34("p", { className: "max-w-44 text-center sm:max-w-full sm:text-left", children: [
              "\xA9 ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " ",
              terms == null ? void 0 : terms.content
            ] }),
            /* @__PURE__ */ jsx47("div", { className: "grid grid-cols-3 flex-wrap justify-center gap-x-6 gap-y-2 sm:flex sm:justify-start md:gap-10", children: ((_e = terms == null ? void 0 : terms.links) == null ? void 0 : _e.length) > 0 && ((_f = terms == null ? void 0 : terms.links) == null ? void 0 : _f.map((link, index) => {
              var _a2, _b2, _c2;
              return /* @__PURE__ */ jsx47(
                Link13,
                {
                  className: clsx19(
                    "transition-colors duration-300 ease-in-out",
                    bgColor === "navy" && "hover:text-brightGreen",
                    bgColor === "white" && "hover:text-blue"
                  ),
                  href: ((_a2 = link == null ? void 0 : link.link) == null ? void 0 : _a2.url) || "#",
                  target: getLinkTarget((_b2 = link == null ? void 0 : link.link) == null ? void 0 : _b2.target),
                  dangerouslySetInnerHTML: { __html: ((_c2 = link == null ? void 0 : link.link) == null ? void 0 : _c2.title) || "" },
                  onClick: () => {
                    var _a3;
                    trackFooterMenuItemClick((_a3 = link == null ? void 0 : link.link) == null ? void 0 : _a3.title);
                  }
                },
                `footer-terms-link-${index}`
              );
            })) })
          ]
        }
      )
    ] })
  ] }) });
}

// src/components/global/index.ts
init_MobileNav();

// src/components/global/Seo.tsx
import { NextSeo } from "next-seo";
import Head from "next/head";
import { jsx as jsx48, jsxs as jsxs35 } from "react/jsx-runtime";

// src/components/global/index.ts
init_Portal();
init_LightBoxOverlay();

// src/components/global/ExitPopup/ExitPopup.tsx
init_ColorHelpers();
import { useEffect as useEffect11, useState as useState10 } from "react";
init_Wp();
import { Fragment as Fragment6, jsx as jsx50, jsxs as jsxs37 } from "react/jsx-runtime";

// src/components/layouts/ComponentRenderer.tsx
import React39 from "react";

// src/components/flexible/content/ContentHandler.tsx
import React18 from "react";
import dynamic2 from "next/dynamic";
import { jsx as jsx88 } from "react/jsx-runtime";
var TwoColContent2 = dynamic2(() => Promise.resolve().then(() => (init_TwoColContent(), TwoColContent_exports)));
var RotatingHeading2 = dynamic2(() => Promise.resolve().then(() => (init_RotatingHeading(), RotatingHeading_exports)));
var FourColumnThumbnailGrid2 = dynamic2(() => Promise.resolve().then(() => (init_FourColumnThumbnailGrid(), FourColumnThumbnailGrid_exports)));
var MediaAndStats2 = dynamic2(() => Promise.resolve().then(() => (init_MediaAndStats(), MediaAndStats_exports)), { ssr: false });
var MosaicContent2 = dynamic2(() => Promise.resolve().then(() => (init_MosaicContent(), MosaicContent_exports)));
var LinkedTwoColContent2 = dynamic2(() => Promise.resolve().then(() => (init_LinkedTwoColContent(), LinkedTwoColContent_exports)));
var ProductSlideOut2 = dynamic2(() => Promise.resolve().then(() => (init_ProductSlideOut(), ProductSlideOut_exports)));
var ThreeColumnCardGrid2 = dynamic2(() => Promise.resolve().then(() => (init_ThreeColumnCardGrid(), ThreeColumnCardGrid_exports)));
var FourColumnListGrid2 = dynamic2(() => Promise.resolve().then(() => (init_FourColumnListGrid(), FourColumnListGrid_exports)));
var StatsGrid2 = dynamic2(() => Promise.resolve().then(() => (init_StatsGrid(), StatsGrid_exports)));
var IconGrid2 = dynamic2(() => Promise.resolve().then(() => (init_IconGrid(), IconGrid_exports)));
var FullWidthProductCallout2 = dynamic2(() => Promise.resolve().then(() => (init_FullWidthProductCallout(), FullWidthProductCallout_exports)));
var ProductGrid2 = dynamic2(() => Promise.resolve().then(() => (init_ProductGrid(), ProductGrid_exports)));
var StaggeredThumbnailGrid2 = dynamic2(() => Promise.resolve().then(() => (init_StaggeredThumbnailGrid(), StaggeredThumbnailGrid_exports)));
var ReportGrid2 = dynamic2(() => Promise.resolve().then(() => (init_ReportGrid(), ReportGrid_exports)));
var SubscribeContent2 = dynamic2(() => Promise.resolve().then(() => (init_SubscribeContent(), SubscribeContent_exports)), { ssr: false });
var PageLinkCard2 = dynamic2(() => Promise.resolve().then(() => (init_PageLinkCard(), PageLinkCard_exports)));
var HeadingAssetRow2 = dynamic2(() => Promise.resolve().then(() => (init_HeadingAssetRow(), HeadingAssetRow_exports)));
var FormEmbeds2 = dynamic2(() => Promise.resolve().then(() => (init_FormEmbeds(), FormEmbeds_exports)), { ssr: false });
var FeatureSlider2 = dynamic2(() => Promise.resolve().then(() => (init_FeatureSlider(), FeatureSlider_exports)));
function ContentHandler({ components, sectionBG }) {
  const layoutComponents = {
    text_card: TextCard_default,
    two_col_content: TwoColContent2,
    rotating_heading: RotatingHeading2,
    four_column_thumbnail_grid: FourColumnThumbnailGrid2,
    media_and_stats: MediaAndStats2,
    mosaic_content: MosaicContent2,
    linked_two_col_content: LinkedTwoColContent2,
    product_slide_out: ProductSlideOut2,
    three_column_card_grid: ThreeColumnCardGrid2,
    stats_grid: StatsGrid2,
    icon_grid: IconGrid2,
    full_width_product_callout: FullWidthProductCallout2,
    product_grid: ProductGrid2,
    staggered_thumbnail_grid: StaggeredThumbnailGrid2,
    report_grid: ReportGrid2,
    subscribe_content: SubscribeContent2,
    page_link_card: PageLinkCard2,
    heading_asset_row: HeadingAssetRow2,
    form_embeds: FormEmbeds2,
    feature_slider: FeatureSlider2,
    four_column_list_grid: FourColumnListGrid2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx88(React18.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx88(LayoutComponent, __spreadProps(__spreadValues({}, rest), { sectionBG }), index) }, index);
  });
}
var ContentHandler_default = ContentHandler;

// src/components/flexible/media/MediaHandler.tsx
import React19 from "react";
import dynamic3 from "next/dynamic";

// src/components/flexible/media/components/LogoMarquee.tsx
init_Wp();
import Marquee2 from "react-fast-marquee";
import { jsx as jsx89, jsxs as jsxs70 } from "react/jsx-runtime";
function LogoMarquee({ logos_large, logos, sectionBG }) {
  const maskColor = [""];
  if (sectionBG === "white") {
    maskColor.push("from-white");
  } else if (sectionBG === "navy") {
    maskColor.push("from-navy");
  } else if (sectionBG === "blue") {
    maskColor.push("from-blue");
  } else {
    maskColor.push("from-black");
  }
  return /* @__PURE__ */ jsxs70("div", { className: "relative ml-[-1.25rem] w-[calc(100%+2.5rem)] md:ml-0 md:w-full", children: [
    /* @__PURE__ */ jsxs70(Marquee2, { className: "relative z-10", speed: 35, children: [
      logos == null ? void 0 : logos.map((item) => {
        var _a;
        return /* @__PURE__ */ jsx89(MarqueeLogo, { logo: item == null ? void 0 : item.logo, logosLarge: logos_large }, `1${(_a = item == null ? void 0 : item.logo) == null ? void 0 : _a.url}`);
      }),
      logos == null ? void 0 : logos.map((item) => {
        var _a;
        return /* @__PURE__ */ jsx89(MarqueeLogo, { logo: item == null ? void 0 : item.logo, logosLarge: logos_large }, `2${(_a = item == null ? void 0 : item.logo) == null ? void 0 : _a.url}`);
      }),
      logos == null ? void 0 : logos.map((item) => {
        var _a;
        return /* @__PURE__ */ jsx89(MarqueeLogo, { logo: item == null ? void 0 : item.logo, logosLarge: logos_large }, `3${(_a = item == null ? void 0 : item.logo) == null ? void 0 : _a.url}`);
      })
    ] }),
    /* @__PURE__ */ jsxs70("div", { className: "absolute inset-0 z-[12] flex justify-between", children: [
      /* @__PURE__ */ jsx89("div", { className: `h-full w-[10%] bg-gradient-to-r lg:w-[5%] ${maskColor.join(" ")}` }),
      /* @__PURE__ */ jsx89("div", { className: `h-full w-[10%] bg-gradient-to-l lg:w-[5%] ${maskColor.join(" ")}` })
    ] })
  ] });
}
function MarqueeLogo({ logo, logosLarge = false }) {
  return /* @__PURE__ */ jsx89(
    "div",
    {
      className: `mr-12 flex max-w-[5rem] items-center  justify-center sm:mr-20 lg:mr-[7.5rem] lg:max-w-[7rem] ${logosLarge ? "h-8 md:h-10 lg:h-[2.8125rem]" : "h-5 lg:h-8"}`,
      children: /* @__PURE__ */ jsx89(WpImage, { image: logo, className: "h-full w-auto object-contain" })
    }
  );
}
var LogoMarquee_default = LogoMarquee;

// src/components/flexible/media/MediaHandler.tsx
init_Media();
import { jsx as jsx92 } from "react/jsx-runtime";
var TwoColumnMediaGrid2 = dynamic3(() => Promise.resolve().then(() => (init_TwoColumnMediaGrid(), TwoColumnMediaGrid_exports)));
var TextMediaBox2 = dynamic3(() => Promise.resolve().then(() => (init_TextMediaBox(), TextMediaBox_exports)));
function MediaHandler({ components, sectionBG }) {
  const layoutComponents = {
    logo_marquee: LogoMarquee_default,
    media: Media_default,
    two_column_media_grid: TwoColumnMediaGrid2,
    text_media_box: TextMediaBox2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx92(React19.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx92(LayoutComponent, __spreadProps(__spreadValues({}, rest), { sectionBG }), index) }, index);
  });
}
var MediaHandler_default = MediaHandler;

// src/components/flexible/customers/CustomersHandler.tsx
import React24 from "react";
import dynamic4 from "next/dynamic";
import { jsx as jsx109 } from "react/jsx-runtime";
var Quote2 = dynamic4(() => Promise.resolve().then(() => (init_Quote(), Quote_exports)));
var CustomersSlideOut2 = dynamic4(() => Promise.resolve().then(() => (init_CustomersSlideOut(), CustomersSlideOut_exports)));
var CustomerGrid2 = dynamic4(() => Promise.resolve().then(() => (init_CustomerGrid(), CustomerGrid_exports)));
var BlogIndex2 = dynamic4(() => Promise.resolve().then(() => (init_BlogIndex(), BlogIndex_exports)));
function CustomersHandler({ components }) {
  const layoutComponents = {
    quote: Quote2,
    customers_slide_out: CustomersSlideOut2,
    customer_grid: CustomerGrid2,
    customer_stories_index: BlogIndex2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    const extraProps = __spreadValues({}, layoutName === "customer_stories_index" && {
      hideAside: true,
      hidePostShare: true,
      hideTagFilters: true,
      colNumber: 3,
      topFiltersTaxonomyTermAccessor: "customer_stories_categories",
      postCategoriesAccessor: "customer_stories_categories",
      allLinkURL: "/customer-stories/",
      imageAccessor: "acf.media.thumbnail",
      hideCTAs: true,
      showCustomerLogos: true,
      paginationBasePath: "customer-stories"
    });
    return /* @__PURE__ */ jsx109(React24.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx109(LayoutComponent, __spreadValues(__spreadValues({}, rest), extraProps), index) }, index);
  });
}
var CustomersHandler_default = CustomersHandler;

// src/components/flexible/blog/BlogHandler.tsx
import React26 from "react";
import dynamic5 from "next/dynamic";
import { jsx as jsx123 } from "react/jsx-runtime";
var LearnPosts2 = dynamic5(() => Promise.resolve().then(() => (init_LearnPosts(), LearnPosts_exports)));
var FeaturedBlogPosts2 = dynamic5(() => Promise.resolve().then(() => (init_FeaturedBlogPostsSlider(), FeaturedBlogPostsSlider_exports)));
var BlogFeaturedRow2 = dynamic5(() => Promise.resolve().then(() => (init_BlogFeaturedRow(), BlogFeaturedRow_exports)));
var BlogFeaturedGrid2 = dynamic5(() => Promise.resolve().then(() => (init_BlogFeaturedGrid(), BlogFeaturedGrid_exports)));
var BlogIndex3 = dynamic5(() => Promise.resolve().then(() => (init_BlogIndex(), BlogIndex_exports)));
var NewsroomFeaturedRow2 = dynamic5(() => Promise.resolve().then(() => (init_NewsroomFeaturedRow(), NewsroomFeaturedRow_exports)));
var FeaturedMixedSlider2 = dynamic5(() => Promise.resolve().then(() => (init_FeaturedMixedSlider(), FeaturedMixedSlider_exports)));
function BlogHandler({ components }) {
  const layoutComponents = {
    learn_posts: LearnPosts2,
    featured_blog_posts: FeaturedBlogPosts2,
    blog_featured_row: BlogFeaturedRow2,
    blog_featured_grid: BlogFeaturedGrid2,
    blog_index: BlogIndex3,
    newsroom_featured_row: NewsroomFeaturedRow2,
    newsroom_index: BlogIndex3,
    featured_mixed_slider: FeaturedMixedSlider2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    const extraProps = __spreadValues({}, layoutName === "newsroom_index" && {
      hideAside: true,
      hidePostShare: true,
      hideTagFilters: true,
      colNumber: 3,
      topFiltersTaxonomyTermAccessor: "newsroom_categories",
      postCategoriesAccessor: "newsroom_categories",
      allLinkURL: "/newsroom/",
      paginationBasePath: "newsroom"
    });
    return /* @__PURE__ */ jsx123(React26.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx123(LayoutComponent, __spreadValues(__spreadValues({}, rest), extraProps), index) }, `blog-component-${index}`);
  });
}
var BlogHandler_default = BlogHandler;

// src/components/flexible/conversions/ConversionsHandler.tsx
import React29 from "react";
import dynamic6 from "next/dynamic";

// src/components/flexible/conversions/components/ContactSalesForm.tsx
import { useRef as useRef14 } from "react";
import Link36 from "next/link";
init_TextStrokeStack();
init_Icons();
import { LazyMotion as LazyMotion24, domAnimation as domAnimation21, useInView as useInView8 } from "framer-motion";
import clsx43 from "clsx";
import { jsx as jsx124, jsxs as jsxs99 } from "react/jsx-runtime";
function ContactSalesForm(props) {
  var _a, _b;
  const { content, form } = props;
  const ref = useRef14(null);
  const isInView = useInView8(ref, { amount: 0.6, once: true });
  return /* @__PURE__ */ jsx124(LazyMotion24, { features: domAnimation21, children: /* @__PURE__ */ jsxs99("div", { ref, className: "relative grid gap-y-8 md:grid-cols-2 md:gap-x-20", children: [
    /* @__PURE__ */ jsx124(
      "div",
      {
        className: clsx43(
          "absolute -right-32 -top-10 hidden w-[60%] origin-right transition-transform duration-300 ease-in-out md:block",
          isInView ? "scale-x-100" : "scale-x-0"
        ),
        children: /* @__PURE__ */ jsx124(ContactSalesFormLines, { width: "100%" })
      }
    ),
    /* @__PURE__ */ jsxs99("div", { className: "space-y-8 lg:space-y-20", children: [
      /* @__PURE__ */ jsx124(Link36, { href: "/", className: "block w-16 cursor-pointer text-inherit", children: /* @__PURE__ */ jsx124(Logo, {}) }),
      /* @__PURE__ */ jsxs99("div", { className: "max-w-[26.25rem] space-y-6 md:space-y-8", children: [
        /* @__PURE__ */ jsx124("h1", { className: "max-w-[23.375rem] !font-[450] !tracking-[-0.02em]", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.heading } }),
        /* @__PURE__ */ jsx124("p", { className: "text-18 font-body !leading-[1.45] opacity-90", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.description } })
      ] }),
      /* @__PURE__ */ jsx124("div", { className: "hidden grid-cols-2 gap-x-3 gap-y-6 md:grid md:grid-cols-3 md:gap-8 960:-ml-4 xl:-ml-8", children: (_a = content == null ? void 0 : content.stats) == null ? void 0 : _a.map((item, l) => /* @__PURE__ */ jsxs99("div", { className: "flex flex-col items-center space-y-4 text-center lg:space-y-6", children: [
        /* @__PURE__ */ jsx124("div", { children: /* @__PURE__ */ jsx124(
          TextStrokeStack_default,
          {
            centerText: item.stat,
            topText: (item == null ? void 0 : item.old_stat) || item.stat,
            bottomText: (item == null ? void 0 : item.old_stat) || item.stat,
            int: l,
            options: {
              textColor: "lightBlue",
              strokeColor: "lightBlue",
              bgColor: "blue",
              textSize: "64"
            }
          }
        ) }),
        /* @__PURE__ */ jsx124(
          "p",
          {
            className: "text-16 max-w-[8.625rem] font-heading !font-normal !leading-[1.3] text-lightBlue opacity-60",
            dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.caption }
          }
        )
      ] }, l)) })
    ] }),
    /* @__PURE__ */ jsx124("div", { className: "relative", children: /* @__PURE__ */ jsx124("div", { className: "mx-auto flex min-h-[555px] w-full max-w-[32.5rem] items-center justify-center rounded-lg bg-white px-6 py-7", children: /* @__PURE__ */ jsx124("div", { className: "form-embed-wrapper w-full", dangerouslySetInnerHTML: { __html: form == null ? void 0 : form.form_embed } }) }) }),
    /* @__PURE__ */ jsx124("div", { className: "grid grid-cols-2 gap-x-3 gap-y-6 md:hidden md:grid-cols-3 md:gap-8", children: (_b = content == null ? void 0 : content.stats) == null ? void 0 : _b.map((item, l) => /* @__PURE__ */ jsxs99("div", { className: `flex flex-col items-center space-y-4 text-center lg:space-y-6 ${(l + 1) % 3 === 0 ? "col-span-2 md:col-span-1" : ""}`, children: [
      /* @__PURE__ */ jsx124("div", { children: /* @__PURE__ */ jsx124(
        TextStrokeStack_default,
        {
          centerText: item.stat,
          topText: (item == null ? void 0 : item.old_stat) || item.stat,
          bottomText: (item == null ? void 0 : item.old_stat) || item.stat,
          int: l,
          options: {
            textColor: "lightBlue",
            strokeColor: "lightBlue",
            bgColor: "blue",
            textSize: "64"
          }
        }
      ) }),
      /* @__PURE__ */ jsx124(
        "p",
        {
          className: "text-16 max-w-[8.625rem] font-heading !font-normal !leading-[1.3] text-lightBlue opacity-60",
          dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.caption }
        }
      )
    ] }, l)) })
  ] }) });
}
var ContactSalesForm_default = ContactSalesForm;

// src/components/flexible/conversions/ConversionsHandler.tsx
import { jsx as jsx133 } from "react/jsx-runtime";
var GetStartedCTA2 = dynamic6(() => Promise.resolve().then(() => (init_GetStartedCTA(), GetStartedCTA_exports)));
var ConnectCTA2 = dynamic6(() => Promise.resolve().then(() => (init_ConnectCTA(), ConnectCTA_exports)), { ssr: false });
var ContactGrid2 = dynamic6(() => Promise.resolve().then(() => (init_ContactGrid(), ContactGrid_exports)));
function ConversionsHandler({ components, sectionBG }) {
  const layoutComponents = {
    get_started_cta: GetStartedCTA2,
    contact_sales_form: ContactSalesForm_default,
    connect_cta: ConnectCTA2,
    contact_grid: ContactGrid2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx133(React29.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx133(LayoutComponent, __spreadProps(__spreadValues({}, rest), { sectionBG }), index) }, index);
  });
}
var ConversionsHandler_default = ConversionsHandler;

// src/components/flexible/company/CompanyHandler.tsx
import dynamic7 from "next/dynamic";
import { Fragment as Fragment26 } from "react";
import { jsx as jsx164 } from "react/jsx-runtime";
var StackedCards2 = dynamic7(() => Promise.resolve().then(() => (init_StackedCards(), StackedCards_exports)));
var ContentAnimatedBottomCards2 = dynamic7(() => Promise.resolve().then(() => (init_ContentAnimatedBottomCards(), ContentAnimatedBottomCards_exports)));
var LeadersGrid2 = dynamic7(() => Promise.resolve().then(() => (init_LeadersGrid(), LeadersGrid_exports)));
var RolesOfTheWeek2 = dynamic7(() => Promise.resolve().then(() => (init_RolesOfTheWeek(), RolesOfTheWeek_exports)));
var ValuesThreeCol2 = dynamic7(() => Promise.resolve().then(() => (init_ValuesThreeCol(), ValuesThreeCol_exports)));
var ValuesGrid2 = dynamic7(() => Promise.resolve().then(() => (init_ValuesGrid(), ValuesGrid_exports)));
var LocationsGrid2 = dynamic7(() => Promise.resolve().then(() => (init_LocationsGrid(), LocationsGrid_exports)));
var TestimonialSliderCentered2 = dynamic7(() => Promise.resolve().then(() => (init_TestimonialSliderCentered(), TestimonialSliderCentered_exports)));
var JobRoles2 = dynamic7(() => Promise.resolve().then(() => (init_JobRoles(), JobRoles_exports)));
var LocationsAccordion2 = dynamic7(() => Promise.resolve().then(() => (init_LocationsAccordion(), LocationsAccordion_exports)));
var FAQsAccordion2 = dynamic7(() => Promise.resolve().then(() => (init_FAQsAccordion(), FAQsAccordion_exports)));
function CompanyHandler({ components }) {
  const layoutComponents = {
    stacked_cards: StackedCards2,
    leaders_grid: LeadersGrid2,
    content_animated_bottom_cards: ContentAnimatedBottomCards2,
    roles_of_the_week: RolesOfTheWeek2,
    values_three_col: ValuesThreeCol2,
    values_grid: ValuesGrid2,
    locations_grid: LocationsGrid2,
    testimonial_slider_centered: TestimonialSliderCentered2,
    job_roles: JobRoles2,
    locations_accordion: LocationsAccordion2,
    faqs_accordion: FAQsAccordion2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx164(Fragment26, { children: LayoutComponent && /* @__PURE__ */ jsx164(LayoutComponent, __spreadValues({}, rest), index) }, `company-component-${index}`);
  });
}
var CompanyHandler_default = CompanyHandler;

// src/components/flexible/mastheads/MastheadsHandler.tsx
import { Fragment as Fragment29 } from "react";

// src/components/flexible/mastheads/components/VideoStatsMasthead/VideoStatsMasthead.tsx
init_TextStrokeStack();
init_Asset();
init_RotatingHeading();
import { useInView as useInView18 } from "framer-motion";
import { useRef as useRef28 } from "react";
import clsx62 from "clsx";
import { jsx as jsx165, jsxs as jsxs136 } from "react/jsx-runtime";
function VideoStatsMasthead(props) {
  const { content } = props;
  const { asset, rotating_heading, stats } = content;
  const ref = useRef28(null);
  const isInView = useInView18(ref, { once: true, amount: 0.4 });
  return /* @__PURE__ */ jsx165("div", { className: "video-stats-masthead", children: /* @__PURE__ */ jsxs136("div", { className: "flex flex-col items-center gap-10 md:gap-24", children: [
    /* @__PURE__ */ jsx165("div", { className: "mx-auto flex max-w-[1000px] flex-col items-center", children: /* @__PURE__ */ jsx165(RotatingHeading_default, __spreadValues({}, rotating_heading)) }),
    !!asset && /* @__PURE__ */ jsxs136("div", { className: "relative h-full", children: [
      /* @__PURE__ */ jsx165(
        "div",
        {
          className: clsx62(
            "absolute left-[-13%] top-[8%] h-[50%] origin-right transition-transform duration-300 ease-linear",
            isInView ? "scale-x-[100%]" : "scale-x-0"
          ),
          children: /* @__PURE__ */ jsx165(LeftLines3, { height: "100%" })
        }
      ),
      /* @__PURE__ */ jsx165(
        "div",
        {
          className: clsx62(
            "absolute bottom-[8%] right-[-12%] h-[50%] origin-left transition-transform delay-200 duration-300 ease-linear",
            isInView ? "scale-x-[100%]" : "scale-x-0"
          ),
          children: /* @__PURE__ */ jsx165(RightLines6, { height: "100%" })
        }
      ),
      /* @__PURE__ */ jsx165("div", { ref, className: "relative h-full w-full overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx165(Asset, __spreadValues({}, asset)) })
    ] }),
    (stats == null ? void 0 : stats.length) > 0 && /* @__PURE__ */ jsx165("div", { className: "mx-auto grid w-full max-w-[1168px] grid-cols-2 justify-between gap-x-3 gap-y-5 md:flex md:gap-6", children: stats == null ? void 0 : stats.map((stat, index) => {
      const { heading, text } = stat;
      return /* @__PURE__ */ jsxs136("div", { className: "flex flex-col items-center gap-4 md:gap-8", children: [
        /* @__PURE__ */ jsx165(TextStrokeStack_default, { centerText: heading, int: index }),
        /* @__PURE__ */ jsx165("p", { className: "text-20 is-stat text-center font-heading text-white", dangerouslySetInnerHTML: { __html: text } })
      ] }, `stat-${index}`);
    }) })
  ] }) });
}
function LeftLines3({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs136("svg", { width, height, viewBox: "0 0 151 349", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx165("path", { d: "M150 349L150 5.54919e-05", stroke: "#E1FF67", strokeWidth: "0.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M131.289 349L131.289 5.54919e-05", stroke: "#E1FF67" }),
    /* @__PURE__ */ jsx165("path", { d: "M112.582 349L112.582 5.54919e-05", stroke: "#E1FF67", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M93.8711 349L93.8711 5.54919e-05", stroke: "#E1FF67", strokeWidth: "2" }),
    /* @__PURE__ */ jsx165("path", { d: "M75.1602 349L75.1602 5.54919e-05", stroke: "#E1FF67", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M56.4531 349L56.4532 5.54919e-05", stroke: "#E1FF67", strokeWidth: "3" }),
    /* @__PURE__ */ jsx165("path", { d: "M37.7422 349L37.7422 5.54919e-05", stroke: "#E1FF67", strokeWidth: "3.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M19.0312 349L19.0313 5.54919e-05", stroke: "#E1FF67", strokeWidth: "4" }),
    /* @__PURE__ */ jsx165("path", { d: "M0.324219 349L0.324249 5.54919e-05", stroke: "#E1FF67", strokeWidth: "4.5" })
  ] });
}
function RightLines6({ width = null, height = null }) {
  return /* @__PURE__ */ jsxs136("svg", { width, height, viewBox: "0 0 289 349", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx165("path", { d: "M288.645 0L288.645 349", stroke: "#E1FF67", strokeWidth: "8.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M269.934 0L269.934 349", stroke: "#E1FF67", strokeWidth: "9" }),
    /* @__PURE__ */ jsx165("path", { d: "M251.227 0L251.227 349", stroke: "#E1FF67", strokeWidth: "9.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M232.516 6.10352e-05L232.516 349", stroke: "#E1FF67", strokeWidth: "10" }),
    /* @__PURE__ */ jsx165("path", { d: "M213.805 6.10352e-05L213.805 349", stroke: "#E1FF67", strokeWidth: "10.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M195.098 6.10352e-05L195.098 349", stroke: "#E1FF67", strokeWidth: "11" }),
    /* @__PURE__ */ jsx165("path", { d: "M176.387 6.10352e-05L176.387 349", stroke: "#E1FF67", strokeWidth: "11.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M157.676 6.10352e-05L157.676 349", stroke: "#E1FF67", strokeWidth: "12" }),
    /* @__PURE__ */ jsx165("path", { d: "M138.969 6.10352e-05L138.969 349", stroke: "#E1FF67", strokeWidth: "12.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M120.258 6.10352e-05L120.258 349", stroke: "#E1FF67", strokeWidth: "13" }),
    /* @__PURE__ */ jsx165("path", { d: "M101.547 6.10352e-05L101.547 349", stroke: "#E1FF67", strokeWidth: "13.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M82.8398 6.10352e-05L82.8399 349", stroke: "#E1FF67", strokeWidth: "14" }),
    /* @__PURE__ */ jsx165("path", { d: "M64.1289 6.10352e-05L64.1289 349", stroke: "#E1FF67", strokeWidth: "14.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M45.418 6.10352e-05L45.418 349", stroke: "#E1FF67", strokeWidth: "15" }),
    /* @__PURE__ */ jsx165("path", { d: "M26.7109 6.10352e-05L26.711 349", stroke: "#E1FF67", strokeWidth: "15.5" }),
    /* @__PURE__ */ jsx165("path", { d: "M8 6.10352e-05L8.00003 349", stroke: "#E1FF67", strokeWidth: "16" })
  ] });
}
var VideoStatsMasthead_default = VideoStatsMasthead;

// src/components/flexible/mastheads/components/ThreeColLinesMasthead/ThreeColLinesMasthead.tsx
import clsx64 from "clsx";

// src/components/flexible/mastheads/components/ThreeColLinesMasthead/GridItem.tsx
init_Asset();
init_usePageVisibility();
import clsx63 from "clsx";
import { useInView as useInView19, motion as motion8, AnimatePresence as AnimatePresence13 } from "framer-motion";
import { useEffect as useEffect25, useRef as useRef29, useState as useState42 } from "react";
import { useWindowSize as useWindowSize15 } from "react-use";

// src/components/flexible/mastheads/components/ThreeColLinesMasthead/Lines.tsx
import { jsx as jsx166, jsxs as jsxs137 } from "react/jsx-runtime";
function FirstItemLines({ width = "409", height = null }) {
  return /* @__PURE__ */ jsxs137("svg", { width, height, viewBox: "0 0 409 143", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx166("path", { d: "M0 142L409 142", stroke: "#E1FF67", strokeWidth: "0.344855" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 126.516L409 126.516", stroke: "#E1FF67", strokeWidth: "0.689709" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 111.032L409 111.032", stroke: "#E1FF67", strokeWidth: "1.03456" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 95.5484L409 95.5485", stroke: "#E1FF67", strokeWidth: "1.37942" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 80.0645L409 80.0646", stroke: "#E1FF67", strokeWidth: "1.72427" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 64.5806L409 64.5807", stroke: "#E1FF67", strokeWidth: "2.06913" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 49.0967L409 49.0968", stroke: "#E1FF67", strokeWidth: "2.41398" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 33.6129L409 33.613", stroke: "#E1FF67", strokeWidth: "2.75884" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 18.129L409 18.1291", stroke: "#E1FF67", strokeWidth: "3.10369" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 2.64514L409 2.64525", stroke: "#E1FF67", strokeWidth: "3.44855" })
  ] });
}
function SecondItemLines({ width = "409", height = null }) {
  return /* @__PURE__ */ jsxs137("svg", { width, height, viewBox: "0 0 409 126", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx166("path", { d: "M0.5 9.15527e-05L409.5 -1.22998e-05", stroke: "#4337A8", strokeWidth: "0.344855" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 15.484L409.5 15.4839", stroke: "#4337A8", strokeWidth: "0.689709" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 30.9678L409.5 30.9677", stroke: "#4337A8", strokeWidth: "1.03456" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 46.4517L409.5 46.4516", stroke: "#4337A8", strokeWidth: "1.37942" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 61.9356L409.5 61.9355", stroke: "#4337A8", strokeWidth: "1.72427" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 77.4195L409.5 77.4194", stroke: "#4337A8", strokeWidth: "2.06913" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 92.9033L409.5 92.9032", stroke: "#4337A8", strokeWidth: "2.41398" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 108.387L409.5 108.387", stroke: "#4337A8", strokeWidth: "2.75884" }),
    /* @__PURE__ */ jsx166("path", { d: "M0.5 123.871L409.5 123.871", stroke: "#4337A8", strokeWidth: "3.10369" })
  ] });
}
function ThirdItemLines({ width = "410", height = null }) {
  return /* @__PURE__ */ jsxs137("svg", { width, height, viewBox: "0 0 410 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx166("path", { d: "M0 1.00011L410 1", stroke: "#C2D1FF", strokeWidth: "0.344855" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 16.484L410 16.4839", stroke: "#C2D1FF", strokeWidth: "0.689709" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 31.9679L410 31.9678", stroke: "#C2D1FF", strokeWidth: "1.03456" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 47.4517L410 47.4516", stroke: "#C2D1FF", strokeWidth: "1.37942" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 62.9356L410 62.9355", stroke: "#C2D1FF", strokeWidth: "1.72427" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 78.4195L410 78.4194", stroke: "#C2D1FF", strokeWidth: "2.06913" }),
    /* @__PURE__ */ jsx166("path", { d: "M0 93.9034L410 93.9032", stroke: "#C2D1FF", strokeWidth: "2.41398" })
  ] });
}

// src/components/flexible/mastheads/components/ThreeColLinesMasthead/GridItem.tsx
import { jsx as jsx167, jsxs as jsxs138 } from "react/jsx-runtime";
var ROTATING_INTERVAL2 = 4e3;
var assetClassesMap = {
  0: "aspect-[410/347] sm:max-w-[410px] w-full",
  1: "aspect-[410/560] sm:max-w-[410px] w-full",
  2: "aspect-[410/442] sm:max-w-[410px] w-full"
};
var classesMap = {
  0: "mb-2",
  1: "mt-2",
  2: "mb-2"
};
function GridItem({ item, index }) {
  var _a;
  const { asset, line_color } = item;
  const ref = useRef29(null);
  const isInView = useInView19(ref, { amount: 0.7, once: true });
  const yVal = index === 0 ? -20 : 20;
  const [activeIndex, setActiveIndex] = useState42(0);
  const assetToRender = (item == null ? void 0 : item.layout) === "single" ? asset : (_a = item == null ? void 0 : item.assets) == null ? void 0 : _a[activeIndex];
  const interval = useRef29(null);
  const { isVisible } = usePageVisibility();
  const { width: windowWidth } = useWindowSize15();
  const isSmallDevice = windowWidth < 640;
  useEffect25(() => {
    if (item.layout === "rotating") {
      interval.current = setInterval(() => {
        if (!isVisible) return;
        setActiveIndex((prev) => (prev + 1) % item.assets.length);
      }, ROTATING_INTERVAL2);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [activeIndex, isVisible, item.layout]);
  return /* @__PURE__ */ jsxs138(
    "div",
    {
      ref,
      className: clsx63("flex gap-2 overflow-hidden", index === 1 && "order-first sm:order-none sm:mt-[12%]", index === 0 ? "flex-col-reverse" : "flex-col"),
      children: [
        !isSmallDevice ? /* @__PURE__ */ jsxs138(
          motion8.div,
          {
            className: clsx63("flex-shrink-0", classesMap == null ? void 0 : classesMap[index]),
            initial: {
              y: yVal,
              opacity: 0
            },
            animate: {
              y: isInView ? 0 : yVal,
              opacity: isInView ? 1 : 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 22
              }
            },
            children: [
              index === 0 && /* @__PURE__ */ jsx167(FirstItemLines, { width: "100%" }),
              index === 1 && /* @__PURE__ */ jsx167(SecondItemLines, { width: "100%" }),
              index === 2 && /* @__PURE__ */ jsx167(ThirdItemLines, { width: "100%" })
            ]
          }
        ) : /* @__PURE__ */ jsxs138("div", { className: "w-full", children: [
          index === 0 && /* @__PURE__ */ jsx167(FirstItemLines, { width: "100%" }),
          index === 1 && /* @__PURE__ */ jsx167(SecondItemLines, { width: "100%" }),
          index === 2 && /* @__PURE__ */ jsx167(ThirdItemLines, { width: "100%" })
        ] }),
        /* @__PURE__ */ jsx167("div", { className: clsx63(index === 1 && "z-10 overflow-hidden rounded-b-lg bg-purple", "overflow-hidden"), children: /* @__PURE__ */ jsx167(AnimatePresence13, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx167(
          motion8.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
            transition: { duration: 0.4 },
            children: /* @__PURE__ */ jsx167(Asset, __spreadProps(__spreadValues({}, assetToRender), { className: clsx63(assetClassesMap == null ? void 0 : assetClassesMap[index], "object-cover object-bottom") }))
          },
          activeIndex
        ) }) })
      ]
    }
  );
}
var GridItem_default = GridItem;

// src/components/flexible/mastheads/components/ThreeColLinesMasthead/ThreeColLinesMasthead.tsx
import { jsx as jsx168, jsxs as jsxs139 } from "react/jsx-runtime";
function ThreeColLinesMasthead(props) {
  var _a;
  const { content } = props;
  const gradientClasses = "absolute top-0 z-10 h-full w-[30%] from-navy via-transparent to-transparent block sm:hidden";
  return /* @__PURE__ */ jsx168("div", { className: "three-col-lines-masthead", children: /* @__PURE__ */ jsxs139("div", { className: "relative grid grid-cols-3 items-start gap-3 sm:gap-6", children: [
    /* @__PURE__ */ jsx168("div", { className: clsx64(gradientClasses, "left-0 bg-gradient-to-r") }),
    /* @__PURE__ */ jsx168("div", { className: clsx64(gradientClasses, "right-0 bg-gradient-to-l") }),
    (_a = content == null ? void 0 : content.items) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsx168(GridItem_default, { item, index }, `item-${index}`))
  ] }) });
}
var ThreeColLinesMasthead_default = ThreeColLinesMasthead;

// src/components/flexible/mastheads/components/TextMasthead.tsx
init_LinkGroup();
init_ColorHelpers();
init_text();

// src/components/flexible/mastheads/components/elements/DotSubheading.tsx
init_ColorHelpers();
import { jsx as jsx169, jsxs as jsxs140 } from "react/jsx-runtime";
function DotSubheading({ subheading, colour }) {
  var _a;
  const bars = Array.from({ length: 25 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsx169("div", { className: "mb-6", children: /* @__PURE__ */ jsxs140("div", { className: "relative inline-flex items-center space-x-2 rounded-l-full bg-lightGrey py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-4 md:pr-6", children: [
    /* @__PURE__ */ jsx169("div", { className: `h-2 w-2 shrink-0 rounded-full ${getClassValue(colour)}` }),
    /* @__PURE__ */ jsx169("span", { className: "text-15", dangerouslySetInnerHTML: { __html: subheading } }),
    /* @__PURE__ */ jsx169("div", { className: "absolute inset-y-0 left-[100%] !ml-0 flex w-[1.375rem] items-stretch justify-between pl-[.15rem]", children: (_a = bars == null ? void 0 : bars.slice(0, 5)) == null ? void 0 : _a.map((index) => /* @__PURE__ */ jsx169("div", { className: "h-full bg-lightGrey", style: { width: 3.5 - 0.5 * index } }, index)) })
  ] }) });
}
var DotSubheading_default = DotSubheading;

// src/components/flexible/mastheads/components/TextMasthead.tsx
import { Fragment as Fragment27, jsx as jsx170, jsxs as jsxs141 } from "react/jsx-runtime";
function TextMasthead({ content, options }) {
  var _a, _b, _c;
  const widthRems = (options == null ? void 0 : options.max_width) ? Number(options == null ? void 0 : options.max_width) / 16 : false;
  const contentWidthRems = (options == null ? void 0 : options.content_max_width) ? Number(options == null ? void 0 : options.content_max_width) / 16 : false;
  const subheadingColour = (_a = options == null ? void 0 : options.subheading_colour) == null ? void 0 : _a.colours;
  const springColour = (_b = options == null ? void 0 : options.spring_colour) == null ? void 0 : _b.colours;
  const leftAlign = (options == null ? void 0 : options.alignment) === "left";
  const bars = Array.from({ length: 25 }, (_, i) => i + 1);
  const headingSize = [""];
  const contentSize = [""];
  if ((options == null ? void 0 : options.text_size) === "large") {
    headingSize.push("is-large");
    contentSize.push("text-22");
  } else {
    headingSize.push("");
    contentSize.push("text-18");
  }
  return /* @__PURE__ */ jsxs141("div", { className: `relative ${leftAlign ? "" : "mx-auto"}  ${widthRems ? "" : "max-w-[57.5rem]"}`, style: widthRems ? { maxWidth: `${widthRems}rem` } : {}, children: [
    /* @__PURE__ */ jsxs141("div", { className: `relative z-10 flex flex-col  ${leftAlign ? "" : "items-center text-center"}`, children: [
      (content == null ? void 0 : content.subheading) && ((options == null ? void 0 : options.simple_subheading) ? /* @__PURE__ */ jsx170("span", { className: "text-15 mb-3 inline-block opacity-80 md:mb-4", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading } }) : /* @__PURE__ */ jsx170(DotSubheading_default, { subheading: content == null ? void 0 : content.subheading, colour: subheadingColour })),
      (content == null ? void 0 : content.heading) && /* @__PURE__ */ jsx170(
        "h1",
        {
          className: `mb-5 ${headingSize.join(" ")}`,
          dangerouslySetInnerHTML: {
            __html: getSplitBreakText({
              text: content == null ? void 0 : content.heading
            })
          }
        }
      ),
      (content == null ? void 0 : content.content) && /* @__PURE__ */ jsx170(
        "p",
        {
          className: `mb-8 font-body opacity-80 md:mb-12 ${contentSize.join(" ")}`,
          dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.content },
          style: contentWidthRems ? { maxWidth: `${contentWidthRems}rem` } : {}
        }
      ),
      ((_c = content == null ? void 0 : content.links) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsx170("div", { children: /* @__PURE__ */ jsx170(LinkGroup_default, { links: content == null ? void 0 : content.links }) })
    ] }),
    (options == null ? void 0 : options.add_springs) && /* @__PURE__ */ jsxs141(Fragment27, { children: [
      /* @__PURE__ */ jsx170("div", { className: "absolute inset-y-0 right-[90%] flex w-[80%] items-stretch justify-between md:right-[105%] lg:right-[110%]", children: bars.map((index) => /* @__PURE__ */ jsx170("div", { className: `h-full ${getClassValue(springColour)}`, style: { width: 12 - index * 0.5 } }, index)) }),
      /* @__PURE__ */ jsx170("div", { className: "absolute inset-y-0 left-[90%] flex w-[80%] flex-row-reverse items-stretch justify-between md:left-[105%] lg:left-[110%]", children: bars.map((index) => /* @__PURE__ */ jsx170("div", { className: `h-full ${getClassValue(springColour)}`, style: { width: 12 - index * 0.5 } }, index)) })
    ] })
  ] });
}
var TextMasthead_default = TextMasthead;

// src/components/flexible/mastheads/components/TwoColumnMasthead.tsx
init_LinkGroup();
init_Asset();
init_text();
import { jsx as jsx171, jsxs as jsxs142 } from "react/jsx-runtime";
function TwoColumnMasthead({ content, media, options }) {
  var _a, _b;
  const widthRems = (options == null ? void 0 : options.content_max_width) ? Number(options == null ? void 0 : options.content_max_width) / 16 : false;
  const contentLrg = (options == null ? void 0 : options.content_size) === "large";
  const contentColSpan = [""];
  const mediaColSpan = [""];
  if ((options == null ? void 0 : options.media_width) === "large") {
    contentColSpan.push("md:col-span-5");
    mediaColSpan.push("md:col-span-7");
  } else {
    contentColSpan.push("md:col-span-6");
    mediaColSpan.push("md:col-span-6");
  }
  return /* @__PURE__ */ jsxs142("div", { className: "grid gap-x-6 gap-y-10 md:grid-cols-12 md:items-center", children: [
    /* @__PURE__ */ jsx171("div", { className: `pt-8 md:pt-10 ${contentColSpan.join(" ")}`, children: /* @__PURE__ */ jsxs142("div", { style: widthRems ? { maxWidth: `${widthRems}rem` } : {}, children: [
      (content == null ? void 0 : content.subheading) && ((options == null ? void 0 : options.simple_subheading) ? /* @__PURE__ */ jsx171("span", { className: "text-15 mb-3 inline-block opacity-80 md:mb-4", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading } }) : /* @__PURE__ */ jsx171(DotSubheading_default, { subheading: content == null ? void 0 : content.subheading, colour: (_a = options == null ? void 0 : options.subheading_colour) == null ? void 0 : _a.colours })),
      (content == null ? void 0 : content.heading) && /* @__PURE__ */ jsx171(
        "h1",
        {
          dangerouslySetInnerHTML: {
            __html: getSplitBreakText({
              text: content == null ? void 0 : content.heading
            })
          }
        }
      ),
      (content == null ? void 0 : content.content) && /* @__PURE__ */ jsx171("p", { className: `mt-3 font-body md:mt-5 ${contentLrg ? "text-20" : "text-18"}`, dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.content } }),
      ((_b = content == null ? void 0 : content.links) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsx171("div", { className: "mt-8 md:mt-12", children: /* @__PURE__ */ jsx171(LinkGroup_default, { links: content == null ? void 0 : content.links }) })
    ] }) }),
    /* @__PURE__ */ jsx171("div", { className: mediaColSpan.join(" "), children: /* @__PURE__ */ jsx171("div", { className: "-mr-6 xl:-mr-20", children: /* @__PURE__ */ jsx171(Asset, __spreadValues({}, media)) }) })
  ] });
}
var TwoColumnMasthead_default = TwoColumnMasthead;

// src/components/flexible/mastheads/components/StatsCardsMasthead.tsx
init_Asset();
init_TextStrokeStack();
import { jsx as jsx172, jsxs as jsxs143 } from "react/jsx-runtime";
function StatsCardsMasthead({ cards }) {
  return /* @__PURE__ */ jsx172("div", { className: "grid gap-y-6 md:grid-cols-3 md:gap-6", children: (cards == null ? void 0 : cards.length) > 0 && (cards == null ? void 0 : cards.map((card, index) => /* @__PURE__ */ jsxs143("div", { className: "relative flex aspect-[82/113] flex-col overflow-hidden rounded-lg bg-lightBlue p-4", children: [
    /* @__PURE__ */ jsx172("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx172(Asset, __spreadProps(__spreadValues({}, card == null ? void 0 : card.background), { priority: index === 0, className: "h-full w-full" })) }),
    /* @__PURE__ */ jsxs143("div", { className: "relative z-10 mt-auto rounded-md bg-navy p-5 text-white lg:p-6", children: [
      /* @__PURE__ */ jsx172(
        TextStrokeStack_default,
        {
          centerText: card.stat,
          topText: (card == null ? void 0 : card.old_stat) || card.stat,
          bottomText: (card == null ? void 0 : card.old_stat) || card.stat,
          int: index,
          options: {
            textColor: "white",
            strokeColor: "white",
            bgColor: "navy",
            textSize: "64"
          }
        }
      ),
      /* @__PURE__ */ jsx172("span", { className: "text-20 font-regular mt-2 inline-block font-heading", dangerouslySetInnerHTML: { __html: card == null ? void 0 : card.caption } })
    ] })
  ] }, index))) });
}
var StatsCardsMasthead_default = StatsCardsMasthead;

// src/components/flexible/mastheads/components/TwoColumnStatsMasthead.tsx
init_Asset();
init_LinkGroup();
init_TextStrokeStack();
import { jsx as jsx173, jsxs as jsxs144 } from "react/jsx-runtime";
function TwoColumnStatsMasthead({ content, stats, media }) {
  var _a;
  const bars = Array.from({ length: 28 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs144("div", { className: " relative grid gap-y-10 md:grid-cols-12 md:gap-x-6", children: [
    /* @__PURE__ */ jsx173("div", { className: "md:col-span-6 md:pt-6 lg:pt-8", children: /* @__PURE__ */ jsxs144("div", { className: "max-w-[37rem]", children: [
      (content == null ? void 0 : content.subheading) && /* @__PURE__ */ jsx173("span", { className: "text-15 mb-3 inline-block opacity-80 md:mb-4", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading } }),
      (content == null ? void 0 : content.heading) && /* @__PURE__ */ jsx173("h1", { className: "mb-3 md:mb-5", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.heading } }),
      (content == null ? void 0 : content.content) && /* @__PURE__ */ jsx173("p", { className: "text-20 max-w-[26rem] font-body opacity-80", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.content } }),
      ((_a = content == null ? void 0 : content.links) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx173("div", { className: "mt-8 md:mt-12", children: /* @__PURE__ */ jsx173(LinkGroup_default, { links: content == null ? void 0 : content.links }) })
    ] }) }),
    /* @__PURE__ */ jsx173("div", { className: "relative md:col-span-6", children: /* @__PURE__ */ jsx173("div", { className: "relative z-10 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx173(Asset, __spreadValues({}, media)) }) }),
    (stats == null ? void 0 : stats.length) > 0 && /* @__PURE__ */ jsx173("div", { className: "grid gap-y-4 sm:flex sm:justify-between sm:gap-x-3 md:col-span-7 md:mt-16 md:gap-x-6 lg:mt-20", children: stats == null ? void 0 : stats.map((item, index) => /* @__PURE__ */ jsxs144("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx173(
        TextStrokeStack_default,
        {
          centerText: item.stat,
          int: index,
          options: {
            textColor: "navy",
            strokeColor: "navy",
            bgColor: "white",
            textSize: "64"
          }
        }
      ),
      /* @__PURE__ */ jsx173("span", { className: "text-20 font-regular mt-2 inline-block font-heading", dangerouslySetInnerHTML: { __html: item == null ? void 0 : item.caption } })
    ] }, index)) }),
    /* @__PURE__ */ jsxs144("div", { className: "absolute inset-y-0 -right-6 left-auto hidden h-3/4 w-4/5 flex-col justify-end sm:flex md:h-full md:w-1/3 lg:w-4/5 xl:-mr-20", children: [
      /* @__PURE__ */ jsx173("div", { className: "hidden w-full flex-row-reverse pr-[.3rem] md:flex", style: { height: "22%" }, children: bars == null ? void 0 : bars.map((index) => /* @__PURE__ */ jsx173("div", { className: "h-full bg-lightGreen", style: { width: 1 + 0.4 * index, marginLeft: 14.5 - 0.32 * index } }, index)) }),
      /* @__PURE__ */ jsx173("div", { className: "flex w-full flex-row-reverse pr-1", style: { height: "36%" }, children: bars == null ? void 0 : bars.map((index) => /* @__PURE__ */ jsx173("div", { className: "h-full bg-lightGreen", style: { width: 3.2 + 0.4 * index, marginLeft: 12 - 0.4 * index } }, index)) }),
      /* @__PURE__ */ jsx173("div", { className: "flex w-full justify-end", style: { height: "16%" }, children: bars == null ? void 0 : bars.slice(0, 14).map((index) => /* @__PURE__ */ jsx173("div", { className: "h-full bg-lightGreen", style: { width: 4 + 0.4 * index, marginLeft: 12 - 0.4 * index } }, index)) })
    ] })
  ] });
}
var TwoColumnStatsMasthead_default = TwoColumnStatsMasthead;

// src/components/flexible/mastheads/components/BlogMasthead/BlogMasthead.tsx
init_PostTag();
init_Wp();
init_LinkGroup();
init_useSection();
init_text();
init_getPostPreviewImage();
import clsx65 from "clsx";
import Link42 from "next/link";
import { LazyMotion as LazyMotion34, domAnimation as domAnimation29, m as m47, useScroll as useScroll3, useSpring as useSpring2, useTransform as useTransform2 } from "framer-motion";
import { useRef as useRef30 } from "react";
import { jsx as jsx174, jsxs as jsxs145 } from "react/jsx-runtime";
function BottomLines2({ width = "1440", height }) {
  return /* @__PURE__ */ jsxs145("svg", { width, height, viewBox: "0 0 1440 165", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs145("g", { clipPath: "url(#clip0_1406_29720)", children: [
      /* @__PURE__ */ jsx174("path", { d: "M759 -0.333405L1440 -0.333253", stroke: "#E1FF67", strokeWidth: "12" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 17.9999L1440 18.0001", stroke: "#E1FF67", strokeWidth: "10" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 36.3333L1440 36.3334", stroke: "#E1FF67", strokeWidth: "8" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 54.6666L1440 54.6667", stroke: "#E1FF67", strokeWidth: "6" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 72.9999L1440 73", stroke: "#E1FF67", strokeWidth: "4" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 91.3332L1440 91.3333", stroke: "#E1FF67", strokeWidth: "3" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 109.667L1440 109.667", stroke: "#E1FF67", strokeWidth: "2" }),
      /* @__PURE__ */ jsx174("path", { d: "M759 128L1440 128", stroke: "#E1FF67" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 -6.10352e-05L759 0.000107775", stroke: "#E1FF67", strokeWidth: "14" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 18.3333L759 18.3335", stroke: "#E1FF67", strokeWidth: "14" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 36.6666L759 36.6668", stroke: "#E1FF67", strokeWidth: "12" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 54.9999L759 55.0001", stroke: "#E1FF67", strokeWidth: "10" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 73.3333L759 73.3334", stroke: "#E1FF67", strokeWidth: "8" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 91.6666L759 91.6667", stroke: "#E1FF67", strokeWidth: "6" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 110L759 110", stroke: "#E1FF67", strokeWidth: "4" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 128.333L759 128.333", stroke: "#E1FF67", strokeWidth: "3" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 146.667L759 146.667", stroke: "#E1FF67", strokeWidth: "2" }),
      /* @__PURE__ */ jsx174("path", { d: "M0 165L759 165", stroke: "#E1FF67" })
    ] }),
    /* @__PURE__ */ jsx174("defs", { children: /* @__PURE__ */ jsx174("clipPath", { id: "clip0_1406_29720", children: /* @__PURE__ */ jsx174("rect", { width: "1440", height: "165", fill: "white", transform: "translate(1440 165) rotate(-180)" }) }) })
  ] });
}
function BlogMasthead(props) {
  const { paddingTopMap } = useSection_default();
  const { content, posts } = props;
  const ref = useRef30(null);
  const containerRef = useRef30(null);
  const { scrollYProgress } = useScroll3({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const springyY = useSpring2(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  const yTransform = useTransform2(springyY, [0, 0.3], ["-70%", "0%"]);
  return /* @__PURE__ */ jsxs145("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx174("div", { className: "blog-masthead relative z-10 bg-brightGreen", children: /* @__PURE__ */ jsx174("div", { className: "container--1292px container", children: /* @__PURE__ */ jsxs145("div", { ref: containerRef, className: clsx65(paddingTopMap == null ? void 0 : paddingTopMap.min, "pb-[50px]"), children: [
      /* @__PURE__ */ jsxs145("div", { className: "mb-12 flex flex-col items-center sm:mb-20 md:mb-[102px]", children: [
        /* @__PURE__ */ jsx174(
          "span",
          {
            className: "text-15 mb-[18px] text-navy/80",
            dangerouslySetInnerHTML: {
              __html: content == null ? void 0 : content.subheading
            }
          }
        ),
        /* @__PURE__ */ jsx174(
          "h1",
          {
            className: "text-80 mb-[33px] text-center font-normal !tracking-[-0.04em] text-navy",
            dangerouslySetInnerHTML: {
              __html: getSplitBreakText({ text: content == null ? void 0 : content.heading })
            }
          }
        ),
        /* @__PURE__ */ jsx174(LinkGroup_default, __spreadProps(__spreadValues({}, content == null ? void 0 : content.links), { centered: true }))
      ] }),
      (posts == null ? void 0 : posts.length) > 0 && /* @__PURE__ */ jsx174("div", { className: "grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3", children: posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ jsxs145(Link42, { href: post == null ? void 0 : post.permalink, "aria-label": "Open post", className: "group flex gap-5 rounded-lg bg-white p-2 pr-5", children: [
        !!getPostPreviewImage_default(post) && /* @__PURE__ */ jsx174("div", { className: "aspect-[154/88] w-full max-w-[40%] flex-shrink-0 overflow-hidden rounded xs:max-w-[154px]", children: /* @__PURE__ */ jsx174(
          WpImage,
          {
            image: getPostPreviewImage_default(post),
            className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          }
        ) }),
        /* @__PURE__ */ jsxs145("div", { className: "flex flex-col items-start gap-[10px]", children: [
          /* @__PURE__ */ jsx174(PostTag_default, { text: "Featured" }),
          !!(post == null ? void 0 : post.post_title) && /* @__PURE__ */ jsx174(
            "p",
            {
              className: "text-16 line-clamp-2 font-body font-normal",
              dangerouslySetInnerHTML: {
                __html: post.post_title
              }
            }
          )
        ] })
      ] }, post.ID)) })
    ] }) }) }),
    /* @__PURE__ */ jsx174(LazyMotion34, { features: domAnimation29, children: /* @__PURE__ */ jsx174(
      m47.div,
      {
        style: {
          y: yTransform
        },
        transition: { delay: 0.5, ease: "linear" },
        ref,
        children: /* @__PURE__ */ jsx174(BottomLines2, { width: "100%" })
      }
    ) })
  ] });
}
var BlogMasthead_default = BlogMasthead;

// src/components/flexible/mastheads/components/NewsroomMasthead/NewsroomMasthead.tsx
init_PostTag();
init_Wp();
init_LinkGroup();
init_useSection();
init_text();
init_getPostPreviewImage();
import clsx66 from "clsx";
import Link43 from "next/link";
import { useInView as useInView20 } from "framer-motion";
import { useRef as useRef31 } from "react";
import { jsx as jsx175, jsxs as jsxs146 } from "react/jsx-runtime";
function BottomLeftLines({ width = "421", height }) {
  return /* @__PURE__ */ jsxs146("svg", { width, height, viewBox: "0 0 421 503", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx175("path", { d: "M142 317.792L142 1.60336e-05", stroke: "#0000DC", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx175("path", { d: "M123.42 317.792L123.42 1.60336e-05", stroke: "#0000DC", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx175("path", { d: "M104.838 317.792L104.838 1.60336e-05", stroke: "#0000DC", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx175("path", { d: "M86.2578 317.792L86.2578 1.60336e-05", stroke: "#0000DC", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx175("path", { d: "M67.6777 317.792L67.6777 1.60336e-05", stroke: "#0000DC", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx175("path", { d: "M49.0977 317.792L49.0977 1.60336e-05", stroke: "#0000DC", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx175("path", { d: "M30.5156 317.792L30.5156 1.60336e-05", stroke: "#0000DC", strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx175("path", { d: "M11.9355 317.792L11.9355 1.60336e-05", stroke: "#0000DC", strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx175("path", { d: "M421 635.587L421 317.795", stroke: "#0000DC", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx175("path", { d: "M402.42 635.587L402.42 317.795", stroke: "#0000DC", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx175("path", { d: "M383.838 635.587L383.838 317.795", stroke: "#0000DC", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx175("path", { d: "M365.258 635.587L365.258 317.795", stroke: "#0000DC", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx175("path", { d: "M346.678 635.587L346.678 317.795", stroke: "#0000DC", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx175("path", { d: "M328.098 635.587L328.098 317.795", stroke: "#0000DC", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx175("path", { d: "M309.516 635.587L309.516 317.795", stroke: "#0000DC", strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx175("path", { d: "M290.936 635.587L290.936 317.795", stroke: "#0000DC", strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx175("path", { d: "M272.355 635.587L272.355 317.795", stroke: "#0000DC", strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx175("path", { d: "M253.773 635.587L253.773 317.795", stroke: "#0000DC", strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx175("path", { d: "M235.193 635.587L235.193 317.795", stroke: "#0000DC", strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx175("path", { d: "M216.613 635.587L216.613 317.795", stroke: "#0000DC", strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx175("path", { d: "M198.033 635.587L198.033 317.795", stroke: "#0000DC", strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx175("path", { d: "M179.451 635.587L179.451 317.795", stroke: "#0000DC", strokeWidth: "6.9517" }),
    /* @__PURE__ */ jsx175("path", { d: "M160.871 635.587L160.871 317.795", stroke: "#0000DC", strokeWidth: "7.44825" }),
    /* @__PURE__ */ jsx175("path", { d: "M142.291 635.587L142.291 317.795", stroke: "#0000DC", strokeWidth: "7.9448" }),
    /* @__PURE__ */ jsx175("path", { d: "M123.709 635.587L123.709 317.795", stroke: "#0000DC", strokeWidth: "8.44135" }),
    /* @__PURE__ */ jsx175("path", { d: "M105.129 635.587L105.129 317.795", stroke: "#0000DC", strokeWidth: "8.93789" }),
    /* @__PURE__ */ jsx175("path", { d: "M86.5488 635.587L86.5488 317.795", stroke: "#0000DC", strokeWidth: "9.43444" }),
    /* @__PURE__ */ jsx175("path", { d: "M67.9688 635.587L67.9687 317.795", stroke: "#0000DC", strokeWidth: "9.93099" }),
    /* @__PURE__ */ jsx175("path", { d: "M49.3867 635.587L49.3867 317.795", stroke: "#0000DC", strokeWidth: "10.4275" }),
    /* @__PURE__ */ jsx175("path", { d: "M30.8066 635.587L30.8066 317.795", stroke: "#0000DC", strokeWidth: "10.9241" }),
    /* @__PURE__ */ jsx175("path", { d: "M12.2266 635.587L12.2266 317.795", stroke: "#0000DC", strokeWidth: "11.4206" })
  ] });
}
function BottomRightLines({ width = "422", height }) {
  return /* @__PURE__ */ jsxs146("svg", { width, height, viewBox: "0 0 422 230", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx175("path", { d: "M1 0L1 472", stroke: "#0000DC", strokeWidth: "0.49655" }),
    /* @__PURE__ */ jsx175("path", { d: "M22.3223 0L22.3223 472", stroke: "#0000DC", strokeWidth: "0.9931" }),
    /* @__PURE__ */ jsx175("path", { d: "M43.6445 0L43.6445 472", stroke: "#0000DC", strokeWidth: "1.48965" }),
    /* @__PURE__ */ jsx175("path", { d: "M64.9668 0L64.9668 472", stroke: "#0000DC", strokeWidth: "1.9862" }),
    /* @__PURE__ */ jsx175("path", { d: "M86.291 0L86.291 472", stroke: "#0000DC", strokeWidth: "2.48275" }),
    /* @__PURE__ */ jsx175("path", { d: "M107.613 0L107.613 472", stroke: "#0000DC", strokeWidth: "2.9793" }),
    /* @__PURE__ */ jsx175("path", { d: "M128.936 0L128.936 472", stroke: "#0000DC", strokeWidth: "3.47585" }),
    /* @__PURE__ */ jsx175("path", { d: "M150.258 0L150.258 472", stroke: "#0000DC", strokeWidth: "3.9724" }),
    /* @__PURE__ */ jsx175("path", { d: "M171.58 0L171.58 472", stroke: "#0000DC", strokeWidth: "4.46895" }),
    /* @__PURE__ */ jsx175("path", { d: "M192.902 0L192.902 472", stroke: "#0000DC", strokeWidth: "4.9655" }),
    /* @__PURE__ */ jsx175("path", { d: "M214.227 0L214.227 472", stroke: "#0000DC", strokeWidth: "5.46205" }),
    /* @__PURE__ */ jsx175("path", { d: "M235.549 0L235.549 472", stroke: "#0000DC", strokeWidth: "5.9586" }),
    /* @__PURE__ */ jsx175("path", { d: "M256.871 0L256.871 472", stroke: "#0000DC", strokeWidth: "6.45515" }),
    /* @__PURE__ */ jsx175("path", { d: "M278.193 0L278.193 472", stroke: "#0000DC", strokeWidth: "6.9517" }),
    /* @__PURE__ */ jsx175("path", { d: "M299.516 0L299.516 472", stroke: "#0000DC", strokeWidth: "7.44825" }),
    /* @__PURE__ */ jsx175("path", { d: "M320.838 0L320.838 472", stroke: "#0000DC", strokeWidth: "7.9448" }),
    /* @__PURE__ */ jsx175("path", { d: "M342.162 0L342.162 472", stroke: "#0000DC", strokeWidth: "8.44135" }),
    /* @__PURE__ */ jsx175("path", { d: "M363.484 0L363.484 472", stroke: "#0000DC", strokeWidth: "8.93789" }),
    /* @__PURE__ */ jsx175("path", { d: "M384.807 0L384.807 472", stroke: "#0000DC", strokeWidth: "9.43444" }),
    /* @__PURE__ */ jsx175("path", { d: "M406.129 0L406.129 472", stroke: "#0000DC", strokeWidth: "9.93099" })
  ] });
}
function NewsroomMasthead(props) {
  const { paddingTopMap, paddingBottomMap } = useSection_default();
  const { content, posts } = props;
  const ref = useRef31(null);
  const isInView = useInView20(ref, { amount: 0.5, once: true });
  return /* @__PURE__ */ jsx175("div", { className: "w-full", children: /* @__PURE__ */ jsxs146("div", { ref, className: "blog-masthead relative z-10 bg-lightPurple", children: [
    /* @__PURE__ */ jsx175("div", { className: "container--1292px container", children: /* @__PURE__ */ jsxs146(
      "div",
      {
        className: clsx66(
          paddingTopMap == null ? void 0 : paddingTopMap.medium,
          paddingBottomMap == null ? void 0 : paddingBottomMap.medium
          //  "pb-32 md:pb-[186px]"
        ),
        children: [
          /* @__PURE__ */ jsxs146("div", { className: "mb-14 flex flex-col items-center md:mb-20", children: [
            /* @__PURE__ */ jsx175(
              "span",
              {
                className: "text-15 mb-[18px] text-navy/80",
                dangerouslySetInnerHTML: {
                  __html: content == null ? void 0 : content.subheading
                }
              }
            ),
            /* @__PURE__ */ jsx175(
              "h1",
              {
                className: "mb-[33px] text-center font-normal !tracking-[-0.04em] text-navy",
                dangerouslySetInnerHTML: {
                  __html: getSplitBreakText({ text: content == null ? void 0 : content.heading })
                }
              }
            ),
            /* @__PURE__ */ jsx175(LinkGroup_default, __spreadProps(__spreadValues({}, content == null ? void 0 : content.links), { centered: true }))
          ] }),
          (posts == null ? void 0 : posts.length) > 0 && /* @__PURE__ */ jsx175("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ jsxs146(Link43, { href: post == null ? void 0 : post.permalink, "aria-label": "Open post", className: "group flex gap-5 rounded-lg bg-white p-2 pr-5", children: [
            !!getPostPreviewImage_default(post) && /* @__PURE__ */ jsx175("div", { className: "aspect-[154/88] w-full max-w-[154px] overflow-hidden rounded", children: /* @__PURE__ */ jsx175(
              WpImage,
              {
                image: getPostPreviewImage_default(post),
                className: "h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              }
            ) }),
            /* @__PURE__ */ jsxs146("div", { className: "flex flex-col items-start gap-[10px]", children: [
              /* @__PURE__ */ jsx175(PostTag_default, { text: "Featured" }),
              !!(post == null ? void 0 : post.post_title) && /* @__PURE__ */ jsx175(
                "p",
                {
                  className: "text-16 line-clamp-2 font-body font-normal",
                  dangerouslySetInnerHTML: {
                    __html: post.post_title
                  }
                }
              )
            ] })
          ] })) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx175("div", { className: clsx66("linear absolute bottom-0 left-0 w-[29.5%] transition-transform duration-300", isInView ? "translate-x-0" : "-translate-x-full"), children: /* @__PURE__ */ jsx175(BottomLeftLines, { width: "100%" }) }),
    /* @__PURE__ */ jsx175("div", { className: clsx66("linear absolute bottom-0 right-0 w-[28.5%] transition-transform duration-300", isInView ? "translate-x-0" : "translate-x-full"), children: /* @__PURE__ */ jsx175(BottomRightLines, { width: "100%" }) })
  ] }) });
}
var NewsroomMasthead_default = NewsroomMasthead;

// src/components/flexible/mastheads/components/FanEngagementMasthead.tsx
init_useWindowSize();
import { useRef as useRef32 } from "react";
import { LazyMotion as LazyMotion35, domAnimation as domAnimation30, useScroll as useScroll4 } from "framer-motion";

// src/components/flexible/mastheads/components/FanEngagement/PodcastBar.tsx
init_ColorHelpers();
import { m as m48, useTransform as useTransform3 } from "framer-motion";
import { jsx as jsx176 } from "react/jsx-runtime";
function PodcastBar({ scrollYProgress, int, audioColour, isMobile }) {
  const startY = `${0 + Math.random() * 60}%`;
  const midY = `${0 + Math.random() * 60}%`;
  const endY = `${0 + Math.random() * 60}%`;
  const ytransform = useTransform3(scrollYProgress, [0, 0.3, 1], [startY, midY, endY]);
  return /* @__PURE__ */ jsx176(m48.div, { className: "flex h-full flex-col items-center will-change-transform", style: { y: ytransform }, children: /* @__PURE__ */ jsx176("div", { className: `h-40 shrink-0 md:h-[21.875rem] ${getClassValue(audioColour)}`, style: { width: (isMobile ? 16 : 29) - 0.6 * int } }) });
}
var PodcastBar_default = PodcastBar;

// src/components/flexible/mastheads/components/FanEngagementMasthead.tsx
import { jsx as jsx177, jsxs as jsxs147 } from "react/jsx-runtime";
function FanEngagementMasthead({ heading, content, animation_colour }) {
  const bars = Array.from({ length: 48 }, (_, i) => i + 1);
  const audioColour = animation_colour == null ? void 0 : animation_colour.colours;
  const scrollRef = useRef32(null);
  const { scrollYProgress } = useScroll4({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  const { width: windowWidth } = useWindowSize3();
  const isMobile = windowWidth < 768;
  return /* @__PURE__ */ jsx177(LazyMotion35, { features: domAnimation30, children: /* @__PURE__ */ jsxs147("div", { ref: scrollRef, className: "space-y-10 pt-16 md:space-y-[4.5rem] md:pt-[114px]", children: [
    /* @__PURE__ */ jsxs147("div", { className: "grid gap-y-6 md:grid-cols-2 md:gap-x-10", children: [
      heading && /* @__PURE__ */ jsx177("div", { children: /* @__PURE__ */ jsx177("h1", { dangerouslySetInnerHTML: { __html: heading } }) }),
      content && /* @__PURE__ */ jsx177("div", { children: /* @__PURE__ */ jsx177("div", { className: "prose !max-w-[36.125rem] md:ml-auto", dangerouslySetInnerHTML: { __html: content } }) })
    ] }),
    /* @__PURE__ */ jsx177("div", { className: "-mx-6 flex w-[calc(100%+3rem)] items-end justify-between lg:-mx-20 lg:w-[calc(100%+10rem)]", children: bars == null ? void 0 : bars.slice(0, isMobile ? 24 : 50).map((index, idx) => /* @__PURE__ */ jsx177(PodcastBar_default, { scrollYProgress, int: idx, audioColour, isMobile }, `podcast-spring-${index}`)) })
  ] }) });
}
var FanEngagementMasthead_default = FanEngagementMasthead;

// src/components/flexible/mastheads/components/SportsMasthead.tsx
init_useWindowSize();
init_useAutoTransition();
import { useRef as useRef33, useState as useState44, useEffect as useEffect26 } from "react";
import { LazyMotion as LazyMotion36, domMax as domMax6, useInView as useInView21 } from "framer-motion";

// src/components/flexible/mastheads/components/SportsMasthead/GetRandomPlayerNumber.tsx
var getRandomPlayerNumber = (minVal, maxVal, exclude) => {
  let newNumber;
  while (true) {
    newNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    if (newNumber !== exclude) {
      break;
    }
  }
  return newNumber;
};
var GetRandomPlayerNumber_default = getRandomPlayerNumber;

// src/components/flexible/mastheads/components/SportsMasthead/SportsMastheadContent.tsx
init_LinkGroup();
import { LayoutGroup as LayoutGroup2, m as m49, AnimatePresence as AnimatePresence14 } from "framer-motion";
import { jsx as jsx178, jsxs as jsxs148 } from "react/jsx-runtime";
function SportsMastheadContent({ content, activeWord }) {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ jsxs148("div", { className: "relative z-10 mx-auto max-w-[50rem] text-center", children: [
    content.subheading && /* @__PURE__ */ jsx178("span", { className: "text-15 mb-2 inline-flex font-heading opacity-80 md:mb-4", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading } }),
    /* @__PURE__ */ jsxs148("h1", { className: "", children: [
      /* @__PURE__ */ jsx178(m49.span, { className: "z-[20] block", children: /* @__PURE__ */ jsx178(m49.span, { layout: true, style: { display: "inline-block", willChange: "transform" }, children: `${(_a = content == null ? void 0 : content.heading) == null ? void 0 : _a.prepend}\xA0` }) }),
      /* @__PURE__ */ jsxs148(LayoutGroup2, { children: [
        /* @__PURE__ */ jsx178(m49.span, { className: "z-[10] w-full translate-y-[0.28rem] overflow-hidden", children: /* @__PURE__ */ jsx178(
          m49.span,
          {
            className: "inline-block",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: 0.4,
              delay: 0.5,
              opacity: { duration: 0.6 },
              skewX: { type: "spring", bounce: 0.4, delay: 0.7 }
            },
            children: /* @__PURE__ */ jsx178(AnimatePresence14, { mode: "wait", initial: false, children: (_c = (_b = content == null ? void 0 : content.heading) == null ? void 0 : _b.rotating_text) == null ? void 0 : _c.map(
              (word, index) => activeWord === index ? /* @__PURE__ */ jsx178(
                m49.span,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: {
                      opacity: {
                        duration: 0.3
                      },
                      duration: 0.4
                    }
                  },
                  layout: true,
                  transition: {
                    duration: 0.4,
                    delay: 0,
                    opacity: { duration: 0.6, delay: 0.1 }
                  },
                  className: "inline-block !pb-[0.28rem] text-blue",
                  dangerouslySetInnerHTML: { __html: `&nbsp;${word == null ? void 0 : word.text}&nbsp;` }
                },
                word == null ? void 0 : word.text
              ) : null
            ) })
          }
        ) }),
        /* @__PURE__ */ jsx178(m49.span, { layout: true, className: "z-[20] block translate-y-[-0.28rem] sm:inline-block", children: /* @__PURE__ */ jsx178(m49.span, { layout: true, style: { display: "inline-block", willChange: "transform" }, dangerouslySetInnerHTML: { __html: `${(_e = content == null ? void 0 : content.heading) == null ? void 0 : _e.append}` } }) }, (_d = content == null ? void 0 : content.heading) == null ? void 0 : _d.prepend)
      ] })
    ] }),
    (content == null ? void 0 : content.content) && /* @__PURE__ */ jsx178("p", { className: "text-20 mx-auto mt-3 max-w-[43.4rem] font-body opacity-80 md:mt-5", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.content } }),
    ((_f = content == null ? void 0 : content.links) == null ? void 0 : _f.length) > 0 && /* @__PURE__ */ jsx178("div", { className: "mt-6 md:mt-12", children: /* @__PURE__ */ jsx178(LinkGroup_default, { links: content == null ? void 0 : content.links }) })
  ] });
}
var SportsMastheadContent_default = SportsMastheadContent;

// src/components/flexible/mastheads/components/SportsMasthead/SportsMastheadPitchMob.tsx
import { m as m50 } from "framer-motion";
import { jsx as jsx179, jsxs as jsxs149 } from "react/jsx-runtime";
function SportsMastheadPitchMob() {
  const draw = {
    hidden: { pathLength: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "easeOut", duration: 2.6 }
        }
      };
    }
  };
  return /* @__PURE__ */ jsx179("div", { className: "-mx-8 mt-12 w-[calc(100%+4rem)]", children: /* @__PURE__ */ jsxs149(m50.svg, { width: "100%", height: "100%", viewBox: "0 0 743 625", fill: "none", xmlns: "http://www.w3.org/2000/svg", initial: "hidden", animate: "visible", children: [
    /* @__PURE__ */ jsx179(
      m50.rect,
      {
        x: "509.93",
        y: "143.199",
        width: "333.712",
        height: "277.003",
        transform: "rotate(90 509.93 143.199)",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: 1
      }
    ),
    /* @__PURE__ */ jsx179(
      m50.path,
      {
        d: "M267.434 143.201C267.434 129.596 270.114 116.124 275.32 103.554C280.527 90.9844 288.158 79.5632 297.779 69.9428C307.399 60.3223 318.82 52.6909 331.39 47.4844C343.96 42.2778 357.432 39.5981 371.037 39.5981C384.643 39.5981 398.115 42.2778 410.685 47.4844C423.254 52.691 434.675 60.3223 444.296 69.9428C453.916 79.5632 461.548 90.9844 466.754 103.554C471.961 116.124 474.641 129.596 474.641 143.201",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: 1
      }
    ),
    /* @__PURE__ */ jsx179(
      m50.path,
      {
        d: "M740 623.091L741.091 623.091L741.091 622L741.091 371.5C741.091 167.381 575.619 1.90943 371.5 1.90942C167.381 1.90941 1.90942 167.381 1.90941 371.5L1.9094 622L1.9094 623.091L2.99997 623.091L740 623.091Z",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: 1
      }
    )
  ] }) });
}
var SportsMastheadPitchMob_default = SportsMastheadPitchMob;

// src/components/flexible/mastheads/components/SportsMasthead/SportsMastheadPitchDesktop.tsx
import { m as m51 } from "framer-motion";
import { jsx as jsx180, jsxs as jsxs150 } from "react/jsx-runtime";
function SportsMastheadPitchDesktop({ flip = false }) {
  const draw = {
    hidden: { pathLength: 0 },
    visible: (i) => {
      const delay = flip ? 0 : 0.2 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "easeOut", duration: 2.6 }
        }
      };
    }
  };
  return /* @__PURE__ */ jsx180("div", { className: "h-full", style: { transform: flip ? "" : "rotate(180deg)" }, children: /* @__PURE__ */ jsxs150(m51.svg, { width: "100%", height: "100%", viewBox: "0 0 625 743", fill: "none", xmlns: "http://www.w3.org/2000/svg", initial: "hidden", animate: "visible", children: [
    /* @__PURE__ */ jsx180(
      m51.rect,
      {
        x: "481.801",
        y: "509.93",
        width: "333.712",
        height: "277.003",
        transform: "rotate(-180 481.801 509.93)",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: flip ? 2 : 1
      }
    ),
    /* @__PURE__ */ jsx180(
      m51.path,
      {
        d: "M481.799 267.434C495.404 267.434 508.876 270.114 521.446 275.32C534.016 280.527 545.437 288.158 555.057 297.779C564.678 307.399 572.309 318.82 577.516 331.39C582.722 343.96 585.402 357.432 585.402 371.037C585.402 384.643 582.722 398.115 577.516 410.685C572.309 423.254 564.678 434.675 555.057 444.296C545.437 453.916 534.016 461.548 521.446 466.754C508.876 471.961 495.404 474.641 481.799 474.641",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: flip ? 2 : 1
      }
    ),
    /* @__PURE__ */ jsx180(
      m51.path,
      {
        d: "M1.90936 740L1.90936 741.091L2.99994 741.091L253.5 741.091C457.619 741.091 623.091 575.619 623.091 371.5C623.091 167.381 457.619 1.90941 253.5 1.90939L3 1.90937L1.90943 1.90937L1.90943 2.99995L1.90936 740Z",
        stroke: "#F3F3F4",
        strokeWidth: "2.18112",
        variants: draw,
        custom: flip ? 2 : 1
      }
    )
  ] }) });
}
var SportsMastheadPitchDesktop_default = SportsMastheadPitchDesktop;

// src/components/flexible/mastheads/components/SportsMasthead/Player.tsx
init_Wp();
import { useState as useState43 } from "react";
import { m as m52, AnimatePresence as AnimatePresence15 } from "framer-motion";
import clsx67 from "clsx";
import { useWindowSize as useWindowSize16 } from "react-use";
import { jsx as jsx181, jsxs as jsxs151 } from "react/jsx-runtime";
var PlayerPosition = [
  { top: "", right: "", bottom: "86%", left: "5%" },
  { top: "", right: "", bottom: "82%", left: "35%" },
  { top: "", right: "", bottom: "93%", left: "65%" },
  { top: "", right: "", bottom: "75%", left: "98%" },
  { smallBottom: "30%", smallLeft: "85%", bottom: "29%", left: "98%" },
  { smallBottom: "0%", smallLeft: "80%", bottom: "10%", left: "80%" },
  { smallBottom: "15%", smallLeft: "90%", bottom: "0%", left: "55%" },
  { smallBottom: "2%", smallLeft: "0%", bottom: "5%", left: "30%" },
  { smallBottom: "15%", smallLeft: "25%", bottom: "16%", left: "10%" },
  { smallBottom: "35%", smallLeft: "20%", bottom: "47%", left: "0%" }
];
function Player({ player, interval, isInView, isDesktop, showPlayer }) {
  const chartValue = (player == null ? void 0 : player.stat_total_percentage) ? player == null ? void 0 : player.stat_percentage : Number(player == null ? void 0 : player.stat_10) * 10;
  const [activePlayer, setActivePlayer] = useState43(-1);
  const { width: windowWidth } = useWindowSize16();
  let isActive = false;
  if (showPlayer === interval) {
    isActive = true;
  }
  if (activePlayer === interval) {
    isActive = true;
  }
  let themeHex = "";
  let themeBg = "";
  let themeText = "";
  if (interval % 2) {
    themeHex = "#0000DC";
    themeBg = "bg-blue";
    themeText = "text-blue";
  } else {
    themeHex = "#F76B6A";
    themeBg = "bg-lightRed";
    themeText = "text-lightRed";
  }
  const isMobile = windowWidth < 768;
  const leftThreshold = isMobile ? 20 : 10;
  const rightThreshold = isMobile ? 75 : 90;
  const getAbPosition = (position) => {
    const leftNumber = isMobile ? Number(position == null ? void 0 : position.smallLeft.replace("%", "")) : Number(position == null ? void 0 : position.left.replace("%", ""));
    if (leftNumber < leftThreshold) {
      return "left-[130%]";
    }
    if (leftNumber > rightThreshold) {
      return "right-[130%]";
    }
    return "left-[130%]";
  };
  return /* @__PURE__ */ jsxs151(
    m52.div,
    {
      className: "absolute z-10 inline-flex",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 },
      transition: { delay: interval * 0.2, duration: 0.2, ease: "easeOut" },
      style: {
        bottom: isDesktop ? PlayerPosition[interval].bottom : PlayerPosition[interval].smallBottom,
        left: isDesktop ? PlayerPosition[interval].left : PlayerPosition[interval].smallLeft
      },
      children: [
        /* @__PURE__ */ jsx181("div", { className: `rounded-full transition-colors duration-200 ${isActive ? "bg-navy/5" : "bg-white"}`, children: /* @__PURE__ */ jsx181(
          m52.button,
          {
            type: "button",
            "aria-label": "Show Player Stats",
            className: "flex h-12 w-12 items-center justify-center rounded-full p-[.2rem] transition-all duration-300 ease-out",
            onTap: isDesktop ? null : () => setActivePlayer(interval),
            onMouseEnter: isDesktop ? () => setActivePlayer(interval) : null,
            onMouseLeave: () => setActivePlayer(-1),
            animate: {
              background: isActive ? `conic-gradient(${themeHex} 0%, ${themeHex} ${chartValue}%, transparent ${chartValue}%)` : "conic-gradient(#0D122605 0%, #0D122605 0%, transparent 0%, transparent 100%)"
            },
            children: /* @__PURE__ */ jsx181("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ jsx181("span", { className: `block h-2 w-2 rounded-full ${themeBg}` }) })
          }
        ) }),
        /* @__PURE__ */ jsx181(AnimatePresence15, { children: isActive && // player info
        /* @__PURE__ */ jsxs151("div", { className: clsx67(getAbPosition(PlayerPosition == null ? void 0 : PlayerPosition[interval]), "absolute z-10 flex space-x-4"), children: [
          /* @__PURE__ */ jsx181(
            m52.div,
            {
              className: `relative aspect-[1/1] h-12 overflow-hidden rounded-[.22rem] ${themeBg}`,
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: {
                duration: 0.2,
                ease: "easeOut"
              },
              children: /* @__PURE__ */ jsx181(WpImage, { image: player == null ? void 0 : player.image, fill: true, className: "h-full w-full object-cover" })
            }
          ),
          /* @__PURE__ */ jsxs151(
            m52.div,
            {
              initial: { opacity: 0, x: -30, scale: 0.8 },
              animate: { opacity: 1, x: 0, scale: 1 },
              exit: { opacity: 0, x: -30, scale: 0.8 },
              transition: {
                duration: 0.2,
                ease: "easeOut",
                delay: 0.1
              },
              children: [
                /* @__PURE__ */ jsx181("span", { className: "text-16 whitespace-nowrap font-medium opacity-80", dangerouslySetInnerHTML: { __html: player == null ? void 0 : player.name } }),
                /* @__PURE__ */ jsxs151("div", { className: "whitespace-nowrap ", children: [
                  /* @__PURE__ */ jsx181("span", { className: "sports-player-stat font-body opacity-[.65]", dangerouslySetInnerHTML: { __html: player == null ? void 0 : player.stat_caption } }),
                  /* @__PURE__ */ jsx181(
                    "span",
                    {
                      className: `sports-player-stat ml-1 font-semibold ${themeText}`,
                      dangerouslySetInnerHTML: { __html: (player == null ? void 0 : player.stat_total_percentage) ? `${player == null ? void 0 : player.stat_percentage}%` : player == null ? void 0 : player.stat_10 }
                    }
                  )
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
var Player_default = Player;

// src/components/flexible/mastheads/components/SportsMasthead/Stats.tsx
init_TextStrokeStack();
import { jsx as jsx182, jsxs as jsxs152 } from "react/jsx-runtime";
function Stats({ stats }) {
  return /* @__PURE__ */ jsxs152("div", { className: "relative mx-auto grid w-[90%] max-w-[66.375rem] gap-y-8 md:grid-cols-3 md:gap-x-10 md:pb-[3.625rem]", children: [
    stats == null ? void 0 : stats.map((item, index) => /* @__PURE__ */ jsxs152("div", { className: "space-y-3 px-4 text-center md:space-y-4", children: [
      /* @__PURE__ */ jsx182("div", { className: "mx-auto max-w-[75%]", children: /* @__PURE__ */ jsx182(
        TextStrokeStack_default,
        {
          centerText: item.stat,
          topText: (item == null ? void 0 : item.old_stat) || item.stat,
          bottomText: (item == null ? void 0 : item.old_stat) || item.stat,
          int: index,
          options: {
            textColor: "navy",
            strokeColor: "navy",
            bgColor: "white",
            textSize: "64"
          }
        }
      ) }),
      /* @__PURE__ */ jsx182("p", { className: "text-20 font-heading !leading-[1.4] opacity-[.64]", dangerouslySetInnerHTML: { __html: item.caption } })
    ] }, item.stat)),
    /* @__PURE__ */ jsx182("div", { className: "absolute bottom-0 right-[95%] top-0 flex w-full justify-end text-blue md:right-[100%] md:top-[-60%] lg:top-[-100%] xl:right-[110%]", children: /* @__PURE__ */ jsx182(StatSpring, {}) }),
    /* @__PURE__ */ jsx182("div", { className: "absolute bottom-0 left-[95%] top-0 flex w-full justify-start text-blue md:left-[100%] md:top-[-60%] lg:top-[-100%] xl:left-[110%]", children: /* @__PURE__ */ jsx182("div", { style: { transform: "rotateY(180deg)" }, children: /* @__PURE__ */ jsx182(StatSpring, {}) }) })
  ] });
}
var Stats_default = Stats;
function StatSpring() {
  return /* @__PURE__ */ jsxs152("svg", { width: "295", height: "435", viewBox: "0 0 295 435", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs152("g", { clipPath: "url(#clip0_3966_2421)", children: [
      /* @__PURE__ */ jsx182("path", { d: "M8.57812 434.898L8.57802 137.519", stroke: "currentColor", strokeWidth: "7.43448" }),
      /* @__PURE__ */ jsx182("path", { d: "M25.9688 434.898L25.9686 137.519", stroke: "currentColor", strokeWidth: "7.89914" }),
      /* @__PURE__ */ jsx182("path", { d: "M43.3555 434.898L43.3554 137.519", stroke: "currentColor", strokeWidth: "8.36379" }),
      /* @__PURE__ */ jsx182("path", { d: "M60.7422 434.898L60.7421 137.519", stroke: "currentColor", strokeWidth: "8.82845" }),
      /* @__PURE__ */ jsx182("path", { d: "M78.1289 434.898L78.1288 137.519", stroke: "currentColor", strokeWidth: "9.2931" }),
      /* @__PURE__ */ jsx182("path", { d: "M95.5156 434.898L95.5155 137.519", stroke: "currentColor", strokeWidth: "9.75776" }),
      /* @__PURE__ */ jsx182("path", { d: "M112.902 434.898L112.902 137.519", stroke: "currentColor", strokeWidth: "10.2224" }),
      /* @__PURE__ */ jsx182("path", { d: "M130.289 434.898L130.289 137.519", stroke: "currentColor", strokeWidth: "10.6871" }),
      /* @__PURE__ */ jsx182("path", { d: "M147.676 434.898L147.676 137.519", stroke: "currentColor", strokeWidth: "11.1517" }),
      /* @__PURE__ */ jsx182("path", { d: "M165.062 434.898L165.062 137.519", stroke: "currentColor", strokeWidth: "11.6164" }),
      /* @__PURE__ */ jsx182("path", { d: "M182.449 434.898L182.449 137.519", stroke: "currentColor", strokeWidth: "12.081" }),
      /* @__PURE__ */ jsx182("path", { d: "M199.84 434.898L199.84 137.519", stroke: "currentColor", strokeWidth: "12.5457" }),
      /* @__PURE__ */ jsx182("path", { d: "M217.227 434.898L217.226 137.519", stroke: "currentColor", strokeWidth: "13.0103" }),
      /* @__PURE__ */ jsx182("path", { d: "M234.613 434.898L234.613 137.519", stroke: "currentColor", strokeWidth: "13.475" }),
      /* @__PURE__ */ jsx182("path", { d: "M252 434.898L252 137.519", stroke: "currentColor", strokeWidth: "13.9397" }),
      /* @__PURE__ */ jsx182("path", { d: "M269.387 434.898L269.387 137.519", stroke: "currentColor", strokeWidth: "14.4043" }),
      /* @__PURE__ */ jsx182("path", { d: "M286.773 434.898L286.773 137.519", stroke: "currentColor", strokeWidth: "14.869" }),
      /* @__PURE__ */ jsx182("path", { d: "M252 297.379L252 -0.000398159", stroke: "currentColor", strokeWidth: "0.464655" }),
      /* @__PURE__ */ jsx182("path", { d: "M234.613 297.379L234.613 -0.000398159", stroke: "currentColor", strokeWidth: "0.92931" }),
      /* @__PURE__ */ jsx182("path", { d: "M217.227 297.379L217.227 -0.000398159", stroke: "currentColor", strokeWidth: "1.39397" }),
      /* @__PURE__ */ jsx182("path", { d: "M199.84 297.379L199.84 -0.000398159", stroke: "currentColor", strokeWidth: "1.85862" }),
      /* @__PURE__ */ jsx182("path", { d: "M182.453 297.379L182.453 -0.000398159", stroke: "currentColor", strokeWidth: "2.32328" }),
      /* @__PURE__ */ jsx182("path", { d: "M165.066 297.379L165.067 -0.000398159", stroke: "currentColor", strokeWidth: "2.78793" }),
      /* @__PURE__ */ jsx182("path", { d: "M147.676 297.379L147.676 -0.000398159", stroke: "currentColor", strokeWidth: "3.25259" }),
      /* @__PURE__ */ jsx182("path", { d: "M130.289 297.379L130.289 -0.000398159", stroke: "currentColor", strokeWidth: "3.71724" }),
      /* @__PURE__ */ jsx182("path", { d: "M112.902 297.379L112.902 -0.000398159", stroke: "currentColor", strokeWidth: "4.1819" }),
      /* @__PURE__ */ jsx182("path", { d: "M95.5156 297.379L95.5157 -0.000398159", stroke: "currentColor", strokeWidth: "4.64655" }),
      /* @__PURE__ */ jsx182("path", { d: "M78.1289 297.379L78.129 -0.000398159", stroke: "currentColor", strokeWidth: "5.11121" }),
      /* @__PURE__ */ jsx182("path", { d: "M60.7422 297.379L60.7423 -0.000398159", stroke: "currentColor", strokeWidth: "5.57586" }),
      /* @__PURE__ */ jsx182("path", { d: "M43.3555 297.379L43.3556 -0.000398159", stroke: "currentColor", strokeWidth: "6.04052" }),
      /* @__PURE__ */ jsx182("path", { d: "M25.9688 297.379L25.9689 -0.000398159", stroke: "currentColor", strokeWidth: "6.50517" }),
      /* @__PURE__ */ jsx182("path", { d: "M8.58203 297.379L8.58214 -0.000398159", stroke: "currentColor", strokeWidth: "6.96983" })
    ] }),
    /* @__PURE__ */ jsx182("defs", { children: /* @__PURE__ */ jsx182("clipPath", { id: "clip0_3966_2421", children: /* @__PURE__ */ jsx182("rect", { width: "295", height: "435", fill: "white" }) }) })
  ] });
}

// src/components/flexible/mastheads/components/SportsMasthead.tsx
import { Fragment as Fragment28, jsx as jsx183, jsxs as jsxs153 } from "react/jsx-runtime";
function SportsMasthead({ content, players, remove_stats, stats }) {
  var _a;
  const pitchRef = useRef33(null);
  const isInView = useInView21(pitchRef, { once: true, amount: 0.4 });
  const { width: windowWidth } = useWindowSize3();
  const isDesktop = windowWidth >= 768;
  const [activeWord, setActiveWord] = useState44(0);
  useAutoTransition_default({
    ref: pitchRef,
    max: (_a = content == null ? void 0 : content.heading) == null ? void 0 : _a.rotating_text.length,
    interval: 4e3,
    active: activeWord,
    setter: setActiveWord,
    controls: null
  });
  const [showPlayer, setShowPlayer] = useState44(-1);
  const min = isDesktop ? 0 : 7;
  const max = isDesktop ? players == null ? void 0 : players.length : Number(players == null ? void 0 : players.length) - 1;
  const [previousNumber, setPreviousNumber] = useState44(null);
  useEffect26(() => {
    const newNumber = GetRandomPlayerNumber_default(min, max, previousNumber);
    setShowPlayer(newNumber);
    setPreviousNumber(newNumber);
  }, [activeWord]);
  return /* @__PURE__ */ jsxs153(LazyMotion36, { features: domMax6, children: [
    /* @__PURE__ */ jsxs153("div", { ref: pitchRef, className: "relative pt-12 md:py-[10.875rem]", children: [
      /* @__PURE__ */ jsx183(SportsMastheadContent_default, { content, activeWord }),
      /* @__PURE__ */ jsx183("div", { className: "absolute inset-0 z-[5]", children: players == null ? void 0 : players.map((player, index) => {
        if (!isDesktop && index < 4) {
          return null;
        }
        return /* @__PURE__ */ jsx183(Player_default, { player, interval: index, isInView, isDesktop, showPlayer: Math.floor(showPlayer) }, index);
      }) }),
      isDesktop ? /* @__PURE__ */ jsxs153(Fragment28, { children: [
        /* @__PURE__ */ jsx183("div", { className: "absolute inset-y-0 left-[90%] z-0 w-1/2", children: /* @__PURE__ */ jsx183(SportsMastheadPitchDesktop_default, {}) }),
        /* @__PURE__ */ jsx183("div", { className: "absolute inset-y-0 right-[90%] z-0 w-1/2", children: /* @__PURE__ */ jsx183(SportsMastheadPitchDesktop_default, { flip: true }) })
      ] }) : (
        // mobile pitch
        /* @__PURE__ */ jsx183(SportsMastheadPitchMob_default, {})
      )
    ] }),
    !remove_stats && /* @__PURE__ */ jsx183(Stats_default, { stats })
  ] });
}
var SportsMasthead_default = SportsMasthead;

// src/components/flexible/mastheads/components/FormMasthead.tsx
init_ColorHelpers();
import { jsx as jsx184, jsxs as jsxs154 } from "react/jsx-runtime";
function getFormAspectRatio(aspect_ratio) {
}
function FormMasthead({ content, form_embed, spring_colour, form_aspect_ratio }) {
  const heading_tag = content == null ? void 0 : content.heading_tag;
  const HeadingTag = heading_tag || "h2";
  return /* @__PURE__ */ jsxs154("div", { className: " grid gap-y-10 pb-12 pt-8 md:grid-cols-2 md:items-center md:gap-x-6 md:pb-20 md:pt-4 lg:pb-[6.125rem]", children: [
    /* @__PURE__ */ jsx184("div", { children: /* @__PURE__ */ jsxs154("div", { className: "max-w-[30.875rem]", children: [
      (content == null ? void 0 : content.subheading) && /* @__PURE__ */ jsx184("span", { className: "text-15 mb-3 inline-flex font-body opacity-80 md:mb-6", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.subheading } }),
      /* @__PURE__ */ jsx184(HeadingTag, { dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.heading } }),
      (content == null ? void 0 : content.content) && /* @__PURE__ */ jsx184("div", { className: "text-prose prose prose-lg mt-3 md:mt-5", dangerouslySetInnerHTML: { __html: content == null ? void 0 : content.content } })
    ] }) }),
    /* @__PURE__ */ jsxs154("div", { className: "relative md:pl-5", children: [
      /* @__PURE__ */ jsx184(
        "div",
        {
          className: `relative z-10 mx-auto  max-w-[32.5rem] rounded-md bg-lightGrey px-6 py-7 md:mr-0 md:rounded-[.75rem] ${getFormAspectRatio(form_aspect_ratio)}`,
          children: !!form_embed && /* @__PURE__ */ jsx184("div", { className: "h-full w-full overflow-scroll rounded-md md:rounded-[.75rem]", dangerouslySetInnerHTML: { __html: form_embed } })
        }
      ),
      (spring_colour == null ? void 0 : spring_colour.colours) !== "none" && /* @__PURE__ */ jsx184(
        "div",
        {
          className: `absolute inset-0 bottom-[-3rem] left-[-1.5rem] right-[-1.5rem] flex items-end md:bottom-[-5rem] md:left-0 lg:bottom-[-6.125rem] lg:right-[-5rem] ${getTextColor(spring_colour == null ? void 0 : spring_colour.colours)}`,
          children: /* @__PURE__ */ jsx184("div", { className: "h-auto w-full", children: /* @__PURE__ */ jsxs154("svg", { width: "100%", height: "100%", viewBox: "0 0 700 487", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx184("path", { d: "M478 1.00002L935 1", stroke: "currentColor", strokeWidth: "0.49655" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 19.5807L935 19.5806", stroke: "currentColor", strokeWidth: "0.9931" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 38.1613L935 38.1613", stroke: "currentColor", strokeWidth: "1.48965" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 56.742L935 56.7419", stroke: "currentColor", strokeWidth: "1.9862" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 75.3226L935 75.3226", stroke: "currentColor", strokeWidth: "2.48275" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 93.9032L935 93.9032", stroke: "currentColor", strokeWidth: "2.9793" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 112.484L935 112.484", stroke: "currentColor", strokeWidth: "3.47585" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 131.065L935 131.065", stroke: "currentColor", strokeWidth: "3.9724" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 149.645L935 149.645", stroke: "currentColor", strokeWidth: "4.46895" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 168.226L935 168.226", stroke: "currentColor", strokeWidth: "4.9655" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 186.806L935 186.806", stroke: "currentColor", strokeWidth: "5.46205" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 205.387L935 205.387", stroke: "currentColor", strokeWidth: "5.9586" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 223.968L935 223.968", stroke: "currentColor", strokeWidth: "6.45515" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 242.548L935 242.548", stroke: "currentColor", strokeWidth: "6.9517" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 261.129L935 261.129", stroke: "currentColor", strokeWidth: "7.44825" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 279.71L935 279.71", stroke: "currentColor", strokeWidth: "7.9448" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 298.29L935 298.29", stroke: "currentColor", strokeWidth: "8.44135" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 316.871L935 316.871", stroke: "currentColor", strokeWidth: "8.93789" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 335.452L935 335.452", stroke: "currentColor", strokeWidth: "9.43444" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 354.032L935 354.032", stroke: "currentColor", strokeWidth: "9.93099" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 372.613L935 372.613", stroke: "currentColor", strokeWidth: "10.4275" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 391.194L935 391.194", stroke: "currentColor", strokeWidth: "10.9241" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 409.774L935 409.774", stroke: "currentColor", strokeWidth: "11.4206" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 428.355L935 428.355", stroke: "currentColor", strokeWidth: "11.9172" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 446.936L935 446.936", stroke: "currentColor", strokeWidth: "12.4137" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 465.516L935 465.516", stroke: "currentColor", strokeWidth: "12.9103" }),
            /* @__PURE__ */ jsx184("path", { d: "M478 484.097L935 484.097", stroke: "currentColor", strokeWidth: "13.4068" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 205L547 205", stroke: "currentColor", strokeWidth: "0.49655" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 223.581L547 223.581", stroke: "currentColor", strokeWidth: "0.9931" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 242.161L547 242.161", stroke: "currentColor", strokeWidth: "1.48965" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 260.742L547 260.742", stroke: "currentColor", strokeWidth: "1.9862" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 279.323L547 279.323", stroke: "currentColor", strokeWidth: "2.48275" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 297.903L547 297.903", stroke: "currentColor", strokeWidth: "2.9793" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 316.484L547 316.484", stroke: "currentColor", strokeWidth: "3.47585" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 335.065L547 335.065", stroke: "currentColor", strokeWidth: "3.9724" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 353.645L547 353.645", stroke: "currentColor", strokeWidth: "4.46895" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 372.226L547 372.226", stroke: "currentColor", strokeWidth: "4.9655" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 390.807L547 390.806", stroke: "currentColor", strokeWidth: "5.46205" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 409.387L547 409.387", stroke: "currentColor", strokeWidth: "5.9586" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 427.968L547 427.968", stroke: "currentColor", strokeWidth: "6.45515" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 446.548L547 446.548", stroke: "currentColor", strokeWidth: "6.9517" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 465.129L547 465.129", stroke: "currentColor", strokeWidth: "7.44825" }),
            /* @__PURE__ */ jsx184("path", { d: "M0 483.71L547 483.71", stroke: "currentColor", strokeWidth: "7.9448" })
          ] }) })
        }
      )
    ] })
  ] });
}
var FormMasthead_default = FormMasthead;

// src/components/flexible/mastheads/MastheadsHandler.tsx
import { jsx as jsx185 } from "react/jsx-runtime";
function MastheadsHandler({ components }) {
  const layoutComponents = {
    video_stats_masthead: VideoStatsMasthead_default,
    three_col_lines_masthead: ThreeColLinesMasthead_default,
    text_masthead: TextMasthead_default,
    two_column_masthead: TwoColumnMasthead_default,
    stats_cards_masthead: StatsCardsMasthead_default,
    two_column_stats_masthead: TwoColumnStatsMasthead_default,
    blog_masthead: BlogMasthead_default,
    newsroom_masthead: NewsroomMasthead_default,
    fan_engagement_masthead: FanEngagementMasthead_default,
    sports_masthead: SportsMasthead_default,
    form_masthead: FormMasthead_default
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx185(Fragment29, { children: LayoutComponent && /* @__PURE__ */ jsx185(LayoutComponent, __spreadValues({}, rest), index) }, index);
  });
}
var MastheadsHandler_default = MastheadsHandler;

// src/components/flexible/podcast/PodcastHandler.tsx
import React38 from "react";
import dynamic8 from "next/dynamic";
import { jsx as jsx188 } from "react/jsx-runtime";
var FeaturedPodcast2 = dynamic8(() => Promise.resolve().then(() => (init_FeaturedPodcast(), FeaturedPodcast_exports)));
var PodcastIndex2 = dynamic8(() => Promise.resolve().then(() => (init_PodcastIndex(), PodcastIndex_exports)));
function PodcastHandler({ components, sectionBG }) {
  const layoutComponents = {
    featured_podcast: FeaturedPodcast2,
    podcast_index: PodcastIndex2
  };
  return components == null ? void 0 : components.map((layout, index) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponents[layoutName];
    return /* @__PURE__ */ jsx188(React38.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx188(LayoutComponent, __spreadProps(__spreadValues({}, rest), { sectionBG }), index) }, index);
  });
}
var PodcastHandler_default = PodcastHandler;

// src/components/layouts/ComponentRenderer.tsx
import { jsx as jsx189 } from "react/jsx-runtime";
function ComponentRenderer({ components = [], pageId = null, sectionBG }) {
  const layoutComponentsMap = {
    content: ContentHandler_default,
    media: MediaHandler_default,
    customers: CustomersHandler_default,
    learn_blog: BlogHandler_default,
    conversions: ConversionsHandler_default,
    company: CompanyHandler_default,
    mastheads: MastheadsHandler_default,
    podcast: PodcastHandler_default
  };
  return components == null ? void 0 : components.map((layout, i) => {
    const _a = layout, { acf_fc_layout: layoutName } = _a, rest = __objRest(_a, ["acf_fc_layout"]);
    const LayoutComponent = layoutComponentsMap == null ? void 0 : layoutComponentsMap[layoutName];
    return /* @__PURE__ */ jsx189(React39.Fragment, { children: LayoutComponent && /* @__PURE__ */ jsx189(
      LayoutComponent,
      __spreadValues({
        sectionBG
      }, rest),
      pageId + layoutName + i
    ) }, pageId + layoutName + i);
  });
}

// src/components/layouts/LayoutRenderer.tsx
import React40 from "react";

// src/components/landing/FourOhFour.tsx
init_text();
init_Asset();
init_LinkGroup();
import { jsx as jsx190, jsxs as jsxs157 } from "react/jsx-runtime";

// src/components/landing/Legal/Legal.tsx
init_LegalMasthead();

// src/components/landing/Legal/components/LegalMain.tsx
import { useLayoutEffect, useRef as useRef36, useState as useState47 } from "react";

// src/components/landing/Legal/components/MainSection.tsx
init_parseSlug();
import { useInView as useInView22 } from "framer-motion";
import { useEffect as useEffect27, useRef as useRef34 } from "react";
import { jsx as jsx191, jsxs as jsxs158 } from "react/jsx-runtime";

// src/components/landing/Legal/components/NavMobile.tsx
init_parseSlug();
init_context();
import clsx68 from "clsx";
import { useRouter as useRouter6 } from "next/router";
import { useContext as useContext7, useEffect as useEffect28, useRef as useRef35, useState as useState46 } from "react";
import { useInView as useInView23, useMotionValueEvent as useMotionValueEvent4, useScroll as useScroll5 } from "framer-motion";
import { jsx as jsx192, jsxs as jsxs159 } from "react/jsx-runtime";

// src/components/landing/Legal/components/NavDesktop.tsx
init_parseSlug();
import { LayoutGroup as LayoutGroup3, motion as motion10 } from "framer-motion";
import { jsx as jsx193, jsxs as jsxs160 } from "react/jsx-runtime";

// src/components/landing/Legal/components/LegalMain.tsx
import { jsx as jsx194, jsxs as jsxs161 } from "react/jsx-runtime";

// src/components/landing/Legal/Legal.tsx
import { jsx as jsx195, jsxs as jsxs162 } from "react/jsx-runtime";

// src/components/layouts/LandingPage.tsx
import { jsx as jsx196 } from "react/jsx-runtime";

// src/components/layouts/Section/Section.tsx
import clsx69 from "clsx";
init_useSection();
import { jsx as jsx197 } from "react/jsx-runtime";

// src/components/layouts/LayoutRenderer.tsx
import { jsx as jsx198, jsxs as jsxs163 } from "react/jsx-runtime";

// src/components/layouts/index.ts
init_useSection();

// src/components/global/PasswordProtect.tsx
import { useState as useState48 } from "react";
import { jsx as jsx199 } from "react/jsx-runtime";

// src/components/templates/Layout.tsx
init_ColorHelpers();
import { jsx as jsx200, jsxs as jsxs164 } from "react/jsx-runtime";

// src/components/templates/Page.tsx
import { jsx as jsx201 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/components/SingleCustomerStoryMasthead.tsx
init_Icons();
init_Asset();
init_Wp();
init_context();
import { useRouter as useRouter7 } from "next/navigation";
import { useContext as useContext8 } from "react";

// src/components/templates/SingleCustomerStory/components/SingleCustomerBannerSidebar.tsx
init_Button();
init_Wp();
import { jsx as jsx202, jsxs as jsxs165 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/components/SingleCustomerStoryMasthead.tsx
import { jsx as jsx203, jsxs as jsxs166 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/components/SingleCustomerStoryBody.tsx
import clsx75 from "clsx";

// src/components/article/ArticleBlocksRenderer.tsx
init_Asset();
import React41 from "react";
import dynamic9 from "next/dynamic";
import clsx73 from "clsx";
import { jsx as jsx211, jsxs as jsxs173 } from "react/jsx-runtime";
var DynamicTextContent = dynamic9(() => Promise.resolve().then(() => (init_ArticleTextContent(), ArticleTextContent_exports)), { ssr: false });
var DynamicIndexedFeatureCards = dynamic9(() => Promise.resolve().then(() => (init_ArticleIndexedFeatureCards(), ArticleIndexedFeatureCards_exports)), { ssr: false });
var DynamicQuote = dynamic9(() => Promise.resolve().then(() => (init_ArticleQuote(), ArticleQuote_exports)), { ssr: false });
var DynamicTripleColStats = dynamic9(() => Promise.resolve().then(() => (init_ArticleTripleColStats(), ArticleTripleColStats_exports)), { ssr: false });
var DynamicBasicQuotes = dynamic9(() => Promise.resolve().then(() => (init_ArticleBasicQuotes(), ArticleBasicQuotes_exports)), { ssr: false });
var DynamicIndexedListItems = dynamic9(() => Promise.resolve().then(() => (init_ArticleIndexedListItems(), ArticleIndexedListItems_exports)), { ssr: false });
var DynamicTextStrokeStackList = dynamic9(() => Promise.resolve().then(() => (init_ArticleTextStrokeStackList(), ArticleTextStrokeStackList_exports)), { ssr: false });
var DynamicFAQsAccordion = dynamic9(() => Promise.resolve().then(() => (init_FAQsAccordion(), FAQsAccordion_exports)), { ssr: false });

// src/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsGrid.tsx
init_PostPreviewCard();
import { jsx as jsx212, jsxs as jsxs174 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/components/SingleCustomerStoryBody.tsx
init_useSection();
init_parseSlug();
init_Wp();
import { useLayoutEffect as useLayoutEffect2, useMemo as useMemo4, useState as useState50 } from "react";

// src/components/templates/SingleResource/components/PostShare.tsx
init_Icons();
import clsx74 from "clsx";
import dynamic10 from "next/dynamic";
import { useEffect as useEffect30, useState as useState49 } from "react";
import { jsx as jsx213, jsxs as jsxs175 } from "react/jsx-runtime";
var TwitterShareButton = dynamic10(() => import("react-share").then((mod) => mod.TwitterShareButton), {
  ssr: false
});
var LinkedinShareButton = dynamic10(() => import("react-share").then((mod) => mod.LinkedinShareButton), {
  ssr: false
});
var FacebookShareButton = dynamic10(() => import("react-share").then((mod) => mod.FacebookShareButton), {
  ssr: false
});

// src/components/templates/SingleCustomerStory/components/CustomerNavDesktop.tsx
import { LayoutGroup as LayoutGroup4, motion as motion11 } from "framer-motion";
import { jsx as jsx214, jsxs as jsxs176 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/components/SingleCustomerStoryBody.tsx
import { Fragment as Fragment30, jsx as jsx215, jsxs as jsxs177 } from "react/jsx-runtime";

// src/components/templates/SingleCustomerStory/SingleCustomerStory.tsx
import { jsx as jsx216, jsxs as jsxs178 } from "react/jsx-runtime";

// src/components/templates/SingleJob/SingleJob.tsx
import Link45 from "next/link";
init_Icons();

// src/components/templates/SingleJob/FormBuilder.tsx
init_Button();
init_links();
init_trackEvent();
import { useState as useState51 } from "react";
import isEqual from "lodash/isEqual";
import { useForm } from "react-hook-form";
import { useRouter as useRouter8 } from "next/navigation";
import fetch2 from "isomorphic-fetch";

// src/components/templates/SingleJob/FormField.tsx
import { Controller } from "react-hook-form";
import Select from "react-select";
import { Fragment as Fragment31, jsx as jsx217, jsxs as jsxs179 } from "react/jsx-runtime";

// src/components/templates/SingleJob/FormBuilder.tsx
import { jsx as jsx218, jsxs as jsxs180 } from "react/jsx-runtime";

// src/components/templates/SingleJob/SingleJob.tsx
import { jsx as jsx219, jsxs as jsxs181 } from "react/jsx-runtime";

// src/components/templates/SingleNews/components/SingleNewsMasthead.tsx
init_Icons();
init_Asset();
import Link46 from "next/link";

// src/components/templates/SingleResource/components/AuthorAndDate.tsx
init_Wp();
import clsx76 from "clsx";
import { jsx as jsx220, jsxs as jsxs182 } from "react/jsx-runtime";

// src/components/templates/SingleNews/components/SingleNewsMasthead.tsx
import { jsx as jsx221, jsxs as jsxs183 } from "react/jsx-runtime";

// src/components/templates/SingleNews/components/SingleNewsBody.tsx
import clsx77 from "clsx";
init_FeaturedBlogPostsSlider();
init_useSection();
import { Fragment as Fragment32, jsx as jsx222, jsxs as jsxs184 } from "react/jsx-runtime";

// src/components/templates/SingleNews/SingleNews.tsx
import { jsx as jsx223, jsxs as jsxs185 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/BlogBody.tsx
import clsx78 from "clsx";
import { useState as useState52 } from "react";
init_FeaturedBlogPostsSlider();
init_LegalMasthead();
init_useSection();
init_text();
init_links();
init_Button();
init_PostAsideSubscribe();
import { Fragment as Fragment33, jsx as jsx224, jsxs as jsxs186 } from "react/jsx-runtime";
var buttonProps = getButtonLinkProps({
  title: "Subscribe",
  button: {
    background_color: "white",
    type: "default"
  },
  className: "font-semibold"
});

// src/components/templates/SingleResource/components/BlogMasthead.tsx
init_Icons();
init_Asset();
init_text();
init_PostTag();
import Link47 from "next/link";
import { useWindowSize as useWindowSize17 } from "react-use";
import { useInView as useInView26 } from "framer-motion";
import { useRef as useRef39 } from "react";
import clsx79 from "clsx";

// src/components/templates/SingleResource/components/VisualTags.tsx
import { Fragment as Fragment34, jsx as jsx225, jsxs as jsxs187 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/BlogMasthead.tsx
import { jsx as jsx226, jsxs as jsxs188 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/EventBody.tsx
import clsx81 from "clsx";
init_useSection();

// src/components/templates/SingleResource/components/ProfileCard.tsx
init_Wp();
import clsx80 from "clsx";
import { jsx as jsx227, jsxs as jsxs189 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/EventBody.tsx
import { jsx as jsx228, jsxs as jsxs190 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/EventMasthead.tsx
init_Icons();
init_TextStrokeStack();
init_useSection();
init_text();
import clsx82 from "clsx";
import Link48 from "next/link";
import { useRef as useRef40 } from "react";
import { useInView as useInView27 } from "framer-motion";
import { jsx as jsx229, jsxs as jsxs191 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/WebinarBody.tsx
import clsx83 from "clsx";
init_useSection();
init_Button();
init_links();
import { useState as useState53 } from "react";
import { jsx as jsx230, jsxs as jsxs192 } from "react/jsx-runtime";

// src/components/templates/SingleResource/components/WebinarMasthead.tsx
init_Icons();
init_Asset();
init_Button();
init_useSection();
import Link49 from "next/link";
import clsx84 from "clsx";
import { useInView as useInView28 } from "framer-motion";
import { useRef as useRef41 } from "react";
init_text();
init_links();
import { jsx as jsx231, jsxs as jsxs193 } from "react/jsx-runtime";

// src/components/templates/SingleResource/SingleResource.tsx
import { Fragment as Fragment35, jsx as jsx232, jsxs as jsxs194 } from "react/jsx-runtime";

// src/tokens/tokens.ts
var colors = {
  navy: "#0D1226",
  blue: "#0000DC",
  lightBlue: "#95ECFD",
  brightGreen: "#E1FF67",
  lightGreen: "#18C971",
  green: "#047C40",
  lightPurple: "#C2D1FF",
  purple: "#4337A8",
  lightOrange: "#FFEBAF",
  orange: "#FA5D00",
  lightRed: "#F76B6A",
  red: "#C20000",
  black: "#000000",
  lightGrey: "#F6F7F9",
  lavenderGrey: "#E7E7E9",
  white: "#ffffff",
  snow: "#FAFAFA"
};
var fontFamily = {
  heading: "ESKlarheitKurrentTRIAL",
  body: "RedHatText"
};
var screens = {
  xxs: "400px",
  xs: "480px",
  sm: "640px",
  md: "768px",
  "960": "960px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1420px",
  "3xl": "1536px"
};
var spacing = {
  "4.25": "1.063rem",
  "7.5": "1.875rem",
  "13": "3.25rem",
  "15": "3.75rem",
  "18": "4.5rem",
  "18.875": "4.719rem",
  "51": "12.75rem",
  "272": "68rem"
};

// src/index.ts
init_context();
export {
  Button_default as Button,
  CTASpring,
  ChevronDown,
  CircleArrow,
  CloseIcon,
  ComponentRenderer,
  ContactItemHighlightedLowerSpring,
  ContactItemHighlightedLowerSpringHover,
  ContactItemHighlightedUpperSpring,
  ContactItemHighlightedUpperSpringHover,
  ContactItemLowerSpring,
  ContactItemUpperSpring,
  ContactSalesFormLines,
  ContactTopRightArrowCircle,
  FacebookLogo,
  FeaturedLinkTopRightArrowCircle,
  Footer,
  FooterCTABottomLines,
  FooterCTATopLines,
  FooterFeaturedLinksArrow,
  GeniusFaviconIcon,
  GlobalContext,
  Header,
  HeaderLogoBottom,
  HeaderLogoTop,
  InputCloseIcon,
  LeadersGridPlusCircle,
  Link,
  LinkTypeRenderer,
  LinkedinLogo,
  MinusCircle,
  MobileChevron,
  NavLeftIcon,
  PlayArrow,
  PlusCircle,
  RightArrow,
  RightArrowCircle,
  SearchIcon,
  SliderCircleArrow,
  StockArrow,
  TestimonialSliderArrow,
  TopRightArrowCircle,
  UlItemBulletOrange,
  Xlogo,
  YoutubeLogo,
  colors,
  fontFamily,
  screens,
  spacing
};
