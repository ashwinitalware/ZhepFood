import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.zhep.food',
  appName: 'ZhepFood',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
