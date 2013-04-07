jquery-mask-highlight
=====================

基于jquery的遮罩高亮插件


demo:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>mask-highlight</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="public/css/mask-highlight.css" />
    <script type="text/javascript" src="public/js/jquery.js"></script>
    <script type="text/javascript" src="public/js/jquery.mask-highlight.js"></script>
    <title>mask-highlight</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        #Wrapper{
            width: 960px;
            margin: 20px auto;
            background: red;
            overflow: hidden;
            padding: 10px;
        }
        #left{
            float: left;
            width: 300px;
            background: #fafafa;
        }
        #right{
            margin-left: 300px;
            padding: 10px;
        }
        #left #content1{
            width: 150px;
            margin: 10px;
            padding: 10px;
            float: left;
            background: #fff;
            color: #000;
        }
        #left #content2{
            display: inline;
        }
        #tipWrapper{
            padding: 10px;
            background: #000;
            color: #fff;
        }
    </style>
</head>
<body>
<div id="Wrapper">
    <div id="left">
        <div id="content1">
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
        </div>
        <div id="content2">
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
        </div>
    </div>
    <div id="right">
        <div id="content3">
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
            <p>进入邪王墓的唯一钥匙就是记载着上乘武功的秘</p>
            <p>邪王石之轩武功盖世，但他害怕自己的一身邪恶武功将来为祸人间</p>
            <p>于是将自己和封存住巨大功力的邪帝舍利一起冰封在邪王墓里面</p>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function(){
        //调用demo1:
        var maskObj = new NAVY.MaskHighLight('#content1');
        $('#content1').click(function(){
            maskObj.destroy();
        });
        //调用demo2：
//        var maskObj = new NAVY.MaskHighLight('#content1',{clickMaskRemove:true,tipHtml:'<div id="tipWrapper">这里都是我们的好朋友啊</div>',tipLeft:10,tipTop:10});
//        $('#content1').click(function(){
//            maskObj.destroy();
//        });
//        $('#tipWrapper').click(function(){
//            maskObj.destroy();
//        })
    })
</script>
</body>
</html>
