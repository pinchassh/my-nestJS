import AddressInterface from './AddressInterface';
import CityBoard from './CityBoard';
import ImageInterface from './ImageInterface';
import NameInterface from './NameInterface';

interface UserFromClientInterface {
  email: string;
  password: string;
  phone: string;
  name: NameInterface;
  address: AddressInterface;
  image: ImageInterface;
  cityBoard: CityBoard;
}

export default UserFromClientInterface;
