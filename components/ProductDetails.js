app.component('product-details', {
    props: {
        details: {
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-details">
        <div>{{details}}</div>
    </div>`
})