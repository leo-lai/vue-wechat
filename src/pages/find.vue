<template>
  <div>
    <group class="l-group">
      <cell title="朋友圈" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <group class="l-group">
      <cell title="扫一扫" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
      <cell title="摇一摇" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <group class="l-group">
      <cell title="附近的人" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <group class="l-group">
      <cell title="音乐" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
      <cell title="游戏" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
    <group class="l-group">
      <cell title="小程序" is-link>
        <img class="l-icon" slot="icon" src="~assets/icon.png">
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'

export default {
  components: {
    Group, Cell
  }
}
</script>
<style lang="less">
.l-group{
  .l-icon{
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.75rem;
  }
}
</style>