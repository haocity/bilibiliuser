function subCheck() {
        if (event.keyCode == 13) {
          document.all("tijiao").click();
        }
      }

      function getuserinfo() {
        user = document.getElementById('getuser').value;
        $.ajax({
          url: "json.php?q=http://api.bilibili.cn/userinfo?user=" + user,
          dataType: "json",
          async: true,
          success: function(result) {
            console.log(result);
            console.log(result.mid);
			if (result.code=="-500")
			{
			$(".eero").html("</br>用户不存在");
			$(".content-out").css("display", "none");
			}
			else{
			$(".eero").html("");
            var space = "http://space.bilibili.com/" + result.mid + "/";
            $("#space").html("<a href='"+space+"'>"+space+"</a>");
			if (result.sex=="")
			{
			$("#sex").html("未知");
			}
			else{
			$("#sex").html(result.sex);
			}
            $("#name").html(result.name);
            
            $("#birthday").html(result.birthday);
	
			if (result.sign=="")
			{
			$("#sign").html("我很懒 真的");
			}
            else{
			$("#sign").html(result.sign);
			}
            $("#face").css("background-image", "url(" + result.face + ")");
            $(".content-out").css("display", "block");
		  }
          },
          error: function() {
            console.log("Stay simple,Stay naive.")
          }
        });
      }
