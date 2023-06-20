/**
 * @format
 */

import {AppRegistry, Platform, LogBox} from 'react-native';
import {ROLLBAR_POST_CLIENT_ITEM} from '@env';
import {Client, Configuration} from 'rollbar-react-native';

import {name as appName} from './app.json';
import App from './src/app';

console.rollbar = {
  setPerson: () => null,
  clearPerson: () => null,
};

if (!__DEV__) {
  const pjson = require('./package.json');
  const {version} = pjson;
  const config = new Configuration(ROLLBAR_POST_CLIENT_ITEM, {
    payload: {
      client: {
        javascript: {
          source_map_enabled: true,
          code_version: `${version}.${Platform.OS}`,
        },
      },
    },
  });

  console.rollbar = new Client(config);
} else {
  require('./src/config/reactotronConfig.js');
}

LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreAllLogs(true);
// console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
