function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "frank",
        }
    
      result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("foxtrot"));

  /** функция поиска в объекте */