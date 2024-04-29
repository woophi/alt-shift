import localFont from 'next/font/local';

export const fixelDisplay = localFont({
  src: [
    {
      path: './display/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './display/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './display/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './display/semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './display/bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--fixel-display',
});
export const fixelText = localFont({
  src: [
    {
      path: './text/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './text/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './text/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './text/semiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './text/bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--fixel-text',
});
