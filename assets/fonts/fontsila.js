import localFont from 'next/font/local';

const fedraSerif = localFont({
  src: 'WF-028154-009464-000003.woff',
  display: 'block',
  preload: false,
  variable: '--FedraSerif',
});
const fedraSansStd = localFont({
  src: 'WF-028154-009464-000007.woff',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  variable: '--FedraSansStd-book',
  preload: false,
});
const FedraSansCondStdBook = localFont({
  variable: '--FedraSansCondStdBook',
  src: 'FedraSansCondStd-Book.woff',
  weight: 'normal',
  style: 'normal',
  display: 'swap',
});
const FedraSansCondensedMedium = localFont({
  variable: '--FedraSansCondensedMedium',
  src: 'FedraSansCondensedL-Medium.ttf',
  weight: 'normal',
  style: 'normal',
  display: 'swap',
});
const fedraSansStdMedium = localFont({
  src: 'WF-028154-009464-000021.woff',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  preload: false,
  variable: '--FedraSansStd-medium',
});
const fedraSansStdAMedium = localFont({
  src: 'WF-028154-009464-000050.woff',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  preload: false,
  variable: '--FedraSansStd-A-medium',
});
const fedraSerifDisplay = localFont({
  src: 'WF-028154-012270-000245.woff2',
  declarations: [{ prop: 'woff' }],
  variable: '--FedraSerifDisplay',
  display: 'block',
  preload: false,
});

export {
  FedraSansCondensedMedium,
  FedraSansCondStdBook,
  fedraSansStd,
  fedraSansStdAMedium,
  fedraSansStdMedium,
  fedraSerif,
  fedraSerifDisplay,
};

