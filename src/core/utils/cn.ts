export const cn = (...classNames: (string | undefined)[]): string => classNames.filter(Boolean).join(' ');
