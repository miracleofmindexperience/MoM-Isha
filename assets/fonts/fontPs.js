import localFont from 'next/font/local';

const fedraSerif = localFont({
  src: 'WF-028154-009464-000003.woff',
  display: 'block',
  preload: false,
  variable: '--FedraSerif',
  declarations: [{ prop: 'woff' }],
});

const fedraSansStd = localFont({
  src: 'WF-028154-009464-000007.woff',
  declarations: [{ prop: 'woff' }],
  display: 'block',
  variable: '--FedraSansStd-book',
  preload: false,
  subsets: ['latin'],
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

const FedraSansStdBookI = {
  /* Fedra Sans Book Italic */
  variable: '--FedraSansStd-book-i',
  src: 'WF-028154-009464-000008.ttf',
  declarations: [{ prop: 'truetype' }],
  display: 'swap',
  preload: false,
};
const fedraSerifDisplayRegular = localFont({
  src: 'FedSerDis-Regular.woff',
  declarations: [{ prop: 'woff' }],
  variable: '--FedraSerifDisplay-Regular',
  display: 'swap',
  preload: false,
});

const FedraSerifDisplayBold = localFont({
  src: 'FedSerDis-Bold.woff',
  declarations: [{ prop: 'woff' }],
  variable: '--FedraSerifDisplay-Bold',
  display: 'swap',
  preload: false,
});
const FedraSerifDisplayLight = localFont({
  src: 'WF-028154-012426-001444.woff2',
  declarations: [{ prop: 'woff' }],
  variable: '--FedraSerifDisplay-light',
  display: 'swap',
  preload: false,
});
const AustinMedium = localFont({
  src: 'Austin-Medium.otf',
  declarations: [{ prop: 'otf' }],
  variable: '--AustinMedium',
  display: 'swap',
  preload: false,
});
const AustinMediumWeb = localFont({
  src: 'Austin-Medium-Web.woff',
  declarations: [{ prop: 'woff' }],
  variable: '--AustinMediumWeb',
  display: 'swap',
  preload: false,
});
export {
  fedraSansStd,
  fedraSansStdAMedium,
  FedraSansStdBookI,
  fedraSansStdMedium,
  fedraSerif,
  fedraSerifDisplay,
  FedraSerifDisplayBold,
  FedraSerifDisplayLight,
  fedraSerifDisplayRegular,
  AustinMedium,
  AustinMediumWeb
};
