$(document).ready(function (){
});

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    let src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(data.items);
    console.log(src);
    $("#results").html(repoList)
  }).fail(error => displayError());
}
