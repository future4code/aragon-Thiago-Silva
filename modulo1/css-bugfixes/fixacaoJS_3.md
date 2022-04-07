```
function calculaNota(ex, p1, p2) {
  let somaNotas = (ex) + (p1 * 2) + (p2 *3)
  let media = somaNotas/6
  if(media >= 9) {
    return "A"
  } else if (media >= 7.5) {
    return "B"
  } else if (media >= 6) {
    return "C"
  } else {
    return "D"
  }
  return media
}
```