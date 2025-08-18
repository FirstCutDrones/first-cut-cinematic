import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d9a7941804eb4e0f91a60e8508239751',
  appName: 'first-cut-cinematic',
  webDir: 'dist',
  server: {
    url: 'https://d9a79418-04eb-4e0f-91a6-0e8508239751.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;