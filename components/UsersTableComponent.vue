<template>
  <a-table :columns="usersColumns" :dataSource="users" rowKey="uid">
    <template slot="fullName" slot-scope="fullName">{{fullName}}</template>
    <template slot="roles" slot-scope="roles">
      <a-tag v-for="(role, key) in roles" color="blue" :key="key">{{key}}</a-tag>
    </template>
    <template slot="active" slot-scope="active">{{active}}</template>
    <template slot="uid" slot-scope="uid">
      <a>{{uid}}</a>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "usersTable" })
export default class UsersTableComponent extends Vue {
  public usersColumns = [
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
    required: true,
    type: Array
  })
  public users = [];
}
</script>
