interface IItem {
    delaytoResponseContent(): Promise<number>;
    content: number;
}

class Item implements IItem {
    protected _content: number = Math.round(Math.random() * 10);
    get content() {
        return this._content;
    }
    set content(n: number) {
        this._content = n;
    }
    
    async delaytoResponseContent() : Promise<number> {
        await this.sleep(1000);
        return this.content;
    }
    
    sleep(ms: number) {
        return new Promise((resolve) =>
            setTimeout(resolve, ms)
        )
    }
}

interface Subject {
    data: Array<IItem>;
    Request(index: number): any;
}

class RealSubject {
    constructor(private _data: Array<IItem>) { }
    get data() : Array<IItem> {
        return this._data;
    }

    Request(index: number) : Promise<number> {
        return this.data[index].delaytoResponseContent();
    }
}

class SubjectProxy implements Subject {
    // Khai báo cho đúng cấu trúc nhưng không sử dụng
    data!: Array<IItem>;
    // Duy trì một kết nối đến RealSubject để xử lí dữ liệu
    private realSubject!: RealSubject;

    // Kết nối đến host thông qua RealSubject
    constructor(data: Array<IItem>) {
        this.realSubject = new RealSubject(data);
    }

    // - Ghi đè lại phương thức Request
    // - Thay vì lấy về giá trị content mất nhiều chi phí
    //   thì ta chỉ lấy về index/id của giá trị đó
    // - Khi nào người dùng cần giá trị content thì mới
    //   sử dụng phương thức delaytoResponseContent để
    //   lấy giá trị content về
    Request(index: number) : IItem {
        return this.realSubject.data[index];
    }
}

// Tạo một host giả có chứa content và index Item
let data : Array<IItem> = [
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
];
let proxy = new SubjectProxy(data);
(async () => {
    let wanted : number = 3;
    let results : Array<IItem> = new Array<IItem>();
    for(let i = 0; i < 5; i++) {
        results.push(proxy.Request(i));
        if(i==wanted)
            results[i].delaytoResponseContent()
                .then(res => console.log("Wanted result via proxy: "+res));
    }
    for(let i = 0; i < 5; i++)
        if(i!=wanted)
            results[i].delaytoResponseContent()
                .then(res => console.log("Result via proxy: "+res))
})();