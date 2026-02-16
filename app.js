// const input = document.getElementById("input");
// const output = document.getElementById("output");
// input.value = localStorage.getItem("text");
// output.innerHTML = marked.parse(input.value);
// input.oninput = () => {
//     localStorage.setItem("text", input.value);
//     output.innerHTML = marked.parse(input.value);
// }

const app = Vue.createApp({
    data() {
        return {
            message: ''
        };
    },
    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },
        charCount() {
            return this.htmlOutput.replace(/<[^>]*>/g, '').length;
        }
    }
});

app.mount('#app');