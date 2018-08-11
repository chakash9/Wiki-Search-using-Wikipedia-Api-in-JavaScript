

var displayWikipediaData=function()
{


var searchtext=$("#searchtext").val();

var wikipediaUrl="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchtext+"&format=json&callback=wikiCallback";

var linkelement=$("#links")

$.ajax(
{
	url:wikipediaUrl,
	dataType:"jsonp",
	jsonp:"callback",
    success:function(res)
	{	
		console.log(res);

		var lists=res[1];
		lists.forEach(function(item)
		{
			var listurl="https://en.wikipedia.org/wiki/"+item;

			 linkelement.append('<li><a href="'+listurl+'">'+item+'</a></li>');

		}

		)
	}

});

return false;
};


$("#form").submit(displayWikipediaData);
