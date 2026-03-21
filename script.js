fetch("https://api.countapi.xyz/hit/creativityforall.fun/visits")
  .then(function(res){ return res.json(); })
  .then(function(data){
    document.getElementById("visitorCount").textContent =
      data.value.toLocaleString() + " visitors";
  })
  .catch(function(){});