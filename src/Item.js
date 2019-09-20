import React from 'react';

class Item extends React.Component {

  render() {
    const user_id = window.localStorage.getItem('user_id')
    if (!user_id) {
      window.location.href = "/login";
      return null;
    }
    else if (!this.props.item_id) {
        window.location.href ="/main"
        return null
    }
    else {
        const item_id = this.props.item_id
        fetch('http://holorecord.ajessen.com/db/getEntries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"item_id": item_id, "db_id": db_id})
        })
        fetch('http://holorecord.ajessen.com/gtn/getEntries', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({"item_id": item_id, "db_id": db_id})
                })

      return (
        <main>
          <h3>Which Item do you want to Track?</h3>
          <ul>
            <li>
              <a href="/item/ris"><img src="./Assets/refiso.png" alt="Refined Isotop Stabilizer" /></a>
              <a href="/item/ris">Refined Isotope Stabilizer</a>
            </li>
            <li>
              <a href="/item/cmt"><img src="./Assets/matter_transubstantiator" alt="Charged Matter Transubstantiator Icon" /></a>
              <a href="/item/cmt">Charged Matter Transubstantiator</a>
            </li>
          </ul>
        </main>
      );
    }
  }
}


export default Item;
