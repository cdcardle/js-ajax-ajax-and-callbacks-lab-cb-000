$(document).ready(function (){
});

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    const src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    console.log(data.items);
    const repoList = template(data.items);
    $("#results").html(repoList)
  }).fail(error => displayError());
}

document.addEventListener('DOMContentLoaded', function(event) {
  Handlebars.registerPartial('authorPartial', $("#author-partial-template").html);
});
