<template>
<div>
	<header>
      <div class="logo">
        <img src="./img/logo.png" />
        <span>网易云音乐</span>
      </div>
      <div class="login">
        <router-link to="/login">登录/注册</router-link>
    </div>
    </header>
    <div class="tabarea">
      <div class="items">
        <router-link to="/music">推荐音乐</router-link>
      </div>
      <div class="items">
        <router-link to="/rege">热歌榜</router-link>
      </div>
      <div class="items">
        <router-link to="/search">搜索</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
	export default {
		name: 'tou'
	}
</script>

<style>
*{
  padding:0;
  margin:0;
}
header{
  height:64px;
  width:100%;
  background:#d43c33;
  position:fixed;
  z-index:100;
}
.logo{
  float:left;
  margin-left:10px;
  padding:7px 0;
  width:185px;
  height:50px;
}
.logo span{
  color:white;
  text-align:center;
  font-size:30px;
  display:inline-block;
}
.login{
  float:right;
  display:inline-block;
  height:30px;
  line-height:30px;
  border:1px solid white;
  border-radius:10px;
  font-size:16px;
  color:white;
  text-align:center;
  margin-top:17px;
}
.tabarea{
  height:40px;
  width:100%;
  background:#fff;
  position:fixed;
  top:64px;
  display:flex;
  justify-content:center;
  border-bottom:2px solid #ccc;
  z-index:100;
}
.tabarea .items{
  flex:1;
  padding:10px 30px;
}
.tabarea .items a{
  text-align:center;
  text-decoration:none; 
  color:black;
}
</style>
