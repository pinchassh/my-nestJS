interface AddressInterface {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip?: number;
  _id?: string;
}

export default AddressInterface;
