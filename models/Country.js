var db=require('../connection');
var Country={
  getAllCountries:function(callback){
    return db.query("select * from countries",callback);
  },
  getCountryById:function(id,callback){
    return db.query("select * from countries where id=?",[id],callback);
  },
  addCountry:function(country,callback){
    return db.query("insert into countries values (?)",[country.name],callback);
  },
  deleteCountry:function(id,callback){
    return db.query("delete from countries where id=?",[id],callback);
  },
  updateCountry:function(id,country,callback){
    return  db.query("update coutries set name=? where id=?",[country.name, id],callback);
  }
};
module.exports=Country;