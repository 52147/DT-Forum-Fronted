import React, { useState } from 'react';

function SignUpModal() {
  // State to manage the visibility of the modal
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the modal's visibility
  const toggleModal = () => setIsVisible(!isVisible);

  // Function to close the modal if the backdrop is clicked
  const closeModal = (e) => {
    if (e.target.id === 'modalBackdrop') {
      setIsVisible(false);
    }
  };

  return (
    <>
      <button onClick={toggleModal}>Sign Up</button>
      {isVisible && (
        <div
          id="modalBackdrop"
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div
            className="main-container w-[500px] h-[500px] text-[0px] bg-[#fff] rounded-[20px] relative mx-auto my-0"
            onClick={(e) => e.stopPropagation()} // Prevent click through to the backdrop
          >
            <span className="flex w-[288px] h-[74.691px] justify-center items-start font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000] tracking-[-0.36px] relative text-center mt-[75px] mr-0 mb-0 ml-[106px]">
              Sign up to join our community
            </span>
            <div className='flex w-[288px] flex-col gap-[35px] items-start flex-nowrap relative z-[1] mt-[40.309px] mr-0 mb-0 ml-[106px]'>
              <button className='flex w-[288px] h-[40px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] gap-[20px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[rgba(0,0,0,0.5)] relative z-[2] pointer'>
                <div className='w-[24px] h-[24px] shrink-0 bg-[#d9d9d9] relative z-[3]' />
                <span className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-[0.27px] relative text-left whitespace-nowrap z-[4]">
                  Continue with Metamask
                </span>
              </button>
              {/* More buttons for other sign-up options */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpModal;
