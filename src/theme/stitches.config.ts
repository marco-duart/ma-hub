import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Base
      bg: "#0b0d12",
      bgElev: "#121620",
      surface: "#181b23",
      surfaceHover: "#20242f",
      border: "#262a35",
      borderStrong: "#333846",

      text: "#e9edf5",
      textMuted: "#9aa3b2",
      textDim: "#6b7280",

      // Verticals — brand accents
      consultoria: "#38bdf8",       // ciano/azul — profissional
      consultoriaGlow: "#7dd3fc",
      axis: "#a855f7",              // violeta — tech
      axisGlow: "#d8b4fe",
      pixel: "#22c55e",             // verde neon — geek
      pixelGlow: "#86efac",

      danger: "#ef4444",
      success: "#22c55e",
      warning: "#f59e0b",
    },
    fonts: {
      display: "'Space Grotesk', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "22px",
      "2xl": "28px",
      "3xl": "36px",
      "4xl": "48px",
      "5xl": "64px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "40px",
      9: "48px",
      10: "64px",
      11: "80px",
      12: "96px",
    },
    radii: {
      sm: "6px",
      md: "10px",
      lg: "16px",
      xl: "22px",
      pill: "9999px",
    },
    shadows: {
      sm: "0 1px 2px rgba(0,0,0,0.35)",
      md: "0 10px 30px -10px rgba(0,0,0,0.5)",
      lg: "0 20px 60px -20px rgba(0,0,0,0.6)",
      glowConsultoria: "0 0 40px -5px rgba(56,189,248,0.45)",
      glowAxis: "0 0 40px -5px rgba(168,85,247,0.45)",
      glowPixel: "0 0 40px -5px rgba(34,197,94,0.45)",
    },
    transitions: {
      fast: "150ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      base: "250ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      slow: "450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
  utils: {
    px: (v: string | number) => ({ paddingLeft: v, paddingRight: v }),
    py: (v: string | number) => ({ paddingTop: v, paddingBottom: v }),
    mx: (v: string | number) => ({ marginLeft: v, marginRight: v }),
    my: (v: string | number) => ({ marginTop: v, marginBottom: v }),
    size: (v: string | number) => ({ width: v, height: v }),
  },
});

export const globalStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "html, body, #root": {
    margin: 0,
    padding: 0,
    minHeight: "100%",
    width: "100%",
    backgroundColor: "$bg",
    color: "$text",
    fontFamily: "$body",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
  },
  body: {
    backgroundImage: `
      radial-gradient(ellipse 80% 50% at 15% 0%, rgba(56,189,248,0.10), transparent 60%),
      radial-gradient(ellipse 60% 40% at 90% 20%, rgba(168,85,247,0.10), transparent 60%),
      radial-gradient(ellipse 60% 40% at 50% 100%, rgba(34,197,94,0.06), transparent 60%)
    `,
    backgroundAttachment: "fixed",
  },
  "h1, h2, h3, h4": {
    fontFamily: "$display",
    letterSpacing: "-0.02em",
    margin: 0,
  },
  p: { margin: 0 },
  a: { color: "inherit", textDecoration: "none" },
  button: { fontFamily: "inherit" },
  "::selection": { background: "rgba(56,189,248,0.35)", color: "#fff" },
});