$(document).ready(function (){
});
function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var searchTerms = document.getElementById('searchTerms').value
  var url = "https://api.github.com/search/repositories?q=" + searchTerms
  $.get(url, function(data){
    var src = document.getElementById("repo-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(data.items)
    $("#results").html(repoList)
  }).fail(error => displayError());
}
