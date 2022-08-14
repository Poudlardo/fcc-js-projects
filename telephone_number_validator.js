function telephoneCheck(str) {
    if (str.match(/^\d{3}\W\d{3}\W\d{4}$/) || str.match(/^\d{3}\W\d{3}\W\d{4}$/) || str.match(/^\d{10}$/) || str.match(/^1?\s?(\d{3})\s*-*\d{3}\s*-*\d{4}$/) || str.match(/^1?\s?\(\d{3}\)\s*-*\d{3}\s*-*\d{4}$/)) {
      return true;
    } else {
      return false;
    }
    }
    
    telephoneCheck("555-555-5555");