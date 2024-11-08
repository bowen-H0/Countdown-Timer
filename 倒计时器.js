let countdown;  // 声明全局倒计时变量
let TimerNUM = 0;  // 记录当前倒计时状态

function Start() {
    let time = parseInt(document.getElementById('input').value);
    
    // 验证输入是否有效
    if (isNaN(time) || time <= 0) {
        document.getElementById('input').value = "";
        return;
    }

    // 如果已经有倒计时在运行，则清除之前的倒计时
    if (countdown) {
        clearInterval(countdown);
        TimerNUM = 0;  // 重置状态
    }

    TimerNUM = 1;  // 标记新倒计时启动
    document.getElementById('timerDisplay').innerText = "Time left: "+time+"s";

    countdown = setInterval(function () {
        if (TimerNUM > 1) {
            return;
        }
        
        time--;
        document.getElementById('timerDisplay').innerText = "Time left: "+time+"s";

        // 当倒计时结束时，清除定时器并显示提示
        if (time <= 0) {
            clearInterval(countdown);
            document.getElementById('timerDisplay').innerText = "Time's up!";
            document.getElementById('bellSound').play();
            TimerNUM = 0;  // 重置状态
        }
    }, 1000); // 每1000毫秒更新一次（1秒）
}