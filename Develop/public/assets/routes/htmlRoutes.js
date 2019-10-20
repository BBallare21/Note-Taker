// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------


  // If no matching route is found default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"))
  })
  
  app.get("/viewnote", function(req, res) {
    res.sendFile(path.join(__dirname, "./viewnote.html"))
  })
};