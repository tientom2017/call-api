import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var {keyItem, productInfo} = this.props;
        var status = productInfo.status ? 'Còn hàng' : 'Hết hàng'
        return (
            <tr>
                <td scope="row">{keyItem}</td>
                <td>{productInfo.id}</td>
                <td>{productInfo.name}</td>
                <td>{productInfo.price}</td>
                <td><span className="label label-warning">{status}</span></td>
                <td>
                    <button className="btn btn-primary mr-2">Sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;