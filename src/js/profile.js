import { modal } from "./openMoal.js";
import { getLists } from "./getList.js";

const tabItem = document.querySelectorAll(".profile___a");
const tabContent = document.querySelectorAll(".profile__content_title");
const modalOpen = document.getElementById("modalOpen");

// modal open
modalOpen.innerHTML = modal();

tabItem.forEach((item) => {
    item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
    const tabTarget = item.currentTarget;
    const target = tabTarget.dataset.tab;
    tabItem.forEach((title) => {
        title.classList.remove("checked");
    });
    tabContent.forEach((target) => {
        target.classList.remove("checked");
    });
    document.querySelector("#" + target).classList.add("checked");
    tabTarget.classList.add("checked");
}

// 저장하기
function addList() {
    //model input
    const modelIpt = document.querySelector("#addContents");
    const addBtn = document.querySelector("#addButton");
    const message = document.querySelector(".notMessage");

    modelIpt.addEventListener("keyup", (e) => {
        if (e.target.value.trim().length) {
            addBtn.classList.add("active");
            message.classList.add('displayNone');
            return;
        }
    });
    addBtn.addEventListener("click", (e) => {
        const text = modelIpt.value;
        if (!text) return;

        const getList = getLists();
        getList.push(text);
        localStorage.setItem("Instargram", JSON.stringify(getList));

        modelIpt.value = "";

        function hideFunc() {
            const truck_modal = document.querySelector('#exampleModal');
            const modal = bootstrap.Modal.getInstance(truck_modal);    
            modal.hide();
        }
        hideFunc();
    });
}

addList();



