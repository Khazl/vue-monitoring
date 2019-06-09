// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home Dashboard': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('.title', 'Home')
      .assert.elementPresent(".container")
      .assert.attributeContains('.container', 'class', '--layout')
      .assert.cssProperty(".container", "display", "grid")
      .assert.elementCountGreater(".module", 1)
      .end();
  },
};
