import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello controller connected to the page")
    this.element.textContent = "hello world from hello controller!"
  }
}