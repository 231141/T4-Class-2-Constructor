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
  
  // API request setup
  const myHeaders = new Headers();
  myHeaders.append("x-apihub-key", "y4LJ3aK6dZDzq4KDRGwnHJkZoon7XP313Rx2HKD9u8jTNxKSKh");
  myHeaders.append("x-apihub-host", "AnimeList-API.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "10b0d633-40f8-43ee-af7f-812833c933a1");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  // Fetch two animes, one for Slice of Life and one for Shonen
  const fetchAnimeData = (query) => {
    return fetch(`https://AnimeList-API.proxy-production.allthingsdev.co/v4/anime?q=${query}`, requestOptions)
      .then((response) => response.json())  // Parse as JSON
      .then((result) => {
        // Return the first anime found in the API response
        if (result && result.data && result.data.length > 0) {
          const anime = result.data[0];
          return { title: anime.title, year: anime.year || anime.start_date.split('-')[0] }; // Use 'year' or extract year from date
        }
        throw new Error("Anime not found");
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  };
  
  // Create objects based on API data
  Promise.all([fetchAnimeData("Naruto"), fetchAnimeData("Clannad")])  // One Shonen, one Slice of Life anime
    .then((animeData) => {
      const [shonenAnimeData, sliceOfLifeAnimeData] = animeData;
  
      if (shonenAnimeData) {
        let shonenAnime = new Shonen(shonenAnimeData.title, shonenAnimeData.year);
        shonenAnime.describe();
      }
  
      if (sliceOfLifeAnimeData) {
        let sliceOfLifeAnime = new SliceOfLife(sliceOfLifeAnimeData.title, sliceOfLifeAnimeData.year);
        sliceOfLifeAnime.describe();
      }
    });