import React from 'react';
import Cards from 'react-credit-cards';
import {
  Input,
  DivGeral,
  DivOne,
  DivTwo,
  DivFlex,
  CVC
} from './styles';
import 'react-credit-cards/es/styles-compiled.css';
import CardRegexValidator from '~/utils/CardValidator';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    const formatValue = CardRegexValidator(name, value);
    console.log(formatValue);
    this.setState({ [name]: formatValue });
  }

  render() {
    return (
      <DivGeral>
        <DivOne lg="6">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            placeholders={{
              name: 'NOME COMPLETO'
            }}
            callback={(e, isValid) => console.log(isValid)}
          />
        </DivOne>
        <DivTwo lg="6">
          <form>
            <Input
              type="tel"
              name="number"
              maxLength={23}
              placeholder="Número do cartão"
              value={this.state.number}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
             <Input
              name="name"
              placeholder="Nome completo"
              value={this.state.name}
              maxLength={35}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <DivFlex>
             <Input
                name="expiry"
                maxLength={7}
                placeholder="Validade MM/AAAA"
                value={this.state.expiry}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <CVC
                name="cvc"
                maxLength={3}
                placeholder="CVC"
                value={this.state.cvc}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </DivFlex>
          </form>
        </DivTwo>
      </DivGeral>
    );
  }
}
