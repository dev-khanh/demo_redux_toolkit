import {NativeModules} from 'react-native';
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const config = {
  name: 'React Native Demo',
  host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
};

const tron = Reactotron.configure(config)
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .use(reactotronRedux())
  .connect();

export default tron;
