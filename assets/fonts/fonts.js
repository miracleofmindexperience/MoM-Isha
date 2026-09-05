import localFont from 'next/font/local';

// define your variable fonts
// const inter = Inter();
// const lora = Lora();
// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_Pro({ weight: '400' });
// const sourceCodePro700 = Source_Sans_Pro({ weight: '700' });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// fedraSansStd,
// fedraSansStdAMedium,
// fedraSansStdMedium,
// fedraSerif,
// fedraSerifDisplay,
const fedraSerif = localFont({
  src: 'WF-028154-009464-000003.woff',
  // weight: 'normal',
  // style: 'normal',
  // fallback: 'serif',
  // adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
  // declarations: [{ prop: 'woff' }],
  variable: '--FedraSerif',
});
const fedraSansStd = localFont({
  src: 'WF-028154-009464-000007.woff',
  // weight: 'normal',
  // style: 'normal',
  // fallback: 'sans-serif',
  // adjustFontFallback: 'sans-serif',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  variable: '--FedraSansStd-book',
  preload: false,
});

const fedraSansPro = localFont({
  src: 'FedraSansPro-Normal.ttf',
  weight: 'normal',
  style: 'normal',
  fallback: 'sans-serif',
  adjustFontFallback: 'sans-serif',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  variable: '--FedraSansPro',
  preload: false,
});

const fedraSansProbook = localFont({
  src: 'FedraSansPro-Book.ttf',
  weight: 'normal',
  style: 'normal',
  fallback: 'sans-serif',
  adjustFontFallback: 'sans-serif',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  variable: '--FedraSansProbook',
  preload: false,
});

// const fedraSansStdBookI = localFont({
//   src: 'WF-028154-009464-000008.woff',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'sans-serif',
//   // adjustFontFallback: 'sans-serif',
//   display: 'block',
//   preload: false,
// });
const fedraSansStdMedium = localFont({
  src: 'WF-028154-009464-000021.woff',
  declarations: [{ prop: 'woff' }],
  // weight: 'normal',
  // style: 'normal',
  display: 'block',
  preload: false,
  variable: '--FedraSansStdMedium',
});
const fedraSansStdAMedium = localFont({
  src: 'WF-028154-009464-000050.woff',
  declarations: [{ prop: 'woff' }],
  // weight: 'normal',
  // style: 'normal',
  // fallback: 'sans-serif',
  // adjustFontFallback: 'sans-serif',
  display: 'block',
  preload: false,
  variable: '--FedraSansStdAMedium',
});
const fedraSerifDisplay = localFont({
  src: 'WF-028154-012270-000245.woff2',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  variable: '--fedraSerifDisplay',
  display: 'block',
  preload: false,
});
const vesperlibre = localFont({
  src: 'VesperLibre-Regular.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'sans-serif',
  adjustFontFallback: 'sans-serif',
  display: 'block',
  preload: false,
});
const fedraLight = localFont({
  src: 'Fedra-Sans-Pro-Light-Light_17240.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'sans-serif',
  adjustFontFallback: 'sans-serif',
  display: 'block',
  preload: false,
});
const merrieWeatherBlack = localFont({
  src: 'Merriweather-Black.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merrieWeatherBlackItalic = localFont({
  src: 'Merriweather-BlackItalic.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merriweatherBold = localFont({
  src: 'Merriweather-Bold.ttf',
  weight: 'normal',
  declarations: [{ prop: 'woff' }],
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merriweatherBoldItalic = localFont({
  src: 'Merriweather-BoldItalic.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merrieWeatherLight = localFont({
  src: 'Merriweather-Light.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merriweatherItalic = localFont({
  src: 'Merriweather-Italic.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  preload: false,
  display: 'block',
});
const merriweatherLightItalic = localFont({
  src: 'Merriweather-LightItalic.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const merriweatherRegular = localFont({
  src: 'Merriweather-Regular.ttf',
  declarations: [{ prop: 'woff' }],
  weight: '400',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
const openSansRegular = localFont({
  src: 'OpenSans-Regular.ttf',
  declarations: [{ prop: 'woff' }],
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
  adjustFontFallback: 'serif',
  display: 'block',
  preload: false,
});
// const muktaMalar = localFont({
//   src: 'MuktaMalar-Regular.woff2',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'sans-serif',
//   // adjustFontFallback: 'sans-serif',
//   display: 'block',
//   preload: false,
// });
// const mukta = localFont({
//   src: 'Mukta-Regular.woff2',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'sans-serif',
//   // adjustFontFallback: 'sans-serif',
//   display: 'block',
//   preload: false,
// });
// const fedraLight = localFont({
//   src: 'Fedra-Sans-Pro-Light-Light_17240.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'sans-serif',
//   // adjustFontFallback: 'sans-serif',
//   display: 'block',
//   preload: false,
// });
// const merrieWeatherBlack = localFont({
//   src: 'Merriweather-Black.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merrieWeatherBlackItalic = localFont({
//   src: 'Merriweather-BlackItalic.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merriweatherBold = localFont({
//   src: 'Merriweather-Bold.ttf',
//   weight: 'normal',
//   declarations: [{ prop: 'woff' }],
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merriweatherBoldItalic = localFont({
//   src: 'Merriweather-BoldItalic.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merrieWeatherLight = localFont({
//   src: 'Merriweather-Light.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merriweatherItalic = localFont({
//   src: 'Merriweather-Italic.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   preload: false,
//   display: 'block',
// });
// const merriweatherLightItalic = localFont({
//   src: 'Merriweather-LightItalic.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const merriweatherRegular = localFont({
//   src: 'Merriweather-Regular.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });
// const openSansRegular = localFont({
//   src: 'OpenSans-Regular.ttf',
//   declarations: [{ prop: 'woff' }],
//   weight: 'normal',
//   style: 'normal',
//   // fallback: 'serif',
//   // adjustFontFallback: 'serif',
//   display: 'block',
//   preload: false,
// });

// One font-family per typeface, real weight/style variants, woff2, display:'swap'.
// These coexist with the legacy per-weight exports above during migration.
const fedraSans = localFont({
  src: [
    { path: 'fedra-sans-book.woff2', weight: '400', style: 'normal' },
    { path: 'fedra-sans-book-italic.woff2', weight: '400', style: 'italic' },
    { path: 'fedra-sans-medium.woff2', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  // Not preloaded yet — only a handful of components have migrated to this token so
  // far; preloading here would ship the font on every page, including ones that
  // never use it. Flip to true once enough call sites migrate to justify it sitewide.
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  variable: '--font-fedra-sans',
});
// Confirmed via Typotheque's own self-hosting kit (style.css): Serif A Book and
// Serif A Medium are two weights of one family, not separate typefaces. Note the
// existing legacy class name 'FedraSansStd-A-medium' (styles/theme/index.js) is
// misleading — despite the "Sans" in its name, it renders this serif face (it's the
// sitewide heading font). Left as-is here; only flagging so nobody "fixes" this file
// by treating Serif A Medium as a sans weight.
const fedraSerifA = localFont({
  src: [
    { path: 'fedra-serif-a-book.woff2', weight: '400', style: 'normal' },
    { path: 'fedra-serif-a-medium.woff2', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-fedra-serif-a',
});
// Converted from the existing FedSerDis-Regular/Bold.otf already in this repo (no
// woff2 previously shipped for these). Named `...Main` because `fedraSerifDisplay`
// above is already exported and consumed by app/layout.sw.tsx — despite the name,
// that file's font (WF-028154-012270-000245.woff2) is internally "Fedra Serif
// Display Pro SemiBold Condensed", not this typeface; left untouched, out of scope.
const fedraSerifDisplayMain = localFont({
  src: [
    {
      path: 'fedra-serif-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    { path: 'fedra-serif-display-bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-fedra-serif-display',
});
// Condensed SemiBold is a distinct design, not a heavier weight of the family above.
const fedraSerifDisplayCondensed = localFont({
  src: [
    {
      path: 'fedra-serif-display-condensed-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-fedra-serif-display-condensed',
});
// "Fedra Sans Pro" is a genuinely different typeface from "Fedra Sans" (confirmed via
// fontTools name table). Book and Light are both real weights of this one family
// (confirmed via typo family/subfamily name IDs: "Fedra Sans Pro" / "Book" and "Light").
const fedraSansProMain = localFont({
  src: [
    { path: 'fedra-sans-pro-light.woff2', weight: '300', style: 'normal' },
    { path: 'FedraSansPro-Book.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  variable: '--font-fedra-sans-pro',
});
// One family, real weight/style axis (confirmed via fontTools: Light/Regular/Bold/Black
// share one typo family "Merriweather", each with a normal + italic cut).
const merriweather = localFont({
  src: [
    { path: 'merriweather-light.woff2', weight: '300', style: 'normal' },
    { path: 'merriweather-light-italic.woff2', weight: '300', style: 'italic' },
    { path: 'merriweather-regular.woff2', weight: '400', style: 'normal' },
    { path: 'merriweather-italic.woff2', weight: '400', style: 'italic' },
    { path: 'merriweather-bold.woff2', weight: '700', style: 'normal' },
    { path: 'merriweather-bold-italic.woff2', weight: '700', style: 'italic' },
    { path: 'merriweather-black.woff2', weight: '900', style: 'normal' },
    { path: 'merriweather-black-italic.woff2', weight: '900', style: 'italic' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-merriweather',
});
const openSans = localFont({
  src: [{ path: 'open-sans-regular.woff2', weight: '400', style: 'normal' }],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  variable: '--font-open-sans',
});
const vesperLibre = localFont({
  src: [{ path: 'vesper-libre-regular.woff2', weight: '400', style: 'normal' }],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-vesper-libre',
});

// Script fonts — one variable-font file per script, covering its whole weight range.
// adjustFontFallback must be `false` explicitly; the loader branches on `!== false`,
// so omitting it still applies Latin (Arial) metrics.
// unicode-range is the script block plus the shared codepoints each file actually
// carries (verified per file with fontTools): ZWNJ/ZWJ, U+25CC, dandas, rupee. Latin
// is left out on purpose so Anek never outranks Fedra Sans for Latin text.
// No `fallback` here, deliberately: next/font bakes it into the CSS variable, and
// nothing after a generic family is reachable for Latin, so the Latin face could
// never be reached. Bare variables let resolveFonts() compose the working order —
// script face -> Latin face -> script system tail -> generic.
// So don't use var(--font-anek-*)/var(--font-mukta*) directly; go through
// resolveFonts() in styles/theme/fontResolver.js.
const anekTamil = localFont({
  src: [{ path: 'anek-tamil.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0B80-0BFF, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-tamil',
});
const anekDevanagari = localFont({
  src: [{ path: 'anek-devanagari.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0900-097F, U+200C-200D, U+20B9, U+25CC, U+A8FB',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-devanagari',
});
const anekTelugu = localFont({
  src: [{ path: 'anek-telugu.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    { prop: 'unicode-range', value: 'U+0C00-0C7F, U+200C-200D, U+20B9' },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-telugu',
});
const anekMalayalam = localFont({
  src: [{ path: 'anek-malayalam.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0D00-0D7F, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-malayalam',
});
const anekKannada = localFont({
  src: [{ path: 'anek-kannada.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0C80-0CFF, U+0964-0965, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-kannada',
});
const anekGujarati = localFont({
  src: [{ path: 'anek-gujarati.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0A80-0AFF, U+0964-0965, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-gujarati',
});
const anekBangla = localFont({
  src: [{ path: 'anek-bangla.woff2', weight: '100 800', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0980-09FF, U+0964-0965, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-anek-bangla',
});
// Re-registrations of the same .woff2 files the dead, unexported `mukta`/`muktaMalar`
// consts used to point at (removed — this PR's clean woff2 versions supersede them,
// so keeping both was a duplicate @font-face for one file).
const muktaMain = localFont({
  src: [{ path: 'Mukta-Regular.woff2', weight: '400', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0900-097F, U+200C-200D, U+20B9, U+25CC, U+A8FB',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-mukta',
});
const muktaMalarMain = localFont({
  src: [{ path: 'MuktaMalar-Regular.woff2', weight: '400', style: 'normal' }],
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0B80-0BFF, U+200C-200D, U+20B9, U+25CC',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-mukta-malar',
});

export {
  fedraSansPro,
  fedraSansProbook,
  // fedraLight,
  fedraSansStd,
  fedraSansStdAMedium,
  // fedraSansStdBookI,
  fedraSansStdMedium,
  fedraSerif,
  fedraSerifDisplay,
  fedraSans,
  fedraSerifA,
  fedraSerifDisplayMain,
  fedraSerifDisplayCondensed,
  fedraSansProMain,
  merriweather,
  openSans,
  vesperLibre,
  anekTamil,
  anekDevanagari,
  anekTelugu,
  anekMalayalam,
  anekKannada,
  anekGujarati,
  anekBangla,
  muktaMain,
  muktaMalarMain,
};
