<template>
  <form>
    <input type="text" placeholder="First name" v-model="user.firstName" />
    <input type="text" placeholder="Last name" v-model="user.lastName" />
    <input type="text" placeholder="Position" v-model="user.position" />
    <input type="tel" id="phone" name="phone" v-model="user.phone" />
  </form>
  <button @click="handleSetSignature">Set signature</button>
  <Footer v-bind="{ ...user, emailAddress }" ref="footer" />
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Footer from "./Footer.vue";

const emit = defineEmits(["setSignature"]);

const props = defineProps({
  emailAddress: String,
});

const user = ref({
  firstName: "First name",
  lastName: "Last name",
  position: "Position",
  phone: "+48 123 456 789",
});

const footer = ref(null);

function handleSetSignature() {
  emit("setSignature", footer.value.$el.outerHTML);
}
</script>
