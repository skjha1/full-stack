function get_req(theUrl)
{
    console.log("test0");
    var xmlHttp = new XMLHttpRequest();
    console.log("test1");
    xmlHttp.open("GET", theUrl, false);
    console.log("test2");
    xmlHttp.send(null);
    console.log("test3");
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}
var table_data = JSON.parse(get_req("https://aniketroy03.github.io/json-testing/invoice.json"));
