import { filterFilePath } from '@/utils/logic';

const context = require.context('./modules/', false, /\.module.js$/);
const files = context.keys();

export default files.reduce((acc, filePath) => {
  const fileName = filterFilePath(filePath);
  acc[fileName] = context(filePath).default;
  return acc;
}, {});
