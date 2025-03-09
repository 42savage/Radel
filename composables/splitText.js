export const useSplitText = (element) => {
  const text = element.textContent;
  element.textContent = "";

  return [...text].map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    element.appendChild(span);
    return span;
  });
};
