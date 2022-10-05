
export function sidebar() {
    document.querySelector('#sidebar').innerHTML = `
    <div class="sidebar-user">
    <div class="sidebar-user-image-wrapper">
      <img class="sidebar-image" src="./src/assets/img/pretty.jpeg" />
    </div>
    <div class="sidebar-owner-wrapper">
      <a href="#" class="sidebar-owner-name">Cavdy</a>
      <span class="sidebar-owner-other">cavdy</span>
    </div>
  </div>
  <div class="stories">
    <header class="stories-header">
      <span class="stories-header-title">Stories</span>
      <a class="stories-header-link" href="#">Watch All</a>
    </header>
    <div class="stories-wrapper">
      <div class="sidebar-image-wrapper">
        <img class="sidebar-image" src="./src/assets/img/pretty.jpeg" />
      </div>
      <div class="sidebar-owner-wrapper">
        <a href="#" class="sidebar-owner-name">Cavdy</a>
        <span class="sidebar-owner-other">3 HOURS AGO</span>
      </div>
    </div>
  </div>
  <div class="suggested">
    <header class="suggested-header">
      <span class="suggested-header-title">Suggestions For You</span>
      <a class="suggested-header-link" href="#">See All</a>
    </header>
    <div class="suggested-wrapper">
      <div class="sidebar-image-wrapper">
        <img class="sidebar-image" src="./src/assets/img/pretty.jpeg" />
      </div>
      <div class="sidebar-owner-wrapper">
        <a href="#" class="sidebar-owner-name">Cavdy</a>
        <span class="sidebar-owner-other">Friend on Facebook</span>
      </div>
      <a href="#">Follow</a>
    </div>
  </div>
    `
}