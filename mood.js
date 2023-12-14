const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');

happyBtn.addEventListener('click', function () {
    store.dispatch({ type: 'HAPPY', payload: '(✿◠‿◠)' })
})

sadBtn.addEventListener('click', function () {
    store.dispatch({ type: 'SAD', payload: '( ͡° ︿ ͡°)' })
})

angryBtn.addEventListener('click', function () {
    store.dispatch({ type: 'ANGRY', payload: '( ͡⚆ ͜ʖ ͡⚆)╭∩╮' })
})

confusedBtn.addEventListener('click', function () {
    store.dispatch({ type: 'CONFUSED', payload: '( ͡° .  ͡°)?' })
})

function renderMood() {
    h1.innerText = store.getState().mood;
}

renderMood();
store.subscribe(renderMood);