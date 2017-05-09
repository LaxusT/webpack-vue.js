<template>
  <div>
  	<span>{{msg}}</span>
    <input type="text" value="123"/>
  </div>
</template>

<script>
import reqData from "@/models/liting/reqData"

export default {
	data () { 
      return { 
        msg:'测试测试测试测试',
        time:'2017-22-22 11:11:21'
      } 
    },
  	mounted(){
      // this.$castrol.loading.show({
      //     text: '加载中'
      // })
      this.getLists();
      console.log(this.$el.getElementsByTagName('input')[0])
      //this.$el.getElementsByTagName('input')[0].value="123";

    },
  	methods:{
        getLists(){          
            //请求列表
            reqData.req({
                apiName: 'test1',
                url: 'news/getNewsList',
                method: 'post',
                params: {
                    'pageSize':'10',//每页显示的数目
                    'currentPage':'0',
                    'columnId':'58' 
                }
            }).then((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import './../../../assets/scss/app/app.scss';
</style>
