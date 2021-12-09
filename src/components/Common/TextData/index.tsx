import Header from '../Header';
import { LocationResponse } from '../../../types/locationType';
import { TextDataHeader, TextDataWrapper } from './styledTextData';
import Details from '../Details/index';

interface Props {
  locationData: LocationResponse;
  header: string;
}

const TextData = ({ locationData, header }: Props) => (
  <TextDataWrapper>
    <TextDataHeader>
      <Header text={header} />
      {locationData?.location?.country_flag_emoji}
    </TextDataHeader>
    <div>
      <Details label="IP" value={locationData?.ip} />
      <Details label="Country" value={locationData?.country_name} />
      <Details label="City" value={locationData?.city} />
      <Details label="Continent" value={locationData?.continent_name} />
      <Details label="Region" value={locationData?.region_name} />
    </div>
  </TextDataWrapper>
);

export default TextData;
