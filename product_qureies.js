//MongoDB - Task 1 - Day 37//
//Queries are listed below //
//In all the queries listed below I had used pretty() for readable format//


// 1.Find all the information about each products //

db.product.find({}, { _id: 0 }).pretty();

// 2.Find the product price which are between 400 to 800//

db.product.find({$and:[{product_price:{$gte:400}},{product_price:{$lte:800}}],}).pretty()

//3.Find the product price which are not between 400 to 600//

db.product.find({$or:[{product_price:{$gte:400}},{product_price:{$lte:800}}],}).pretty()

//4.List the four product which are grater than 500 in price //

db.product.find({product_price:{$gte:500}},{_id:0}).limit(4).pretty()

//5.Find the product name and product material of each products//

db.product.find({},{_id:0,product_name:1,product_price:1}).pretty()

//6.Find the product with a row id of 10//

db.product.find({id:"10"}).pretty()

//7.Find only the product name and product material//

db.product.find({}, { _id: 0, product_name: 1, product_material: 1 }).pretty()

//8.Find all products which contain the value of soft in product material //

db.product.find({product_material:"Soft"}).pretty()

//9.Find products which contain product color indigo  and product price 492.00//

db.product.find({ $or : [{product_price:492},{product_color:"indigo"}]}).pretty();

//10.Delete the products which product price value are same//

db.product.aggregate([
  { $group: { _id: "$product_price", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } },
]).forEach((doc) => {
  db.product.remove({ product_price: doc._id });
}).pretty();



