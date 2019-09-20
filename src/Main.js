import React from 'react';
import cmt from './Assets/cmt.png'
import ris from './Assets/refiso.png'

class Main extends React.Component {

  render() {
    const user_id = window.localStorage.getItem('user_id')
    if (!user_id) {
      window.location.href = "/login";
      return null;
    }
    else {
      return (
        <main>
          <h3>Which Item do you want to Track?</h3>
          <ul>
            <li>
              <a href="/item/ris"><img src={ris} alt="Refined Isotop Stabilizer" /></a>
              <a href="/item/ris">Refined Isotope Stabilizer</a>
            </li>
            <li>
              <a href="/item/cmt"><img src={cmt} alt="Charged Matter Transubstantiator Icon" /></a>
              <a href="/item/cmt">Charged Matter Transubstantiator</a>
            </li>
          </ul>
        </main>
      );
    }
  }
}


export default Main;
