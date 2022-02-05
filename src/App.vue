<template>
  <!-- <button @click="getAll">Show all users</button><br><br>
  <div>
    <table border="1">
      <tr>
        <th>Email</th>
        <th>Password</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr v-for="user in users" :key="user.index">
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
        <td><button @click="updateUser">Update User</button></td>
        <td><button @click="deleteUser">Delete User</button></td>
      </tr>
    </table>
  </div>
  <br>
  <button @click="addUser">Add User</button> -->

  <!-- <router-link to="/addUser">Go to Foo</router-link> -->

  <!-- 1)<AddUser/> -->

  <router-view/>
</template>

<script>

// 2)import AddUser from '../src/views/AddUser.vue' //THis should be from components actually
//import UserService from '../src/services/userServices'
export default{
  data() {
    return{
      // users:[],
      // user:""
    }
  },
  components:{
    //3)AddUser //These three lines are to display components. These components will be displayed in every page. ex:nav bars
  },
  methods:{
    //PROMISE
    // getAll(){
    //   UserService.getAllUsers().then((user)=>{
    //     this.users = user
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }

    // async getAll(){
    //   try{
    //     const response = await UserService.getAllUsers()
    //     this.users = response.data
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // },
    // addUser(){
    //   //console.log(this.$route)
    //   this.$router.push('/addUser') //navigate to the AddUser page
    // },
    // updateUser(){
    //   this.$router.push('/updateUser')
    // },
    // deleteUser(){

    // }
  }   
}

</script>

<style>
</style>
