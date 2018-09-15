//
// Copyright (c) 2018 by kmoz000 . All Rights Reserved.
//
  /**
     * Function for index of search
     *
     * @param  {string} query    search filed url
     * @return {Promise}        Returns a promise, with an array of found href's and innerHTML
     */
//
// Copyright (c) 2018 by kmoz000 . All Rights Reserved.
//
module.exports.img = (query) => {
        return new Promise((resolve, reject)=> {
            let host = 'aHR0cHM6Ly93d3cuZ29vZ2xlLmNvLm1hLw==';
            let term = query;
            let path = 'search?tbm=isch';
            let proxy = 'aHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20v'
            var oReq = new XMLHttpRequest();
            

            oReq.addEventListener("error", ()=>{
               reject(oReq.statusText)
              });
            oReq.open("GET",atob(proxy)+atob(host)+path+'&q='+encodeURIComponent(term));
         //   oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
         oReq.send();
         oReq.onreadystatechange = ()=>{
             let imgs = [];
            if(oReq.readyState == 4 && oReq.status == 200) {
                let parser = new DOMParser();
                let res = parser.parseFromString(oReq.response,"text/html");
               for (let i=25;i<99;i++){
                 imgs.push(res.images[i].dataset.src) 
               }
                resolve(imgs);
            }
        }
           
})
   }


