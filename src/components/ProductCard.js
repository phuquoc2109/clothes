import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../styles/productcard.css';
import numberWidthCommas from '../utils/NumberWithCommas';


export default function ProductCard(props) {
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card__name">{props.title}</h3>
                 <div className="product-card__price">
                    {numberWidthCommas(props.price)}
                    <span className="product-card__price__old">
                        <del>{numberWidthCommas(399000)}</del>
                    </span>
                 </div>
            </Link>
            <div className="product-card__btn">
                <Link to={`/catalog/${props.slug}`}>
                    <Button variant="contained" color="primary"  >
                        <i className="fas fa-shopping-cart"></i>
                        Chọn mua
                    </Button>
                </Link> 
            </div>
        </div>
    )
}
