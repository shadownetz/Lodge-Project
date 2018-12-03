<template>
<div>
 <router-view/>
 <component :is="currentTabComponent"></component>
</div>

</template>

<script>
import bodyComponent from '@/components/BodyComponent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentTab:'main'
    }
  },
  computed:{
    currentTabComponent: function(){
      return 'tab-' + this.currentTab
    }
  },
  components:{
    'tab-main': bodyComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
