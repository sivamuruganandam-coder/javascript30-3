console.log("JS FILE LOADED");

let inputs = document.querySelectorAll('.controls input');

function update() {
    console.log(this.value);
    let suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));