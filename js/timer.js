/**
 * @constructor 文字计时器
 * @param ctx  上下文
 * @param x y  绘制的位置
 * 
 */

(function(window){
    function Duration(option){
        this.ctx = option.ctx;
        this.x=option.x;
        this.y=option.y;

        //定义creat_time获取创建对象的时间
        this.creat_time=Date.now();

        //定义一个时间.来记录持续时间
        this.duration =0;
        //定义时分秒,来储存数据
        this.hours=0;
        this.minutes=0;
        this.seconds=0;
    }
    Duration.prototype={
        init:function(){
            this.draw()
            this.updata()
        },
        draw:function(){
            //保存上下文
            this.ctx.save();
            //给文字添加padding
            this.ctx.translate(-10,10)
            this.ctx.font='700 26px microsoft yahei';
            this.ctx.textAlign='right';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('你已经持续的'+this.hours+'时'+this.minutes+'分'+this.seconds+'秒',this.x,this.y)
            //回滚
            this.ctx.restore();
        },
        updata:function(){
            //持续获取当前时间
            var now_time =Date.now()
            this.duration = now_time-this.creat_time;
            //获取时分秒
            this.hours = parseInt(this.duration/(1000*60*60));
            this.minutes = parseInt(this.duration%(1000*60*60)/(1000*60));
            this.seconds=(this.duration%(1000*60)/1000).toFixed(2)
        }
    }

    window.Duration =Duration
})(window)