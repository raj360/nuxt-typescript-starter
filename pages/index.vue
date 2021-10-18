<template>
  <users-table :users="getterUsers" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { UsersTableComponent } from "@/components/UsersTableComponent";

const User = namespace("modules/User");

@Component({ components: { "users-table": UsersTableComponent } })
export default class IndexPage extends Vue {
  @User.Getter("users") getterUsers;
}
</script>

<style  scoped>
</style>
