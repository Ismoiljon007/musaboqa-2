async function getAPi() {
  const res = await fetch("https://api.github.com/users/octocat");
  const data = await res.json();
  console.log(data);
  document.querySelector(".card").innerHTML = `
  <div class="card-inner">
                <div class="card-left">
                    <img src="${data?.avatar_url}" alt="">
                </div>
                <div class="card-right">
                    <div class="card-right__header">
                        <h2 class="card-title">${data?.name}</h2>
                        <div class="date">${data?.created_at}</div>
                    </div>
                    <a href="${data?.url}" class="card-email" target="_blank">${data?.email ? data?.email : 'not have email'}</a>
                    <p class="card-desc">${data?.bio ? data?.bio : 'This profile has no bio'}</p>
                    <ul class="card-info">
                        <li>
                            <h4 class="card-info__title">Repos</h4>
                            <h5 class="card-info__number">${data?.public_repos}</h5>
                        </li>
                        <li>
                            <h4 class="card-info__title">Followers</h4>
                            <h5 class="card-info__number">${data?.followers}</h5>
                        </li>
                        <li>
                            <h4 class="card-info__title">Following</h4>
                            <h5 class="card-info__number">${data?.following}</h5>
                        </li>
                    </ul>
                    <ul class="card-wrapper">
                        <li>
                            <img src="./location-img.svg" alt="">
                            <h4 class="card-location">${data?.location}</h4>
                        </li>
                        <li>
                            <a href="#" class="twitter">
                                <img src="./twitter.svg" alt="">
                                <h4 class="card-location">${data?.twitter_username ? data?.twitter_username : 'Not Available'}</h4>
                            </a>
                        </li>
                        <li>
                            <a href="${data?.blog}">
                                <img src="./url-img.svg" alt="">
                                <h4 class="card-location">${data?.blog}</h4>
                            </a>
                        </li>
                        <li>
                            <a href="${data?.company}">
                                <img src="./office-building.svg" alt="">
                                <h4 class="card-location">${data?.company}</h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
  `;
}
getAPi();

const form = document.querySelector('.form')
const input = document.querySelector('.search-input')
form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const res = await fetch(`https://api.github.com/users/${input.value}`);
  const data = await res.json();
  console.log(data);
  if(!data?.message) {
      document.querySelector(".card").innerHTML = `
    <div class="card-inner">
                  <div class="card-left">
                      <img src="${data?.avatar_url}" alt="">
                  </div>
                  <div class="card-right">
                      <div class="card-right__header">
                          <h2 class="card-title">${data?.name}</h2>
                          <div class="date">${data?.created_at}</div>
                      </div>
                      <a href="${data?.url}" class="card-email" target="_blank">${data?.email ? data?.email : 'not have email'}</a>
                      <ul class="card-info">
                          <li>
                              <h4 class="card-info__title">Repos</h4>
                              <h5 class="card-info__number">${data?.public_repos}</h5>
                          </li>
                          <li>
                              <h4 class="card-info__title">Followers</h4>
                              <h5 class="card-info__number">${data?.followers}</h5>
                          </li>
                          <li>
                              <h4 class="card-info__title">Following</h4>
                              <h5 class="card-info__number">${data?.following}</h5>
                          </li>
                      </ul>
                      <ul class="card-wrapper">
                          <li>
                              <img src="./location-img.svg" alt="">
                              <h4 class="card-location">${data?.location}</h4>
                          </li>
                          <li>
                              <a href="#" class="twitter">
                                  <img src="./twitter.svg" alt="">
                                  <h4 class="card-location">${data?.twitter_username ? data?.twitter_username : 'Not Available'}</h4>
                              </a>
                          </li>
                          <li>
                              <a href="${data?.blog}">
                                  <img src="./url-img.svg" alt="">
                                  <h4 class="card-location">${data?.blog}</h4>
                              </a>
                          </li>
                          <li>
                              <a href="${data?.company}">
                                  <img src="./office-building.svg" alt="">
                                  <h4 class="card-location">${data?.company}</h4>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
    `;
  } else{
    document.querySelector('.no-result').style.display = 'block'
    setTimeout(()=>{
        document.querySelector('.no-result').style.display = 'none'
        input.value = ''
    },3000)
  }
})

const darkmode = document.querySelector(".dark-mode");
const darkModeText = document.querySelector('.dark-mode-text')
darkmode.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  if(document.querySelector("body").classList.contains('dark')) {
    darkModeText.textContent = 'LIGHT'
    document.querySelector('.dark-mode-img').src = './sun.svg'
  } else {
    darkModeText.textContent = 'DARK'
    document.querySelector('.dark-mode-img').src = './moon.svg'
  }
});
