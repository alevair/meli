function mkurl(url) {
    let server = "https://api.mercadolibre.com";
    return server + "/" +  url;
}

function get(url) {
    return  new Promise( function(resolve, reject) {

        fetch(mkurl(url))
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
  }

  export default get;