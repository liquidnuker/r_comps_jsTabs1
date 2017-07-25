const jsTabs1 = {
  items: [],
  activeTab: 0,
  init: function(elmSel) {
    this.items = document.querySelectorAll(elmSel);
    this.loadTabContent("item1", 0);
    this.addEvents();
  },
  indexFinder: function(value) {
    let items = this.items;
    for (var key = 0; key < items.length; key++) {
      // if (items[key].property == value) {
      if (items[key] == value) {
        return key;
      }
    }
  },
  addEvents: function() {
    let items = this.items;
    NodeList.prototype.jsTabs1_EventListener = function (event, func) {
      this.forEach(function (content, item) {
      content.addEventListener(event, func);
      });
    }

    items.jsTabs1_EventListener("click", function (event) {
      let index = jsTabs1.indexFinder(event.target);
      jsTabs1.loadTabContent(event.target.innerHTML, index);
    });
  },
  setActiveTab: function(index) {
    let activeItem = index;
    let activeTab = this.activeTab;
    let items = this.items;

    items[activeItem].className += " jsTabs1-01--active";
    items[activeItem].setAttribute("aria-selected", true);

    // remove activeTab
    if (activeTab !== activeItem) {
      items[activeTab].className = "jsTabs1-01";
      items[activeTab].setAttribute("aria-selected", false);

      // set current activeTab
      this.activeTab = activeItem;
    }
  },
  loadTabContent: function(item, index) {
    this.setActiveTab(index);
  
    const jsonUrl = "js/ajax/" + item + ".json";
    document.getElementById("jsTabs1-01_content").innerHTML = jsonUrl;
  }
}

jsTabs1.init(".jsTabs1-01 > li");