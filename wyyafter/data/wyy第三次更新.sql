# Host: localhost  (Version: 5.5.53)
# Date: 2019-10-27 18:58:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "ad"
#

CREATE TABLE `ad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "ad"
#


#
# Structure for table "buy"
#

CREATE TABLE `buy` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "buy"
#


#
# Structure for table "choiceness"
#

CREATE TABLE `choiceness` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "choiceness"
#


#
# Structure for table "class"
#

CREATE TABLE `class` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_class` varchar(10) DEFAULT NULL,
  `m_no` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "class"
#

INSERT INTO `class` VALUES (1,'微专业','10000'),(2,'限时秒杀','10001'),(3,'系列课程','10002'),(4,'精选好课','10003'),(5,'新课推荐','10004'),(6,'免费好课','10005');

#
# Structure for table "course"
#

CREATE TABLE `course` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "course"
#


#
# Structure for table "free"
#

CREATE TABLE `free` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "free"
#


#
# Structure for table "kill"
#

CREATE TABLE `kill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `teacher` varchar(8) DEFAULT NULL,
  `kprice` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "kill"
#


#
# Structure for table "live"
#

CREATE TABLE `live` (
  `l_id` int(11) NOT NULL AUTO_INCREMENT,
  `l_title` varchar(120) DEFAULT NULL,
  `l_intro` varchar(200) DEFAULT NULL,
  `l_livetime` datetime DEFAULT NULL,
  `l_img` varchar(150) DEFAULT NULL,
  `l_alink` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "live"
#

INSERT INTO `live` VALUES (1,'矢量趣味小插画创作——站酷13周年贺图征集','海宇   网易特邀设计师','2019-10-29 20:00:00','../img/index/live_1.jpg',NULL),(2,'让你的卡通形象动起来','海鱼  网易特邀设计师','2019-10-30 20:00:00','../img/index/live_2.jpg',NULL),(3,'如何做出好看的情景模式','艾琦aiki   网易特邀设计师','2019-10-30 20:00:00','../img/index/live_3.jpg',NULL),(4,'面试官对我回答的闭包不满意？深究Closures原理及应用场景','阳志超 网易特邀前端高级工程师','2019-10-30 20:00:00','../img/index/live_4.jpg',NULL),(5,'揭秘BSDiff增量更新，让app迭代更优雅','彭锡 网易特邀安卓高级工程师','2019-10-31 20:00:00','../img/index/live_5.jpg',NULL),(6,'高并发集群Session共享技术全方位剖析','王建安 网易特邀Java高级工程师','2019-10-30 20:00:00','../img/index/live_6.jpg',NULL);

#
# Structure for table "major"
#

CREATE TABLE `major` (
  `m_id` int(11) NOT NULL,
  `m_title` varchar(50) DEFAULT NULL,
  `m_intro` varchar(100) DEFAULT NULL,
  `m_img` varchar(255) DEFAULT NULL,
  `m_link` varchar(255) DEFAULT NULL,
  `m_class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "major"
#

INSERT INTO `major` VALUES (0,'UI设计师','打通全链路，成为独当一面的核心设计师','../img/index/weiJoin1.webp',NULL,'10000'),(1,'数据分析师(Python)','从零起步，用Python进阶数据分析','../img/index/weiJoin2.webp',NULL,'10000'),(2,'互联网运营','3个月带你掌握2年大厂运营经验','../img/index/weiJoin3.webp',NULL,'10000'),(3,'Python爬虫工程师','3个月成为网络爬虫工程师','../img/index/weiJoin4.webp',NULL,'10000');

#
# Structure for table "recommend"
#

CREATE TABLE `recommend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "recommend"
#


#
# Structure for table "series"
#

CREATE TABLE `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "series"
#


#
# Structure for table "slide"
#

CREATE TABLE `slide` (
  `sl_id` int(11) NOT NULL AUTO_INCREMENT,
  `sl_title` varchar(30) DEFAULT NULL,
  `sl_img` varchar(100) DEFAULT NULL,
  `sl_alink` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "slide"
#

INSERT INTO `slide` VALUES (1,'slide1','../img/index/1.jpg',NULL),(2,'slide2','../img/index/2.jpg',NULL),(3,'slide3','../img/index/3.jpg',NULL),(4,'slide4','../img/index/4.jpg',NULL),(5,'slide5','../img/index/5.jpg',NULL),(6,'slide6','../img/index/6.jpg',NULL),(7,'slide7','../img/index/7.jpg',NULL);

#
# Structure for table "system"
#

CREATE TABLE `system` (
  `sys_id` int(11) NOT NULL AUTO_INCREMENT,
  `sys_title` varchar(50) DEFAULT NULL,
  `sys_img` varchar(150) DEFAULT NULL,
  `sys_alink` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sys_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "system"
#

INSERT INTO `system` VALUES (1,'职场通用技能','../img/index/sys_1.png',NULL),(2,'电商运营','../img/index/sys_2.png',NULL),(3,'设计创意','../img/index/sys_3.png',NULL),(4,'产品与运营','../img/index/sys_4.png',NULL),(5,'AI与数据科学','../img/index/sys_5.png',NULL),(6,'编程与开发','../img/index/sys_6.png',NULL);

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `unickname` varchar(18) DEFAULT NULL,
  `uname` varchar(18) DEFAULT NULL,
  `upwd` varchar(18) DEFAULT NULL,
  `user_name` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "user"
#


#
# Structure for table "web"
#

CREATE TABLE `web` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "web"
#

