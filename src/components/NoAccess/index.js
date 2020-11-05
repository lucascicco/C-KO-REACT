import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';

import { GeralDiv, ItemTwo, Wrapper, Title, Text } from './styles';

export default function Error() {
  return (
    <GeralDiv>
      <Wrapper>
        <Title className="display-4">Acesso negado</Title>
        <ItemTwo lg="12">
          <BiErrorAlt size={120} />
          <Text>
            Lamentamos pelo erro, mas o acesso direto a essa página está
            proibido a você. Tente mais tarde, ou acesse a rota corretamente.
            Equipe, CKO. Agradece.
          </Text>
        </ItemTwo>
      </Wrapper>
    </GeralDiv>
  );
}
