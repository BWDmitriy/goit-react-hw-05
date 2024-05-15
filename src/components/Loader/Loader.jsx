import { Oval } from 'react-loader-spinner';

export default function Loader({loaderClass}) {
    return (
      <div className={loaderClass}>
<Oval
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</div>
  );
}
