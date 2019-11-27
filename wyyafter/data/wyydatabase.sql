SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `buy` (
  `b_id` int(11) NOT NULL,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `course` (
  `c_id` int(11) NOT NULL,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `live` (
  `l_id` int(11) NOT NULL,
  `l_title` varchar(120) DEFAULT NULL,
  `l_intro` varchar(200) DEFAULT NULL,
  `l_livetime` datetime DEFAULT NULL,
  `l_img` varchar(150) DEFAULT NULL,
  `l_alink` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `live` (`l_id`, `l_title`, `l_intro`, `l_livetime`, `l_img`, `l_alink`) VALUES
(1, '矢量趣味小插画创作——站酷13周年贺图征集', '海宇   网易特邀设计师', '2019-10-29 20:00:00', '../img/index/live_1.jpg', NULL),
(2, '让你的卡通形象动起来', '海鱼  网易特邀设计师', '2019-10-30 20:00:00', '../img/index/live_2.jpg', NULL),
(3, '如何做出好看的情景模式', '艾琦aiki   网易特邀设计师', '2019-10-30 20:00:00', '../img/index/live_3.jpg', NULL),
(4, '面试官对我回答的闭包不满意？深究Closures原理及应用场景', '阳志超 网易特邀前端高级工程师', '2019-10-30 20:00:00', '../img/index/live_4.jpg', NULL),
(5, '揭秘BSDiff增量更新，让app迭代更优雅', '彭锡 网易特邀安卓高级工程师', '2019-10-31 20:00:00', '../img/index/live_5.jpg', NULL),
(6, '高并发集群Session共享技术全方位剖析', '王建安 网易特邀Java高级工程师', '2019-10-30 20:00:00', '../img/index/live_6.jpg', NULL);

CREATE TABLE `major` (
  `m_id` int(11) NOT NULL,
  `m_class` varchar(10) DEFAULT NULL,
  `m_no` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `major` (`m_id`, `m_class`, `m_no`) VALUES
(1, '微专业', '10000'),
(2, '限时秒杀', '10001'),
(3, '系列课程', '10002'),
(4, '精选好课', '10003'),
(5, '新课推荐', '10004'),
(6, '免费好课', '10005');

CREATE TABLE `slide` (
  `sl_id` int(11) NOT NULL,
  `sl_title` varchar(30) DEFAULT NULL,
  `sl_img` varchar(100) DEFAULT NULL,
  `sl_alink` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `slide` (`sl_id`, `sl_title`, `sl_img`, `sl_alink`) VALUES
(1, 'slide1', '../img/index/1.jpg', NULL),
(2, 'slide2', '../img/index/2.jpg', NULL),
(3, 'slide3', '../img/index/3.jpg', NULL),
(4, 'slide4', '../img/index/4.jpg', NULL),
(5, 'slide5', '../img/index/5.jpg', NULL),
(6, 'slide6', '../img/index/6.jpg', NULL),
(7, 'slide7', '../img/index/7.jpg', NULL);

CREATE TABLE `system` (
  `sys_id` int(11) NOT NULL,
  `sys_title` varchar(50) DEFAULT NULL,
  `sys_img` varchar(150) DEFAULT NULL,
  `sys_alink` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `system` (`sys_id`, `sys_title`, `sys_img`, `sys_alink`) VALUES
(1, '职场通用技能', '../img/index/sys_1.png', NULL),
(2, '电商运营', '../img/index/sys_2.png', NULL),
(3, '设计创意', '../img/index/sys_3.png', NULL),
(4, '产品与运营', '../img/index/sys_4.png', NULL),
(5, 'AI与数据科学', '../img/index/sys_5.png', NULL),
(6, '编程与开发', '../img/index/sys_6.png', NULL);

CREATE TABLE `user` (
  `u_id` int(11) NOT NULL,
  `unickname` varchar(18) DEFAULT NULL,
  `uname` varchar(18) DEFAULT NULL,
  `upwd` varchar(18) DEFAULT NULL,
  `user_name` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `buy`
  ADD PRIMARY KEY (`b_id`);

ALTER TABLE `course`
  ADD PRIMARY KEY (`c_id`);

ALTER TABLE `live`
  ADD PRIMARY KEY (`l_id`);

ALTER TABLE `major`
  ADD PRIMARY KEY (`m_id`);

ALTER TABLE `slide`
  ADD PRIMARY KEY (`sl_id`);

ALTER TABLE `system`
  ADD PRIMARY KEY (`sys_id`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`u_id`);


ALTER TABLE `buy`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `course`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `live`
  MODIFY `l_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `major`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `slide`
  MODIFY `sl_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `system`
  MODIFY `sys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `user`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
