/**
 * 基于jquery1.7+的遮罩高亮插件
 * author:navy
 * email:navyxie2010@gmail.com
 * qq:951178609
 * version:1.0 beta
 * date:2013/04/07
 */
var NAVY = NAVY || {};
NAVY.MaskHighLight = function(target,options){
    this.target = $(target);
    var defaultOptions = {
        width:this.target.outerWidth(),//高亮目标的宽度
        height:this.target.outerHeight(),//高亮目标的高度
        clickMaskRemove:false,//点击遮罩是否移除遮罩层
        tipHtml:'',//是否有增加遮罩提示的内容
        tipLeft:0,//在tipHtml存在的情况下，提示内容距离目标右侧的偏移值
        tipTop:0,//在tipHtml存在的情况下，提示内容距离目标顶部的偏移值
        clickMaskCbf:function(){}//点击遮罩层的回掉函数
    };
    $.extend(defaultOptions,options);
    this.options = defaultOptions;
    this.targetObjOffset = {
        left:this.target.offset().left,
        top:this.target.offset().top
    };
    this.bodyObj = $('body');
    this.init();
};
NAVY.MaskHighLight.prototype = {
    /**
     * 初始化
     * @return {*}
     */
    init:function(){
        this.makeMask();
        this.initEvent();
        return this;
    },
    /**
     * 初始化事件
     * @return {*}
     */
    initEvent:function(){
        var _this = this;
        var options = _this.options;
        _this.maskObj.click(function(){
            options.clickMaskRemove && _this.destroy();//若存在点击遮罩回掉，则调用
            options.clickMaskCbf();//移除遮罩层
        });
        return this;
    },
    /**
     * 生成遮罩层的函数
     * @return {*}
     */
    makeMask:function(){
        var _this = this;
        var options = _this.options;
        var maskArr = [];//遮罩层的html数组
        var documentObj = $(document);
        var windowObj = $(window);
        var maskHeight;//遮罩层的高度
        var documentObjHeight = maskHeight = documentObj.height();
        var screenHeight = windowObj.height();//屏幕高度
        var screenWidth = windowObj.width();//屏幕宽度
        if(screenHeight>=documentObjHeight){
            maskHeight = screenHeight;
        }
        //拼接四块遮罩层内容
        maskArr.push('<div class="maskHighLight maskHighContainer" style="left:0;top:0;width: '+_this.targetObjOffset.left+'px;height:'+maskHeight+'px"></div>');
        maskArr.push('<div class="maskHighLight maskHighContainer" style="left:'+_this.targetObjOffset.left+'px;top:0;width:'+options.width+'px;height:'+_this.targetObjOffset.top+'px"></div>');
        maskArr.push('<div class="maskHighLight maskHighContainer" style="right:0;top:0;width: '+(screenWidth-options.width-_this.targetObjOffset.left)+'px;height:'+maskHeight+'px"></div>');
        maskArr.push('<div class="maskHighLight maskHighContainer" style="left:'+_this.targetObjOffset.left+'px;top:'+(_this.targetObjOffset.top+options.height)+'px;width:'+options.width+'px;height:'+(maskHeight-_this.targetObjOffset.top-options.height)+'px"></div>');
        //若遮罩提示存在，则加到页面
        if(options.tipHtml !== ''){
            maskArr.push('<div class="maskAbsolute maskHighContainer" style="left: '+(_this.targetObjOffset.left+options.width+options.tipLeft)+'px;top:'+(_this.targetObjOffset.top+options.tipTop)+'px">'+options.tipHtml+'</div>');
        }
        this.bodyObj.append(maskArr.join(''));
        this.maskObj = this.bodyObj.find('.maskHighLight');
        return this;
    },
    /**
     * 移除遮罩层
     * @return {*}
     */
    destroy:function(){
        this.bodyObj.find('.maskHighContainer').unbind().remove();
        return this;
    }
};