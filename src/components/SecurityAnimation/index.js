import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import { Wrapper, ColWrapper, DivWrapper, Icon, FontSize } from './styles';

export default function SecurityAnimation({ opacityControl }) {
  return (
    <Wrapper>
      <Motion
        defaultStyle={{
          fontSize: 25,
          iconSize: 60,
          opacity: 0,
        }}
        style={{
          opacity: spring(opacityControl, { stiffness: 200, damping: 100 }),
          fontSize: spring(45, { stiffness: 200, damping: 100 }),
          iconSize: spring(120, { stiffness: 200, damping: 100 }),
        }}
      >
        {(style) => (
          <ColWrapper
            style={{
              opacity: style.opacity,
            }}
          >
            <DivWrapper>
              <Icon size={style.iconSize} />
              <FontSize
                style={{
                  fontSize: style.fontSize,
                }}
              >
                Seus dados estão sendo protegidos.
              </FontSize>
            </DivWrapper>
          </ColWrapper>
        )}
      </Motion>
    </Wrapper>
  );
}

SecurityAnimation.propTypes = {
  opacityControl: PropTypes.number.isRequired,
};
