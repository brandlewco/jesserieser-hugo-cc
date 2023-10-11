module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "2000px",
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      gray: {
        600: "#718096",
        700: "#4a5568",
      },
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
    },
    backgroundColor: (theme) => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    fill: {
      current: "currentColor",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      default: "1",
    },
    flexShrink: {
      0: "0",
      default: "1",
    },
    fontFamily: {
      sans: [
        '"ars-maquette-web"',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      28: "1.75rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    inset: {
      0: "0",
      neg: "-100px",
      auto: "auto",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      loose: "0.15em",
      looser: "0.2em",
      loosest: "0.25em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      50: "50px",
      100: "100px",
      150: "150px",
      200: "200px",
      250: "250px",
      300: "300px",
      350: "350px",
      400: "400px",
      450: "450px",
      500: "500px",
      550: "550px",
      600: "600px",
      650: "650px",
      700: "700px",
      750: "750px",
      800: "800px",
      850: "850px",
      900: "900px",
      950: "950px",
      1000: "1000px",
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "12%": "12.5%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    maxWidth: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
    },
    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      0: "0",
      full: "100%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      100: "1",
      "0-i": "0 !important",
      "25-i": "0.25 !important",
      "50-i": "0.5 !important",
      "75-i": "0.75 !important",
      "100-i": "1 !important",
    },
    padding: (theme) => theme("spacing"),
    stroke: {
      current: "currentColor",
    },
    textColor: (theme) => theme("colors"),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      24: "6rem",
      32: "8rem",
      48: "12rem",
      64: "16rem",
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "1/7": "14.285%",
      "1/8": "12.5%",
      "5/6": "83.33333%",
      "10/100": "10%",
      "15/100": "15%",
      "20/100": "20%",
      "25/100": "25%",
      "30/100": "30%",
      "33/100": "33.33333%",
      "35/100": "35%",
      "40/100": "40%",
      "45/100": "45%",
      "50/100": "50%",
      "55/100": "55%",
      "60/100": "60%",
      "66/100": "66.66667%",
      "70/100": "70%",
      "75/100": "75%",
      "80/100": "80%",
      "90/100": "90%",
      "100/100": "100%",
      115: "115%",
      "grid-four": "calc(25% - 1rem)",
      "grid-three": "calc(33% - 1rem)",
      "grid-two": "calc(50% - 1rem)",
      full: "100%",
      screen: "100vw",
    }),
    aspectRatio: {
      "4x3": "4 / 3",
      "8-5x11" : "8.5 / 11",
      "11x8-5" : "11 / 8.5",
      "9x16" : "9 / 16",
      "16x9" : "16 / 9",
      "5x4" : "5 / 4",
      "4x5" : "4 / 5",
      "4x3" : "4 / 3",
      "3x4" : "3 / 4",
      "2x3" : "2 / 3",
      "3x2" : "3 / 2",
      "1x2" : "1 / 2",
      "1x1" : "1 / 1",
    },
    zIndex: {
      auto: "auto",
      neg: "-100",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      100: "100",
      999: "999",
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    // tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
        "h-32",
        "w-10/100",
        "w-15/100",
        "w-20/100",
        "w-25/100",
        "w-30/100",
        "w-33/100",
        "w-40/100",
        "w-45/100",
        "w-50/100",
        "w-55/100",
        "w-60/100",
        "w-66/100",
        "w-70/100",
        "w-75/100",
        "w-80/100",
        "w-90/100",
        "w-100/100",
        "sm:w-1/5",
        "sm:w-10/100",
        "sm:w-15/100",
        "sm:w-20/100",
        "sm:w-25/100",
        "sm:w-30/100",
        "sm:w-33/100",
        "sm:w-40/100",
        "sm:w-45/100",
        "sm:w-50/100",
        "sm:w-55/100",
        "sm:w-60/100",
        "sm:w-66/100",
        "sm:w-70/100",
        "sm:w-75/100",
        "sm:w-80/100",
        "sm:w-90/100",
        "sm:w-100/100",
        "sm:pt-16",
        "sm:pl-20",
        "sm:pr-16",
        "sm:pb-16",
        "sm:mt--50",
        "sm:mt--100",
        "sm:mt--150",
        "sm:mt--200",
        "sm:mt-50",
        "sm:mt-100",
        "sm:mt-150",
        "sm:mt-200",
        "sm:mt-250",
        "sm:mt-300",
        "sm:mt-350",
        "sm:mt-400",
        "sm:mt-450",
        "sm:mt-500",
        "sm:mt-550",
        "sm:mt-600",
        "sm:mt-650",
        "sm:mt-700",
        "sm:mt-750",
        "sm:mt-800",
        "sm:mt-850",
        "sm:mt-900",
        "sm:mt-950",
        "sm:mt-1000",
        "sm:mt-0",
        "sm:ml-0%",
        "sm:ml-5%",
        "sm:ml-10%",
        "sm:ml-15%",
        "sm:ml-20%",
        "sm:ml-25%",
        "sm:ml-30%",
        "sm:ml-35%",
        "sm:ml-40%",
        "sm:ml-45%",
        "sm:ml-50%",
        "sm:ml-55%",
        "sm:ml-60%",
        "sm:ml-65%",
        "sm:ml-70%",
        "sm:ml-75%",
        "sm:ml-80%",
        "sm:ml-85%",
        "sm:ml-90%",
        "sm:ml-95%",
        "sm:ml-100%",
        "sm:mr-0%",
        "sm:mr-5%",
        "sm:mr-10%",
        "sm:mr-15%",
        "sm:mr-20%",
        "sm:mr-25%",
        "sm:mr-30%",
        "sm:mr-35%",
        "sm:mr-40%",
        "sm:mr-45%",
        "sm:mr-50%",
        "sm:mr-55%",
        "sm:mr-60%",
        "sm:mr-65%",
        "sm:mr-70%",
        "sm:mr-75%",
        "sm:mr-80%",
        "sm:mr-85%",
        "sm:mr-90%",
        "sm:mr-95%",
        "sm:mr-100%",
        "sm:mx-40",
        "sm:p-2",
        "sm:px-1",
        "sm:px-2",
        "sm:px-20",
        "px-1",
        "m-8",
        "pt-12",
        "pb-4",
        "py-3",
        "mb-12",
        "sm:self-start",
        "sm:self-center",
        "sm:self-end",
        "sm:text-xs",
        "sm:text-sm",
        "sm:text-base",
        "sm:text-lg",
        "sm:text-2xl",
        "sm:text-4xl",
        "sm:text-5xl",
        "sm:text-6xl",
        "sm:text-7xl",
        "sm:text-8xl",
        "sm:text-9xl",
        "sm:text-10xl",
        "md:text-xs",
        "md:text-sm",
        "md:text-base",
        "md:text-lg",
        "md:text-2xl",
        "md:text-4xl",
        "md:text-5xl",
        "md:text-6xl",
        "md:text-7xl",
        "md:text-8xl",
        "md:text-9xl",
        "md:text-10xl",
        "leading-none",
        "leading-tight",
        "leading-snug",
        "leading-normal",
        "leading-relaxed",
        "leading-loose",
        "tracking-tighter",
        "tracking-tight",
        "tracking-normal",
        "tracking-wide",
        "tracking-wider",
        "tracking-widest",
        "text-left",
        "text-center",
        "text-right",
        "text-justified",
        "md:text-left",
        "md:text-center",
        "md:text-right",
        "md:text-justified",
        "font-hairline",
        "font-light",
        "font-normal",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "aspect-3x2",
        "aspect-2x3",
        "aspect-9x6",
        "aspect-16x9",
        "aspect-4x3",
        "aspect-5x4",
        "aspect-4x5",
        "aspect-3x4",
        "aspect-8-5x11",
        "aspect-11x8-5",
        "aspect-1x1",
        "sm:aspect-2x3",
        "sm:aspect-9x6",
        "sm:aspect-16x9",
        "sm:aspect-4x3",
        "sm:aspect-5x4",
        "sm:aspect-4x5",
        "sm:aspect-3x4",
        "sm:aspect-8-5x11",
        "sm:aspect-11x8-5",
        "sm:aspect-1x1",
        "sm:pr-6",
        "sm:pr-8",
        "object-contain",
        "gumroad-scroll-container",
  ],
}
