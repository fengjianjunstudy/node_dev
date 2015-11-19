var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	var  slides=[{"imgUrl":"/images/1.jpg","href":"#1","title":"First Thumbnail label","dscrpt":"dscrpt1"},{"imgUrl":"/images/2.jpg","href":"#2","title":"Second Thumbnail label","dscrpt":"dscrpt2"},{"imgUrl":"/images/3.jpg","href":"#3","title":"Third Thumbnail label","dscrpt":"dscrpt3"}]
  	var xilies=[{id:"M8",title:"M8系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."},{id:"M6",title:"M6系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."},{id:"M5",title:"M5系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."},{id:"M3",title:"M3系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."},{id:"M2",title:"M2系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."},{id:"S5",title:"S5系列",desc:"3月25日，海马汽车在国家跳水中心水立方召开新闻发布会，正式发布以“用户服务”为核心、以移动互联新生态构建为目标的moofun移动互联人车生态系统。海马汽车集团执行总裁孙忠春表示..."}];
  res.render('index', { title: '平遥通远汽贸',slides:slides,xilies:xilies});
});

module.exports = router;
