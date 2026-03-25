fetch("../footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-root").innerHTML = data;
  })
  .catch(err => console.error("Footer load error:", err));
