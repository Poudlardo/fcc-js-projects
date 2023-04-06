function rot13(str) {
    const rotted = {"N" : "A", "O" : "B", "P" : "C", "Q" : "D", "R" : "E", "S" : "F","T" : "G", "U" : "H", "V" : "I", "W" : "J", "X" : "K", "Y" : "L", "Z" : "M", "A" : "N", "B" : "O","C" : "P","D" : "Q","E" : "R","F" : "S","G" : "T","H" : "U","I" : "V","J" : "W","K" : "X","L" : "Y","M" : "Z", " " : " ", "." : ".", "!" : "!", "?" : "?"}
    const newStr = []
    for (var i = 0; i < str.length; i++) {
      if (rotted.hasOwnProperty(str[i])) {
        newStr.push(rotted[str[i]])
      }
    } 
    const reunited = newStr.join('')
    return reunited
    }
    
    rot13("SERR PBQR PNZC");
