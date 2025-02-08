function placeBet(fighter, odds) {
    const betAmount = fighter === 'Warris Singh' ? 
        document.getElementById('warris-bet').value : 
        document.getElementById('hemish-bet').value;

    if (betAmount < 1) {
        alert('Minimum bet amount is $1');
        return;
    }

    const payout = (betAmount * odds).toFixed(2);
    const betSlipContent = `
        <p><strong>Bettor:</strong> ${prompt('Enter your name:')}</p>
        <p><strong>Fighter:</strong> ${fighter}</p>
        <p><strong>Bet Amount:</strong> $${betAmount}</p>
        <p><strong>Odds:</strong> ${odds}</p>
        <p><strong>Potential Payout:</strong> $${payout}</p>
    `;

    document.getElementById('bet-slip-content').innerHTML = betSlipContent;
}