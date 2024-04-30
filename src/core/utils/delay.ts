export const delay = (ms = 3000) => new Promise<void>(res => setTimeout(res, ms));
