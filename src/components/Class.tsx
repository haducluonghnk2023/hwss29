import React, { Component } from 'react'

export default class Class extends Component {
    // nơi khai báo cá phương thức
    handleClick = () => {
        console.log("sự kiện click")
    }
    handleUpdate = (usedID:any)=> {
        console.log(userID);
        
    }
    // truyền để lấy tham số
  render() {
    return (
      <div>Class
        <button onClick={this.handleClick}>click</button>
        <p onClick={()=>this.handleUpdate(11)}>minh thu</p>
      </div>
    )
  }
}
