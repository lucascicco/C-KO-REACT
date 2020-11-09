import React from 'react';
import { Motion, spring } from 'react-motion';
import { Wrapper, ColWrapper, DivWrapper, Icon, FontSize } from './styles';

export default function SecurityAnimation({}) {
  return (
    <Wrapper>
      <Motion
        defaultStyle={{
          fontSize: 25,
          iconSize: 60,
          opacity: 0,
        }}
        style={{
          opacity: spring(1),
          fontSize: spring(45),
          iconSize: spring(120),
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
