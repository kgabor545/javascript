// console.log("Hello World!")
// let vezetekNev = "0"
// let keresztNev = "Gábor"
// let szamlalo = 0
// console.log(vezetekNev + " " + keresztNev, szamlalo)

// if (vezetekNev == szamlalo) {
//   console.log("a vezetekNev egyenlő a szamlalo-val")
// } else {
//   console.log("a vezetekNev NEM egyenlő a szamlalo-val")
// }
function login() {
  console.log("KATT")
  let passwordField = document.querySelector("#pass")
  //   console.log(passwordField.value)
  if (passwordField.value == "nagytitok") {
    document.location = "titkosoldal.html"
  } else {
    passwordField.value = ""
  }
}
