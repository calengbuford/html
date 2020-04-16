// JavaScript

var app = new Vue({
    el: '#app',
    data: {
        quotes: [],
        filteredList: [],
        queryTerms: '',
    },
    created() {
        this.fetchREST();
    },
    methods: {
        fetchREST() {
            var url = "https://programming-quotes-api.herokuapp.com/quotes";
            console.log("URL " + url);
            fetch(url)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    this.quotes = response;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        filter() {
            this.filteredList = [];
            for (let i = 0; i < this.quotes.length; ++i) {

                if (this.quotes[i].author.toLowerCase().includes(this.queryTerms.toLowerCase())) {
                    console.log(this.quotes[i]);
                    this.filteredList.push(this.quotes[i]);
                }
            }
            if (this.filteredList.length === 0) {
                console.log("No matching authors");
            }
        },
    },
});





// window.onload = function() {
//   document.getElementById("submit").addEventListener("click", function(event) {
//     event.preventDefault();
//     const word = document.getElementById("query").value; // ID CHANGE
//     if (word === "")
//       return;
//     console.log(word);
//
//     let tokenId = "2cfe47fee899315a41c9be7041629fea246eb9a4";
//
//     // Fetch and display defintion for word
//     const myurl = "https://cors-anywhere.herokuapp.com/owlbot.info/api/v3/dictionary/" + word.toLowerCase();
//     fetch(myurl, {
//     	mode: 'cors',
//     	headers: {
//     		"Authorization": "Token " + tokenId,
//         }
//     }).then(function(response) {
//     	return response.json();
//     }).then(function(json) {
//     	console.log(json);
//
//         definitionDiv = "";
//         document.getElementById("word").innerHTML = json.word;
//         document.getElementById("pronunciation").innerHTML = json.pronunciation;
//         for (let i = 0; i < json.definitions.length; ++i) {
//             definitionDiv += "<h3>" + (i+1) + ".</h3>";
//             definitionDiv += "<i>" + json.definitions[i].type + "</i>";
//             definitionDiv += "<p>" + json.definitions[i].definition + "</p><br>";
//         }
//         document.getElementById("definition").innerHTML = definitionDiv;
//     }).catch(function(error) {
//         document.getElementById("word").innerHTML = "Word does not exist";
//         document.getElementById("definition").innerHTML = "";
//         document.getElementById("pronunciation").innerHTML = "";
//     });
//
//   });
// }
