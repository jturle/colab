var linkup = require("linkup");

const options = {
  browserUrl: "wss://linkup-broker.herokuapp.com",
  simplePeer: {
    trickle: true,
    config: {
      iceServers: [
        {
          urls: ["stun:23.21.150.121"] // default of simple-peer
        }
      ]
    }
  }
};
// create a peer with some id
var peer = linkup.createPeer("peer2", options);

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
