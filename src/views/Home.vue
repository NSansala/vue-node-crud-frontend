<template>
  <button @click="getAll">Show all users</button><br><br>
  <div>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Password</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr v-for="user in users" :key="user.index">
        <td>{{user._id}}</td>
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
        <td><button @click="updateUser(user._id)">Update User</button></td>
        <td><button @click="deleteUser(user._id)">Delete User</button></td>
      </tr>
    </table>
  </div>
  <br>
  <button @click="addUser">Add User</button>

  <router-view/>
</template>

<script>

import UserService from '../services/userServices'
export default{
  data() {
    return{
      users:[],
      user:"",
      id:""
    }
  },
  components:{
  
  },
  methods:{
    async getAll(){
      try{
        const response = await UserService.getAllUsers()
        this.users = response.data
      }
      catch(err){
        console.log(err)
      }
    },
    addUser(){
      //console.log(this.$route)
      this.$router.push('/addUser') //navigate to the AddUser page
    },
    updateUser(id){
      this.$router.push('/updateUser/'+id)
    },
    async deleteUser(id){
      try {
        this.id = await UserService.deleteUser(id);
        this.getAll()
      } catch (err) {
        console.log(err);
      }
    }
  }   
}

</script>

<style>
</style>



