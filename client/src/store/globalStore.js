import Vue from 'vue';

export const globalStore = new Vue({
    data: {
      userName : '',
      socketId : '',
      activeUsers : []
    }
});