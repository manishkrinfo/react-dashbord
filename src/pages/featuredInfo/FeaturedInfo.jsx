import React from 'react';
import './featureInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';;

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
         <span className="featuredTittle">Revanue</span>
         <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,145</span>
            <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon className='featuredIcon negative' /></span>
         </div>
         <span className='featuredSub'>Compared to last month</span>
      </div>

      <div className='featuredItem'>
         <span className="featuredTittle">Sale</span>
         <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,045</span>
            <span className='featuredMoneyRate'>-5.4 <ArrowDownwardIcon className='featuredIcon negative' /></span>
         </div>
         <span className='featuredSub'>Compared to last month</span>
      </div>

      <div className='featuredItem'>
         <span className="featuredTittle">Cost</span>
         <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,255</span>
            <span className='featuredMoneyRate'>+2.4 <ArrowUpwardIcon className='featuredIcon' /></span>
         </div>
         <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo