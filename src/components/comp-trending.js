class CompTrending extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section>
            <div class="container mx-auto">
                <div class="row flex flex-wrap justify-center items-center h-screen">
                    <div class="w-full flex justify-between items-center px-4 md:px-0">
                        <h1 class="text-white text-3xl font-semibold">Trending</h1>
                        <a href="" class="text-slate-200 text-base">See More</a>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define("comp-trending", CompTrending);
