<template>
  <form @submit:prevent="submit">
    <my-input
      name="Username"
      @update="update"
      :error="username.error"
      :value="username.value"
      :rules="{ required: true, min: 5 }"
    />

    <my-input
      name="Password"
      type="password"
      @update="update"
      :error="password.error"
      :value="password.value"
      :rules="{ required: true, min: 10 }"
    />

    <my-button color="white" :disabled="!valid" background="darkslateblue" />
  </form>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";

export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      username: {
        value: "user",
        error: "",
      },
      password: {
        value: "pass",
        error: "",
      },
    };
  },
  methods: {
      submit() {
        

          console.log("Event")
      },
    update({ name, value, error }) {
      this[name] = { value, error };
    },
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    },
  },
};
</script>

<style scoped></style>
