# la-liga-examples

Do pobrania danych z API wystarczy `fetch()`, gdzie należy wprowadzić odpowiedni zasób (w przykładzie niżej to np.: https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga/players?team=Barcelona) oraz swój API KEY.

```javascript

const getPlayers = (team) => {

    fetch(`https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga/players?team=${team}`, {
        headers: {
            'X-Mashape-Key': '_API_KEY_',
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
```

Przykład pobierania danych można sprawdzić na poniższej stronie: https://bogolubow.github.io/la-liga-examples/
Należy odczekać chwilę ponieważ API nie działa oszałamiąco szybko...

W powyższym przykładzie nazwa drużyny jest pobierana z atrybutu `data-team`zdefiniowanego w każdym przycisku (`<button/>`).
Odpowiedź znajdziesz w konsoli po około 4-5 sekundach.