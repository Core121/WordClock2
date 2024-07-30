/* eslint-disable @typescript-eslint/no-explicit-any */
export {}; // needed to make TypeScript happy

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (properties: any) => void;
    };
  }
}
