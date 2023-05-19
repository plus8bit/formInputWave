const labels = document.querySelectorAll('.form-control label')

labels.forEach(el => {
  el.innerHTML = el.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('')
    console.log(el)

})