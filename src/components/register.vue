<template>
	<div class="all">
		用户名:<input type="text" placeholder="请输入用户名" class="user" v-model="username"><br>
		密码:<input type="password" placeholder="请输入密码" class="pin" v-model="password"><br>
		<button @click="reg()">确定</button><br><br>
		<button><router-link to="/login">登录</router-link></button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'register',
		data: function(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			reg:function(){
				axios.post("/api/register","username="+this.username+"&password="+this.password)
				.then(function(res){
					if(res.data){
						alert("注册成功");
					}else{
						alert("用户名已经存在或不合法");
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