/**
 * 身份证号校验
 * @param {*} idcode
 * 函数参数必须是字符串，因为二代身份证号码是十八位，而在javascript中，十八位的数值会超出计算范围，造成不精确的结果，导致最后两位和计算的值不一致，从而该函数出现错误。
 * 详情查看javascript的数值范围
 */

export const checkIdCard = (idcode) => {
  // 加权因子
  const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验码
  const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

  const code = `${idcode}`;
  const last = idcode[17];// 最后一个

  const seventeen = code.substring(0, 17);

  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  const arr = seventeen.split('');
  const len = arr.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    num += arr[i] * weightFactor[i];
  }

  // 获取余数
  const resisue = num % 11;
  const lastNo = checkCode[resisue];

  // 格式的正则
  // 正则思路
  /*
    第一位不可能是0
    第二位到第六位可以是0-9
    第七位到第十位是年份，所以七八位为19或者20
    十一位和十二位是月份，这两位是01-12之间的数值
    十三位和十四位是日期，是从01-31之间的数值
    十五，十六，十七都是数字0-9
    十八位可能是数字0-9，也可能是X
    */
  const idcardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

  // 判断格式是否正确
  const format = idcardPatter.test(idcode);

  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return !!(last === lastNo && format);
};

/**
 * 校验银行卡号
 * @param {*} bankCardNumber
 */
export const checkBankCardNumber = (bankCardNumber) => /\d{16,19}/.test(bankCardNumber);

/**
 * 密码验证方法
 * @param {*} str
 * @param {*} callback
 */
export const passwordValidate = (str, callback) => {
  const rC = {
    lW: '[a-z]', // 小写字母
    uW: '[A-Z]', // 大写字母
    nW: '[0-9]', // 汉字
    sW: '[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]', // 特殊字符
  };
  function Reg(strs, rStr) {
    const reg = new RegExp(rStr);
    if (reg.test(strs)) {
      return true;
    }
    return false;
  }
  if (str.length < 8 || str.length > 16) {
    callback(new Error('密码长度应在8 - 16个字符之间'));
  } else {
    const tR = {
      l: Reg(str, rC.lW),
      u: Reg(str, rC.uW),
      n: Reg(str, rC.nW),
      s: Reg(str, rC.sW),
    };
    if ((tR.l && tR.u && tR.n)
      || (tR.l && tR.u && tR.s)
      || (tR.s && tR.u && tR.n)
      || (tR.s && tR.l && tR.n)) {
      // 密码符合要求
      callback();
    } else {
      callback(new Error('密码必须含有"小写字母"、"大写字母"、"数字"、"特殊符号"中的任意三种'));
    }
  }
};
