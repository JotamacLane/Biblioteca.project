
// Initialize Parse
  Parse.initialize("rI7MzjMSkgalJx8Me3HsfkwVuqXLH4VnNFKGgXmT", "mVaYJbkTiKvdpjgaFHrkBl4F7p3xd6HFTDIphygm"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";

  async function createParseUser() {
// Creates a new Parse "User" object, which is created by default in your Parse app
let user = new Parse.User();
// Set the input values to the new "User" object
user.set("username", document.getElementById("username").value);
user.set("email", document.getElementById("email").value);
user.set("password", document.getElementById("password").value);
try {
// Call the save method, which returns the saved object if successful
user = await user.save();
if (user !== null) {
// Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
alert(
`New object created with success! ObjectId: ${
  user.id
}, ${user.get("username")}`
);
}
} catch (error) {
alert(`Error: ${error.message}`);
}
}

// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
createParseUser();
});
