function debounce(f, ms) {

  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}







/*function delay(f,ms){
return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
}
}*/