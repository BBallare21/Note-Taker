// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("../routes/apiRoutes")(app);
require("../routes/htmlRoutes")(app);


// Routes
// =============================================================


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// var $noteTitle = $(".note-title");
// var $noteText = $(".note-textarea");
// var $saveNoteBtn = $(".save-note");
// var $newNoteBtn = $(".new-note");
// var $noteList = $(".list-container .list-group");

// // activeNote is used to keep track of the note in the textarea
// var activeNote = {};

// // A function for getting all notes from the db
// var getNotes = function() {
  
// };

// // A function for saving a note to the db
// var saveNote = function(note) {
  
// };

// // A function for deleting a note from the db
// var deleteNote = function(title) {
  
// };

// // If there is an activeNote, display it, otherwise render empty inputs
// var renderActiveNote = function() {
  
// };

// // Get the note data from the inputs, save it to the db and update the view
// var handleNoteSave = function() {
  
// };

// // Delete the clicked note
// var handleNoteDelete = function(event) {
  
// };

// // Sets the activeNote and displays it
// var handleNoteView = function() {
  
// };

// // Sets the activeNote to and empty object and allows the user to enter a new note
// var handleNewNoteView = function() {
  
// };

// // If a note's title or text are empty, hide the save button
// // Or else show it
// var handleRenderSaveBtn = function() {
  
// };

// // Render's the list of note titles
// var renderNoteList = function(notes) {
  
// };

// // Gets notes from the db and renders them to the sidebar
// var getAndRenderNotes = function() {
  
// };

// $saveNoteBtn.on("click", handleNoteSave);
// $noteList.on("click", ".list-group-item", handleNoteView);
// $newNoteBtn.on("click", handleNewNoteView);
// $noteList.on("click", ".delete-note", handleNoteDelete);
// $noteTitle.on("keyup", handleRenderSaveBtn);
// $noteText.on("keyup", handleRenderSaveBtn);

// // Gets and renders the initial list of notes
// getAndRenderNotes();
