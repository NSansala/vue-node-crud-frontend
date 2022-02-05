import domain from '../services/domain'

// const getAllUsers = ()=>{
//     axios.get('http://localhost:4000/user/').then((res)=>{
//         return res.data
//       }).catch((err)=>{
//         return null
//     })
// }

export default {
  getAllUsers() {
    // return new Promise((resolve, reject) => {
    //   axios
    //     .get("http://localhost:4000/user/")
    //     .then((res) => {
    //       resolve(res.data);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    // });

    //Using axios object
    return domain().get('user/')
  },
  addUser(user){
    return domain().post('user/createUser',user)
  },
  getOneUser(id){
    return domain().get('user/'+id)
  },
  updateUser(user){
    return domain().put('user/'+user._id,user)
  },
  deleteUser(id){
    return domain().delete('user/'+id)
  }
};

//CANNOT DO THIS
// export default {
//   async getAllUsers() {
//     return new Promise((resolve, reject) => {
//         const response = await axios.get('http://localhost:4000/user/')
//     });
//   },
// };
