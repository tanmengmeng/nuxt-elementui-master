<template>
    <section class="app-wrapper">
        <bread-crumb :levelList="titleList"></bread-crumb>
        <div class="list">
            <!-- search -->
            <el-form :inline="true" :model="menuInfo" class="search-top-form">
                <el-form-item label="菜单名称">
                <el-input v-model="menuInfo.name" placeholder="菜单名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSearch" :loading="loading">查询</el-button>
                </el-form-item>
                <el-form-item class="fr">
                    <el-button type="primary" @click="dialogFormVisible = true" :loading="loading">新增</el-button>
                </el-form-item>
            </el-form>
            <!-- table -->
             <el-table :data="$store.state.menuList" border v-loading="tabelLoading" >
                <el-table-column prop="name" label="名称" width="180"> </el-table-column>
                <el-table-column prop="path" label="路径"> </el-table-column>
            </el-table>
            <!-- pageination -->
            <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
             :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
            <!-- dialog -->
            <el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="菜单名称" label-width="100px">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单路径" label-width="100px">
                        <el-input v-model="form.path" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
       </div>
    </section>
</template>
<script>
    import breadCrumb from "~/components/bread-crumb"
    export default {
        layout: 'main',
        components: { breadCrumb },
        beforeCreate:function(){
            
            console.log(this.$route.name)
            // .meta=[{name:'首页',path:'/'},{name:'菜单管理',path:'/menu-list'}]
        },
        data(){
            return {
                tabelLoading:true,
                currentPage:1,
                menuInfo:{
                    name:''
                },
                loading : false,
                titleList :[{name:'首页',path:'/'},{name:'菜单管理',path:'/menu-list'}],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    path: ''
                },
            }
        },
        methods:{
            onSearch:{

            },
            handleSizeChange:{},
            handleCurrentChange:{}
        }
    }
</script>
