<template>
    <header class="nav-header">
        <h1 class="logo">
            <nuxt-link to="/" v-if="!isCollapse">Logo</nuxt-link>
        </h1>
        <div>
            <!-- left nav -->
            <div class="nav fl nav-left">
                <el-menu  class="el-menu-top" mode="horizontal" menu-trigger="click">
                    <el-menu-item index="1" @click="changeCollapse">
                        <svg class="icon" :class="isCollapse?'icon-rotate':''"><use xlink:href="#icon-menu"></use></svg>
                    </el-menu-item>
                </el-menu>
            </div>
            <!-- right nav -->
            <div class="nav fr">
                <el-menu  class="el-menu-top" mode="horizontal" menu-trigger="click">
                    <el-submenu index="1">
                        <template slot="title">欢迎<span v-if="$store.state.authUser">{{$store.state.authUser.username}}</span></template>
                        <el-menu-item index="1-1">查看个人信息</el-menu-item>
                        <el-menu-item index="1-2">修改密码</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-bell"></i>
                    </el-menu-item>
                    <el-menu-item index="3" @click="logout">
                        <i class="el-icon-close"></i>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </header>
</template>
<script>
  export default {
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
            this.$emit('change-collapse',this.isCollapse);
        },
        async logout(){
            this.$confirm('您确定要退出系统?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push("/login");
                });
            }).catch(() => {
                       
            });
           
        }
    }
  }
</script>


