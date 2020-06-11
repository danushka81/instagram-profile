/* 
 * Author: Pubudu Danushka
 * Name:       instagram profile
 * Description:       get the instagram profile details for your web site
 * Version:           1.0.0
 * Author:            Pubudu Danushka

*/

function getInsprofile(id) {
  
  var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
  var validation = regex.test(id);

  if(validation) {
  
    $.get("https://www.instagram.com/"+id+"/?__a=1")
    .done(function(data) { 

      // getting the url
      var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
      var biography = data["graphql"]["user"]["biography"];
      var followedby = data["graphql"]["user"]['edge_followed_by']['count'];
      
      var follow = data["graphql"]['user']['edge_follow']['count'];
	  
	  /*
		id
		profile_pic_url
		biography
		external_url
		edge_followed_by
		edge_follow
		edge_owner_to_timeline_media
		profile_pic_url
		profile_pic_url_hd
	  */

      $("#instagram-profilr-img").attr("src",photoURL);
      $("#biography").text(biography);
      $("#followedby").text(followedby);
      $("#follow").text(follow);
      

     
     })
    .fail(function() { 
      alert('Your instagram username is invalid')
    })
  
  } else {
  
    alert('Your instagram username is invalid')
  }

}

$(document).ready(function() {
    getInsprofile("pubudu_d");
});