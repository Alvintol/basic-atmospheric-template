import type { Theme } from '../types';

// Set brand colours, fonts, corner shapes and maximum page width here.
export const theme = {
  "colours": {
    "background": "#072d3c",
    "surface": "#103b49",
    "text": "#fff8e9",
    "muted": "#c4d2d1",
    "border": "#45636c",
    "primary": "#ffae4f",
    "onPrimary": "#102c33",
    "accent": "#ffbb69",
    "onAccent": "#102c33",
    "feature": "#164453",
    "onFeature": "#fff8e9"
  },
  "fonts": {
    "body": "\"Helvetica Neue\", Arial, sans-serif",
    "heading": "Georgia, serif",
    "accent": "Georgia, serif"
  },
  "shape": {
    "radius": "1.5rem",
    "buttonRadius": "4rem",
    "contentWidth": "75rem"
  }
} satisfies Theme;
