import Image from 'react-bootstrap/Image';
import notFound from '../assets/images/notfound.gif';

export default function NotFound() {
  return (
    <>
      <h1 className="text-white text-center mt-5">Page could not be found</h1>
      <Image
        className="text-center fluid rounded mx-auto d-block"
        src={notFound}
      />
    </>
  );
}
