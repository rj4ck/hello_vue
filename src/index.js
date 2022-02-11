import * as  Vue from "vue/dist/vue.esm-bundler.js"

const Hello = {
    props: ["greeting"],
    template: `
        <p>{{ greeting }}!</p>
    `
}

const app = Vue.createApp({
    components: {
        Hello
    },
    template: `
        <hello greeting="Hello" />
        <hello greeting="Jackson" />
        <button v-on:click="increment">Increment</button>

        <p>{{ count }}</p>

        <input type="checkbox" v-model="value" value="a"/>
        <input type="checkbox" v-model="value" value="b"/>
        {{ value }}

        <div class="red"> {{ error }} </div>

        <div v-for="number in numbers" v-bind:class="getClass(number)">
            <div>
                {{ number }} 
        
            </div>
        </div>
    `,
    data() {
        return {
            count: 0,
            value: ["a", "b"], 
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },

    computed: {
        eventList() {
            return this.numbers.filter(num => this.isEven(num))
        },
        error() {
            if (this.value.length < 5) {
                return "Must be greater than 5."
            }
        }
    },

    methods: {
        increment() {
            this.count += 1
        },
        isEven(number) {
            return number % 2 === 0
        },
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red';
        }
    }
})

app.mount("#app")