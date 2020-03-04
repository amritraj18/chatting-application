<template>
  <div class="q-pa-md row justify-center">
    <div id="chat__box" style="width: 100%; height:100%">
      <template v-for="(message) in textMessages">
        <q-chat-message
          :sent="message.username == username ? true : false"
          :name="message.username != username ?  message.username : 'Me'"
          :key="message + Math.random()"
          :text="[message.message]"
          text-color="white"
          bg-color="red"
        />
      </template>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../store/globalStore.js';

export default {
  data() {
    return {
      textMessages: [],
      username : globalStore.userName
    };
  },
  methods: {
    broadcastMessage: function(message) {
      this.textMessages.push(message);
    },
    capitalize: function(s) {
      if (typeof s !== 'string') return '';
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
};
</script>

