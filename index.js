const Parse = require('parse/node');
const express = require('express');
const app = express();

const APP_ID ="rI7MzjMSkgalJx8Me3HsfkwVuqXLH4VnNFKGgXmT";
const JAVASCRIPT_ID ="mVaYJbkTiKvdpjgaFHrkBl4F7p3xd6HFTDIphygm";



Parse.initialize(APP_ID,JAVASCRIPT_ID); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

const Appartment= Parse.Object.extend("Appartment")
const  appartment = new Appartment();
const appartmentQuery = new Parse.Query(Appartment);
app.get('/',(req,res)=>{
    appartmentQuery.find()
    .then((obj)=>res.json(obj))
    .catch((err)=>res.json(err))
})
const port = process.env.PORT ||4000  
app.listen(port,()=>{
    console.log("Server is running on", port)
})

async function saveNewPerson() {
    const person = new Parse.Object("Person");
  
    person.set("name", "John Snow");
    person.set("age", 27);
    try {
      let result = await person.save()
      alert('New object created with objectId: ' + result.id);
      } catch(error) {
          alert('Failed to create new object, with error code: ' + error.message);
      }
    } 

    app.get('/',function(res,req){
        res.render("index.html")
    })
  
  //Reading your First Data Object from Back4App
  async function retrievePerson() {
    const query = new Parse.Query("Person");
    
    try {
      const person = await query.get("mhPFDlCahj");
      const name = person.get("name");
      const age = person.get("age");
    
      alert(`Name: ${name} age: ${age}`);
    } catch (error) {
      alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
  }  