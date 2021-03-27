import { Label, MetaInfoWrapper, Value } from './styles';
import PropTypes from 'prop-types';

const MetaInfo = ({ label, value }) => {
  return (
    <MetaInfoWrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </MetaInfoWrapper>
  );
};

MetaInfo.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default MetaInfo;
