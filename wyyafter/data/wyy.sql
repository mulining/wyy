SET NAMES UTF8;
DROP DATABASE IF EXISTS wyy;
CREATE DATABASE wyy CHARSET=UTF8;
USE wyy;

/*轮播图表*/
CREATE TABLE slide(
  sl_id INT PRIMARY KEY AUTO_INCREMENT,
  sl_title VARCHAR(30),
  sl_img VARCHAR(100),
  sl_alink VARCHAR(100)
);

/*用户表*/
CREATE TABLE user(
  u_id INT PRIMARY KEY AUTO_INCREMENT,
  unickname VARCHAR(18),
  uname VARCHAR(18),
  upwd VARCHAR(18),
  user_name VARCHAR(10),
  phone VARCHAR(12),
  email VARCHAR(20),
  regtime TIMESTAMP DEFAULT NOW()
);

/*购物车表 包含两个外键:兴趣推荐h_id,用户uid*/
CREATE TABLE buy(
  b_id INT PRIMARY KEY AUTO_INCREMENT,
  h_id INT,
  u_id INT
);

/*用户课程表*/
CREATE TABLE course(
  c_id INT PRIMARY KEY AUTO_INCREMENT,
  h_id INT,
  u_id INT
);

/*系统化学习*/
CREATE TABLE system(
  sys_id INT PRIMARY KEY AUTO_INCREMENT,
  sys_title VARCHAR(50),
  sys_img VARCHAR(150),
  sys_alink VARCHAR(200)
);

/*课堂直播LIVE*/
CREATE TABLE live(
  l_id INT PRIMARY KEY AUTO_INCREMENT,
  l_title VARCHAR(120),
  l_intro VARCHAR(200),
  l_livetime DATETIME,
  l_img VARCHAR(150),
  l_alink VARCHAR(200)
);

/*微专业*/
CREATE TABLE major(
  m_id INT PRIMARY KEY AUTO_INCREMENT,
  m_class VARCHAR(10),
  m_no VARCHAR(10)
);

/*兴趣推荐*/
CREATE TABLE hobby_recommand(
  
)

/*底部广告图-取消创表*/







