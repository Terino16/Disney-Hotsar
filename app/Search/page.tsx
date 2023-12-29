
import SearchBannerWrapper from '@/components/SearchBannerWrapper';
import SearchInput from '@/components/SearchInput';
const Page =()=>{
    return (
      <div>
          <div className='flex items-center justify-between p-10 '>
             <SearchInput/>
          </div>

        <div className='p-10 bg-darkblue text-white'>
         <SearchBannerWrapper/>
        </div>
      </div>
    );
  };
  
  export default Page;
  