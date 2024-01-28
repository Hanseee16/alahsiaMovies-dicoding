class CompNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.handleScroll();
  }

  handleScroll() {
    let lastScrollTop = 0;
    const navbar = this.querySelector(".fixed");
    const title = this.querySelector(".title a");
    const subTitle = this.querySelector(".title span");

    window.addEventListener("scroll", () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        navbar.classList.add("opacity-0", "lg:transform", "translate-y-[-100%]", "transition-transform", "ease-in-out", "duration-300");
        navbar.classList.remove("opacity-100", "lg:transform", "lg:translate-y-0");
      } else {
        navbar.classList.remove("opacity-0", "lg:transform", "translate-y-[-100%]");
        navbar.classList.add("opacity-100", "lg:transform", "lg:translate-y-0", "transition-transform", "ease-in-out", "duration-300");
      }

      lastScrollTop = currentScrollTop;

      if (currentScrollTop > 0) {
        navbar.classList.add("bg-dark", "shadow-sm", "shadow-black");
        title.classList.add("text-primary");
        subTitle.classList.add("text-white");
      } else {
        navbar.classList.remove("bg-dark", "shadow-sm", "shadow-black");
        title.classList.remove("text-primary");
        subTitle.classList.remove("text-white");
      }
    });
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="fixed w-full top-0 left-0 z-20">
      <div class="px-4 lg:container md:px-12 lg:mx-auto lg:px-0 lg:py-3">
        <div class="flex items-center justify-between">
          <div class="relative z-20 title text-white">
            <a href="#" class="text-2xl md:text-3xl font-bold">Alahsia<span class="font-extralight">Movies</span>.</a>
          </div>

          <!-- Hamburger menu -->
          <div class="flex items-center justify-end">
            <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden />
            <label for="hamburger" class="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden">
              <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>
              <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
            </label>

            <!-- Links -->
            <div class="fixed inset-0 w-[calc(100%)] translate-x-[-100%] bg-dark lg:bg-transparent shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:shadow-none">
              <div class="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                <ul class="space-y-8 px-6 pt-52 text-gray-300 md:px-0 lg:flex lg:space-x-12 lg:space-y-0 lg:pt-0 text-center">
                <li>
                <a href="#hero" class="group nav-link before:transition before:duration-200">
                  <span class="relative group-hover:text-white text-white font-semibold">Home</span>
                </a>
              </li>
                  <li>
                    <a
                      href="#trending"
                      class="group before:transition before:duration-200"
                    >
                      <span class="relative group-hover:text-white">Trending</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#genre"
                      class="group before:transition before:duration-200"
                    >
                      <span class="relative group-hover:text-white">Genre</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#news"
                      class="group before:transition before:duration-200"
                    >
                      <span class="relative group-hover:text-white">News</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#movies"
                      class="group before:transition before:duration-200"
                    >
                      <span class="relative group-hover:text-white">Movies</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tvshows"
                      class="group before:transition before:duration-200"
                    >
                      <span class="relative group-hover:text-white">TV Shows</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    `;
  }
}

customElements.define("comp-navbar", CompNavbar);
