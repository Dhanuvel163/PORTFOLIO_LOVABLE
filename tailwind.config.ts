import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'glide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
					}
				},
				'kinetic-entrance': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px) scale(0.8) rotateY(30deg)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'translateX(-10px) scale(1.05) rotateY(-5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) scale(1) rotateY(0deg)'
					}
				},
				'typography-entrance': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scaleY(0.3)',
						filter: 'blur(10px)'
					},
					'30%': {
						opacity: '0.4',
						transform: 'translateY(15px) scaleY(0.7)',
						filter: 'blur(5px)'
					},
					'60%': {
						opacity: '0.8',
						transform: 'translateY(5px) scaleY(0.9)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scaleY(1)',
						filter: 'blur(0px)'
					}
				},
				'stroke-draw': {
					'0%': {
						strokeDashoffset: '20',
						opacity: '0.3'
					},
					'50%': {
						strokeDashoffset: '0',
						opacity: '1'
					},
					'100%': {
						strokeDashoffset: '-20',
						opacity: '0.3'
					}
				},
				'fill-draw': {
					'0%': {
						strokeDashoffset: '20',
						opacity: '0.2'
					},
					'50%': {
						strokeDashoffset: '0',
						opacity: '0.8'
					},
					'100%': {
						strokeDashoffset: '-20',
						opacity: '0.2'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'glide-in': 'glide-in 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'kinetic-entrance': 'kinetic-entrance 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
				'typography-entrance': 'typography-entrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'stroke-draw': 'stroke-draw 2s ease-in-out infinite',
				'fill-draw': 'fill-draw 2s ease-in-out infinite'
			},
			scrollSnapType: {
				'y': 'y mandatory',
				'x': 'x mandatory',
				'both': 'both mandatory'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			addUtilities({
				'.scroll-snap-y': {
					'scroll-snap-type': 'y mandatory',
				},
				'.scroll-snap-start': {
					'scroll-snap-align': 'start',
				},
				'.scroll-snap-center': {
					'scroll-snap-align': 'center',
				},
				'.scroll-snap-end': {
					'scroll-snap-align': 'end',
				}
			})
		}
	],
} satisfies Config;
