<template>
  <div>
    <search :auto-fixed="false"></search>
    <group class="l-contacts">
      <cell title="新的朋友">
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
      <cell title="群聊">
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
      <cell title="标签">
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
      <cell title="公众号">
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <group class="l-contacts" :title="'A'+item1" v-for="item1 in 10">
      <cell :title="'赖国聪'+item2" v-for="item2 in 8">
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <div class="l-text-center l-padding-s l-text-gray2">424位联系人</div>
  </div>
</template>



<script>
import { Cell, Group, Search } from 'vux'

export default {
  components: {
    Group, Cell, Search
  }
}
</script>
<style lang="less">
.l-contacts{
  .weui_cells{
    margin-top: -1px;
  }
  .weui_cells_title{
    position: relative;
    position: -webkit-sticky;
    position: sticky;
    background-color: #efeff4;
    margin: 0;
    padding: 0.1rem 0.75rem;
    z-index: 20;
    top: 0;
  }
  .l-icon{
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>