let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = ["https://rsshub.app/telegram/channel/nCov2019"];
// userFeedURLs = userFeedURLs.split(",")
userFeedURLs.forEach(userUrl => {
    $.ajax({
        type: 'GET',
        url: API + userUrl,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            data.items.forEach(item => {
                var content = document.getElementById('content');

                var newItem = "";
                // newItem += "<div class=\"\" id=\"item\"><a href=\"" + item.link + "\"><h1>" + item.title + "</h1></a>" + "<h4> from " + data.feed.title + "</h4>";
                // if (item.author != "")
                //     newItem += "<h4> By " + item.author + "</h4>";

                // newItem += "<h4>Published Date: " + item.pubDate + "</h4>";

                newItem += item.description + "<hr></div>";

                content.insertAdjacentHTML('beforeend', newItem);
            });
            $("a").each(function(){
                if(this.href.includes("t.me")){
                    this.href='javascript:void(0);';
                }
            })
        }
    });
});