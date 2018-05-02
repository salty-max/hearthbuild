 // import React from 'react';
 import React, { Component } from 'react';

import Banner from '../common/Banner';
import Sidebar from './Sidebar';
import DecksFilter from './DecksFilter';
import DeckSelectionBoard from './DeckSelectionBoard';

 import axios from 'axios'; // j'importe axios

// const Home = () => (
//   <main>
//     <Banner
//       title="Decks list"
//       subtitle="Decks from the community"
//     />
//     <section className="section" id="home">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-9">
//             <DecksFilter />
//           </div>
//           <div className="column is-3">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     </section>
//   </main>
// );

  class Home extends Component {
  constructor () {  // je fais mon state local pour tester
    super();
      this.state = {
        decks: [], // j'initialise mon state deck
        };
      }

      // j'appelle mon test requête API + mettre loading en attendant que ça charge
        componentDidMount() {
           this.getDeckTest();
         }

         // je fais mon test requête API
         getDeckTest = () => {
           axios.get('/api/decks') // je vais dans la route get '/'
           .then(res => {
              this.setState({ // je met à jour mon deck
               decks: res.data,

             })
             console.log(res.data);
           });
         }
// ajouter mon component tableau et commencer les filtres dans le formulaire
    render () {
      return (
        <main>
      <Banner
        title="Decks list"
        subtitle="Decks from the community"
        />

          <section className="section" id="home">
            <div className="container">
              <div className="columns">

                <div className="column is-9">
                  <DecksFilter />
                  <DeckSelectionBoard />


                </div>
                <div className="column is-3">
                  <Sidebar />

                 </div>

               </div>

             </div>

           </section>

       </main>
    );
  }
}
export default Home;
