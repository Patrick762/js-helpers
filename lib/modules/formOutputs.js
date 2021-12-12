export function initFormOutputs() {
    const outputs = document.querySelectorAll('[data-form-output-of]');

    outputs.forEach(el => {
        const source = document.getElementById(el.getAttribute('data-form-output-of'));

        function listener() {
            if(source.type == 'checkbox'){
                el.innerHTML = source.checked;
            }else{
                el.innerHTML = source.value;
            }
        }
        source.addEventListener('input', listener);

        listener();
    });
}