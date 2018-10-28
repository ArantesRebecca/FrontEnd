import styled from 'styled-components';
import MuiChip from '@material-ui/core/Chip';

export const Chip = styled(MuiChip)`
  padding: 0 12px;
  margin-right: 8px;
  height: 24px;
  background-color: ${props => props.isSelected ? '#47286E' : 'white'};
  font-size: 12px;
  color: ${props => props.isSelected ? 'white' : '#383838'};

  @media(min-width: 768px) {
    font-size: 10px;
    padding: 0 8px;
  }

  @media(min-width: 992px) {
    font-size: 12px;
    padding: 0 12px;
  }
`;
