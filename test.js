var linkup = require("linkup");

// create a peer with some id
var peer = linkup.createPeer("peer2");

// listen for messages from other peers
peer.on("message", function(envelope) {
  console.log("Received message from", envelope.from, ":", envelope.message);
});

// we want to know when something goes wrong
peer.on("error", function(err) {
  console.error(err);
});

// send a message to a peer
peer.send("peer1", "hi peer2!").catch(function(err) {
  console.error(err);
});
