import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("greet controller connected to the page")
  }

  greet() {
    alert("Hello from Stimulus greet controller!")
  }
}