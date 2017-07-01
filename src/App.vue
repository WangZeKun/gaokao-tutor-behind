<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1" style="font-size: 15px">报名后台</el-menu-item>
        </el-menu>
        <el-table
                :data="data"
                border
                style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item :label="x.Subject" v-for="(x,index) in props.row.Score" :key="index">
                            <span>{{ x.Score}}（满分{{x.FullScore}}）</span>
                        </el-form-item>
                        <el-form-item label="想要补习（陪优）的科目及原因" style="width: 100%">
                            <span>{{ props.row.Text }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="Date"
                    label="日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="Name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="Sex"
                    label="性别"
                    width="70"
            >
            </el-table-column>
            <el-table-column
                    prop="School"
                    label="学校">
            </el-table-column>
            <el-table-column
                    prop="Grade"
                    label="年级">
            </el-table-column>
            <el-table-column
                    prop="Telephone"
                    label="电话">
            </el-table-column>
            <el-table-column
                    prop="Address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="Type"
                    label="文理科">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                data: []
            }
        },

        methods: {
            getMessage(){
                axios.get('http://47.94.91.118/api/get')
                    .then(res => {
                        this.data = res.data;
                        console.log(this.data)
                    })
            }
        },
        mounted(){
            this.getMessage()
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
        padding: 0px;
        margin: 0px;
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
