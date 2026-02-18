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
            message: '',
            theme: 'light',
        };
    },
    mounted() {
        const savedMessage = localStorage.getItem('markdownText');
        if (savedMessage) {
            this.message = savedMessage;
        }
        const savedTheme = localStorage.getItem('theme');
        this.theme = savedTheme || 'light';
    },
    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },
        charCount() {
            return this.message.replace(/<[^>]*>/g, '').length;
        },
        themeIcon() {
            return this.theme == 'light' ? 'dark_mode' : 'light_mode';
        }
    },
    watch: {
        message(newValue) {
            localStorage.setItem('markdownText', newValue);
        },
        theme(newValue) {
            document.documentElement.setAttribute('data-bs-theme', this.theme);
            localStorage.setItem('theme', newValue);
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme == 'light' ? 'dark' : 'light';
        },
        clear() {
            this.message = '';
        }
    }
});

app.mount('#app');