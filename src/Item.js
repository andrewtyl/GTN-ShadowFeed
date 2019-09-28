import React from 'react';
import CanvasJSReact from './canvas/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const functionA = () => {}

class Item extends React.Component {

  render() {
    let canvasOptions = {};
    const user_id = window.localStorage.getItem('user_id')
    if (!user_id) {
      window.location.href = "/login";
      return null;
    }
    else if (!this.props.item_id) {
      window.location.href = "/main"
      return null
    }
    else {
      let errorThrown = false
      const item_id = this.props.item_id



      Promise
        .all([func(), func(), func()])
        .then(res => {
          //Are all res good?
          //if yes, continue
          //Else, throw error
        })
        .catch(error => {
          if (!errorThrown) {
            errorThrown = true;
            console.error('ERROR at /src/Item.js while POSTing to /db/getAllUsersDB. Additional details following ' + error)
            alert("There was an issue fetching your data. Try again later or contact support for additional assistance. Redirecting...")
            window.location.href = "/main"
          }
        }
        )
//old code below
      fetch('http://holorecord.ajessen.com/db/getAllUsersDB', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 'user_id': user_id })
      })
        .then(res => {
          return res.json()
        })
        .then(parsedRes => {
          console.log(parsedRes[0])
          const db_id = parsedRes[0].db_id
          console.log(typeof db_id)
          fetch('http://holorecord.ajessen.com/gtn/getEntries', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({ "item_id": item_id, "db_id": db_id })
          })
            .then(entryRes => {
              return entryRes.json()
            })
            .then(parsedEntryRes => {
              console.log(parsedEntryRes)
              console.log(`user id is ${user_id}`)
              console.log(`user name is ${user}`)
            })
            .catch(error => {
              if (!errorThrown) {
                errorThrown = true;
                console.error('ERROR at /src/Item.js while POSTing to /gtn/getEntries. Additional details following ' + error)
                alert("There was an issue fetching your data. Try again later or contact support for additional assistance. Redirecting...")
                window.location.href = "/main"
              }
            })
        })
//back to regular coding schedule
      return (
        <main>
          <CanvasJSChart options={canvasOptions} />
        </main>
      );
    }
  }
}


export default Item;
