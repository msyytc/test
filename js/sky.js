/**
 * 
 * 
 * 
 */
(function (window) {

    function Sky(option) {
        this.ctx = option.ctx,
            this.width = option.width,
            this.height = option.height,
            this.x = option.x || 0,
            this.y = option.y || 0,
            this.img = option.img,
            this.spead = option.spead || 4
            // this.init()
    }
    Sky.prototype = {
        constructor: Sky,

        init:function(){
            // this.draw();
            this.updata();
        },
        draw: function () {
            // console.log(this.width)
            // ctx.canvas.width = this.width;
            // ctx.canvas.height = this.height;
            

            //计算一下每个canvas中需要多少张图片才可以动态的无缝滚动
            var num = Math.ceil(this.width / this.img.width)*2;
            // console.log(num)
            for (var i = 0; i < num; i++) {
                // console.log('11');
                this.ctx.drawImage(this.img, this.x+i*this.img.width, this.y);
            };
        },
        updata: function () {
                if(this.x<=-this.ctx.canvas.width){
                    //当位移的坐标小于一张图片的距离的时候,让这张图片的坐标向反方向位移总数图片减一的宽的距离;
                    // this.x+=this.img.width*Math.ceil(this.width / this.img.width)

                    //当图片走到一个屏幕的宽度的时候,让图片还原到初始位置;
                    this.x=0;
                }
                // console.log(this.ctx.canvas.width, this.ctx.canvas.height)
                //清除画布
                // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                this.x -= this.spead;
                this.draw();
        }
    }


    window.Sky = Sky;
})(window)