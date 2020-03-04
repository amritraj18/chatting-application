<template>
  <div>
    <template v-if="!userName">
      <signUpModel/>
    </template>
    <template v-else>
      <q-layout view="lHr lpr lFr">
        <q-header class="bg-white text-black">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="left = !left"/>
            <q-toolbar-title>
              Group Chat
            </q-toolbar-title> 
          </q-toolbar>
        </q-header>
        <q-drawer v-model="left" side="left" bordered>
          <sideBar></sideBar>
        </q-drawer>
        <q-page-container>
          <chat ref="chatComponent"></chat>
        </q-page-container>
        <q-footer elevated class="bg-white text-black">
          <q-toolbar>
            <q-toolbar-title>
              <q-input p bottom-slots v-model="message" label="Type a message..." :dense="dense">
                <template v-slot:append>
                  <q-icon
                    v-if="message !== ''"
                    name="close"
                    @click="message = ''"
                    class="cursor-pointer"
                  />
                </template>
                <template v-slot:after>
                  <q-btn round dense flat icon="send" @click="sendMessage" class="text-red"/>
                </template>
              </q-input>
            </q-toolbar-title>
          </q-toolbar>
        </q-footer>
      </q-layout>
    </template>
  </div>
</template>

<script>
import sideBar from "../components/sideBar";
import chat from "../components/chat";
import { socket } from "../socket.js";
import signUpModel from "../components/Signup";
import { globalStore } from "../store/globalStore.js";

export default {
  data() {
    return {
      message: "",
      left: true,
      ph: "",
      dense: false,
      userName: ""
    };
  },
  components: {
    sideBar,
    chat,
    signUpModel
  },
  mounted() {
    this.userName = globalStore.userName;
    socket.on("BROADCAST_MESSAGE", message => {
      this.$refs.chatComponent.broadcastMessage(message);
    });
  },
  methods: {
    sendMessage() {
      if (this.message && typeof this.message != undefined) {
        let message = this.message;
        let username = this.userName;
        socket.emit("SEND_MESSAGE", { message, username });
        this.message = "";
      }
    },
    userRegistered() {
      this.userName = globalStore.userName;
      socket.emit("USER_ENTERED", this.userName);
    }
  }
};
</script>

<style>
</style>
