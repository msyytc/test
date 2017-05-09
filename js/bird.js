/**
 * @constructor 小鸟对象
 * @param ctx  上下文
 * @param img  小鸟的图片
 * @param x,y  小鸟的初始位置
 * @param spead  小鸟下降的速度
 * @param speadA  小鸟下降的加速度
 * @param 
 * 
 */
//定义一个bird来实现单例模式;
var bird = null;

(function (window) {

    function Bird(option) {
        if (bird) {
            return bird;
        } else {
            bird = this;
        }

        this.img = option.img;
        this.ctx = option.ctx;
        this.x = option.x || 100;
        this.y = option.y || 100;
        this.spead = option.spead || 10;
        this.speadA = option.speadA || 0.6;

        //在函数实例化的时候就直接运行点击事件
        this.onClick();
        //初始化一个计数器,来变化小鸟的图片, 来使小鸟动起来
        this.index = 0
        //设置小鸟上扬,下俯的最大角度
        this.upAngle = Math.PI / 2;
        this.downAngle = Math.PI / 3;
    }
    Bird.prototype = {
        init: function () {
            this.draw();
            this.updata();
        },
        //绘制小鸟
        draw: function () {

            //判断小鸟是上升过程还是下降过程,来改变小鸟的头部方向
            //在判断之前,先保存一下画布
            this.ctx.save();
            //平移画布
            this.ctx.translate(this.x + this.img.width / 6, this.y + this.img.height / 2)
            //旋转画布, 用spead来控制角度的正负
            var angle = this.spead * Math.PI / 30;
            if (angle < -this.upAngle) {
                angle = -this.upAngle
            } else if (angle > this.downAngle) {
                angle = this.downAngle
            }
            this.ctx.rotate(angle);
            //然后在新的画布上绘制小鸟的图片
            this.ctx.drawImage(this.img,
                this.img.width / 3 * this.index, 0,
                this.img.width / 3, this.img.height, 
                -this.img.width / 6, -this.img.height / 2, this.img.width / 3, this.img.height
            );
            //当绘画完小鸟的时候,在回滚画布
            ctx.restore();
        },
        //更新数据
        updata: function () {
            this.index++;
            this.index %= 3;
            this.y += this.spead;
            this.spead += this.speadA;
        },
        //点击事件
        onClick: function () {
            var _this = this;
            this.ctx.canvas.onclick = function () {
                _this.spead = -6;
            }
        }
    }

    window.Bird = Bird;
})(window)