<template>
    <section class="app-wrapper">
      <bread-crumb :levelList="titleList"></bread-crumb>
      <div class="wrapper-content">
        <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
        </el-row>
        index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      index<br>
      </div>
      <back-top transitionName="fade" :visibilityHeight="200"></back-top>
  	</section>
</template>

<script>

import backTop from "~/components/back-top"
import breadCrumb from "~/components/bread-crumb"
import panelGroup from "~/components/main-component/panelGroup"
export default {
  components: { backTop,breadCrumb,panelGroup },
  name:'sss',
  layout: 'main',
  data(){
    return {
      titleList :[{name:'首页',path:'/'}]
    }
  },
  asyncData (){
    return {
      
    }
  },
  
  methods:{
    handleSetLineChartData:function(){

    }
    
  }
}
</script>

