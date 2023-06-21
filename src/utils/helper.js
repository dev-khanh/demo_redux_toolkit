import {Dimensions} from 'react-native';

export const toCamel = s =>
  s.replace(/([-_][a-z])/gi, $1 =>
    $1.toUpperCase().replace('-', '').replace('_', ''),
  );

export const isArray = a => Array.isArray(a);

export const isObject = o =>
  o === Object(o) && !isArray(o) && typeof o !== 'function';

export const keysToCamel = o => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map(i => keysToCamel(i));
  }

  return o;
};
export default function Util() {}

Util.isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
export const textSpread = str =>
  str.length > 9 ? `${str.slice(0, str.length - 5)}...` : str;

export const isValidFileType = fName =>
  ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'MOV'].indexOf(
    fName?.split('.')?.pop(),
  ) > -1;

export const isValidEmail = email =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

const imageAllowedTypes = ['image/gif', 'image/jpeg', 'image/png'];
export const isValidImageType = fileType =>
  imageAllowedTypes.includes(fileType);

const videoAllowedTypes = [
  'application/mp4',
  'video/mp4',
  'video/3gp2',
  'video/3gpp',
  'audio/mp4',
  'audio/3gpp',
  'video/quicktime',
  'video/x-flv',
  'application/x-mpegURL',
  'video/MP2T',
  'video/x-msvideo',
  'video/x-ms-wmv',
];
export const isValidVideoType = fileType =>
  videoAllowedTypes.includes(fileType);

export const getFileNameFromUri = uri => uri && uri.split('/').pop();

export const isLocalUri = uri => uri && uri.split(':').shift() === 'file';

export const replaceSpeaker = str =>
  str.length > 3 ? `${str} ` : str.replace(' - ', '');

export const replaceAllSpaces = str => str.replace(/ /g, '');

export const checkLoadingRender = (arrayList, id) =>
  arrayList?.id && arrayList?.id.toString() !== id.toString()
    ? null
    : arrayList;

export const splitFileExtension = str =>
  str?.length ? str.split('.').pop() : '';

export const isCheckRegexColor = strColor =>
  /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/gm.exec(strColor) !== null;

export const addArraysList = (arrayList, item) =>
  arrayList.map(e => {
    if (e.id === item.id) {
      return item;
    }
    return e;
  });
