let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filter-section')


function calculateCount(){
    total.innerText = allCardSection.children.length // 8 JOb
    rejectedCount.innerText = rejectedList.length
    interviewList.innerText = interviewList.length
}
calculateCount()


function toggleStyle(id) {
    // adding  gray bf all
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

mainContainer.addEventListener('click', function(event){
    

    if(event.target.classList.contains('int-btn')){
        const parenNode = event.target.parentNode.parentNode;
    const mobileFilter = parenNode.querySelector('.mobileFilter').innerText
    const react = parenNode.querySelector('.react').innerText
    const remote = parenNode.querySelector('.remote').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText

    const cardinfo ={
        mobileFilter,
        react,
        remote,
        status,
        notes
    }
    const cardExist = interviewList.find(item => item.mobileFilter == cardinfo.mobileFilter)

    if(!cardExist){
        interviewList.push(cardinfo)
    }

    
   renderInterview()
    }
    
})

function renderInterview (){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card flex justify-between shadow-sm shadow-gray-500/50 p-6 rounded-[8px] mt-6'
        div.innerHTML = `
           <div class="space-y-6">
                    <div>
                        <p class="mobileFilter text-[18px] font-semibold text-blue-950">Mobile First Corp</p>
                        <p class="react mb-4 text-[16px]  text-gray-400">React Name Developer</p>
                        <p class="remote text-[14px] text-gray-400 ">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <!-- part-2 -->
                    <div>
                        <p class="status  text-blue-950 font-semibold mb-4 bg-[#eef4ff] px-2 py-2 w-[120px] rounded-md">NOT APPLIED</p>
                        <p class="notes mb-4 text-[14px] text-gray-600">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>

                        <div class="flex gap-5">
                            <button class="int-btn text-[#22c55e] rounded-[4px] border-1 border-[#22c55e] px-2 py-1">INTERVIEW</button>
                            <button class="rej-btn text-[#ef4444] border-1 border-[#ef4444] rounded-[4px] px-2 py-1">REJECTED</button>
                        </div>
                    

                </div>
                <!-- main-card-2 -->
                <div>
                    <button class="dte-btn border w-[32px] h-[32px] rounded-full text-gray-500"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
    }

}