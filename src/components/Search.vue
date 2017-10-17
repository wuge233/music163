<template>
    <div>
		<tou></tou>
		<form>
			<div>
			    <i></i>
				<input v-model="message" class="search" type="text" placeholder="搜索歌曲、歌手、专辑">
				<p v-if="message != null && message != ''">搜索“{{message}}”</p>
			</div>
		</form>
		<div class="tuijian">
			<p>热门搜索</p>
			<button @click="getData()">测试</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'search',
		data: function(){
			return {
				message:null
			}
		},
		methods: {

			getData: function(){
				axios.post('/weapi/search/hot?csrf_token=ae10a5baeb093ec7cbbb5902b6d0694a', {
			    firstName: '',
			    lastName: ''
			  })
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			} 
		}
	}
</script>

<style>
form{
	padding:15px 10px;
	position:relative;
	top:110px;
}
form div{
	height:30px;
	width:100%;
	padding:0 30px;
	border-radius:30px;
	background:#ececec;
	box-sizing:border-box;
	position:relative;
}
form div i{
	background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
	width:13px;
	height:13px;
	position:absolute;
	left:0;
	top:9px;
	margin:0 8px;

}
.search{
	height:30px;
	width:100%;
	line-height:18px;
	background:#ececec;
	font-size:14px;
	color:#333;
	border:0;
	border-radius:0;
	outline:none;
}
.tuijian{
	position:relative;
	top:150px;
	color:#666;
	font-size:14px;
}
.tuijian p{
	padding-left:10px;
}

</style>
