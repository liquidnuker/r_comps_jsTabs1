const jsTabs1 = (function () {
  let items = [];
  let activeTab = 0;

  function init(selector) {
    items = document.querySelectorAll(selector);
    loadTabContent("item1", 0);
    addEvents();
  }

  function addEvents() {
    NodeList.prototype.jsTabs1_EventListener = function (event, func) {
      this.forEach(function (content, item) {
      content.addEventListener(event, func);
      });
    };

    items.jsTabs1_EventListener("click", function (event) {
      let index = indexFinder(event.target);
      loadTabContent(event.target.innerHTML, index);
    });
  }

  function indexFinder(value) {
    for (var key = 0; key < items.length; key++) {
      // if (items[key].property == value) {
      if (items[key] == value) {
        return key;
      }
    }
  }

  function setActiveTab(index) {
    let activeItem = index;
    
    items[activeItem].className += " jsTabs1-01--active";
    items[activeItem].setAttribute("aria-selected", true);

    // remove activeTab
    if (activeTab !== activeItem) {
      items[activeTab].className = "jsTabs1-01";
      items[activeTab].setAttribute("aria-selected", false);

      // set current activeTab
      activeTab = activeItem;
    }
  }

  function loadTabContent(item, index) {
    setActiveTab(index);

    const jsonUrl = "js/ajax/" + item + ".json";
    document.getElementById("jsTabs1-01_content").innerHTML = jsonUrl;
  }

  return {
    // public
    init: init
  };
})();

export {jsTabs1};