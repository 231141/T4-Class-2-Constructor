// Main Anime class
class Anime {
    constructor(title, year, genre) {
      this.title = title;
      this.year = year;
      this.genre = genre;
    }
  
    describe() {
      console.log(`"${this.title}" is a ${this.genre} anime, released in ${this.year}.`);
    }
  }
  
  // Subclass: Slice of Life genre
  class SliceOfLife extends Anime {
    constructor(title, year) {
      super(title, year);
      this.genre = "Slice of Life";
    }
  }
  
  // Subclass: Shonen genre
  class Shonen extends Anime {
    constructor(title, year) {
      super(title, year);
      this.genre = "Shonen";
    }
  }
  
  // Creating anime instances for different genres
  let anime1 = new SliceOfLife("A Quiet Day", 2020);
  let anime2 = new Shonen("Naruto", 2002);
  
  // Describing the anime
  anime1.describe();
  anime2.describe();
  