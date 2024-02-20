<template>
  <nav>
    <p v-if="isLoading">Loading...</p>
    <button v-if="!isLoading" @click="$emit('authClick')">{{ isAuthorized ? 'Refresh token' : 'Authorize access to Gmail' }}</button>
    <button v-if="isAuthorized" @click="$emit('signOutClick')">Sign out</button>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p v-if="successMsg">{{ successMsg }}</p>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["authClick", "signOutClick"]);

const props = defineProps({
  isLoading: Boolean,
  isAuthorized: Boolean,
  errorMsg: String,
  successMsg: String,
});
</script>