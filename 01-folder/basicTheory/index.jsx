// jsx is nothing but a file in which we can write html like code inside javascript 

const h1_tag = <h1>Hello</h1>; // h1 tag is created 
// Normal-Javascript way :- 
/*
   const h1_tag = document.createElement('h1')
   h1_tag.innerText = "Hello"
*/


function Intro(){
   console.log('hello everyone, i am a function_intro....')
}

// we can call it as :- Intro() or <Intro/>
// note :- react treats smaller letter as tags , we cant use <intro/>

<Intro/>