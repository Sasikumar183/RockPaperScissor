import { useState } from 'react';
import './App.css';
import win from './assets/download.png'
import Loss from './assets/loss.png'
import Tie from './assets/tie.jpg'
import Start from './assets/start.png'

function App() {
  const [user, setUser] = useState('-')
  const [userc, setUserc] = useState(0)
  const [mac, setMac] = useState('-')
  const [macc, setMacc] = useState(0)
  const [res, setRes] = useState('')
  const [imgi, setImg] = useState(Start)

  const Handle = (param) => {
    return () => {
      const moves = ['Rock', 'Paper', 'Scissor'];
      const rand = Math.floor(Math.random() * 3);
      setMac(moves[rand])
      setUser(moves[param])
      const msg = 'You choose ' + moves[param] + " and machine Choose " + moves[rand];
      if (moves[rand] === moves[param]) {
        setRes('Match Draw')
        setImg(Tie)
      } else if ((rand === 2 && param === 1) || (rand === 1 && param === 0) || (rand === 0 && param === 2)) {
        setRes('You Loss')
        setMacc(pmacc => pmacc + 1)
        if (macc == 9) {
          alert("Better Luck Next Time Machine Win the Game")
          setRes('-')
          setMacc(0)
          setUserc(0)
          setImg(Start)
          setUser('-')
          setMac('-')

        }
        setImg(Loss)
      } else {
        setRes('You Win')
        setUserc(puserc => puserc + 1)
        setImg(win)
        if (userc == 9) {
          alert("Congrats You win the game")
          setRes('-')
          setMacc(0)
          setUserc(0)
          setImg(Start)
          setUser('-')
          setMac('-')

        }
      }


    };
  };

  return (
    <>
      <div className='bor'>
        <div className='borii'>
          <h1>ROCK PAPER SCISSOR</h1>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button id='btt' onClick={Handle(0)}>ROCK</button>
            <button id='btt' onClick={Handle(1)}>PAPER</button>
            <button id='btt' onClick={Handle(2)}>SCISSOR</button>
          </div>
          <div className='res'>
            <p>Your Choice: <span>{user}</span></p>
            <p>Machine Choice: <span>{mac}</span> </p>
          </div>
          <img src={imgi} alt="" width={150} height={150} id='resl' />
            <h2>{res}</h2>
          <div>
            <h2>Result</h2>
            <div className='count' style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <p>You: <span>{userc}</span></p>
              <p>Machine: <span>{macc}</span></p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
