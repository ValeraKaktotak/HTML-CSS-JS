
function makeGetRequest(pageNumber, pageLimit, apiUrl){
    let promise = axios.get(`${apiUrl}?_page=${pageNumber}&_limit=${pageLimit}`);
    return promise.then(function (axios_response){
        return axios_response.data;
    });
     // let promise = fetch(`${apiUrl}?_page=${pageNumber}&_limit=${pageLimit}`);
     // return promise.then(response => response.json())
}

//api вымышленное
function makePostRequest(apiUrl){
    let promise = axios.post(apiUrl, {
        Column1: 'Mark'
    });
    return promise.then(function (axios_response){
        return axios_response.data;
    });
}
