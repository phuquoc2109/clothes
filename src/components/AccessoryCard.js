import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import numberWidthCommas from '../utils/NumberWithCommas'

export default function AccessoryCard({item}) {
    return (
        <>
            <div className="accessoryCard">
                <img src={item.image} alt="" />
                <div className="accessoryCard__price">
                    <span className="accessoryCard__price__priceNew">{numberWidthCommas(item.price)} VNĐ</span>
                    <del className="accessoryCard__price__priceOld">{numberWidthCommas(item.priceOld)} VNĐ</del>
                </div>
                <Link style={{textAlign:'center'}} to={`/accessories/${item.slug}`}>
                    <Button  size='large' variant="contained" color="primary">
                            <i style={{marginRight: '10px', fontSize:'18px'}} className="fas fa-shopping-cart"></i>
                            Chọn mua
                    </Button>
                </Link>
            </div>
        </>
    )
}
