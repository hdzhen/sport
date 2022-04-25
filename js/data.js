/**
 * 导航数据
 * 依赖注入思想
 */
var data = {
	all : {
		gmail: {
			"name":"Gmail",
			"img": "img/gmail.png",
			"addr": "https://mail.google.com"
		},
		outlook: {
			"name":"MSmail",
			"img": "img/outlook.png",
			"addr": "https://outlook.live.com"
		},
		google: {
			"name":"谷歌",
			"img": "img/google.png",
			"ico": "img/google.ico",
			"slider": "img/google-slider.png",
			"addr": "https://www.google.com"
		},
		glscholar: {
			"name":"谷歌学术",
			"img": "img/glscholar.png",
			"ico": "img/glscholar.ico",
			"slider": "img/glscholar-slider.png",
			"addr": "https://scholar.google.com/"
		},
		baiduyu: {
			"name":"百度云",
			"img": "img/baiduyun.png",
			"ico": "img/baiduyun.ico",
			"slider": "img/baiduyun-slider.png",
			"addr": "http://pan.656463.com/"
		},
		github: {
			"name":"Github",
			"img": "img/github.png",
			"ico": "img/github.ico",
			"slider": "img/github-slider.png",
			"addr": "https://github.com/"
		},
		tomcat: {
			"name":"Tomcat",
			"img": "img/tomcat.png",
			"ico": "img/tomcat.ico",
			"slider": "img/tomcat-slider.png",
			"addr": "http://tomcat.apache.org/"
		},
		oschina: {
			"name":"开源中国",
			"img": "img/oschina.png",
			"ico": "img/oschina.ico",
			"slider": "img/oschina-slider.png",
			"addr": "https://www.oschina.net"
		},
		fazero: {
			"name":"Fazero",
			"img": "img/fazero.png",
			"ico": "img/fazero.ico",
			"slider": "img/fazero-slider.png",
			"addr": "https://fazero.me"
		},
		zhihu: {
			"name":"知乎",
			"img": "img/zhihu.png",
			"ico": "img/zhihu.ico",
			"slider": "img/zhihu-slider.png",
			"addr": "https://www.zhihu.com"
		},
		maven: {
			"name":"Maven",
			"img": "img/maven.png",
			"ico": "img/mavem.ico",
			"slider": "img/maven-slider.png",
			"addr": "http://search.maven.org/"
		},
		huaban: {
			"name":"花瓣",
			"img": "img/huaban.png",
			"ico": "img/huaban.ico",
			"slider": "img/huaban-slider.png",
			"addr": "http://huaban.com/"
		},
		zaobao: {
			"name":"联合早报",
			"img": "img/zaobao.png",
			"ico": "img/zaobao.ico",
			"slider": "img/zaobao-slider.png",
			"addr": "http://www.zaobao.com"
		},
		weather: {
			"name":"中国天气",
			"img": "img/weather.png",
			"ico": "img/weather.ico",
			"slider": "img/weather-slider.png",
			"addr": "http://www.weather.com.cn/satellite/"
		},
		jd: {
			"name":"京东",
			"img": "img/jd.png",
			"ico": "img/jd.ico",
			"slider": "img/jd-slider.png",
			"addr": "https://www.jd.com"
		},
		taobao: {
			"name":"淘宝",
			"img": "img/taobao.png",
			"ico": "img/taobao.ico",
			"slider": "img/taobao-slider.png",
			"addr": "https://www.taobao.com"
		},
		amazon: {
			"name":"亚马逊",
			"img": "img/amazon.png",
			"ico": "img/amazon.ico",
			"slider": "img/amazon-slider.png",
			"addr": "https://www.amazon.cn"
		},
		twitter: {
			"name":"twitter",
			"img": "img/twitter.png",
			"ico": "img/twitter.ico",
			"slider": "img/twitter-slider.png",
			"addr": "https://www.twitter.com"
		},
		youtube: {
			"name":"youtube",
			"img": "img/youtube.png",
			"ico": "img/youtube.ico",
			"slider": "img/youtube-slider.png",
			"addr": "https://www.youtube.com/?gl=TW/"
		},
		die: {
			"name":"世界天气",
			"img": "img/die.png",
			"ico": "img/die.ico",
			"slider": "img/die-slider.png",
			"addr": "https://www.die.net/earth/"
		},
		bili: {
			"name":"bilibili",
			"img": "img/bili.png",
			"ico": "img/bili.ico",
			"slider": "img/bili-slider.png",
			"addr": "https://www.bilibili.com/"
		},
		sport: {
			"name":"sport",
			"img": "img/sports.png",
			"ico": "img/sports.ico",
			"addr": "file:///D:/Apps/webhome/sport.html"
		}
	},
	email: ['gmail', 'outlook'],
	carousel: ['google', 'zhihu', 'tomcat', 'bili', 'maven', 'oschina', 'sport', 'huaban', 'github'],
	slider: ['bili', 'zaobao', 'weather', 'jd', 'taobao', 'amazon'],
	tabs: [
		{
			title: "技术",
			content: ['github', 'huaban', 'tomcat', 'oschina', 'fazero', 'zhihu', 'maven']
		},
		{
			title: "搜索",
			content: ['google', 'glscholar', 'baiduyu']
		},
		{
			title: "生活",
			content: ['zaobao', 'weather', 'jd', 'taobao', 'amazon', 
				'bili', 'youtube', 'die']
		}
	]
}