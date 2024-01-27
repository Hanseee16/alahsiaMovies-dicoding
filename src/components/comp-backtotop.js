class CompBackToTop extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupScrollEvent();
  }

  setupScrollEvent() {
    window.addEventListener("scroll", () => {
      const backToTopButton = this.querySelector("a");

      if (window.scrollY > 200) {
        // Jika scrollY lebih dari 200, tampilkan tombol
        backToTopButton.style.display = "block";
      } else {
        // Jika scrollY kurang dari 200, sembunyikan tombol
        backToTopButton.style.display = "none";
      }
    });
  }

  render() {
    this.innerHTML = `
        <div class="relative">
          <a href="#hero" class="absolute bottom-5 right-5 bg-[#CD3743] hover:bg-[#cd3743e7] rounded-full px-3 py-3 shadow-md shadow-black" style="display: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up text-white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
          </a>
        </div>
      `;
  }
}

customElements.define("comp-backtotop", CompBackToTop);
