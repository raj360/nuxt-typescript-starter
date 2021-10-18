<template>
  <div></div>
</template>

<script lang="ts">

import {Vue, Component, Prop} from "vue-property-decorator";

@Component({name:"UsersTable"})
export default class UsersTableComponent extends Vue{

public userColums = [
 {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
      scopedSlots: { customRender: "fullName" }
    },
    {
      title: "Roles",
      dataIndex: "roles",
      scopedSlots: { customRender: "roles" }
    },
    {
      title: "Active",
      dataIndex: "active",
      scopedSlots: { customRender: "active" }
    },
    {
      title: "Action",
      dataIndex: "uid",
      scopedSlots: { customRender: "uid" }
    }
];

@Prop({
 required:true,
 type:Array
})
public users = [];

}

</script>

<style  scoped>
</style>
