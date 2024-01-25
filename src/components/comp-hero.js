class CompHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section>
            <div class="container mx-auto">
                <div class="row flex flex-wrap justify-center items-center h-screen">
                    <div class="col w-full lg:w-1/2 px-4 md:px-0">
                        <div class="mb-10">
                            <h3 class="text-white text-2xl font-semibold uppercase">Find Movies</h3>
                            <h1 class="text-6xl font-bold uppercase bg-gradient-to-r bg-clip-text text-transparent from-primary via-secondary mb-3">TV shows and more</h1>
                            <p class="text-white text-base md:pr-10">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <a href="#" class="border text-white font-medium px-10 py-4 rounded-md hover:bg-gradient-to-r from-primary to-secondary hover:border-none hover:shadow-xl">
                            Watch Tutorial
                        </a>
                    </div>
            
                    <div class="col bg-red-600 w-full lg:w-1/2">
                        <img class="w-full" src="../image/hero-1.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define("comp-hero", CompHero);
