$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#3c4177','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      $('.header .navbar ul li a').css({'color':'#fff'});
      $('.header .logo').css({'color':'#fff'});
      $('.header .logo i').css({'color':'#fff'});
      $('.header .navbar ul li a').css({'color':'#fff'});
      $('.header .fa-bars').css({'color':'#fff'});
    }else{/*
      $('.header').css({'background':'#7365df;','box-shadow':'none'});
    */}
  });


  $('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });



});

//Animacion del Titulo principal

function violeta(textoPrincipal){
  textoPrincipal.style.color = '#5865f2';
}
function blanco(textoPrincipal){
  textoPrincipal.style.color = '#fff';
}


  // Preloader

  var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
      loader.style.display = "none";
      
  })

  /*Aos */

  AOS.init();


  /* EFECTO DEL CURSOR */
        //Cursor burbujas
        // <![CDATA[
          var colours=new Array("blue"); 
          var bubbles=70; 
          var x=ox=400;
          var y=oy=300;
          var swide=800;
          var shigh=600;
          var sleft=sdown=0;
          var bubb=new Array();
          var bubbx=new Array();
          var bubby=new Array();
          var bubbs=new Array();

          window.onload=function() { if (document.getElementById) {
          var rats, div;
          for (var i=0; i<bubbles; i++) {
          rats=createDiv("3px", "3px");
          rats.style.visibility="hidden";

          div=createDiv("auto", "auto");
          rats.appendChild(div);
          div=div.style;
          div.top="1px";
          div.left="0px";
          div.bottom="1px";
          div.right="0px";
          div.borderLeft="1px solid "+colours[3];
          div.borderRight="1px solid "+colours[1];

          div=createDiv("auto", "auto");
          rats.appendChild(div);
          div=div.style;
          div.top="0px";
          div.left="1px";
          div.right="1px";
          div.bottom="0px"
          div.borderTop="1px solid "+colours[0];
          div.borderBottom="1px solid "+colours[2];

          div=createDiv("auto", "auto");
          rats.appendChild(div);
          div=div.style;
          div.left="1px";
          div.right="1px";
          div.bottom="1px";
          div.top="1px";
          div.backgroundColor=colours[4];
          if (navigator.appName=="Microsoft Internet Explorer") div.filter="alpha(opacity=50)";
          else div.opacity=0.5;
          document.body.appendChild(rats);
          bubb[i]=rats.style;
          }
          set_scroll();
          set_width();
          bubble();
          }}

          function bubble() {
          var c;
          if (x!=ox || y!=oy) {
          ox=x;
          oy=y;
          for (c=0; c<bubbles; c++) if (!bubby[c]) {
          bubb[c].left=(bubbx[c]=x)+"px";
          bubb[c].top=(bubby[c]=y)+"px";
          bubb[c].width="3px";
          bubb[c].height="3px"
          bubb[c].visibility="visible";
          bubbs[c]=3;
          break;
          }
          }
          for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
          setTimeout("bubble()", 40);
          }

          function update_bubb(i) {
          if (bubby[i]) {
          bubby[i]-=bubbs[i]/2+i%2;
          bubbx[i]+=(i%5-2)/5;
          if (bubby[i]>sdown && bubbx[i]>0) {
          if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8) {
          bubb[i].width=bubbs[i]+"px";
          bubb[i].height=bubbs[i]+"px";
          }
          bubb[i].top=bubby[i]+"px";
          bubb[i].left=bubbx[i]+"px";
          }
          else {
          bubb[i].visibility="hidden";
          bubby[i]=0;
          return;
          }
          }
          }

          document.onmousemove=mouse;
          function mouse(e) {
          set_scroll();
          y=(e)?e.pageY:event.y+sleft;
          x=(e)?e.pageX:event.x+sdown;
          }

          window.onresize=set_width;
          function set_width() {
          var sw_min=999999;
          var sh_min=999999;
          if (document.documentElement && document.documentElement.clientWidth) {
          if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
          if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
          }
          if (typeof(self.innerWidth)!="undefined" && self.innerWidth) {
          if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
          if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
          }
          if (document.body.clientWidth) {
          if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
          if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
          }
          if (sw_min==999999 || sh_min==999999) {
          sw_min=800;
          sh_min=600;
          }
          swide=sw_min;
          shigh=sh_min;
          }

          window.onscroll=set_scroll;
          function set_scroll() {
          if (typeof(self.pageYOffset)=="number") {
          sdown=self.pageYOffset;
          sleft=self.pageXOffset;
          }
          else if (document.body.scrollTop || document.body.scrollLeft) {
          sdown=document.body.scrollTop;
          sleft=document.body.scrollLeft;
          }
          else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
          sleft=document.documentElement.scrollLeft;
          sdown=document.documentElement.scrollTop;
          }
          else {
          sdown=0;
          sleft=0;
          }
          }

          function createDiv(height, width) {
          var div=document.createElement("div");
          div.style.position="absolute";
          div.style.height=height;
          div.style.width=width;
          div.style.overflow="hidden";
          return (div);
          }
// ]]>