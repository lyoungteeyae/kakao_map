"use strict";
$(function(){
  // #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  // 해당 메뉴에 on class 추가하시오.
  // let currentHref = $(location).attr("href").split("/");
  // currentHref = currentHref[currentHref.length-1].split(".");
  // currentHref = currentHref[0];
  // console.log(currentHref);
  function nameFunc(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  }
  let currentHref = nameFunc($(location))
  $("#lnb a").each(function(){
    if(nameFunc($(this)) == currentHref){
      $(this).addClass("on")
    }
  })
  $(".accordion dd:not(:first)").css("display","none").css("height",0);
    $(".accordion dl dt").click(function(){
      let thisElem = $(this)
      let isAni = $(".accordion dd").is(":animated")
      if(!isAni){
        if($("+dd",thisElem).css("display") == "none"){
          $("dd").each(function(){
            $(this).animate({height: 0},function(){
              $(this).css("display","none")
              $("+dd",thisElem).css("display","block").animate({ height: 300})
            })
          })
        }
      }
    })
})
