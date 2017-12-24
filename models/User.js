var db=require('../connection');
var users={
  getAllUsers:function(callback){
    return db.query("select * from users left join countries ON users.country_id = countries.id",callback);
  },
  getUserById:function(id,callback){
    return db.query("select * from users left join countries ON users.country_id = countries.id WHERE users.id=?",[id],callback);
  },
  addUser:function(users,callback){
    return db.query("INSERTs into users values(?,?,?)",[users.email, users.password, users.country_id],callback);
  },
  deleteUser:function(id,callback){
    return db.query("delete from users where id=?",[id],callback);
  },
  updateUser:function(id,users,callback){
    return  db.query("update users set country_id = ? where id=?",[users.country_id, id],callback);
  }
};
module.exports=users;