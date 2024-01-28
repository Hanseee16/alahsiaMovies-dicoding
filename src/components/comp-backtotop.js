class CompBackToTop extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addScrollEventListener();
  }

  addScrollEventListener() {
    const backToTopBtn = this.querySelector("#backToTopBtn");

    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  render() {
    this.innerHTML = `
      <button id="backToTopBtn" class="fixed bottom-7 md:bottom-4 right-3 md:right-4 bg-primary hover:bg-secondary px-2 md:px-3 py-2 md:py-3 rounded-full hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up text-white" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
        </svg>
      </button>
    `;
  }
}

customElements.define("comp-backtotop", CompBackToTop);
