Vue.component("loginReg",{
  template:`
  <!-- 登录注册 - 模态框 -->
<div class="container-fluid">
        <div id="login" class="login modal">
            <div class="modal-content">
                <div class="modal-header pb-0 border-0">
                    <!-- 关闭按钮 -->
                    <span class="close" data-dismiss="modal">&times;</span>
                </div>
                <div class="pane1 modal-body py-0">
                    <!-- 导航栏 登录方式(手机/邮箱) -->
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item text-muted cursor_pointer"><a href="#login_tab1" class="nav-link active border-0" data-toggle="tab">手机号登录</a></li>
                        <li class="nav-item text-muted cursor_pointer"><a href="#login_tab2" class="nav-link border-0" data-toggle="tab">邮箱登录</a></li>
                    </ul>
                    <div class="tab-content">
                        <!-- 手机登录 -->
                        <!-- 导航 分页 -->
                        <div id="login_tab1" class="tab-pane active">
                            <a href="#" class="mess_link mr-3 float-right clear_after text_xm mt-2 text-muted mb-2" onclick="message()">使用短信验证登录</a>
                            <!-- 手机号 输入框组 -->
                            <div class="input-group border mb-4">
                                <span class="u_logo_img d-inline-block">
                                    <span class="phone_logo d-block m-auto"></span>
                                </span>
                                <input type="phone" placeholder="请输入手机号" maxlength="11" id="login_phone" class="p-0 pl-1 text_small border-0 font-weight-bold login_active">
                            </div>
                            <!-- 使用短信验证码验证要显示的滑块 -->
                            <div class="slideblock" style="display: none;">
                                <!-- 滑块 -->
                                <div>向右拖动滑块填充图案</div>
                            </div>
                            <!-- 短信验证码 -->
                            <div class="mymessage" style="display: none;">
                                <div class="input-group mb-4 row d-flex justify-content-between ml-0">
                                    <input type="text" class="col-7" placeholder="请输入短信验证码" style="font-size: 14px;font-weight: 400;" onfocus="this.style.fontWeight=600;this.maxLength=6" onblur="this.style.fontWeight=400">
                                    <button class="btn btn-outline-success indexcolor col-4">获取验证码</button>
                                </div>
                            </div>
                            
                            <!-- 密码输入框组 -->
                            <div class="passblock input-group border mb-4">
                                <span class="u_logo_img d-inline-block">
                                    <span class="phone_logo d-block m-auto"></span>
                                </span>
                                <input type="phone" placeholder="请输入密码" maxlength="11" id="login_upwd" class="p-0 pl-1 text_small border-0 font-weight-bold">
                            </div>
                            <!-- 登录按钮 -->
                            <button class="btn btn-block btn-success mb-2" @click="phonelogin">登录</button>
                            <!-- 底部 - 去注册提示 -->
                            <p class="m-0 clear_after">
                                <input type="checkbox" checked id="autoLogin" class="mr-1 float-left mt-1"><label for="autoLogin" class="logininfor text-muted text_xm float-left">十天内免费登录</label><a href="#" class="text-muted text_xm pl-0 float-left">忘记密码</a>
                                <a href="#" id="a" class="reg text_xm indexcolor float-right" onclick="goto()">去注册&nbsp;></a>
                            </p>
                        </div>
                        <!-- 邮箱登录 -->
                        <div id="login_tab2" class="tab-pane">
                            <div class="input-group border mb-4 mt-4">
                                <span class="u_logo_img d-inline-block">
                                    <span class="phone_logo d-block m-auto"></span>
                                </span>
                                <input type="phone" placeholder="网易邮箱/常用邮箱" maxlength="11" class="p-0 pl-1 text_small border-0 font-weight-bold">
                            </div>
                            <!-- 密码输入框组 -->
                            <div class="input-group border mb-4">
                                <span class="u_logo_img d-inline-block">
                                    <span class="phone_logo d-block m-auto"></span>
                                </span>
                                <input type="phone" placeholder="密码" maxlength="11" class="p-0 pl-1 text_small border-0 font-weight-bold">
                            </div>
                            <!-- 按钮 -->
                            <button class="btn btn-block btn-success mb-2">登录</button>
                            <!-- 底部 - 去注册提示 -->
                            <p class="m-0 clear_after">
                                <input type="checkbox" checked id="autoLogin" class="mr-1 float-left mt-1"><label for="autoLogin" class="logininfor text-muted text_xm float-left">十天内免费登录</label><a href="#" class="text-muted text_xm pl-0 float-left">忘记密码</a>
                            </p>
                        </div>
                    </div> 
                </div>

                <!-- 注册页面 -->
                <div id="abc" class="modal-body reg_pane pb-0" style="display: none;">
                    <h4>手机号注册</h4>
                    <!-- 手机号 输入框组 -->
                    <div class="input-group border mb-4" :class="{Errborder:Errarr[0]}">
                        <span class="u_logo_img d-inline-block">
                            <span class="phone_logo d-block m-auto"></span>
                        </span>
                        <input type="phone" placeholder="请输入手机号" v-model="phone" @blur.prevent="test()" onfocus="this.maxLength=11" onblur="this.maxLength=100" class="p-0 pl-1 text_small border-0 font-weight-bold login_active" style="width: 90%;">
                    </div>

                    <!-- 密码输入框组 -->
                    <div class="input-group border mb-4" :class="{Errborder:Errarr[1]}">
                        <span class="u_logo_img d-inline-block">
                            <span class="phone_logo d-block m-auto"></span>
                        </span>
                        <input type="phone" placeholder="请输入密码" v-model="pwd" @blur.prevent="test()" style="font-size: 14px;font-weight: 400;width: 90%;" onfocus="this.maxLength=11; this.style.fontWeight=600;" onblur="this.maxLength=100" class="p-0 pl-1 text_small border-0 font-weight-bold" >
                    </div>

                    <!-- 滑块验证 -->
                    <!-- 短信验证码验证 -->
                    <div class="input-group mb-4 row d-flex justify-content-between ml-0">
                        <input type="text" class="col-7" v-model="message" placeholder="请输入短信验证码" style="font-size: 14px;font-weight: 400;" onfocus="this.style.fontWeight=600;this.maxLength=6" onblur="this.style.fontWeight=400">
                        <button class="btn btn-outline-success col-4">获取验证码</button>
                    </div>


                    <!--错误提示-->
                    <div class='ErrMsg' v-text="ErrMsg"></div>
                     <!--注册页面的的登录按钮  -->
                     <button class="btn btn-success btn-block btn-lg" :disabled="!isxieyichecked" @click="sendReg">注册</button>
                     <!-- 协议确认 以及 去登陆 -->
                     <div class="xieyi d-flex justify-content-between mt-3" style="font-size: 12px;">
                        <div @click="lock">
                            <input type="checkbox" :checked="isxieyichecked" style="color:#aaa;vertical-align: middle;" id="xieyi">
                            <label for="xieyi" @click="lock" style="color:#aaa;vertical-align: middle;margin-bottom: 1px;margin-bottom: 0;">我同意<a href="javascript:;" style="color:#aaa">《用户使用协议》</a>和<a href="javascript:;" style="color:#aaa">《隐私政策》</a></label>
                        </div>
                        <a href="javascript:;" class="indexcolor" onclick="goto()">去登陆&nbsp;></a>
                     </div>
                </div>
                <!-- 底部 -->
                <div class="modal-footer border-top-0">
                        <div class="row w-100 m-0">
                            <div class="col-3 text_small text-muted p-0 text-center mt-4">其他登录方式</div>
                            <div class="col-9 p-0">
                                <!-- 弹性布局 -->
                                <ul class="d-flex justify-content-lg-around">
                                    <li class="pt-3 mx-2 pl-2 cursor_pointer"><img src="../img/index/login01.png" class="w-100"><p class="text-muted text_xm text-center pt-3 mb-0">微信</p></li>
                                    <li class="pt-3 mx-2 cursor_pointer"><img src="../img/index/login02.png" class="w-100"><p class="text-muted text_xm text-center pt-3 mb-0">QQ</p></li>
                                    <li class="pt-3 mx-2 cursor_pointer"><img src="../img/index/login03.png" class="w-100"><p class="text-muted text_xm text-center pt-3 mb-0">微博</p></li>
                                    <li class="pt-3 mx-2 cursor_pointer"><img src="../img/index/login04.png" class="w-100"><p class="text-muted text_xm text-center pt-3 mb-0">人人</p></li>
                                    <li class="pt-3 mx-2 pr-2 cursor_pointer"><img src="../img/index/login05.png" class="w-100"><p class="text-muted text_xm text-center pt-3 mb-0">爱课程</p></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</div>
  `,
  data(){
    return {
      //协议确认
      isxieyichecked:false,
      //手机号
      phone:'',
      pwd:'',
      message:'',//短信验证码
      //错误提示信息
      ErrMsg:'',
      //设置错误提示框的样式
      Errarr:[false,false,false]
    }
  },
  methods:{
    // 协议的确认同时，要解锁注册按钮
    lock(){
      this.isxieyichecked = !this.isxieyichecked;
    },
    test(){
      //测试手机号或密码格式
      var phoneReg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;//手机号正则
      var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//密码正则  密码至少包含 数字和英文，长度6-20
      if(!phoneReg.test(this.phone)){
        //手机号格式有误
        this.ErrMsg = "手机号格式有误!"
        //给手机号的边框添加类：Errborder
        //设置底部提示文字信息，设置手机输入框的红色样式
        this.Errarr[0]=true;
        return;
      }else{
        //手机号格式有误
        this.ErrMsg = "";
        //给手机号的边框添加类：Errborder
        this.Errarr[0]=false;
      }
      //判断密码
      if(!pwdReg.test(this.pwd)){
        //手机号格式有误
        this.ErrMsg = "密码必须是6~12位，包含数字个英文!"
        //给手机号的边框添加类：Errborder
        //设置底部提示文字信息，设置手机输入框的红色样式
        this.Errarr[1]=true;
        return;
      }else{
        //手机号格式有误
        this.ErrMsg = "";
        //给手机号的边框添加类：Errborder
        this.Errarr[1]=false;
      }
      //判断验证码
      if(!this.message){
        this.ErrMsg = "验证码不能空!"
        this.Errarr[2]=true;
        return;
      }else{
        this.ErrMsg = "";
        this.Errarr[2]=false;
      }
    },
    //提交注册信息
    sendReg(){
      // console.log(this.phone,this.pwd)
      //使用ajax提交数据
      axios.defaults.baseURL=config.baseUrl;
      axios.post('/wyuser/reg',
        `phone=${this.phone}&upwd=${this.pwd}`
      ).then(function(result){
        console.log(result.data);
        if(result.data.code == 100){
          alert(result.data.msg);
        }else if(result.data.code == 102){
          alert("该手机号已经被注册,请更换手机号或者找回密码");
        }else if(result.data.code == 200){
          alert(result.data.msg);
        }
        //判断结果，注册成功就导航到登录页面
        //这里测试，暂时弹出提示框
        // alert(result.msg);
      });
    },
    // 登录方式
    // 方式一: 手机号密码登录
    phonelogin(){
      var phone = document.getElementById("login_phone");
      var upwd = document.getElementById("login_upwd");
      var regPhone = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
      var regpwd = /^(\w){6,20}$/;
      if(!phone.value || !upwd.value){
        alert("手机号或密码不能为空!");
      }else if(!regPhone.test(phone.value)){
        alert("手机格式不正确!");
      }else if(!regpwd.test(upwd.value)){
        alert("密码格式不正确!至少包含不低于3~12为字母数字!");
      }else{
        // 发送ajax
        axios.defaults.baseURL=config.baseUrl;
        var url = "/wyuser/login";
        var str = `phone=${phone.value}&upwd=${upwd.value}`;
        axios.post(url,str)
        .then(res=>{
          if(res.data.code == -1){
            // 登录失败 , 没有该用户
            // 弹出提示,清空input值,并且获取焦点
            alert(res.data.msg);
            phone.value = "";
            upwd.value = "";
            phone.focus();
          }else if(res.data.code == 1){
            //登录成功,
            // 刷新页面
            window.location.reload();
          }
        })
        .catch(err=>{
          console.log(err);
        })
      }
    }
  }
});