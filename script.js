let searchBtn = document.getElementById('searchBtn');
let searchCon = document.querySelector('.inputBox');
searchBtn.addEventListener('click', () =>{
  searchCon.classList.toggle('active');
})

let header = document.getElementsByTagName('header')[0];
let headerTitle = document.getElementById('header_title');
let headerText = document.getElementById('header_text');
let headerBtn = document.getElementById('header_btn');
let sliderBtn = document.getElementsByClassName('slider_btn');
let titleSpan = document.getElementById('title_span');
let linkBtn = document.getElementById('link_btn');
const sliderLoad = () => {
  setTimeout(() => {
    titleSpan.style.background = "rgb(4, 164, 244)";
    header.style.background = "url('images/bible-study.jpg')no-repeat center center/cover";
    headerTitle.innerText = "bible studies";
    headerTitle.style.color = "rgb(4,164,244)";
    headerText.innerText = "The theology of the Seventh-day Adventist Church resembles early Protestant Christianity, combining elements from Lutheran, Wesleyan-Arminian, and Anabaptist branches of Protestantism. Adventists believe in the infallibility of the Scripture's teaching regarding salvation, which comes from grace through faith in Jesus Christ. The 28 fundamental beliefs constitute the church's current doctrinal positions, but they are revisable under the guidance of the Holy Spirit, and are not a creed.";
    headerText.style.background = "rgb(4,164,244)";
    headerBtn.innerHTML = '<button>start now<i class="bx bx-chevron-right"></i></button>';
    linkBtn.style.background = "rgb(4,164,244)";
    sliderBtn[0].style.background = "rgb(4, 164, 244)";
    sliderBtn[1].style.background = "#fff";
    sliderBtn[2].style.background = "#fff";
    sliderBtn[3].style.background = "#fff";
  }, 0000);
  
  setTimeout(() => {
    titleSpan.style.background = "brown";
    header.style.background = "url('images/Baby_dedication.jpg')no-repeat center center/cover";
    headerTitle.innerText = "baby dedication";
    headerTitle.style.color = "brown";
    headerText.innerText = "The Adventist Church doesn’t have a required age, minimum or maximum, at which babies can or must be dedicated. It’s up to the parents when they feel ready. Most Christian parents choose to dedicate their babies within the first year after they’re born, with an estimated average age of between 4 and 8 months old.  However, this may not be the case for every family...";
    headerText.style.background = "brown";
    headerBtn.innerHTML = '<a href="#"><button>read more<i class="bx bx-chevron-right"></i></button></a>';
    linkBtn.style.background = "brown";
    sliderBtn[0].style.background = "#fff";
    sliderBtn[1].style.background = "brown";
    sliderBtn[2].style.background = "#fff";
    sliderBtn[3].style.background = "#fff";
  }, 10000);
  
  setTimeout(() => {
    titleSpan.style.background = "red";
    header.style.background = "url('images/discuss_bible.jpg')no-repeat center center/cover";
    headerTitle.innerText = "bible discussions";
    headerTitle.style.color = "red";
    headerText.innerText = 'Much of the theology of the Seventh-day Adventist Church corresponds to common evangelical Christian teachings, such as the Trinity and the infallibility of Scripture. Distinctive eschatological teachings include the unconscious state of the dead and the doctrine of an investigative judgment. The church emphasizes diet and health, including adhering to Jewish dietary law, advocating vegetarianism, and its holistic view of human nature.';
    headerText.style.background = "red";
    headerBtn.innerHTML = '<a href="#"><button>start now<i class="bx bx-chevron-right"></i></button></a>';
    linkBtn.style.background = "red";
    sliderBtn[0].style.background = "#fff";
    sliderBtn[1].style.background = "#fff";
    sliderBtn[2].style.background = "red";
    sliderBtn[3].style.background = "#fff";
  }, 20000);
  
  setTimeout(() => {
    titleSpan.style.background = "green";
    header.style.background = "url('images/Adventist_baptism.jpg')no-repeat center center/cover";
    headerTitle.innerText = "baptism";
    headerTitle.style.color = "green";
    headerText.innerText = 'Seventh-day Adventists believe and practice the biblical custom of baptism by immersion, in a similar way that Jesus Christ was baptized by John the Baptist. This motion of immersion symbolizes Christ’s death and resurrection, which provides the forgiveness of our sins. By going through this symbolic act, we proclaim to accept Christ’s sacrifice and acknowledge Him as our Savior.';
    headerText.style.color = "#ffffffc";
    headerText.style.background = "green";
    headerBtn.innerHTML = '<a href="#"><button>read more<i class="bx bx-chevron-right"></i></button></a>';
    linkBtn.style.background = "green";
    sliderBtn[0].style.background = "#fff";
    sliderBtn[1].style.background = "#fff";
    sliderBtn[2].style.background = "#fff";
    sliderBtn[3].style.background = "green";
  }, 30000);
}
setInterval(sliderLoad, 40000)
sliderLoad();

let navBar = document.getElementById('navBar');
window.onscroll = () =>{
  navBar.classList.toggle('sticky', window.scrollY > 1)
}