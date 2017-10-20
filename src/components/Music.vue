<template>
<div>
	<div class="all">
		<h2>推荐歌单</h2>
		<div class="tuijiangedan">
			<ul>
				<li v-for="item in list1">
					<img :src="item.img"/>
					<p>{{item.name}}</p>
					<span>Ω{{item.count}}</span>
				</li>
			</ul>
		</div>
		<h2>最新音乐</h2>
		<div class="newmusic">
			<ul class="newmusiclist">
				<li v-for="item in list2">
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
</div>
</template>

<script>
    import axios from 'axios';
	export default {
		name: 'music',
		data: function(){
			return {
				list1:[],
				list2:[],
				flag:true
			}
		},
		mounted: function(){
				var that = this;
				axios.get('/static/gedan.json', {
			  })
			  .then(function (response) {
			    console.log(response.data);
			    that.list1 = response.data;
			    console.log(that.list1);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			  axios.get('/static/xinge.json', {
			  })
			  .then(function (response) {
			    console.log(response.data);
			    that.list2 = response.data;
			    console.log(that.list2);
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
	top:110px;
}
h2{
    position: relative;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 17px;
    line-height: 17px;
    border-left:3px solid red;
    font-weight:lighter;	
}
.tuijiangedan{
	position:relative;
	padding-bottom:24px;
	width:100%;
}
.tuijiangedan ul{
	display:flex;
	justify-content:center;
	list-style:none;
	flex-wrap:wrap;
}
.tuijiangedan ul li{
	flex:1;
	width:33.3%;
	height:170px;
	position:relative;

}
.tuijiangedan ul li img{
	height:123px;
	width:123px;
}
.tuijiangedan ul li p{
	-webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    line-height: 1.2;
    font-size: 13px;
}
.tuijiangedan ul li span{
	position: absolute;
    right: 5px;
    top: 2px;
    z-index: 3;
    padding-left: 13px;
    color: #fff;
    font-size: 12px;
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 11px 10px;
    text-shadow: 1px 0 0 rgba(0,0,0,.15);
}
.newmusic{
	width:100%;
	position:relative;
}
.newmusic .newmusiclist{
	list-style:none;
	width:100%;
}
.newmusic .newmusiclist li{
    margin-left:10px;
	width:100%;
	height:48px;
	color:#333;
	border-bottom:1px solid #ccc;
	box-sizing:border-box;
	position:relative;
}
.newmusic .newmusiclist li .name{
	font-size:17px;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.newmusic .newmusiclist li .arthor{
	font-size:12px;
	color:#888;
}
.newmusic .newmusiclist li i{
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