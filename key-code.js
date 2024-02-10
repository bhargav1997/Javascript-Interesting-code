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

/* 

Here's a list of common key press events that you can handle in JavaScript along with their key codes:

1. **keydown**: Fired when a key is pressed down.
2. **keyup**: Fired when a key is released.
3. **keypress**: Fired when a key that produces a character value is pressed down.

Here's a more comprehensive list of key codes for some commonly used keys:

- **Alphabetic Characters (A-Z, a-z)**: 65-90 (uppercase) and 97-122 (lowercase)
- **Numeric Characters (0-9)**: 48-57
- **Function Keys (F1-F12)**: 112-123
- **Arrow Keys**: 
  - Up Arrow: 38
  - Down Arrow: 40
  - Left Arrow: 37
  - Right Arrow: 39
- **Special Keys**:
  - Enter/Return: 13
  - Escape: 27
  - Tab: 9
  - Spacebar: 32
  - Backspace: 8
  - Shift: 16
  - Control (Ctrl): 17
  - Alt: 18
  - Caps Lock: 20
  - Windows Key (Left): 91
  - Windows Key (Right): 92
  - Windows Menu Key: 93
- **Modifier Keys**:
  - Shift: 16
  - Control (Ctrl): 17
  - Alt: 18
  - Command (Mac): 91 (Left Command), 93 (Right Command)
  - Option (Mac): 18
- **Others**:
  - Insert: 45
  - Delete: 46
  - Page Up: 33
  - Page Down: 34
  - Home: 36
  - End: 35
  - Scroll Lock: 145
  - Num Lock: 144
  - Print Screen: 44
*/
