<template>
	<div>
		<ul id="listul">
			<li><router-link to="/about/List">消息列表<img style="margin-left: 25px;" src="../assets/List.svg"/></router-link></li>
			<li><router-link to="/about/gk">公司公告<img style="margin-left: 25px;" src="../assets/gongkao.svg"/></router-link></li>
			<li><router-link to="/about/msg">动态日志<img style="margin-left: 25px;" src="../assets/rizhi.svg"/></router-link></li>
			<li><router-link to="/about/Per">员工信息<img style="margin-left: 25px;" src="../assets/Proson.svg"/></router-link></li>
			<li>更多功能<img style="margin-left: 25px;" src="../assets/more.svg"/></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'List',
		data(){
			return({})
		}
	}
</script>

<style>
	@import url("../common/css/list.css");
</style>
