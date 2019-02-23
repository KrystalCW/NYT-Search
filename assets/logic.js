$(document).ready(function() {
const endPoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ciTuQHAuDfXjPDNMCdXvHtmqA34C9R03'

$.ajax({
    url: endPoint + '&q=Jussie Smollett',
    method: "GET"
  }).then(function(response) {

    console.log(response)
  })
})