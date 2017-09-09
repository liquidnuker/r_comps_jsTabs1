class JsTabs1 {
  constructor(opts) {
    this.activeTab = opts.startTab;
    this.tabItems = opts.tabItems;
    this.startTab = opts.startTab;

    this.activeTabClass = opts.activeTabClass;
    this.normalTabClass = opts.normalTabClass;
    this.tabContentHolder = opts.tabContentHolder;
  }

  init() {
    this.items = document.querySelectorAll(this.tabItems);
    this.loadTabContent(this.items[this.startTab].innerHTML, this.startTab);
    this.addEvents();
  }

  addEvents() {
    let tabArr = Array.prototype.slice.call(this.items);

    let self = this;
    tabArr.forEach(function (i, index) {
      i.addEventListener("click", function () {
        self.loadTabContent(i.innerHTML, index);
      });
    });
  }

  setActiveTab(index) {
    let activeItem = index;
    let items = this.items;
    let activeTab = this.activeTab;

    items[activeItem].className += this.activeTabClass;
    items[activeItem].setAttribute("aria-selected", true);

    // remove activeTab
    if (activeTab !== activeItem) {
      items[activeTab].className = this.normalTabClass;
      items[activeTab].setAttribute("aria-selected", false);

      // set current activeTab
      this.activeTab = activeItem;
    }
  }

  // loadTabContent method#1
  loadTabContent(item, index) {
    this.setActiveTab(index);
    const jsonUrl = "js/ajax/" + item + ".json";
    document.getElementById(this.tabContentHolder).textContent = jsonUrl;
  }
}

let JT1 = new JsTabs1({
  tabItems: ".jsTabs1-01 > li",
  startTab: 0, // default starting tab
  activeTabClass: " jsTabs1-01--active",
  normalTabClass: "jsTabs1-01",
  tabContentHolder: "jsTabs1-01_content"
});

JT1.init();