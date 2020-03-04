<template>
  <div>
    <div class="column" style="height: 100vh">
      <div class="col-2 text-h5 h5 margin--sm">Active Users</div>
      <template v-for="user in activeUsers">
        <template v-if="user !== username">
          <q-chip square :key="user" class="user__chip">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            {{user}}
          </q-chip>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { globalStore } from "../store/globalStore.js";
import { socket } from "../socket.js";

export default {
  name: "sideBar",
  data() {
    return {
      activeUsers: [],
      username: globalStore.userName
    };
  },
  mounted() {
    socket.on("UPDATE_USERS", function(users) {
      /* eslint-disable */
      this.activeUsers = users;
      console.log(this.activeUsers);
    });
  },
  watch: {
    activeUsers: function() {
      socket.on("UPDATE_USERS", function(users) {
        this.activeUsers = users;
      });
    }
  }
};
</script>


<style>
.user__chip {
  height: 60px;
  padding: 20px;
}
</style>
