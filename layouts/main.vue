<template>
    <section class="app-wrapper">
      <page-asider :collapse="asiderIsCollapse"></page-asider>
      <div class="main-container">
        <page-header @change-collapse="changeAsiderCollapse"></page-header>
        <div class="right-container" :class="asiderIsCollapse?'mrg-left-small':''">
          <div>
            <nuxt />
          </div>
        </div>
        <svg aria-hidden="true" class="hidden-svg">
          <symbol id="icon-menu" viewBox="0 0 1024 1024">
            <path d="M0 128l0 128 1024 0 0-128-1024 0zm0 380.16l0 128 1024 0 0-128-1024 0zm0 384l0 128 1024 0 0-128-1024 0z" p-id="7059" fill="#ffffff"></path>
          </symbol>
        </svg>
      </div>
  	</section>
</template>

<script>
import pageHeader from "~/components/page-header"
import pageAsider from "~/components/page-asider"

export default {
  middleware: 'index',
  name: 'main-layout',
  components: {
    pageHeader,
    pageAsider,
  },
  data (){
    return {
      asiderIsCollapse: false,
    }
  },
  
  methods:{
    changeAsiderCollapse(val){
      this.asiderIsCollapse = val;
    }
  }
}
</script>
