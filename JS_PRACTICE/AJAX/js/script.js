let clickButton = document.querySelector('#click_me');
let clickPostButton = document.querySelector('#click_me_post');
let pageNumber = document.querySelector('#page_number');
let pageLimit = document.querySelector('#page_limit');
let queryInfo = document.querySelector('.query_info');
let apiUrl = 'https://api-generator.retool.com/47ITxJ/data';
let apiUrlPost = 'https://api-generator.retool.com/47ITxJ/data';

clickButton.addEventListener('click', () => {
    let promise = makeGetRequest(pageNumber.value, pageLimit.value, apiUrl);
    promise.then(data => {
        queryInfo.innerHTML = '';
        data.forEach(element => {
            let myDiv = document.createElement('div');
            myDiv.textContent = element.Column1;
            queryInfo.append(myDiv);
        });
    });
});

clickPostButton.addEventListener('click', () => {
    let promise = makePostRequest(apiUrlPost);
    promise.then(data => {
        alert(`Ваша запись ${data.id} добавлена`);
    });
});
//-------------------------------async await--------------------------------------------------------
let testUrl = 'https://jsonplaceholder.typicode.com/todos';
const delay = sec =>{
    return new Promise(r => {
        let randomTime = Math.random()*sec*1000;
        setTimeout(()=>r(), randomTime)
    });
}
//--------------------------------1st variant(promises)---------------------------------------------
// function fetchToDo(url, sec) {
//     return delay(sec)
//     .then(() => fetch(url))
//     .then(fetchData => fetchData.json())
// }
// fetchToDo(testUrl, 2).then(data => console.log(data))
//-----------------------------------2nd variant(async await)----------------------------------
async function fetchToDo(url, sec) {
    await delay(sec);
    let fetchData = await fetch(testUrl);
    let jsonData = await fetchData.json()
    return jsonData;
}
fetchToDo(testUrl, 2).then(data => console.log(data));
//-----------------------------------promises----------------------------------

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = {
//             name: 'Valera',
//             title: 'loh'
//         }
//         resolve(data);
//     }, 2000)
// })
//
// p.then(data => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.title = 'lenivui loh';
//             reject(data);
//         }, 2000)
//     }).catch(lastData => console.log(lastData))
// })

