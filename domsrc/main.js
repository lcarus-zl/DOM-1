const div = dom.create(`<div><span>1</span></div>`)
console.log(div);
dom.after(test,div)

let div3 = dom.create(`<div id='parent'></div>`);
dom.wrap(test,div3)

const nodes = dom.empty(window.empty)
console.log(nodes);

dom.attr(test,'title','hi I am zl')
let title = dom.attr(test,'title')
console.log(title);

dom.text(test,'你好，这是新的内容')
dom.text(test)

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test,'border'));
dom.style(test,'border','1px solid black')

dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'blue')
console.log(dom.class.has(test,'red'));

let fn = ()=>{
console.log('点击了');
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

let testDiv = dom.find('#test')[0]
console.log(testDiv);
let test2 = dom.find('#test2')[0]
dom.find('.red',testDiv)
console.log(dom.find('.red',test2)[0]);

console.log(dom.parent(test));

console.log(dom.siblings(dom.find('#s2')[0]));

console.log(dom.next(dom.find('#s2')[0]));

console.log(dom.previous(dom.find('#s2')[0]));

let t = dom.find('#trave')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

let s2 = dom.find('#s2')[0]
console.log(dom.index(s2));