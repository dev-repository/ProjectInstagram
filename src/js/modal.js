import '../css/modal.css';

export function modal() {
    let postContent = document.querySelector('.post-content');
    let modal = document.querySelector('.insta_modal');
    postContent.addEventListener('click', () => {
        modal.classList.add('open');
    })

    document.querySelector('.insta_modal').innerHTML = `<div class="modalBox">
    <div class="modal_main">
      <div class="modal_pic"><img class="post-content" src="./src/assets/img/pretty.jpeg" />
      </div>
      <div class="modal_content">
      <div class="modal_content_title">
      <div class="insta_id">
      <p class="sidebar-image-wrapper"><img class="post-content" src="./src/assets/img/pretty.jpeg" /></p><span>팔로우</span>
      </div><svg aria-label="More options" class="_8-yf5" fill="#262626" height="16" viewBox="0 0 48 48" width="16">
      <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
      <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
      <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
    </svg>
            </div>
      <div class="modal_content_m">
      <div class="modal_main_m"><p class="sidebar-image-wrapper"><img class="post-content" src="./src/assets/img/pretty.jpeg" /></p></div>
    
      </div>
      <div class="modal_cal"></div>
      </div>
    </div>
    <span class="modal_close">
      X
    </span>
  </div>
`
    let modalClose = document.querySelector('.modal_close');
    let modalMain = document.querySelector('.modalBox');
    let modal_content_m = document.querySelector('.modal_content_m');
    modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
    })
    let instaId = document.querySelectorAll('.post-comment-author').innerHTML;
    let instaComment = document.querySelectorAll('.post_Comment').innerHTML;
    let modalTitle = modalMain.querySelectorAll('.sidebar-image-wrapper');
    let modalMainM = document.querySelector('.modal_main_m');

    let postComment = document.querySelectorAll('.post-comment');
    postComment.forEach((item)=>{
        console.log(item);
        postComment.append(modalMainM);
    })
    // for(let i =0; i<postComment.length; i++){
    //     // console.log(instaComment[i]);
        console.log(instaId[i]);
        console.log(i)
    // }


}