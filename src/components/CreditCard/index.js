import React from 'react';
import Cards from 'react-credit-cards';
import {
  Input,
  InputExpiry,
  DivGeral,
  DivOne,
  DivTwo,
  DivFlex,
  CVC,
  InputNumber,
  DivButton,
  DivNormal,
  DivWrapper
} from './styles';
import 'react-credit-cards/es/styles-compiled.css';
import CardRegexValidator from '~/utils/CardValidator';
import { isBefore } from 'date-fns';
import CreditButton from '../CreditButton';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    validExpiry: true,
    validNumber: true,
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    const formatValue = CardRegexValidator(name, value);
    this.setState({ [name]: formatValue });


    if (name === 'expiry') {
      const array = formatValue.split("/");
      const month_x = Number(array[0]) - 1;
      const year_x = Number(array[1]) + 2000;

      if ((month_x < 0 || month_x > 11) || new Date().getFullYear() > year_x) {
        this.setState({ validExpiry: false});
        return;
      }

      const currentDate = new Date().setDate(0);
      const date = new Date(year_x, month_x, 0);

      this.setState({ validExpiry: isBefore(currentDate, date) });
    }
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <DivWrapper>
        <DivGeral>
          <DivOne lg={{ span: 4 }}>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              placeholders={{
                name: 'NOME COMPLETO'
              }}
              callback={(e, isValid) => this.setState({
                validNumber: isValid
              })}
            />
          </DivOne>
          <DivTwo lg={{ span: 5 }}>
            <form className="w-100">
              <InputNumber
                type="tel"
                name="number"
                maxLength={23}
                placeholder="Número do cartão"
                value={this.state.number}
                validNumber={this.state.validNumber}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
               <Input
                name="name"
                placeholder="Nome completo"
                value={this.state.name}
                maxLength={35}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
              <DivFlex>
               <InputExpiry
                  name="expiry"
                  maxLength={5}
                  placeholder="Validade MM/AA"
                  validExpiry={this.state.validExpiry}
                  value={this.state.expiry}
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  required
                />
                <CVC
                  name="cvc"
                  maxLength={3}
                  placeholder="CVC"
                  value={this.state.cvc}
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  required
                />
              </DivFlex>
            </form>
          </DivTwo>
        </DivGeral>

        <DivNormal>
          <DivButton lg="6">
            <CreditButton
              onClick={this.handleSubmit}
              animation={this.props.animation}
              outcome={this.props.outcome}
            />
          </DivButton>
        </DivNormal>
      </DivWrapper>
    );
  }
}
