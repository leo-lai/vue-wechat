<template>
  <div>
    <search :auto-fixed="false"></search>
    <!-- <panel class="l-msg-list" :list="msgList" type="1"></panel> -->
    <div class="l-list">
      <div class="l-list-item l-flex-hc">
        <div class="l-list-thumb">
          <img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff" alt="">  
        </div>
        <div class="l-list-bd l-rest">
          <div class="l-list-tit">
            <h4>标题</h4>
          </div>
          <div class="l-list-desc">
            <p class="l-text-wrap1">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Panel, Search } from 'vux'

export default {
  components: {
    Panel, Search
  },
  data () {
    return {
      msgList: []
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      let num = 20
      let tempData = []
      while(num-- > 0){
        tempData.push({
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: ''
        })
      }
      this.msgList = tempData
    }
  }
}
</script>
<style>
.l-msg-list{
  margin:0 !important;
}
</style>