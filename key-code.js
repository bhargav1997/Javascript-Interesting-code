(function () {
    document.addEventListener("keypress", function (event) {
      console.log("Shift: " + event.shiftKey);
      console.log("CTRL: " + event.ctrlKey);
      console.log("Alt: " + event.altKey);
      console.log("Key Code: " + event.keyCode);
      console.log("Code: " + event.code);
      console.log("Key: " + event.key);
    });
})();
