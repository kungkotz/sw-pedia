import loading from '../assets/images/loading.gif';
export default function Loading() {
  return (
    <div className="loading-container text-center mt-5 pt-5">
      <img className=" rounded-circle" src={loading} alt="Loading gif" />
    </div>
  );
}
