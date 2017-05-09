<template>
  <div class="paddingDiv">
		<ul class="list">
			<li v-for='list in projectList' ><a  v-bind:href="list.url" target="_blank" >{{list.name}}</a></li>
		</ul>
  </div>
</template>

<script>
  const projectConfigs = require("./../../../config/projectsConfig")
  console.log(projectConfigs)
  export default {
  	data() {
  	  return {
  	  	projectList: [],
  	  }
  	},

		created(){
			projectConfigs.projects.forEach( (obj,index) => {
				this.projectList.push({
					url:'/'+obj.name+'.html',
					name:obj.name_cn
				})
			})
		}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .paddingDiv{
    	padding:1rem 1rem;
    	.list{
             list-style: none;
             padding:0;
             margin:0;
             line-height:2rem;
             a{
             	text-decoration: none;
             	color:#333;
             }
    	}
    }
    
</style>
