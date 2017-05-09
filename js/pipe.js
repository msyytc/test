/**
 * @constructor 绘画管道
 * @param  ctx 上下文
 * @param  pipeDownImg 上边的管道
 * @param pipeUpImg  下边的管道
 * @param x 第一个管道的水平位置
 * @param y 第一个向下管道口的垂直坐标的位置
 * @param spead  移动的速度
 * @param speadA 移动的加速度
 * @param pipeW 管道左右之间的距离
 * @param pipeH 管道上下之间的距离
 * @param index 用来记录new来的第几列的管道
 * @param total 用来记录需要new出来几个管子才可以实现无缝滚动
 */





var Pipe = (function (window) {
    function Pipe(option) {
        this.ctx = option.ctx;
        this.pipeDownImg = option.pipeDownImg;
        this.pipeUpImg = option.pipeUpImg;
        this.x = option.x || 200;
        // this.y=option.y;
        this.spead = option.spead || 4;
        this.speadA = option.speadA || 0.01;
        this.pipeW = option.pipeW || 200;
        this.pipeH = option.pipeH || 100;


        this.y = Math.random() * 250 + 50;
        //定义一个total来记录需要多少个管道,才可以实现无缝滚动
        this.total =option.total;
    }
    Pipe.prototype = {
        init: function () {
            this.draw();
            this.updata();
        },
        draw: function () {
            //每次绘制都要this.index++
            // this.index++;
            //绘制口向下的管道
            this.ctx.drawImage(this.pipeDownImg, this.x, this.y - this.pipeDownImg.height);
            //绘制口向上的管道
            this.ctx.drawImage(this.pipeUpImg, this.x, this.y + this.pipeH);

            //先保存
            this.ctx.save();
            //每次绘制路径的时候首先清除路径
            this.ctx.beginPath();
            //绘制管子的路径
            this.ctx.rect(this.x, this.y - this.pipeDownImg.height,this.pipeDownImg.width,this.pipeDownImg.height);
            this.ctx.rect(this.x, this.y + this.pipeH,this.pipeUpImg.width,this.pipeUpImg.height);
            
            //回滚
            this.ctx.restore();
            //实验看看路径画上去么没有
            // this.ctx.lineWidth=20;
            // this.ctx.strokeStyle='red';
            // this.ctx.stroke()

        },
        updata: function () {
            this.x-=this.spead;
            this.spead+=this.speadA;
            if(this.x<-this.pipeDownImg.width){
                this.x+=this.pipeDownImg.width + this.total * 200;
                // console.log(this.total);
            }

        }
    }


    return Pipe
})(window)