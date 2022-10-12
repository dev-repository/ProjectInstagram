const tabItem = document.querySelectorAll(".profile___a");
const tabContent = document.querySelectorAll(".profile__content_title");

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