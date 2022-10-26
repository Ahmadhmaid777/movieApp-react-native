const type = {
  bold: 'mulish-bold',
  meduim: 'mulish-medium',
  regular: 'mulish-regular',
  semiBold: 'mulish-semiBold',
  merriBold: 'merriweather-bold',
};

const size = {
  small: 8,
  medium: 10,
  regular: 12,
  large: 14,
  xlarge: 16,
  xxlarge: 20,
};

const lineHeight = {
  xsmall: 6,
  small: 10,
  medium: 14,
  normal: 18,
  large: 22,
};

const typography = {
  smallRegular: {
    lineHeight: lineHeight.normal,
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  smallSemiBold: {
    lineHeight: lineHeight.normal,
    fontFamily: type.semiBold,
    fontSize: size.regular,
  },
  smallMedium: {
    lineHeight: lineHeight.normal,
    fontFamily: type.meduim,
    fontSize: size.regular,
  },
  smallLarge: {
    lineHeight: lineHeight.normal,
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  mediumRegular: {
    lineHeight: lineHeight.normal,
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  mediumSemiBold: {
    lineHeight: lineHeight.normal,
    fontFamily: type.semiBold,
    fontSize: size.regular,
  },
  mediumMedium: {
    lineHeight: lineHeight.normal,
    fontFamily: type.meduim,
    fontSize: size.regular,
  },
  mediumLarge: {
    lineHeight: lineHeight.normal,
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  largeRegular: {
    lineHeight: lineHeight.normal,
    fontFamily: type.regular,
    fontSize: size.large,
  },
  largeSemiBold: {
    lineHeight: lineHeight.normal,
    fontFamily: type.semiBold,
    fontSize: size.large,
  },
  largeMedium: {
    lineHeight: lineHeight.normal,
    fontFamily: type.bold,
    fontSize: size.large,
  },

  largeLarge: {
    lineHeight: lineHeight.normal,
    fontFamily: type.bold,
    fontSize: size.xlarge,
  },
  largeXLarge: {
    lineHeight: lineHeight.normal,
    fontFamily: type.bold,
    fontSize: size.xxlarge,
  },
};

export {typography};
