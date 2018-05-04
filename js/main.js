$(document).ready(function () {
  $('#formLogin').validate({
    submitHandler: function (form) {
      $('#error-info').hide()
      login()
    },
    invalidHandler: function (event, validator) {
    }
  })
  $('#formRegister').validate({
    submitHandler: function (form) {
      $('#error-info').hide()
      register()
    },
    invalidHandler: function (event, validator) {
    }
  })

  $('span.service').popover()
  $('span.service').on('shown.bs.popover', function () {
    $('#formMessage').validate({
      submitHandler: function (form) {
        leaveMessage()
      },
      invalidHandler: function (event, validator) {
      }
    })
  })
  $('.read-more').popover()
  $('.btn-option.wechat').hover(function () {
    $('#wechat-qrcode').css('display', 'block')
  }, function () {
    $('#wechat-qrcode').css('display', 'none')
  })
  $('.backTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow')
  })
})
$(document).mouseup(function (e) {
  var container = $(".popover")
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.popover("hide")
  }
})

function login() {
  let userid = $('#userid').val()
  let passwd = $('#passwd').val()
  let data = { userid: userid, passwd: passwd }
  $.ajax({
    type: 'POST',
    url: 'http://www.realtoraccess.com/web/signin/',
    data: data,
    dataType: 'JSON',
    success: function (resp) {
      let code = resp.rescode
      if (code != "0") {
        $('#error-info').text(resp.resdesc)
        $('#error-info').show()
      } else {
        console.log('登录成功')
      }
    }

  })
}

function register() {
  let userid = $('#userid').val()
  let passwd = $('#passwd').val()
  let data = { userid: userid, passwd1: passwd, passwd2: passwd }
  $.ajax({
    type: 'POST',
    url: 'http://www.realtoraccess.com/web/signup/',
    data: data,
    dataType: 'JSON',
    success: function (resp) {
      let code = resp.rescode
      if (code != 0) {
        $('#error-info').text(resp.resdesc)
        $('#error-info').show()
      } else {
        console.log('注册成功')
      }
    }
  })
}

function leaveMessage() {
  let userid = $('#userid').val()
  let custname = $('#inputName').val()
  let custemail = $('#inputEmail').val()
  let custmsg = $('#inputMessage').val()
  let data = { userid: userid, custname: custname, custemail: custemail, custmsg: custmsg }
  $.ajax({
    type: 'POST',
    url: 'http://www.realtoraccess.com/web/cmt/info/',
    data: data,
    dataType: 'JSON',
    success: function (resp) {
      let code = resp.rescode
      if (code != 0) {
        $('#error-info').text(resp.resdesc)
        $('#error-info').show()
      } else {
        alert('留言已成功发送')
      }
    }
  })
}