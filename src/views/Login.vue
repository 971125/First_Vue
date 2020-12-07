<template>
	<div>
		<div id="LoginForm">
		<form >
			<div class="WelcomeIn">
				WELCOME
			</div>
		  <div class="form-group">
				<div id="usernameLabel" class="form-group">
		   <label for="username" class="col-sm-2 control-label">UserName:</label><label :style="show">不能为空</label><label style="color: rgba(0,0,0,0.5);margin-left:5px ;">默认用户名:root</label>
				<input id="username" type="text" class="form-control" placeholder="Please enter your username"> </div>
				<div id="passwordLabel" class="form-group">
				<label for="password" class="col-sm-2 control-label">PassWord:</label><label :style="show">不能为空</label><label style="color: rgba(0,0,0,0.5);">默认密码:123456</label>
				<input id="password" type="password" class="form-control" placeholder="Please enter your password"></div>
		  </div>
		  <button type="button" style="width: 30%;margin-bottom: 10px;margin-left: 40px;" @click="Login()" class="btn btn-primary">Log in</button>
			 <button type="button" style="width: 30%;margin-bottom: 10px;margin-left: 150px;" class="btn btn-warning">Register</button>
		</form>
		</div>
	</div>
</template>

<script>
	import {Loginapi} from '../api/api.js'
	export default {
	  name: 'Login',
		data(){
			return(
			{
				username:'',
				password:'',
				show:{
					display:'none',
					color:'red'
				}	
			}
			)		
		},
	  components: {
	  },
		mounted(){
			Loginapi()
			.then(res => {
				this.username=res.data.login.admin;
				this.password=res.data.login.password;
				setTimeout(alert("服务器连接成功。。"),4000)
			}).catch(err => {
				alert(err.message)
			})
		},
		methods:{
			Login(){
				let nameinput=document.getElementById('username');
				let passinput=document.getElementById('password');
				const username1=nameinput.value;
				const password1=passinput.value;
				if(this.username==username1&&this.password==password1){
					this.show.display='none'
					alert('Loading。。。')
					this.$route.meta.requireAuth=true;
					this.$router.replace({name:'About'})
					nameinput.value="";
					passinput.value=""
				}else if(username1==''||password1==''){
					this.show.display='inline'
				}
				else{
					nameinput.value="";
					passinput.value="";
					this.show.display='none'
					alert("密码错误")
				}
			}
		},
}
</script>
 
<style>
	@import url("../common/css/login.css");
</style>
