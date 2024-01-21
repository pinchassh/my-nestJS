import AddressInterface from './AddressInterface';
import CityBoard from './CityBoard';
import ImageInterface from './ImageInterface';
import NameInterface from './NameInterface';

interface RegisterInterface {
  _id?: string;
  email: string;
  password: string;
  phone: string;
  name: NameInterface;
  address: AddressInterface;
  image: ImageInterface;
  createdAt: Date;
  cityBoard: CityBoard;
  isAdmin: boolean;
  status: 'customer' | 'user';
  package: {} | {
    len: { 3: 20 } | { 6: 35 } | { 12: 60 };
    buyAt: Date
  }
  __v?: number;
}

export default RegisterInterface;
