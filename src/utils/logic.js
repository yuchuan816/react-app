import crypto from 'crypto';

let scrollBarWidth;

/**
 * 数字前面补零
 * @param num
 * @param length
 * @returns {string}
 */
export const prefixInteger = (num, length) => {
  if (num.toString().length < length) {
    return (Array(length).join('0') + num).slice(-length);
  }
  return num;
};

/**
 * 是否是不为空的对象
 * @param val
 * @returns {boolean}
 */
export const isMeaningfulObject = (val) => {
  if (val instanceof Object) {
    return Object.keys(val).length > 0;
  }
  return false;
};

/**
 * 过滤文件路径
 * @param filePath
 * @returns {*}
 */
export const filterFilePath = (filePath) => filePath.replace(/\.\/|\.\.\//g, '').replace(/\.module.js$/, '');

/**
 * 获取 scrollBar 宽度
 * @return {number}
 */
export const getScrollBarWidth = () => {
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = outer.offsetWidth;
  const widthNoScroll = inner.offsetWidth;
  scrollBarWidth = widthWithScroll - widthNoScroll;

  return scrollBarWidth;
};
/**
 * 获取cookie
 * @param {*} cookieName
 */
export const getCookie = (cookieName) => {
  const allCookies = document.cookie;
  let value = '';

  // 索引长度，开始索引的位置
  let cookiePos = allCookies.indexOf(cookieName);

  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookiePos !== -1) {
    // 把cookie_pos放在值的开始，只要给值加1即可
    // 计算取cookie值得开始索引，加的1为“=”
    cookiePos = cookiePos + cookieName.length + 1;
    // 计算取cookie值得结束索引
    let cookieEnd = allCookies.indexOf(';', cookiePos);

    if (cookieEnd === -1) {
      cookieEnd = allCookies.length;
    }
    // 得到想要的cookie的值
    value = unescape(allCookies.substring(cookiePos, cookieEnd));
  }
  return value;
};

/**
 * 生成随机密码
 * @param {*} min
 * @param {*} max
 */
export const createPassword = (min, max) => {
  // 可以生成随机密码的相关数组
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const ENGLISH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const special = ['-', '_', '#'];
  const config = num.concat(english).concat(ENGLISH).concat(special);

  // 随机从数组中抽出一个数值
  function getOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // 先放入一个必须存在的
  const arr = [];
  arr.push(getOne(num));
  arr.push(getOne(english));
  arr.push(getOne(ENGLISH));
  arr.push(getOne(special));

  // 获取需要生成的长度
  const len = min + Math.floor(Math.random() * ((max - min) + 1));

  for (let i = 4; i < len; i++) {
    // 从数组里面抽出一个
    arr.push(config[Math.floor(Math.random() * config.length)]);
  }

  // 乱序
  const newArr = [];
  for (let j = 0; j < len; j++) {
    newArr.push(arr.splice(Math.random() * arr.length, 1)[0]);
  }
  return newArr.join('');
};

/**
 * 使用md5加密
 * @param {*} value
 */
export const encryptWithMd5 = (value) => {
  const md5 = crypto.createHash('md5');
  md5.update(value);
  return md5.digest('hex');
};
