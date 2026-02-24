let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

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
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
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

    currentStatus = id
    console.log(currentStatus);
    // selected

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-[#3498db]', 'text-white')

    if (id == 'interview-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if( id == 'all-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
        
}

mainContainer.addEventListener('click', function(event){
    
    if(event.target.classList.contains('int-btn')){
        const parenNode = event.target.parentNode.parentNode;

    const mobileFilter = parenNode.querySelector('.mobileFilter').innerText
    const react = parenNode.querySelector('.react').innerText
    const remote = parenNode.querySelector('.remote').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText


    parenNode.querySelector('.status').innerText ='INTERVIEW'
    
    parenNode.querySelector('.status').classList.add('text-green-600', 'bg-green-100');
    parenNode.classList.remove('status-rejected','text-blue-950','bg-[#eef4ff]');
    

    const cardinfo = {
        mobileFilter,
        react,
        remote,
        status: 'INTERVIEW',
        notes
    }
    const cardExist = interviewList.find(item => item.mobileFilter == cardinfo.mobileFilter)

    if(!cardExist){
        interviewList.push(cardinfo)
    }

    rejectedList = rejectedList.filter(item => item.mobileFilter != cardinfo.mobileFilter)

    calculateCount()
    if (currentStatus == 'rejected-btn'){
        renderRejected()
    }

    }else if(event.target.classList.contains('rej-btn')){
        const parenNode = event.target.parentNode.parentNode;

    const mobileFilter = parenNode.querySelector('.mobileFilter').innerText
    const react = parenNode.querySelector('.react').innerText
    const remote = parenNode.querySelector('.remote').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText


    parenNode.querySelector('.status').innerText = 'REJECTED'
    parenNode.querySelector('.status').classList.add('text-red-600', 'bg-red-100');
    parenNode.classList.remove('status-interview','text-blue-950','bg-[#eef4ff]');
    
    


    const cardinfo ={
        mobileFilter,
        react,
        remote,
        status: 'REJECTED',
        notes
    }
    const cardExist = rejectedList.find(item => item.mobileFilter == cardinfo.mobileFilter)

    if(!cardExist){
        rejectedList.push(cardinfo)
    }

    interviewList = interviewList.filter(item=> item.mobileFilter != cardinfo.mobileFilter)

    if(currentStatus == 'interview-btn'){
    renderInterview();
    } else if(currentStatus == 'rejected-btn'){
    renderRejected();
}

    calculateCount()
    
    }
    
})

// step-3
function renderInterview (){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card flex justify-between shadow-sm shadow-gray-500/50 p-6 rounded-[8px] mt-6'
        div.innerHTML = `
           <div class="space-y-6">
                    <div>
                        <p class="mobileFilter text-[18px] font-semibold text-blue-950">${interview.mobileFilter}</p>
                        <p class="react mb-4 text-[16px]  text-gray-400">${interview.react}</p>
                        <p class="remote text-[14px] text-gray-400 ">${interview.remote}</p>
                    </div>
                    <!-- part-2 -->
                    <div>
                        <p class="status  text-blue-950 font-semibold mb-4 bg-[#eef4ff] px-2 py-2 w-[120px] rounded-md">${interview.status}</p>
                        <p class="notes mb-4 text-[14px] text-gray-600">${interview.notes}</p>
                    </div>

                        <div class="flex gap-5">
                            <button class="int-btn text-[#22c55e] rounded-[4px] border border-[#22c55e] px-2 py-1">INTERVIEW</button>
                            <button class="rej-btn text-[#ef4444] border border-[#ef4444] rounded-[4px] px-2 py-1">REJECTED</button>
                        </div>
                    

                </div>
                <!-- main-card-2 -->
                <div>
                    <button class="dte-btn border w-[32px] h-[32px] rounded-full text-gray-500"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }

}
function renderRejected (){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList){
        let div = document.createElement('div');
        div.className = 'card flex justify-between shadow-sm shadow-gray-500/50 p-6 rounded-[8px] mt-6'

        div.innerHTML = `
           <div class="space-y-6">
                <div>
                    <p class="mobileFilter text-[18px] font-semibold text-blue-950">${rejected.mobileFilter}</p>
                    <p class="react mb-4 text-[16px] text-gray-400">${rejected.react}</p>
                    <p class="remote text-[14px] text-gray-400">${rejected.remote}</p>
                </div>

                <div>
                    <p class="status text-blue-950 font-semibold mb-4 bg-[#eef4ff] px-2 py-2 w-[120px] rounded-md">${rejected.status}</p>
                    <p class="notes mb-4 text-[14px] text-gray-600">${rejected.notes}</p>
                </div>

                <div class="flex gap-5">
                    <button class="int-btn text-[#22c55e] rounded-[4px] border border-[#22c55e] px-2 py-1">INTERVIEW</button>
                    <button class="rej-btn text-[#ef4444] border border-[#ef4444] rounded-[4px] px-2 py-1">REJECTED</button>
                </div>
           </div>

           <div>
                <button class="dte-btn border w-[32px] h-[32px] rounded-full text-gray-500">
                    <i class="fa-solid fa-trash"></i>
                </button>
           </div>
        `

        filterSection.appendChild(div)
    }
}
