<template>
  <div class="home">
   <div>
		 <ul id="objitems">
			 <li id="objitem" v-for="item in obj">
				 <h3>{{item.data}}</h3> <div id="read">阅读</div> 
				 <span>{{item.info}}</span>
			 </li>
		 </ul>
	 </div>
  </div>
</template>

<script>
	import {Homeapi} from '../api/api.js'
export default {
  name: 'Home',
	data(){
		return{
			obj:{}
		}
	},
  components: {
    
  },
	mounted(){
		Homeapi()
		.then(res => {
		this.obj=res.data.List.Info;
		})
	}
}

</script>
<style>
	@import url("../common/css/home.css");
</style>