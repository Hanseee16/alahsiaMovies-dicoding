class CompNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="fixed w-full top-0 left-0 z-20 border-b bg-white">
      <div class="px-6 lg:container md:px-12 lg:mx-auto lg:px-6 lg:py-3">
        <div class="flex items-center justify-between">
          <div class="relative z-20">
            <a href="#" class="text-3xl font-semibold">Find<span>Movies</span>.</a>
          </div>

          <!-- Hamburger menu -->
          <div class="flex items-center justify-end border-l lg:border-l-0">
            <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden />
            <label for="hamburger" class="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden">
              <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
              <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
            </label>

            <!-- Links -->
            <div class="fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] border-r bg-white shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:border-r-0 lg:shadow-none">
              <div class="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                <ul class="space-y-8 px-6 pt-32 text-gray-700 md:px-12 lg:flex lg:space-x-12 lg:space-y-0 lg:pt-0 text-center">
                  <!-- <li class="group bg-gradient-to-r lg:bg-none from-primary to-secondary w-full rounded-full py-2">
                    <a href="" class="">Home</a>
                  </li> -->
                  <li>
                    <a href="" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100">
                      <span class="relative text-cyan-800">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span class="relative group-hover:text-cyan-800">Explore</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span class="relative group-hover:text-cyan-800">Genre</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span class="relative group-hover:text-cyan-800">News</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span class="relative group-hover:text-cyan-800">Movies</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span class="relative group-hover:text-cyan-800">TV Shows</span>
                    </a>
                  </li>
                </ul>

                <div class="border-t px-7 py-8 md:px-12 md:py-16 lg:border-l lg:border-t-0 lg:py-0 lg:pl-6 lg:pr-0">
                  <a href="#" class="block rounded-full bg-gradient-to-r from-primary to-secondary px-6 lg:px-10 py-3 text-center text-white"> Get Started </a>
                </div>
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
