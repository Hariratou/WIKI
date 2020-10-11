$(document).ready(function() {
  $("button").click(function(){
    var harira = $("#motCle").val();  
    var adresse="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+harira;    
  
    $.getJSON(adresse).done(function( seul ) { 
      var html="";
        for(var i=0;i <seul[1].length;i++)
          {            
            html+="<a href='"+seul[3][i]+"' target='blank'><div class='box'>"+"<h1>"+seul[1][i]+"</h1>"+"<p>"+seul[2][i]+"</p></a>";                
          }
      $("#resultat").html(html);
    
  })


  .fail(function( jqxhr, textStatus, error ) {
    var ha = textStatus + ", " + ha;
    console.log( "Request Failed: " + ha );


      
        });
    });
});