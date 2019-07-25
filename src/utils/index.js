import logic from './modules/logic.module';

const context = require.context('./modules/', false, /\.module.js$/);
const files = context.keys();
const utils = {};

files.forEach((filePath) => {
  const fileName = logic.filterFilePath(filePath);
  utils[`${fileName}`] = context(filePath).default;
});

export default utils;
