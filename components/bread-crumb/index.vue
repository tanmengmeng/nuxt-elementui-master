<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
        <span v-if="index==levelList.length-1" class="no-redirect">{{item.name}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  props:{
    levelList : {
      type:Array
    }
  },
  created() {
    // this.getBreadcrumb()
  },
  data() {
    return {
      // levelList: null
    }
  },
  watch: {
    // $route() {
    //   // this.getBreadcrumb()
    //   console.log(his.$route.matched.filter(item => item.name),'---')
    // }
  },
  methods: {
    // generateTitle,
    // getBreadcrumb() {
    //   let matched = titleList
    //   const first = matched[0]
    //   // if (first && first.name !== 'dashboard') {
    //   //   matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
    //   // }
    //   this.levelList = matched
    // }
  }
}
</script>

