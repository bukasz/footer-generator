<template>
  <p v-if="isLoading">Loading...</p>
  <button v-if="!isLoading" @click="handleAuthClick" v-text="isAuthorized ? 'Refresh' : 'Authorize'" />
  <button v-if="isAuthorized" @click="handleSignoutClick" v-text="'Sign out'" />
  <button v-if="isAuthorized" @click="setSignature" v-text="'Set signature'" />
  <p v-if="errorMsg">{{ errorMsg }}</p>
  <p v-if="successMsg">{{ successMsg }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import googleApisService from "../services/google-apis";

const isAuthorized = ref(false);
const isLoading = ref(true);
const errorMsg = ref(null);
const successMsg = ref(null);


onMounted(async () => {
  try {
    await googleApisService.loadGoogleApis();
  } catch (error) {
    errorMsg.value = error;
  } finally {
    isLoading.value = false;
  }
});

function handleAuthClick() {
  window.tokenClient.callback = (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    isAuthorized.value = true;
  };

  const prompt = gapi.client.getToken() === null
    ? 'consent' //Show account chooser & consent dialog when establishing a new session
    : '';       //Skip for an existing session

  window.tokenClient.requestAccessToken({ prompt });
}

function handleSignoutClick() {
  const token = window.gapi.client.getToken();
  if (token !== null) {
    window.google.accounts.oauth2.revoke(token.access_token);
    window.gapi.client.setToken('');
    isAuthorized.value = false;
  }
}

async function setSignature() {
  const userId = 'me';

  isLoading.value = true;
  errorMsg.value = null;
  successMsg.value = null;

  try {
    // Get the user's email address
    const profile = await window.gapi.client.gmail.users.getProfile({ userId });
    const sendAsEmail = profile.result.emailAddress;

    // Update the user's signature
    await window.gapi.client.gmail.users.settings.sendAs.update({
      userId,
      sendAsEmail,
      resource: {
        signature: '<h1>Łukasz Walaszczyk & ąęćźżśłó/h1>',
      },
    });

    successMsg.value = 'Signature updated';
  } catch (error) {
    errorMsg.value = error;
  } finally {
    isLoading.value = false;
  }
}

</script>