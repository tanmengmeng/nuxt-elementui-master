<template>
    <aside class="app-aside">
      	<div class="aside-scroll" :class="!collapse?'hiddenXY-scroll':''">
        	<el-menu :default-active="curPath" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="collapse" active-text-color="#409eff" :router="true">
          		<el-submenu v-for="(menu,index) in $store.state.menuList" :key="index" :index="index+''">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">{{menu.name||'测试'}}</span>
					</template>
					<el-menu-item index="/menu-list">菜单管理</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-submenu>
      		</el-menu>
      	</div>
    </aside>
</template>
<script>
  // import scrollBar from '../scroll-bar'
  	export default {
		props:{
			collapse:{
				type:Boolean
			}
		},
      	data() {
        	return {
				curPath : '/'
        	};
		},
		watch: {
			$route() {
				this.changeRoute(this.$route.path);
				console.log(this.$route,'++++')
			}
		},
		created() {
			this.$nextTick(function(){
				this.changeRoute(this.$route.path);
			})
		},
      	methods: {
			changeRoute(path){
				if(path!=this.curPath){
					this.curPath = path;
				}
			},
        	handleOpen(key, keyPath) {
          		console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
      	}
  	}
</script>


