"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Item {
    constructor() {
        this._content = Math.round(Math.random() * 10);
    }
    get content() {
        return this._content;
    }
    set content(n) {
        this._content = n;
    }
    delaytoResponseContent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sleep(1000);
            return this.content;
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
class RealSubject {
    constructor(_data) {
        this._data = _data;
    }
    get data() {
        return this._data;
    }
    Request(index) {
        return this.data[index].delaytoResponseContent();
    }
}
class SubjectProxy {
    // Kết nối đến host thông qua RealSubject
    constructor(data) {
        this.realSubject = new RealSubject(data);
    }
    // - Ghi đè lại phương thức Request
    // - Thay vì lấy về giá trị content mất nhiều chi phí
    //   thì ta chỉ lấy về index/id của giá trị đó
    // - Khi nào người dùng cần giá trị content thì mới
    //   sử dụng phương thức delaytoResponseContent để
    //   lấy giá trị content về
    Request(index) {
        return this.realSubject.data[index];
    }
}
// Tạo một host giả có chứa content và index Item
let data = [
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
];
let proxy = new SubjectProxy(data);
(() => __awaiter(void 0, void 0, void 0, function* () {
    let wanted = 3;
    let results = new Array();
    for (let i = 0; i < 5; i++) {
        results.push(proxy.Request(i));
        if (i == wanted)
            results[i].delaytoResponseContent()
                .then(res => console.log("Wanted result via proxy: " + res));
    }
    for (let i = 0; i < 5; i++)
        if (i != wanted)
            results[i].delaytoResponseContent()
                .then(res => console.log("Result via proxy: " + res));
}))();
