let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')

const allCardSection = document.getElementById('allCard');
const mainContainer = document.querySelector('main')


function calculateCount(){
    total.innerText = allCardSection.children.length // 8 JOb
    rejectedCount.innerText = rejectedList.length
    interviewList.innerText = interviewList.length
}
calculateCount()

let rejectedList = [];
let interviewList = [];

function toggleStyle(id){
    allBtn.classList.remove('bg-[#3498db]','text-white')
    interviewBtn.classList.remove('bg-[#3498db]','text-white')
    rejectedBtn.classList.remove('bg-[#3498db]','text-white')
    
    allBtn.classList.add('bg-gray-300', 'text-black')
    interviewBtn.classList.add('bg-gray-300', 'text-black')
    rejectedBtn.classList.add('bg-gray-300', 'text-black')
    
    const selected = document.getElementById(id)
    // selected

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-[#3498db]', 'text-white')
}