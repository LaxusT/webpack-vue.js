<template>
  <div>
  	<span></span>
  </div>
</template>

<script>
import reqData from "./../../../models/castrol/reqData"

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

    },
  	methods:{
        getLists(){
            
            debugger
            this.$castrol.loading.show({
                text: 'Loading'
            });
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
                this.$castrol.loading.hide();
                console.log('1111111111'+JSON.stringify(res));

            }).catch((err) => {
                console.log('22222222222222'+err)
                this.$castrol.loading.hide();
                this.$castrol.toast.show({
                    type: 'text',
                    text: '系统异常',
                    onShow () {
                    },
                    onHide () {
                    }
                })
            })
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import './../../../assets/scss/app/app.scss';
</style>
