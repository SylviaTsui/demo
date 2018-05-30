<template>
<div id="app">
  <mt-header fixed title="固定在顶部"></mt-header>

  <div class='btn-wrap'>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" @click.native='open'>加载</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>

  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>

  <div>
    <mt-radio title="单选框列表" v-model="value" :options="['选项A', '选项B', '选项C']">
    </mt-radio>
  </div>

  <mt-tabbar v-model="selected">
    <mt-tab-item id="外卖">
      <img slot="icon" src="./assets/logo.png"> 外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="./assets/logo.png"> 订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="./assets/logo.png"> 发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="./assets/logo.png"> 我的
    </mt-tab-item>
  </mt-tabbar>

  <mt-cell title="标题文字">{{value}}</mt-cell>


</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'app',
  data() {
    return {
      msg: '',
      value:''
    }
  },
  methods:{
    open(){
    Indicator.open('加载中...');
    setTimeout(()=>{
     Indicator.close();
    },2000)


    }
  }
}
</script>

<style>
.btn-wrap {
  margin-top: 100px;
}
</style>
