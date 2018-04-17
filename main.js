$(document).ready(function () {
  $("#formLogin").validate({
    submitHandler: function(form) {
      login()
    },
    invalidHandler: function(event, validator) {
    }
  })
})

function login() {
  var userid = $('#userid').val()
  var passwd = $('#passwd').val()
  var data = {userid: userid, passwd: passwd}
  $.post('http://www.realtoraccess.com/web/signin/', data, function(resp){
    console.log(resp)
    if (resp.rescode != 0) {
      console.log('用户名或密码错误')
    } else {
      console.log('登录成功')
    }
	})
}