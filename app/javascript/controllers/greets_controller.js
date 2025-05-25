import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "output", "name2"]
  connect() {
    console.log("greet controller connected to the page")
  }

  greet() {
    alert("Hello from Stimulus greet controller!")
  }

  greeting() {
    const somename2 = this.name2Target.textContent
    this.outputTarget.textContent = `Hello, ${somename2}!`
  }

  greeting2() {
    this.name2Targets.forEach((el, i) => {
      console.log(`Greeting for name2[${i}]: ${el.textContent}`)
    })
  }

  bye() {
    const name = this.nameTarget.value
    this.outputTarget.textContent = `Bye, ${name}!`
  }
}