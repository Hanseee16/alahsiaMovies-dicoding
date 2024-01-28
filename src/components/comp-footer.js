class CompFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="text-white py-4">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 <span class="text-primary">Alahsia Movies.</span> All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("comp-footer", CompFooter);
