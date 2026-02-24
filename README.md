1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans:getElementById এটা শুধু একটাই আইডি ধরে।
   getElementsByClassName এটা একই ক্লাসের সব এলিমেন্ট ধরতে পারে।
    querySelector  শুধু প্রথম মেলানো এলিমেন্ট
    querySelectorAll  সব মেলানো এলিমেন্ট


2. How do you create and insert a new element into the DOM?
   Ans:let p = document.createElement('p');
p.textContent = "new paragraph"; 
let container = document.getElementById('container');
container.appendChild(p);
document.body.appendChild(p);


3. What is Event Bubbling? And how does it work?
   ans:
   <div id="outer">
  <button id="btn">Click Me</button>
</div>
java:
document.getElementById('outer').addEventListener('click', () => alert('Outer Div!'));
document.getElementById('btn').addEventListener('click', () => alert('Button!'));


4. What is Event Delegation in JavaScript? Why is it useful?
ans:<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
java:
document.getElementById('list').addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    alert(e.target.textContent);
  }
});


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault()
ব্রাউজারের স্বাভাবিক কাজ বন্ধ করে।
উদাহরণ: link.addEventListener('click', e => e.preventDefault());

stopPropagation()
ইভেন্ট বব্লিং থামায়।
উদাহরণ: button.addEventListener('click', e => e.stopPropagation());
