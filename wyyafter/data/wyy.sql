SET NAMES UTF8;
DROP DATABASE IF EXISTS wyy;
CREATE DATABASE wyy CHARSET=UTF8;
USE wyy;

/*�ֲ�ͼ��*/
CREATE TABLE slide(
  sl_id INT PRIMARY KEY AUTO_INCREMENT,
  sl_title VARCHAR(30),
  sl_img VARCHAR(100),
  sl_alink VARCHAR(100)
);

/*�û���*/
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

/*���ﳵ�� �����������:��Ȥ�Ƽ�h_id,�û�uid*/
CREATE TABLE buy(
  b_id INT PRIMARY KEY AUTO_INCREMENT,
  h_id INT,
  u_id INT
);

/*�û��γ̱�*/
CREATE TABLE course(
  c_id INT PRIMARY KEY AUTO_INCREMENT,
  h_id INT,
  u_id INT
);

/*ϵͳ��ѧϰ*/
CREATE TABLE system(
  sys_id INT PRIMARY KEY AUTO_INCREMENT,
  sys_title VARCHAR(50),
  sys_img VARCHAR(150),
  sys_alink VARCHAR(200)
);

/*����ֱ��LIVE*/
CREATE TABLE live(
  l_id INT PRIMARY KEY AUTO_INCREMENT,
  l_title VARCHAR(120),
  l_intro VARCHAR(200),
  l_livetime DATETIME,
  l_img VARCHAR(150),
  l_alink VARCHAR(200)
);

/*΢רҵ*/
CREATE TABLE major(
  m_id INT PRIMARY KEY AUTO_INCREMENT,
  m_class VARCHAR(10),
  m_no VARCHAR(10)
);

/*��Ȥ�Ƽ�*/
CREATE TABLE hobby_recommand(
  
)

/*�ײ����ͼ-ȡ������*/







