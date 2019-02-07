// use window.axio.get("[API URL"].then(( data) => {
// create your own variable and get the data name according to the data names on the API
// to check the API data names you can check it on the Console by having this 
/* var cardnum = dataLayer[0].user.card_number;
var userid = dataLayer[0].user.id;
$.get( "/api/v2/account/loyalty_data?user_id="+userid+"&loyalty_card_number="+cardnum, function( data ) {
console.log(data );
});*/

// sample coding for End of Year Summary

window.axios.get("/api/v2/account/loyalty_data?user_id="+userid+"&loyalty_card_number="+cardnum).then(( data ) => {
 //get current balance
  var currentbalance = data.data.data.attributes['points-since-user-membership'];
  //display current balance
 $( "div.dy-currentbalance" ).html(currentbalance);
 $( "div.dy-currentbalance2" ).html(currentbalance);
  //get points redeemed
  var pointsredeemed = data.data.data.attributes['points-redeemed-in-2018'];
  var pointsredeemed1 = pointsredeemed/23;
  var pointsredeemed2 = pointsredeemed/368;
  var pointsredeemed3 = pointsredeemed/1844;
  var pointsredeemed4 = pointsredeemed/6302;
  
  //points redeemed conditions
  if (pointsredeemed < 50) {
    $('.img1').attr('src','${img1-activenot}');
    $('.distance-value').hide();
    $('.nopointssection').css('display','block !important');
    $('.dy-places').css('opacity','0.3');
    $('.dy-points').css('opacity','0.3');
  }
  else if (pointsredeemed >=50 && pointsredeemed <= 399 ) { $('.img1').attr('src','${img1-active}'); $('.img2').attr('src','${img2-active}');$('.c2').attr('src','${circle-active}');
  
    $('.distance-value').html("... Sephora Ion Orchard to Sephora Causeway Point "+pointsredeemed1.toFixed()+" times!");
  }
  
  else if (pointsredeemed >=400 && pointsredeemed <= 1999 ) { $('.img1').attr('src','${img1-active}');$('.img2').attr('src','${img2-active}'); $('.img3').attr('src','${img3-active}');$('.c3').attr('src','${circle-active}');
  $('.distance-value').html("... Sephora Ion Orchard to Sephora KLCC "+pointsredeemed2.toFixed()+" times!");}
  
  else if (pointsredeemed >=2000 && pointsredeemed <= 6499 ) { $('.img1').attr('src','${img1-active}');$('.img2').attr('src','${img2-active}');$('.img3').attr('src','${img3-active}'); $('.img4').attr('src','${img4-active}');$('.c4').attr('src','${circle-active}');$('.distance-value').html("... Sephora Ion Orchard to Sephora Siam Center "+pointsredeemed3.toFixed()+" times!");}
  
  else if (pointsredeemed >=6500 && pointsredeemed <= 15999 ) { $('.img1').attr('src','${img1-active}');$('.img2').attr('src','${img2-active}');$('.img3').attr('src','${img3-active}');$('.img4').attr('src','${img4-active}'); $('.img5').attr('src','${img5-active}');$('.c5').attr('src','${circle-active}');$('.distance-value').html("... Sephora Ion Orchard to Sephora Pitt Street "+pointsredeemed4.toFixed()+" times!");}
  //get average
  var pointsearned = data.data.data.attributes['points-earned-in-2018'];
  var averagepercentage = (pointsredeemed/pointsearned)*100;
  
  if (pointsredeemed < 51 && currentbalance < 100) {
     $('.dy-percentpoints').html('<div><a href="/bestsellers"><img src="${nopoints}"/></a></div>');
   }
   
  if (averagepercentage >= 100) {
     $('.dy-percentpoints').hide();
     $('.dy-percentpoints2').css('display','block !important');
  }
  
  $( "div.dy-percentpointsval" ).html(averagepercentage.toFixed()+"%");
 
  
  //variant change conditions
  if (pointsredeemed > 350) {$('.dy-variant').attr('src','${atthetop}');}
  else if (pointsredeemed == 350) {$('.dy-variant').attr('src','${onyourway}');}
});
