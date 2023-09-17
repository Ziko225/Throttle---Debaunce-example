const input = document.querySelector("#input");
const text = document.querySelector("#text");

const debounce = (func, delay) => {
    let interval;

    return () => {
        clearTimeout(interval);
        interval = setTimeout(func, delay);
    };
};

input.addEventListener("input", debounce(() => text.innerHTML = input.value, 500));