import axios from "axios";

class CompUpComing extends HTMLElement {
  connectedCallback() {
    this.render();
    this.ambilDataFilmUpComing();
  }

  async ambilDataFilmUpComing() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2JlMzIzOTBjN2Q2MzE5YWNiMDg2ZGMxYTVjNDFjNCIsInN1YiI6IjY1NjQ3N2UwMzY3OWExMDk3NjQ4NjQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G7JHwBUBjccWaGHKFW9lJ6gg6J5-R_YC7KzCOhu9frI",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
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
      <section id="upcoming">
        <div class="container mx-auto py-20">
          <div class="w-full flex justify-between items-center px-4 md:px-0">
            <h1 class="text-white text-2xl md:text-3xl font-semibold">Up Coming</h1>
            <a href="" class="text-slate-200 text-base">See All</a>
          </div>
          <div class="row flex flex-wrap justify-center items-center py-10 mt-7"></div>
        </div>
      </section>
    `;
  }
}

customElements.define("comp-upcoming", CompUpComing);
