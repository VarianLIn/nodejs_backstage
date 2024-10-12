/*
 * @Author: Varian LIn
 * @Date: 2022-08-14 16:42:53
 * @LastEditors: Varian LIn
 * @LastEditTime: 2022-08-14 16:48:12
 * @Description:
 */
module.exports = {
    formatterDate(time, format = 'YYYY-MM-DD HH:mm:ss') {
        let y = time.getFullYear();
        let m = (time.getMonth() + 1).toString().padStart(2, '0');
        let d = time.getDate().toString().padStart(2, '0');
        let h = time.getHours().toString().padStart(2, '0');
        let min = time.getMinutes().toString().padStart(2, '0');
        let s = time.getSeconds().toString().padStart(2, '0');
        if (format === 'YYYY-MM-DD HH:mm:ss') {
            return `${y}-${m}-${d} ${h}:${min}:${s}`;
        }
        return `${y}-${m}-${d}`;
    }
};
