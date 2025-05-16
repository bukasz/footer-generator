<template>
  <Navigation
    v-bind="{
      isLoading,
      isAuthorized,
      errorMsg,
      successMsg,
    }"
    @auth-click="handleAuth"
    @sign-out-click="handleSignout"
  />
  <Generator
    v-if="isAuthorized && emailAddress"
    v-bind="{
      emailAddress,
    }"
    @set-signature="setSignature"
  />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import googleApisService from "./services/google-apis";
import Navigation from "./components/Navigation.vue";
import Generator from "./components/Generator.vue";

const isAuthorized = ref(false);
const isLoading = ref(true);
const errorMsg = ref(null);
const successMsg = ref(null);

const emailAddress = ref(null);

const userId = "me";

onMounted(async () => {
  try {
    await googleApisService().loadGoogleApis();
  } catch (error) {
    errorMsg.value = error;
  } finally {
    isLoading.value = false;
  }
});

watch(isLoading, (newVal) => {
  if (newVal === false) return;

  errorMsg.value = null;
  successMsg.value = null;
});

function handleAuth() {
  window.tokenClient.callback = (resp) => {
    console.log(resp);
    if (resp.error !== undefined) {
      throw resp;
    }
    isAuthorized.value = true;

    getUserEmail();
  };

  const tokenMissing = gapi.client.getToken() === null;

  //Show account chooser & consent dialog when establishing a new session
  window.tokenClient.requestAccessToken({
    prompt: tokenMissing ? "consent" : "",
  });
}

function handleSignout() {
  const token = window.gapi.client.getToken();
  if (token !== null) {
    window.google.accounts.oauth2.revoke(token.access_token);
    window.gapi.client.setToken("");
    isAuthorized.value = false;
  }
}

async function getUserEmail() {
  isLoading.value = true;

  try {
    const profile = await window.gapi.client.gmail.users.getProfile({ userId });
    emailAddress.value = profile.result.emailAddress;
  } catch (error) {
    errorMsg.value = error;
  } finally {
    isLoading.value = false;
  }
}

async function setSignature(signature) {
  isLoading.value = true;

  try {
    if (!emailAddress.value) throw new Error("Email address is missing");

    await window.gapi.client.gmail.users.settings.sendAs.update({
      userId,
      sendAsEmail: emailAddress.value,
      resource: {
        signature,
      },
    });

    successMsg.value = "Signature updated";
  } catch (error) {
    errorMsg.value = error;
  } finally {
    isLoading.value = false;
  }
}
</script>
