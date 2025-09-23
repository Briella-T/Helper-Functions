const bidsHistory = document.getElementById('bids-container')
const bidder1Button = document.getElementById('bidder1-button')
const bidder1Input = document.getElementById('bidder1-input')
const bidder2Button = document.getElementById('bidder2-button')
const bidder2Input = document.getElementById('bidder2-input')
const clearBids = document.getElementById('clear-bids-button')
const highestBidder = document.getElementById('highest-bidder-container')

let bids = [];
let highestBid = {name: '' , amount: 0};

function updateInfo() {
    bidsHistory.innerHTML = '';
    highestBidder.innerHTML = '';

    bids.sort((a, b) => b.amount - a.amount);
    bids.forEach(bid => {
        const bidElement = document.createElement('div');
        bidElement.innerHTML = `
            <p class="text-black mb-2">${bid.name}</p>
            <p class="text-black mb-2">$${bid.amount}</p>
        `;
        bidsHistory.appendChild(bidElement);
    });

    if(bids.length > 0) {
        highestBid = bids[0];
    } else {
        highestBid = {name: '', amount: 0};
    };

    highestBidder.innerHTML = `
        <h2 class="text-xl font-bold text-black mb-2">Highest Bidder</h2>
        <p class="text-black font-semibold">${highestBid.name ? `${highestBid.name} - $${highestBid.amount}` : 'No bids yet'}</p>
    `;
}

function placeBid(bidder, inputElement) {
    const amount = parseInt(inputElement.value);

    if (isNaN(amount) || amount <= highestBid.amount) {
        console.error('Invalid bid. Please enter a number higher than the current highest bid.');
        return;
    }; 
    bids.push({ name: bidder, amount: amount });
    inputElement.value = '';
    updateInfo();
}

//Event Listeners

bidder1Button.addEventListener('click', () => {
    placeBid('bidder1', bidder1Input);
})

bidder2Button.addEventListener('click', () => {
    placeBid('bidder2', bidder2Input);
})

clearBids.addEventListener('click', () => {
    bids = [];
    updateInfo();
});

updateInfo();
 