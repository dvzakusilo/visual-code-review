# visual-code-review
<snippet>
  <content><![CDATA[


 Simple library for visual fixing of the revealed defects of imposition.

## Installation

`npm i visual-code-review `

## Usage

Simple json for example (visualcr.json): 
```json
{
  "*": {
    ".main__inner table": [
      "Таблицы в контенте не допустимы!"
    ],
    "body > div.wrapper > main > section.section.mainReviews > div > div > a": [
      "Нет страницы",
      "alert"
    ],
    "body > div.wrapper > footer > div.footer__inner > div > div.footer__content.row > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)": [
      "Нет страницы",
      "alert"
    ],
    "#nav__list_header > li:nth-child(6) > a": [
      "На всех страницах одинаковые цены",
      "alert"
    ],
    ".header__btn": [
      "Форма не валидируется",
      "error"
    ],
    "body > div.wrapper > footer > div.footer__inner > div > div.footer__content.row > div:nth-child(3) > div.footer__text.footer__text_bottom > p > a:nth-child(2)": [
      "Нет страницы",
      "error"
    ]
  },
  "http://site.com.loc/akcii/rannee-bronirovanie/": {
    ".sidebarNews": [
      "Наезжает на картинку."
    ],
    "body > div.wrapper > main > div > div > div:nth-child(2) > div.col-12.col-md-9 > div > ul:nth-child(10)": [
      "некорректная верстка"
    ]
  }
}
```


For js:
```js
document.addEventListener('DOMContentLoaded', function () {
        const conf = {
            "/": {
                "#app": ["Кривая картинка"],
                "#app2": ["Прекрасная ссылка", "success"],
                "#app3": ["Так себе", "alert"]
            }
        };
        let instance = new VisualCR();
        instance.init(conf);
    });
```

For webpack:
```js
       import $obVCRConfig from './visualcr.json';
       import VCReview from 'visual-code-review';
       
       if(process.env.NODE_ENV !== 'production') {
                   const $obVCR = new VCReview();
                   $obVCR.init($obVCRConfig);
               }
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

BSD-3-Clause

]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
