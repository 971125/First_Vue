<template>
	<div>
		<div id="tableTop"><h2>员工信息表</h2></div>
		<table border="1px " style="margin: 0 auto;">
			
		<tr>
			<td>
				<h3>编号</h3>
			</td>
			<td>
				<h3>姓名</h3>
			</td>
			<td>
				<h3>性别</h3>
			</td>
			<td>
				<h3>年龄</h3>
			</td>
			<td>
				<h3>工作</h3>
			</td>
		</tr>
		<tr v-for="person in persons" height="50px">
			<td>{{person.id}}</td>
			<td>{{person.name}}</td>
			<td>{{person.sex}}</td>
			<td>{{person.age}}</td>
			<td>{{person.job+'工程师'}}</td>
			
		</tr>
		</table>
	</div>
</template>

<script>
	import {Per} from '../api/api.js'
	export default{
		name:'per',
		data(){
			return{
				persons:{},
			}
		},
		mounted(){
				Per().then(res => {
				this.persons=res.data.artticles.userInfo
				
		})
		}
		
	}
</script>

<style>
	#tableTop{
		text-align: center;
	}
	td{
		width: 200px;
		text-align: center;
	}
</style>
