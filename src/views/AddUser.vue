<template>
  <h1>Add User</h1>
  <label for="">Email: </label>
  <input type="email" v-model="user.email"/><br /><br />
  <label for="">Password: </label>
  <input type="password" v-model="user.password"/><br /><br />
  <button @click="addOneUser">Add User</button>
</template>

<script>
import UserService from '../services/userServices'
export default {
  data() {
    return {
      user:{
        email:"",
        password:""
      }
    }
  },
  methods: {
    async addOneUser() {
      try {
        this.user = await UserService.addUser(this.user);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
