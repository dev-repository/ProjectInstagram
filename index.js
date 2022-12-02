import { navbar } from './src/js/navbar.js';
import { getLists } from './src/js/getList.js';
import { newItem } from './src/js/newItems.js';



navbar();

function showList(){
    let listPost = getLists();

    const Html = listPost
    .map((text, index) => {
        return newItem(text, index);
    })
    .join("");

    const listShow = document.querySelector('.posts');
    listShow.innerHTML = Html;

}

showList();

