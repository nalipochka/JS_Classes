//1
class PrintMachine {
    #fontSize = 0;
    #fontColor = "";
    #fontFamaliy = "";
    constructor(fontSize, fontColor, fontFamaliy) {
        this.#fontSize = fontSize;
        this.#fontColor = fontColor;
        this.#fontFamaliy = fontFamaliy;
    }
    print(str) {
        document.write(`<p style = "font-size: ${this.#fontSize}px; color: ${this.#fontColor}; font-family: ${this.#fontFamaliy};">${str}</p>`)
    }
}

let p = new PrintMachine(50, "purple", "Consolas");
p.print("Example 1");
p.print("Hello world!");

//2
class News {
    #title = "";
    #arrTags = [];
    #text = "";
    #date = new Date(Date.now());
    constructor(title, arrTags, text, date) {
        this.#title = title;
        this.#text = text;
        this.#arrTags = arrTags;
        this.#date = date;
    }
    get date() {
        return this.#date;
    }
    get title() {
        return this.#title;
    }
    get arrTags (){
        return this.#arrTags;
    }
    print() {
        document.write("<div>")
        document.write(`<h1>${this.#title}</h1>`);
        // document.write(`<p>${showDate}</p>`);
        if (this.#date.toDateString() == new Date(Date.now).toDateString()) {
            document.write(`<p>Today</p>`);
        }
        else if (Math.floor((Date.now() - this.#date) / 86400000) <= 7) {
            document.write(`<p>${Math.floor((Date.now() - this.#date) / 86400000)} days ago </p>`);
        }
        else {
            document.write(`<p> ${this.#date.getDate()}. ${this.#date.getMonth()}. ${this.#date.getFullYear()} </p>`);
        }
        document.write(`<p> ${this.#text}</p>`);
        document.write(`<p>`);
        for (let tag of this.#arrTags) {
            document.write(`${tag} `);
        }
        document.write(`</p>`);
    }
}

news = new News("Title", ["#tag", "#lorem", "#news"], "textTexttextTexttextTexttext TexttextText text Texttext Texttext TexttextTexttext TexttextText text Text textTexttextTexttext TexttextText", new Date(2022, 11, 16));
news.print();

//3
class ArrayNews {
    #arrNews = [];
    constructor(arrNews) {
        this.#arrNews = arrNews;
    }
    get arrNews() {
        return this.#arrNews.length;
    }
    print() {
        for (let news of this.#arrNews) {
            news.print();
        }
    }
    push(news) {
        this.#arrNews.push(news)
    }
    remove(title) {
        for (let index in this.#arrNews) {
            if (this.#arrNews[index].title == title) {
                this.#arrNews.splice(index, 1);
                break;
            }
        }
    }
    sort() {
        this.#arrNews.sort(compareDate);
    }
    find(tag) {
        let findedArray = [];
        for (let news of this.#arrNews) {
            for (let t of news.arrTags) {
                if (t === tag) {
                    findedArray.push(news);
                    break;
                }
            }
        }
        return findedArray;
    }
}
function compareDate(a, b) {
    return a.date - b.date;
}

arrNews = [
    new News("News 1", ["#news", "#lorem", "#qwe"], "qweqweqweqweqweqweqweqweqweqweqweqwewqeqeqeqwewqeqweqwewqewqeqweqwewqeqewqe", new Date(2022, 11, 12)),
    new News("News 5", ["#news", "#loremQWE", "#QWE"], "215815685842658265 8324 85 6285 63489562348 238456 32845 9", new Date(2022, 10, 12)),
    new News("News 2", ["#lor", "#qwe"], "zxczxczczczczxccccccccccccccccccccccccccccccccccccccccc", new Date(2022, 11, 9)),
    new News("News 3", ["#lorem", "#ZXC"], "sdfasfsfdadafasfdgasggsdkgsdfghsdkjgskfhgsdhglisdfgksdfhgksdgkdsfhgksdfgks", new Date(2022, 10, 1)),
    new News("News 4", ["#news", "#lorem", "#qwe"], "cv,bxnc,bvnsegnw9sghvksn ia idaig i sdfi siiiav ananva owquf o", new Date(2022, 11, 18)),
    new News("News 6", ["#lorem123", "#zxc"], " quiwhf qw owq oasldvlasdvaoj ocv jozds osdo o ansdnk askfaksf", new Date(2022, 10, 26))
]
arr = new ArrayNews(arrNews);
console.log(arr.arrNews);
arr.print();
arr.push(news);
console.log(arr.arrNews);
arr.remove("News 5");
console.log(arr.arrNews);
document.write(`<hr>`);
arr.sort();
arr.print();
document.write("<hr>");
findedArr = arr.find("#zxc");
for(let news of findedArr){
    news.print();
}