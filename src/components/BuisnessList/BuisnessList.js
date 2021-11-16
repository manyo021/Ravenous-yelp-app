import React from 'react';
import './BuisnessList.css';
import Buisness from '../Buisness/Buisness';
import Business from '../Buisness/Buisness';

class BuisnessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business=>{
                    return <Business key ={business.id} business={business} />
                })}
            </div>
        )
    }
}
export default BuisnessList;