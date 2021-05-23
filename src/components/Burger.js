import React, { Component } from 'react';
import './Burgerstyle.css'

class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    // add function
    addIngredient = (ing) => {

        switch (ing) {
            case 'lettuce':
                this.setState({
                    lettuce: this.state.lettuce + 1
                })

                // console.log(stateValue)
                break;

            case 'tomato':
                this.setState({
                    tomato: this.state.tomato + 1
                })

                break
            case 'cheese':
                this.setState({
                    cheese: this.state.cheese + 1
                })
                break;
            case 'meat':
                // stateValue=this.state.meat;
                // stateValue=stateValue+1
                this.setState({
                    meat: this.state.meat + 1
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
                        lettuce: this.state.lettuce - 1
                    })
                }
                else
                    console.log('eroor')
                // console.log(stateValue)
                break;
            case 'tomato':
                if (this.state.tomato > 0)
                {
                this.setState({
                    tomato: this.state.tomato - 1
                })
                }

                break
            case 'cheese':
                if (this.state.cheese > 0) {
                    this.setState({
                        cheese: this.state.cheese - 1
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
                        meat: this.state.meat - 1

                    })
                }

                else
                    console.log('eroor')

                break;

            default:
                break
        }
        
    }

    burgerContent=()=>{
        let {
            lettuce,
            tomato ,
            cheese ,
            meat 
        }=this.state;

        let burger=[]

        // outputting  contents in burger
        for (let i=0;i<lettuce;i++){
            burger.push(<div key={burger.length} className='brgrlettuce'></div>)
        }
        for (let i=0;i<tomato;i++){
            burger.push(<div key={burger.length} className='brgrtomato'></div>)
        }
        for (let i=0;i<cheese;i++){
            burger.push(<div key={burger.length} className='brgrcheese'></div>)
        }
        for (let i=0;i<meat;i++){
            burger.push(<div key={burger.length} className='brgrmeat'></div>)
        }
        return burger
    }
    render() {
        return (

            <>
                <h1 className='heading'>MY BURGER APP</h1>
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

            </>
        );
    }
}

export default Burger;