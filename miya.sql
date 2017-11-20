/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : miya

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 16:01:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '商品名',
  `type` varchar(255) NOT NULL COMMENT '商品类型',
  `originplace` varchar(255) NOT NULL COMMENT '产地',
  `brand` varchar(255) NOT NULL COMMENT '品牌',
  `details` varchar(255) NOT NULL COMMENT '商品详情',
  `recom` varchar(255) DEFAULT NULL COMMENT '商品推荐',
  `hot` varchar(255) DEFAULT NULL COMMENT '热门商品',
  `imgurl` varchar(255) NOT NULL COMMENT '图片路径',
  `price` decimal(10,2) NOT NULL COMMENT '现价',
  `outprice` decimal(10,2) NOT NULL COMMENT '原价',
  `view` int(10) unsigned DEFAULT NULL COMMENT '点击量',
  `turnover` int(10) unsigned DEFAULT NULL COMMENT '成交量',
  `stock` int(10) unsigned DEFAULT NULL COMMENT '库存量',
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间戳',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '奶粉', '幼儿奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('2', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, 'ture', 'img/youer2.jpg', '432.00', '690.00', '123332', '12333', '5632', '2017-11-16 15:32:00');
INSERT INTO `goods` VALUES ('3', '奶粉', '幼儿奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer3.jpg', '558.00', '779.00', '923342', '34455', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('4', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, 'ture', 'img/youer4.jpg', '227.00', '449.00', '1273923', '64382', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('5', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', 'ture', null, 'img/youer5.jpg', '308.00', '478.00', '234353', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('6', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('7', '奶粉', '幼儿奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, '', 'img/youer7.jpg', '441.00', '673.00', '479854', '893', '1673', '2017-11-16 14:54:13');
INSERT INTO `goods` VALUES ('8', '奶粉', '幼儿奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, '', 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 14:54:15');
INSERT INTO `goods` VALUES ('9', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('10', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', '', null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('12', '奶粉', '幼儿奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, '', 'img/youer12.jpg', '483.00', '562.00', '492323', '987', '1673', '2017-11-16 14:54:16');
INSERT INTO `goods` VALUES ('13', '奶粉', '幼儿奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', 'ture', null, 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('14', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, 'ture', 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('15', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('11', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', '', null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('16', '奶粉', '幼儿奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', 'ture', null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('18', '奶粉', '幼儿奶粉', '中国', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer3.jpg', '558.00', '779.00', '923342', '34455', '1223', '2017-11-16 16:05:16');
INSERT INTO `goods` VALUES ('17', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, 'ture', 'img/youer2.jpg', '456.00', '667.00', '123332', '12333', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('19', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer4.jpg', '227.00', '449.00', '1273923', '64382', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('20', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, 'ture', 'img/youer5.jpg', '308.00', '478.00', '234353', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('21', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', 'ture', null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('22', '奶粉', '幼儿奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer7.jpg', '332.00', '673.00', '479854', '893', '1673', '2017-11-17 16:41:44');
INSERT INTO `goods` VALUES ('23', '奶粉', '幼儿奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', '', null, 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('24', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, '', 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('25', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', '', null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('26', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('27', '奶粉', '幼儿奶粉', '美国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer12.jpg', '483.00', '562.00', '492323', '987', '1673', '2017-11-16 16:01:02');
INSERT INTO `goods` VALUES ('28', '奶粉', '幼儿奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, '', 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 14:54:20');
INSERT INTO `goods` VALUES ('29', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', 'ture', 'ture', 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('30', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('31', '奶粉', '幼儿奶粉', '美国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 16:00:45');
INSERT INTO `goods` VALUES ('32', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer2.jpg', '456.00', '667.00', '123332', '12333', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('33', '奶粉', '幼儿奶粉', '中国', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', '', null, 'img/youer3.jpg', '558.00', '779.00', '923342', '34455', '1223', '2017-11-16 16:04:55');
INSERT INTO `goods` VALUES ('34', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer4.jpg', '227.00', '449.00', '1273923', '64382', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('35', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', 'ture', null, 'img/youer5.jpg', '308.00', '478.00', '234353', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('36', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', '', null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('37', '奶粉', '幼儿奶粉', '美国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer7.jpg', '441.00', '673.00', '479854', '893', '1673', '2017-11-16 16:00:39');
INSERT INTO `goods` VALUES ('38', '奶粉', '幼儿奶粉', '中国', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 16:05:01');
INSERT INTO `goods` VALUES ('39', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('40', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, 'ture', 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('41', '奶粉', '幼儿奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('42', '奶粉', '幼儿奶粉', '美国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer12.jpg', '483.00', '562.00', '492323', '987', '1673', '2017-11-16 16:00:35');
INSERT INTO `goods` VALUES ('43', '奶粉', '幼儿奶粉', '中国', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, '', 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 16:05:10');
INSERT INTO `goods` VALUES ('44', '奶粉', '幼儿奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('45', '奶粉', '幼儿奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('46', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', 'ture', null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('47', '奶粉', '成长奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, 'ture', 'img/youer2.jpg', '246.00', '553.00', '123332', '12333', '5632', '2017-11-16 15:32:13');
INSERT INTO `goods` VALUES ('48', '奶粉', '成长奶粉', '美国', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 16:10:17');
INSERT INTO `goods` VALUES ('49', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer7.jpg', '441.00', '673.00', '479854', '893', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('50', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('51', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('52', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('53', '奶粉', '成长奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('54', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', '', null, 'img/youer12.jpg', '552.00', '562.00', '492323', '987', '1673', '2017-11-17 16:41:48');
INSERT INTO `goods` VALUES ('55', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', 'ture', null, 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('56', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('57', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, 'ture', 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('58', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('59', '奶粉', '成长奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer2.jpg', '456.00', '667.00', '123332', '12333', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('60', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer3.jpg', '558.00', '779.00', '923342', '34455', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('61', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer4.jpg', '227.00', '449.00', '1273923', '64382', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('62', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', '', null, 'img/youer5.jpg', '308.00', '478.00', '234353', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('63', '奶粉', '成长奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('64', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer7.jpg', '457.00', '673.00', '479854', '893', '1673', '2017-11-17 16:41:55');
INSERT INTO `goods` VALUES ('65', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('66', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('67', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', 'ture', null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('68', '奶粉', '成长奶粉', '美国', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 16:03:59');
INSERT INTO `goods` VALUES ('69', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer12.jpg', '124.00', '562.00', '492323', '987', '1673', '2017-11-17 16:41:59');
INSERT INTO `goods` VALUES ('70', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('71', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('72', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('73', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', '', null, 'img/youer1.jpg', '320.00', '590.00', '100823', '1432', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('74', '奶粉', '成长奶粉', '美国', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer2.jpg', '456.00', '667.00', '123332', '12333', '5632', '2017-11-16 16:03:56');
INSERT INTO `goods` VALUES ('75', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer3.jpg', '558.00', '779.00', '923342', '34455', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('76', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer4.jpg', '227.00', '449.00', '1273923', '64382', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('77', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer5.jpg', '308.00', '478.00', '234353', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('78', '奶粉', '成长奶粉', '美国', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer6.jpg', '268.00', '452.00', '948754', '37469', '5632', '2017-11-16 16:03:54');
INSERT INTO `goods` VALUES ('79', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', 'ture', null, 'img/youer7.jpg', '441.00', '673.00', '479854', '893', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('80', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer8.jpg', '192.00', '345.00', '958762', '9734', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('81', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer9.jpg', '364.00', '444.00', '487562', '324', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('82', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('83', '奶粉', '成长奶粉', '美国', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer11.jpg', '125.00', '452.00', '436876', '4875', '5632', '2017-11-16 16:03:52');
INSERT INTO `goods` VALUES ('84', '奶粉', '成长奶粉', '德国', '爱他美', '德国爱他美 Aptamil 爱他美婴儿配方奶粉3段10~12M 800g*2罐', null, null, 'img/youer12.jpg', '483.00', '562.00', '492323', '987', '1673', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('85', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('86', '奶粉', '成长奶粉', '荷兰', '牛栏', ' 荷兰牛栏 Nutrilon 婴幼儿奶粉4段12M+800g*4罐', null, null, 'img/youer14.jpg', '256.00', '578.00', '586957', '7643', '342', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('87', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer15.jpg', '471.00', '794.00', '784652', '356', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('88', '奶粉', '成长奶粉', '英国', '惠氏', '惠氏 Wyeth 启赋 幼儿配方奶粉3段 1-3Y 900g', null, null, 'img/youer10.jpg', '209.00', '395.00', '877347', '2423', '2311', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('89', '奶粉', '成长奶粉', '澳洲', '雅培小安素', '澳洲原装雅培小安素 PediaSure 【直邮包税】小安素助长奶粉850g*3罐', null, null, 'img/youer13.jpg', '690.00', '890.00', '487657', '1003', '1223', '2017-11-16 13:54:06');
INSERT INTO `goods` VALUES ('90', '奶粉', '成长奶粉', '新西兰', '新西兰原装', '新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉4段36M+ 900g*2罐', null, null, 'img/youer2.jpg', '456.00', '667.00', '123332', '12333', '5632', '2017-11-16 13:54:06');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(12) NOT NULL COMMENT '用户的手机号',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13512208603', '123456');
INSERT INTO `user` VALUES ('2', '13512208888', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('11', '13512209999', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('12', '13512206666', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('13', '13516228888', 'e10adc3949ba59abbe56e057f20f883e');
SET FOREIGN_KEY_CHECKS=1;
