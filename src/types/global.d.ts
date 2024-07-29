export {}; // needed to make TypeScript happy

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (properties: any) => void;
    };
  }
}
