const key = 'vue-test'
export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem(key))
    },
    save(item) {
        window.localStorage.setItem(key, JSON.stringify(item))
    }
}