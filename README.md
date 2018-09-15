# Google-Images-Api-replacment
get all you need from google image by just a simple javascript class that returne array of direct url's for your reseached query 

## <kbd>usage :</kbd>
     ```javascript
      var srch = require('Googleimg');
      srch.img("dogs").then((data) => {
      console.log(data);
      let x = document.createElement("IMG");
      x.setAttribute("src",data[55]);
      x.setAttribute("height",'480');
      x.setAttribute("width",'320');
      x.setAttribute("alt","none");
      document.querySelector('.input').appendChild(x);
    })
     ```
     >NB/ if you need more than the src you can search in the package for **res.images** variable and console it
