import { trans } from './util';

export const commonTokens = {
  fonts: {
    mono: '$$next-fonts-mono',
    sans: '$$next-fonts-sans',
  },
  transitions: {
    avatar: trans(['boxShadow', 'opacity']),
    body: trans(['background', 'color']),
    button: trans([
      'background',
      'color',
      'borderColor',
      'boxShadow',
      'transform',
      'opacity',
    ]),
    card: trans(['transform', 'filter', 'boxShadow']),
    default: trans(['all']),
    dropdownItem: trans(['background', 'transform', 'color', 'boxShadow'], 120),
    navbar: trans(['background', 'boxShadow']),
    switch: trans(['background', 'boxShadow']),
    switchCircle: trans(['color', 'background', 'transform', 'width']),
    text: trans(['color']),
    snippet: trans(['background', 'color']),
  },
};
