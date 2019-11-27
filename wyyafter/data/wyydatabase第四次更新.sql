-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-11-10 12:39:27
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wyydatabase`
--

-- --------------------------------------------------------

--
-- 表的结构 `ad`
--

CREATE TABLE `ad` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `buy`
--

CREATE TABLE `buy` (
  `b_id` int(11) NOT NULL,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `choiceness`
--

CREATE TABLE `choiceness` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `class`
--

CREATE TABLE `class` (
  `m_id` int(11) NOT NULL,
  `m_class` varchar(10) DEFAULT NULL,
  `m_no` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `class`
--

INSERT INTO `class` (`m_id`, `m_class`, `m_no`) VALUES
(1, '微专业', '10000'),
(2, '限时秒杀', '10001'),
(3, '系列课程', '10002'),
(4, '精选好课', '10003'),
(5, '新课推荐', '10004'),
(6, '免费好课', '10005'),
(7, NULL, NULL),
(8, '前端开发', '10006');

-- --------------------------------------------------------

--
-- 表的结构 `course`
--

CREATE TABLE `course` (
  `c_id` int(11) NOT NULL,
  `h_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `free`
--

CREATE TABLE `free` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `live`
--

CREATE TABLE `live` (
  `l_id` int(11) NOT NULL,
  `l_title` varchar(120) DEFAULT NULL,
  `l_intro` varchar(200) DEFAULT NULL,
  `l_livetime` datetime DEFAULT NULL,
  `l_img` varchar(150) DEFAULT NULL,
  `l_alink` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `live`
--

INSERT INTO `live` (`l_id`, `l_title`, `l_intro`, `l_livetime`, `l_img`, `l_alink`) VALUES
(1, '矢量趣味小插画创作——站酷13周年贺图征集', '海宇   网易特邀设计师', '2019-10-29 20:00:00', '../img/index/live_1.jpg', NULL),
(2, '让你的卡通形象动起来', '海鱼  网易特邀设计师', '2019-10-30 20:00:00', '../img/index/live_2.jpg', NULL),
(3, '如何做出好看的情景模式', '艾琦aiki   网易特邀设计师', '2019-10-30 20:00:00', '../img/index/live_3.jpg', NULL),
(4, '面试官对我回答的闭包不满意？深究Closures原理及应用场景', '阳志超 网易特邀前端高级工程师', '2019-10-30 20:00:00', '../img/index/live_4.jpg', NULL),
(5, '揭秘BSDiff增量更新，让app迭代更优雅', '彭锡 网易特邀安卓高级工程师', '2019-10-31 20:00:00', '../img/index/live_5.jpg', NULL),
(6, '高并发集群Session共享技术全方位剖析', '王建安 网易特邀Java高级工程师', '2019-10-30 20:00:00', '../img/index/live_6.jpg', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `major`
--

CREATE TABLE `major` (
  `m_id` int(11) NOT NULL,
  `m_title` varchar(50) DEFAULT NULL,
  `m_intro` varchar(100) DEFAULT NULL,
  `m_img` varchar(255) DEFAULT NULL,
  `m_link` varchar(255) DEFAULT NULL,
  `m_class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `major`
--

INSERT INTO `major` (`m_id`, `m_title`, `m_intro`, `m_img`, `m_link`, `m_class`) VALUES
(0, 'UI设计师', '打通全链路，成为独当一面的核心设计师', '../img/index/weiJoin1.webp', NULL, '10000'),
(1, '数据分析师(Python)', '从零起步，用Python进阶数据分析', '../img/index/weiJoin2.webp', NULL, '10000'),
(2, '互联网运营', '3个月带你掌握2年大厂运营经验', '../img/index/weiJoin3.webp', NULL, '10000'),
(3, 'Python爬虫工程师', '3个月成为网络爬虫工程师', '../img/index/weiJoin4.webp', NULL, '10000');

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE `recommend` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `slide`
--

CREATE TABLE `slide` (
  `sl_id` int(11) NOT NULL,
  `sl_title` varchar(30) DEFAULT NULL,
  `sl_img` varchar(100) DEFAULT NULL,
  `sl_alink` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `slide`
--

INSERT INTO `slide` (`sl_id`, `sl_title`, `sl_img`, `sl_alink`) VALUES
(1, 'slide1', '../img/index/1.jpg', NULL),
(2, 'slide2', '../img/index/2.jpg', NULL),
(3, 'slide3', '../img/index/3.jpg', NULL),
(4, 'slide4', '../img/index/4.jpg', NULL),
(5, 'slide5', '../img/index/5.jpg', NULL),
(6, 'slide6', '../img/index/6.jpg', NULL),
(7, 'slide7', '../img/index/7.jpg', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `system`
--

CREATE TABLE `system` (
  `sys_id` int(11) NOT NULL,
  `sys_title` varchar(50) DEFAULT NULL,
  `sys_img` varchar(150) DEFAULT NULL,
  `sys_alink` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `system`
--

INSERT INTO `system` (`sys_id`, `sys_title`, `sys_img`, `sys_alink`) VALUES
(1, '职场通用技能', '../img/index/sys_1.png', NULL),
(2, '电商运营', '../img/index/sys_2.png', NULL),
(3, '设计创意', '../img/index/sys_3.png', NULL),
(4, '产品与运营', '../img/index/sys_4.png', NULL),
(5, 'AI与数据科学', '../img/index/sys_5.png', NULL),
(6, '编程与开发', '../img/index/sys_6.png', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `u_id` int(11) NOT NULL,
  `unickname` varchar(18) DEFAULT NULL,
  `uname` varchar(18) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `user_name` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `img` varchar(255) NOT NULL COMMENT '用户头像',
  `sex` int(11) DEFAULT NULL COMMENT '性别',
  `introself` varchar(255) NOT NULL COMMENT '自我介绍',
  `qq` varchar(20) NOT NULL,
  `otherfindlimit` int(11) NOT NULL COMMENT '是否允许他人查看权限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`u_id`, `unickname`, `uname`, `upwd`, `user_name`, `phone`, `email`, `regtime`, `img`, `sex`, `introself`, `qq`, `otherfindlimit`) VALUES
(1, '慕林', NULL, 'p12306', 'mulin', '18834144568', '1394332206@qq.com', '2019-11-02 10:21:20', '../img/user/001/001.jpg', 1, '代码没写完,哪有连睡觉!', '1394332206', 1),
(2, NULL, NULL, 'p12306', NULL, '18834144586', NULL, '2019-11-02 10:24:22', '../img/user/001/001.jpg', 1, '', '', 0),
(3, '李然', NULL, 's12345', NULL, '18834144568', NULL, '2019-11-02 10:25:46', '../img/user/001/002.jpg', 1, '', '', 0),
(4, '东哥', NULL, 's23131234', NULL, '13078978968', NULL, '2019-11-02 10:26:46', '../img/user/001/003.jpg', 1, '', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `web`
--

CREATE TABLE `web` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `web`
--

INSERT INTO `web` (`id`, `title`, `intro`, `img`, `link`, `class`) VALUES
(1, '高级前端开发工程师', '打通全栈，进阶高级前端开发工程师', '../img/index/like_web1.webp', '10006', NULL),
(2, 'javascript算法和数据结构入门', '轻松斩获大厂offer', '../img/index/like_web2.webp', NULL, '10006'),
(3, '撩课-Web项目班-HTML+JS+', '成为大前端全栈型人才', '../img/index/like_web3.webp', NULL, '10006'),
(4, '撩课-React核心技术-全家桶精讲', '大型项目实战教学，持续更新', '../img/index/like_web4.webp', NULL, '10006');

-- --------------------------------------------------------

--
-- 表的结构 `wykill`
--

CREATE TABLE `wykill` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `teacher` varchar(8) DEFAULT NULL,
  `kprice` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `class` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `wykill`
--

INSERT INTO `wykill` (`id`, `title`, `teacher`, `kprice`, `price`, `count`, `img`, `link`, `start`, `end`, `class`) VALUES
(1, '掌握影视片头剪辑艺术(就业篇)', '林杉03', '9.90', '599.00', 25, '../img/index/seckill1_1.jpg', NULL, '2019-10-28 20:00:00', '2019-10-31 20:00:00', '10001'),
(2, '飞思Capture One 高级调色软件', '姜同辉', '9.90', '859.00', 25, '../img/index/seckill1_2.jpg', NULL, '2019-10-28 20:00:00', '2019-10-31 20:00:00', '10001'),
(3, 'PowerBI可视化视觉对象开发实践', '罗简单', '29.90', '199.00', 30, '../img/index/seckill1_3.png', NULL, '2019-10-28 20:00:00', '2019-10-31 20:00:00', '10001'),
(4, 'FVA财务估值分析实战', '金融都会', '0.90', '19.90', 24, '../img/index/seckill1_4.png', NULL, '2019-10-28 20:00:00', '2019-10-31 20:00:00', '10001'),
(5, 'Eviews统计建模与实用操作', '211统计公司', '9.90', '89.00', 30, '../img/index/seckill1_5.png', NULL, '2019-10-28 20:00:00', '2019-10-31 20:00:00', '10001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `choiceness`
--
ALTER TABLE `choiceness`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `free`
--
ALTER TABLE `free`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `live`
--
ALTER TABLE `live`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `recommend`
--
ALTER TABLE `recommend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`sl_id`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`sys_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `web`
--
ALTER TABLE `web`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wykill`
--
ALTER TABLE `wykill`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ad`
--
ALTER TABLE `ad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `buy`
--
ALTER TABLE `buy`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `choiceness`
--
ALTER TABLE `choiceness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `class`
--
ALTER TABLE `class`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `course`
--
ALTER TABLE `course`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `free`
--
ALTER TABLE `free`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `live`
--
ALTER TABLE `live`
  MODIFY `l_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `recommend`
--
ALTER TABLE `recommend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `slide`
--
ALTER TABLE `slide`
  MODIFY `sl_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `system`
--
ALTER TABLE `system`
  MODIFY `sys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `web`
--
ALTER TABLE `web`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `wykill`
--
ALTER TABLE `wykill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
