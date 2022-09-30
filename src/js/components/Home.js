import { templates, select, classNames } from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
    const thisHome = this;

    thisHome.dom = {};

    thisHome.dom.wrapper = element;

    const generatedHTML = templates.homePage(thisHome.data);

    document.querySelector(select.containerOf.home).innerHTML = generatedHTML;

    thisHome.dom.links = thisHome.dom.wrapper.querySelectorAll(
      select.containerOf.homeLinks
    );
  }

  initWidgets(){
    const thisHome = this;

    for(let link of thisHome.dom.links){
      link.addEventListener('click', function(event){
        event.preventDefault();

        const hash = event.target.hash.replace('#', '');
        const currentLink = document.querySelector('.main-nav a[href="#home"]');
        const currentPageId = document.getElementById(select.containerOf.homeId);
        const newPageId = document.getElementById(hash);
        const newLink = document.querySelector(`.main-nav a[href="${event.target.hash}"]`);

        window.location.hash = `#/${hash}`;
        currentLink.classList.remove(classNames.nav.active);
        currentPageId.classList.remove(classNames.nav.active);
        newPageId.classList.add(classNames.pages.active);
        newLink.classList.add(classNames.pages.active);
      });
    }
  }
}

export default Home;