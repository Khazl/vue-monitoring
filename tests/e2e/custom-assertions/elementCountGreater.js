exports.assertion = function elementCountGreater(selector, count) {
  this.message = `Testing if element <${selector}> has count: ${count} or more`;
  this.expected = count;
  this.pass = val => val >= count;
  this.value = res => res.value;
  function evaluator(_selector) {
    return document.querySelectorAll(_selector).length;
  }
  this.command = cb => this.api.execute(evaluator, [selector], cb);
};
