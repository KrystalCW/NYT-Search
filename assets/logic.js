$(document).ready(function () {
    const endPoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ciTuQHAuDfXjPDNMCdXvHtmqA34C9R03'

    $('#search').on('click', function () {

        let start = '';
        let end = '';
        let query = '&q=' + $('#search-term').val()
        let number = $('#number-articles').val()
        if ($('#start-year').val() != '') {
            start = '&begin-date=' + $('#start-year').val() + '0101'
        }
        if ($('#end-year').val() != '') {
            end = '&end-date=' + $('#end-year').val() + '1231'
        }


        $.ajax({
            url: endPoint + start + end + query,
            method: "GET"
        }).then(function (response) {

            for (let i=0;i<number;i++) {
            let headline = response.response.docs[i].headline.main;
            let summary = response.response.docs[i].snippet;
            let url = response.response.docs[i].web_url;

            let article = `<div><a href="${url}"><h3>${headline}</h3></a><p>${summary}</p></div>`
            $('#article-display').append(article);
            }
            $('#search-term').val('')
            $('#number-articles').val('1')
            $('#start-year').val('')
            $('#end-year').val('')
        })

        $('#clear').on('click', function() {
            $('#article-display').empty();
        })
    })
})