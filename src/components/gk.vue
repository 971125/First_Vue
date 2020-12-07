<template>
	<div>
		<ul id="objitems">
			<li id="objitem" v-for="item in contents">
				<h2>公告:{{item.id}}</h2>
				<div id="read">阅读</div>
				{{item.content}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {gkapi} from'../api/api.js'
	export default {
		name:'gk',
		data(){
			return({
				contents:{}
			})
		},
		mounted(){
			gkapi()
			.then(res => {
				this.contents = res.data.gk.contents
			})
		}
	}
</script>

<style>
	@import url("../common/css/home.css");
</style>
