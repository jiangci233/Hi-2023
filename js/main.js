var OriginTitile = document.title;
      var titleTime;
      document.addEventListener('visibilitychange',
      function() {
        if (document.hidden) {
          document.title = '(つェ⊂)啊~ 快回来嘛 ！ ';
          clearTimeout(titleTime);
        } else {
          document.title = '(*´∇｀*) 好欸~ 欢迎回来w ！ ';
          titleTime = setTimeout(function() {
            document.title = OriginTitile;
          },
          2000);
        }
      });