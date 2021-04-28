var image = ["61zTGIEvQoL.jpg",
    "Father.jfif" , "mom.jfif" ,
    "brother.jfif",
   "Me.jpg"
      ];
      var familyname=["Family Book",
                      "Rupesh Sawant",
                       "Shrushti Sawant",
                        " Pranay Sawant",
                          "Rudra Sawant"];
  var i=0;
  function nextmove(){
    i++;
    var members=4;
    if (i>members){i=0;
    }

  document.getElementById("CD").src=image[i];
   document.getElementById("name").innerHTML=familyname[i];
  }