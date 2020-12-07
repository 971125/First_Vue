<template>
  <div class="about">
    <div class='container-fluid'>
			<daohang></daohang>
			<div class="row">
				<div class="col-2" style="border: rgba(0,0,0,0.5) solid 1px; height: 600px;padding:0;">
				<list></list>
				</div>
				<div class="col-10">
					<router-view></router-view>
				</div>
			</div>
			
		</div>
		
  </div>
</template>
<script>
	import axios from 'axios'
	import daohang from '../components/daohang.vue'
	import list from '../components/list.vue'
	export default {
		name:'About',
		components:{
			daohang,
			list
		},
		methods:{
			
		},
		beforeRouteEnter: (to,from,next) => {
			if(!from.meta.requireAuth){
				console.log(from.meta.requireAuth)
				alert('先登录')
				next('/')
			}else{
				next()
			}
			
		}
	}
</script>
<style>
	
</style>
