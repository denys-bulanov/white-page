/** @type {import('tailwindcss').Config} */
import { PluginCreator } from 'tailwindcss/types/config'
const typography = require('@tailwindcss/typography')

const containerPlugin: PluginCreator = ({ addComponents }: any) =>
  addComponents({
    '.profile-info-square': {
      backgroundImage: 'linear-gradient(149deg, rgba(177, 76, 238, 1), rgba(128, 73, 243, 1))',
      boxShadow: '0px 10px 32px 0px rgba(104, 26, 199, 0.61)',
      filter: 'grayscale(0)',
      transition: 'filter 0.2s ease-in-out',
      maxHeight: '44px',
      maxWidth: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'sound-wave': {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(var(--amplitude, 1.5))' },
        },
        dots: {
          '0%': { content: '"."' },
          '60%': { content: '".."' },
          '100%': { content: '"..."' },
        },
        spinFade: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        runningLine: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '50%': { width: '50%' },
          '100%': { width: '100%' },
        },
        starsLoading: {
          '0%': { transform: 'scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0.3' },
        },
        'infinite-running-line': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { left: '0%' },
          '100%': { left: '-100%' },
        },
        blink: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'infinite-running-line': 'infinite-running-line 520s linear infinite',
        'sound-wave': 'sound-wave 1s ease-in-out infinite',
        dots: 'dots 1.5s infinite',
        'spin-fade': 'spinFade 1.2s linear infinite',
        'slide-up': 'slideUp 0.2s ease-out forwards',
        'running-line': 'runningLine 20s linear infinite',
        rotate: 'rotation 5s linear infinite',
        starsLoading: 'starsLoading 0.8s infinite',
        'starsLoading-1': 'starsLoading 1s infinite',
        'starsLoading-2': 'starsLoading 1.4s infinite',
        blink: 'blink 1s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondaryPremiumBoxShadow: '0px 6px 16px 0px rgba(177, 76, 238, 0.3), 0px 4px 30px 0px rgba(177, 76, 238, 0.07)',
        colors: {
          yellow: 'rgba(255, 197, 48, 1)',
          secondary: 'rgba(233, 242, 255, 1)',
          // secondary: "rgb(255,0,0)",
          secondaryLight: 'rgba(233, 242, 255, 0.6)',
          secondaryDark: 'rgba(255,229,240,0.4)',
          successLight: 'rgba(54, 172, 96, 0.1)',
          success: 'rgba(54, 172, 96, 1)',
          error: 'rgba(208, 60, 60, 1)',
          danger: 'rgba(208, 60, 60, 0.9)',
          idle: 'rgba(175, 177, 191, 1)',
          progress: 'rgba(255, 197, 48, 1)',
          errorLight: 'rgba(208, 60, 60, 0.1)',
          idleLight: 'rgba(175, 177, 191, 0.1)',
          progressLight: 'rgba(255, 197, 48, 0.1)',
          primary: 'rgba(252, 104, 150, 1)',
          primaryLight: 'rgba(252, 104, 150, 0.6)',
          primaryPremium: 'rgba(255,197,48,1)',
          secondaryPremium: 'rgba(177,76,238,1)',
          secondaryBackground: 'rgba(255,255,255,0.05)',
          backgroundModalMobile: 'rgba(2,8,24,0.9)',
          border: 'rgba(255, 255, 255, 0.07)',
          yellowPremium: 'rgba(255, 197, 48, 0.3)',

          // Custom colors
          darkPlum: 'rgba(27, 20, 29, 1)',
          darkPurple: 'rgba(39, 26, 43, 1)',
          darkPurpleTranslucent: 'rgba(39, 26, 43, 0.1)',
          darkPurpleModal: 'rgba(2, 8, 24, 0.9)',
          veryDarkPurple: 'rgba(17, 12, 21, 1)',
          dark: 'rgba(9, 16, 46, 1)',
          darkGrey: 'rgba(60, 64, 67, 1)',
          customGreen: 'hsla(151, 88%, 49%, 1)',

          // Inputs
          inputError: 'rgba(208, 60, 60, 0.05)',
          inputDisabled: 'rgba(255, 255, 255, 0.02)',
          textDisabled: 'rgba(87, 79, 94, 1)',

          // Markdown
          markdownBody: 'rgba(175, 177, 191, 1)',

          // Dropdowns
          dropdownBackground: 'rgba(39, 26, 43, 0.6)',

          'become-creator-cta': 'linear-gradient(360deg, #FF8AA4 -10.61%, #FF4A72 100%)',
          modalBorderColor: 'rgba(50, 38, 54, 1)',
          modalBorderColorLight: 'rgba(102, 82, 102, 1)',
          customPink: 'rgba(252, 104, 150, 1)',
          customPinkTranslucent: 'rgba(252, 104, 150, 0.08)',
          customGray: 'rgba(87, 79, 94, 1)',
          tetriary: 'rgba(155, 156, 170, 1)',
          divider: '#463046',
          accent: '#FC6896',
          'accent-07': '#FC6896B2',
          transparentWhite: '#FFFFFF1F',
          neutralSecondary: '#D9D1DC',
          chatMessageCtx: 'rgba(17, 12, 21, 0.5)',
          chatMessageCtxMenuOverlay: 'rgba(39, 26, 43, 0.72)',
          back_2: '#322636',
          modalOverlay: 'rgba(39, 26, 43, 0.7)',
          dividerLight: '#665266',
          back: '#271A2B',
          //v2
          Text_Secondary: 'rgba(217, 209, 220, 1)',
          White_Main_Contrast: 'rgba(255, 255, 255, 1)',
          Divider: 'rgba(70, 48, 70, 1)',
          Opacity_White: 'rgba(255, 255, 255, 0.12)',
          Opacity_Dark: 'rgba(17, 12, 21, 0.5)',
          Accent2: 'rgba(255, 197, 48, 1)',
          Accent3: 'rgba(139, 74, 242, 1)',
          Accent3_translucent: 'rgba(139, 74, 242, 0.1)',
          Text_Disabled: 'rgba(87, 79, 94, 1)',
          Back: 'rgba(39, 26, 43, 1)',
          successNew: 'rgba(15, 233, 128, 1)',
          background_opacity_dark_2: 'rgba(17, 12, 21, 0.3)',
          Red: 'rgba(234, 58, 64, 1)',

          //denys
          border_message_pink: '#e099bf',
          lightPurple: '#AEA2F6',
          purpleDark: '#3A0078',
          purpleSoft: '#8049F3',
          pinkSoft: '#B168FF',
        },
      },
      backgroundImage: {
        primary: 'linear-gradient(99.39deg, #F76FAF 7.58%, #FF6182 90.21%)',
        primaryActive: 'linear-gradient(99.39deg, #F76FAF 7.58%, #E64667 90.21%)',
        primaryInActive: 'linear-gradient(99.39deg, rgba(247, 111, 175, 0.2) 7.58%, rgba(255, 97, 130, 0.2) 90.21%)',
        customGradient: 'linear-gradient(180deg, #39102E -1.7%, #05102E 100%)',
        modelStatusNewGradient: 'linear-gradient(98.69deg, rgba(177,76,238,0.9) 7.66%, rgba(128,73,243,0.9) 100%)',
        premiumGradient: 'linear-gradient(95.85deg, rgba(255,197,48,0.9) 1.13%, rgba(233,172,15,0.9) 94.5%)',
        modelStatusHotGradient: 'linear-gradient(100.44deg, rgba(237,113,43,0.9) 0%, rgba(208,60,60,0.9) 83.99%)',
        noDesktopBg: 'linear-gradient(99.39deg, rgba(255, 255, 255, 0) 7.58%, rgba(255, 255, 255, 0) 100%)',
        violetPremium: 'linear-gradient(98.81deg, #B14CEE 6.57%, #8049F3 100%)',
        bannerGradient: 'linear-gradient(90.02deg, #FE658D 0.06%, #A54CDE 39.79%, #8B4AF3 99.98%)',
        userMessageContent: 'linear-gradient(99.39deg, rgba(247,111,175,0.8) 7.58%, rgba(255,97,130,0.8) 90.21%)',
        notReadMessage: 'linear-gradient(98.69deg, #B14CEE 7.66%, #8049F3 100%)',
        profilePicBorder: 'linear-gradient(161.14deg, #F76FAF 12.73%, #9A4BF1 91.44%)',
        primaryGradient: 'linear-gradient(101deg, #B14CEE -13.35%, #8049F3 100%)',
        primaryPermiumGradient: 'linear-gradient(94.97deg, rgba(255, 197, 48, 1) 7.99%, rgba(233, 172, 15, 1) 88.42%)',
        liveTranslationGradient: 'linear-gradient(90.65deg, #4BD17A 0.56%, #16A348 95.03%)',
        primaryGlowGradient: 'linear-gradient(99.39deg, #F76FAF 7.58%, #FF6182 90.21%)',
        'checkout-header': 'linear-gradient(90.32deg, #FE658D 0.22%, #A54CDE 40.43%, #6118D5 101.36%)',
        'fanclub-model-name': 'linear-gradient(91.21deg, #FC6896 -5.15%, #8B4AF3 100%)',
        'fanclub-model-discount': 'linear-gradient(99.12deg, rgba(177, 76, 238, 0.9) 7.99%, rgba(128, 73, 243, 0.9) 104.31%)',
        'yellow-gradient': 'linear-gradient(94.97deg, rgba(255, 197, 48, 0.9) 7.99%, rgba(233, 172, 15, 0.9) 88.42%)',
        'become-creator-cta': 'linear-gradient(180deg, #FF8AA4 0%, #FF4A72 100%)',
        g_orangeToPurple: 'linear-gradient(149deg, rgba(222, 132, 36, 1), rgba(252, 101, 143, 1) 31%, rgba(128, 73, 243, 1))',
        g_purpleToPurple: 'linear-gradient(149deg, rgba(177, 76, 238, 1), rgba(128, 73, 243, 1))',
        g_lightPurpleToPurple: 'linear-gradient(98.81deg, #B14CEE 6.57%, #8049F3 100%)',
        g_pink: 'linear-gradient(90deg, rgba(247, 111, 175, 1), rgba(255, 97, 130, 1))',
        g_darkPink: 'linear-gradient(90deg, rgba(88, 64, 88, 1), rgba(60, 39, 67, 1))',
        g_purple: 'linear-gradient(90deg, rgba(177, 76, 238, 1), rgba(128, 73, 243, 1))',
        Gradient_Accents: 'linear-gradient(180deg, rgba(241, 98, 152, 1), rgba(144, 75, 238, 1))',
        g_orange: 'linear-gradient(90deg, rgba(237, 113, 43, 1), rgba(208, 60, 60, 1))',
        g_yellow: 'linear-gradient(95.85deg, #FFC530 1.13%, #E99D0F 94.5%)',
        g_red: 'linear-gradient(95.85deg, #EA3A40 1.13%, #AF080B 94.5%)',
        rg_selected_item: 'radial-gradient(circle, rgba(252, 104, 150, 1) 40%, rgba(0,0,0,0) 40%)',
        g_hot: 'linear-gradient(120deg, rgba(237, 113, 43, 0.6), rgba(208, 60, 60, 0.6))',
        g_hot_no_op: 'linear-gradient(120deg, rgba(237, 113, 43, 1), rgba(208, 60, 60, 1))',
        g_landing_page: 'radial-gradient(farthest-corner at -10000px -10000px, rgba(255, 141, 165, 0.5), rgba(255, 141, 165, 0))',
        g_pinkToPeach: 'linear-gradient(99.39deg, #F76FAF 7.58%, #FF6182 90.21%)',
        g_pinkToPink: 'linear-gradient(99.39deg, #F76FAF 7.58%, #FF6182 90.21%)',
        g_orangeToRed: 'linear-gradient(100.44deg, #ED712B 0%, #D03C3C 83.99%)',
        g_pinkToPurple: 'linear-gradient(214.84deg, #FE658D -10.38%, #8B4AF3 103.05%)',
        g_lightToDarkGreen: 'linear-gradient(126.01deg, #1EE384 -36.5%, #147C4A 104.01%)',
        g_live: 'linear-gradient(95.85deg, #0ED152 1.13%, #119F5D 94.5%)',
        g_main_bg: 'radial-gradient(farthest-corner at -10000px -10000px, rgba(255, 141, 165, 1), rgba(255, 141, 165, 0))',
        g_main_bg_back_gradient: `
          linear-gradient(0deg, #271A2B, #271A2B),
          radial-gradient(137.5% 137.5% at 13.63% -45.06%, rgba(255,141,165,0.2) 0%, rgba(255,141,165,0) 100%)
        `,
        g_lightToDarkRed: 'linear-gradient(95.85deg, #EA3A40 1.13%, #AF080B 94.5%)',
        g_callOverlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 39.16%, #000000 91.19%)',
        g_accent: 'linear-gradient(180deg, #F16298 0%, #904BEE 100%)',
        g_pinkTransparent: 'linear-gradient(90deg, rgba(247, 111, 175, 0.12), rgba(255, 97, 130, 0.12))',
        'custom-gold': 'linear-gradient(95.85deg, #FFC530 1.13%, #E99D0F 94.5%)',
        g_exploreSlide: 'linear-gradient(0deg, #05102E 0%, rgba(5, 16, 46, 0) 99.93%)',
        g_girlCardOverlay: 'linear-gradient(0.13deg, #110C1B 0.11%, rgba(17, 12, 27, 0) 99.89%)',
        Button_Gradient: 'linear-gradient(99.39deg, #F76FAF 7.58%, #FF6182 90.21%)',
        Button_Gradient_2: 'linear-gradient(98.81deg, #B14CEE 6.57%, #8049F3 100%)',
        title_highlight: 'linear-gradient(91.38deg, #9952BD 39.79%, #FA6185 80.44%)',
        seo_card: 'linear-gradient(76.81deg, #533345 35.48%, #613149 147.99%)',
        seo_page: 'linear-gradient(143.09deg, #4E283C 37.31%, #271A2B 112.95%)',
        seo_button: 'linear-gradient(102.8deg, #DE8424 -11.46%, #FC6590 39.64%, #8049F3 103.2%)',
        seo_yellow_icon: ' linear-gradient(95.85deg, #FFC530 1.13%, #E99D0F 94.5%)',
        'check-green': 'linear-gradient(95.85deg, #0ED152 1.13%, #119F5D 94.5%)',

        g_orangeToRedOpacity: 'linear-gradient(100.44deg, rgba(237,113,43,0.6) 0%, rgba(208,60,60,0.6) 83.99%)',
        g_neonPinkToPink: 'linear-gradient(90deg, #f549a5 0%, #ab3876 100%)',
        g_pinkToPurpleHorizontal: 'linear-gradient(180deg, rgba(254,101,141,0.6) -10.38%, rgba(139,74,243,0.6) 103.05%)',
        g_BlueToPurple: 'linear-gradient(90deg, rgba(33, 38, 67, 0.4) 59.27%, rgba(177, 104, 255, 0.4) 99.13%)',
        // linear-gradient(90deg, rgba(33, 38, 67, 0.4) 59.27%, rgba(177, 104, 255, 0.4) 99.13%)
        g_BlueToPurpleOpacity: 'linear-gradient(90deg, rgba(33, 38, 67, 0.6) 59.27%, rgba(177, 104, 255, 0.6) 99.13%)',
        g_purpleToPurpleOpacity: 'linear-gradient(149deg, rgba(177, 76, 238, 0.6), rgba(128, 73, 243, 0.6))',
        // g_PurpleToPurpleButton: 'linear-gradient(90deg, #B168FF 66%, #8049F3 100%)',

        //denys
        g_pinkToPurpleSoft: 'linear-gradient(102.8deg, #C265FC 16.65%, #8049F3 103.2%)',
        g_faq_Card:
          'radial-gradient(261.85% 179.58% at 8.78% 179.54%, rgba(97, 0, 200, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%), radial-gradient(105.35% 112.2% at 79.19% 177.8%, rgba(44, 92, 139, 0.2) 55.29%, rgba(104, 109, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',
        g_faq_Card2:
          'radial-gradient(255.92% 518.68% at 27.17% 15.72%, rgba(0, 0, 0, 0) 0%, rgba(177, 104, 255, 0.2) 22.36%, rgba(97, 0, 200, 0.2) 44.71%), radial-gradient(90.2% 78.32% at 31.67% 139.13%, rgba(44, 92, 139, 0.2) 55.29%, rgba(104, 109, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',
        g_faq_Card3:
          'radial-gradient(277.84% 167.29% at 73.13% 191.92%, rgba(97, 0, 200, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%), radial-gradient(113.46% 144.67% at 125.86% -32.41%, rgba(44, 92, 139, 0.2) 55.29%, rgba(104, 109, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',

        g_purpleWaves:
          'radial-gradient(261.85% 179.58% at 8.78% 179.54%, rgba(97,0,200,0.7) 55.29%, rgba(177,104,255,0.7) 77.64%, #5303A9 100%), radial-gradient(105.35% 112.2% at 79.19% 177.8%, rgba(44,92,139,0.4) 55.29%, rgba(104,109,255,0.4) 77.64%, rgba(0,0,0,0) 100%)',

        g_darkPurpleWhite: 'radial-gradient(52.86% 115.45% at 52.86% 0%, rgba(50, 11, 84, 0) 10.13%, rgba(128, 73, 243, 0.4) 100%)',
        g_darkPurpleBlack: 'linear-gradient(90deg, #723DAC 0%, #2E1946 100%)',

        g_for:
          'radial-gradient(261.85% 179.58% at 8.78% 179.54%, rgba(97, 0, 200, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%),radial-gradient(105.35% 112.2% at 79.19% 177.8%, rgba(44, 92, 139, 0.2) 55.29%, rgba(104, 109, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',
        g_notFor:
          'radial-gradient(229.25% 162.5% at 8.78% 179.54%, rgba(97, 0, 200, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%) , radial-gradient(89.76% 112.88% at 102.47% -13.64%, rgba(44, 92, 139, 0.2) 55.29%, rgba(104, 109, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',
        g_materialPractice:
          'radial-gradient(249.39% 835.46% at 8.78% 179.54%, rgba(97, 0, 200, 0.3) 55.29%, rgba(177, 104, 255, 0.7) 77.64%, rgba(0, 0, 0, 0) 100%), radial-gradient(121.92% 124.72% at 92.46% 119.32%, rgba(44, 92, 139, 0.7) 55.29%, rgba(104, 109, 255, 0.7) 77.64%, rgba(0, 0, 0, 0) 100%) ',
        g_darkPurpleToDarkPurple: 'linear-gradient(0deg, rgba(177, 104, 255, 0.4) 0%, rgba(128, 73, 243, 0.4) 113.24%)',
        g_welcome:
          'linear-gradient(0deg, #250338, #250338),radial-gradient(74.28% 84.48% at 12.86% 7.64%, rgba(97, 0, 200, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%),radial-gradient(100.34% 107.75% at 99.06% 139.3%, rgba(139, 44, 114, 0.2) 55.29%, rgba(177, 104, 255, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',

        g_bg: 'linear-gradient(0deg, #1F0B31, #1F0B31),radial-gradient(74.28% 84.48% at 12.86% 7.64%, rgba(97, 0, 200, 0.1) 55.29%, rgba(177, 104, 255, 0.1) 77.64%, rgba(0, 0, 0, 0) 100%),radial-gradient(100.34% 107.75% at 99.06% 139.3%, rgba(139, 44, 114, 0.1) 55.29%, rgba(177, 104, 255, 0.1) 77.64%, rgba(0, 0, 0, 0) 100%)',

        g_divideOr: ' linear-gradient(90deg, rgba(58, 33, 52, 0) 0%, #FFFFFF 100%)',
        g_darkButton: 'linear-gradient(0deg, #240E38, #240E38), linear-gradient(0deg, rgba(177, 104, 255, 0.2) 0%, rgba(128, 73, 243, 0.2) 113.24%)',
        g_darkOpacity: 'linear-gradient(90deg, rgba(4, 3, 3, 0.6) 0%, rgba(0, 0, 0, 0.24) 100%)',
        g_girlGround:
          'linear-gradient(90deg, rgba(4, 3, 3, 0.4) 0%, rgba(0, 0, 0, 0.16) 100%), radial-gradient(69.69% 88.89% at 53.31% 103.77%, #8049F3 0%, rgba(128, 73, 243, 0) 100%)',
        g_bg2:
          'radial-gradient(55.12% 99.95% at 52.86% 0%, rgba(50, 11, 84, 0) 10.13%, rgba(128, 73, 243, 0.4) 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        g_bg3:
          'radial-gradient(229.25% 162.5% at 8.78% 179.54%, rgba(50, 0, 110, 0.2) 55.29%, rgba(90, 50, 150, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%), radial-gradient(89.76% 112.88% at 102.47% -13.64%, rgba(20, 40, 70, 0.2) 55.29%, rgba(50, 60, 130, 0.2) 77.64%, rgba(0, 0, 0, 0) 100%)',
      },

      boxShadow: {
        primary: '0px 4px 5px rgba(254, 101, 140, 0.5), 0px 2px 8px rgba(254, 101, 140, 0.07)',
        premium: '0px 4px 5px rgba(255, 197, 48, 0.3), 0px 2px 8px rgba(255, 197, 48, 0.07)',
        violentPremium: '0px 4px 5px  rgba(128, 82, 226, 0.3), 0px 2px 8px rgba(128, 82, 226, 0.07)',
        yellowPremium: `0px 15px 16px 8px rgba(255, 197, 48, 0.3), 0px 2px 8px 0px rgba(255, 197, 48, 0.07)`, // Increased blur
        primaryShadow: '0px 1px 16px 3px rgba(254, 101, 140, 0.3), 0px 2px 8px 0px rgba(254, 101, 140, 0.07)',
        yellowPremiumCentered: '0px 4px 5px 3px rgba(255,197,48,0.3),0px 2px 8px 0px rgba(255,197,48,0.07)',
        danger: '0px 4px 5px 0px rgba(208, 60, 60, 0.3), 0px 2px 8px 0px rgba(208, 60, 60, 0.07)',
        'become-creator-cta': '0px 4px 50px 0px rgba(255, 134, 160, 0.5)',
        customPurple: '0px 10px 32px 0px rgba(174, 22, 183, 0.49)',
        pink: '0px 4px 30px 0px rgba(218, 99, 144, 0.6)',
        customSecondaryPurple: '0px 10px 32px 0px rgba(104, 26, 199, 0.61)',
        customPremium: '0px 0px 15px 0px rgba(214, 142, 38, 0.5)',
        customPremiumHover: '0px 0px 15px 0px rgba(214, 142, 38, 0.7)',
        customGreen: '0px 0px 2px 0px #00C76332, 0px 0px 14px 0px #00C76363',
        accent: '0px 0.4px 3.09px 0px #DA639050, 0px 2px 19px 0px #DA6390A1',
        primaryGlow: '0px 2px 5.36px 0px rgba(174, 22, 183, 0.25), 0px 10px 33px 0px rgba(174, 22, 183, 0.49)',
        prem_glow: '0px 0px 2.76px 0px rgba(214, 142, 38, 0.27), 0px 0px 17px 0px rgba(214, 142, 38, 0.54)',
        primary_glow: '0px 2px 5.36px 0px rgba(174, 22, 183, 0.245), 0px 10px 33px 0px rgba(174, 22, 183, 0.49)',
        hot_glow: '0px 0px 2.76px 0px rgba(214, 94, 38, 0.27), 0px 0px 17px 0px rgba(214, 94, 38, 0.54)',
        secondary_glow: '0px 1px 4.22px 0px rgba(104, 26, 199, 0.305), 0px 5px 26px 0px rgba(104, 26, 199, 0.61)',
        accent_glow: '0px 0.4px 3.09px 0px rgba(218, 99, 144, 0.315), 0px 2px 19px 0px rgba(218, 99, 144, 0.63)',
        live_glow: '0px 0px 2.76px 0px rgba(38, 214, 41, 0.27), 0px 0px 17px 0px rgba(38, 214, 44, 0.54)',
        red: '0px 0px 2.76px 0px rgba(214, 38, 41, 0.27), 0px 0px 17px 0px rgba(214, 38, 41, 0.54)',
        red_glow: '0px 0px 2.76px 0px rgba(214, 38, 41, 0.27),0px 0px 17px 0px rgba(214, 38, 41, 0.54)',
        'custom-gold-shadow': '0px 10px 32px 0px #E69525',
        modal: '0px 1px 6.66px 0px rgba(0, 0, 0, 0.09), 0px 5px 41px 0px rgba(0, 0, 0, 0.18)',
        pink_glow: '0px 0.4px 3.09px 0px #DA639050, 0px 2px 19px 0px #DA6390A1',
        model_card: '0px 1px 6.66px 0px rgba(0, 0, 0, 0.09), 0px 5px 41px 0px rgba(0, 0, 0, 0.18)',
        'check-green': '0px 0px 17px 0px rgba(38, 214, 44, 0.54)',

        girlGroundChoose: 'inset 0px 5px 30.36px 1px #AEA2F6, inset 0px 10px 73px 0px #3A0078',
      },
      backgroundSize: {
        '110': '110%',
      },
      backgroundPosition: {
        'right-center-offset-10': 'right -10px center',
      },
      fontFamily: {
        // Add your custom font family here
        poppins: ['var(--font-poppins)', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
      },
      fontSize: {
        '7.5xl': '80px', // Adding your custom font size
      },
      letterSpacing: {
        '-0.02em': '-0.02em', // Custom letter spacing
      },
      screens: {
        'h-xsm': { raw: '(max-height: 880px)' },
        'h-xlg': { raw: '(min-height: 1080px)' }, // Large screens, minimum 1024px height
        xsm: { raw: '(max-width: 395px)' },
        'h-xs': { raw: '(min-height: 400px)' },
        'h-sm': { raw: '(min-height: 600px)' },
        'h-md': { raw: '(min-height: 800px)' },
        'h-824': { raw: '(max-height: 824px)' },
      },
      willChange: {
        shadow: 'box-shadow',
      },
      borderWidth: {
        'create-my-ai-selected': '4px',
      },
    },
  },
  safelist: [
    'mt-[114px]',
    'text-red-500',
    'text-red-700',
    'text-orange-500',
    'text-orange-700',
    'text-yellow-400',
    'text-yellow-600',
    'text-green-400',
    'text-green-700',
    'text-blue-400',
    'text-blue-700',
    'text-purple-400',
    'text-purple-700',
    'text-pink-400',
    'text-pink-600',
    'text-gray-400',
    'text-gray-800',
    'text-black',
    'text-white',
  ],
  plugins: [typography, containerPlugin],
}
