<template>
  <h1>Update User</h1>
  <label for="">Email: </label>
  <input type="email" v-model="user.email"><br><br>
  <label for="">Password: </label>
  <input type="text" v-model="user.password"><br><br>
  <button @click="updateUser">Update User</button>
</template>

<script>
import UserService from '../services/userServices'
export default {
  data(){
    return{
      user:{},
      id:""
    }
  },
  components:{

  },
  methods:{
    async getUser(id){
      try{
        const response = await UserService.getOneUser(id)
        this.user = response.data
        console.log(this.user)
      }
      catch(err){
        console.log(err)
      }
    },
    async updateUser(){
      try{
        this.user = await UserService.updateUser(this.user);
        this.$router.push("/");
      }catch(err){
        console.log(err);
      }
      
    }
  },
  mounted(){
    this.getUser(this.$route.params.id)
  }

}
</script>

<style>

</style>