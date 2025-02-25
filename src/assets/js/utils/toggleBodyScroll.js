export function toggleBodyScroll(value) {
  document.body.style.overflow = value ? "hidden" : "";
  document.body.style.touchAction = value ? "none" : ""; // для safari
}
