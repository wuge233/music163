<template>
	<div class="all">
		<div class="regebang">
			<div class="text">
				<div class="icon">
				</div>
				<p>更新日期:10月12日</p>
			</div>
		</div>
		<div class="regesong">
			<ul class="regesonglist">
				<li v-for="item in list">
				    <div :class="{paiming:flag}">{{item.top}}</div>
					<p :class="{name:flag}">{{item.name}}</p>
					<div :class="{arthor:flag}">
						<span>{{item.arthor}}-</span>
						<span>{{item.zhuanji}}</span>
					</div>
					<i></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    import axios from 'axios';
	export default {
		name: 'rege',
		data: function(){
			return{
				list:[],
				flag:true
			}
		},
		mounted: function(){
				var that = this;
				axios.get('/static/rege.json', {
			  })
			  .then(function (response) {
			    console.log(response.data);
			    that.list = response.data;
			    console.log(that.list);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	    }
	}
	
</script>

<style>
.all{
	position:relative;
	top:106px;
}
.regebang{
	background:url("http://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee") no-repeat;
	width:100%;
	overflow:hidden;
	height:146px;
}
.regebang .text{
	box-sizing:border-box;
	padding-left:20px;
	width:100%;
	height:146px;
	position:absolute;
}
.regebang .text .icon{
	width:142px;
	height:67px;
	position:absolute;
	top:20px;
	left:20px;
	background:url("http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880") no-repeat -24px -30px;
	background-size:166px 97px;
}
.regebang .text p{
	color:white;
	position:absolute;
	top:95px;
	left:20px;
	font-size:12px;
}
.regesong{
    position:relative;
    width:100%;	
}
.regesong .regesonglist{
	list-style:none;
	width:100%;
}
.regesong .regesonglist li{
    margin-left:10px;
    padding-left:35px;
	width:100%;
	height:48px;
	color:#333;
	border-bottom:1px solid #ccc;
	box-sizing:border-box;
	position:relative;
}
.regesong .regesonglist li .paiming{
	width: 28px;
	font-size:17px;
	position:absolute;
	top:11px;
	left:4px;
}
.regesong .regesonglist li .name{
	font-size:17px;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.regesong .regesonglist li .arthor{
	font-size:12px;
	color:#888;
}
.regesong .regesonglist li i{
	display: block;
    width: 22px;
    height: 22px;
    background:url("http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880") no-repeat -24px 0;
    background-size: 166px 97px;
    position:absolute;
    top:10px;
    right:20px;
}
</style>



















