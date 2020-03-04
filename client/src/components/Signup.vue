<template>
  <div class="q-pa-md q-gutter-sm" id="signUp--modal">
    <q-dialog v-model="seamless" seamless position="top">
      <q-card style="width: 550px">
        <q-card-section class="row items-center no-wrap">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Enter Your Username"
              hint="User Name to Enter Chat"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              style="width: 390px"
            />
            <q-btn label="Submit" type="submit" color="primary"/>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { globalStore } from "../store/globalStore.js";

export default {
  data() {
    return {
      seamless: true,
      name: ""
    };
  },
  computed: {
    contentSize() {
      return this.moreContent ? 150 : 5;
    }
  },

  methods: {
    onSubmit() {
      globalStore.userName = this.name;
      this.$parent.userRegistered();
    },
    onReset() {}
  }
};
</script>

<style>
</style>
