import { LocationResponse } from '../../../types/locationType';
import Details from '../Details/index';

interface Props {
  locationData: LocationResponse;
}

const TextData = ({ locationData }: Props) => (
  <div>
    {locationData?.location?.country_flag_emoji}
    <Details label="Country" value={locationData?.country_name} />
    <Details label="City" value={locationData?.city} />
  </div>
);

export default TextData;
