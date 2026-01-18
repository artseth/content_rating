
import React, { Component } from 'react';
import './ContentRating.css';


class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,

      handleLike: () =>{
          this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }


    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>

        <p className='content'>
          Ekurhuleni mayoral candidate Cllr Xolani Khumalo will hand himself over to SAPS on 19 January 2026 following reports of an intended arrest linked to an alleged assault case.
          According to a press release dated 16 January, issued by Herman Mashaba and published on ActionSA Facebook page, the charge is linked to Khumalo’s involvement in confronting drug dealers while suspected criminals in similar cases were previously released without charges. This raises serious concerns about a justice system that appears to punish crime fighters instead of criminals.
          SAIEI stands in solidarity with Cllr Xolani Khumalo, recognizing him as an activist for a just cause that affects all of us as a nation. SAIEI and the public must rally behind individuals who stand for justice and accountability.
          #HandsAgainstDrugs #ProtectOurYouth #SaferCommunities
          #LeadershipInAction #EndDrugsSA #EkurhuleniFuture
          #CommunitiesFirst #FightDrugs #RealLeadership
          #StandAgainstDrugs #YouthMatter #CleanCommunities
          #ActionNotWords #DrugFreeSA #StrongerEkurhuleni
        </p>

        <div className='rating-buttons'>

          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>

        </div>

            <p>Total Ratings: {this.state.totalRatings}</p>

     </div>
     </>
    );
  }
}

export default ContentRating;
