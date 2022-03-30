import $ from 'jquery';

$(function(){
    var len = 28; // 超過28個字以"..."取代
    $(".BoxTitle").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});