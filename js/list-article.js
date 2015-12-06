/**
 * Created by pjl on 15/12/6.
 */
$(function(){
   $('.rnav ul li').each(function(idx){
       $(this).addClass('rnav'+(idx%6+1));
   });
});