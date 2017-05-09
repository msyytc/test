/**
 * 图片加载器
 * @param imgObj创建一个对象,来储存创建出来的的图片
 * @param fn 回调函数,等图片全部加载完成,执行
 * @param imgLoadTotal 已经加载过得图片的数量
 * @param allImgNum 传入对象中图片的数量
 * 
 */

function imgLoad(imgSrc, fn) {
    var imgObj = {};
    var imgLoadTotal = 0,
        allImgNum = 0;
    for (var k in imgSrc) {
        imgObj[k] = new Image();
        imgObj[k].src = imgSrc[k];
        allImgNum++;
        imgObj[k].onload = function () {
            if (++imgLoadTotal >= allImgNum) {
                fn(imgObj);
            }
        }
    }
}