<template>
	<div class="row" style="background-color: rgba(0,0,255,0.5);;border-radius: 5px;">
				<div class="col-10">
					<ul id="daohanglist">
						<li id="daohangitem">首页</li>
						<li id="daohangitem">公司团建</li>
						<li id="daohangitem">领导团队</li>
						<li id="daohangitem">项目</li>
					</ul>
				</div>
					<div class="col"><button type="button" style="width: 100px; height: 100px; border-radius: 50%;" class="btn btn-primary btn-lg">
	<img src="../assets/Count.svg"/>Count</button>
					</div>
	</div>
</template>

<script>
	
	export default {
		name:'daohang',
		data(){
			return ({})
		},
		components:{
			
		}
	}
</script>

<style>
@import url("../common/css/daohang.css");
</style>
