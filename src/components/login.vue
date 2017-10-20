<template>
	<div class="all">
		用户名:<input type="text" placeholder="请输入用户名" class="user" v-model="username"><br>
		密码:<input type="password" placeholder="请输入密码" class="pin" v-model="password"><br>
		<button @click="reg()">登录</button><br><br>
		<button><router-link to="/register">注册</router-link></button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'login',
		data: function(){
		     return{
		     	username:"",
		     	password:""
		     }
		},
		methods:{
			reg:function(){
				var that = this;
				axios.post("/api/login","username="+this.username+"&password="+this.password)
				.then(function(res){
					if(res.data){
						console.log("登录成功");
						that.$router.push('/music');
					}else{
						alert("登录失败");
					}
				}).catch(function(error){
				console.log("数据丢了");
				})
			}

		}
	}
</script>

<style>
.all{
	position:relative;
	top:106px;
}
</style>