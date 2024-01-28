class CompNews extends HTMLElement {
  connectedCallback() {
    this.render();
    this.ambilDataFilmTerbaru();
  }

  async ambilDataFilmTerbaru() {
    try {
      const apiKey = "dcbe32390c7d6319acb086dc1a5c41c4";
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
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
        <a href="">
          <img src="${urlGambar}" alt="${judul}" class="mx-auto rounded-md shadow-sm shadow-black mb-2">
          <p class="text-center text-white">${judul}</p>
        </a>
      `;

      container.appendChild(elemenFilm);
    });
  }

  render() {
    this.innerHTML = `
      <section id="news">
        <div class="container mx-auto py-20">
          <div class="w-full flex justify-between items-center px-4 md:px-0">
            <h1 class="text-white text-3xl font-semibold">News</h1>
            <a href="" class="text-slate-200 text-base">See All</a>
          </div>
          <div class="row flex flex-wrap justify-center items-center py-10 mt-7"></div>
        </div>
      </section>
    `;
  }
}

customElements.define("comp-news", CompNews);
