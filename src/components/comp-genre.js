class CompGenre extends HTMLElement {
  connectedCallback() {
    this.render();
    this.ambilDataGenreFilm();
  }

  async ambilDataGenreFilm() {
    try {
      const apiKey = "dcbe32390c7d6319acb086dc1a5c41c4";

      // Ambil daftar genre
      const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      const genreData = await genreResponse.json();

      // Pilih salah satu genre (contoh: genre dengan id 28, Action)
      const genreId = 28;

      // Ambil film yang sedang trending berdasarkan genre
      const trendingResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc`);
      const trendingData = await trendingResponse.json();

      this.tampilkanFilm(trendingData.results);
    } catch (error) {
      console.error("Error saat mengambil data:", error);
    }
  }
  async ambilDataFGenreFilm() {
    try {
      const apiKey = "dcbe32390c7d6319acb086dc1a5c41c4";
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      const data = await response.json();

      this.tampilkanFilm(data.results);
    } catch (error) {
      console.error("Error saat mengambil data:", error);
    }
  }

  tampilkanFilm(daftarFilm) {
    const container = this.querySelector(".row");

    daftarFilm.forEach((film) => {
      const urlGambar = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
      const judul = film.title;

      const elemenFilm = document.createElement("div");
      elemenFilm.classList.add("w-1/2", "md:w-1/4", "lg:w-1/5", "px-5", "mb-10");

      elemenFilm.innerHTML = `
        <img src="${urlGambar}" alt="${judul}" class="mx-auto rounded-md shadow-sm shadow-black mb-2">
        <p class="text-center text-white">${judul}</p>
      `;

      container.appendChild(elemenFilm);
    });
  }

  render() {
    this.innerHTML = `
      <section id="genre">
        <div class="container mx-auto py-20">
          <div class="w-full flex justify-between items-center px-4 md:px-0">
            <h1 class="text-white text-3xl font-semibold">Genre</h1>
            <a href="" class="text-slate-200 text-base">See All</a>
          </div>
          <div class="row flex flex-wrap justify-center items-center py-10 mt-7"></div>
        </div>
      </section>
    `;
  }
}

customElements.define("comp-genre", CompGenre);
