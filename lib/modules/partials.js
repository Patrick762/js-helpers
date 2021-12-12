export function initPartials() {
    const partials = document.querySelectorAll('[data-partial-name]');
    const inserts = document.querySelectorAll('[data-insert-partial]');

    inserts.forEach(el => {
        const partial = el.getAttribute('data-insert-partial');
        let insert = null;

        partials.forEach(p => {
            if (p.getAttribute('data-partial-name') === partial) {
                insert = p;
            }
        });

        if (insert) {
            const clone = insert.cloneNode(true);

            const args = el.getAttribute('data-partial-args');
            if (args) {
                var json = JSON.parse(args.replace(/&quot;/ig,'"'));

                const argInserts = clone.querySelectorAll('[data-partial-insert-arg]');
                argInserts.forEach(i => {
                    const a = i.getAttribute('data-partial-insert-arg');
                    if(json[a]){
                        const inner = new DOMParser().parseFromString(json[a], 'text/html').body.firstChild;
                        i.parentNode.replaceChild(inner, i);
                    }
                });
            }

            clone.removeAttribute('data-partial-name');
            el.parentNode.replaceChild(clone, el);
        }
    });

    partials.forEach(el => {
        el.remove();
    });
}