module.exports = {
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                accent: {
                    light: "#e9d5ff",
                    DEFAULT: "#d8b4fe"
                },
                dark: {
                    neutral: "#18181b",
                    white: "#ffffff",
                    grey: "#e2e8f0"
                }
            },
            animation: {
                "bounce-right": "bounce-right 0.8s infinite",
                "bounce-right-faster": "bounce-right 0.4s infinite",
                bubble: "bubble 20s linear infinite both",
                "bubble-second": "bubble-second 20s linear infinite both"
            },
            keyframes: {
                "bounce-right": {
                    "0%, 100%": {
                        transform: "translateX(25%)"
                    },
                    "50%": {
                        transform: "translateX(0)"
                    }
                },
                bubble: {
                    "0%": {
                        transform: "translateX(0) scale(0)"
                    },
                    "2%": {
                        transform: "translateX(2px) scale(1.1)"
                    },
                    "4%": {
                        transform: "translateX(3px) scale(0.9)"
                    },
                    "5.5%": {
                        transform: "translateX(4px) scale(1)"
                    },
                    "12.5%": {
                        transform: "translateX(7px)"
                    },
                    "17.5%": {
                        transform: "translateX(3px)"
                    },
                    "21.5%": {
                        transform: "translateX(-3px)"
                    },
                    "30%": {
                        transform: "translateX(2px)"
                    },
                    "40%": {
                        transform: "translateX(4px)"
                    },
                    "50%": {
                        transform: "translateX(16px) scale(1)",
                        bottom: "100%"
                    },
                    "100%": {
                        transform: "translateX(16px) scale(1)",
                        bottom: "100%"
                    }
                },
                "bubble-second": {
                    "0%": {
                        transform: "translate(0, 100 %)"
                    },
                    "2%": {
                        transform: "translate(-2px, 80 %)"
                    },
                    "4%": {
                        transform: "translate(-3px, 70 %)"
                    },
                    "7%": {
                        transform: "translate(-4px, 60 %)"
                    },
                    "12.5%": {
                        transform: "translate(-7px, 50 %)"
                    },
                    "17.5%": {
                        transform: "translate(-3px, 40 %)"
                    },
                    "21.5%": {
                        transform: "translate(5px, 30 %)"
                    },
                    "30%": {
                        transform: "translate(2px, 20 %)"
                    },
                    "40%": {
                        transform: "translate(-4px, 0 %)"
                    },
                    "50%": {
                        transform: "translateX(-16px)",
                        bottom: "100%"
                    },
                    "100%": {
                        transform: "translateX(16px)",
                        bottom: "100%"
                    }
                }
            },
            fontSize: {
                base: ["15px", "18px"],
                lg: ["17px"],
                "5xl": ["2.5rem"]
            },
            fontFamily: {
                body: ["Fira Sans", "sans-serif"]
            }
        }
    },
    plugins: []
};
