import { BREAKPOINTS } from '@mollycule/lattice';

export const lightTheme = {
  fonts: {
    regular: 'ModernEra-Regular',
    semibold: 'ModernEra-Medium',
    bold: 'ModernEra-Bold',
  },
  typography: {
    display: {
      fontSize: 36,
      lineHeight: 42,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
      letterSpacing: -0.2, // -2%
    },
    title1: {
      fontSize: 30,
      lineHeight: 36,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
      letterSpacing: -0.12, // -1%
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
      letterSpacing: -0.12, // -0.5%
    },
    headlineBold: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
    },
    body1Bold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
    },
    body1Semi: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'ModernEra-Medium',
      fontWeight: '600',
      color: '#01050B',
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
    },
    body2Bold: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
    },
    body2Semi: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'ModernEra-Medium',
      fontWeight: '600',
      color: '#01050B',
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
    },
    caption1Semi: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: 'ModernEra-Medium',
      fontWeight: '600',
      color: '#01050B',
      letterSpacing: 0.12, // 1%
    },
    caption1: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
      letterSpacing: 0.12, // 1%
    },
    caption2Bold: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'ModernEra-Bold',
      fontWeight: '800',
      color: '#01050B',
      letterSpacing: 0.2, // 2%
    },
    caption2: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
      letterSpacing: 0.2, // 2%
    },
    title1Light: {
      fontSize: 30,
      lineHeight: 36,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
      letterSpacing: -0.2, // -2%
    },
    title2Light: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'ModernEra-Regular',
      fontWeight: '400',
      color: '#01050B',
      letterSpacing: -0.12, // -0.5%
    },
  },

  colors: {
    /**
     * Main text & icon colours (grey scale)
     */
    text1: '#01050B',
    text2: '#464A50',
    text3: '#9BA0AA',

    /**
     * For all borders
     */
    divider: '#EEEEEE',

    /**
     * All secondary screen backgrounds
     */
    background1: '#FFFFFF',
    /**
     * All main tab screen backgrounds
     */
    background2: '#F5F5F5',
    /**
     * All main tab screen backgrounds
     */
    background3: '#EEEEEE',

    /**
     * Use for main actions, CTAs etc
     */
    primary1: '#0271E1',
    primary2: '#F0F7FF',

    /**
     * For elements that should be white in both D/L mode
     */
    white: '#FFFFFF',
    /**
     * For elements that should be black in both D/L mode
     */
    black: '#000000',

    /**
     * Use for errors and important/dangerous actions
     */
    red1: '#F93F3B',
    red2: '#FFF5F4',

    /**
     * Success/positive/growth colour
     */
    green1: '#00A861',
    green2: '#ECF6F2',

    /**
     * Warning/accent colour
     */
    orange1: '#FE6208',
    orange2: '#FFF4ED',

    /**
     * Accent colour
     */
    yellow1: '#FFD600',
    yellow2: '#FFFBE3',
  },

  space: {
    xsmall: 2,
    small: 4,
    regular: 8,
    large: 12,
    xlarge: 16,
    xxlarge: 20,
    xxxlarge: 24,
    xxxxlarge: 32,
  },
  radii: {
    small: 8,
    regular: 12,
    large: 16,
    xlarge: 20,
    xxlarge: 32,
  },
  border: {
    width: {
      thin: 0.5,
      regular: 1,
    },
  },
  breakpoints: BREAKPOINTS,
};
