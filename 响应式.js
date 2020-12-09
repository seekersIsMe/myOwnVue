class Vue {
    constructor (option) {
        this._data = this.observer(option.data)
    }
    observer (obj){
        // 这里简单就便利一层,不做递归
        Object.keys(obj).forEach(key => {
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                set: function set(newVal) {
                    if (newVal === obj[key]) return;
                    obj[key] = val
                    console.log('视图更新了')
                },
                // 收集依赖
                get: function get () {
                    return obj[key]
                }
            })
        })
    }
}