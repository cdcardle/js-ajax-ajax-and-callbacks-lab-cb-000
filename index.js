$(document).ready(function (){
});

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val());
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    const src = $('#repository-template').innerHTML;
    const template = Handlebars.compile(src)
    const repoList = template(data.items)
    $("#results").html(repoList)
    console.log(template);
  }).fail(error => displayError());
}

document.addEventListener('DOMContentLoaded', function(event) {
  Handlebars.registerPartial(
    'authorPartial',
    $('author-partial-template').innerHTML
  );
});

// <script id="repo-template" type="text/x-handlebars-template">
//   <ul>
//     {{#each this}}
//       <li>
//         <h2><a href="{{html_url}}">{{name}}</a></h2>
//         <section>
//           <header><h4>Created By {{owner.login}}</h4></header>
//           <a href="#" data-repository="{{name }}" data-owner="{{owner.login}}" onclick="showCommits(this)">Get Commits</a>
//         </section>
//       </li>
//     {{/each}}
//   </ul>
// </script>
