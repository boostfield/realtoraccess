$(document).ready(function () {
  $("#formLogin").validate({
    submitHandler: function(form) {
      login()
    },
    invalidHandler: function(event, validator) {
    }
  })
  $("#formRegister").validate({
    submitHandler: function(form) {
      register()
    },
    invalidHandler: function(event, validator) {
    }
  })
  $('span.service').popover();
  $('.read-more').popover();
  $('.btn-option.wechat').hover(function () {
      $('#wechat-qrcode').css("display","block");
  },function(){
    $('#wechat-qrcode').css("display","none");
  })
  $('.backTop').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
  })
})

function login () {
  let userid = $('#userid').val()
  let passwd = $('#passwd').val()
  let data = {userid: userid, passwd: passwd}
  $.ajax({
    type: 'POST',
    url: 'http://www.realtoraccess.com/web/signin/',
    data: data,
    dataType: 'JSON',
    success: function(resp) {
      console.log(resp)
      let code = resp.rescode
      console.log(code)
      if (code != "0") {
        console.log('用户名或密码错误')
      } else {
        console.log('登录成功')
      }
    }
    
  })
}

function register () {
  let userid = $('#userid').val()
  let passwd = $('#passwd').val()
  let data = {userid: userid, passwd1: passwd, passwd2: passwd}
  $.ajax({
    type: 'POST',
    url: 'http://www.realtoraccess.com/web/signup/',
    data: data,
    dataType: 'JSON',
    success: function(resp) {
      console.log(resp)
      let code = resp.rescode
      if (code != 0) {
        if (code == 1)
        console.log('用户已存在')
      } else {
        console.log('注册成功')
      }
    }
  })
}