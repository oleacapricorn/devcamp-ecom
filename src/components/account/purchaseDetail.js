import React, { Component } from 'react';

import { connect } from 'react-redux';

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-lable`}>
            <div className='purchase-detail-lable__title'>{title}</div>
            <div className='purchase-detail-lable__value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
    render() {
        const { className, orderDate, orderNmber, user } = this.props;
        const { name, shippingAddress, total, creditCard } = user;
        return (
            <div className={`${className} purchase-detail`}>
                <PurchaseDetailLabel
                    className='purchase-detail__order-number'
                    title='Order Number'
                    value={orderNmber} />
                <PurchaseDetailLabel
                    className='purchase-detail__order-date'
                    title='Order Number'
                    value={orderDate} />
                <PurchaseDetailLabel
                    className='purchase-detail__shipping'
                    title='Shipping Address'
                    value={`${name}\n${shippingAddress}`} />
                <PurchaseDetailLabel
                    className='purchase-detail__total'
                    title='Total'
                    value={total} />
                <PurchaseDetailLabel
                    className='purchase-detail__credit-card'
                    title='Credit Card'
                    value={creditCard} />
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail; 