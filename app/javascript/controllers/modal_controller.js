import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["overlay", "content"]

  connect() {
    console.log("modal controller connected");
    this.handleKeyDown = (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    };
    window.addEventListener("keydown", this.handleKeyDown);
  }
  
  disconnect() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  open() {
    this.overlayTarget.classList.remove("hidden")
    this.overlayTarget.classList.add("flex") // ✅ Add this to center it with flexbox
  
    requestAnimationFrame(() => {
      this.overlayTarget.classList.add("opacity-80")
      this.overlayTarget.classList.remove("opacity-0")
  
      this.contentTarget.classList.add("opacity-80", "scale-100")
      this.contentTarget.classList.remove("opacity-0", "scale-95")
    })
  }

  close() {
    this.overlayTarget.classList.remove("opacity-80")
    this.overlayTarget.classList.add("opacity-0")
  
    this.contentTarget.classList.remove("opacity-80", "scale-100")
    this.contentTarget.classList.add("opacity-0", "scale-95")
  
    setTimeout(() => {
      this.overlayTarget.classList.remove("flex") // ✅ Remove it here
      this.overlayTarget.classList.add("hidden")
    }, 300)
  }
  outsideClick(event) {
    if (!this.contentTarget.contains(event.target)) {
      this.close()
    }
  }
}