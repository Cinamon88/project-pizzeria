import { templates, select } from "./settings.js";

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

  }

}

export default Home;