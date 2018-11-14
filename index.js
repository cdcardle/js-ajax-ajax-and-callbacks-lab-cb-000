$(document).ready(function (){

  function displayError() {
    $("#errors").html("I'm sorry, there's been an error. Please try again.")
  }

  function searchRepositories() {
    const searchTerms = $('#searchTerms').val());
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
      const src = $('#repo-template').innerHTML;
      const template = Handlebars.compile(src)
      const repoList = template(data.items)
      $("#results").html(repoList)
    }).fail(error => displayError());
  }

});