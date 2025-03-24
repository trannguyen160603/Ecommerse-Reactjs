function m(r, u, c) {
  const o = (t, p) => {
    const d = typeof t == "string" ? (p || document).querySelector(t) : t;
    if (!d)
      throw new Error(
        `Element ${typeof t == "string" ? `with selector '${t}'` : "is"} not found`
      );
    return d;
  }, n = o(r), i = o(u, n), e = o(
    c,
    n
  );
  let a = 1, l = 1;
  const s = () => {
    e && (e.style.width = e.naturalWidth + "px", e.style.height = e.naturalHeight + "px", a = e.naturalWidth / n.clientWidth - 1, l = e.naturalHeight / n.clientHeight - 1);
  }, h = () => {
    i.style.opacity = "0", e.style.opacity = "1";
  }, y = () => {
    i.style.opacity = "1", e.style.opacity = "0";
  }, f = (t) => {
    e.style.top = `${-t.offsetY * l}px`, e.style.left = `${-t.offsetX * a}px`;
  };
  return (() => {
    e.addEventListener("load", s), n.addEventListener("mouseenter", h), n.addEventListener("mouseleave", y), n.addEventListener("mousemove", f);
  })(), s(), s;
}
export {
  m as default
};
