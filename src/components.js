const text = (elem, text, className) => {
    let t = document.createElement(`${elem}`);
    t.textContent = `${text}`;
    t.classList.add(`${className}`);
    return t;
};

export { text };