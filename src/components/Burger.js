import React, { Component } from 'react';
import './Burgerstyle.css'
import Popup from './Popup'

class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
        price: 0,
        order:false

    }

    /*
    Prices
    ------
    lettuce:30
    tomato:20
    cheese:70
    meat:100
    */


    // add function
    addIngredient = (ing) => {

        switch (ing) {
            case 'lettuce':
                this.setState({
                    lettuce: this.state.lettuce + 1,
                    price: this.state.price + 30
                })

                // console.log(stateValue)
                break;

            case 'tomato':
                this.setState({
                    tomato: this.state.tomato + 1,
                    price: this.state.price + 20
                })

                break
            case 'cheese':
                this.setState({
                    cheese: this.state.cheese + 1,
                    price: this.state.price + 50
                })
                break;
            case 'meat':
                // stateValue=this.state.meat;
                // stateValue=stateValue+1
                this.setState({
                    meat: this.state.meat + 1,
                    price: this.state.price + 100
                })
                break;

            default:
                break
        }



    }
    // delete function
    delIngredient = (ing) => {

        switch (ing) {
            case 'lettuce':
                if (this.state.lettuce > 0) {
                    this.setState({
                        lettuce: this.state.lettuce - 1,
                        price: this.state.price - 30
                    })
                }
                else
                    console.log('eroor')
                // console.log(stateValue)
                break;
            case 'tomato':
                if (this.state.tomato > 0) {
                    this.setState({
                        tomato: this.state.tomato - 1,
                        price: this.state.price - 20
                    })
                }

                break
            case 'cheese':
                if (this.state.cheese > 0) {
                    this.setState({
                        cheese: this.state.cheese - 1,
                        price: this.state.price - 50
                    })
                }
                else
                    console.log('eroor')
                break;
            case 'meat':
                // stateValue=this.state.meat;
                // stateValue=stateValue+1
                if (this.state.meat > 0) {
                    this.setState({
                        meat: this.state.meat - 1,
                        price: this.state.price - 100

                    })
                }

                else
                    console.log('eroor')

                break;

            default:
                break
        }

    }
// burgercontent
    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let burger = []

        // outputting  contents in burger
        for (let i = 0; i < lettuce; i++) {
            burger.push(<div key={burger.length} className='brgrlettuce'></div>)
        }
        for (let i = 0; i < tomato; i++) {
            burger.push(<div key={burger.length} className='brgrtomato'></div>)
        }
        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className='brgrcheese'></div>)
        }
        for (let i = 0; i < meat; i++) {
            burger.push(<div key={burger.length} className='brgrmeat'></div>)
        }
        return burger
    }
    popupOpen=this.state.order

    handlingOrder=()=>{
        if(this.state.price>0){
            this.setState({
                order:true
            })
        }
        
        return this.state.order
    }

    closePopup=()=>{
        if(this.state.order===true){
            this.setState({
                order:false,
                price:0,
                lettuce:0,
                tomato:0,
                cheese:0,
                meat:0

            })
        }
        return this.state.order
    }

    render() {
        return (

            <>
                

                {/* my price and order Section */}
                <div className="priceOrderSec">
                    <div className="pricechart">
                        <h2>Ingredients Price List </h2>
                        <br />
                        <h3 className='items'>Lettuce: Rs. 30</h3>
                        <h3 className='items'>Tomato: Rs. 20</h3>
                        <h3 className='items'>Cheese: Rs. 70</h3>
                        <h3 className='items'>Meat: Rs. 100</h3>
                    </div>
                    <div className="orderbox">
                        <h2>Place Order</h2>
                        {/* showing price */}
                        <h3 className='items'>Your total price is: {this.state.price}</h3>
                        <button onClick={this.handlingOrder} className='btnorder'>Order Now</button>
                        <Popup trigger={this.state.order} close={this.closePopup}>
                            <h3>Your order is confirmed</h3>
                            <h2>Thank You</h2>

                        </Popup>
                    </div>

                </div>

                {/* my burger Section */}
                <div className="myburgerSection">
                    <div className="burgeringredients">
                        <div className="topside">

                        </div>
                        {this.burgerContent()}
                        <div className="bottomside">

                        </div>
                    </div>
                    <div className="ingredientssection">
                        {/* add lettuce */}
                        <div className="ingredient">
                            <p>Lettuce</p>
                            <div className="spacetoitem">
                                <button onClick={() => this.addIngredient('lettuce')} className='btn'>Add</button>
                                <button onClick={() => this.delIngredient('lettuce')} className='btn'>Del</button>
                            </div>
                        </div>
                        {/* add tomato */}
                        <div className="ingredient">
                            <p>Tomato</p>
                            <div className="spacetoitem">
                                <button onClick={() => this.addIngredient('tomato')} className='btn'>Add</button>
                                <button onClick={() => this.delIngredient('tomato')} className='btn'>Del</button>
                            </div>
                        </div>
                        {/*add cheese  */}
                        <div className="ingredient">
                            <p>Cheese</p>
                            <div className="spacetoitem">
                                <button onClick={() => this.addIngredient('cheese')} className='btn'>Add</button>
                                <button onClick={() => this.delIngredient('cheese')} className='btn'>Del</button>
                            </div>

                        </div>
                        {/* add meat */}
                        <div className="ingredient">
                            <p>Meat</p>
                            <div className="spacetoitem">
                                <button onClick={() => this.addIngredient('meat')} className='btn'>Add</button>
                                <button onClick={() => this.delIngredient('meat')} className='btn'>Del</button>
                            </div>
                        </div>



                    </div>
                </div>


            </>
        );
    }
}

export default Burger;