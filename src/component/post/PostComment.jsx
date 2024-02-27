import React, { useState } from "react";

export const PostComment = () => {
  // State to manage modal visibility

  const [modalVisible, setModalVisible] = useState(false);
  const [showInstallMessage, setShowInstallMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loginMethod, setLoginMethod] = useState(""); // Tracks the chosen login method

  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
    // localStorage.setItem('isModalVisible', 'true');
    // window.location.reload();
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    // localStorage.setItem('isModalVisible', 'false');
    // window.location.reload();

    setTimeout(() => setIsLoggedIn(false), 300); // Reset login status after closing animation if any
  };
  const handleMetamaskLogin = async () => {
    if (window.ethereum) {
      // Check if Metamask is installed
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        }); // Request account access
        const account = accounts[0];
        console.log("Connected account:", account);
        // Proceed with the login process using the connected account
        setIsLoggedIn(true); // Assume login is successful
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      // Then, in your handleMetamaskLogin replace the alert with:
      if (!window.ethereum) {
        setShowInstallMessage(true);
        // You can also directly open the Metamask download page for them, but it's better to give users a choice
      } // Optionally, show a more integrated message in your UI instead of an alert
      // Redirect user or show instructions on how to install Metamask
      window.open("https://metamask.io/download.html", "_blank");
    }
  };
  const handleMetamaskSignup = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        console.log("Signing up with account:", account);
        // Here you would typically send the account address to your backend to create a new user
        setIsLoggedIn(true); // Assume signup is successful
      } catch (error) {
        console.error("Error signing up with Metamask:", error);
      }
    } else {
      setShowInstallMessage(true);
      // Redirect user or show instructions on how to install Metamask
      window.open("https://metamask.io/download.html", "_blank");
    }
  };
  return (
    <>
      {/* Rest of your PostComment component, now dimmed and set behind the modal when modalVisible is true */}
      <div className={modalVisible ? "opacity-50" : ""}>
        <div className="w-[448.72px] h-px bg-[url(public/images/e1166544-4b36-465c-af9d-7466ffb50191.png)] bg-cover bg-no-repeat relative z-[328]  mr-0 mb-0" />

        <div className="w-full max-w-[170%] h-[237px] bg-[#fff] rounded-[8px] relative overflow-hidden z-[333] mt-[62.341px]">
          <div className="flex w-[964px] flex-col items-start flex-nowrap bg-[rgba(217,217,217,0.5)] relative overflow-hidden z-[334] mt-[-0.29px] mr-0 mb-0 ml-0">
            <div className="flex w-[891px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] items-start shrink-0 flex-nowrap relative z-[335]">
              <div className="flex gap-[48px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[336]">
                <div className="flex w-[168px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[337]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/9a42d08f-179d-469c-9933-f7f5d9c01f4f.png)] bg-cover bg-no-repeat relative overflow-hidden z-[338]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/e07ffc58-b824-4396-9066-fde114347580.png)] bg-cover bg-no-repeat relative overflow-hidden z-[339]" />
                  <div className="w-[24px] h-[24px] s∂hrink-0 bg-[url(public/images/9eec3b0e-240e-45fc-af53-bc02cca47348.png)] bg-cover bg-no-repeat relative overflow-hidden z-[340]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/3905ccdf-a738-48da-a4fe-883134ffdfaf.png)] bg-cover bg-no-repeat relative overflow-hidden z-[341]" />
                </div>
                <div className="flex w-[168px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[342]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/93230d92-2470-46c1-892f-a778526cd330.png)] bg-cover bg-no-repeat relative overflow-hidden z-[343]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/3b04ad7a-c6ce-4033-8718-7a6573fc87eb.png)] bg-cover bg-no-repeat relative overflow-hidden z-[344]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/9afb4987-cad8-4b20-b81e-96f3c5c73000.png)] bg-cover bg-no-repeat relative overflow-hidden z-[345]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/d3d6ebbc-f149-47ca-bba3-7b15e35d0e16.png)] bg-cover bg-no-repeat relative overflow-hidden z-[346]" />
                </div>
                <div className="flex w-[168px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[347]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/7c22e680-9f58-4ce5-a1bb-c34d327d59b0.png)] bg-cover bg-no-repeat relative overflow-hidden z-[348]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/1c4443dd-7e2d-4233-95a8-a3f883701127.png)] bg-cover bg-no-repeat relative overflow-hidden z-[349]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/56edc8b8-0059-4359-9d01-6944e9a7553f.png)] bg-cover bg-no-repeat relative overflow-hidden z-[350]" />
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/40534f61-87b9-4d3b-afd7-351571d4f8fa.png)] bg-cover bg-no-repeat relative overflow-hidden z-[351]" />
                </div>
              </div>
              <div className="flex w-[120px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[352]">
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/a613639f-72e3-4d88-91e7-8e259bbc6d3c.png)] bg-cover bg-no-repeat relative overflow-hidden z-[353]" />
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/201ad8e2-3a43-487e-a488-b6aaf76dc5d1.png)] bg-cover bg-no-repeat relative overflow-hidden z-[354]" />
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/92eaa76f-7c82-449a-b826-a9a7242137da.png)] bg-cover bg-no-repeat relative overflow-hidden z-[355]" />
              </div>
            </div>
          </div>
          <div className="w-[1280px] h-[181px] relative z-[357] mt-[0.29px] mr-0 mb-0 ml-0">
            <div className="w-[964px] h-px bg-[url(public/images/f42a7a40-e10d-4032-9b7e-0863c0e3a27f.png)] bg-cover bg-no-repeat absolute top-[-1px] left-0 z-[356]" />
            <div className="w-[964px] h-[181px] bg-[rgba(217,217,217,0.3)] absolute top-0 left-0 z-[357]">
              <span className="flex h-[24px] justify-start items-start font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-[0.27px] absolute top-[20.608px] left-[32px] text-left whitespace-nowrap z-[358]">
                Text
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Trigger button to open modal */}
      <div
        className="flex w-[186px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] gap-[5px] items-center flex-nowrap bg-[#000] rounded-[22px] border-none relative z-[359] pointer mt-[28.699px] mr-0 mb-0 ml-[709px] "
        style={{ zIndex: modalVisible ? -1 : "auto" }} // Lower z-index when modal is visible
      >
        <button
          onClick={openModal}
          className="flex w-[156px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#fff] tracking-[0.27px] relative text-center whitespace-nowrap z-[360]"
          style={{ zIndex: modalVisible ? -1 : "auto" }} // Ensure button text also has adjusted z-index if necessary
        >
          Post your comment
        </button>
      </div>
      {modalVisible && (
        <div
          id="modalBackdrop"
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            className="main-container w-[500px] h-[500px] text-[0px] bg-[#fff] rounded-[20px] relative mx-auto my-0"
            onClick={(e) => e.stopPropagation()}
          >
            {!isLoggedIn ? (
              <>
                {loginMethod === "" ? (
                  // Initial Login Options
                  <div className="sign_up_2 flex flex-col justify-center items-center pt-[4.6875rem] pb-[4.625rem] pl-[7.5rem] pr-[7.375rem] w-[500px] rounded-[1.25rem] bg-white">
                    <div className="create_your_username w-[16.3125rem] h-9 text-black text-center font-['Barlow'] text-2xl font-medium leading-9">
                      {/* Create your username */}
                    </div>

                    <div className="frame_171 flex items-start">
                      <div
                        className="mt-20 mr-4 pl-4 text-lg flex items-start gap-2.5 py-1 px-2 rounded-[0.3125rem] border border-black bg-white text-black text-center font-['Barlow'] font-light leading-[1.5625rem]"
                        onClick={() => setLoginMethod("traditional")}
                      >
                        Sign Up
                      </div>
                      <div
                        className="mt-20 text-lg flex items-start gap-2.5 py-1 px-2 rounded-[0.3125rem] bg-black text-white text-center font-['Barlow'] font-light leading-[1.5625rem]"
                        onClick={() => setLoginMethod("metamask")}
                      >
                        Login
                      </div>
                    </div>
                  </div>
                ) : loginMethod === "metamask" ? (
                  // MetaMask Login Option
                  <div className="mt-12 flex flex-col items-center justify-center space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <h4>Login</h4>
                      <input
                        type="text"
                        placeholder="Username"
                        className="text-lg mt-4 px-4 py-2 border rounded"
                      />
                      Username
                      <input
                        type="password"
                        placeholder="Password"
                        className="text-lg px-4 py-2 border rounded"
                      />
                      Password
                      <button className="text-lg flex items-start gap-2.5 py-1 px-2 rounded-[0.3125rem] bg-black text-white text-center font-['Barlow'] font-light leading-[1.5625rem]">
                        Login
                      </button>
                      <h5>OR</h5>
                    </div>
                    <div className="flex items-center gap-5 py-1 px-5 w-72 h-10 rounded-[0.3125rem] border border-[#000000]/50">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d9d9d9]" />
                      <button
                        className="text-black font-['Barlow'] text-xs leading-6"
                        onClick={handleMetamaskLogin}
                      >
                        Login with Metamask
                      </button>
                    </div>
                  </div>
                ) : (
                  // Traditional Login Form
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="mt-12 sign_up_to_join_our_community w-72 h-[4.625rem] text-black text-center font-['Barlow'] text-2xl font-medium leading-9">
                      Sign up to join our community
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="text-lg mt-4 px-4 py-2 border rounded"
                    />
                    Create your username
                    <input
                      type="password"
                      placeholder="Password"
                      className="text-lg px-4 py-2 border rounded"
                    />
                    Create your password
                    <div className="flex items-center gap-5 py-1 px-5 w-72 h-10 rounded-[0.3125rem] border border-[#000000]/50">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d9d9d9]" />
                      <button
                        onClick={handleMetamaskSignup}
                        className="continue_with_metamask text-black font-['Barlow'] text-xs leading-6"
                      >
                        Sigu up with Metamask
                      </button>
                    </div>
                    <button className="text-lg flex items-start gap-2.5 py-1 px-2 rounded-[0.3125rem] bg-black text-white text-center font-['Barlow'] font-light leading-[1.5625rem]">
                      Sigu up
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Welcome Message Post Login
              <>
                <div className="sign_up_3 flex flex-col justify-center items-center pt-[4.6875rem] pb-[4.625rem] pl-[4.5625rem] pr-[4.5625rem] w-[500px] rounded-[1.25rem] bg-white">
                  <div className="w-[22.0625rem] h-[6.5rem] text-black/[.80] text-center font-['Barlow'] font-light leading-[1.5625rem]">
                    A verification email is sent to your inbox. Welcome
                  </div>
                  You have successfully logged in using MetaMask.
                  <div className="welcome_aboard_ w-[17.1875rem] h-9 text-black text-center font-['Barlow'] text-2xl font-medium leading-9">
                    Welcome aboard!
                  </div>
                  <div
                    onClick={closeModal}
                    className="mt-12 text-lg flex items-start gap-2.5 py-1 px-2 rounded-[0.3125rem] bg-black text-white text-center font-['Barlow'] font-light leading-[1.5625rem]"
                  >
                    Close
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
