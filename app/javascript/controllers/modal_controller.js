import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["overlay", "content"]

  connect() {
    console.log("modal controller connected")
  }

  open() {
    console.log("modal opened")
    console.log(this.overlayTarget)
    this.overlayTarget.classList.remove("hidden")
    this.overlayTarget.classList.add("flex")
  }

  close() {
    console.log("modal closed")
    this.overlayTarget.classList.remove("flex")
    this.overlayTarget.classList.add("hidden")
  }
}