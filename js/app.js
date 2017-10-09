document.addEventListener('DOMContentLoaded', function() {
    
    const getPlayers = (team) => {

        fetch(`https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga/players?team=${team}`, {
            headers: {
                'X-Mashape-Key': '4oqduD8DrwmshI5aKWU6iGU4MvMsp1gI4m5jsnGsIRSza8EhOH', // here your API KEY
                'Accept': 'application/json'
            }
        }).then(resp => {
            if(resp.ok) {
                return resp.json();
            } else {
                return new Error('?!');
            }
        }).then(json => {
            console.log(json);
        }).catch(err => {
            console.error(err);
        });

    }


    document.querySelectorAll('.players').forEach(item => {
        item.addEventListener('click', (e) => {
            const team = e.currentTarget.dataset.team; // from <... data-team="x" ...>
            getPlayers(team);
        });
    })
});