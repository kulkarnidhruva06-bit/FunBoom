fetch("https://api.countagpi.xyz/hit/creativityforall.fun/kulkarnidhruva06-bit's Workspace")
  .then(function(res){ return res.json(); })
  .then(function(data){
    document.getElementById("visitorCount").textContent =
      data.value.toLocaleString() + " visitors";
  })
  .catch(function(){});