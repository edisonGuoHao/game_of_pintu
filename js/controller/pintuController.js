app.controller('pintuController', function ($scope) {
    $scope.list = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 0];

    $scope.counter = 0;

    $scope.num = 0;

    //重置
    $scope.reset=function () {
        $scope.list = [1, 2, 3,
            4, 5, 6,
            7, 8, 0];
    };

    //打乱
    $scope.random = function (difficutePoint) {
        for (var i = 0; i < difficutePoint; i++) {
            var random = 36 + Math.ceil(Math.random() * 4);
            moveBlock(random)
        }
        $scope.counter = 0;
    };

    //确认答案
    $scope.commit = function () {
        var list = $scope.list;
        for (var i = 0; i < 8; i++) {
            if (list[i] != (i + 1)) {
                alert("您还每做完哦！！");
                return;
            }
        }
        alert("bingo!!!");
    };

    //键盘移动拼图
    $scope.move = function (event) {
        moveBlock(event.keyCode);
    };

    //更换皮肤
    $scope.changePic = function () {
        $scope.num = ($scope.num + 1) % 2;
    };


    moveBlock = function (keyCode) {
        $scope.counter++;
        var list = $scope.list;
        var whitebox = list.indexOf(0);
        // alert(keyCode);
        if (keyCode == 38) {
            // 向上
            var change = whitebox + 3;
            if (change < $scope.list.length) {
                list[whitebox] = list[change];
                list[change] = 0;
            }

        } else if (keyCode == 37) {
            //向左
            var change = whitebox + 1;
            if (change < $scope.list.length && whitebox % 3 != 2) {
                list[whitebox] = list[change];
                list[change] = 0;
            }
        } else if (keyCode == 39) {
            //向右
            var change = whitebox - 1;
            if (change >= 0 && whitebox % 3 != 0) {
                list[whitebox] = list[change];
                list[change] = 0;
            }
        } else if (keyCode == 40) {
            //向下
            var change = whitebox - 3;
            if (change >= 0) {
                list[whitebox] = list[change];
                list[change] = 0;
            }
        }
    }
});