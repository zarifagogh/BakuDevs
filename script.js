const section_signup =  document.querySelector('.section-signup');
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.item');
    filterButtons.forEach(button => {
      
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  function showCourses() {
    window.location.href = 'courses.html';
  }
  function showLogin() {
    window.location.href = 'login.html';
  }
  function showSignup() {
    window.location.href = 'signup.html';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const dropDownButton = document.getElementById('dropDownButton');
    const closeButton = document.getElementById('closeButton');
    const dropDownPage = document.getElementById('dropDownPage');
  
    dropDownButton.addEventListener('click', () => {
      dropDownPage.classList.add('open');
    });
  
    closeButton.addEventListener('click', () => {
      dropDownPage.classList.remove('open');
    });
  });
  

  function signup() {
    section_signup.innerHTML= `
    <div class="container" style="margin-bottom:200px ; ">
            <h1 >Welcome to <span style="color: rgba(0, 141, 150, 1 );"> BakuDevs </span> </h1>
            </div >
    `
    
  }





  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const closeBtn = document.querySelector('.close-btn');
  
    document.querySelectorAll('.play-btn').forEach(button => {
      button.addEventListener('click', function () {
        const item = button.closest('.item');
        const videoSrc = item.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.pause();
      videoPlayer.src = 'https://youtu.be/NOfUCMzBNVg?si=g8tzcb8NA1FDScFF';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = 'https://youtu.be/NOfUCMzBNVg?si=g8tzcb8NA1FDScFF';
      }
    });
  });
  