import React from 'react';
import { Link } from 'react-router';
import Anime from 'react-anime';

const UserProfile = React.createClass({
  getInitialState () {
    var parentStates = this.props.getStates();
    var current_history;
    if(parentStates.anime_state !== 'inactive' && parentStates.onActive !== 'hide'){
      current_history = true;
    }else{
      current_history = false;
    }
    //Reason why have two same container is because Anime plugin re-renders whenever state changes. Thus we need static state
    return {
      onLoad: false,
      anime_state: current_history,
      show_history: current_history
    }; 
  },
  initialChecker : function(){
    this.state.onLoad = true;
    if(!this.current_history){
      setTimeout(function(){
        this.props.showContents();
        this.setState({
          show_history: true
        });
      }.bind(this), 2500);
    }else{

    }
  },
  showSectors : function(){
    return 'experience_history ' + (this.state.show_history ? 'experience_history show' : 'experience_history');
  },
  showHeadings: function(){
    return this.state.show_history ? 'show_history_heading' : '';
  },
  render: function() {
    if(!this.state.onLoad){
      console.log('history ' +this.state.show_history);
      this.initialChecker();
    }
    return (
      <div className={this.showSectors()}>
        <Anime delay={!this.state.anime_state ? 3000 : 2000} translateY={'3em'} translateX={'-16.5em'} easing="easeOutElastic">
          <div className="history_section">
            <div className="history_header top"><span className={this.showHeadings()}>2015</span></div>
            <div className="history_object"><span>Aimhigh</span></div>
          </div>
        </Anime>
        <Anime delay={!this.state.anime_state ? 3000 : 2000} translateX={'-7em'} easing="easeOutElastic">
          <div className="history_section">
            <div className="history_header bottom"><span className={this.showHeadings()}>2016</span></div>
            <div className="history_object"><span>3TwoOne</span></div>
          </div>
        </Anime>
        <Anime delay={!this.state.anime_state ? 3000 : 2000} translateY={'3em'} translateX={'2.5em'} easing="easeOutElastic">
          <div className="history_section">
            <div className="history_header top"><span className={this.showHeadings()}>2017</span></div>
            <div className="history_object"><span>Elminara</span></div>
          </div>
        </Anime>
        <Anime delay={!this.state.anime_state ? 3000 : 2000} translateX={'12em'} easing="easeOutElastic">
          <div className="history_section">
            <div className="history_header now"><Link to="experiences/now"><span className={this.showHeadings()}>NOW</span></Link></div>
            <div className="history_object current"><span>Codeclouds</span></div>
          </div>
        </Anime>
      </div> 
    );
  }
});

export default UserProfile;