import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.openweather',
  appName: "'ionic-openweather'",
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
