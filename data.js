
exports.install = function (Vue) {
    Vue.prototype.formatDate = function (row, column) {
        let data = row[column.property]
        if (data == null) {
            return null
        }
        let dt = new Date(data)
        let yyyy = dt.getFullYear()
        let MM = (dt.getMonth() + 1).toString().padStart(2, '0')
        let dd = dt.getDate().toString().padStart(2, '0')
        let h = dt.getHours().toString().padStart(2, '0')
        let m = dt.getMinutes().toString().padStart(2, '0')
        // let s = dt.getSeconds().toString().padStart(2, '0')
        //     + ':' + m + ':' + s
        return yyyy + '-' + MM + '-' + dd + '--' + h + ':' + m
    }
}