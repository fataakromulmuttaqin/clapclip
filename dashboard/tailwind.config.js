/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clipify Light Theme — bright, eye-friendly colors
        paper: "oklch(98% 0.005 100 / <alpha-value>)",
        paper2: "oklch(95% 0.008 100 / <alpha-value>)",
        paper3: "oklch(92% 0.01 100 / <alpha-value>)",
        ink: "oklch(22% 0.02 265 / <alpha-value>)",
        ink2: "oklch(35% 0.025 265 / <alpha-value>)",
        muted: "oklch(50% 0.02 265 / <alpha-value>)",
        brass: "oklch(52% 0.12 175 / <alpha-value>)",
        brassink: "oklch(22% 0.02 265 / <alpha-value>)",
        coral: "oklch(58% 0.14 168 / <alpha-value>)",
        ok: "oklch(55% 0.13 155 / <alpha-value>)",
        warn: "oklch(65% 0.14 78 / <alpha-value>)",
        danger: "oklch(55% 0.15 28 / <alpha-value>)",
        // legacy aliases
        background: "oklch(98% 0.005 100 / <alpha-value>)",
        surface: "oklch(95% 0.008 100 / <alpha-value>)",
        primary: "oklch(52% 0.12 175 / <alpha-value>)",
        accent: "oklch(58% 0.14 168 / <alpha-value>)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        sans: "var(--font-body)",
        serif: "var(--font-display)",
        mono: "var(--font-mono)",
      },
      borderColor: {
        rule: "var(--color-rule)",
        rule2: "var(--color-rule-2)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        input: "var(--radius-input)",
      },
      fontSize: {
        micro: ["10.5px", { letterSpacing: "0.10em" }],
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade': 'fadeIn 0.4s var(--ease-out)',
        // mobile shell: the nav drawer flies in from the edge, sheets rise
        'slide-in-left': 'slideInLeft 0.24s var(--ease-out)',
        'sheet-up': 'sheetUp 0.26s var(--ease-out)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        sheetUp: {
          from: { transform: 'translateY(12px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
