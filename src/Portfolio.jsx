import { Component, useState } from 'react'
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';



export class Portfolio extends Component {
    state= {
      selected :"All",
    }
  render() {
    const { data } = this.props;
    const filters =["All", "Websites", "Flayers", "Business Cards"];

    const onSelectFilter= (filter) => this.setState({selected: filter});

    return (
      <>
        <ul className='button-filters'>
          <Toolbar 
          filters = {filters}
          selected= {this.state.selected}
          onSelectFilter= {onSelectFilter} />
        </ul>
        <div className='photo_work'>
          < ProjectList props = {this.state.selected === "All" ? data : data.filter(element => element.category === this.state.selected)} />
        </div>
      </>
    )
  }
}
