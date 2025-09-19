import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        student: {
          DEFAULT: "hsl(var(--student))",
          foreground: "hsl(var(--student-foreground))",
          hover: "hsl(var(--student-hover))",
        },
        counselor: {
          DEFAULT: "hsl(var(--counselor))",
          foreground: "hsl(var(--counselor-foreground))",
          hover: "hsl(var(--counselor-hover))",
        },
        admin: {
          DEFAULT: "hsl(var(--admin))",
          foreground: "hsl(var(--admin-foreground))",
          hover: "hsl(var(--admin-hover))",
        },
        // EasyA specific colors
        'easya-deep': '#000102',
        'easya-navy': '#201559',
        'easya-purple': '#56538B',
        'easya-gray': '#524E62',
        'easya-light': '#A0A8B7',
        'easya-white': '#FAFBFD',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-student': 'var(--gradient-student)',
        'gradient-counselor': 'var(--gradient-counselor)',
        'gradient-admin': 'var(--gradient-admin)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'glow-intense': 'var(--shadow-glow-intense)',
        'glass': 'var(--glass-shadow)',
        'soft': 'var(--shadow-md)',
        'lifted': 'var(--shadow-lg)',
        'floating': 'var(--shadow-xl)',
        'neon': '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
      },
      fontFamily: {
        'display': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
