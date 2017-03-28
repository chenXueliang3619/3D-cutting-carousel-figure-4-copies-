$(function () {
            var flog = true;
            var num = 0;
            $(".left").click(function () {
                if (flog) {
                    flog = false;
                    num++;
                    $("li").css({transform: "rotateX(" + num * 90 + "deg)"});
                }
            });
            $(".right").click(function () {

                if (flog) {
                    flog = false;
                    num--;
                    $("li").css({transform: "rotateX(" + num * 90 + "deg)"});
                }
            });
            $("li").last().on("transitionend", function () {
                flog = true;
            });
        });
