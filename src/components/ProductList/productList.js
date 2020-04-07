import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default ProductList;