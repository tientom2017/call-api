import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked: target.value;
        this.setState({
            [name]: value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        var {name, price, status} = this.state;
        var data = {
            name: name,
            price: price,
            status: status
        }
        callApi('product', 'POST', data).then(res => {
            alert('Thêm thành công!')
        })
    }

    render() {
        var {name, price, status} = this.state;
        return (
            <div className="container text-left">
                <form className="col-md-4" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Tên:</label>
                        <input type="text" className="form-control" onChange={this.onChange} name="name" value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Giá:</label>
                        <input type="number" className="form-control" onChange={this.onChange} name="price" value={price} />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" onChange={this.onChange} name="status" value={status} /> Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;