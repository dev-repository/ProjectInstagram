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

    modelIpt.addEventListener("keyup", (e) => {
        console.log(`디버깅 TEST modelIpt ======> ${modelIpt}`);
        if (e.target.value.trim().length) {
            addBtn.classList.add("active");
            return;
        }
    });

    addBtn.addEventListener("click", (e) => {

        console.log(`디버깅 TEST addBtn ======> ${addBtn}`);

        const text = modelIpt.value;
        if (!text) return;

        const getList = getLists();
        console.log(`getList 디버깅 TEST ======> ${getList}`);
        getList.push(text);
        localStorage.setItem("Instargram", JSON.stringify(getList));

        const myModal = new bootstrap.Modal("#exampleModal");
        myModal.hide();
        
        modelIpt.value = "";
    });
}
addList();



