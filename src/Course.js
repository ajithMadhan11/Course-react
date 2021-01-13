import React,{Component} from 'react';

class Course extends Component {

sumPrice(price){
  this.setState({total:this.state.total + price})
}

constructor(props){
  super(props);

  this.state = {
    total:0
  };
  this.sumPrice=this.sumPrice.bind(this);
}


  render(){
    var Courses=this.props.items.map((item,i)=>{
      return <CourseList name={item.name} price={item.price} sumPrice={this.sumPrice} key={i} active={this.active}/>
    })
    return(
      <div>
          <h1 >The Available Courses are:</h1>
              <div id="courses">
              {Courses}
                <p id="total">Total: <b>{this.state.total}</b></p>
              </div>


      </div>
    );
  }
}

class CourseList extends Component {
  clicker(){
    var active=!this.state.active;
    this.setState({active:active})
    this.props.sumPrice(active ? this.props.price : -this.props.price)
  }
  constructor(props){
    super(props);

    this.state = {
      active:false
    };
    this.clicker=this.clicker.bind(this);
  }

  render(){
    return(
      <div>
          <p className={this.state.active?'active':''} onClick={this.clicker}>{this.props.name} : <b>{this.props.price}</b></p>
      </div>
    );
  }
}
export default Course;
