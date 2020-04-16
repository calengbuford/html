// JavaScript
window.onload = function() {
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const word = document.getElementById("query").value; // ID CHANGE
    if (word === "")
      return;
    console.log(word);

    let tokenId = "2cfe47fee899315a41c9be7041629fea246eb9a4";

    // Fetch and display defintion for word
    const myurl = "https://cors-anywhere.herokuapp.com/owlbot.info/api/v3/dictionary/" + word;
    fetch(myurl, {
    	mode: 'cors',
    	headers: {
    		"Authorization": "Token " + tokenId,
        }
    }).then(function(response) {
    	return response.json();
    }).then(function(json) {
    	console.log(json);

        definitionDiv = "";
        document.getElementById("word").innerHTML = json.word;
        document.getElementById("pronunciation").innerHTML = json.pronunciation;
        for (let i = 0; i < json.definitions.length; ++i) {
            definitionDiv += "<h3>" + (i+1) + ".</h3>";
            definitionDiv += "<i>" + json.definitions[i].type + "</i>";
            definitionDiv += "<p>" + json.definitions[i].definition + "</p><br>";
        }
        document.getElementById("definition").innerHTML = definitionDiv;
    }).catch(function(error) {
        document.getElementById("word").innerHTML = "Word does not exist";
        document.getElementById("definition").innerHTML = "";
        document.getElementById("pronunciation").innerHTML = "";
    });

  });
}
