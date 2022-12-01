import { Component } from "react";
import { BsSearch } from "react-icons/bs";


export class PokemonForm extends Component{
    state = {
      pokemonName:'',
    }
    
    handleNameChange = e => {
        this.setState({pokemonName:e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            alert("Введите имя Покемона");
            return
        }
          this.props.onSearch(this.state.pokemonName);
        this.setState({pokemonName:''})
    }

    render() {
        const { pokemonName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='pokemonName'
                    value={pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type="submit" >
                    <BsSearch/>
                    Search</button>
            </form>
        )
    }
}