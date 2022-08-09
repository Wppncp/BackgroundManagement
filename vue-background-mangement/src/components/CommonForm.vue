<!-- eslint-disable vue/no-mutating-props -->
<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="form[item.model]"
      ></el-input>
      <el-switch
        v-if="item.type === 'switch'"
        v-model="form[item.model]"
      ></el-switch>
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="form[item.model]"
      ></el-date-picker>
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommonForm",
  data() {
    return {
    //   "form2":  {
    //     name: "",
    //     addr: "",
    //     age: "",
    //     birth: "",
    //     sex: "",
    //   }
    };
  },
  props: {
    "formLabel": Array,//User的operateFormLabel: [{model: "name",label: "姓名",type: "input"}]
    //实际通过form修改User的operateForm = {name: "", addr: "", age: "",birth: "", sex: "",}或searchFrom: {keyword: ""},
    "form": Object,
    "inline": Boolean,
  },
//   watch: {
//     from: {
//       function(newValue) {
//         this.form2 = newValue,
//         changeForm(this.form2)
//       },
//       deep: true,
//     },
//   },
//   methods:{
//     changeForm2(form2){
//         this.$emit('change',form2)
//     }
//   }
};
</script>

<style>
</style>