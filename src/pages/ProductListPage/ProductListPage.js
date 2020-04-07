import React, { Component } from 'react';
import ProductList from '../../components/ProductList/productList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import axios from 'axios';
import callApi from '../../utils/apiCaller';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] }
    }

    componentDidMount() {
        this.onGetData();
    }

    onGetData() {
        callApi('product', 'GET', null).then(res => {
            console.log(res);
            this.setState({ products: res.data })
        });
    }

    showProduct(products) {
        var result = null;
        if (products && products.length > 0) {
            result = products.map((val, index) => {
                return <ProductItem key={index} keyItem={index + 1} productInfo={val} />
            })
        }
        return result;
    }

    render() {
        // var {products} = this.props;
        var { products } = this.state;
        return (
            <div>
                <div>
                    <div className="justify-content-between d-flex m-3">
                        <Link to="/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
                        <h2>Danh sách sản phẩm</h2>
                    </div>
                </div>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);
