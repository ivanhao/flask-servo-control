$(document).ready(function(){
    // $.get("./rlogin?name=admin&passwd=e10adc3949ba59abbe56e057f20f883e",function(data,status){
    //     alert("login:"+data);
    // });
    
    $.get("check",function(data,status){
        if (data['data'] == "no"){
            alert("请登录！");
            window.location.href="/login";
        }
        else{
            $.ajax({
                url: './servos',
                type: 'GET',
                dataType: 'json',
                error: function(xhr) { alert( xhr.responseText ); },
                success: function(data) {
                    $('#s1').slider('setValue', data['servo1']);
                    $('#s1v').text($('#s1').slider('getValue'));
                    $('#s2').slider('setValue', data['servo2']);
                    $('#s2v').text($('#s2').slider('getValue'));
                    $('#s3').slider('setValue', data['servo3']);
                    $('#s3v').text($('#s3').slider('getValue'));
                    $('#s4').slider('setValue', data['servo4']);
                    $('#s4v').text($('#s4').slider('getValue'));
                    $('#s5').slider('setValue', data['servo5']);
                    $('#s5v').text($('#s5').slider('getValue'));
                    $('#s6').slider('setValue', data['servo6']);
                    $('#s6v').text($('#s6').slider('getValue'));
                    $('#s7').slider('setValue', data['servo7']);
                    $('#s7v').text($('#s7').slider('getValue'));
                    $('#s8').slider('setValue', data['servo8']);
                    $('#s8v').text($('#s8').slider('getValue'));
                    $('#s9').slider('setValue', data['servo9']);
                    $('#s9v').text($('#s9').slider('getValue'));
                    $('#s10').slider('setValue', data['servo10']);
                    $('#s10v').text($('#s10').slider('getValue'));
                    $('#s11').slider('setValue', data['servo11']);
                    $('#s11v').text($('#s11').slider('getValue'));
                    $('#s12').slider('setValue', data['servo12']);
                    $('#s12v').text($('#s12').slider('getValue'));
                    $('#s13').slider('setValue', data['servo13']);
                    $('#s13v').text($('#s13').slider('getValue'));
                    $('#s14').slider('setValue', data['servo14']);
                    $('#s14v').text($('#s14').slider('getValue'));
                    $('#s15').slider('setValue', data['servo15']);
                    $('#s15v').text($('#s15').slider('getValue'));
                    $('#s16').slider('setValue', data['servo16']);
                    $('#s16v').text($('#s16').slider('getValue'));
                }
            });	
            
            $("#servo1").click(function(){
                $.ajax({
                    url: './servos/servo1',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s1').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){
                            alert("请登录！");
                            window.location.href="/login";
                        }
                        else{
                            alert(data);
                        }
                    }
                });	
            });
            $("#servo2").click(function(){
                $.ajax({
                    url: './servos/servo2',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s2').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo3").click(function(){
                $.ajax({
                    url: './servos/servo3',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s3').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo4").click(function(){
                $.ajax({
                    url: './servos/servo4',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s4').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo5").click(function(){
                $.ajax({
                    url: './servos/servo5',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s5').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo6").click(function(){
                $.ajax({
                    url: './servos/servo6',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s6').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo7").click(function(){
                $.ajax({
                    url: './servos/servo7',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s7').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo8").click(function(){
                $.ajax({
                    url: './servos/servo8',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s8').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo9").click(function(){
                $.ajax({
                    url: './servos/servo9',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s9').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo10").click(function(){
                $.ajax({
                    url: './servos/servo10',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s10').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo11").click(function(){
                $.ajax({
                    url: './servos/servo11',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s11').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo12").click(function(){
                $.ajax({
                    url: './servos/servo12',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s12').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo13").click(function(){
                $.ajax({
                    url: './servos/servo13',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s13').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo14").click(function(){
                $.ajax({
                    url: './servos/servo14',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s14').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo15").click(function(){
                $.ajax({
                    url: './servos/servo15',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s15').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            $("#servo16").click(function(){
                $.ajax({
                    url: './servos/servo16',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s16').val()
                    },
                    error: function(xhr) { alert( xhr.responseText ); },
                    success: function(data) {
                        if (data['data'] == "not login"){                             alert("请登录！");                             window.location.href="/login";                         }                         else{                             alert(data);                         }
                    }
                });	
            });
            
            // $("#s1").slider({
            // 	//tooltip: 'always'
            // });
            $("#s1").on("slide", function(slideEvt) {
            	$("#s1v").text(slideEvt.value);
            	$.ajax({
                    url: './servos/servo1',
                    type: 'PUT',
                    dataType: 'json',
                    data:{
                        data:$('#s1').val()
                    },
                });	
            });
            $("#s2").on("slide", function(slideEvt) {
            	$("#s2v").text(slideEvt.value);
            });
            $("#s3").on("slide", function(slideEvt) {
            	$("#s3v").text(slideEvt.value);
            });
            $("#s4").on("slide", function(slideEvt) {
            	$("#s4v").text(slideEvt.value);
            });
            $("#s5").on("slide", function(slideEvt) {
            	$("#s5v").text(slideEvt.value);
            });
            $("#s6").on("slide", function(slideEvt) {
            	$("#s6v").text(slideEvt.value);
            });
            $("#s7").on("slide", function(slideEvt) {
            	$("#s7v").text(slideEvt.value);
            });
            $("#s8").on("slide", function(slideEvt) {
            	$("#s8v").text(slideEvt.value);
            });
            $("#s9").on("slide", function(slideEvt) {
            	$("#s9v").text(slideEvt.value);
            });
            $("#s10").on("slide", function(slideEvt) {
            	$("#s10v").text(slideEvt.value);
            });
            $("#s11").on("slide", function(slideEvt) {
            	$("#s11v").text(slideEvt.value);
            });
            $("#s12").on("slide", function(slideEvt) {
            	$("#s12v").text(slideEvt.value);
            });
            $("#s13").on("slide", function(slideEvt) {
            	$("#s13v").text(slideEvt.value);
            });
            $("#s14").on("slide", function(slideEvt) {
            	$("#s14v").text(slideEvt.value);
            });
            $("#s15").on("slide", function(slideEvt) {
            	$("#s15v").text(slideEvt.value);
            });
            $("#s16").on("slide", function(slideEvt) {
            	$("#s16v").text(slideEvt.value);
            });
            
            var s1 = $('#s1').slider().data('slider');
            var s2 = $('#s2').slider().data('slider');
            var s3 = $('#s3').slider().data('slider');
            var s4 = $('#s4').slider().data('slider');
            var s5 = $('#s5').slider().data('slider');
            var s6 = $('#s6').slider().data('slider');
            var s7 = $('#s7').slider().data('slider');
            var s8 = $('#s8').slider().data('slider');
            var s9 = $('#s9').slider().data('slider');
            var s10 = $('#s10').slider().data('slider');
            var s11 = $('#s11').slider().data('slider');
            var s12 = $('#s12').slider().data('slider');
            var s13 = $('#s13').slider().data('slider');
            var s14 = $('#s14').slider().data('slider');
            var s15 = $('#s15').slider().data('slider');
            var s16 = $('#s16').slider().data('slider');
        }
    });
    
    
}); 
function logout()
		{
// 			alert("登录成功！");
            $.ajax({
                url: "rlogout",
                type: 'GET',
                dataType: 'json',
                error: function(xhr) { alert( xhr.responseText ); },
                success: function(data) {
                    if (data['data'] == "ok"){
                        // alert("登录成功！");
                        window.location.href="./login";
                    }
                    else{
                        alert("未成功退出，请重试！");
                    }
                }
            });	
		}