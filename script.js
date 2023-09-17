// === debounce ===
const inputD = document.querySelector("#inputD");
const textD = document.querySelector("#textD");

const debounce = (func, delay) => {
    let timeout;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

inputD.addEventListener("input", debounce(() => textD.innerHTML = inputD.value, 500));


// === throttle ===

const inputT = document.querySelector("#inputT");
const textT = document.querySelector("#textT");

let pause = false;

const throttle = (func, delay) => {
    return () => {
        if (pause) {
            return;
        }

        pause = true;

        setTimeout(() => {
            func();
            pause = false;
        }, delay);
    };
};

inputT.addEventListener("input", throttle(() => textT.innerHTML = inputT.value, 500));